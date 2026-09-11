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
2. **Latest & EAP** (s11) — the newest / EAP-tagged capabilities with visual NEW indicators:
   Junie Local (`/local` Apple Silicon inference engine), Demo Agent (`/demo` VM & Computer Use),
   Goal-Oriented Execution (`/goal`), Plan Mode (`/plan`), Hooks (EAP), Custom Subagents,
   Git Worktrees (`/worktree`), Remote Mode (`/remote`), Brave Mode (`/brave`), Model & Effort selection (`/model`, `/effort`),
   ACP (`--acp`), live Debug Mode (`/debug`). Ground every entry in the docs.
3. **Delegated Development** (s2) — the agent loop, what makes a good bounded task,
   `@`-attaching the smallest useful context, image inputs, review/rollback, `/goal` milestone planning.
4. **Project Guidelines & Config** (s6) — `.junie/`, `AGENTS.md`, `.junie/config.json`, `--config-location`, why persistent project context matters.
5. **Autonomous Agent & Subagents** (s9) — multi-file edits, runs commands, verification, custom subagents (`.junie/agents/`), delegation by role/skill.
6. **Junie CLI** (s10) — install, `junie --version`, `/` command menu, `?` shortcuts, `@` attach, prompt history — CLI surface only.
7. **Plan & Goal Mode** (s3) — the single home for `/plan` / `Shift+Tab`, `/goal` goal execution, plan view, iterate, confirm & implement, save plan.
8. **AI Chat + Junie** (s3) — opening AI Chat in JetBrains IDEs, Chat vs Agents mode, context attachment.
9. **Review & Apply** (s5) — `/review`, diffs, tests, inspections, [CRITICAL] findings, human review for production.
10. **Models & Local Inference** (s8) — Junie Local (`/local`), JetBrains account, `JUNIE_API_KEY`, `/model`, `/effort`, BYOK providers, `/usage`.
11. **MCP & Extensions** (s7) — external tools, `mcp.json`, approvals/allowlist, `/extensions` / `/plugin` marketplace.
12. **Demo Agent & Testing** (s11) — `/demo` disposable Docker VM, Computer Use UI automation, MP4 recordings, HTML demo reports.
13. **Headless Mode** (s4) — CI/CD, `--auth`, positional prompt, `--review`/`--plan` flags, scoped prompts.
14. **GitHub Action** (s10) — `JetBrains/junie-github-action`, `@junie-agent` trigger, permissions, inputs/outputs.
15. **GitLab CI/CD** (s12) — `#junie` trigger, MR reviews, `GITLAB_TOKEN_FOR_JUNIE`.
16. **IDE Integration** (s1) — supported IDEs, plugin ID 26104, `/ide`, symbol-aware features, min version, live `/debug`.
17. **Sessions & Worktrees** (s2) — the single home for `/new`, `/history`, transcript view, `/worktree`, `/remote`.
18. **Privacy & Security** (s5) — approval model, Action Allowlist, Brave mode levels (`/brave`), hooks safety, BYOK privacy.
19. **Pro Tips** (s6) — tips & tricks that don't restate a command already listed elsewhere.

Keep sections similar in size (~6–9 rows each) so the four auto-flowed columns stay balanced in height.

## Content ownership (avoid repeating the same item across sections)

Each command / path / concept lives in exactly ONE section:
- Session commands (`/new`, `/history`, transcript, `/worktree`, `/remote`) → **Sessions & Worktrees** only.
- `/plan` and `Shift+Tab` detail → **Plan & Goal Mode** only.
- `/local` Apple Silicon model inference → **Models & Local Inference** (and highlighted in **Latest & EAP**).
- `/demo` VM UI demonstration → **Demo Agent & Testing** (and highlighted in **Latest & EAP**).
- `/debug` → **IDE Integration** only.
- Action Allowlist / approvals → **Privacy & Security** only.
- BYOK / `/model` / `/effort` → **Models & Local Inference** only.
- `@`-attach → **Delegated Development** only.
- Install one-liner → **Getting Started** only.

## Pro tips flavor
Start bounded; ask for a plan on complex work; attach the smallest useful context;
use `/local` for private on-device inference on Apple Silicon;
require explicit validation commands and outcomes; keep humans in the PR/MR approval path;
remember CLI and action details are version-sensitive.

## Demo lines
- "Delegate work you want executed, not just discussed."
- "Shows controlled execution, not uncontrolled magic."
- End with an "Updated" row noting the docs scrape date.
