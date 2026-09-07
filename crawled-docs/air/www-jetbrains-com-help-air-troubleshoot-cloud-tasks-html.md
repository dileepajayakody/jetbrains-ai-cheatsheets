1.  [Cloud tasks](cloud-tasks.html)

2.  [Troubleshooting](#0)

EAP

# Troubleshoot cloud tasks

Last modified: 20 August 2026

Cloud tasks run in remote cloud environments, so you can't inspect a local process when something goes wrong. This topic explains how to check what happened, what you can fix yourself, and what to collect before you contact support.

## Check the task status and error

Start with the status. A failed task is marked Problem in the task list, and the task page shows the error at the top. The message often names the cause – for example, a missing AI license.

![A cloud task with a Problem status in the task list and the error message shown at the top of the task page](https://resources.jetbrains.com/help/img/air/cloud-task-problem-details.png "A cloud task with a Problem status in the task list and the error message shown at the top of the task page")

For the cloud task workflow, see [Run tasks in cloud](run-tasks-in-cloud.html).

## The result isn't what you expected

If a task finishes but the outcome doesn't match what you wanted, the issue is usually in how the agent approached the task, not in the platform. Open the task and review the agent conversation and the changed files to see what the agent did.

From there, keep iterating in the same task: add more context, leave comments in the code, or refine your prompt, and run it again. Learn how to add context in [Task context](task-context.html) and how to review a result in [Run tasks in cloud](run-tasks-in-cloud.html#review_cloud_task_result).

## The Git history is missing or incomplete

If `git log` in a cloud task shows a single commit, or the agent reports that it can't find earlier commits, tags, or blame information, the checkout is still [shallow](cloud-tasks.html#cloud_repository_checkout). JetBrains Air clones only the latest commit when the environment starts, so the history isn't there until someone fetches it.

Ask the agent to run `git fetch --unshallow`, or fetch the history from the environment's startup script so that it's ready before the agent starts.

## The environment is missing dependencies or secrets

A cloud environment doesn't inherit your local setup. If a task fails because a dependency, environment variable, or secret is missing, update the environment configuration for the repository and run the task again.

Start a **new** task after you save the configuration. The failed task keeps the environment it was created with, so it won't see your change, not even after you resume it. See [Edit an environment configuration](configure-environments.html#edit_environment_configuration).

Learn how to [configure environments](configure-environments.html).

## The environment has leftovers from an earlier run

If a task finds outdated files, an old tool version, or a stale build cache, the environment probably started from a snapshot of an earlier run. Everything outside the repository can be preserved, while the repository itself is synced fresh. See [Snapshots and preserved state](cloud-tasks.html#state_between_runs).

Make the [startup script](configure-environments.html#cloud_startup_script) refresh what it created rather than skip the work when a file is already there. For example, update an existing checkout instead of cloning only when the directory is missing – see [Clone additional repositories](clone-additional-repositories.html).

## The task didn't start or ended with an error

Read the error at the top of the task page first. If it names a cause you can act on, fix that and run the task again. Some failures are transient, such as a temporary problem while the environment starts, so a retry often succeeds.

If the task keeps failing and the error doesn't point to anything you can fix, this is usually an infrastructure issue on the JetBrains side. Collect the information below and [contact support](/help/air/troubleshoot-cloud-tasks.html#contact_support).

## Collect information for support

Support uses the task ID to find your task, and the collected logs to trace the failure. You can get both from the task's options menu.

![The task options menu with the Copy ID and Collect Logs items](https://resources.jetbrains.com/help/img/air/cloud-task-options-menu.png "The task options menu with the Copy ID and Collect Logs items")

### Copy the task ID

Open the task's options menu and select Copy ID. Paste it into your support request when asked.

### Collect the task logs

If the task's cloud environment has started, you can collect its logs. Open the task's options menu and select Collect Logs. JetBrains Air saves a ZIP archive that contains the cloud-side logs for the run.

Attach this archive to your support request. If the environment never started, there are no logs to collect – share the task ID and the error message instead.

## Contact support

To reach support, open the user menu and select Contact Support.

![The user menu with the Contact Support item selected](https://resources.jetbrains.com/help/img/air/contact-support-user-menu.png "The user menu with the Contact Support item selected")

To help support investigate, include:

-   the task ID (see [Copy the task ID](/help/air/troubleshoot-cloud-tasks.html#copy_task_id)) and the collected logs archive, if available

-   the error message shown on the task page

-   what you expected to happen and what happened instead, with the steps to reproduce it
