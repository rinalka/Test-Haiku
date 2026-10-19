'use strict';

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4.1';

app.use(express.json({limit: '1mb'}));
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    hasKey: Boolean(OPENAI_API_KEY)
  });
});

// Feed relay limited to URLs listed in sources.js.
global.window = global.window || {};
require('./sources.js');
const FEED_URLS = new Set(
  Object.values(global.window.SOURCES)
    .flat()
    .map(source => source && source.url)
    .filter(Boolean)
);

app.get('/api/feed', async (req, res) => {
  const url = (req.query.url || '').toString();
  if (!FEED_URLS.has(url)) {
    return res.status(400).json({error: 'Feed not in sources.js'});
  }

  try {
    const response = await fetch(url, {
      headers: {'User-Agent': 'Mozilla/5.0 (HighQ feed reader)'},
      timeout: 15000
    });
    if (!response.ok) {
      return res.status(502).json({error: `Feed request failed (${response.status})`});
    }
    res.type('application/xml').send(await response.text());
  } catch (err) {
    res.status(502).json({error: 'Feed request failed', details: err.message});
  }
});

// Page scraper for sites without feeds, limited to pageSources in sources.js.
const PAGE_SOURCES = new Map(
  (global.window.SOURCES.pageSources || []).map(source => [source.index, source])
);
const pageIndexCache = new Map();
const PAGE_INDEX_TTL_MS = 6 * 60 * 60 * 1000;

const decodeEntities = s => s
  .replace(/&nbsp;/g, ' ')
  .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;|&rsquo;|&lsquo;/g, '\'')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const htmlToLines = html => decodeEntities(
  html.replace(/<br\s*\/?>|<\/p>|<\/h\d>/gi, '\n').replace(/<[^>]+>/g, '')
).split('\n').map(line => line.replace(/\s+/g, ' ').trim()).filter(Boolean);

const CHORD_LINE = /^(?:\s*[A-G][#b]?(?:m|maj|min|dim|aug|sus|add)?\d*(?:\/[A-G][#b]?)?\s*)+$/;

const PAGE_EXTRACTORS = {
  // Lyrics in a <pre> chord sheet: drop chord rows and credits.
  chordsheet: html => {
    const pre = (html.match(/<pre[^>]*>([\s\S]*?)<\/pre>/i) || [])[1] || '';
    return htmlToLines(pre.replace(/<big[\s\S]*?<\/big>\s*<\/big>/i, ''))
      .filter(line => !CHORD_LINE.test(line))
      .filter(line => !/^(recorded by|written by|repeat\b|instrumental)/i.test(line));
  },
  // Plain lyric lines each ending in <br>.
  brlines: html => (html.match(/^[ \t]*[^<>{}=;\n]+<br>\s*$/gm) || [])
    .flatMap(htmlToLines),
  // Translated poem body on Modern Poetry in Translation.
  mptpoem: html => {
    const start = html.indexOf('singlepoemmeta__poemcontent');
    if (start < 0) {
      return [];
    }
    const body = html.slice(start, html.indexOf('</div>', start));
    return htmlToLines(body.slice(body.indexOf('>') + 1));
  }
};

async function fetchPageText(url) {
  const response = await fetch(url, {
    headers: {'User-Agent': 'Mozilla/5.0 (HighQ page reader)'},
    timeout: 15000
  });
  if (!response.ok) {
    throw Error(`request failed (${response.status})`);
  }
  return response.text();
}

async function pageLinks(source) {
  const cached = pageIndexCache.get(source.index);
  if (cached && Date.now() - cached.at < PAGE_INDEX_TTL_MS) {
    return cached.links;
  }

  const html = await fetchPageText(source.index);
  const pattern = new RegExp(source.linkPattern);
  const raw = [...html.matchAll(/href="([^"]+)"|<loc>([^<]+)<\/loc>/g)].map(m => m[1] || m[2]);
  const links = [...new Set(raw.map(href => new URL(decodeEntities(href), source.index).href))]
    .filter(href => pattern.test(href));
  pageIndexCache.set(source.index, {at: Date.now(), links});
  return links;
}

app.get('/api/page', async (req, res) => {
  const source = PAGE_SOURCES.get((req.query.index || '').toString());
  if (!source) {
    return res.status(400).json({error: 'Page source not in sources.js'});
  }

  try {
    const links = await pageLinks(source);
    if (!links.length) {
      return res.status(502).json({error: 'No pages found in index'});
    }

    // A few tries, since some pages have no usable text.
    for (let attempt = 0; attempt < 3; attempt++) {
      const link = links[Math.floor(Math.random() * links.length)];
      const lines = PAGE_EXTRACTORS[source.extract](await fetchPageText(link));
      if (lines.length < 2) {
        continue;
      }

      // A random run of consecutive lines, roughly a verse's worth.
      const start = Math.floor(Math.random() * Math.max(1, lines.length - 3));
      let text = '';
      for (let i = start; i < lines.length && text.length < 200; i++) {
        text += (text ? ' ' : '') + lines[i];
      }
      return res.json({text, link});
    }

    return res.status(502).json({error: 'No usable text on sampled pages'});
  } catch (err) {
    return res.status(502).json({error: 'Page request failed', details: err.message});
  }
});

// Expressive poem reading via OpenAI text-to-speech; the browser voice is the fallback.
const TTS_MODEL = process.env.TTS_MODEL || 'gpt-4o-mini-tts';
const TTS_VOICE = process.env.TTS_VOICE || 'coral';
const TTS_INSTRUCTIONS = `Perform this strange found poem like a poet at a live reading, with real emotion and over the top drama.
Speak slowly. Pause at the end of every line, and take a long, dramatic pause at each blank line between stanzas.
Let your voice rise and fall: wonder, longing, sudden urgency, hushed intimacy, as if every odd phrase means something deep to you.
Lean into repeated words and comparisons. Slow down on the last lines, but speak every line clearly and audibly, including the very last one.`;

app.post('/api/speak', async (req, res) => {
  try {
    if (!OPENAI_API_KEY) {
      return res.status(500).json({error: 'OPENAI_API_KEY is missing on server'});
    }

    const text = (req.body?.text || '').toString().trim().slice(0, 3000);
    if (!text) {
      return res.status(400).json({error: 'No text provided'});
    }

    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: TTS_MODEL,
        voice: TTS_VOICE,
        // Trailing pause gives the model room so it doesn't clip the final line.
        input: `${text}\n\n…`,
        instructions: TTS_INSTRUCTIONS,
        response_format: 'mp3'
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({
        error: `OpenAI speech request failed (${response.status})`,
        details: errText.slice(0, 2000)
      });
    }

    res.type('audio/mpeg').send(await response.buffer());
  } catch (err) {
    return res.status(500).json({error: 'Speak endpoint failed', details: err.message});
  }
});

app.post('/api/rewrite', async (req, res) => {
  try {
    if (!OPENAI_API_KEY) {
      return res.status(500).json({error: 'OPENAI_API_KEY is missing on server'});
    }

    const prompt = (req.body?.prompt || '').toString().trim();
    const lines = Array.isArray(req.body?.lines)
      ? req.body.lines.map(x => (x || '').toString().trim()).filter(Boolean)
      : [];

    if (!lines.length) {
      return res.status(400).json({error: 'No source lines provided'});
    }

    const fullPrompt = [
      prompt,
      '',
      'source lines:',
      lines.map((line, idx) => `${idx + 1}. ${line}`).join('\n')
    ].join('\n');

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        input: [
          {
            role: 'user',
            content: [{type: 'input_text', text: fullPrompt}]
          }
        ]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({
        error: `OpenAI request failed (${response.status})`,
        details: errText.slice(0, 2000)
      });
    }

    const payload = await response.json();
    let text = '';

    if (typeof payload.output_text === 'string' && payload.output_text.trim()) {
      text = payload.output_text.trim();
    } else {
      const pieces = [];
      (payload.output || []).forEach(item => {
        (item.content || []).forEach(part => {
          if (part.type === 'output_text' && part.text) {
            pieces.push(part.text);
          }
        });
      });
      text = pieces.join('\n').trim();
    }

    if (!text) {
      return res.status(502).json({error: 'Model returned no text'});
    }

    return res.json({text});
  } catch (err) {
    return res.status(500).json({
      error: 'Rewrite endpoint failed',
      details: err.message
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`HighQ server running on http://localhost:${PORT}`);
});
