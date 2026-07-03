1.  [Headless mode](junie-headless.html)

2.  [Model selection](#0)

# Model selection

Last modified: 26 June 2026

Environment variable

CLI equivalent

Description

```
JUNIE_MODEL
```

```
--model
```

LLM model to use. If not specified, Junie uses the `Default` model — a dynamically set option with the best price-quality ratio.

```
JUNIE_LLM_PROVIDER
```

```
--provider
```

BYOK provider to use. Forces Junie to use a specific BYOK provider. Possible values: `openai`, `anthropic`, `google`, `xai`, `openrouter`. If not set, the Junie or Custom model provider is used.

```
JUNIE_EFFORT
```

```
--effort
```

Reasoning effort level for models that support it. Possible values: `minimal`, `low`, `medium`, `high`, `xhigh`, `max`. The set of supported values depends on the selected model; if the value is not supported, the model default is used.

To see all available models, run `junie --help` or use `/model` in interactive mode. To change the effort level during a session, use `/model` or the dedicated `/effort` command.

> ### note
>
> We recommend keeping the default model and effort settings. Higher effort levels do not always produce noticeably better results, but they can cost significantly more and make the model take noticeably longer to respond as it spends more time reasoning.

## LLM providers

Junie supports four types of LLM providers:

-   Junie — models accessed through a JetBrains AI subscription, by means of a Junie login or a JetBrains AI API key. No additional configuration is required.

-   BYOK (Bring Your Own Key) — models accessed using your own API key from a third-party provider such as OpenAI, Anthropic, Google, xAI, or OpenRouter. See [BYOK](byok.html) for setup instructions.

-   Custom — models defined in a custom profile JSON file. See [Custom LLM models](custom-llm-models.html) for details.

-   Proxy — models accessed through a custom proxy endpoint configured in `config.json`.

When a model is available through multiple providers, Junie prefers the Junie provider by default. Use `--provider` to override this behavior.

### Provider auto-detection

When you specify `--model` without `--provider`, Junie resolves the provider automatically:

1.  If the Junie provider is available (you are logged in with a JetBrains account or API key), Junie uses it by default.

2.  If the Junie provider is not available (no login or API key), Junie looks through the connected BYOK providers and selects the first one that offers the requested model.

For example, running `junie --model grok --grok-api-key <key>` without a JetBrains login will automatically route to the xAI BYOK provider because it is the only available provider with the Grok model.

## How Junie uses models internally

The model you select (or the Default) is your primary model — Junie uses it for the main reasoning and code generation work.

However, Junie also uses a separate model for certain internal tasks such as:

-   Summarizing context

-   Classifying and routing tasks

-   Extracting information for memory

-   Filtering capabilities

-   Other helper tasks

These internal tasks don't need the full power of the primary model, so Junie automatically picks an alternative from the same provider. Note that these models are not always smaller — for example, routing may use GPT-4.1 by default. If your primary model is from Anthropic, the helper model will typically be Claude Haiku; if it's from Google, it will be Gemini Flash.

This applies even when using BYOK. If you bring your own API key, Junie will still use a separate model from the same provider for these internal tasks. This means you may see API calls to a model you didn't explicitly select — that's expected and helps keep costs down and responses fast. For more details on configuring custom LLM providers, see [Custom LLM Models](custom-llm-models.html).

Junie CLI also supports model aliases. Each alias maps to a specific model version set by the JetBrains team based on our own internal evaluations and is not necessarily the latest available version. The model behind each alias may change as new models are released.

Model ID

Provider

Current model

`sonnet`

Anthropic

[Claude Sonnet 4.6](https://www.anthropic.com/claude/sonnet)

`opus`

Anthropic

[Claude Opus 4.8](https://www.anthropic.com/claude/opus)

`gpt`

OpenAI

[GPT-5.4](https://developers.openai.com/api/docs/models)

`gpt-codex`

OpenAI

[GPT-5.3-codex](https://developers.openai.com/codex/models/)

`gemini-pro`

Google

[Gemini 3.1 Pro Preview](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)

`gemini-flash`

Google

[Gemini 3 Flash](https://deepmind.google/models/gemini/flash/)

`grok`

xAI

[Grok 4.3](https://docs.x.ai/developers/models)

Thanks for your feedback!

Was this page helpful?

YesNo
