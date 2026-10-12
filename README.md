# HighQ

HighQ is a browser-based found-poetry generator that pulls text from random sources, builds a prompt bundle, sends it to OpenAI, then reads the returned poem aloud with the browser speech synthesizer.

## Local development

1. Copy `.env.example` to `.env`
2. Add your OpenAI API key in `.env`
3. Run:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production deployment

This project is set up for a Node host such as Render.

### Render

1. Push this repo to GitHub
2. Create a new Web Service on Render
3. Connect the repo
4. Keep the default Node environment
5. Set the environment variable:
   - `OPENAI_API_KEY`
6. Optional:
   - `OPENAI_MODEL=gpt-4.1-mini`
7. Deploy

The app serves its own frontend and backend on the same URL, so the Chromebook experience stays the same as the local version.

## App behavior

- finds source lines from feeds / topics / weather data
- builds a prompt bundle from those lines
- sends the lines + prompt to the server
- server calls OpenAI
- browser reads the returned poem aloud

## Important note

The OpenAI API key must live on the server, not in the browser, to keep it secure.
