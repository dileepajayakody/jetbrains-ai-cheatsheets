1.  [Work with code](#0)

2.  [Git](git.html)

3.  [Undo changes](#0)

# Undo changes

Last modified: 17 August 2026

How you back out a change depends on whether it's committed yet. Revert uncommitted work in the [Changes](changes.html) tool, and move the branch off commits you no longer want from the [History](history.html) tool.

## Revert uncommitted changes

Reverting restores the file to its state in the last commit. To reject what an agent just wrote, you can also revert straight from the review diff: see [Revert changes](accept-changes.html#revert_changes).

### Revert one file

1.  Navigate to View | Tools in the main menu and select Changes.

2.  Right-click the file and select Revert <file>, or click Revert next to the file name.

    ![The right-click menu of a changed file in the Changes tool, showing the Add and Revert items](https://resources.jetbrains.com/help/img/air/changes-file-menu.png "The right-click menu of a changed file in the Changes tool, showing the Add and Revert items")

### Revert every change in the list

1.  Navigate to View | Tools in the main menu and select Changes.

2.  At the top of the changed files list, click Revert All.

## Roll back to a commit

Reset the current branch when you want to return it to an earlier state.

### Reset the current branch to a commit

1.  Navigate to View | Tools in the main menu and select History.

2.  Right-click the commit you want to roll back to and select Reset Current Branch To Here.

3.  Select the reset mode:

    -   Mixed — Keep All Changes: moves the branch to the selected commit and keeps your current file changes as uncommitted changes.

    -   Keep — Keep Only Uncommitted Changes: moves the branch to the selected commit and keeps only changes that are not committed.

    -   Hard — Discard All Changes: moves the branch to the selected commit and discards all local changes.

> ### warning
>
> Hard — Discard All Changes throws away your uncommitted work, and reverted changes can't be restored from JetBrains Air. If you might still need the code, commit it to a scratch branch first.
