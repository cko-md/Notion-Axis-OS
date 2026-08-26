# AXIS · Notion asset host + live embeds

Next.js app deployed to Vercel as `notion-axis-os` (team `cko-s-projects`), serving:

- `/` — status page: shows whether `NOTION_TOKEN` is configured, lists live embeds and static assets.
- `/embed/command-strip` — the live 4-tile metric strip embedded on the Command page in the AXIS Notion workspace. Reads the Command database directly via the Notion API at request time; renders an honest "SETUP REQUIRED" state until `NOTION_TOKEN` is set.
- `/ds/*` — the AXIS design-system tokens and pattern CSS (`styles.css`, `tokens/*.css`, `patterns/*.css`), unmodified, plus the compiled component bundle `_ds_bundle.js`.
- `/icons/*.png` — 32 module/section-group glyphs.
- `/covers/*.png` — 9 section-group cover images.

Icons and covers are hosted here so Notion's `icon`/`cover` page parameters (which accept an external URL but not a `file-upload://` reference) can address them by URL.

## Setup

1. `npm install`
2. Create a Notion internal integration and copy its secret.
3. Share the `Command` database (in `_Databases`) with that integration.
4. Set `NOTION_TOKEN` (and optionally `NOTION_COMMAND_DB_ID`, which defaults to Command's known database id) as environment variables on the Vercel project, then redeploy — or run `npm run dev` locally with the same variables in `.env.local`.

## Deploy

This project was first deployed via Vercel's manual file-upload path (no git yet). Once this repo has real commits, reconnect the Vercel project (`notion-axis-os`) to it in the Vercel dashboard for git-based deploys — every push to `main` then redeploys automatically.

See `axis-notion-translation-spec.md` in the AXIS Notion workspace project (claude.ai) for the full design-to-Notion translation spec, including the embed-layer rationale and build order.
