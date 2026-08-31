1.  [Work with code](#0)

2.  [Git](git.html)

3.  [Commit and push changes](#0)

# Commit and push changes

Last modified: 17 August 2026

Push CtrlShift0G,CtrlShift0P

After you've added new files to the local Git repository, or modified files that are already under Git version control, you can share the results of your work. This involves committing them locally and then pushing them to the remote repository.

## Commit changes

You commit in the Changes tool, which lists every file that changed in the current project. For the rest of what the tool does, see [Changes](changes.html).

### Commit changes locally

1.  Navigate to View | Tools in the main menu and select Changes.

2.  Select the checkboxes next to the files you want to commit. The counter at the top of the list shows how many of the changed files you selected, for example 3/7 files.

3.  Enter the commit message and click Commit.

    To have JetBrains Air draft the message for you, click Generate Commit Message ![Generate commit message](https://resources.jetbrains.com/help/img/air/generate-commit-message-icon.png "Generate commit message") next to Commit. Review and edit the suggested message before you commit.

    ![The Changes tool with a few files selected, the commit message field, and the Commit button
    with its drop-down open on the Amend item](https://resources.jetbrains.com/help/img/air/changes-commit-amend.png "The Changes tool with a few files selected, the commit message field, and the Commit button
    with its drop-down open on the Amend item")

### Amend the latest commit

Amend a commit when you want to fold new changes into the commit you just made instead of adding another one.

1.  Navigate to View | Tools in the main menu and select Changes.

2.  Select the files with the changes you want to add to the previous commit.

3.  Next to Commit, open the drop-down and select Amend.

4.  Edit the pre-filled commit message if you need to, then confirm the amend.

## Push changes to a remote repository

Before pushing your changes, [sync with the remote](git-sync-with-a-remote-repository.html) and make sure your local copy of the repository is up to date to avoid conflicts.

### Push your changes

1.  From the main menu, choose Git | Push or press CtrlShift0G,CtrlShift0P.

2.  In the Git Push dialog that opens, click Push.

3.  To push the changes to the remote branch, you now need to log in to your GitHub, GitLab, or Bitbucket account.

    -   For GitLab and Bitbucket, enter your credentials and click Log in.

    -   For GitHub, enter your personal access token and click Log in. If you do not have a token, follow the Generate link to generate a new personal access token in your GitHub settings.

        > ### note
        >
        > When you attempt to perform an operation with a GitHub repository, such as pushing, pulling, or fetching, a token input field appears. Click the provided link to generate a GitHub token. JetBrains Air pre-fills the minimum required scopes for the token to simplify the process.

After the successful login JetBrains Air pushes the local changes to the remote branch.
