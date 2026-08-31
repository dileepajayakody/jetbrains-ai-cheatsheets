# Activate AI Assistant

Last modified: 05 August 2026

This page provides an overview of the available activation options and how they differ. For setup instructions, refer to the corresponding sections.

AI Assistant provides flexible ways to access AI features and coding agents. You can use the JetBrains AI service, activate agents using different authentication methods, or connect external models using your own API key.

## Activation options

After [installation](installation-guide-ai-assistant.html), you can choose how you want to use AI Assistant:

![Activation options](https://resources.jetbrains.com/help/img/idea/2026.2/ai_bring_your_own_key.png "Activation options")

-   [Start with JetBrains AI subscription](jetbrains-ai-subscription.html) – use the JetBrains-managed service with full access to AI Assistant features and supported agents.

-   [Pick an agent](activate-agents.html#integrated-agents) – use a specific integrated agent – [Junie](junie-agent.html), [Claude Agent](claude-agent.html), [Codex](codex-agent.html), or [GitHub Copilot](copilot-agent.html). Depending on the agent, activation may be available through a JetBrains AI subscription, a provider account (OAuth), an API key, or another supported method.

-   [Add ACP-compatible agents](activate-agents.html#add-acp-agents) – connect an external or custom agent using the [Agent Client Protocol (ACP)](https://agentclientprotocol.com/overview/introduction).

-   [Use third-party provider](bring-your-own-key-byok.html) – use AI Assistant with models from a supported third-party provider by connecting your API key.

When you choose one of these options, the corresponding activation procedure starts. The option you select determines which features are [available](/help/ai-assistant/activation-scenarios.html#activation-options-difference) and how usage is billed.

You can use these options independently or [combine](/help/ai-assistant/activation-scenarios.html#combined-configurations) them to create a custom setup.

## Differences between activation options

The selected activation option determines which AI Assistant features are available and how usage is billed. The following table summarizes the differences:

Activation option

Requires JetBrains AI subscription

Available features

Billing

JetBrains AI subscription

Yes

All AI Assistant features and supported agents

JetBrains AI subscription

Integrated agent\[1\]

JetBrains AI subscription

Yes

The activated agent and all other AI Assistant features. You can activate other integrated agents separately.

JetBrains AI subscription

API key

No

The activated agent and AI Assistant features supported by the provider's models

Third-party AI provider

Provider account (OAuth)

No

The activated agent only

Provider account

Provider-specific method

No

The activated agent only

Agent provider

ACP-compatible agent

No

The connected external or custom agent only

Agent provider (if applicable)

Third-party provider (BYOK)

No

AI Assistant features supported by the provider's models\[2\] and agents that support the provided API key authentication

Third-party AI provider

\>

> ### note
>
> \[1\]Not every integrated agent supports every authentication method. For the full list of supported methods per agent, refer to [Integrated agents](activate-agents.html#integrated-agents).
>
> \[2\]AI Assistant features rely on specific models. If compatible models are not available from your third-party provider, some features may become unavailable. To learn which AI Assistant features will work with the models available from the selected third-party AI provider, refer to [List of assigned and fallback models](use-custom-models.html#assigned-and-fallback-models).
>
> To keep all features available, you can [activate JetBrains AI](use-custom-models.html#enable-jb-ai) alongside your API key.

## Combined configurations

Multiple activation options can be enabled at the same time. When several options are active, AI Assistant selects a provider according to a predefined priority order.

Active options

Priority order

Behavior

JetBrains AI subscription

JetBrains AI subscription

All features are available because the required models are provided by the JetBrains AI service.

Third-party provider (BYOK)

BYOK

Features work only if compatible models are available from the configured third-party provider. Agents that support API key authentication are also available.

Provider account (OAuth)

Provider account (OAuth)

The authorized agent uses the provider account.

ACP-compatible agent

ACP-compatible agent

Requests to the ACP-compatible agent are handled by the agent provider.

JetBrains AI + BYOK

1.  BYOK

2.  JetBrains AI

-   Features supported by models from the third-party provider use BYOK.

-   The remaining features use models from the JetBrains AI service.

JetBrains AI + Provider account

1.  Provider account (OAuth)

2.  JetBrains AI

-   The authorized agent uses the provider account.

-   Other AI Assistant features use models from the JetBrains AI service.

Provider account + BYOK

1.  Provider account (OAuth)

2.  BYOK

-   The authorized agent uses the provider account.

-   Other AI Assistant features use compatible models from the third-party provider.

JetBrains AI + BYOK + Provider account

1.  Provider account (OAuth)

2.  BYOK

3.  JetBrains AI

-   The authorized agent uses the provider account.

-   Features supported by models from the third-party provider use BYOK.

-   The remaining features use models from the JetBrains AI service.

\>

## How data is handled in different scenarios

Depending on the selected activation scenario, data may be handled differently:

JetBrains AI subscription

Third-party provider (BYOK)

JetBrains AI + BYOK

Provider account (OAuth)

ACP-compatible agents

Request

Request

Response

Response

IDE

JetBrains AI service

LLM Provider

-   The IDE sends prompts and context to the JetBrains AI service, which coordinates the request but **does not** store or process the data. The request is then forwarded to the LLM provider, and the response returns along the same path.

> ### note
>
> Data is not stored or processed by JetBrains unless the Send detailed code-related data setting is [enabled](how-we-handle-your-code-and-data.html). In this case, prompts and responses may be collected and processed by JetBrains and used for product improvement and training JetBrains models.

Request

Response

IDE

BYOK LLM Provider

-   Prompts and context are sent directly to the BYOK-configured LLM provider using your API key.

Request

Yes

Response

No

Request

Response

Response

IDE

Is feature supported by BYOK models?

BYOK LLM Provider

JetBrains AI service

LLM Provider

-   If the feature is supported by the models from a third-party provider, prompts and context are sent directly to the BYOK-configured LLM provider.

-   If the feature is not supported by the models from a third-party provider, prompts and context are sent to the JetBrains AI service, which coordinates the request but **does not** store or process the data. The request is then forwarded to the LLM provider, and the response returns along the same path.

> ### note
>
> Data is not stored or processed by JetBrains unless the Send detailed code-related data setting is [enabled](how-we-handle-your-code-and-data.html). In this case, prompts and responses may be collected and processed by JetBrains and used for product improvement and training JetBrains models.

Request

Response

IDE

Agent Provider

-   Prompts and context are sent directly to the agent provider.

Request

Response

IDE

ACP Agent Provider

-   Prompts and context are sent directly to the ACP agent provider using your API key (if applicable).

> ### note
>
> The Codex agent is an exception, as it can be used with the JetBrains AI service subscription. In this case, the requests will be coordinated through the JetBrains AI service but will not be stored or processed unless the Send detailed code-related data setting is [enabled](how-we-handle-your-code-and-data.html).

## Choose your setup

Pick the option that best matches your needs:

-   [JetBrains AI subscription](licensing-and-subscriptions.html) – if you want full feature access with a ready-to-use setup.

-   [Third-party provider (BYOK)](bring-your-own-key-byok.html) – if you want to use your own API keys and external models.

-   [Activate an agent](activate-agents.html#integrated-agents) – if you want to use supported integrated agents with your provider account.

-   [ACP-compatible agents](activate-agents.html#add-acp-agents) – if you want to connect custom or external agents.
