1.  [Activate AI Assistant](activation-scenarios.html)

2.  [Activate agents](#0)

# Activate agents

Last modified: 30 June 2026

The instructions provided on this page apply when no authentication method is configured in AI Assistant.

If authentication is already configured, clear it in Settings | Tools | AI Assistant | Providers & API keys: [revoke](/help/ai-assistant/activate-agents.html#revoke-agent-authorization) agent authorization, [log out](licensing-and-subscriptions.html#log-out-of-jb-ai) of JetBrains AI, or set Provider to None if you use [BYOK](use-custom-models.html#provide-your-own-api-key).

AI Assistant provides a set of integrated agents (such as [Junie](junie-agent.html), [Claude Agent](claude-agent.html), and [Codex](codex-agent.html)), as well as supports adding external or custom [ACP-compatible agents](acp.html).

Integrated agents can be activated using different authentication methods, depending on the agent and your configuration.

Activating an agent lets you use it in AI Chat. Other AI Assistant features may be unavailable depending on the selected [activation method](activation-scenarios.html#activation-options-difference).

## Integrated agents

You can activate integrated agents using one of the following authentication methods:

-   JetBrains AI subscription

-   API key (BYOK)

-   Provider account (OAuth)

-   Provider-specific methods (such as [Anthropic Console](https://platform.claude.com/dashboard))

Not all authentication methods are supported by every agent:

Agent

JetBrains AI

Provider account (OAuth)

API key (BYOK)

Provider-specific

![Junie logo](https://resources.jetbrains.com/help/img/idea/2026.1/junie-logo.svg "Junie logo") **Junie**

![Supported](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Supported")

![Not supported](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not supported")

![Not supported](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not supported")

![Not supported](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not supported")

! **Claude Agent**

![Supported](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Supported")

![Not supported](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not supported")

![Supported](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Supported")

Anthropic Console

! **Codex**

![Supported](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Supported")

![Supported](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Supported")

![Supported](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Supported")

![Not supported](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not supported")

! **GitHub Copilot**

![Not supported](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not supported")

![Supported](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Supported")

![Not supported](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not supported")

![Not supported](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not supported")

\>

> ### note
>
> Activating an agent using JetBrains AI or an API key also enables other AI Assistant features, while authentication with a provider account only enables the agent in AI Chat. For more information, refer to [Differences between activation options](activation-scenarios.html#activation-options-difference).

The selected authentication method is used for both request processing and billing. You can check which method is currently active in Settings | Tools | AI Assistant | Providers & API keys, in the Agent Authorization section.

![View agent authentication method](https://resources.jetbrains.com/help/img/idea/2026.1/ai_agent_authentication_method.png "View agent authentication method")

If you want to change the authentication method, you can [revoke](/help/ai-assistant/activate-agents.html#revoke-agent-authorization) the current one and select a different option. For the changes to take effect, you will need to create a new chat.

### Activate an agent using a JetBrains AI subscription

All integrated agents can be used with the JetBrains AI subscription:

Junie

Claude Agent

Codex

1.  Open the ! AI Chat tool window.

2.  Select Junie.

    ![Select the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Select the agent")

3.  Complete sign-in with your JetBrains Account if required.

1.  Open the ! AI Chat tool window.

2.  Select Claude Agent.

    ![Select the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Select the agent")

    This action opens the AI Chat with Claude Agent selected for interaction.

3.  Send a message to trigger the activation.

4.  Click Install and Continue to accept the [terms of service](https://code.claude.com/docs/en/legal-and-compliance) and install the agent.

    ![Accept terms of service and install the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_install_and_accept_tos.png "Accept terms of service and install the agent")

    After the installation, you will be prompted to select the authentication method.

5.  In the prompt, select JetBrains.

    ![Select the JetBrains option](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_authorize_agent_in_chat.png "Select the JetBrains option")

6.  Complete sign-in with your JetBrains Account if required.

1.  Open the ! AI Chat tool window.

2.  Select Codex.

    ![Select the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Select the agent")

    This action opens the AI Chat with Codex selected for interaction.

3.  Send a message to trigger the activation.

4.  Click Install and Continue to accept the [terms of service](https://github.com/openai/codex/?tab=Apache-2.0-1-ov-file#readme) and install the agent.

    ![Accept terms of service and install the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_codex_install_and_accept_tos.png "Accept terms of service and install the agent")

    After the installation, you will be prompted to select the authentication method.

5.  In the prompt, select JetBrains.

    ![Select the JetBrains option](https://resources.jetbrains.com/help/img/idea/2026.1/ai_codex_authorize_agent_in_chat.png "Select the JetBrains option")

6.  Complete sign-in with your JetBrains Account if required.

After completing these steps, you can start using the agent.

To verify that your JetBrains AI subscription is used, navigate to Settings | Tools | AI Assistant | Providers & API keys. The currently active authentication method is displayed in the Agent Authorization section.

> ### tip
>
> Activating an agent using the JetBrains AI subscription also grants access to all AI Assistant features and other integrated agents.

### Activate an agent using an API key (BYOK)

Claude Agent and Codex support activation using an API key (BYOK):

Claude Agent

Codex

1.  Open the ! AI Chat tool window.

2.  Select Claude Agent.

    ![Select the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Select the agent")

    This action opens the AI Chat with Claude Agent selected for interaction.

3.  Send a message to trigger the activation.

4.  Click Install and Continue to accept the [terms of service](https://code.claude.com/docs/en/legal-and-compliance) and install the agent.

    ![Accept terms of service and install the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_install_and_accept_tos.png "Accept terms of service and install the agent")

    After the installation, you will be prompted to select the authentication method.

5.  In the prompt, select API Key.

    ![Select the API Key option](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_authorize_agent_in_chat.png "Select the API Key option")

    The settings page opens.

6.  In the Third-party AI providers section, select Anthropic as the Provider.

    [![AI Assistant Models & API keys settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_byok_selecting_provider.png "AI Assistant Models & API keys settings")](https://resources.jetbrains.com/help/img/idea/2026.1/ai_byok_selecting_provider.png)

7.  Enter your API key in the API Key field and click Test Connection to verify that the connection is established.

8.  Click OK to apply changes.

1.  Open the ! AI Chat tool window.

2.  Select Codex.

    ![Select the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Select the agent")

    This action opens the AI Chat with Codex selected for interaction.

3.  Send a message to trigger the activation.

4.  Click Install and Continue to accept the [terms of service](https://github.com/openai/codex/?tab=Apache-2.0-1-ov-file#readme) and install the agent.

    ![Accept terms of service and install the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_codex_install_and_accept_tos.png "Accept terms of service and install the agent")

    After the installation, you will be prompted to select the authentication method.

5.  In the prompt, select API Key.

    ![Select the API Key option](https://resources.jetbrains.com/help/img/idea/2026.1/ai_codex_authorize_agent_in_chat.png "Select the API Key option")

    The settings page opens.

6.  In the Third-party AI providers section, select OpenAI as the Provider.

    [![AI Assistant Models & API keys settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_byok_selecting_provider.png "AI Assistant Models & API keys settings")](https://resources.jetbrains.com/help/img/idea/2026.1/ai_byok_selecting_provider.png)

7.  Enter your API key in the API Key field and click Test Connection to verify that the connection is established.

8.  Click OK to apply changes.

After completing these steps, you can start using the agent.

To verify that the third-party provider API key is used, navigate to Settings | Tools | AI Assistant | Providers & API keys. The currently active authentication method is displayed in the Agent Authorization section.

### Activate an agent using a provider account (OAuth)

Codex and GitHub Copilot support activation using a provider account:

Codex

GitHub Copilot

1.  Open the ! AI Chat tool window.

2.  Select Codex.

    ![Select the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Select the agent")

    This action opens the AI Chat with Codex selected for interaction.

3.  Send a message to trigger the activation.

4.  Click Install and Continue to accept the [terms of service](https://github.com/openai/codex/?tab=Apache-2.0-1-ov-file#readme) and install the agent.

    ![Accept terms of service and install the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_codex_install_and_accept_tos.png "Accept terms of service and install the agent")

    After the installation, you will be prompted to select the authentication method.

5.  In the prompt, select ChatGPT.

    ![Select the ChatGPT option](https://resources.jetbrains.com/help/img/idea/2026.1/ai_codex_authorize_agent_in_chat.png "Select the ChatGPT option")

    The OpenAI sign-in page opens.

6.  Sign in with your ChatGPT account to authorize the agent.

1.  Open the ! AI Chat tool window.

2.  Select GitHub Copilot.

    ![Sign in to Codex with ChatGPT account](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Sign in to Codex with ChatGPT account")

    This action opens the AI Chat with GitHub Copilot selected for interaction.

3.  Send a message to trigger the activation.

4.  Click Install and Continue to accept the terms of service and install the agent.

    ![Accept terms of service and install the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_copilot_install_and_accept_tos.png "Accept terms of service and install the agent")

    After the installation, you will be prompted to select the authentication method.

5.  In the prompt, select Sign in with GitHub.

    ![Sign in with GitHub](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_copilot_sign_in.png "Sign in with GitHub")

    The GitHub sign-in page opens.

6.  Sign in with your GitHub account to authorize the agent.

After completing these steps, you can start using the agent.

To verify that the provider account is used, navigate to Settings | Tools | AI Assistant | Providers & API keys. The currently active authentication method is displayed in the Agent Authorization section.

> ### note
>
> After activation, you can use the agent, but other AI Assistant features remain unavailable unless you activate JetBrains AI or configure an API key.

### Activate an agent using a provider-specific method

Some agents support provider-specific activation methods. For example, Claude Agent can be activated using [Anthropic Console](https://platform.claude.com/dashboard).

To activate Claude Agent using Anthropic Console:

1.  Open the ! AI Chat tool window.

2.  Select Claude Agent.

    ![Select the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Select the agent")

    This action opens the AI Chat with Claude Agent selected for interaction.

3.  Send a message to trigger the activation.

4.  Click Install and Continue to accept the [terms of service](https://code.claude.com/docs/en/legal-and-compliance) and install the agent.

    ![Accept terms of service and install the agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_install_and_accept_tos.png "Accept terms of service and install the agent")

    After the installation, you will be prompted to select the authentication method.

5.  In the prompt, Anthropic Console.

    ![Select the Anthropic Console option](https://resources.jetbrains.com/help/img/idea/2026.1/ai_claude_agent_authorize_agent_in_chat.png "Select the Anthropic Console option")

6.  Sign in with your Anthropic account to authorize the agent.

After completing these steps, you can start using the agent.

To verify that your Anthropic account is used, navigate to Settings | Tools | AI Assistant | Providers & API keys. The currently active authentication method is displayed in the Agent Authorization section.

## Add ACP agents

AI Assistant supports the [Agent Client Protocol (ACP)](https://agentclientprotocol.com/overview/introduction), allowing you to connect external AI agents. You can install an ACP-compatible agent and use it in the [AI Chat](ai-chat.html#agent-mode) without the JetBrains AI service subscription.

1.  Open the ! AI Chat tool window.

2.  Click Add ACP Agents.

    ![Add ACP Agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Add ACP Agent")

3.  On the Agents page, select the agent that you want to install and click Install.

    ![the Agents settings page](https://resources.jetbrains.com/help/img/idea/2026.1/ai_acp_agents_settings.png "the Agents settings page")

    During installation, the IDE automatically:

    -   Downloads the required agent files.

    -   Downloads and manages a Node.js or Python runtime if required. If a compatible runtime is already available, the IDE reuses it instead.

    -   Prepares the agent for use.

4.  Configure Pass custom MCP servers and Pass IntelliJ MCP server settings if you want the agent to access tools from [configured MCP servers](mcp.html) or the [bundled MCP server](mcp.html#use_ide_as_an_mcp_server).

5.  Click OK to apply changes.

As a result, the selected agent is installed and becomes available for use in AI Chat. To use it, send a message to trigger the activation and complete the authentication if required.

Alternatively, you can manually add custom ACP-compatible agents:

1.  Open the ! AI Chat tool window.

2.  Click the ! button in the upper-right corner of the AI Chat tool window and select Add Custom Agent.

    ![Add a custom agent](https://resources.jetbrains.com/help/img/idea/2026.1/ai_acp_add_custom_agent_no_license.png "Add a custom agent")

3.  In the acp.json file, provide the agent configuration details.

As a result, the custom agent becomes available in AI Chat.

> ### tip
>
> For more information about configuring ACP-compatible agents, refer to [Agent Client Protocol (ACP)](acp.html).

## Revoke the agent's authorization

To use a different authentication method or sign out of the provider account, you need to revoke the agent authorization. To do this:

1.  Navigate to Settings | Tools | AI Assistant | Providers & API keys.

2.  In the Agent Authorization section, click Revoke next to the agent whose authorization you want to revoke.

    ![Revoke authorization](https://resources.jetbrains.com/help/img/idea/2026.1/ai_revoke_agent_authorization.png "Revoke authorization")

3.  Click OK.

> ### note
>
> Existing chats will keep the previous authentication method. For the changes to take effect, create a new chat.
