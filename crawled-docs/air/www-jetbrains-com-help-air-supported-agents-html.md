1.  [Getting started](getting-started.html)

2.  [Supported agents](#0)

# Supported agents

Last modified: 25 August 2026

JetBrains Air supports several agent providers. You select an agent and a model per task.

You can connect to models in two ways: with a JetBrains AI subscription (AI Pro or AI Ultimate), or with your own provider account. Your own account can be a subscription you already pay for, such as Claude Pro, Max, or Team, or an API billing account that you connect with your own key (BYOK).

> ### note
>
> You can use your own provider account for local runs in the JetBrains Air desktop app. In cloud tasks and in [the web version of JetBrains Air](https://air.jetbrains.cloud), you can only use the providers and agents enabled by your organization administrator in JetBrains Central Console. See [Manage AI access for your organization](set-up.html#setup-org-ai-access).

JetBrains Air supports:

Agents

Supported accounts

**Claude Agent**

To use Claude Agent, connect your Anthropic Console account with API billing. JetBrains Air uses your Anthropic API key to authenticate requests, including requests from Docker environments.

**OpenAI Codex**

JetBrains Air supports two types of OpenAI accounts:

-   ChatGPT account (Plus, Pro, or Team), which uses your existing ChatGPT subscription.

-   OpenAI Platform account, which uses API billing.

**Gemini CLI**

JetBrains Air supports the following types of Google Gemini accounts:

-   Google Account (Personal or Workspace)

-   Google AI Studio (API Billing)

**Junie**

You can add Junie by logging in to your JetBrains account.

**Your own agent**

You can add any ACP-compatible agent installed on your machine. These agents use their own subscriptions. See [Add your own agent](select-agents-and-models.html#add-acp-agent).

Learn how to connect your AI provider account in [Set up Air](set-up.html#connect-ai-provider).
