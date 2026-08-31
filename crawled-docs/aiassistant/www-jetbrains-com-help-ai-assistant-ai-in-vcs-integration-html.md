# AI in version control

Last modified: 05 March 2026

AI Assistant integrates with version control systems to help you work more efficiently with your code history. It can generate commit messages, summarize changes, and assist in understanding diffs, making version control tasks easier to manage.

## Generate commit messages

AI Assistant can send your diffs to the LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)), which will generate a commit message describing your changes.

1.  Press Alt00 to open the Commit tool window.

2.  Click ! Generate Commit Message with AI Assistant.

    ![AI Assistant generates commit messages](https://resources.jetbrains.com/help/img/idea/2026.2/ai-generate-commit-messages.png "AI Assistant generates commit messages")

3.  Edit the message if necessary.

You can also customize the prompt used by AI Assistant to generate commit messages. For example, you can include the branch name in the commit message or instruct AI Assistant to list each change as a separate item.

1.  Click ![the Gear icon](https://resources.jetbrains.com/help/img/idea/2026.2/app.expui.general.settings.svg "the Gear icon") in the bottom-right corner of the Commit tool window.

2.  In the menu, navigate to the AI Assistant section and specify your instructions in the Prompt for generation field.

    ![Prompt for commit message generation](https://resources.jetbrains.com/help/img/idea/2026.2/ai_prompt_for_commit_message_generation.png "Prompt for commit message generation")

    > ### tip
    >
    > You can use the `$GIT_BRANCH_NAME` variable to reference the name of the current branch in the commit message.

    Alternatively, you can [modify](/help/ai-assistant/ai-in-vcs-integration.html#customize-commit-message-prompt) the prompt in the Prompt Library.

### Customize the commit message generation prompt

You can customize the prompt used by AI Assistant to [generate commit messages](/help/ai-assistant/ai-in-vcs-integration.html#ai-generate-commit-messages) by editing it in the Prompt Library.

1.  Press CtrlAlt0S to open settings and then select Tools | AI Assistant | Prompt Library.

2.  In the Built-In Actions section, select Commit Message Generation.

    [![The list of default rules for commit message generation prompt](https://resources.jetbrains.com/help/img/idea/2026.2/commit_prompt.png "The list of default rules for commit message generation prompt")](https://resources.jetbrains.com/help/img/idea/2026.2/commit_prompt.png)

3.  In the editor field on the right, specify the rules for commit message generation, like the required number of characters or a different language. Use the `$GIT_BRANCH_NAME` to reference the name of the branch in the commit message.

4.  Click Apply.

## Perform Self-Review with AI

Before committing your changes, you can ask AI Assistant to review your updates. This helps highlight any potential issues, allowing you to make improvements immediately or track them for future revisions.

1.  Press Alt00 to open the Commit tool window.

2.  Select the changes that you want to review before committing.

3.  Click ! Self-Review with AI. The Problems tool window opens with the AI Self-Review tab selected.

    ![Self-Review with AI](https://resources.jetbrains.com/help/img/idea/2026.2/ai_self_review.png "Self-Review with AI")

4.  On the AI Self-Review tab, review the detected issues:

    [![AI Self-Review tab](https://resources.jetbrains.com/help/img/idea/2026.2/ai_self_review_tab.png "AI Self-Review tab")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_self_review_tab.png)

    -   To navigate to the issue in the editor, either double-click it or select it and press F4.

    -   If a quick fix is available for the selected issue, click ! to apply it.

    -   To filter the list of issues, click ! View Options and choose the desired filtering criteria.

    -   To view the selected issue in its source context, click ! Open Editor Preview. This opens a separate preview pane where you can change the code and apply available quick-fixes.

Just like with uncommitted changes, you can perform a review for the changes that were already committed.

1.  Click ! in the bottom-left corner (in DataGrip, click ![the More tool windows icon](https://resources.jetbrains.com/help/img/idea/2026.2/app-client.expui.general.moreHorizontal%4020x20.svg "the More tool windows icon") More tool windows in the header and select Git) or press Alt09 to open the version control tool window.

2.  In the commits pane, select the commit that you want to review and click ! Self-Review with AI. AI Assistant will review all files in the commit.

    [![Self-Review with AI](https://resources.jetbrains.com/help/img/idea/2026.2/ai_self_review_committed_changes.png "Self-Review with AI")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_self_review_committed_changes.png)

    > ### tip
    >
    > If you want to review specific files in the commit, hold Ctrl while selecting the files, then click ! Self-Review with AI.

3.  Review the changes on the AI Self-Review tab.

### Define guidelines for Self-Review with AI

You can specify a Markdown file with code review guidelines that will be taken into account by AI Assistant during code review.

1.  Go to Settings | Tools | AI Assistant | Project Settings.

    [![AI Assistant project settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_project_settings.png "AI Assistant project settings")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_project_settings.png)

2.  Specify the location of the guidelines file in the Path to rules for AI Self-Review setting.

3.  Click Apply to save the changes.

Here is an [example](https://resources.jetbrains.com/help/img/idea/2026.2/review_guidelines_example.md) of what such guidelines might look like:

```
# Code Review Guidelines
```

## Edit and improve commit messages

When you have already committed your changes, you can still edit your commit message. Use AI Assistant to help you analyze and better describe the committed changes.

1.  Click ! in the bottom-left corner (in DataGrip, click ![the More tool windows icon](https://resources.jetbrains.com/help/img/idea/2026.2/app-client.expui.general.moreHorizontal%4020x20.svg "the More tool windows icon") More tool windows in the header and select Git) or press Alt09 to open the version control tool window.

2.  In the commits pane, right-click the commit you want to update and select Edit Commit Message in the context menu.

    ![Context menu of the selected commit](https://resources.jetbrains.com/help/img/idea/2026.2/log_edit_commit_message.png "Context menu of the selected commit")

3.  In the dialog that opens, click ! Improve Commit Message with AI Assistant.

    ![Dialog with an old commit message and the AI Assistant icon](https://resources.jetbrains.com/help/img/idea/2026.2/ai_improve_commit_message.png "Dialog with an old commit message and the AI Assistant icon")

    AI Assistant analyzes the committed changes and generates an improved message.

4.  Edit the new message if necessary and click OK to save the changes.

5.  If the commit has already been pushed to the remote repository, press CtrlShift0K to push the updated commit message as well.

## Explain commits

AI Assistant can summarize the changes made in one or several commits.

> ### note
>
> This option is only available if you are using Git or Mercurial for version control.

1.  Click ! in the bottom-left corner or press Alt09 to open the version control tool window (in DataGrip, click ![the More tool window icon](https://resources.jetbrains.com/help/img/idea/2026.2/app-client.expui.general.moreHorizontal%4020x20.svg "the More tool window icon") More tool windows in the header and select Git).

2.  In the commits pane, select the commit or several commits you want to summarize, right-click them and select Explain Commit with AI Assistant in the context menu.

    [![Explain Commit with AI Assistant option in VCS log](https://resources.jetbrains.com/help/img/idea/2026.2/explain_commit_with-ai_assistant.png "Explain Commit with AI Assistant option in VCS log")](https://resources.jetbrains.com/help/img/idea/2026.2/explain_commit_with-ai_assistant.png)

    AI Assistant provides the summary of the selected commits.

    ![AI Assistant explains commit](https://resources.jetbrains.com/help/img/idea/2026.2/ai_commit_explained.png "AI Assistant explains commit")

## Generate title and description for pull and merge requests

AI Assistant can generate titles and descriptions for pull requests and merge requests directly from JetBrains IDEs.

-   When creating a new pull request or a merge request in the corresponding tool window, click ! Generate a Title and Description with AI Assistant in the description field.

    ![AI Assistant button in the PR description field](https://resources.jetbrains.com/help/img/idea/2026.2/ai_pr_generate_title.png "AI Assistant button in the PR description field")

## Resolve Git conflicts with AI

When multiple contributors are working with the same part of the codebase, you may encounter overlapping changes that cannot be merged automatically.

JetBrains IDEs have a tool to resolve any such conflicts, and AI Assistant can help you by automatically merging conflicting changes.

1.  In the Merge Revisions dialog, click ! Merge with AI.

    ![The Merge with AI option in the Merge Revisions dialog](https://resources.jetbrains.com/help/img/idea/2026.2/merge_with_ai.png "The Merge with AI option in the Merge Revisions dialog")

    AI Assistant then merges both non-conflicting and conflicting changes.

2.  Review the merged result in the central pane of the dialog, edit if necessary, and click Apply.

    Revert changes in the modified lines by clicking ! Revert.

## Generate a summary of an incoming pull request

> ### note
>
> This functionality relies on the [GitHub](https://plugins.jetbrains.com/plugin/https://plugins.jetbrains.com/plugin/13115-github) plugin, which is bundled and enabled in JetBrains IDEs by default. If the relevant features are not available, make sure that you did not disable the plugin.

AI Assistant can generate a summary of an incoming pull request, capturing key details and providing a brief description of the changes. To enable this feature:

1.  Press CtrlAlt0S to open settings and then select Tools | AI Assistant.

2.  In the Features section, enable the GitHub Plugin: Generate a summary upon opening a Pull Request setting.

3.  Click Apply.

After that, when you open an incoming pull request, AI Assistant will generate a brief summary.

[![Generated pull request summary](https://resources.jetbrains.com/help/img/idea/2026.2/ai_generate_summary_of_incoming_pr.png "Generated pull request summary")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_generate_summary_of_incoming_pr.png)

If the generated summary is not clear enough, click Regenerate to receive an updated version.

You can also fine-tune the summary generation process. To do this:

1.  Hover over the generated summary and click !.

    ![Open settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_incoming_pr_summary_open_settings.png "Open settings")

2.  Modify the settings as required:

    ![Configure summary generation](https://resources.jetbrains.com/help/img/idea/2026.2/ai_incoming_pr_summary_configure_settings.png "Configure summary generation")

    -   Generate automatically on open – enable this setting if you want to automatically generate the summary on opening the pull request.

    -   Verbosity – adjust the level of detail in the summary. Higher verbosity includes more information, while lower verbosity keeps it brief and to the point.

    -   Formality tone – control how formal or informal the summary sounds.

    -   Personality – define the style or character of the summary.

    -   Customization prompt – provide specific instructions or preferences to fine-tune the generated summary.

## Generate shelf title

When you silently shelve your changes, the new shelf gets the default Changes name. With a lot of shelves, it can become confusing to find the necessary changes.

Instead of manually renaming each shelf, use AI Assistant to automatically generate a title for the silently shelved changelist.

1.  Press Alt00 to open the Commit tool window.

2.  Select the file or changelist you want to shelve and click ![Shelve silently](https://resources.jetbrains.com/help/img/idea/2026.2/app.expui.vcs.shelve.svg "Shelve silently") Shelve Silently on the toolbar or press CtrlShift0H.

    AI Assistant will automatically generate the shelf name for the shelved changes.

To switch off this feature, press CtrlAlt0S to open the settings, go to Tools | AI Assistant, and clear the Generate a title for the shelved changelist checkbox.

## Configure a Perforce MCP Server

If your project uses Perforce for version control, you can configure a [Perforce MCP server](https://github.com/perforce/p4mcp-server) in your IDE to give AI Assistant access to Perforce tools and data. This allows AI Assistant to provide more accurate and relevant answers and help with development workflows. For example, it can query server information, access workspace data, fetch changelist details, and perform [other operations](https://github.com/perforce/p4mcp-server?tab=readme-ov-file#available-tools).

To configure a Perforce MCP Server:

1.  The IDE detects if the current project is using Perforce version control and displays a notification prompting you to enable the Perforce MCP server. Click Open Settings to open the Perforce MCP dialog.

    ![Perforce MCP server detected](https://resources.jetbrains.com/help/img/idea/2026.2/ai_vcs_perforce_mcp_notification.png "Perforce MCP server detected")

    Alternatively, navigate to Settings | Version Control | Perforce | Perforce MCP.

2.  In the dialog, configure the following settings:

    ![Perforce MCP settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_vcs_perforce_mcp_dialog.png "Perforce MCP settings")

    -   Path to MCP server executable – specify the full path to the `p4-mcp-server` binary.

        > ### note
        >
        > The `p4-mcp-server` executable has to be [downloaded](https://github.com/perforce/p4mcp-server/releases) and available locally.

    -   Use read-only mode (disable write operations) – when enabled, prevents the MCP server from performing any write operations. Disable this option if you want AI Assistant to be able to use [Modify tools](https://github.com/perforce/p4mcp-server?tab=readme-ov-file#modify-tools-write-operations).

    -   Select how you want to pass Perforce connection information to the MCP Server:

        -   Do not use – the MCP server does not receive `P4PORT`, `P4USER`, or `P4CLIENT` values.

        -   Use Perforce project settings – automatically provide the MCP server with the `P4PORT`, `P4USER`, and `P4CLIENT` values from the current project.

        -   Override with custom values – manually specify Server (Port) (`P4PORT`), User (`P4USER`), and Workspace (Client) (`P4CLIENT`) values to use with the MCP server.

    -   Select which sets of tools the MCP server will expose to AI Assistant:

        -   All – enable all available tools.

        -   Files – access file content, history, and diffs.

        -   Changelists – retrieve changelist information.

        -   Shelves – access shelved changelists.

        -   Workspaces – manage and query workspace information

        -   Jobs support – enable access to jobs/issue tracking functionality in Perforce.

3.  Click Apply to save the configuration.

4.  Navigate to Tools | AI Assistant | Model Context Protocol (MCP), select the checkbox for the Perforce MCP configuration, and click Apply. This will start the configured server and establish a connection to it.

    ![Start Perforce MCP server](https://resources.jetbrains.com/help/img/idea/2026.2/ai_vcs_perforce_mcp_start_server.png "Start Perforce MCP server")

As a result, the tools provided by the MCP server become available to AI Assistant. It can trigger them automatically when processing your request, or you can invoke them manually by typing the appropriate `/` command in the chat.

> ### note
>
> For more information on MCP configuration, refer to [Model Context Protocol (MCP)](mcp.html)
