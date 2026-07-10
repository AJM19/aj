# Handoff: Fantasy Football AI Assistant (Dynasty)

> Context carried over from a prior Claude Code session. If you're a fresh
> session picking this up: read this file top to bottom, then continue from
> **Next steps**.

## What we're building

An AI-powered fantasy football assistant for **Sleeper dynasty leagues**,
targeting the **2026 NFL season**. It helps drive decisions:

- **Set lineup** — who to start each week
- **Waiver-wire pickups** — trending adds/drops vs. roster gaps
- **Trade suggestions** — grounded in dynasty value (age curves, picks,
  contend-vs-rebuild posture), not just weekly points
- **News-aware** — a bi-daily job ingests user-provided news sources so
  recommendations react to injuries / role changes / hot streaks

**Dynasty is the key framing:** reasoning must weigh the *future* (player
age, rookie/pick value, long-term equity), not only this week.

## Architecture (decided)

```
Sleeper API ──┐
              ├──► backend (assembles context) ──► Claude ──► recommendations
News sources ─┘        (bi-daily ingestion)         (reasoning)
```

This is an **AI app on top of an existing model (Claude via API)** — NOT a
trained-from-scratch model. No GPUs, no training runs. "Train over time" =
refine prompts, add data sources, tune logic iteratively.

## Stack (decided)

- **Next.js + TypeScript** — React frontend + API routes in one repo
  (user already works in React/TS; portfolio repo uses it)
- **Anthropic SDK** (`@anthropic-ai/sdk`) — Claude does the reasoning.
  Use the latest capable model (check the `claude-api` skill for current
  model IDs before writing model-calling code).
- **Sleeper API** — free, **read-only, no API key**. Base:
  `https://api.sleeper.app/v1/`
- Deploy target: **Railway** (user already uses it) or Vercel

### Sleeper API notes

- `GET /user/{username}` → user object with `user_id`
- `GET /user/{user_id}/leagues/nfl/2026` → leagues
- `GET /league/{league_id}/rosters` → rosters
- `GET /league/{league_id}/users` → league members
- `GET /league/{league_id}/matchups/{week}` → matchups
- `GET /players/nfl` → **~5MB**, cache daily (do NOT refetch per request)
- `GET /players/nfl/trending/add` and `/trending/drop` → waiver signal
- **No news feed** in Sleeper → news comes from user's own sources
- **No write access** → tool *recommends*; user submits lineups in the app

## Key facts

- **Sleeper username:** `ajmilbauer9`
- **Season:** 2026
- **League type:** dynasty (multiple leagues expected)
- **News:** user will provide several sources, ingested **bi-daily**
  (twice/day). Formats TBD — ASK which providers/URLs and whether they're
  RSS / JSON API / HTML.

## Environment / network

- The dev sandbox blocks outbound HTTPS except an allowlist. `api.sleeper.app`
  was **not** reachable in the original session (proxy 403).
- User was widening network access: environment settings → **Network access**
  → **Custom** → **Allowed domains** add `api.sleeper.app` (+ news domains),
  keep "include default package managers" checked. Takes effect on a **new**
  session.
- **Verify connectivity first thing:**
  `curl -sS -w "\n%{http_code}\n" https://api.sleeper.app/v1/user/ajmilbauer9`
  A 200 with JSON = network is open. A 403 CONNECT = still blocked; the new
  session didn't pick up the policy change (report it, don't route around).

## Milestones

1. **Connect to Sleeper** — username → leagues → current roster (proves pipe)
2. **First AI feature** — "who should I start this week?" (roster + matchup + Claude)
3. **News ingestion** — bi-daily pull of user sources, feed into recommendations
4. **Waivers, then trades** — layer on harder dynasty reasoning

## Next steps (for the fresh session)

1. Run the connectivity check above. Confirm Sleeper is reachable.
2. Decide repo: user wants a **new repo** for this (not the portfolio repo
   `AJM19/aj` this doc lives in). Confirm whether to scaffold here on the
   branch or create a separate repo.
3. Scaffold Next.js + TypeScript, add `@anthropic-ai/sdk`.
4. Build **Milestone 1** against live data for `ajmilbauer9`.
5. Ask the user for their **news source domains/URLs + formats**.
