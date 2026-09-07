1.  [Define tasks](define-tasks.html)

2.  [Agents and models](#0)

# Agents and models

Last modified: 14 August 2026

JetBrains Air can run tasks with different AI providers. In Settings, providers are listed as AI Providers. In the Chat tool, you select a provider through the agent selector.

JetBrains Air currently works with the following agents and providers:

-   [Anthropic (Claude Agent)](https://claude.ai/)

-   [OpenAI (OpenAI Codex)](https://openai.com/codex)

-   [Google (Gemini CLI)](https://gemini.google.com/)

-   [JetBrains (Junie)](https://www.jetbrains.com/junie/)

-   Your own ACP-compatible agent. See [Add your own agent](/help/air/select-agents-and-models.html#add-acp-agent).

If you use JetBrains as a provider, you can use all supported agents (except your own agents) from one subscription. Your tasks consume [AI credits](ai-credits.html) based on the agent and model you select.

### Select an agent and model for a new task

1.  Open the Chat tool and create a new task.

    The task toolbar appears at the bottom of the Chat tool. It contains selectors for the agent, model, and permission mode.

2.  Click the model selector (for example, Sonnet 4.5 or GPT 5.2 Codex).

    A menu opens where you can choose the agent and the model.

    ![Select agent and model](https://resources.jetbrains.com/help/img/air/change-agent-model.png "Select agent and model")

3.  To switch the agent, select the agent group (for example, Claude Agent or Codex).

    Then select a model from the list. The selected model becomes the default for the current task.

    The model you choose affects cost. More capable models usually use more tokens, which increases the cost for API billing accounts and consumes more of your available quota.

> ### note
>
> You can switch the agent only when you create a new task. Once the task is started, you can change the model, but not the provider. This is useful if you want a faster model for iteration or a stronger model for complex changes.

### Change the model for an existing task

1.  Open the task in the Chat tool.

2.  In the task toolbar, click the model selector.

3.  Select another model in the current provider group.

If you are not logged in to a provider, the model selector shows the Add Agent action. Use it to connect an account.

### Add an agent

1.  Click the model selector in the task toolbar.

2.  Click Add Agent.

    JetBrains Air opens Settings at Account | AI Providers.

3.  Connect the provider, then return to the Chat tool and select the agent and model.

## Add your own agent

If you want to use an agent that isn't in the list, you can add it yourself via an `acp.json` file. Any agent that supports the Agent Client Protocol (ACP) works in JetBrains Air like the built-in agents. The agent must already be installed on your machine.

Agents added through `acp.json` use their own subscriptions.

If an agent supports local models, JetBrains Air respects that agent's model settings.

### Add an ACP-compatible agent

1.  In the task toolbar, click the agent selector, then click Add ACP Agent.

    JetBrains Air opens the `acp.json` file. The file is stored in the JetBrains Air configuration folder and applies globally, so the agents you add are available for all tasks on your machine.

2.  Add an entry for each agent under `agent_servers`, then save the file. For example:

    ```
    {
        "agent_servers": {
            "Goose": {
                "command": "goose",
                "args": ["acp"],
                "env": {}
            },
            "Copilot": {
                "command": "copilot",
                "args": ["--acp"]
            }
        }
    }
    ```

    For each agent, specify:

    -   The name (the key, such as `Goose`) – the label shown in the agent selector.

    -   `command` – the command that runs the agent.

    -   `args` – the arguments that start the agent's ACP server.

    -   `env` – optional environment variables passed to the agent.

    To edit `acp.json` again later, press CtrlShift0K to open Go to Action, then run the Edit ACP JSON File action.

3.  The agents you added appear in the agent selector.

    ![The agent selector with the Add ACP Agent action and the added Copilot and Goose agents in the list](https://resources.jetbrains.com/help/img/air/acp-agent-selector.png "The agent selector with the Add ACP Agent action and the added Copilot and Goose agents in the list")

4.  Select the agent for a task. If you are already logged in to the agent, it works right away. If not, the agent prompts you to log in, either through a browser or with a command you run in the terminal.
