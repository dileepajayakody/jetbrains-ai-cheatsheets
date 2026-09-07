1.  [Work with code](#0)

2.  [Search and replace](#0)

# Search and replace

Last modified: 17 August 2026

Use the [Search](search.html) tool when you need every match in the project at once: an error message, a config key, an API name you're about to change. You can narrow the search, group the results, replace matches across files, and hand the whole result set to an agent as context.

## Find and replace actions

Four similarly named actions cover the two scopes: the file you have open, and the whole project. If you don't remember a shortcut, press CtrlShift0K for the Actions tab of Go to All and type `find` or `replace`.

![The Actions tab of Go to All with find typed, listing Find, Find Next, Find Previous, Find Usages,
and Find in Files with their shortcuts](https://resources.jetbrains.com/help/img/air/goto-actions-find.png "The Actions tab of Go to All with find typed, listing Find, Find Next, Find Previous, Find Usages,
and Find in Files with their shortcuts")

Action

Scope

Shortcut

Find

The file you have open

Ctrl0F

Replace

The file you have open

Ctrl0H

Find in Files…

The whole project. Opens Text Search, which is built for jumping to one result – see [Go to All](explore-projects.html#goto-all).

CtrlShift0F

Replace in Files…

The whole project. Opens the Search tool in replace mode.

CtrlShift0H

To find where a symbol is used rather than where a string appears, use [Find Usages](explore-projects.html#find-usages) (Ctrl0U).

### Search across the project

1.  Navigate to View | Tools in the main menu and select Search.

2.  On the tool panel, click Search.

3.  Enter the text you want to find. You can use regular expressions and the search options in the search field.

    ![Open the Search tool](https://resources.jetbrains.com/help/img/air/aird_open_the_search_tool.png "Open the Search tool")

4.  Select a match to open the file at that line.

## Narrow the search

When a search returns too much, use the filter menu in the Search tool to scope it down.

### Limit the search scope

1.  In the Search tool, open the filter menu.

2.  Enable Scope to show the In folder field.

3.  Select a folder to search in.

### Filter by file name pattern

1.  In the Search tool, open the filter menu.

2.  Enable File Mask to show the File mask field.

3.  Enter a file name pattern.

### Group results by folder

1.  In the Search tool, open the filter menu.

2.  Under Group By, select Folder. JetBrains Air shows parent folders in the results pane.

## Replace in multiple files

To go straight to replace mode from anywhere, press CtrlShift0H (Replace in Files…).

### Switch between search and replace

-   In the Search tool, click Toggle Replace.

    ![Switch between search and replace](https://resources.jetbrains.com/help/img/air/aird_search_toggle_replace.png "Switch between search and replace")

## Send the results to an agent

A result set is a good starting point for a task: it tells the agent every place a change has to reach.

### Add search results to a task

1.  Run a search.

2.  Click Add Search Results to Task. JetBrains Air adds the current search results to the task context.

For the other ways to give an agent context, see [Task context](task-context.html).
