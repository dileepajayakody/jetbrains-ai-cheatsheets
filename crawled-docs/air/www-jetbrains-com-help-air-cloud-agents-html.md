Limited EAP

# Cloud agents

Last modified: 29 May 2026

Cloud agents run in containerized **cloud environments** instead of on your machine. You can use them to run tasks in an isolated environment, work from the [web version of JetBrains Air](https://air.jetbrains.cloud), and automate project workflows that do not require direct user involvement.

To quickly run your first task in the cloud, proceed to [Quickstart](quickstart-with-cloud-agents.html).

## When to use cloud agents

Cloud agents are useful when local execution is inconvenient or not possible.

-   **You do not have the project on your machine** – you can open the project remotely and work with it without cloning or setting it up locally.

-   **You work from different places or devices** – cloud agents let you start and manage tasks from the web version of JetBrains Air, not only from the desktop app.

-   **You need automations** – scheduled and event-based workflows run in cloud environments and do not depend on your machine being online. [Learn about automations](automations.html).

-   **You want stronger isolation** – tasks run in a remote environment and do not use your local files, local processes, or local credentials unless you explicitly provide the required configuration.

-   **You want reproducible execution** – cloud environments can be configured per repository, so tasks run with the same base image, variables, and setup regardless of who starts them.

## What is different from local execution

Cloud execution differs from local execution in several important ways.

-   **The environment is remote** – the task runs in a cloud environment, not on your machine. Unlike a local run, the environment does not already have your repository checked out. Before you can run cloud tasks, make the repository available to JetBrains Air. Learn how to [connect repositories](connect-repositories.html).

-   **The environment does not inherit your local setup automatically** – if your project needs specific dependencies, environment variables, secrets, or other setup, you must provide them as part of the cloud configuration. If you do not create one, JetBrains Air uses a default environment, which is enough for simple tasks. Learn how to [configure cloud environments](configure-environments.html).

-   **The environment is temporary** – currently, a cloud environment remains available for up to 24 hours after the task starts. After that, it is deleted and you can no longer open it.

-   **Task results are pushed to a remote branch** – after the task is done, JetBrains Air commits the result to a separate task branch and pushes it to the remote repository, so the changes are not lost when the environment is no longer available.

-   **The review and apply workflow is different** – after the task is done, you review the result and then create a pull request from the pushed task branch. Learn more in [Run tasks in cloud](run-tasks-in-cloud.html#run_cloud_task).

## How to access cloud agents

You can use cloud agents from the JetBrains Air desktop app or from the web version of JetBrains Air.

-   **Desktop app** – Start a task in [JetBrains Air](https://air.dev) and select Cloud as the run environment.

-   **Web** – Open [https://air.jetbrains.cloud](https://air.jetbrains.cloud) in your browser and run tasks there.

To use cloud agents, you must be signed in with your [JetBrains Account](https://account.jetbrains.com/login).

> ### note
>
> You can run tasks in cloud agents by using [AI Assistant](https://www.jetbrains.com/help/ai-assistant/about-ai-assistant.html) in an IntelliJ-based IDE, such as IntelliJ IDEA, PyCharm, or WebStorm. For more information, refer to [Run cloud tasks from IntelliJ-based IDEs](run-tasks-in-cloud.html#run_cloud_tasks_from_ide).

## Organization access and billing

Access to cloud agents is managed at the organization level. Your organization controls whether cloud infrastructure is available to you.

Cloud usage is billed to the organization, not to individual users.
