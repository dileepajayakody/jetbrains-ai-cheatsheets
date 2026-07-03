1.  [Define tasks](define-tasks.html)

2.  [Agents and models](#0)

# Agents and models

Last modified: 06 May 2026

JetBrains Air can run tasks with different AI providers. In Settings, providers are listed as AI Providers. In the Chat tool, you select a provider through the agent selector.

JetBrains Air currently supports the following AI providers:

-   [Anthropic (Claude Agent)](https://claude.ai/)

-   [OpenAI (OpenAI Codex)](https://openai.com/codex)

-   [Google (Gemini CLI)](https://gemini.google.com/)

-   [JetBrains (Junie)](https://www.jetbrains.com/junie/)

    If you use JetBrains as a provider, you can use all supported agents from one subscription. Your tasks consume JetBrains AI credits based on the agent and model you select.

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
