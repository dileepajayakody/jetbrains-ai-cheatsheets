1.  [Work with code](#0)

2.  [Explore code](#0)

# Explore code

Last modified: 17 August 2026

Even when you develop code with agents, IDE features are still essential. You still need to understand code, inspect changes, verify assumptions, and quickly navigate to the exact place you want to review or edit.

JetBrains Air provides the core navigation and search features for this workflow: browsing files, searching across the codebase, jumping to files and symbols, and navigating through definitions, usages, implementations, and problems.

> ### note
>
> Some navigation features depend on language support.

To open or clone a project, see [Open projects](open-projects.html).

## Open the project in an IntelliJ-based IDE

When you need capabilities that go beyond code navigation and search, such as debugging, run configurations, or advanced refactoring, open the same project in a full IntelliJ-based IDE installed on your machine, such as IntelliJ IDEA, PyCharm, Rider, and others.

1.  In the top-right corner of the JetBrains Air window, click the IDE selector next to the IDE icon.

    ![The IDE selector in the top-right corner of the Air window, expanded to list installed IntelliJ-based IDEs](https://resources.jetbrains.com/help/img/air/explore-open-in-installed-ide.png "The IDE selector in the top-right corner of the Air window, expanded to list installed IntelliJ-based IDEs")

2.  Select an IDE from the list of the IntelliJ-based IDEs you have installed.

3.  The selected IDE opens the current project. JetBrains Air stays open, so you can keep running agent tasks while you work in the IDE.

## Browse files and folders

Use the Files tool to browse the project structure. Expand folders to navigate through the repository, and click a file to open it in an editor tab. You can open files in splits, and add any item to a task as [context](task-context.html).

### Open the Files tool

-   Navigate to View in the main menu and select Files.

-   On the tool panel, click Files.

To quickly find a file in the tree, focus the Files tool and press Ctrl0F. Then start typing to filter the visible items.

### Manage files from the tree

1.  In the Files tool, right-click a file or folder.

2.  Select an action, such as New File…, New Folder…, Rename…, Delete…, Copy Path, or Paste.

The same menu holds a Git submenu for the selected file, with actions such as [file history](git-browse-history.html#history_file_history), comparing the file with a branch or commit, and [reverting changes](git-undo-changes.html#revert_changes).

## Go to All (Search Everywhere)

Use Go to All to quickly navigate through the project and the IDE. If you used IntelliJ-based IDEs before, this workflow is similar to Search Everywhere: one entry point for files, symbols, actions, tools, and text search.

### Use Go to All

1.  Open Go to All in one of the following ways:

    -   Press Ctrl0K or Shift Shift.

    -   In the main menu, select Goto | All....

2.  In the Goto tab, start typing to search across files, symbols, and symbols in the current file.

3.  Use the filters below the search field to narrow results to Files, Symbols, or Symbols in File.

4.  Select a result to preview it in the lower part of the popup. Press Enter to open the selected result in an editor tab.

    ![Go to All popup](https://resources.jetbrains.com/help/img/air/search-everywhere.png "Go to All popup")

### Find and run actions

1.  Open the Actions tab in one of the following ways:

    -   Press CtrlShift0K.

    -   Open Go to All and switch to Actions.

    -   Go to Goto | Action....

2.  Type the action name, for example, Add to Task or Settings.

3.  Select the action and press Enter to run it.

### Open tools

1.  Open the Tools tab in one of the following ways:

    -   Press Ctrl0T.

    -   Open Go to All and switch to Tools.

    -   Go to Goto | Tools.

2.  Type the tool name, for example, Files, Chat, or Review.

3.  Select the tool and press Enter to open it.

### Search text across the project

1.  Open the Text Search tab in one of the following ways:

    -   Open Go to All and switch to Text Search.

    -   Press CtrlShift0F.

    -   Run the Find in Files… action.

2.  Enter the text you want to find. You can use regular expressions and the search options in the search field.

3.  Optionally, narrow the search with In folder and File mask.

4.  Review the matches and open the result you need.

Text Search is built for jumping to one result. When you need to see every match at once, replace text across files, or hand the whole result set to an agent, use the Search tool instead – see [Search and replace](search-and-replace.html).

## Navigate through code

For supported languages, JetBrains Air provides language-aware code navigation features such as going to definitions, finding usages, and navigating to implementations. For other languages, basic editor features such as syntax highlighting may still be available, but advanced navigation can be limited.

The exact level of support depends on the language. For the current list, see [Language support](supported-languages.html).

### Find usages

1.  Place the caret on a symbol in the editor.

2.  Find its usages in one of the following ways:

    -   Press Ctrl0U.

    -   Hold ⌘Cmd and click the symbol.

    -   Go to Goto | Usages.

3.  Review the usage list and open the result you need.

![Find usages](https://resources.jetbrains.com/help/img/air/find-usages.png "Find usages")

### Go to definition

1.  Place the caret on a symbol in the editor.

2.  Go to its definition in one of the following ways:

    -   Press Ctrl0B.

    -   Go to Goto | Definition.

3.  JetBrains Air opens the definition in the editor.

### Go to implementations

1.  Place the caret on a symbol in the editor.

2.  Go to implementations in one of the following ways:

    -   Press AltShift0B.

    -   Go to Goto | Implementations.

3.  Select the implementation you want to open.

### Go to type definition

1.  Place the caret on a symbol in the editor.

2.  Go to the type definition in one of the following ways:

    -   Press CtrlShift0B.

    -   Go to Goto | Type Definition.

### Go to problems

1.  Open the next or previous problem in one of the following ways:

    -   Go to Goto | Next Problem or Goto | Previous Problem.

    -   Press Ctrl0E or CtrlShift0E.

2.  To inspect all current problems in the file, click the problem indicator in the editor tab or in the upper-right corner of the editor.

3.  Select a problem from the list to jump to its location in the file.

![Problems in the editor](https://resources.jetbrains.com/help/img/air/navigate-through-problems.png "Problems in the editor")

If these navigation actions are unavailable for a file, the language may not provide advanced language support in JetBrains Air. In that case, use [Search](search.html), [task context](task-context.html), and Go to All to navigate manually.
