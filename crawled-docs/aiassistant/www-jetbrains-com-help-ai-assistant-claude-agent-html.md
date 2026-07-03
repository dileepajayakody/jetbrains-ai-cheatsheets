1.  [Agents](agents.html)

2.  [Claude Agent](#0)

# Claude Agent

Last modified: 08 June 2026

! **Claude Agent** is a third-party coding agent by [Anthropic](https://www.anthropic.com/) available for use in AI Assistant. It understands your codebase, can plan and execute development tasks, and interact with your environment using tools, running commands, and analyzing their results to complete complex programming workflows.

> ### note
>
> Notes
>
> -   Starting from IDE versions **2025.3.4**, Claude Agent is available in AI Assistant through the [Agent Client Protocol (ACP)](https://agentclientprotocol.com/get-started/introduction), instead of a custom integration.
>
> -   Claude Agent in AI Assistant is not related to the [Claude Code \[Beta\]](https://plugins.jetbrains.com/plugin/27310-claude-code-beta-) plugin, which is a separate third-party plugin with a different scope and functionality.
>

> ### warning
>
> Limitations
>
> Claude Agent does not work with AI Assistant's `.aiignore` [functionality](disable-ai-assistant.html#restrict-ai-assistant-usage-in-specific-files-or-folders), which means that files listed in `.aiignore` can be processed by Claude Agent.

## Get started with Claude Agent

To use Claude Agent, you need to install and activate it using one of the supported authentication methods. For instructions, refer to:

-   [JetBrains AI subscription](activate-agents.html#activate-claude-agent-with-jbai-subscription)

-   [API key](activate-agents.html#activate-claude-agent-with-api-key)

-   [Anthropic Console](activate-agents.html#activate-agent-with-provider-specific-method)

After setup, select ! Claude Agent in AI Chat to start using it.

![Select Claude Agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_switch_chat_mode.png "Select Claude Agent")

## Collect IDE context

Claude Agent can automatically receive context about your current editing session, so you don't have to attach it manually with every prompt. When automatic context is enabled, each request you send includes:

-   The file currently open in the editor.

-   The text you have selected in that file, if any.

An indicator in the chat input field shows the current state of automatic context. Click it to switch between the two states:

-   ! IDE context enabled – the active file name and any selected text are attached to each prompt.

-   ! IDE context disabled – no editor context is attached automatically.

![Automatic context indicator in the chat input field](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_auto_context.png "Automatic context indicator in the chat input field")

> ### note
>
> Other open files, recently edited files, and broader project context are not added automatically. Use `@` in the chat input to attach additional files when needed.

## Select operation mode

Claude Agent can operate in different modes, each providing a distinct level of autonomy and interaction.

To select an operation mode, click ! and select a mode from the list.

![Select operation mode](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_operation_modes.png "Select operation mode")

The following modes are available:

-   Auto – let the model decide whether to approve or deny the permission prompts.

-   Default – standard behavior; prompts for potentially dangerous operations.

-   Accept Edits – automatically applies file edits.

-   Plan Mode – enables planning without executing actions.

-   Don't Ask – does not prompt for permissions and denies actions that are not pre-approved.

-   Bypass Permissions – bypasses all permission checks.

## Select a processing model

To select a model that Claude Agent uses to process your requests, click ! and select the model from the list.

![Select the model](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_claude_agent_model_selection.png "Select the model")

## Select an effort level

The effort level controls how much Claude Agent reasons before it responds. Higher levels make the agent think more on the same task, which can help with complex problems but may take longer.

> ### tip
>
> At lower levels, the agent still reasons on difficult problems, but less than it would at higher levels.

To set the effort level, click ! next to Effort in the chat input field and select one of the following:

![Effort selector in the Claude Agent chat input field, expanded to show levels from Default to Max](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_effort_selection.png "Effort selector in the Claude Agent chat input field, expanded to show levels from Default to Max")

-   Default – the model's standard effort level.

-   Low, Medium, High, Xhigh, and Max – progressively increase the amount of reasoning the agent applies, with Max applying the most.

## Approve operations

By default, Claude Agent requests your permission to run suggested bash commands, introduce changes, perform file operations, or use [external tools](mcp.html). In this case, you can either approve or reject the operation.

![Claude Agent requests an approval](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_code_approve_request.png "Claude Agent requests an approval")

-   Allow – allows Claude Agent to execute the command. You will be asked again if the command is requested later.

-   Always Allow – allows Claude Agent to execute this command automatically, without asking for permission.

-   Reject – prevents Claude Agent from executing this command.

> ### tip
>
> You can adjust the default behavior by [selecting](/help/ai-assistant/claude-agent.html#select-operation-mode) another operation mode.

Before you decide, you can review what the agent is about to do:

-   For a suggested file change, click ![the Show Diff button](https://resources.jetbrains.com/help/img/idea/2026.1/app-client.expui.vcs.diff.svg "the Show Diff button") to review the changes the agent introduces.

    ![Open the diff to review the file changes Claude Agent suggests before you approve them](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_review_suggested_changes.png "Open the diff to review the file changes Claude Agent suggests before you approve them")

-   For a suggested command, click Open in editor in the top-right corner of the widget to review the complete command the agent suggests to run.

    ![Open the suggested command in the editor to review it before running](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_terminal_command_review.png "Open the suggested command in the editor to review it before running")

## Rollback operations

If the changes introduced by Claude Agent do not suit you, you can roll them back. To do this:

1.  Navigate to the pane listing the changed files.

2.  Do one of the following:

    -   To roll back changes in a specific file, hover over it and click !.

        ![Rollback changes in a specific file](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agents_rollback_specific_file.png "Rollback changes in a specific file")

    -   To roll back changes in all files, click Rollback.

        ![Rollback changes in all files](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agents_rollback_all_changes.png "Rollback changes in all files")

## Enable use of external tools

You can enable Claude Agent to use tools provided by configured [Model Context Protocol (MCP) servers](mcp.html), extending its capabilities to perform a wider range of tasks. The available tools can be invoked automatically when the agent considers them necessary, or you can call them manually when writing a request.

![Run MCP command](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_claude_agent_run_mcp_command.png "Run MCP command")

To enable Claude Agent to use tools:

1.  In the IDE settings (⌘Cmd0,), go to Tools | AI Assistant | Agents.

    ![the Agents settings page](https://resources.jetbrains.com/help/img/idea/2026.1/ai_acp_agents_settings.png "the Agents settings page")

2.  Enable the Pass custom MCP servers setting.

3.  Click OK.

Specific IDEs

## Enable use of database-specific tools

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin

Claude Agent requires the Pass IntelliJ MCP Server setting to be enabled to use database-specific tools:

1.  In the IDE settings (⌘Cmd0,), go to Tools | AI Assistant | Agents.

2.  Enable the Pass IntelliJ MCP server setting.

3.  Click OK.

[![The Pass IntelliJ MCP Server setting enabled](https://resources.jetbrains.com/help/img/idea/2026.1/db_settings_pass_intellij_mcp_server.png "The Pass IntelliJ MCP Server setting enabled")](https://resources.jetbrains.com/help/img/idea/2026.1/db_settings_pass_intellij_mcp_server.png)

## Use /commands

Claude Agent supports a subset of `/commands` for executing actions directly in the chat, along with bundled skills that extend its capabilities. For details on specific commands, refer to the [official Anthropic documentation](https://code.claude.com/docs/en/commands).

![List of / commands](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_commands.png "List of / commands")
