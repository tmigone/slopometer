# Slopometer

Paste some text. Find out if it's AI slop.

A textbox, a button, a number. The judging is done by [JEV](https://docs.typesafe.ai/introduction),
TypeSafe's System One model — one `score` question for the verdict plus four `noul`
questions for the breakdown, all in a single API call.

## Run it

```bash
npm install
cp .env.example .env   # then paste your key from https://console.typesafe.ai/settings/keys
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

Output is a standalone Node server (`dist/server/entry.mjs`). The page itself is static;
only `/api/check` renders on demand, so the API key never leaves the server.

## How it scores

`src/pages/api/check.ts` sends the text as `state` and asks:

- **slop** — a 5-level `score` rubric from "unmistakably human" to "unmistakably AI slop".
  The returned position is normalised to 0–100.
- **hedging / filler / cliches / specifics** — `noul` questions, each returning a 0–1
  probability, shown as the signal bars.
