1.  [Define tasks](define-tasks.html)

2.  [Skills](#0)

# Skills

Last modified: 14 August 2026

Skills are reusable workflow modules packaged as named units. Unlike commands, which you invoke explicitly, skills provide structured capability blocks that the agent can choose and load when they match the task.

Their main purpose is progressive context disclosure: instead of loading all team guidance into every task, the agent loads only the workflow it needs. This helps keep the task context smaller, reduces token usage, and makes results more consistent.

In the Chat tool, type `/` to open the slash menu. Skills appear there after built-in commands and custom commands.

![Skills in the slash menu after commands](https://resources.jetbrains.com/help/img/air/agent-slash-commands.png "Skills in the slash menu after commands")

> ### note
>
> For agent-specific details about skill structure, configuration rules, and behavior, refer to the documentation of the corresponding agent.

## Shared skills

Shared skills are stored in `.agents/skills`. These skills are available to all agents in JetBrains Air.

```
.agents/
  skills/
    <skill-name>/
      SKILL.md
```

## Claude Agent

In addition to shared skills, Claude Agent supports agent-specific skills from `.claude/skills`.

```
.claude/
  skills/
    <skill-name>/
      SKILL.md
```

## OpenAI Codex

In addition to shared skills, OpenAI Codex supports agent-specific skills from `.codex/skills`.

```
.codex/
  skills/
    <skill-name>/
      SKILL.md
```

## Gemini CLI

In addition to shared skills, Gemini supports agent-specific skills from `.gemini/skills`.

```
.gemini/
  skills/
    <skill-name>/
      SKILL.md
```

## Junie

In addition to shared skills, Junie supports agent-specific skills from `.junie/skills`.

```
.junie/
  skills/
    <skill-name>/
      SKILL.md
```
