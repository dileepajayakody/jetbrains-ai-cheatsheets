# Junie — Editorial Seed

Voice: practical, demo-oriented, enterprise-credible. Junie is the JetBrains
**coding agent** for delegated engineering work — not a chat toy. Emphasize
"delegate work you want executed, not just discussed" and the
prompt → plan → edits → commands → verification → summary loop.

## Sections to cover (in this order)

Section titles are plain text — no emojis. The `sN` tokens are colorClass hints only.

1. **Getting Started** (s1) — what it is, where it runs (IDE · CLI · headless CI/CD),
   install one-liners, launch, first prompt, sign-in/auth quickstart, best-for vs not-just.
   Keep only high-value entry points — no generic OS steps (no `cd`, no "open a terminal").
2. **Latest & EAP** (s11) — the newest / EAP-tagged capabilities so the sheet reads current:
   Plan Mode, Hooks (EAP), Git Worktrees, Remote mode, Brave mode, model & effort selection,
   ACP, live Debug mode. One line each; point to the section with full detail. Ground every
   entry in the docs — no invented "new" claims.
3. **Delegated Development** (s2) — the agent loop, what makes a good bounded task,
   `@`-attaching the smallest useful context, image inputs, review/rollback.
4. **Project Guidelines** (s6) — `.junie/`, `AGENTS.md`, config files, why persistent project context matters.
5. **Autonomous Agent** (s9) — multi-file edits, runs commands, verification, IDE-backed features, bounded by approvals.
6. **Junie CLI** (s10) — install, `junie --version`, `/` command menu, `?` shortcuts, `@` attach, prompt history — CLI surface only.
7. **Plan Mode** (s3) — the single home for `/plan` / `Shift+Tab`, plan view, iterate, confirm & implement, save plan.
8. **AI Chat + Junie** (s3) — opening AI Chat, Chat vs Agents mode, context attachment.
9. **Review & Apply** (s5) — `/review`, diffs, tests, inspections, [CRITICAL] findings, human review for production.
10. **Models & Auth** (s8) — JetBrains account, `JUNIE_API_KEY`, `/model`, `/effort`, BYOK providers, `/usage`.
11. **MCP For Junie** (s7) — external tools, `mcp.json`, approvals/allowlist, extensions/marketplace.
12. **Headless Mode** (s4) — CI/CD, `--auth`, positional prompt, `--review`/`--plan` flags, scoped prompts.
13. **GitHub Action** (s10) — `JetBrains/junie-github-action`, `@junie-agent` trigger, permissions, inputs/outputs.
14. **GitLab CI/CD** (s12) — `#junie` trigger, MR reviews, `GITLAB_TOKEN_FOR_JUNIE`.
15. **IDE Integration** (s1) — supported IDEs, plugin, `/ide`, symbol-aware features, min version, live `/debug`.
16. **Sessions & Worktrees** (s2) — the single home for `/new`, `/history`, transcript view, `/worktree`, `/remote`.
17. **Privacy & Security** (s5) — approval model, Action Allowlist, Brave mode levels, hooks safety, BYOK privacy.
18. **Pro Tips** (s6) — tips & tricks that don't restate a command already listed elsewhere.

Keep sections similar in size (~6–9 rows each) so the four auto-flowed columns stay balanced in height.

## Content ownership (avoid repeating the same item across sections)

Each command / path / concept lives in exactly ONE section:
- Session commands (`/new`, `/history`, transcript, `/worktree`, `/remote`) → **Sessions & Worktrees** only.
- `/plan` and `Shift+Tab` detail → **Plan Mode** only (Delegated Development may mention planning in prose, not the command).
- `/debug` → **IDE Integration** only.
- Action Allowlist / approvals → **Privacy & Security** only.
- BYOK → **Models & Auth** only.
- `@`-attach → **Delegated Development** only.
- Install one-liner → **Getting Started** only (Headless Mode references it in prose, no duplicate row).

## Pro tips flavor
Start bounded; ask for a plan on complex work; attach the smallest useful context;
require explicit validation commands and outcomes; keep humans in the PR/MR approval path;
remember CLI and action details are version-sensitive.

## Demo lines
- "Delegate work you want executed, not just discussed."
- "Shows controlled execution, not uncontrolled magic."
- End with an "Updated" row noting the docs scrape date.
