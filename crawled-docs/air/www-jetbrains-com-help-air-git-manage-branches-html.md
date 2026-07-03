1.  [Tools](tools.html)

2.  [Git](git.html)

3.  [Manage Git branches](#0)

# Manage Git branches

Last modified: 24 February 2026

In JetBrains Air, all operations with branches are performed in the Branches menu:

![Branches menu in the upper panel](https://resources.jetbrains.com/help/img/air/aird_branches_menu.png "Branches menu in the upper panel")

It shows the name of the branch that is currently checked out.

## Create a new branch

### Create a new branch from the current branch

1.  Select Git | Branches from the main menu.

2.  In the Create branch and checkout dialog, specify the branch name.

    JetBrains Air then automatically checks out the newly created branch. A blue circle next to the branch name indicates that this branch is currently checked out.

## Check out branches

### Check out a local branch

To check out one of the local branches:

1.  Select Git | Branches from the main menu.

2.  Select the branch you want to check out and click it.

    A blue circle next to the branch name in the list of local branches indicates that this branch is currently checked out.

### Check out a remote branch as a new local branch

If you want to work on a branch created by someone else, you need to check it out to create a local copy of that branch.

1.  Select Git | Branches from the main menu.

2.  Select Remote Branches | Fetch.

    ![Fetch option in the branches menu](https://resources.jetbrains.com/help/img/air/aird_fetch.png "Fetch option in the branches menu")

3.  Select Git | Branches from the main menu.

4.  Click the Remote Branches list and select a branch that you want to check out locally.
