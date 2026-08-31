1.  [Cloud tasks](cloud-tasks.html)

2.  [Run tasks in cloud](#0)

EAP

# Run tasks in cloud

Last modified: 20 August 2026

Cloud tasks run in remote cloud environments instead of on your machine. You can start them either from the JetBrains Air app or from [https://air.jetbrains.cloud](https://air.jetbrains.cloud) in a browser.

### How cloud tasks differ from local tasks

> ### tip
>
> In task cloud runs, after the task is done, the agent commits changes to a separate task branch and pushes them to the remote repository.

In local tasks, JetBrains Air changes files in your local working copy and does not commit them automatically ([see details](review-and-integrate.html)).

In cloud tasks, JetBrains Air uses a remote environment with a limited lifetime. JetBrains Air suspends the environment after a period of inactivity; you can resume it to return to the task, but there is still a chance you'll come back after it's no longer available.

To avoid this risk, JetBrains Air commits the result to a separate task branch and pushes it to the remote repository. Because of this, the cloud workflow is slightly different: after the task is done, you review the result and then create a pull request from the pushed task branch.

Cloud environmentAgentTask branchair/<task>Remote repository(1) Air clones the repoand creates a branch(3) agent commits and pushesthe task branch(2) edits files in isolation(4) you create apull request

## Before you start

You can start with the default cloud environment, but for many projects it is useful to configure the environment first.

-   If you run tasks from the web UI, you must first configure a repository connection. Without it, you cannot select a repository in the browser. [Learn how to connect repositories](connect-repositories.html).

-   If your project needs specific dependencies, environment variables, secrets, or integrations, create an environment configuration for the repository in advance. [Learn how to configure environments](configure-environments.html).

## 1\. Run a cloud task

You can start a cloud task from the JetBrains Air app or from the web UI.

From the web version of JetBrains Air

From JetBrains Air

### Run a cloud task from the browser

1.  Log in to [https://air.jetbrains.cloud](https://air.jetbrains.cloud) with your JetBrains Account.

2.  On the New Task page, select an environment or a repository, and a branch. Selecting an environment runs the task with that configuration; selecting a repository uses the default environment.

    ![The New Task selector open, listing environment configurations under Environments and repositories under Repositories](https://resources.jetbrains.com/help/img/air/airc-new-task-select-environment.png "The New Task selector open, listing environment configurations under Environments and repositories under Repositories")

3.  Enter your task prompt and send the task.

4.  After the task starts, it appears in the left pane.

    ![A started cloud task shown in the left pane of the web version of JetBrains Air](https://resources.jetbrains.com/help/img/air/airteam-started-task.png "A started cloud task shown in the left pane of the web version of JetBrains Air")

### Run a cloud task from the JetBrains Air app

1.  Open your project in the JetBrains Air app.

2.  Start creating a new task.

3.  In the task run environment selector, choose Cloud.

    ![The run environment selector in the Air app with Cloud selected](https://resources.jetbrains.com/help/img/air/airteam-run-task-from-app.png "The run environment selector in the Air app with Cloud selected")

4.  Enter your task prompt and send the task.

## 2\. Review the result

After the task is done, open it to review the result. JetBrains Air opens in your browser, so you can inspect the changed files, continue working with the agent, or ask the agent to review the recent changes.

### Review a cloud task

1.  Open the completed cloud task.

2.  Review the changed files and the task conversation in the web version of JetBrains Air.

3.  If you want the agent to review the recent changes, use `/review` command (type `/`, start typing `review`, and select Review with <agent>).

    ![Review with command](https://resources.jetbrains.com/help/img/air/air-review-with-agent-command.png "Review with command")

4.  In the quick actions list, select Git Commits.

5.  Select the recent task commit and send the request.

6.  If more work is needed, continue iterating in the same task: add extra context, leave comments in the code, and so on. Learn how to add context in [Task context](task-context.html).

## 3\. Apply the changes

After you review the result, apply the changes by creating a pull request from the task branch.

You can do this in either of the following ways:

-   in the cloud task itself, by clicking Create PR – resume the environment first if the task is Suspended

-   in your VCS provider, by opening the pushed task branch and creating a pull request there

## Run cloud tasks from IntelliJ-based IDEs

You can start a cloud task from the [AI Assistant](https://www.jetbrains.com/help/ai-assistant/about-ai-assistant.html) plugin in your IntelliJ-based IDE. This lets you stay in the IDE while the task runs in the cloud. You can monitor the task execution in JetBrains Air in the Tasks tool. You can also open your account page at [air.jetbrains.cloud](https://air.jetbrains.cloud/) to see your running tasks.

### Run a cloud task in an IntelliJ-based IDE

1.  In your IntelliJ-based IDE (for example, IntelliJ IDEA), open AI Chat.

2.  If the agent supports remote runs, a panel with a switcher for running it in the cloud appears. Switch to Cloud mode.

    ![AI Assistant with the JetBrains Cloud agent selected](https://resources.jetbrains.com/help/img/air/ai-assistant-cloud-agent.png "AI Assistant with the JetBrains Cloud agent selected")

3.  If you run the cloud task for this repository for the first time, the plugin prompts you to authorize the [JetBrains Air](connect-repositories.html#how_repository_access_works) connection app to access your repository.

4.  Select a branch and a model to run the task.

5.  Type a task and click Send.

    The agent runs in the cloud and writes its changes to a separate branch. When it finishes, you can review results by clicking View Commits and merge the changes into your working branch by clicking Merge.

    Alternatively, click Open in JetBrains Cloud to open [air.jetbrains.cloud](https://air.jetbrains.cloud/) for monitoring your tasks in the web interface.

For more details, refer to the [JetBrains AI Assistant documentation](https://www.jetbrains.com/help/ai-assistant/cloud-agents.html).

## Resume a suspended task

After 75 minutes of inactivity, JetBrains Air suspends the task's cloud environment and marks the task Suspended. Your results are safe on the task branch, and you can start the environment again while the task stays suspended.

### Resume a suspended task

1.  Open the suspended cloud task.

2.  Click Resume. JetBrains Air starts the environment again, and you can continue reviewing or working on the task.

The environment returns as it was, with the working tree, installed packages, and caches. Running processes are the exception, so restart servers, watchers, and anything else the task had running. See [Snapshots and preserved state](cloud-tasks.html#state_between_runs).

You can resume a task only while it stays suspended. After 24 hours of inactivity, JetBrains Air archives the task – you can still open it to view the chat history, but Resume is no longer available, because the environment can't be restarted. Your results remain on the task branch. See [Cloud environment lifecycle](cloud-tasks.html#cloud-environment-lifecycle).
