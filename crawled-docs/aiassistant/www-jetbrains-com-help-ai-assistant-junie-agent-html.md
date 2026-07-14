1.  [Agents](agents.html)

2.  [Junie by JetBrains](#0)

# Junie by JetBrains

Last modified: 03 July 2026

![Junie logo](https://resources.jetbrains.com/help/img/idea/2026.1/junie-logo.svg "Junie logo") **Junie** is an AI coding agent developed by JetBrains whose primary task is to autonomously plan and execute complex, multi-step actions based on your prompt. It can introduce large-scale edits to your project, run tests or terminal commands, and use external tools when needed, while reporting progress to you.

> ### tip
>
> Junie is also available in an interactive terminal interface. For more information, refer to the official [Junie CLI](https://junie.jetbrains.com/docs/get-started-with-junie.html) documentation.

## Get started with Junie

To use Junie, you need to install and activate it with a [JetBrains AI subscription](activate-agents.html#activate-junie-with-jbai-subscription).

After setup, select ! Junie in AI Chat to start using it.

![Select Junie](https://resources.jetbrains.com/help/img/idea/2026.1/ai_switch_chat_mode.png "Select Junie")

## Collect IDE context

Junie can automatically receive context about your current editing session, so you don't have to attach it manually with every prompt. When automatic context is enabled, each request you send includes:

-   The file currently open in the editor.

-   The text you have selected in that file, if any.

An indicator in the chat input field shows the current state of automatic context. Click it to switch between the two states:

-   ! IDE context enabled – the active file name and any selected text are attached to each prompt.

-   ! IDE context disabled – no editor context is attached automatically.

![Automatic context indicator in the chat input field](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_auto_context.png "Automatic context indicator in the chat input field")

> ### note
>
> Other open files, recently edited files, and broader project context are not added automatically. Use `@` in the chat input to attach additional files when needed.

## Select a model and reasoning level

To select a model that Junie uses to process your requests, click ! and select the model from the list.

![Select the model](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_junie_model_selection.png "Select the model")

You can also select the Reasoning level for the model. Model reasoning refers to a model's ability to perform multi-step analysis and solve complex tasks. Higher levels increase the amount of reasoning the model applies before it responds, which can lead to higher-quality results on complex or critical tasks but may take longer.

## Enable Brave mode

You can allow Junie to execute commands or modify files without asking for [confirmation](/help/ai-assistant/junie-agent.html#junie-approve-operations). To enable this behavior, turn on Brave Mode in the chat input field.

![Enable Brave mode](https://resources.jetbrains.com/help/img/idea/2026.1/ai_junie_brave_mode.png "Enable Brave mode")

> ### warning
>
> Allowing Junie to execute potentially sensitive actions without your approval can lead to data loss or security issues.

Specific IDEs

## Enable Debug mode

**Available in:** IntelliJ IDEA Ultimate

In Debug mode, Junie works as an AI-powered debugging assistant. Instead of editing code, it launches or attaches to a running program through the IDE debugger to manage breakpoints, inspect the runtime state, and evaluate expressions in the paused execution frame.

![The Debug mode](https://resources.jetbrains.com/help/img/idea/2026.1/ai_junie_debug_mode.png "The Debug mode")

> ### tip
>
> This mode is useful for issues that are easier to diagnose at runtime, such as flaky behavior, unexpected values, or tracing the actual execution flow.

### How it works

Junie operates against a live debugger session connected to your IDE and uses a specialized set of tools focused on runtime inspection and execution control rather than source code modification:

-   **Session control** – launch a new debug session, attach to an existing process, resume execution, or step through code (step over, step into, step out).

-   **Breakpoint management** – set line and exception breakpoints, remove existing ones, and list all active breakpoints in the project.

-   **State inspection** – inspect variables in the current scope, view the call stack for all threads, and switch between threads and frames.

-   **Expression evaluation** – evaluate expressions or code fragments in the context of the currently paused frame.

In this mode, Junie does not modify source code unless you explicitly request a change that is compatible with the current execution state.

### Enable debugger MCP tools for Junie

Debug mode relies on a specialized set of MCP tools provided by the bundled Debugger MCP Toolset and MCP Server plugins. These plugins require IntelliJ IDEA 2026.1.1 or newer. To ensure the MCP tools are available to Junie:

1.  Go to Settings | Plugins, search for `MCP`, and enable both the MCP Server and Debugger MCP Toolset plugins.

2.  Make sure that the MCP server is enabled in Settings | Tools | MCP Server.

3.  Make sure that the DebuggerToolset tools are enabled in Settings | Tools | MCP Server | Exposed Tools.

4.  Go to Settings | Tools | AI Assistant | Model Context Protocol (MCP) and connect to the IDE MCP server.

    The JSON configuration may look like this:

    ```
    {
        "mcpServers": {
            "idea-mcp": {
                "type": "streamable-http",
                "url": "http://127.0.0.1:64342/stream",
                "headers": {}
            }
        }
    }
    ```

    > ### tip
    >
    > The URL of the MCP server may be found in Settings | Tools | MCP Server.

5.  Restart the IDE.

> ### tip
>
> For more information about connecting to MCP servers and using your IDE as an MCP server, refer to [Model Context Protocol (MCP)](mcp.html).

### Example interactions

Once the debugger MCP tools are set up, ask Junie to debug your code in plain language. For example:

-   Why is `x` null? – Junie inspects the current paused frame, retrieves the value of `x` and the surrounding context (call stack, related variables), and explains the state.

-   Stop at line 42 in `Main.kt`. – Junie sets a line breakpoint at the requested location.

-   What is `list.size()`? – Junie evaluates the expression in the current frame and reports the result.

## Approve operations

By default, Junie requests your permission to run suggested bash commands, introduce changes, perform file operations, or use [external tools](mcp.html). In this case, you can either approve or reject the operation.

![Junie requests an approval](https://resources.jetbrains.com/help/img/idea/2026.1/ai_junie_approve_request.png "Junie requests an approval")

-   Yes – allows Junie to execute the command. You will be asked again if the command is requested later.

-   No – prevents Junie from executing this command.

-   Always allow – allows Junie to execute the required command automatically, without asking for permission.

> ### tip
>
> You can adjust the default behavior by [enabling](/help/ai-assistant/junie-agent.html#junie-brave-mode) the Brave mode.

Before you decide, you can review what the agent is about to do:

-   For a suggested file change, click the modified file to review the changes the agent introduces.

    ![Open the diff to review the file changes Junie suggests](https://resources.jetbrains.com/help/img/idea/2026.1/ai_junie_agent_review_suggested_changes.png "Open the diff to review the file changes Junie suggests")

-   For a suggested command, click Open in editor in the top-right corner of the widget to review the complete command the agent suggests to run.

    ![Open the suggested command in the editor to review it before running](https://resources.jetbrains.com/help/img/idea/2026.1/ai_junie_agent_terminal_command_review.png "Open the suggested command in the editor to review it before running")

## Rollback operations

If the changes introduced by Junie do not suit you, you can roll them back. To do this:

1.  Navigate to the pane listing the changed files.

2.  Do one of the following:

    -   To roll back changes in a specific file, hover over it and click !.

        ![Rollback changes in a specific file](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agents_rollback_specific_file.png "Rollback changes in a specific file")

    -   To roll back changes in all files, click Rollback.

        ![Rollback changes in all files](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agents_rollback_all_changes.png "Rollback changes in all files")

## Use /commands

Junie supports a subset of `/commands` that you can type directly in the chat to run actions such as checking the session status, managing the current session, or viewing the agent configuration.

To see the commands available in the current session, type `/` in the chat input field and select a command from the list.

The following `/commands` are currently supported:

-   `/ide` – shows the current JetBrains IDE connection status and the JetBrains IDE features available to the current session.

-   `/usage` – shows the cost breakdown for the current session, including token usage and used models.

-   `/remote` – starts a remote session that lets you control Junie from a web UI in your browser. When you run the command, Junie posts a message in AI Chat confirming that the remote session has started, along with a link to connect to it. Open the link, log in with your JetBrains account, and you will see the remote session. Click Open Chat to start working with the agent from the web UI.

    The remote session lives as long as the IDE is running. Run `/remote` again to display the Remote Session Status.

> ### note
>
> Configured [MCP tools](mcp.html) are not shown in the `/` menu. The agent invokes them automatically when needed, or you can reference them directly in a prompt.

## Enable use of external tools

You can enable Junie to use tools provided by configured [Model Context Protocol (MCP) servers](mcp.html), extending its capabilities to perform a wider range of tasks. The available tools can be invoked automatically when the agent considers them necessary, or you can call them manually when writing a request.

![Run MCP command](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_junie_run_mcp_command.png "Run MCP command")

To enable Junie to use tools:

1.  Make sure the MCP servers you want to expose to the agent are already configured in Settings | Tools | AI Assistant | Model Context Protocol (MCP). For details on adding and configuring MCP servers, refer to [Model Context Protocol (MCP)](mcp.html).

2.  In the IDE settings (⌘Cmd0,), go to Tools | AI Assistant | Agents.

    ![the Agents settings page](https://resources.jetbrains.com/help/img/idea/2026.1/ai_acp_agents_settings.png "the Agents settings page")

3.  Enable the Pass custom MCP servers setting.

4.  Click OK.

## Add instructions

Instructions let you provide persistent, reusable context to the agent. Junie adds this context to every task it works on, so you don't have to repeat project-specific instructions in each prompt.

Junie reads instructions from the AGENTS.md file in the root project directory, so you can keep them under version control and reuse them across the project.

For more information about instruction files and their format, refer to [Agent instructions](configure-agent-behavior.html).

## Restrict access with .aiignore

Junie respects the existing .aiignore file, so if you have one [configured](disable-ai-assistant.html#restrict-ai-assistant-usage-in-specific-files-or-folders) in your project, it will not process any files or directories listed there unless you explicitly permit it to do so.

![.aiignore support](https://resources.jetbrains.com/help/img/idea/2026.1/ai_junie_aiignore_support.png ".aiignore support")
