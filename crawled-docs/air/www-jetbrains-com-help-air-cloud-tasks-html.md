EAP

# Cloud tasks

Last modified: 20 August 2026

Cloud tasks run in containerized **cloud environments** instead of on your machine. Run a cloud task when you want an isolated environment, want to work from the [web version of JetBrains Air](https://air.jetbrains.cloud), or want to automate project workflows that do not require direct user involvement.

To quickly run your first task in the cloud, proceed to [Quickstart](quickstart-with-cloud-agents.html).

## How to run cloud tasks

To run cloud tasks, you must be signed in with your [JetBrains Account](https://account.jetbrains.com/login).

-   **Desktop app** – Start a task in [JetBrains Air](https://air.dev) and select Cloud as the run environment.

-   **Web version** – Open [https://air.jetbrains.cloud](https://air.jetbrains.cloud) in your browser and run tasks there.

-   **IntelliJ-based IDEs** – Use [AI Assistant](https://www.jetbrains.com/help/ai-assistant/about-ai-assistant.html) in an IntelliJ-based IDE, such as IntelliJ IDEA, PyCharm, or WebStorm. For more information, refer to [Run cloud tasks from IntelliJ-based IDEs](run-tasks-in-cloud.html#run_cloud_tasks_from_ide).

## When to use cloud tasks

Cloud tasks are useful when local execution is inconvenient or not possible.

-   **You do not have the project on your machine** – you can open the project remotely and work with it without cloning or setting it up locally.

-   **You work from different places or devices** – you can start and manage tasks from the web version of JetBrains Air, not only from the desktop app.

-   **You need automations** – scheduled and event-based workflows run in cloud environments and do not depend on your machine being online. [Learn about automations](automations.html).

-   **You want stronger isolation** – tasks run in a remote environment and do not use your local files, local processes, or local credentials unless you explicitly provide the required configuration.

-   **You want reproducible execution** – cloud environments can be configured per repository, so tasks run with the same base image, variables, and setup regardless of who starts them.

## What is different from local execution

Cloud execution differs from local execution in several important ways.

-   **The environment is remote** – the task runs in a cloud environment, not on your machine. Unlike a local run, the environment does not already have your repository checked out. Before you can run cloud tasks, make the repository available to JetBrains Air. Learn how to [connect repositories](connect-repositories.html).

-   **The repository is cloned shallow** – the environment gets only the latest commit, so the Git history isn't there until someone fetches it. See [Repository checkout and Git history](/help/air/cloud-tasks.html#cloud_repository_checkout).

-   **The environment does not inherit your local setup automatically** – if your project needs specific dependencies, environment variables, secrets, or other setup, you must provide them as part of the cloud configuration. If you do not create one, JetBrains Air uses a default environment, which is enough for simple tasks. Learn how to [configure cloud environments](configure-environments.html).

-   **The environment is suspended when idle** – after 75 minutes of inactivity, JetBrains Air suspends the environment and marks the task Suspended. You can resume it until JetBrains Air archives the task after 24 hours of inactivity. See [Cloud environment lifecycle](/help/air/cloud-tasks.html#cloud-environment-lifecycle).

-   **Task results are pushed to a remote branch** – after the task is done, JetBrains Air commits the result to a separate task branch and pushes it to the remote repository, so the changes are not lost when the environment is no longer available.

-   **The review and apply workflow is different** – after the task is done, you review the result and then create a pull request from the pushed task branch. Learn more in [Run tasks in cloud](run-tasks-in-cloud.html#run_cloud_task).

## Cloud environment lifecycle

JetBrains Air creates a cloud environment when a task starts and suspends it after a period of inactivity. A cloud task shows one of these states:

State

What it means

Starting

JetBrains Air is creating and starting the cloud environment for the task.

Done

The task has finished. The environment is still available, so you can review the result and continue working in it.

Suspended

JetBrains Air stopped the environment after 75 minutes of inactivity. Your results are safe on the task branch. Click Resume to restart the environment and continue working on the task. See [Resume a suspended environment](run-tasks-in-cloud.html#resume_cloud_environment).

Archived

JetBrains Air archived the task after 24 hours of inactivity. You can still open the task to view its chat history, but you can't resume it, because the environment can no longer be restarted. Your results remain on the task branch.

Problem

The task ran into an error. See [Troubleshoot cloud tasks](troubleshoot-cloud-tasks.html#check_task_status).

\>

## Snapshots and preserved state

A cloud environment keeps its state on disk. When a run finishes, JetBrains Air can save that state as a snapshot and start a later run from it instead of preparing a new environment from scratch. This makes the run start faster, and it means a run doesn't always begin in a clean container.

How much of the earlier state a run gets depends on whether you resume the same task or start a new one.

-   **You resume the same task** – the environment returns as it was, including uncommitted working-tree changes and everything outside the repository, such as installed packages, build caches, and ~/.local. Running processes are the exception, so restart servers, watchers, and anything else the task had running.

-   **You start a new task on the same repository** – the snapshot provides the prepared environment: the image, installed dependencies, build caches, and other files outside the repository. The repository is always synced fresh – JetBrains Air discards leftover working-tree changes and checks out the branch that the new task requests.

Snapshots are a startup optimization, so there's nothing to configure. Tasks and automation runs on the same repository share a snapshot, and snapshots are personal – yours is never reused for someone else. Snapshots also expire, so a run can still start in a cold environment and take longer.

Treat preserved state as a speed-up, not a guarantee. If a run needs a file or a tool, install it from the [startup script](configure-environments.html#cloud_startup_script) rather than relying on an earlier run leaving it in place. What the script installs is saved in the snapshot, so an expensive download usually happens only once.

## Credits and usage

Cloud tasks always spend JetBrains AI credits from your subscription. A provider account of your own – a subscription or a BYOK key you connected in the desktop app – works for local tasks only, so in the cloud JetBrains Air runs every agent on the JetBrains AI provider.

Cloud tasks draw on the same monthly credit limit as your local ones. To see how much of it you've used, see [Check how much you've used](ai-credits.html#check-usage).

[Automation](automations.html) runs are cloud tasks too. A personal automation spends your credits, and a project automation spends the project's – see [AI credits for automation runs](create-automation.html#automation_ai_credits).

If you belong to an organization, an administrator sets your credit limit in [JetBrains Central Console](https://console.jetbrains.cloud/) under AI governance | Settings. The same administrator controls whether you can run cloud tasks at all and which agents are available there. See [Manage AI access for your organization](set-up.html#setup-org-ai-access).
