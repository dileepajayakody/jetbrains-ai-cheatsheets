# Run tasks

Last modified: 05 May 2026

> ### note
>
> JetBrains Air requires a Git repository in the workspace to create and run tasks. If the workspace has no Git repository, JetBrains Air shows a warning and prompts you to initialize Git.

Chat is the main entry point for interacting with [LLMs](https://en.wikipedia.org/wiki/Large_language_model) and [agents](supported-agents.html) supported by JetBrains Air. You can ask questions about your project and work with agents to plan and execute tasks.

The workflow includes these steps:

-   **Select the task run environment**
    [Select](execution-environments.html) where the task runs. You can run tasks in your local workspace, in a separate Git worktree, or in a Docker container.

-   ![Select run environment](https://resources.jetbrains.com/help/img/air/aird_select_execution_environment.png "Select run environment")

-   **Select an agent**
    Choose the agent and model to process your request. For more information, refer to [Supported agents](supported-agents.html).

-   ![Select agent](https://resources.jetbrains.com/help/img/air/aird_select_agent.png "Select agent")

-   **Select a permission mode**
    Define when the agent can edit files and run commands, and when it must ask for approval. For more information, refer to [Permission modes](permission-modes.html).

-   ![Select permission mode](https://resources.jetbrains.com/help/img/air/aird_select_permission_mode.png "Select permission mode")

-   **Select a thinking mode**
    For Gemini CLI and OpenAI Codex, you can set the reasoning level. For more information, refer to [Model reasoning, verbosity, and limits](https://developers.openai.com/codex/config-advanced/#model-reasoning-verbosity-and-limits) or [Gemini thinking](https://ai.google.dev/gemini-api/docs/thinking).

-   ![Select thinking mode](https://resources.jetbrains.com/help/img/air/aird_select_thinking_mode.png "Select thinking mode")

-   **Add context to your request**
    [Provide](task-context.html) information relevant to your request. Add files, folders, images, symbols, or other elements that can serve as context.

-   ![Add context](https://resources.jetbrains.com/help/img/air/ai_add_context_to_request.png "Add context")

-   **Process the response**
    JetBrains Air can answer questions, generate code and terminal commands, and edit files. You can review the results and [process](review-and-integrate.html) the proposed changes individually.

-   ![Process the response](https://resources.jetbrains.com/help/img/air/ai_process_response_intro.png "Process the response")
