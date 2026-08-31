1.  [Tools](tools.html)

2.  [History](#0)

# History

Last modified: 17 August 2026

Use History to track how your workspace evolves over time. History combines Git commits with task-related snapshots, so you can review what happened before a request, what the agent changed, and what you applied to your branch.

[![History tool](https://resources.jetbrains.com/help/img/air/aird_history_tool.png "History tool")](https://resources.jetbrains.com/help/img/air/aird_history_tool.png)

### Open the History tool

-   Navigate to View | Tools in the main menu and select History.

-   On the tool panel, click History.

## What you see in History

History can show different types of entries, such as:

-   Git commits from your repository.

-   Before Request snapshots that capture the state before a task started.

-   Auto-committed changes created when you check out task changes to a local branch.

-   Uncommitted changes from the user's working copy when JetBrains Air records your current local edits.

Pull and Push at the top of the tool carry the number of commits waiting on each side, so you can see what needs syncing while you read the timeline.

## What you can do here

-   [Browse Git history](git-browse-history.html) – search and filter the timeline, and compare any entry with your current code.

-   [Check out a commit](git-manage-branches.html#history_checkout_commit) or [start a branch from it](git-manage-branches.html#history_branch_from_commit).

-   [Roll back to a commit](git-undo-changes.html#history_rollback) by resetting the current branch.

-   [Pull](git-sync-with-a-remote-repository.html#pull-changes) remote commits and [push](git-commit-and-push-changes.html#push-changes-to-a-remote-repository) your local ones.
