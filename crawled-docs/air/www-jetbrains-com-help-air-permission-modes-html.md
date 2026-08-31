1.  [Define tasks](define-tasks.html)

2.  [Permission modes](#0)

# Permission modes

Last modified: 14 August 2026

Permission modes control how freely an agent can act in a task: whether it only plans, asks for approval before acting, edits files automatically, or works with full access.

JetBrains Air uses the same general permission model for all agents, but exact mode names and descriptions may vary depending on the selected agent. This is done to keep the modes close to the original behavior of each agent where possible.

### Select permission mode and effort

1.  Open the task in the Chat tool.

2.  In the task toolbar, click the permission mode selector. You can also press Shift+Tab to cycle through the available modes.

3.  Select the mode that matches your intent:

    -   **Plan** – create a plan before making changes. This mode is available for all agents. Learn more in [Plan mode](plan-mode.html).

    -   **Ask** – require approval before making changes or running commands. Depending on the agent, this mode can also be named Ask Permission, Default, or Chat.

    -   **Edit** – allow the agent to edit files automatically, while still keeping more limits than full access. Depending on the agent, this mode can also be named Auto-Edit or Agent.

    -   **Full Access** – allow the agent to work with the fewest restrictions available for that agent. Use this mode only if you trust the project and understand the risks.

    ![The permission mode selector in the task toolbar](https://resources.jetbrains.com/help/img/air/permission-mode.png "The permission mode selector in the task toolbar")

4.  If the selected agent supports it, set the Effort ![Effort selector](https://resources.jetbrains.com/help/img/air/air-select-effort.png "Effort selector") level.

    Effort controls how much reasoning the model uses for the task. Higher effort levels can produce more carefully reasoned results, but they usually take longer and use more tokens.

    Depending on the agent, available levels can include Low, Medium, High, and higher levels such as Max or Extra High.

    Some agents also provide additional options, such as Fast Mode.

    ![Effort selector](https://resources.jetbrains.com/help/img/air/aird_select_thinking_mode.png "Effort selector")
