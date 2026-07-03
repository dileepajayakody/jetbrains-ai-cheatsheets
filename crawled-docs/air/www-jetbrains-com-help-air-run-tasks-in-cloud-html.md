1.  [Cloud agents](cloud-agents.html)

2.  [Run tasks in cloud](#0)

Limited EAP

# Run tasks in cloud

Last modified: 24 June 2026

Cloud tasks run in remote cloud environments instead of on your machine. You can start them either from the JetBrains Air app or from [https://air.jetbrains.cloud](https://air.jetbrains.cloud) in a browser.

### How cloud runs differ from local runs

> ### tip
>
> In cloud runs, after the task is done, the agent commits changes to a separate task branch and pushes them to the remote repository.

In local runs, JetBrains Air changes files in your local working copy and does not commit them automatically ([see details](review-and-integrate.html)).

In cloud runs, JetBrains Air uses a remote environment with a limited lifetime. Although the environment remains available for some time after the task is done, there is always a chance that you will return after it is no longer available and will not be able to open it to review the changes there.

To avoid this risk, JetBrains Air commits the result to a separate task branch and pushes it to the remote repository. Because of this, the cloud workflow is slightly different: after the task is done, you review the result and then create a pull request from the pushed task branch.

## Before you start

You can start with the default cloud environment, but for many projects it is useful to configure the environment first.

-   If you run tasks from the web UI, you must first configure a repository connection. Without it, you cannot select a repository in the browser. [Learn how to connect repositories](connect-repositories.html).

-   If your project needs specific dependencies, environment variables, secrets, or integrations, create an environment configuration for the repository in advance. [Learn how to configure environments](configure-environments.html).

## 1\. Run a cloud task

You can start a cloud task from the JetBrains Air app or from the web UI.

### From the JetBrains Air app

### Run a cloud task from the JetBrains Air app

1.  Open your project in the JetBrains Air app.

2.  Start creating a new task.

3.  In the task run environment selector, choose Cloud.

    ![The run environment selector in the Air app with Cloud selected](https://resources.jetbrains.com/help/img/air/airteam-run-task-from-app.png "The run environment selector in the Air app with Cloud selected")

4.  Enter your task prompt and send the task.

### From the web UI

### Run a cloud task from the web UI

1.  Log in to [https://air.jetbrains.cloud](https://air.jetbrains.cloud) with your JetBrains Account.

2.  On the New Task page, select a repository and a branch.

3.  Enter your task prompt and send the task.

    ![The New Task page in the web version of JetBrains Air with repository, branch, and task prompt fields](https://resources.jetbrains.com/help/img/air/airteam-run-task-web.png "The New Task page in the web version of JetBrains Air with repository, branch, and task prompt fields")

4.  After the task starts, it appears in the left pane.

    ![A started cloud task shown in the left pane of the web version of JetBrains Air](https://resources.jetbrains.com/help/img/air/airteam-started-task.png "A started cloud task shown in the left pane of the web version of JetBrains Air")

## 2\. Review the result

After the task is done, open it to review the result. JetBrains Air opens in your browser, so you can inspect the changed files, continue working with the agent, or ask the agent to review the recent changes.

![the web version of JetBrains Air. Cloud task done](https://resources.jetbrains.com/help/img/air/air-web-cloud-run-task-done.png "the web version of JetBrains Air. Cloud task done")

### Review a cloud task

1.  Open the completed cloud task.

2.  Review the changed files and the task conversation in the web version of JetBrains Air.

3.  If you want the agent to review the recent changes, use `/review` command (type `/`, start typing `review`, and select Review with Agent).

    ![Review with command](https://resources.jetbrains.com/help/img/air/air-review-with-agent-command.png "Review with command")

4.  In the quick actions list, select Git Commits.

5.  Select the recent task commit and send the request.

6.  If more work is needed, continue iterating in the same task: add extra context, leave comments in the code, and so on. Learn how to add context in [Task context](task-context.html).

> ### note
>
> If the task is in the **Completed** state, its cloud environment is no longer available. In this case, check out the task branch in JetBrains Air and review the recent commit there instead.
>
> The **Completed** state is temporary. In a future release, it will be replaced with **Suspended**, and it will be possible to restart the environment.

## 3\. Apply the changes

After you review the result, apply the changes by creating a pull request from the task branch.

You can do this in either of the following ways:

-   in the cloud task itself (if the cloud environment still exists), by clicking Create PR

-   in your VCS provider, by opening the pushed task branch and creating a pull request there

## Run cloud tasks from IntelliJ-based IDEs

You can start a cloud task from the [AI Assistant](https://www.jetbrains.com/help/ai-assistant/about-ai-assistant.html) in your IntelliJ-based IDE. This lets you stay in the IDE while the task runs in the cloud. You can monitor the task execution in JetBrains Air in the Tasks tool. You can also open your account page at [air.jetbrains.cloud](https://air.jetbrains.cloud/) to see your running tasks.

### Run a cloud task in an IntelliJ-based IDE

1.  In your IntelliJ-based IDE (for example, IntelliJ IDEA), open AI Assistant and select JetBrains Cloud from the list of agents.

    [![AI Assistant with the JetBrains Cloud agent selected](https://resources.jetbrains.com/help/img/air/ai-assistant-cloud-agent.png "AI Assistant with the JetBrains Cloud agent selected")](https://resources.jetbrains.com/help/img/air/ai-assistant-cloud-agent.png)

2.  Type a task and click Send.

    In JetBrains Air, open Tasks and select the task to track its state and progress.

    Alternatively, open [air.jetbrains.cloud](https://air.jetbrains.cloud/) to monitor your running tasks in the web interface.

    [![the web version of JetBrains Air. Cloud running tasks](https://resources.jetbrains.com/help/img/air/air-web-cloud-running-tasks.png "the web version of JetBrains Air. Cloud running tasks")](https://resources.jetbrains.com/help/img/air/air-web-cloud-running-tasks.png)
