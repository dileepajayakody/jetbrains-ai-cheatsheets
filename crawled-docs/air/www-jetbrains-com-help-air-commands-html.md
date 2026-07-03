1.  [Define tasks](define-tasks.html)

2.  [Commands](#0)

# Commands

Last modified: 06 May 2026

Commands are reusable prompt actions for common tasks. Use them when you want to trigger a predefined workflow, for example initialize project instructions, run a review workflow, or execute a project-specific helper action.

In the Chat tool, type `/` to open the slash menu. Commands appear there and can be inserted directly into the task input.

![Commands in the slash menu](https://resources.jetbrains.com/help/img/air/air-agent-commands.png "Commands in the slash menu")

> ### note
>
> For agent-specific details about command format and configuration rules, refer to the documentation of the corresponding agent.

## Predefined commands

Predefined commands are available without any additional configuration.

### JetBrains Air commands

Air commands are built into JetBrains Air itself. They are not agent-specific commands.

-   Review with Agent – starts an agentic review of the selected scope. [Learn more](agentic-review.html)

-   Upload File from Computer – uploads a file from your computer and adds it to the current task. [Learn more](task-context.html#context-upload)

### Agent commands

Each agent can also provide its own predefined commands. These commands depend on the selected agent and usually include basic built-in actions, for example `/init` or `/review`.

## Custom commands

Custom commands are configured independently for each agent. If a project defines custom commands for the selected agent, they appear in the slash menu together with predefined commands.

### Claude Agent

Claude Agent supports custom commands from `.claude/commands`. Command files use the standard Claude Code format and are stored as Markdown files.

```
.claude/
  commands/
    <command-name>.md
```

### Gemini CLI

Gemini supports custom commands from `.gemini/commands`. Command files use the standard Gemini CLI format and are stored as TOML files.

```
.gemini/
  commands/
    <command-name>.toml
```

### Junie

Junie supports custom commands from `.junie/commands`. Command files use the standard Junie format and are stored as Markdown files.

```
.junie/
  commands/
    <command-name>.md
```
