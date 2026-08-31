1.  [Define tasks](define-tasks.html)

2.  [Project instructions](#0)

# Project instructions

Last modified: 14 August 2026

Project instructions define "how we work here": conventions, constraints, preferred commands, and review expectations. They help agents produce consistent results across tasks and reduce the need to repeat the same guidance in every prompt.

## What Air uses as project instructions

JetBrains Air picks up instruction files and configuration that already exist in your project. For example:

-   `CLAUDE.md` and the `.claude` folder for Claude Agent, including [settings files](https://code.claude.com/docs/en/settings) such as `.claude/settings.json`.

-   `AGENTS.md` for agent workflows and reusable guidance.

-   Other agent-specific files that are supported by the selected agent.

JetBrains Air does not introduce a separate instruction format. If your project is prepared for agentic development, JetBrains Air uses those files and passes them to the selected agent.

This means you can keep instructions in version control, share them with the team, and evolve them alongside the code.

## Project-specific AI settings

In Settings, the tab named after your project holds settings that apply only to the current workspace. Its AI section keeps agent configuration with the project:

-   Agent review prompt – instructions that guide how the agent reviews your code. See [Review with agent](agentic-review.html).

-   Setup script under Docker and Worktree – instructions for initializing a run environment. See [Task run environments](execution-environments.html).

### Open project AI settings

1.  Open Settings.

2.  Switch to the tab with your project name.

3.  Go to the AI section.

Both are stored in the .air directory in your project root, so you can commit them and share them with the team – see [Share workspace settings through version control](settings.html#settings_air_directory).
