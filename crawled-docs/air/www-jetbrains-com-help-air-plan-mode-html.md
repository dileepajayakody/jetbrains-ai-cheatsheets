1.  [Define tasks](define-tasks.html)

2.  [Plan mode](#0)

# Plan mode

Last modified: 27 April 2026

Use Plan mode when you want the agent to prepare an implementation plan before it starts changing code. This helps the agent better understand your task, clarify conditions and constraints, and ask follow-up questions before implementation begins.

In practice, think of planning not just as a permission mode, but as a separate development phase that comes before implementation and review.

In JetBrains Air, Plan mode is available for all agents, even if their standalone versions do not provide such a mode.

![A task in Plan mode](https://resources.jetbrains.com/help/img/air/plan-mode.png "A task in Plan mode")

## How plan mode works

In Plan mode, the agent analyzes the task and creates a Markdown file with the plan in the `.air/plans` directory.

After the plan is ready, JetBrains Air shows an Implement dialog. This dialog lets you approve moving to implementation based on the generated plan.

In the Implement dialog, you can choose:

-   the [agent and model](select-agents-and-models.html) to use for implementation

-   the [task run environment](execution-environments.html): Locally, Git Worktree, or Docker

![The Implement dialog](https://resources.jetbrains.com/help/img/air/air-plan-mode-implement.png "The Implement dialog")

## When to use plan mode

Plan mode is especially useful for tasks that are not fully straightforward from the start.

-   tasks with multiple conditions or constraints

-   changes that affect several files or modules

-   tasks where you want to confirm scope before implementation

-   tasks where the agent may need to ask clarifying questions first

For very small and obvious changes, you can usually skip planning and go directly to implementation.
