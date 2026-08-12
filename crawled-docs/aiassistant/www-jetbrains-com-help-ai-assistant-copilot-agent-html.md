1.  [Agents](agents.html)

2.  [GitHub Copilot](#0)

# GitHub Copilot

Last modified: 03 July 2026

! **GitHub Copilot** is a third-party [coding agent](https://github.com/features/copilot) by GitHub available for use in AI Assistant. It can write, debug, and explain code, perform Git operations such as committing and branching, and manage pull requests and issues on GitHub.

> ### warning
>
> Limitations
>
> GitHub Copilot does not work with AI Assistant's `.aiignore` [functionality](disable-ai-assistant.html#restrict-ai-assistant-usage-in-specific-files-or-folders), which means that files listed in `.aiignore` can be processed by GitHub Copilot.

## Get started with GitHub Copilot

To use GitHub Copilot, you need to install and activate it with your [GitHub account](activate-agents.html#activate-agent-with-provider-account).

After setup, select ! GitHub Copilot in AI Chat to start using it.

![Select GitHub Copilot](https://resources.jetbrains.com/help/img/idea/2026.1/ai_switch_chat_mode.png "Select GitHub Copilot")

> ### note
>
> GitHub Copilot can be activated only through a GitHub account (OAuth). It does not work with a [JetBrains AI subscription](licensing-and-subscriptions.html) or [BYOK](use-custom-models.html#provide-your-own-api-key) and requires a separate GitHub sign-in even if you are already using JetBrains AI or your own API key.

## Collect IDE context

GitHub Copilot can automatically receive context about your current editing session, so you don't have to attach it manually with every prompt. When automatic context is enabled, each request you send includes:

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

GitHub Copilot can operate in different modes, each providing a distinct level of autonomy and interaction.

To select an operation mode, click ! and select a mode from the list.

![Select operation mode](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_copilot_mode_picker.png "Select operation mode")

The following modes are available:

-   Agent – GitHub Copilot can read and modify files and run commands to complete the requested task.

-   Plan – a read-only mode. GitHub Copilot analyzes your request and produces a structured plan for you to review before any changes are made.

-   Autopilot – GitHub Copilot works through a multi-step task on its own, without pausing for your input between steps, until it finishes.

    > ### note
    >
    > Autopilot controls whether the agent pauses for your input between steps, not whether it asks for approval. Even in Autopilot, GitHub Copilot still requests approval before actions that require permission unless [Allow All](/help/ai-assistant/copilot-agent.html#copilot-grant-permissions) is turned on.

## Select a model and reasoning level

To select a model that GitHub Copilot uses to process your requests, click ! and select the model from the list.

![Select the model](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_copilot_model_selection.png "Select the model")

You can also select the Reasoning level for the model. Model reasoning refers to a model's ability to perform multi-step analysis and solve complex tasks. Higher levels increase the amount of reasoning the model applies before it responds, which can lead to higher-quality results on complex or critical tasks but may take longer.

The list includes only the models enabled in your GitHub Copilot account.

## Grant permissions to the agent

By default, GitHub Copilot requests your permission to use a tool, access a path, or open a URL. You can control this behavior with the Allow All setting in the chat input field:

![The Allow All setting in the chat input field](https://resources.jetbrains.com/help/img/idea/2026.1/ai_copilot_allow_all.png "The Allow All setting in the chat input field")

-   Allow All turned on – GitHub Copilot proceeds without asking for approval each time it needs to use a tool, access a file path, or open a URL.

    > ### warning
    >
    > Use this setting with caution, as it allows the agent to act without your approval, which may lead to data loss or security issues.

-   Allow All turned off – GitHub Copilot asks for your approval each time it needs to use a tool, access a file path, or open a URL.

## Approve operations

When [Allow All](/help/ai-assistant/copilot-agent.html#copilot-grant-permissions) is turned off, GitHub Copilot requests your permission to run suggested bash commands, introduce changes, perform file operations, or use [external tools](mcp.html). In this case, you can either approve or reject the operation.

![GitHub Copilot requests an approval](https://resources.jetbrains.com/help/img/idea/2026.1/ai_copilot_approve_request.png "GitHub Copilot requests an approval")

-   Allow once – allows GitHub Copilot to perform the action this time only. You will be asked again if the same action is requested later.

-   Always allow – allows GitHub Copilot to perform this action automatically, without asking for permission.

-   Deny – prevents GitHub Copilot from performing this action.

> ### tip
>
> You can adjust this behavior by turning on [Allow All](/help/ai-assistant/copilot-agent.html#copilot-grant-permissions).

Before you decide, you can review what the agent is about to do:

-   For a suggested file change, click to review the changes the agent introduces.

    ![Open the diff to review the file changes Claude Agent suggests before you approve them](https://resources.jetbrains.com/help/img/idea/2026.1/ai_copilot_agent_review_suggested_changes.png "Open the diff to review the file changes Claude Agent suggests before you approve them")

-   For a suggested command, click Open in editor in the top-right corner of the widget to review the complete command the agent suggests to run.

    ![Open the suggested command in the editor to review it before running](https://resources.jetbrains.com/help/img/idea/2026.1/ai_copilot_agent_terminal_command_review.png "Open the suggested command in the editor to review it before running")

## Rollback operations

If the changes introduced by GitHub Copilot do not suit you, you can roll them back. To do this:

1.  Navigate to the pane listing the changed files.

2.  Do one of the following:

    -   To roll back changes in a specific file, hover over it and click !.

        ![Rollback changes in a specific file](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agents_rollback_specific_file.png "Rollback changes in a specific file")

    -   To roll back changes in all files, click Rollback.

        ![Rollback changes in all files](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agents_rollback_all_changes.png "Rollback changes in all files")

## Enable use of external tools

You can enable GitHub Copilot to use tools provided by configured [Model Context Protocol (MCP) servers](mcp.html), extending its capabilities to perform a wider range of tasks. The available tools can be invoked automatically when the agent considers them necessary, or you can call them manually when writing a request.

To enable GitHub Copilot to use tools:

1.  Make sure the MCP servers you want to expose to the agent are already configured in Settings | Tools | AI Assistant | Model Context Protocol (MCP). For details on adding and configuring MCP servers, refer to [Model Context Protocol (MCP)](mcp.html).

2.  In the IDE settings (⌘Cmd0,), go to Tools | AI Assistant | Agents.

    ![the Agents settings page](https://resources.jetbrains.com/help/img/idea/2026.1/ai_acp_agents_settings.png "the Agents settings page")

3.  Enable the Pass custom MCP servers setting.

4.  Click OK.

## Add instructions

Instructions let you provide persistent, reusable context to the agent. GitHub Copilot adds this context to every task it works on, so you don't have to repeat project-specific instructions in each prompt.

GitHub Copilot reads instructions from the AGENTS.md and CLAUDE.md files in the root project directory, so you can keep them under version control and reuse them across the project.

For more information about instruction files and their format, refer to [Agent instructions](configure-agent-behavior.html).

## Use /commands

GitHub Copilot supports a subset of `/commands` that you can type directly in the chat to run actions such as checking the session status, managing the current session, or viewing the agent configuration.

To see the commands available in the current session, type `/` in the chat input field and select a command from the list.

![List of / commands](https://resources.jetbrains.com/help/img/idea/2026.1/ai_copilot_agent_commands.png "List of / commands")

For details on specific commands, refer to the [official GitHub Copilot documentation](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#slash-commands-in-the-interactive-interface).

> ### note
>
> Configured [MCP tools](mcp.html) are not shown in the `/` menu. The agent invokes them automatically when needed, or you can reference them directly in a prompt.
