1.  [AI Assistant](settings-reference-ai-assistant.html)

2.  [Providers & API keys](#0)

# Providers & API keys

Last modified: 15 July 2026

Settings | Tools | AI Assistant | Providers & API keys

Use this page to [configure](use-custom-models.html) access to models from third-party AI providers and locally hosted models and to manage authorization for [integrated agents](activate-agents.html#integrated-agents).

[![AI Assistant providers and API keys settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_models.png "AI Assistant providers and API keys settings")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_models.png)

## JetBrains AI

Item

Description

Activate JetBrains AI

If you are using AI Assistant with [models from third-party AI providers](bring-your-own-key-byok.html) and want to additionally activate JetBrains AI to ensure [full](activation-scenarios.html#activation-options-difference) functionality, or if you previously [logged out](licensing-and-subscriptions.html#log-out-of-jb-ai) of JetBrains AI and need to log back in, click the Activate JetBrains AI button.

Log out

If you want to use a different [activation option](activation-scenarios.html), you can log out from your JetBrains AI subscription by clicking Log out.

For additional information, refer to [Enable JetBrains AI alongside custom models](use-custom-models.html#enable-jb-ai).

## Agent Authorization

Item

Description

Revoke

If you previously activated an agent using one of the supported [authentication methods](activate-agents.html), click Revoke to remove the authorization.

For additional information, refer to [Activate agents](activate-agents.html).

## Third-party AI providers

Item

Description

Provider

Select the third-party AI provider ([Anthropic](https://www.anthropic.com/), [Google](https://deepmind.google/models/gemini/), [OpenAI](https://platform.openai.com/docs/models), [OpenAI-compatible](https://platform.openai.com/docs/api-reference/introduction), [LM Studio](https://lmstudio.ai/), or [Ollama](https://ollama.com/)) whose custom models you want to use.

API Key

Specify the API key to access the models provided by the selected third-party AI provider.

ADC

Uses Application Default Credentials (ADC) to authenticate requests to Google Vertex AI with credentials configured in your environment, for example, from your local Google Cloud setup or a service account.

Available only for Google Vertex AI. This method also requires you to specify Project ID and Location.

URL

Specify the URL of the provider’s API endpoint. This can point to a local server (for example, `http://localhost:port`) or a remote endpoint. To check if the connection is established, click Test Connection.

Tool calling

Specify whether the model supports calling tools configured through the [Model Context Protocol (MCP)](mcp.html). Available only for OpenAI-compatible providers.

For additional information, refer to [Use third-party and local models](use-custom-models.html).

## AI Completion

Use this section to configure the provider for AI completion features, like [inline code completion](code-completion.html) and [next edit suggestions](next-edit-suggestions.html).

Item

Description

Provider

Select the provider for AI completion features:

-   JetBrains – use JetBrains models. This is the default option.

-   OpenAI Compatible – use a model served through an OpenAI-compatible endpoint.

API key

Specify the API key for the selected endpoint. Available for the OpenAI Compatible provider.

Base URL

Specify the URL of the endpoint. To check whether the connection is established, click Test Connection.

Model

Specify the model to use for AI completion features. AI Assistant indicates whether the model is recognized and supported for AI completion. The model must be served by the endpoint specified in Base URL.

Model context

Specify the size of the model context window, in tokens.

Max output tokens

Specify the maximum number of tokens the model can return in a single completion.

Prompt schema

Select the template used to format completion requests for the model. When AI Assistant recognizes the model, it sets the matching schema automatically. Select a specific schema only when the model isn't recognized.

For additional information, refer to [Use a custom model for AI Completion](use-custom-models.html#ai-completion-provider).

## Model Assignment

> ### note
>
> This configuration is available only to local models or models accessed from the OpenAI-compatible endpoint. Before assigning models to features, make sure that the connection to the provider is [established](use-custom-models.html#connect-local-models).

Item

Description

Core features

Select the custom model that must be used for in-editor code generation, commit message generation, as a default model in chat, and other core features.

Instant helpers

Select the custom model that must be used for lightweight features, such as chat context collection, chat title generation, and name suggestions.

Context window

Specify the size of the model context window for local models. This setting determines how much context the model can process at once. A larger window allows more context, while a smaller one reduces memory usage and may improve performance.

By default, the context window is set to **64 000** tokens.

For additional information, refer to [Assign models to AI Assistant features](use-custom-models.html#use-custom-models-in-ai-features).

For additional information, refer to [Assign models to AI Assistant features](use-custom-models.html#use-custom-models-in-ai-features).
