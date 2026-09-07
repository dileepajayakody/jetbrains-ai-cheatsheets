1.  [Work with code](#0)

2.  [Git](git.html)

3.  [Manage branches](#0)

# Manage Git branches

Last modified: 18 August 2026

Branches live in the branch selector, which shows the name of the branch that is currently checked out. You can find it in the task header, next to the workspace and the run environment, and in the title bar. Open it to search branches, create one, or switch to another.

![The branch selector open in the task header, showing the search field, Create New Branch, the Recent
Branches list with ahead and behind counters, and the Remote Branches submenu](https://resources.jetbrains.com/help/img/air/branch-selector.png "The branch selector open in the task header, showing the search field, Create New Branch, the Recent
Branches list with ahead and behind counters, and the Remote Branches submenu")

A blue circle marks the branch that is currently checked out. The arrows next to a branch name count the commits that are not synced with the remote. See [Check the branch state](git-sync-with-a-remote-repository.html#check-branch-state).

## Create a new branch

### Create a new branch from the current branch

1.  Click the branch name in the task header or in the title bar.

2.  Select Create New Branch.

3.  Specify the branch name.

    JetBrains Air then automatically checks out the newly created branch.

### Create a branch from a commit

To branch off an earlier commit instead of the current one, start from the History tool.

1.  Navigate to View | Tools in the main menu and select History.

2.  Right-click the commit and select New Branch from Here.

3.  Specify the branch name.

## Check out branches

### Check out a local branch

1.  Click the branch name in the task header or in the title bar.

2.  Under Recent Branches, click the branch you want to check out. To find a branch that is not in the list, type its name in the search field.

### Check out a remote branch as a new local branch

If you want to work on a branch created by someone else, you need to check it out to create a local copy of that branch.

1.  Select Git | Fetch from the main menu to download the latest remote data.

2.  Click the branch name in the task header or in the title bar.

3.  Select Remote Branches and click the branch you want to check out locally.

### Check out a commit

1.  Navigate to View | Tools in the main menu and select History.

2.  Right-click the commit and select Checkout <revision>.
