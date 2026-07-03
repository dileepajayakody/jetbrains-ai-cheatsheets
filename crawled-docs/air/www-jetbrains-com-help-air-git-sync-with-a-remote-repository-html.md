1.  [Tools](tools.html)

2.  [Git](git.html)

3.  [Synchronizing with a remote Git repository](#0)

# Synchronizing with a remote Git repository

Last modified: 16 March 2026

Before you can share the results of your work by pushing your changes to the upstream, you need to synchronize with the remote repository to make sure your local copy of the project is up to date. You can do this in one of the following ways: [fetch](/help/air/git-sync-with-a-remote-repository.html#fetch-changes) or [pull changes](/help/air/git-sync-with-a-remote-repository.html#pull-changes), as well as [sync the local project with the remote](/help/air/git-sync-with-a-remote-repository.html#pull-and-push).

### Synchronizing by using the branch menu

-   Click the Current Branch menu, navigate to your branch, and click the vertical ellipsis icon (!).

    ![Current branch menu](https://resources.jetbrains.com/help/img/air/aird_current_branch_menu.png "Current branch menu")

    For the currently selected branch, you can select from the following list of actions:

    -   Push: sends your local commits to the remote repository. Use this to share your changes with other team members.

    -   Pull: retrieves the latest changes from the remote repository and merges them into your current branch. This ensures your branch is up to date with the remote.

    -   Pull & Push: performs a pull followed by a push. This ensures your branch is synchronized with the remote repository by fetching the latest changes, merging them, and then sending your updates.

    -   Fetch: downloads the latest changes from the remote repository without merging them into your current branch. Use this to review the changes before integrating them.

    For non-selected branches, you can select from the following list of actions:

    ![Non-selected branches](https://resources.jetbrains.com/help/img/air/aird_non_selected_branches.png "Non-selected branches")

    -   New branch from <branch\_name>: creates a new branch based on the selected branch. Use this to start a new line of development without modifying the original branch.

    -   Compare with current branch: compares the selected branch with your current branch to review the differences.

    -   Show Diff with Working Tree: displays the differences between the selected branch and the current state of your working directory.

    -   Push: sends the commits of the selected branch to the remote repository.

    -   Fetch: retrieves the latest updates from the remote repository for the selected branch without merging them.

    -   Delete: deletes the selected branch.

## Fetch changes

When you fetch changes from the upstream, all new data from commits that were made since you last synced with the remote repository is downloaded into your local copy. This new data is not integrated into your local files, and changes are not applied to your code.

Fetched changes are stored as a remote branch, which gives you a chance to review them before you merge them with your files. Since fetch does not affect your local development environment, this is a safe way to get an update of all changes to a remote repository.

There are two ways to fetch changes from the upstream:

-   Select Git | Fetch from the main menu.

-   Alternatively, in the Branches menu, click the name of the branch that is currently checked out, then choose Remote Branches | Fetch.

    ![Fetch option in the branches menu](https://resources.jetbrains.com/help/img/air/aird_fetch.png "Fetch option in the branches menu")

## Pull

If you need to get changes into the current branch from the remote tracked branch, use pull.

To pull changes into the local branch from the remote tracked branch:

1.  Check out the branch you want to update by clicking its name in the Branches menu.

2.  Choose Git | Pull in the main menu or press ⌃Ctrl0G⌃Ctrl0U.

## Pull and push

The Unsynced commits tab is a part of the Git tool. It helps you synchronize the local branch with the remote tracked branch.

![Unsynced commits tab](https://resources.jetbrains.com/help/img/air/aird_unsynced_commits.png "Unsynced commits tab")

After you perform the [fetch](/help/air/git-sync-with-a-remote-repository.html#git-fetch) operation, this tab will indicate if there are any unsynchronized commits between your local branch and the remote tracked branch.

To synchronize the changes between your local branch and the remote tracked branch:

1.  Select Git | Commit from the main menu.

2.  In the Unsynced commits tab, click Pull & Push.

3.  In the Git Sync dialog that opens, confirm the operation by choosing Pull & Push.

First, JetBrains Air pushes local changes to the remote tracked branch. Then, if the remote branch also contains unsynchronized commits, JetBrains Air pulls them into the local branch.
