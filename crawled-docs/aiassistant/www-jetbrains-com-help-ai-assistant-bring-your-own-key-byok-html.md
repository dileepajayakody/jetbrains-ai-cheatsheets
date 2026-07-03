1.  [Activate AI Assistant](activation-scenarios.html)

2.  [Bring your own key (BYOK)](#0)

# Bring your own key (BYOK)

Last modified: 11 June 2026

The instructions provided on this page apply when no authentication method is configured in AI Assistant.

If authentication is already configured, clear it in Settings | Tools | AI Assistant | Providers & API keys: [revoke](activate-agents.html#revoke-agent-authorization) agent authorization, [log out](licensing-and-subscriptions.html#log-out-of-jb-ai) of JetBrains AI, or set Provider to None if you use [BYOK](use-custom-models.html#provide-your-own-api-key).

AI Assistant supports the Bring Your Own Key (BYOK) approach, which allows you to use models from a supported AI provider by providing your own API key.

This setup allows you to use AI Assistant features if they are [supported](use-custom-models.html#assigned-and-fallback-models) by the provider models, work in [AI Chat](ai-chat.html), and use integrated [agents](ai-chat.html#agent-mode) with the provider's models without a [JetBrains AI](licensing-and-subscriptions.html) subscription.

You can enter your API key after [installing](installation-guide-ai-assistant.html) the AI Assistant plugin:

1.  Open the ! AI Chat tool window.

2.  Click Bring your own API key.

    ![Bring your own API key](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Bring your own API key")

3.  In the Provider field, select the AI provider that you want to use.

4.  Configure the provider settings. Depending on the selected provider, the configuration may differ:

    OpenAI, Anthropic, Gemini API key

    Google Vertex AI

    OpenAI-compatible

    Ollama, LMStudio

    ![Specify an API key](https://resources.jetbrains.com/help/img/idea/2026.1/ai_provide_api_key_on_starting_screen.png "Specify an API key")

    -   Enter your Key and click Continue.

    1.  Select the authentication method. There are two possible options:

        -   Express – authenticate using a Vertex AI [express mode](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) API key.

            ![Google Vertex AI – Express](https://resources.jetbrains.com/help/img/idea/2026.1/ai_vertex_ai_express_on_starting_screen.png "Google Vertex AI – Express")

        -   ADC (Application Default Credentials) – a Google Cloud authentication mechanism that uses credentials configured in your environment (for example, from your local Google Cloud setup or a service account) to authorize requests.

            This method requires specifying the Project ID and Location parameters.

            ![Google Vertex AI – ADC](https://resources.jetbrains.com/help/img/idea/2026.1/ai_vertex_ai_adc_on_starting_screen.png "Google Vertex AI – ADC")

            > ### tip
            >
            > To learn more about Application Default Credentials, refer to the official [Google Cloud](https://docs.cloud.google.com/docs/authentication/provide-credentials-adc) documentation.

    2.  Click Continue.

    ![Specify OpenAI-compatible provider's settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_openai_compatible_providers_on_starting_screen.png "Specify OpenAI-compatible provider's settings")

    1.  Specify the Base URL of the provider's API endpoint.

    2.  Enter your Key.

    3.  Specify the Model you want to use.

    4.  Click Continue.

    ![Specify local provider's settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_local_providers_on_starting_screen.png "Specify local provider's settings")

    1.  Specify the Base URL of the provider's local instance.

    2.  Specify the Model you want to use.

    3.  Click Continue.

After completing these steps, you can start using AI Assistant with the selected AI provider. To verify that the selected provider is active, click the ! JetBrains AI widget in the window header toolbar.

![Third-party provider in JetBrains AI widget](https://resources.jetbrains.com/help/img/idea/2026.1/ai_hub_third_party_provider.png "Third-party provider in JetBrains AI widget")

> ### tip
>
> If you want to configure another provider, set up local models, or activate a JetBrains AI subscription, you can do so in Settings | Tools | AI Assistant | Providers & API keys. For more information, refer to [Use third-party and local models](use-custom-models.html).
