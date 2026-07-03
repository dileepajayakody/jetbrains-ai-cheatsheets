1.  [Agents](agents.html)

2.  [Codex](#0)

# Codex

Last modified: 11 June 2026

! **Codex** is a third-party [coding agent](https://developers.openai.com/codex) by OpenAI available for use in AI Assistant. It can help you to design and implement features, fix bugs, answer questions, review code, and assist with a wide range of development tasks.

> ### warning
>
> Limitations
>
> Currently, Codex integration has a few limitations:
>
> -   Codex does not work with AI Assistant's `.aiignore` [functionality](disable-ai-assistant.html#restrict-ai-assistant-usage-in-specific-files-or-folders), which means that files listed in `.aiignore` can be processed by Codex.
>
> -   When configured with [BYOK (Bring Your Own Key)](activate-agents.html#activate-agent-with-api-key), Codex integration requires an OpenAI API key issued directly by OpenAI. Third-party API keys are not currently supported, even if they provide access to OpenAI models.
>
> -   Codex does not work in the Windows Subsystem for Linux ([WSL](https://learn.microsoft.com/en-us/windows/wsl/about)).
>

## Get started with Codex

To use Codex, you need to install and activate it using one of the supported authentication methods. For instructions, refer to:

-   [JetBrains AI subscription](activate-agents.html#activate-codex-with-jbai-subscription)

-   [API key](activate-agents.html#activate-codex-with-api-key)

-   [ChatGPT account](activate-agents.html#activate-agent-with-provider-account)

After setup, select ! Codex in AI Chat to start using it.

![Select Codex](https://resources.jetbrains.com/help/img/idea/2026.1/ai_switch_chat_mode.png "Select Codex")

## Collect IDE context

Codex can automatically receive context about your current editing session, so you don't have to attach it manually with every prompt. When automatic context is enabled, each request you send includes:

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

Codex has several operation modes that you can use:

-   Read-only – Codex can browse and explain the codebase but cannot modify files or run commands.

-   Agent – Codex can modify files within the project workspace but cannot make changes outside the project without approval.

-   Agent (full access) – Codex can modify files anywhere on the machine and run commands with minimal restrictions, enabling system-level edits, installs, and full workflows.

    > ### note
    >
    > Certain sensitive actions may still require explicit approval.

To switch between modes, use the mode picker dropdown in the prompt window.

![Mode picker](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_codex_mode_picker.png "Mode picker")

## Select a processing model

To select a model that Codex uses to process your requests, click ! and select the model from the list.

![Select the model](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_codex_model_selection.png "Select the model")

You can also select the Reasoning level for the model. Model reasoning refers to a model's ability to perform multi-step analysis and solve complex tasks. The selected level controls how much analytical processing the model applies when generating responses.

## Approve operations

In the Read-only mode, Codex requests your permission to run suggested bash commands, introduce changes, perform file operations, or use [external tools](mcp.html). In this case, you can either approve or reject the operation.

![Codex requests an approval](https://resources.jetbrains.com/help/img/idea/2026.1/ai_codex_approve_request.png "Codex requests an approval")

-   Allow Once – allows Codex to execute the command this time only. You will be asked again if the command is requested later.

-   Allow for Session – allows Codex to execute this command for the current session without asking again.

-   Reject – prevents Codex from executing this command.

> ### tip
>
> You can adjust this behavior by [selecting](/help/ai-assistant/codex-agent.html#codex-select-operation-mode) the Agent or Agent (full access) mode.

Before you decide, you can review what the agent is about to do:

-   For a suggested file change, click to review the changes the agent introduces.

-   For a suggested command, click Open in editor in the top-right corner of the widget to review the complete command the agent suggests to run.

## Rollback operations

If the changes introduced by Codex do not suit you, you can roll them back. To do this:

1.  Navigate to the pane listing the changed files.

2.  Do one of the following:

    -   To roll back changes in a specific file, hover over it and click !.

        ![Rollback changes in a specific file](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agents_rollback_specific_file.png "Rollback changes in a specific file")

    -   To roll back changes in all files, click Rollback.

        ![Rollback changes in all files](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agents_rollback_all_changes.png "Rollback changes in all files")

## View Codex status and configuration

Codex provides informational `/` commands to view the current agent configuration and manage the active session:

-   `/mcp` – provides the list of configured MCP servers.

-   `/skills` – provides the list of available skills. For more information about skills, refer to [Use Codex skills](/help/ai-assistant/codex-agent.html#codex-skills).

-   `/logout` – ends the current session and logs out of the ChatGPT account.

-   `/status` – displays information about the current session, including token usage and the available context window.

## Use Codex skills

Skills give Codex additional capabilities to handle specific tasks and structured workflows. Each skill consists of instructions, supporting resources, and scripts that define how the agent performs the task.

You can add skills in two ways:

-   **Install curated skills** from public repositories, such as [openai/skills](https://github.com/openai/skills). They can be installed by invoking the `$skill-installer` skill, which adds them to the Codex environment.

-   **Create custom skills** by using the `$skill-creator` skill and describing the required functionality.

Once installed or created, skills can be invoked:

-   Automatically, when a skill is relevant to the task you describe.

-   Explicitly, by referencing a specific skill with the `$` prefix in your prompt.

To view the skills currently available to Codex, use the `/skills` command.

> ### tip
>
> For more details about the skills functionality, refer to [OpenAI documentation](https://developers.openai.com/codex/skills).

Specific IDEs

## Use database-specific tools with Codex

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin

Currently, Codex requires the following configuration to work with [database-specific tools](mcp.html#database_specific_tools):

1.  In Settings | Tools | MCP Server, select the Enable MCP Server checkbox, confirm your action in the Enable MCP Server? dialog, then click Apply.

2.  Click Copy HTTP Stream Config.

3.  In Settings | Tools | AI Assistant | Model Context Protocol (MCP), click Add.

4.  In the New MCP Server dialog that opens, open the HTTP tab and paste the copied value as `idea-http` server.

    The resulting JSON configuration is as follows:

    ```
    {
        "mcpServers": {
            "idea-http": {
                "type": "streamable-http",
                "url": "http://127.0.0.1:64344/stream",
                "headers": {}
            }
        }
    }
    ```

    The port number may vary. Make sure it matches the port configured for the server and shown in Tools | MCP Server in the Enable MCP Server setting.

5.  Click Apply to save the configuration and close the New MCP Server dialog.

6.  On the MCP Server page of the Settings dialog, click Auto-Configure under Codex to apply the new configuration.

7.  Click OK to save the MCP server.
