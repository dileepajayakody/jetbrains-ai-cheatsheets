# Use third-party and local models

Last modified: 28 July 2026

By default, AI Assistant provides access to a set of [cloud-based models](supported-llms.html#jbai-service-models) from various AI providers through the [JetBrains AI service](https://www.jetbrains.com/help/ai/jetbrains-ai.html). These models power AI Assistant features and can be selected in AI Chat to have a conversation about your codebase.

In addition, you can configure AI Assistant to use locally hosted models or models provided by third parties. Supported options include:

-   [Anthropic](https://www.anthropic.com/) – provides the Claude family of models.

-   [Google](https://deepmind.google/models/gemini/) – provides the Gemini family of models, available either through the Gemini API (using an API key) or through Google Vertex AI.

-   [OpenAI](https://platform.openai.com/docs/models) – offers GPT, o-series, and other general-purpose models.

-   [OpenAI-compatible](https://platform.openai.com/docs/api-reference/introduction) endpoints – services that expose an API compatible with the OpenAI API (for example, [llama.cpp](https://github.com/ggml-org/llama.cpp) or [LiteLLM](https://github.com/BerriAI/litellm)).

-   [Ollama](https://ollama.com/) – runs [open-source models](https://www.ollama.com/library) locally on your machine.

-   [LM Studio](https://lmstudio.ai/) – runs local [models](https://lmstudio.ai/models) and exposes them through an OpenAI-compatible API.

By configuring models from different sources, you can control which models AI Assistant uses and how those models are provided.

## Access models from third-party AI providers

To access models from third-party providers, AI Assistant requires an API key and, in some cases, additional configuration. Entering the key allows AI Assistant to authenticate with the provider and access its models.

> ### note
>
> If your organization manages AI centrally through JetBrains IDE Services or JetBrains Central, an administrator can set the AI provider for you and control whether you can connect third-party models with your own API key. As a result, the choice of providers might be limited, and you might not be able to connect models from third-party providers.
>
> For details, refer to the [JetBrains IDE Services](https://www.jetbrains.com/help/ide-services/configure-profiles.html#ai_profile) or [JetBrains Central](https://www.jetbrains.com/help/jetbrains-console/eap/ai-policies.html) documentation.

To provide the API key:

1.  Navigate to Settings | Tools | AI Assistant | Providers & API keys.

    [![Providers & API keys settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_models.png "Providers & API keys settings")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_models.png)

2.  In the Third-party AI providers section, select the Provider.

3.  Configure the provider settings. Depending on the selected provider, the configuration may differ:

    OpenAI, Anthropic, Gemini API key

    OpenAI-compatible

    Google Vertex AI

    ![Provide API key](https://resources.jetbrains.com/help/img/idea/2026.2/ai_configure_third_party_providers.png "Provide API key")

    -   Enter the API Key and click Test Connection to check whether the connection is established successfully.

    ![OpenAI-compatible provider](https://resources.jetbrains.com/help/img/idea/2026.2/ai_byok_openai_api.png "OpenAI-compatible provider")

    1.  Specify the URL of the provider's API endpoint.

    2.  Enter your API Key.

    3.  Specify whether the model supports calling tools configured through the [Model Context Protocol (MCP)](mcp.html) by enabling or disabling the Tool calling setting.

    4.  Click Test Connection to check whether the connection is established successfully.

    1.  Select the authentication Method. There are two possible options:

        -   API key – authenticate using a Vertex AI [express mode](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) API key.

            ![Google Vertex AI API key](https://resources.jetbrains.com/help/img/idea/2026.2/ai_google_vertex_ai_api_key.png "Google Vertex AI API key")

        -   ADC (Application Default Credentials) – a Google Cloud authentication mechanism that uses credentials configured in your environment (for example, from your local Google Cloud setup or a service account) to authorize requests.

            This method also requires specifying the Project ID and Location parameters.

            ![Google Vertex AI ADC](https://resources.jetbrains.com/help/img/idea/2026.2/ai_google_vertex_ai_adc.png "Google Vertex AI ADC")

            > ### tip
            >
            > To learn more about Application Default Credentials, refer to the official [Google Cloud](https://docs.cloud.google.com/docs/authentication/provide-credentials-adc) documentation.

    2.  Click Test Connection to check whether the connection is established successfully.

4.  Click Apply to save changes.

To verify that the models from the configured provider became available for use, open AI Chat and click the model selector. Provider's models are available under a corresponding section.

![Third-party provider models in chat](https://resources.jetbrains.com/help/img/idea/2026.2/ai_third_party_provider_models.png "Third-party provider models in chat")

> ### note
>
> Models accessed from a third-party AI provider are assigned to AI Assistant features automatically. If these models do not support certain AI Assistant features, those features become unavailable.
>
> For more information on what models are used for AI Assistant features, refer to [List of assigned and fallback models](/help/ai-assistant/use-custom-models.html#assigned-and-fallback-models).

## Connect local models

Providers like Ollama and LM Studio run models on your machine. Connecting to them in AI Assistant allows you to use these models directly from your local setup.

> ### note
>
> These providers need to be installed and configured on your machine and have the necessary models downloaded before you can connect to them.

1.  Navigate to Settings | Tools | AI Assistant | Providers & API keys.

2.  In the Third-party AI providers section, select the Provider.

3.  Specify the URL where it can be accessed and click Test Connection to check whether the connection is established successfully.

    ![Enable Third-party AI providers](https://resources.jetbrains.com/help/img/idea/2026.2/ai_enable_third_party_providers.png "Enable Third-party AI providers")

4.  Click Apply to save changes.

Once the connection is established, local models become available for use in AI Chat. Additionally, locally hosted models can also be [assigned](/help/ai-assistant/use-custom-models.html#use-custom-models-in-ai-features) to specific AI Assistant features.

> ### note
>
> Notes
>
> -   Currently, AI Assistant does not support invoking tools from configured MCP servers when using local models.
>
> -   The default model context window for local models is set to **64 000** tokens. If needed, you can [adjust](/help/ai-assistant/use-custom-models.html#use-custom-models-in-ai-features) this value in the settings.
>

## Use a custom model for AI Completion

AI completion features, such as [inline code completion](code-completion.html) and [next edit suggestions](next-edit-suggestions.html), rely on JetBrains models by default. If needed, you can use a model of your choice from an OpenAI-compatible provider instead.

Different AI completion features require different model capabilities. Inline code completion requires Fill-in-the-Middle (FIM) support. The next edit suggestions feature requires edit-prediction support. General-purpose chat models typically do not provide these capabilities and are therefore not suitable for AI completion.

The features available in the IDE depend on the capabilities of the configured model:

Configured model supports

Available features

Fill-in-the-Middle (FIM) only

Inline code completion

Edit prediction

Inline code completion, Next edit suggestions

To specify the model for AI completion features:

1.  Navigate to Settings | Tools | AI Assistant | Providers & API keys.

    [![Providers & API keys settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_models.png "Providers & API keys settings")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_models.png)

2.  In the AI Completion section, select the Provider:

    -   JetBrains – use JetBrains models for AI Completion. This is the default option.

    -   OpenAI Compatible – use a model served through an OpenAI-compatible endpoint.

    > ### note
    >
    > The provider you select for AI completion features is independent from the provider used for chat and other features. Selecting it here does not reuse or change the [third-party AI provider](/help/ai-assistant/use-custom-models.html#provide-your-own-api-key) configured for chat and other AI features.

3.  If you selected OpenAI Compatible, specify the provider parameters:

    ![Configure the third-party provider for AI completion features](https://resources.jetbrains.com/help/img/idea/2026.2/ai_third_party_provider_for_ai_completion.png "Configure the third-party provider for AI completion features")

    -   API key – enter the API key for the selected endpoint.

    -   Base URL – specify the URL of the endpoint. Click Test Connection to check whether the connection is established successfully.

    -   Model – specify the model to use for AI Completion. AI Assistant indicates whether the model is recognized and supported for AI Completion.

    -   Model context – specify the size of the model context window, in tokens.

    -   Max output tokens – specify the maximum number of tokens the model can return in a single completion.

    -   Prompt schema – the template used to format completion requests so that the model receives the code context in the structure it expects. When AI Assistant recognizes the model, it sets the matching schema automatically, so you usually do not need to change this parameter.

        > ### tip
        >
        > Select a specific schema only when your model is not recognized: a (fim) schema that matches your completion model's family (for example, (fim) DeepSeek), or an edit-prediction schema (such as Zeta or Sweep) for a next-edit-style model.

4.  Click Apply to save changes.

## Assign models to AI Assistant features

Each AI Assistant feature has a [predefined list](/help/ai-assistant/use-custom-models.html#assigned-and-fallback-models) of models assigned to it. These models are used when the feature is triggered. Some features also have a predefined list of [fallback models](/help/ai-assistant/use-custom-models.html#fallback-models), which are used if none of the assigned models are available.

When a feature is triggered, AI Assistant checks whether any of the models available to you match the models assigned to that feature. If no match is found and fallback models are defined for the feature, the system checks for a match among the fallback models. If no compatible model is available, the feature is unavailable.

The mechanism works as follows:

Yes

No

No

Yes

Yes

No

AI Assistant obtains models from provider

User triggers feature

System checks available models against assigned models

Matching model found?

Are fallback models defined?

System checks available models against fallback models

Matching model found?

Feature is available

Feature is NOT available

By default, AI Assistant features use models provided through the JetBrains AI service, ensuring that all features are available.

However, models obtained from third-party AI providers or local models can also be used for AI Assistant features. Depending on the model source, models are assigned differently:

Model source

Feature support

Third-party AI providers

Models are assigned to features automatically. If the provider models do not support a specific feature, that feature is unavailable.

Local models and models from OpenAI-compatible endpoints

Models can be assigned to groups of AI Assistant features manually.

\>

> ### tip
>
> Since not all features may be supported by the third-party provider models, you can use them [together](/help/ai-assistant/use-custom-models.html#enable-jb-ai) with the JetBrains AI service subscription. In this case, models provided through the JetBrains AI service are used automatically when provider models do not support a feature.

To assign local models and models accessed from the OpenAI-compatible endpoint to AI Assistant features:

1.  Go to Settings | Tools | AI Assistant | Providers & API keys.

2.  In the Models Assignment section, specify the models that you want to use for core, lightweight, and code completion features. Also, define the model context window size if needed.

    ![Local models setup](https://resources.jetbrains.com/help/img/idea/2026.2/ai_local_models_setup.png "Local models setup")

    -   Core features – this model will be used for in-editor code generation, commit message generation, as a default model in chat, and other core features.

    -   Instant helpers – this model will be used for lightweight features, such as chat context collection, chat title generation, and name suggestions.

    -   Context window – allows you to configure the model context window for local models. A larger window lets the model handle more context in a request, while a smaller one reduces memory usage and may improve performance. This helps balance context length with system resources. The default value is **64 000** tokens.

        > ### note
        >
        > AI Assistant has a mechanism that trims attachments if they exceed a certain percentage of the model context window. This ensures that your requests stay within the model's capacity, so it can generate a concise response. Local models are also affected by this mechanism. To learn more about configuring this behavior, refer to [Set a message trimming threshold](chat-mode.html#set-message-trimming-threshold).

3.  Click Apply to save changes.

As a result, AI Assistant uses the assigned models when the corresponding feature is triggered.

### List of assigned and fallback models

This section lists AI Assistant features and the models they require, helping you assess compatibility with models from third-party providers.

> ### warning
>
> Limitations
>
> The following features are not powered by the models configured in the [Third-party AI providers](/help/ai-assistant/use-custom-models.html#provide-your-own-api-key) section:
>
> -   [Next edit suggestions](next-edit-suggestions.html)
>
> -   [Code completion](code-completion.html)
>
>
> These features rely on JetBrains models by default. To use a different model, configure an OpenAI-compatible provider in the [AI Completion](/help/ai-assistant/use-custom-models.html#ai-completion-provider) section.

#### Core features

Feature

Application area

Used model(s)

[In-editor code generation](code-generation.html)

Editor

-   **Anthropic models:** Claude 4.5 Sonnet

-   **Google models:** Gemini 2.5 Pro

-   **OpenAI models:** GPT-4o

-   **Alibaba models (Mainland China only):** Qwen Max

[Generate documentation](generate-documentation-with-ai.html)

Editor

-   **Google models:** Gemini 2.5 Pro

-   **OpenAI models:** GPT-4o

-   **Alibaba models (Mainland China only):** Qwen Max

[Generate tests](generate-tests-with-ai.html)

Editor

-   **Google models:** Gemini 2.5 Pro

-   **OpenAI models:** GPT-4o

-   **Alibaba models (Mainland China only):** Qwen Max

Fix with AI (only in RustRover)

Editor

-   **Anthropic models:** Claude 3.7 Sonnet

[Resolve Git conflicts with AI](ai-in-vcs-integration.html#resolve-git-conflicts-with-ai)

VCS

-   **Google models:** Gemini 2.5 Pro

-   **OpenAI models:** GPT-4o

[Perform Self-Review with AI](ai-in-vcs-integration.html#ai-self-review)

VCS

-   **Anthropic models:** Claude 3.7 Sonnet

-   **OpenAI models:** GPT-4o, GPT-4o mini

\>

#### Instant helpers

Feature

Application area

Used model(s)

[Apply a suggestion to the current file](chat-mode.html#apply-changes-to-the-current-file)

AI Chat

-   **Google models:** Gemini 2.0 Flash, Gemini 2.5 Flash

-   **OpenAI models:** GPT-4o, GPT-4o mini

-   **Alibaba models (Mainland China only):** Qwen Max

File name generation

AI Chat

-   **Google models:** Gemini 2.5 Flash

-   **OpenAI models:** GPT-4o mini

-   **Alibaba models (Mainland China only):** Qwen Max

Chat context collection

AI Chat

-   **Google models:** Gemini 2.0 Flash, Gemini 2.5 Flash

-   **OpenAI models:** GPT-4o mini

-   **Alibaba models (Mainland China only):** Qwen Max

Chat title generation

AI Chat

-   **Google models:** Gemini 2.5 Flash

-   **OpenAI models:** GPT-4o mini

-   **Alibaba models (Mainland China only):** Qwen Max

[Name suggestions](refactoring-with-ai.html#ai-add-name-suggestions)

Editor

-   **Google models:** Gemini 2.5 Flash

-   **OpenAI models:** GPT-4o mini

-   **Alibaba models (Mainland China only):** Qwen Max

\>

#### Completion model

Feature

Where the feature is invoked

Used model(s)

[Code completion](code-completion.html)

Editor, AI Chat, Commit message

-   **JetBrains models:** Mellum

-   **Alibaba models (Mainland China only):** Alibaba Code Completion

[Code completion](code-completion.html) (for AI Enterprise, if opted to [use](https://www.jetbrains.com/help/ide-services/manage-aie.html#custom-models) a different AI provider)

Editor, AI Chat, Commit message

-   **Anthropic models:** Claude 4.5 Haiku, Claude 3.5 Haiku, Claude 4.5 Sonnet, Claude 3.5 Sonnet

-   **Google models:** Gemini 2.5 Flash, Gemini 2.0 Flash

-   **OpenAI models:** GPT-5 mini, GPT-4o, GPT-4o mini

\>

#### Fallback models

For features that support fallback, this list is compared with the models available to you. If no matching model is found, the feature is unavailable.

The following models are defined as fallback models:

-   **Anthropic models:** Claude 4.5 Sonnet, Claude 4 Sonnet, Claude 3.7 Sonnet, Claude 3.5 Sonnet, Claude 4.5 Haiku, Claude 3.5 Haiku

-   **Google models:** Gemini 2.5 Pro, Gemini 2.5 Flash, Gemini 2.0 Flash

-   **OpenAI models:** GPT-4o, GPT-4o mini

-   **Alibaba models (Mainland China only):** Qwen Max

## Enable JetBrains AI alongside custom models

Some features may be unavailable with models from third-party AI providers. To ensure that all features are available and work as expected, you can activate a JetBrains AI service subscription.

To enable your JetBrains AI subscription:

1.  Navigate to Settings | Tools | AI Assistant | Providers & API keys.

2.  In the JetBrains AI section, click Activate JetBrains AI.

    ![Click Activate JetBrains AI](https://resources.jetbrains.com/help/img/idea/2026.2/ai_activate_jb_ai.png "Click Activate JetBrains AI")

3.  Click Log in to JetBrains Account, enter your credentials, and wait for the login process to complete.

After you log in to a JetBrains Account that has an active JetBrains AI subscription, you can start using AI Assistant with full functionality.
