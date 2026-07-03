# JetBrains AI Cheat Sheets

Automated pipeline that generates dense, printable HTML cheat sheets for the
JetBrains AI tools — **Junie**, **AI Assistant**, and **JetBrains Air** — from
their official documentation.

Each cheat sheet is built in three stages:

1. **Crawl** (`tooling/src/stages/crawl.ts`) — a keyless Playwright crawler
   snapshots each product's docs as markdown into `crawled-docs/<product>/`.
   The snapshots are committed, so later stages work even when a crawl fails.
2. **Extract** (`tooling/src/stages/extract.ts`) — Claude (via Amazon Bedrock)
   distills the crawled docs plus a curated editorial seed
   (`tooling/data/editorial/<product>.md`) into structured JSON
   (`tooling/data/<product>.json`) through a forced tool call, validated with
   zod and sanitized against an HTML allowlist.
3. **Render** (`tooling/src/stages/render.ts`) — Nunjucks templates turn the
   JSON into static HTML in `dist/`, plus a landing page (`dist/index.html`).

## Quick start

```bash
cd tooling
npm ci

# Render-only (uses committed snapshots + JSON; no secrets needed):
npm run build -- --skip-crawl --skip-extract

# Full pipeline (needs Bedrock credentials in tooling/.env — see .env.example):
npx playwright install chromium   # once, for the crawler
npm run build

# Single product:
npm run build:one -- junie
```

Individual stages can also be run standalone:

```bash
npm run crawl   -- junie   # crawled-docs/junie/*.md
npm run extract -- junie   # tooling/data/junie.json
npm run render  -- junie   # dist/junie.html
```

## Configuration

- **Products** are declared in `tooling/src/config/products.ts` (crawl seeds,
  include-path filters, docs hub URL, accent colors, output file). Adding a
  product means one entry there plus an editorial seed markdown file.
- **Secrets** live in `tooling/.env` (git-ignored); copy
  `tooling/.env.example` and fill in `AWS_BEARER_TOKEN_BEDROCK` (or standard
  AWS credentials) and `AWS_REGION`. Only the extract stage needs them.
- **Model** defaults to `global.anthropic.claude-sonnet-4-6`; override with
  `BEDROCK_MODEL_ID`.

## CI / publishing

`.github/workflows/cheatsheets.yml` runs the full pipeline weekly (and on
manual dispatch), syncs `dist/` to S3, invalidates CloudFront, and opens a PR
with refreshed snapshots/JSON. It expects:

- secret `AWS_BEARER_TOKEN_BEDROCK`
- repo variables `AWS_REGION`, `AWS_DEPLOY_ROLE_ARN`, `S3_BUCKET`,
  `CLOUDFRONT_DISTRIBUTION_ID`

The hosting stack (S3 bucket + CloudFront distribution + GitHub OIDC deploy
role) is defined as AWS CDK in `infra/` — see `infra/README.md`.

## Layout

```
tooling/          TypeScript pipeline (crawl → extract → render)
  src/            stages, product config, schema, sanitizer
  templates/      Nunjucks templates (cheatsheet, landing page)
  data/           extracted JSON + editorial seeds (committed)
crawled-docs/     committed markdown snapshots of the official docs
infra/            AWS CDK stack for hosting (S3 + CloudFront + OIDC role)
dist/             generated site (git-ignored)
```
