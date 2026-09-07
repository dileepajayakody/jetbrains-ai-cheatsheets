1.  [Work with code](#0)

2.  [Git](#0)

# Git

Last modified: 17 August 2026

JetBrains Air has no single Git panel. Git operations sit next to the work they belong to: the Git menu for repository-wide commands, the branch selector for branches, the Changes tool for commits, and the History tool for the commit log.

## Where to find Git operations

Surface

What you do there

[The Git menu](/help/air/git.html#git-menu-options)

Sync, push, pull, and fetch. Show the commit history, work with the current file, and clone a repository.

[The branch selector](git-manage-branches.html)

See the branch that is currently checked out, check out another one, create a branch, and browse remote branches.

[The Changes tool](changes.html)

Review changed files, choose what goes into the next commit, [commit](git-commit-and-push-changes.html#commit-changes), and [revert changes](git-undo-changes.html#revert_changes).

[The History tool](history.html)

[Browse commits and task snapshots](git-browse-history.html), view diffs, pull and push, and [roll back to a commit](git-undo-changes.html#history_rollback).

[The Files tool](files.html)

Run Git actions on one file from its right-click menu, such as [file history](git-browse-history.html#history_file_history) or reverting its changes.

You can also run any Git action by name: press CtrlShift0K and type `git`.

## Git menu options

To see the list of options, choose Git in the main menu.

[Sync](git-sync-with-a-remote-repository.html#pull-and-push)

Pull the remote changes into the current branch, then push your local commits

[Push](git-commit-and-push-changes.html#push-changes-to-a-remote-repository)

CtrlShift0G,CtrlShift0P

Push local changes to the remote tracked branch

[Pull](git-sync-with-a-remote-repository.html#pull-changes)

CtrlShift0G,CtrlShift0U

Get changes into the current branch from the remote tracked branch

[Fetch](git-sync-with-a-remote-repository.html#fetch-changes)

Download changes from the remote repository

[Show History](history.html)

Open the History tool on the currently checked out branch

Current File | File History

CtrlShift0G,CtrlShift0H

Show the history of the file that is open in the editor

Current File | Toggle Git Blame

CtrlShift0G,CtrlShift0A

Open the gutter and show what revision and author last modified each line of a file

[Clone](git-set-up-a-repository.html#clone-project)

Clone a repository from Git

\>

## Git settings

To customize Git-related project settings, press Ctrl0, to open Settings, then open Git section.

### Global settings

The Global settings section contains general Git settings.

Check the necessary options to switch them on:

-   Show changes in the gutter: indicate the lines with the local changes.

-   Auto-fetch repositories: fetch changes from the remote repository in the set time interval.

-   Show confirmation on push: enable notifications that inform whether push was successful.

-   Show confirmation on revert: enable notification that informs whether revert was successful.
