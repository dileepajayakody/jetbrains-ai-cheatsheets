1.  [Agents](agents.html)

2.  [Codex](#0)

# Codex

Last modified: 05 August 2026

! **Codex** is a third-party [coding agent](https://developers.openai.com/codex) by OpenAI available for use in AI Assistant. It can help you to design and implement features, fix bugs, answer questions, review code, and assist with a wide range of development tasks.

> ### warning
>
> Limitations
>
> Currently, Codex integration has a few limitations:
>
> -   When configured with [BYOK (Bring Your Own Key)](activate-agents.html#activate-agent-with-api-key), Codex integration requires an OpenAI API key issued directly by OpenAI. Third-party API keys are not currently supported, even if they provide access to OpenAI models.
>
> -   Codex does not work with AI Assistant's `.aiignore` [functionality](disable-ai-assistant.html#restrict-ai-assistant-usage-in-specific-files-or-folders), which means that files listed in `.aiignore` can be processed by Codex.
>

## Get started with Codex

To use Codex, you need to install and activate it using one of the supported authentication methods. For instructions, refer to:

-   [JetBrains AI subscription](activate-agents.html#activate-codex-with-jbai-subscription)

-   [API key](activate-agents.html#activate-codex-with-api-key)

-   [ChatGPT account](activate-agents.html#activate-agent-with-provider-account)

After setup, select ! Codex in AI Chat to start using it.

![Select Codex](https://resources.jetbrains.com/help/img/idea/2026.2/ai_switch_chat_mode_intro.png "Select Codex")

## Collect IDE context

Codex can automatically receive context about your current editing session, so you don't have to attach it manually with every prompt. When automatic context is enabled, each request you send includes:

-   The file currently open in the editor.

-   The text you have selected in that file, if any.

An indicator in the chat input field shows the current state of automatic context. Click it to switch between the two states:

-   ! IDE context enabled – the active file name and any selected text are attached to each prompt.

-   ! IDE context disabled – no editor context is attached automatically.

![Automatic context indicator in the chat input field](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_auto_context.png "Automatic context indicator in the chat input field")

> ### note
>
> Other open files, recently edited files, and broader project context are not added automatically. Use `@` in the chat input to attach additional files when needed.

## Monitor context usage

Each language model has a context window – the maximum amount of information it can process at once. As you exchange messages with Codex, your prompts, attached context, and the agent's responses fill this window. Once it becomes full, the agent may lose track of earlier parts of the session.

To help you monitor context usage, AI Assistant displays a context indicator showing how much of the model's context window has been used.

![Context indicator showing how much of the model's context window the current session has used](https://resources.jetbrains.com/help/img/idea/2026.2/ai_agents_context_indicator.png "Context indicator showing how much of the model's context window the current session has used")

The indicator displays the percentage of the context window used by the current session, along with the corresponding token count. It appears after the first response, updates as the session continues, and retains the last known value when you reopen the session.

> ### note
>
> Switching the model can update the values in the indicator because different models can have different context window sizes.

## Select operation mode

Codex has several operation modes that you can use:

-   Read-only – Codex can browse and explain the codebase but cannot modify files or run commands.

-   Agent – Codex can modify files within the project workspace but cannot make changes outside the project without approval.

-   Agent (full access) – Codex can modify files anywhere on the machine and run commands with minimal restrictions, enabling system-level edits, installs, and full workflows.

    > ### note
    >
    > Certain sensitive actions may still require explicit approval.

To select an operation mode, click ! and select a mode from the list.

![Mode picker](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_codex_mode_picker.png "Mode picker")

## Select collaboration mode

The Collaboration mode selector controls how Codex approaches a task:

-   Default – Codex works on the task following the selected [operation mode](/help/ai-assistant/codex-agent.html#codex-select-operation-mode).

-   Plan – Codex analyzes the task and proposes an implementation plan without making any changes, so you can review it before Codex proceeds.

To select a collaboration mode, click ! next to the operation mode and select a mode from the list.

![Collaboration mode selector](https://resources.jetbrains.com/help/img/idea/2026.2/ai_codex_agent_collaborative_mode.png "Collaboration mode selector")

## Select a model and reasoning level

To select a model that Codex uses to process your requests, click ! and select the model from the list.

![Select the model](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_codex_model_selection.png "Select the model")

You can also select the Reasoning level for the model. Model reasoning refers to a model's ability to perform multi-step analysis and solve complex tasks. Higher levels increase the amount of reasoning the model applies before it responds, which can lead to higher-quality results on complex or critical tasks but may take longer.

## Speed up responses

When you need quicker responses during interactive work, enable Fast mode. It makes a model generate its output faster without switching to a smaller or less capable model.

To turn Fast mode on or off, use the Fast mode toggle next to the operation mode selector.

![Fast mode toggle](https://resources.jetbrains.com/help/img/idea/2026.2/ai_codex_agent_fast_mode.png "Fast mode toggle")

> ### note
>
> Notes
>
> -   Fast mode increases the cost of each response, so consider enabling it only when responsiveness matters more than cost.
>
> -   Not all models support Fast mode. See the [OpenAI documentation](https://developers.openai.com/codex/speed) for information about supported models.
>

## Approve operations

In the Read-only mode, Codex requests your permission to run suggested bash commands, introduce changes, perform file operations, or use [external tools](mcp.html). In this case, you can either approve or reject the operation.

![Codex requests an approval](https://resources.jetbrains.com/help/img/idea/2026.2/ai_codex_approve_request.png "Codex requests an approval")

-   Allow Once – allows Codex to execute the command this time only. You will be asked again if the command is requested later.

-   Allow for Session – allows Codex to execute this command for the current session without asking again.

-   Allow Commands Starting With – allows Codex to run any command that begins with the specified prefix without asking again. This approves a group of related commands that share the same starting text, so you don't need to confirm each one individually.

-   Reject – prevents Codex from executing this command.

> ### tip
>
> You can adjust this behavior by [selecting](/help/ai-assistant/codex-agent.html#codex-select-operation-mode) the Agent or Agent (full access) mode.

Before you decide, you can review what the agent is about to do:

-   For a suggested file change, click ![the Show Diff button](https://resources.jetbrains.com/help/img/idea/2026.2/app-client.expui.vcs.diff.svg "the Show Diff button") to review the changes the agent introduces.

    ![Open the diff to review the file changes Codex suggests before you approve them](https://resources.jetbrains.com/help/img/idea/2026.2/ai_codex_agent_review_suggested_changes.png "Open the diff to review the file changes Codex suggests before you approve them")

## Rollback operations

If the changes introduced by Codex do not suit you, you can roll them back. To do this:

1.  Navigate to the pane listing the changed files.

2.  Do one of the following:

    -   To roll back changes in a specific file, hover over it and click !.

        ![Rollback changes in a specific file](https://resources.jetbrains.com/help/img/idea/2026.2/ai_agents_rollback_specific_file.png "Rollback changes in a specific file")

    -   To roll back changes in all files, click Rollback.

        ![Rollback changes in all files](https://resources.jetbrains.com/help/img/idea/2026.2/ai_agents_rollback_all_changes.png "Rollback changes in all files")

## Use /commands

Codex supports a subset of `/commands` that you can type directly in the chat to run actions such as checking the session status, managing the current session, or viewing the agent configuration.

To see the commands available in the current session, type `/` in the chat input field and select a command from the list.

![List of / commands](https://resources.jetbrains.com/help/img/idea/2026.2/ai_codex_agent_commands.png "List of / commands")

For details on specific commands, refer to the [official Codex documentation](https://developers.openai.com/codex/cli/slash-commands).

> ### note
>
> Configured [MCP tools](mcp.html) are not shown in the `/` menu. The agent invokes them automatically when needed, or you can reference them directly in a prompt.

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

## Enable use of external tools

You can enable Codex to use tools provided by configured [Model Context Protocol (MCP) servers](mcp.html), extending its capabilities to perform a wider range of tasks. The available tools can be invoked automatically when the agent considers them necessary, or you can call them manually when writing a request.

![Run MCP command](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_codex_run_mcp_command.png "Run MCP command")

To enable Codex to use tools:

1.  Make sure the MCP servers you want to expose to the agent are already configured in Settings | Tools | AI Assistant | Model Context Protocol (MCP). For details on adding and configuring MCP servers, refer to [Model Context Protocol (MCP)](mcp.html).

2.  In the IDE settings (CtrlAlt0S), go to Tools | AI Assistant | Agents.

    ![the Agents settings page](https://resources.jetbrains.com/help/img/idea/2026.2/ai_acp_agents_settings.png "the Agents settings page")

3.  Enable the Pass custom MCP servers setting.

4.  Click OK.

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

## Add instructions

Instructions let you provide persistent, reusable context to the agent. Codex adds this context to every task it works on, so you don't have to repeat project-specific instructions in each prompt.

Codex reads instructions from the AGENTS.md file in the root project directory, so you can keep them under version control and reuse them across the project.

For more information about instruction files and their format, refer to [Agent instructions](configure-agent-behavior.html).
