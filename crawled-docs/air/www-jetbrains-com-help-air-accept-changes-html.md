1.  [Review and integrate](review-and-integrate.html)

2.  [Accept changes](#0)

# Accept changes

Last modified: 17 June 2026

Accepting changes means moving the result of an agent task into the place where you continue normal development. In most workflows, this means applying the changes to a local branch, committing, and pushing them to a remote repository (either directly or through a pull request).

How you accept changes depends on where the task ran. In JetBrains Air, you accept changes from the merged diff shown in the Task Changes editor tab.

## Accept changes from local workspace

If the task ran in Local Workspace, the agent applied changes directly to your working copy. To accept them, commit and push.

### Commit changes

1.  Open the Task Changes editor tab and review the staged files.

2.  Enter a commit message and click Commit.

    To have JetBrains Air draft the message for you, click Generate Commit Message ![Generate commit message](https://resources.jetbrains.com/help/img/air/generate-commit-message-icon.png "Generate commit message") next to Commit.

    ![Commit changes](https://resources.jetbrains.com/help/img/air/review-diff-commit.png "Commit changes")

3.  Push the commit to the remote repository.

Alternatively, commit and push from the Changes tool.

## Accept changes from isolated environments

If the task ran in Git Worktree or Docker, JetBrains Air kept the agent isolated from your local working copy. After review, choose how to bring the result back to your local workspace.

-   Apply Locally: copies the uncommitted changes from the task branch to your local workspace.

-   Checkout Branch Locally: creates a new local branch and adds a commit with the message Auto-committed changes. The commit can include one file or all changed files, depending on where you run the action.

How isolation works

When you start a task in an isolated environment, JetBrains Air creates a dedicated branch for the task (for example, `air/<task>`) and a separate working directory managed by JetBrains Air. Your local project directory stays on the branch you started from (for example, `main`).

Example structure:

```
# Your local working copy (unchanged while the agent runs)
~/Projects/my-project/                          (branch: main)

# Air-managed task working copy (isolated)
~/Library/Caches/JetBrains/Air/tasks/
  air/<task>/
    my-project/                                 (branch: air/<task>)
```

### Apply changes locally

1.  In the Task Changes editor tab, click Apply Locally.

    ![Apply locally](https://resources.jetbrains.com/help/img/air/review-diff-apply-changes.png "Apply locally")

2.  JetBrains Air copies the changes from the task worktree back to your current working copy as uncommitted changes.

3.  Choose how to integrate the changes: create a new branch and open a pull request, or commit and push directly to the current branch.

### Check out branch locally

1.  In the Task Changes editor tab, open the Apply Locally drop-down menu.

2.  Click Checkout Branch Locally.

3.  JetBrains Air checks out the task branch in your local working copy. The branch typically has the same name as the task branch, with a suffix `-copy`, e.g., `air/add-new-feature-copy`.

4.  Push the branch to the remote repository or open a pull request as usual.

## Revert changes

Revert changes when you do not want to keep the result.

### Revert a single file

1.  Open the Changes tool. You can use the following options:

    -   Navigate to View | Changes in the main menu.

    -   On the tool panel, click Changes.

2.  On the Task Changes tab, click Revert ![Revert changes](https://resources.jetbrains.com/help/img/air/air-review-revert.png "Revert changes") next to the file name.

    ![Revert a single file](https://resources.jetbrains.com/help/img/air/revert_single_file.png "Revert a single file")

### Revert all changes from a task

1.  Open the Changes tool. You can use the following options:

    -   Navigate to View | Changes in the main menu.

    -   On the tool panel, click Changes.

2.  On the Task Changes tab, click Revert All ![Revert all changes](https://resources.jetbrains.com/help/img/air/air-review-revert-all.png "Revert all changes").

    ![Revert all changes](https://resources.jetbrains.com/help/img/air/revert_all_changes.png "Revert all changes")

## Stage and commit changes

Stage the files you want to include, then commit the result. Staging means selecting which changes will go into the next commit. Only staged changes are included in a commit. Changes that are not staged stay in your working copy.

### Stage files

1.  Open the Changes tool. You can use the following options:

    -   Navigate to View | Changes in the main menu.

    -   On the tool panel, click Changes.

2.  In the Changes tool, select the files you want to stage.

    You can click the file and select changes inside the file that you want to include.

    ![Stage files](https://resources.jetbrains.com/help/img/air/stage_files.png "Stage files")

### Commit staged changes

1.  Open the Changes tool. You can use the following options:

    -   Navigate to View | Changes in the main menu.

    -   On the tool panel, click Changes.

2.  In the Changes tool, enter a commit message in the commit message field.

    To have JetBrains Air draft the message for you, click Generate Commit Message ![Generate commit message](https://resources.jetbrains.com/help/img/air/generate-commit-message-icon.png "Generate commit message") next to Commit.

3.  Click Commit.

    ![Commit changes](https://resources.jetbrains.com/help/img/air/commit_changes.png "Commit changes")

## Roll back to a commit

To roll back to a specific commit, use the History tool.

### Open the History tool

-   Navigate to View | Tools in the main menu and select History.

-   On the tool panel, click History.

### Reset the current branch to a commit

1.  In the History tool, right-click the commit you want to roll back to.

2.  Select Reset Current Branch To Here.

3.  Select the reset mode:

    -   Mixed — Keep All Changes

    -   Keep — Keep Only Uncommitted Changes

    -   Hard — Discard All Changes

    ![Reset branch to commit](https://resources.jetbrains.com/help/img/air/reset_branch_to_commit.png "Reset branch to commit")
