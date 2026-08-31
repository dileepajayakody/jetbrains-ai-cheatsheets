1.  [Getting started](getting-started.html)

2.  [Quickstart](#0)

# Quickstart with Air

Last modified: 20 August 2026

JetBrains Air is an Agentic Development Environment where you delegate coding tasks to [AI agents](supported-agents.html) and stay in control of the workflow. In this quickstart, you install JetBrains Air, sign in to an agent provider, open a project, run your first task, and review the result.

## 1\. Install Air

-   **macOS** – download JetBrains Air for macOS from the [official page at air.dev](https://air.dev/) or install it through [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

-   **Linux** – run the install script:

    ```
    curl -fsSL https://jb.gg/air-install.sh | sh
    ```

    You can also install JetBrains Air for Linux through [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

-   **Windows** – install JetBrains Air for Windows through [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

## 2\. Sign in to an agent provider

To run tasks, JetBrains Air needs at least one connected agent provider. On the first launch, you are prompted to sign in.

-   If you have a JetBrains AI subscription, connect JetBrains AI. It works as a universal provider and gives you access to Claude Agent, OpenAI Codex, Gemini CLI, and Junie under a single subscription.

-   If you prefer to use a specific provider account – Anthropic, OpenAI, or Google – sign in to that account directly with a subscription you already pay for, such as Claude Pro, Max, or Team. You can also bring your own API key (BYOK).

![The first-launch sign-in screen of JetBrains Air](https://resources.jetbrains.com/help/img/air/aird_login.png "The first-launch sign-in screen of JetBrains Air")

> ### note
>
> If you plan to use ACP-compatible agents only, you can skip this step and [add your own agent](select-agents-and-models.html#add-acp-agent) later.

To connect additional providers later, open Settings | Account | AI Providers. For details, see [Set up Air](set-up.html).

## 3\. Open a project

After you sign in, open the project you want to work on – the folder that holds your code. Opening it creates a workspace around the project: the container that keeps its agent sessions, Git state, and tools together. Workspaces share one window, so you can open as many projects as you need and switch between them in the Tasks tool.

### Open a project

-   To open a local project, select File | Open and select the project folder on your computer.

-   To clone a project from Git, select Git | Clone, enter the repository URL in the Source URL field, and choose a location on your computer.

When the workspace opens, JetBrains Air asks whether you trust the code in the folder. Click Trust only if you trust the authors of the project – opening the project may run scripts or import code, which can execute anything in the project. If you want to look around first, click Preview: JetBrains Air functionality will be limited but safer.

## 4\. Run your first task

In JetBrains Air, you work with the agent through the Chat tool. You describe the goal, add the context the agent needs, and send the task.

### Run your first task

1.  Open the Chat tool and describe the goal in the task input.

    State what you want to achieve and what _done_ means – expected behavior, constraints, and known failures or error messages. The clearer the goal, the better the result.

    ![Defining a task in the Chat tool](https://resources.jetbrains.com/help/img/air/define-task.png "Defining a task in the Chat tool")

2.  Add context for the task.

    Attach the files, symbols, or code the agent needs so it does not have to guess:

    -   Type `@` or click ![Chat. Add context](https://resources.jetbrains.com/help/img/air/chat-add-context.png "Chat. Add context") (Add context) to attach files, folders, Git items, terminal output, or mention symbols such as classes, functions, or methods.

        ![Add task context](https://resources.jetbrains.com/help/img/air/add-task-context.png "Add task context")

    -   Select code in the editor and click Add to Task to attach the selection.

        ![Add to task](https://resources.jetbrains.com/help/img/air/air-editor-add-to-task.png "Add to task")

    For the full list of ways to add context, see [Task context](task-context.html).

3.  Adjust how the agent runs. In the task toolbar, you can:

    -   Pick a different [agent and model](select-agents-and-models.html), a [permission mode](permission-modes.html) that controls how freely the agent acts.

        ![Select model and agent](https://resources.jetbrains.com/help/img/air/change-agent-model.png "Select model and agent")

        If you want the agent to draft an implementation plan before it changes code, select the Plan permission mode. See [Plan mode](plan-mode.html).

    -   Choose a [run environment](execution-environments.html):

        -   Local Workspace – the agent runs on your machine and writes directly to your working copy.

        -   Git Worktree – the agent works in a separate Git worktree on a dedicated branch, so your main working copy stays untouched until you apply the result.

        -   Docker – the agent runs in an isolated container with its own filesystem, useful for running untrusted code or keeping the environment clean.

        ![Select run environment](https://resources.jetbrains.com/help/img/air/aird_select_execution_environment.png "Select run environment")

4.  Send the task.

    Press Enter or click Send. The agent works on the task while you keep editing or start another task in parallel.

    Learn more about running and managing tasks in [Run tasks](run-tasks.html).

## 5\. Review the changes

When the task is done, the Chat tool shows how many lines the task added and deleted, for example, +512 -4. Click the statistics to open the diff in the Task Changes tab and decide what to do next.

![The change statistics and the Review with Codex button in the Chat tool after a task is finished](https://resources.jetbrains.com/help/img/air/air-review-with-agent-button.png "The change statistics and the Review with Codex button in the Chat tool after a task is finished")

### Review with an agent

For a fast first pass, use Review with <agent>. JetBrains Air runs a separate review task with a fresh agent session that checks the diff against your review focus areas and leaves comments on specific lines. Accept the comments you agree with and send them back to the main task – the main agent uses them as follow-up instructions and updates the code.

![Review with Agent](https://resources.jetbrains.com/help/img/air/agentic-review-comments.png "Review with Agent")

To review with another agent, click the arrow next to the button and select the agent and model you want – a second opinion from a different agent often catches what the agent that wrote the code missed.

![The review menu with the list of agents, their models, the Add Agents action, and the Edit Review Prompt action](https://resources.jetbrains.com/help/img/air/air-review-with-agent-menu.png "The review menu with the list of agents, their models, the Add Agents action, and the Edit Review Prompt action")

For the full workflow, including how to review another scope or change the review prompt, see [Review with agent](agentic-review.html).

### Review the diff yourself

You can also review the diff manually. In Task Changes, you can:

-   switch between Unified and Side-by-side views and navigate between hunks

    ![Diff view](https://resources.jetbrains.com/help/img/air/review-diff-view.png "Diff view")

-   comment on specific lines and send the comments back to the task as review feedback

    ![Comment on diff](https://resources.jetbrains.com/help/img/air/air-comment-in-editor.png "Comment on diff")

-   select code in the diff and click Add to Task to attach it to a follow-up instruction

    ![Add to task](https://resources.jetbrains.com/help/img/air/air-editor-add-to-task.png "Add to task")

For details, see [Review changes](review-changes.html).

## 6\. Apply the changes

When you are satisfied with the result, apply the changes to your local workspace and integrate them into your normal workflow. How you do this depends on the [run environment](execution-environments.html) you picked for the task.

### From the local workspace

If you ran the task in Local Workspace, the agent already wrote the changes to your working copy. Open Task Changes, enter a commit message, and click Commit (to auto-generate the message, click Generate Commit Message ![Generate commit message](https://resources.jetbrains.com/help/img/air/generate-commit-message-icon.png "Generate commit message") next to Commit). Then push the commit to the remote repository.

### From an isolated environment

If you ran the task in Git Worktree or Docker, the agent worked outside your local working copy. Bring the result back to your local workspace in one of two ways:

-   Click Apply Locally to copy the changes into your current working copy as uncommitted changes. Then commit and push as usual.

-   From the Apply Locally drop-down, select Check Out Branch Locally to check out the task branch in your working copy. Push the branch or open a pull request as usual.

![The Apply Locally control in the Task Changes tab](https://resources.jetbrains.com/help/img/air/review-diff-apply-changes.png "The Apply Locally control in the Task Changes tab")

For the full workflow – including how to revert changes or roll back to a previous commit – see [Accept changes](accept-changes.html).

## Where to go next

JetBrains Air offers more features that you can layer on as you grow into the agentic workflow.

-   [Plan mode](plan-mode.html) – let the agent draft an implementation plan before it changes code, and approve it before execution.

-   [Permission modes](permission-modes.html) – control when the agent can edit files or run commands without asking.

-   [Project instructions](project-instructions.html) – commit project-level rules (`CLAUDE.md`, `AGENTS.md`) that shape how agents work in your repository.

-   [MCP servers](mcp-servers.html) – connect external tools and data sources to the agent through the Model Context Protocol.

-   [Skills](skills.html) and [Commands](commands.html) – reuse and compose instructions and shortcuts for recurring task patterns.

-   [Multitasking](multitasking.html) – run several tasks in parallel and switch between them.
