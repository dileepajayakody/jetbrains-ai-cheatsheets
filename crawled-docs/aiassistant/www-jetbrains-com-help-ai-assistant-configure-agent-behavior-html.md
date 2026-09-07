1.  [Agents](agents.html)

2.  [Agent instructions](#0)

# Agent instructions

Last modified: 22 July 2026

Agents can be configured using instruction files in your project that define how they should behave in your codebase, including coding conventions, architectural constraints, and common workflows.

Most agents rely on an `AGENTS.md` [file](https://agents.md/) for reusable guidance, though some use their own format. For example, [Claude Agent](claude-agent.html) gets its instructions from `CLAUDE.md`.

Agents automatically read these files and use them as guidance when generating code, executing commands, and making decisions. This helps keep project-specific instructions in one place and ensures more consistent results.

## Instruction files vs. Project rules

AI Assistant also provides a similar functionality called [Project rules](configure-project-rules.html), which defines how it behaves in chat.

-   **Instruction files** (`AGENTS.md`, `CLAUDE.md`) are used by the selected coding agent and travel with your repository.

-   **Project rules** are configured in the IDE and apply only in AI Assistant [chat mode](ai-chat.html#select-interaction-mode).

Use instruction files to share guidance across tools and environments, and Project rules to customize behavior within AI Assistant.

## How to use it

Create an instruction file supported by your agent (for example, `AGENTS.md` or `CLAUDE.md`) in the root of your repository and describe how agents should work with your codebase. The selected agent will automatically detect and use these instructions.

A typical file includes:

-   **Project context** – languages, frameworks, architecture.

-   **Development rules** – coding standards and constraints.

-   **Repository conventions** – directory structure and boundaries.

-   **Common tasks** – commands for building, testing, and running the project.

-   **Restrictions** – what the agent should not do.

-   **Definition of done** – conditions for completing a task.

```
Example
```

> ### note
>
> Supported file names and placement locations may vary by agent. For details, refer to your agent's documentation.
