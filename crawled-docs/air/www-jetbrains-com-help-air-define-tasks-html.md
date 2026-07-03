# Define tasks

Last modified: 05 May 2026

To start the agentic workflow in JetBrains Air, define a task. The quality of the result depends on how clearly you define the goal, what context you provide, and how you configure the agent run.

You define tasks in the Chat tool. This is where you describe the goal, add context, and choose how the agent will work on the task.

### Define a task

1.  Open a project and open the Chat tool.

2.  Describe the goal in the task input.

    Explain what you want to achieve and what _done_ means. Mention important constraints, expected behavior, and any known failures or error messages.

    ![Defining a task in the Chat tool](https://resources.jetbrains.com/help/img/air/define-task.png "Defining a task in the Chat tool")

3.  (Optional) Use voice input ![Voice input](https://resources.jetbrains.com/help/img/air/air-voice-mode-icon.png "Voice input")

    If voice input is configured, click the microphone button in the task input and dictate the task instead of typing it.

    Learn how to configure it in [Voice input](/help/air/define-tasks.html#voice_input).

4.  Select a task run environment.

    In the task header, open the environment selector and choose where the agent will run, for example Local Workspace, Git Worktree, or Docker.

    Learn more in [Task run environments](execution-environments.html).

5.  Select an agent and model.

    In the task toolbar, open the model selector and choose the agent and model for the task.

    Learn more in [Agents and models](select-agents-and-models.html).

6.  Select a permission mode.

    In the task toolbar, open the permission mode selector and choose how freely the agent can act in the task.

    If you want the agent to prepare an implementation plan before changing code, select Plan. In this mode, the agent first creates a plan, and you then decide whether to proceed to implementation.

    Learn more in [Permission modes](permission-modes.html) and [Plan mode](plan-mode.html).

7.  Add context.

    Add the files, symbols, examples, or other inputs the agent should use, so it does not have to guess. Use one of the following:

    -   Click Add context to attach files, folders, Git items, terminals, or external tools.

    -   Type `@` to mention symbols such as classes, functions, or methods.

    -   Select code in the editor and attach it to the task.

    -   Paste a minimal snippet that reproduces the issue.

    Learn more in [Task context](task-context.html).

8.  Check project instructions.

    If the project includes instruction files such as `CLAUDE.md` or `AGENTS.md`, make sure they reflect how you want the agent to work.

    Learn more in [Project instructions](project-instructions.html).

9.  Run the task.

    Press ↩Enter or click Send.

    After the task completes, review the result and continue iterating if needed. The exact follow-up workflow depends on the selected execution environment.

    Learn more in [Run tasks](run-tasks.html) and [Review and integrate](review-and-integrate.html).

## Voice input

You can use voice input to dictate task prompts in the Chat tool.

Voice input uses a local Whisper model for speech recognition. No audio is sent to the cloud.

### Configure voice input

1.  Open Air Settings.

2.  Search for Voice Input.

3.  In the Voice Input section, click Download to download a local Whisper model.

4.  Optionally, select the model size and recognition language.

5.  After the model is downloaded and the status is Ready, return to the Chat tool.

6.  In the task input, click the microphone button ![Voice input](https://resources.jetbrains.com/help/img/air/air-voice-mode-icon.png "Voice input") and start dictating.

7.  Click the stop button ![Stop voice input](https://resources.jetbrains.com/help/img/air/air-voice-mode-stop-icon.png "Stop voice input") once you are done.
