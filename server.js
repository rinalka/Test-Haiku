'use strict';

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4.1-mini';

app.use(express.json({limit: '1mb'}));
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    hasKey: Boolean(OPENAI_API_KEY)
  });
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
