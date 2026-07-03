# Junie — Editorial Seed

Voice: practical, demo-oriented, enterprise-credible. Junie is the JetBrains
**coding agent** for delegated engineering work — not a chat toy. Emphasize
"delegate work you want executed, not just discussed" and the
prompt → plan → edits → commands → verification → summary loop.

## Sections to cover (roughly in this order)

1. **Getting Started** (s1, ⚡) — what it is, where it runs (IDE · CLI · headless CI/CD), entry points, best-for vs not-just.
2. **Delegated Development** (s2, 📋) — the agent loop, what makes a good bounded task, review/rollback.
3. **Project Guidelines** (s6, 🧭) — `.junie/`, `AGENTS.md`, why persistent project context matters.
4. **Autonomous Agent** (s9, 🤖) — multi-file edits, runs commands, verification, bounded by approvals.
5. **Junie CLI** (s10, 🖥️) — install (curl/PowerShell/Homebrew), `junie --version`, `@` attach, `/` commands, auth, EAP note.
6. **AI Chat + Junie** (s3, 💬) — opening AI Chat, Chat vs Agents mode, model selection, context attachment.
7. **Review & Apply** (s5, ✏️) — diffs, tests, inspections, human review for production changes.
8. **Models & Auth** (s8, 🧠) — JetBrains account, `JUNIE_API_KEY`, BYOK providers.
9. **MCP For Junie** (s7, 🔌) — external tools, IDE settings path, `mcp.json`, approvals/allowlist.
10. **Headless Mode** (s4, ⚙️) — CI/CD, `--auth`, positional prompt, scoped prompts.
11. **GitHub Action** (s10, 🐙) — `JetBrains/junie-github-action`, `@junie-agent` trigger, permissions, versioning.
12. **GitHub Inputs / Outputs** (s11/s3) — trigger_phrase, base_branch, model, silent_mode; branch_name, pr_url, summaries.
13. **GitHub MCP** (s7, 🧰) — allowed_mcp_servers, checks/inline comment servers.
14. **GitLab CI/CD** (s9, 🦊) — `#junie` trigger, MR reviews, `GITLAB_TOKEN_FOR_JUNIE`.
15. **Project Structure** (s12, 📁), **Handy Commands** (s4, ⌨️), **IDE vs CLI vs CI** (s10, 🆚), **Controls** (s1, 🏢), **Privacy & Security** (s3, 🔒), **Pro Tips** (s3, 💡).

## Pro tips flavor
Start bounded; ask for a plan on complex work; attach the smallest useful context;
require explicit validation commands and outcomes; keep humans in the PR/MR approval path;
remember CLI and action details are version-sensitive.

## Demo lines
- "Delegate work you want executed, not just discussed."
- "Shows controlled execution, not uncontrolled magic."
- End with an "Updated" row noting the docs scrape date.
