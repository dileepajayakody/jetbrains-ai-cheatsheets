1.  [Work with code](#0)

2.  [Git](git.html)

3.  [Sync with remotes](#0)

# Sync with remote Git repositories

Last modified: 17 August 2026

Before you can push your changes to the upstream, you need to make sure your local copy of the project is up to date with the remote repository. You can do this in one of the ways: [fetch](/help/air/git-sync-with-a-remote-repository.html#fetch-changes) or [pull changes](/help/air/git-sync-with-a-remote-repository.html#pull-changes), as well as [sync the local branch with the remote](/help/air/git-sync-with-a-remote-repository.html#pull-and-push).

All three commands are in the Git menu and work on the branch that is currently checked out.

## Check the branch state

Before you sync, check which direction the branch has drifted. Click the branch name in the task header or in the title bar: each branch in the selector carries two counters.

![The branch selector listing branches with their counters](https://resources.jetbrains.com/help/img/air/branch-selector-ahead-behind.png "The branch selector listing branches with their counters")

-   ↑ counts the local commits you haven't pushed yet.

-   ↓ counts the remote commits you haven't pulled yet.

So ↑2 ↓3 means the branch has drifted apart on both sides, and [Sync](/help/air/git-sync-with-a-remote-repository.html#pull-and-push) brings it back in line in one step. ↑0 ↓0 means the branch matches the remote and there's nothing to sync.

The counters are only as fresh as your last [fetch](/help/air/git-sync-with-a-remote-repository.html#fetch-changes). To keep them current without fetching by hand, enable [Auto-fetch repositories](git.html#git-global-settings) in the Git settings.

## Fetch changes

When you fetch changes from the upstream, all new data from commits that were made since you last synced with the remote repository is downloaded into your local copy. This new data is not integrated into your local files, and changes are not applied to your code.

Fetched changes are stored as a remote branch, which gives you a chance to review them before you merge them with your files. Since fetch does not affect your local development environment, this is a safe way to get an update of all changes to a remote repository.

-   Select Git | Fetch from the main menu.

## Pull

If you need to get changes into the current branch from the remote tracked branch, use pull.

1.  Check out the branch you want to update. See [Check out branches](git-manage-branches.html#checkout-git-branch).

2.  Choose Git | Pull in the main menu or press CtrlShift0G,CtrlShift0U.

## Sync

Sync combines both directions in one command: JetBrains Air pulls the commits from the remote tracked branch into your local branch, then pushes your local commits to the remote. Use it when the branch has drifted apart on both sides.

1.  Select Git | Sync from the main menu.

2.  In the Git Sync dialog that opens, confirm the operation.

You can also pull and push from the [History](history.html) tool, where the Pull and Push buttons carry the number of commits waiting on each side.
