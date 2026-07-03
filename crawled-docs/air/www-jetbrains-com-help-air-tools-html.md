# Tools

Last modified: 23 June 2026

Tools in JetBrains Air are panels that provide specific functions for a workspace. You use tools to navigate code, inspect changes, run commands, and review results.

### Open a tool

-   Select View | Tools from the main menu.

-   Press ⌘Cmd⇧Shift0K and search for a tool name.

-   Click the Hide Tool Panel icon (⌘Cmd03) or select the tool on the right-side toolbar. Note that not all the tools are available on this panel.

Tool

Description

[Settings](settings.html)

Use settings to configure JetBrains Air and your workspace. You can adjust the UI theme, editor behavior, tools, AI features, connected providers, and account options.

In settings, you can configure both global options and workspace-specific options. Global settings apply to all workspaces. Workspace settings apply only to the current workspace. In the Settings window, select the tab at the top: Global for global settings, or the tab with the current workspace name for workspace settings. Use workspace settings when you want to keep configuration with the project, such as scripts, toolchains, and review rules.

[History](history.html)

Use History to work with Git history in the current workspace. You can fetch updates, pull remote changes, and push your local commits. When you select a commit, JetBrains Air shows the changed files and the diff for the selected file.

[Comments](comments.html)

Use Comments to review and manage comments in the current workspace. This tool includes comments that you add in code and comments created during agentic review. You can select a comment to navigate to the related place in code. When you send comments, JetBrains Air creates a new task with your feedback.

[Files](files.html)

Use Files to browse your workspace structure and open files in the editor. You can expand folders, open files in splits, and add items to a task as context. The right-click menu includes file operations and Git operations for the selected file or folder.

[Changes](changes.html)

Use Changes to review files that changed in the current workspace. You can see the list of changed files, open a diff for a file, and select what to include in a commit. You can also write a message and commit the selected changes.

[Chat](chat.html)

Use Chat to work on tasks in JetBrains Air. This tool is always available in the workspace. You can define a task, add context, and send follow-up messages to iterate on results. In the Chat toolbar, select the agent, model, and mode for the current task. For more information about agents and models, refer to [Supported agents](supported-agents.html).

[Search](search.html)

Use Search to find text across your workspace. You can also switch to replace mode and apply replacements in multiple files. You can add search results to a task as context.

[Git](git.html)

Use the Git tool to manage version control in JetBrains Air.

You can use it to:

-   Review changed files.

-   Create commits and amend the latest commit.

-   Sync your local branch with the remote repository.

-   Review local and remote differences in Unsynced commits and run Sync.

[Review](review.html)

Use Review to inspect changes produced by an agent before you apply them.

You can use it to:

-   See the list of changed files and open a diff for each file.

-   Switch between unified and split diff views.

-   Select what changes to include before you commit.

[Symbols](symbols.html)

Use Symbols to browse symbols in the current file and navigate to their definitions. Symbols can include types, fields, functions, and methods. When you select a symbol, JetBrains Air opens the related code location in the editor.

[Terminal](terminal-emulator.html)

Use Terminal to run command-line tasks inside JetBrains Air. You can run Git commands, install dependencies, and execute scripts without leaving the workspace. JetBrains Air starts a terminal session in the project root by default. You can open additional sessions in separate tabs.

[Web preview](web-preview.html)

The web preview opens automatically for web-based projects when your server starts, or for static projects that contain an HTML file. By default, the preview pane opens in preview mode, indicated by the toolbar in the upper-right corner.
