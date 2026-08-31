1.  [Work with code](#0)

2.  [Git](git.html)

3.  [Browse history](#0)

# Browse Git history

Last modified: 17 August 2026

The [History](history.html) tool is where you look back: it interleaves Git commits with the snapshots JetBrains Air takes around agent tasks, so you can find the point you care about and compare it with what you have now.

[![History tool](https://resources.jetbrains.com/help/img/air/aird_history_tool.png "History tool")](https://resources.jetbrains.com/help/img/air/aird_history_tool.png)

## Find an entry

### Search commits and snapshots

-   In the History tool, type in the Search commits field.

### Filter by branch or author

-   Use the Branch and User selectors to filter the list.

### View the history of one file

1.  Open the file in the editor.

2.  Select Git | Current File | File History in the main menu, or press CtrlShift0G,CtrlShift0H.

## Compare an entry with your code

Select an entry to see which files changed and review the diff.

[![History entry details](https://resources.jetbrains.com/help/img/air/aird_history_entry_details.png "History entry details")](https://resources.jetbrains.com/help/img/air/aird_history_entry_details.png)

### View file diffs for an entry

1.  In the History tool, select an entry in the list.

2.  In the details pane, select a file. JetBrains Air opens the diff for the selected file.

### Compare with the current branch

1.  In the History tool, right-click an entry.

2.  Select Compare with Current Branch.

### Show diff with the working tree

1.  In the History tool, right-click an entry.

2.  Select Show Diff with Working Tree.

### Copy a revision number

-   In the History tool, right-click the commit and select Copy Revision Number.

    ![The right-click menu of a commit in the History tool, showing Checkout, New Branch from Here,
    Copy Revision Number, Compare with Current Branch, Show Diff with Working Tree, and Reset Current
    Branch To Here](https://resources.jetbrains.com/help/img/air/history-commit-menu.png "The right-click menu of a commit in the History tool, showing Checkout, New Branch from Here,
    Copy Revision Number, Compare with Current Branch, Show Diff with Working Tree, and Reset Current
    Branch To Here")

From the same right-click menu you can also [check out a commit](git-manage-branches.html#history_checkout_commit), [start a branch from it](git-manage-branches.html#history_branch_from_commit), or [reset the current branch to it](git-undo-changes.html#reset_branch_to_commit).
