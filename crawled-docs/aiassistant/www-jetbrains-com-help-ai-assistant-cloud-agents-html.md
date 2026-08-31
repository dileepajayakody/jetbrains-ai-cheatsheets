1.  [Agents](agents.html)

2.  [Cloud agents](#0)

JetBrains Central

# Cloud agents

Last modified: 11 August 2026

Cloud agents are coding agents that run in an isolated cloud environment instead of on your machine. You can use them to offload long-running or resource-heavy work: the agent runs remotely while you keep working in your IDE, and it writes its results to a separate branch that you can review and merge.

> ### note
>
> Availability
>
> Cloud agents are available only to organizations that have been migrated to [JetBrains Central](https://blog.jetbrains.com/blog/2026/03/24/introducing-jetbrains-central-an-open-system-for-agentic-software-development/).

## How cloud agents work

[JetBrains Air](https://air.dev/) powers the cloud runtime and connects it to your GitHub or GitLab repository. A cloud task moves through the same stages regardless of the agent or repository host:

Start a cloud task

Provision a cloud environment, check out the repository

Push the result

Review and merge

Your IDE

JetBrains Air

Cloud environment

Remote task branch

-   You start a task from AI Assistant, and Air provisions a temporary cloud environment and checks out the selected repository and branch into it.

-   The agent works inside that environment: it inspects the code, edits files, and runs commands, all separate from your local machine and working copy.

-   When the task finishes, Air commits the result to a separate task branch and pushes it to the remote repository.

-   You review the result and merge it. You can access and continue the same task from AI Assistant, Air web, or the Air desktop app.

> ### tip
>
> For details on cloud environment configuration, security, and the environment lifecycle, refer to the [JetBrains Air documentation](https://www.jetbrains.com/help/air/run-tasks-in-cloud.html).

## When to use cloud agents

Use a cloud agent when the task is well-scoped and can run independently, especially when it is long-running, resource-intensive, or safer to perform away from your local machine. Common examples include the following:

-   **Independent background work** – fix a bug with clear reproduction steps, implement a self-contained feature, run a long test suite, or offload maintenance work while you continue with other tasks.

-   **Stronger isolation** – run the agent in a temporary cloud environment so its commands and file changes do not affect your local machine or working copy.

-   **Consistent execution** – use a reproducible, repository-specific environment instead of relying on each developer's local setup.

-   **Cross-device continuity** – start a task in AI Assistant, then continue it in Air web or the Air desktop app, including on another device.

You can run several cloud agents in parallel without setting up separate local worktrees or containers.

## Run an agent in the cloud

> ### note
>
> Prerequisites
>
> Before you can run agents in the cloud, make sure the following requirements are met:
>
> -   An organization administrator has enabled AI for the organization or for individual users in [JetBrains Central Console](https://www.jetbrains.com/help/jetbrains-console/eap/quickstart-for-organizations-enrolled-in-the-partnership-program.html).
>
> -   You are logged in to the IDE with your organizational account. This automatically signs you in to JetBrains Central and selects a workspace for you.
>
> -   The agents you want to run in the cloud are installed from the [agent registry](acp.html#install-agent-from-registry).
>
> -   The JetBrains Air app is installed and has access to the repository.
>
> -   You have access to the repository through your own GitHub or GitLab account.
>

To run an agent in the cloud:

1.  In AI Chat, open the agent selector and choose the agent you want to use.

2.  If the agent supports remote runs, a panel with a switcher for running it in the cloud appears. Switch to Cloud mode.

    ![The cloud agent run mode in AI Chat](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_cloud_agent_switcher.png "The cloud agent run mode in AI Chat")

3.  The first time you run a cloud agent for a repository,AI Assistant prompts you to authorize the JetBrains Air app so the agent can access your repository. Click Authorize and complete the authorization procedure.

    ![A prompt in AI Chat asking to authorize the JetBrains Air app on GitHub before running a task in the cloud](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_cloud_agent_authorize_github.png "A prompt in AI Chat asking to authorize the JetBrains Air app on GitHub before running a task in the cloud")

    After authorization, return to AI Assistant.

4.  Select the [environment configuration](https://www.jetbrains.com/help/air/configure-environments.html) for this session.

    ![The environment configuration selector in AI Chat](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_cloud_agent_env_selector.png "The environment configuration selector in AI Chat")

    > ### tip
    >
    > Select Manage Environments to open the environment configurations page for your organization on [air.jetbrains.cloud](https://air.jetbrains.cloud/).

    > ### note
    >
    > You cannot change the environment configuration after you submit the first message in a session. The selected configuration is then shown as a read-only indicator in the toolbar.

5.  Click the branch selector and choose the remote branch the agent works on. Use the Search remote branch field to filter the list.

    ![The remote branch selector in AI Chat, listing origin branches for a cloud agent to work on](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_cloud_agent_branch_selector.png "The remote branch selector in AI Chat, listing origin branches for a cloud agent to work on")

    > ### note
    >
    > To run the agent on a different branch, start a new chat. You cannot switch the branch in a chat where the agent has already run.

6.  Configure the agent for the task: select an operation mode (if the agent supports them) and a processing model from the list.

7.  Write a prompt describing the task and submit it.

    > ### note
    >
    > At this point, if the repository you are working in does not belong to the organization, AI Assistant prompts you to grant access to it, since no installation covers it yet.
    >
    > ![A prompt in AI Chat asking to grant or request read access to a repository before a cloud agent can run a task](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_cloud_agent_repo_access_required.png "A prompt in AI Chat asking to grant or request read access to a repository before a cloud agent can run a task")
    >
    > Click Manage, then Settings, and install the JetBrains Air app for that repository.

8.  The agent runs in the cloud and writes its changes to a separate branch. When it finishes, you can review results by clicking View Commits and merge the changes into your working branch by clicking Merge.

    ![Review and merge changes](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_cloud_agent_merge_changes.png "Review and merge changes")

> ### tip
>
> GitLab uses a similar installation and authorization flow. The repositories available in Air depend on both the JetBrains Air app's access and your GitLab access. Bitbucket is not currently supported.

## View a task in Air

You can also view a running or finished cloud task in JetBrains Air. Click the ! Open in browser button to open the session on [air.jetbrains.cloud](https://air.jetbrains.cloud/), where you can continue working on the task.

![The Open in browser button in AI Chat](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_cloud_agents_open_in_browser.png "The Open in browser button in AI Chat")
