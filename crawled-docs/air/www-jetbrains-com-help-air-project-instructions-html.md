1.  [Define tasks](define-tasks.html)

2.  [Project instructions](#0)

# Project instructions

Last modified: 02 March 2026

Project instructions define "how we work here": conventions, constraints, preferred commands, and review expectations. They help agents produce consistent results across tasks and reduce the need to repeat the same guidance in every prompt.

## What Air uses as project instructions

JetBrains Air picks up instruction files and configuration that already exist in your project. For example:

-   `CLAUDE.md` and the `.claude` folder for Claude Agent.

-   `AGENTS.md` for agent workflows and reusable guidance.

-   Other agent-specific files that are supported by the selected agent.

JetBrains Air does not introduce a separate instruction format. If your project is prepared for agentic development, JetBrains Air uses those files and passes them to the selected agent.

This means you can keep instructions in version control, share them with the team, and evolve them alongside the code.

## Project-specific AI settings

In Settings, you can configure both shared and project-specific AI settings.

Shared settings apply to all projects on your machine. Project-specific settings apply only to the current workspace and are shown under a separate tab with the project name.

### Open project AI settings

1.  Open Settings.

2.  Switch to the tab with your project name.

3.  In the navigation tree, open AI and select the agent settings page you want to configure.

    ![AI project settings](https://resources.jetbrains.com/help/img/air/project-ai-settings.png "AI project settings")

### Claude Agent settings

Claude Agent supports both shared settings and personal settings:

-   **Shared settings** are checked into source control and shared with the team. They are stored in `.claude/settings.json`.

-   **Personal settings** are not checked into source control and are intended for personal preferences. They are stored in `.claude/settings.local.json`.

For the full reference on settings scopes and the `settings.json` format, see [Claude Code settings](https://code.claude.com/docs/en/settings).

### Documentation

You can attach external documentation sources to a workspace. These sources can be referenced as [task context](task-context.html#context-documentation) and help the agent follow project requirements and guidelines.

### Review guidelines

Review guidelines are custom instructions that guide how the agent reviews your code. The instructions are stored as a review prompt file (`review-prompt.md`) and applied during agentic review.

Learn more in [Review with agent](agentic-review.html).
