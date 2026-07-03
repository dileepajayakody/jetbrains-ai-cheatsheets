1.  [Tools](tools.html)

2.  [Git](git.html)

3.  [Commit and push changes](#0)

# Commit and push changes

Last modified: 17 June 2026

Push ⌃Ctrl0G⌃Ctrl0P

After you've added new files to the local Git repository, or modified files that are already under Git version control and you are happy with their current state, you can share the results of your work. This involves committing them locally to record the snapshot of your repository to the project history, and then pushing them to the remote repository so that they become available to others.

### Generating a GitHub token in JetBrains Air

-   When a user attempts to perform an operation with a GitHub repository, such as push, pull, or fetch. The token input field appears, the user needs to click the provided link to generate a GitHub token. JetBrains Air pre-fills suggested scopes for the token.

## Work with commits

### Commit changes locally

1.  Navigate to View | Tools in the main menu and select Git.

2.  In the Changed files list, select the files you want to commit.

    If you want to group the list of changed files by directory, click the Settings icon and select Group by | Directory.

    ![Git commit group by directory](https://resources.jetbrains.com/help/img/air/aird_git_commit_group_by_directory.png "Git commit group by directory")

3.  Enter the commit message and click Commit.

    To have JetBrains Air draft the message for you, click Generate Commit Message ![Generate commit message](https://resources.jetbrains.com/help/img/air/generate-commit-message-icon.png "Generate commit message") next to Commit. Review and edit the suggested message before you commit.

### Amend commits

If you want to modify the latest commit, use the Amend Commit option.

1.  Navigate to View | Tools in the main menu and select Git.

2.  In the Git tool, select the modified files containing the changes you want to add to the previous commit.

3.  Click the Settings icon and select Amend Commit.

    ![Git amend commit](https://resources.jetbrains.com/help/img/air/aird_git_amend_commit.png "Git amend commit")

4.  Modify the pre-filled commit message of the previous commit if necessary.

5.  Click the Amend commit button.

## Push changes to a remote repository

Before pushing your changes, [sync with the remote](git-sync-with-a-remote-repository.html) and make sure your local copy of the repository is up to date to avoid conflicts.

### Push your changes

1.  From the main menu, choose Git | Push or press ⌃Ctrl0G⌃Ctrl0P.

2.  In the Git Push dialog that opens, click Push.

3.  To push the changes to the remote branch, you now need to log in to your GitHub, GitLab, or Bitbucket account.

    -   For GitLab and Bitbucket, enter your credentials and click Log in.

    -   For GitHub, enter your personal access token and click Log in. If you do not have a token, follow the Generate link to generate a new personal access token in your GitHub settings.

        > ### note
        >
        > When you attempt to perform an operation with a GitHub repository, such as pushing, pulling, or fetching, a token input field appears. Click the provided link to generate a GitHub token. JetBrains Air pre-fills the minimum required scopes for the token to simplify the process.

After the successful login JetBrains Air pushes the local changes to the remote branch.
