1.  [Agents](agents.html)

2.  [Agent Client Protocol (ACP)](#0)

# Agent Client Protocol (ACP)

Last modified: 22 July 2026

AI Assistant supports the [Agent Client Protocol (ACP)](https://agentclientprotocol.com/overview/introduction), allowing you to connect external AI agents and use them in the [AI Chat](ai-chat.html#agent-mode). ACP defines a standard communication interface, so any agent that implements the protocol can be added without requiring a custom integration.

ACP-compatible agents can be installed from a curated registry or set up manually. Agents from the registry require no additional setup, while custom ones require configuration.

> ### note
>
> If your organization manages AI centrally through JetBrains IDE Services or JetBrains Central, an administrator can control which agents are available to you and whether you can add your own. As a result, the registry might show a limited set of agents, some agents might be disabled, and you might not be able to add a custom agent.
>
> For details, refer to the [JetBrains IDE Services](https://www.jetbrains.com/help/ide-services/configure-profiles.html#ai_profile) or [JetBrains Central](https://www.jetbrains.com/help/jetbrains-console/eap/ai-policies.html) documentation.

Where to get an agent

As a starting point, you can explore the [registry](/help/ai-assistant/acp.html#install-agent-from-registry) of ACP-compatible agents. It lists a set of curated agents available for use without manual setup.

Alternatively, visit the [official ACP website](https://agentclientprotocol.com/overview/agents) for a list of compatible agents. Linked agent pages provide download instructions and the required configuration details.

Subscription requirements

You can connect and use ACP-compatible agents **without** a JetBrains AI service subscription. For more information, refer to the [Add ACP agents](activate-agents.html#add-acp-agents) section.

Limitations

Currently, ACP-compatible agents are not supported in the Windows Subsystem for Linux ([WSL](https://learn.microsoft.com/en-us/windows/wsl/about)).

## Install an agent from a registry

You can select and install an agent from the registry, which contains a list of curated ACP-compatible agents that can be accessed directly from your IDE.

1.  Open the ! AI Chat tool window.

2.  Click ! to open the chat mode selector and select the Install From ACP Registry option.

    ![Add agents from the registry](https://resources.jetbrains.com/help/img/idea/2026.2/ai_acp_add_agents_from_registry.png "Add agents from the registry")

    Alternatively, navigate to Settings | Tools | AI Assistant | Agents.

3.  On the Agents page, install the agent that you want to use. Additionally, configure the MCP settings as needed.

    ![the Agents settings page](https://resources.jetbrains.com/help/img/idea/2026.2/ai_acp_agents_settings.png "the Agents settings page")

    -   Pass custom MCP servers – enable this setting to expose [configured MCP servers](mcp.html#connect-to-an-mcp-server) to installed agents.

    -   Pass IntelliJ MCP server – enable this setting to expose the [integrated IntelliJ MCP server](mcp.html#use_ide_as_an_mcp_server) to installed agents.

4.  Click OK to apply changes.

During installation, the IDE automatically:

-   Downloads the required agent files.

-   Downloads and manages a Node.js or Python runtime if required. If a compatible runtime is already available, the IDE reuses it instead.

-   Prepares the agent for use.

After installation, the selected agent is ready and becomes available for use in AI Chat.

![Installed agents](https://resources.jetbrains.com/help/img/idea/2026.2/ai_acp_installed_agents.png "Installed agents")

> ### note
>
> Agents from the registry support the authentication flow. When used for the first time, you may be prompted to provide an API key to authorize.
>
> ![Agent authentication flow](https://resources.jetbrains.com/help/img/idea/2026.2/ai_acp_authenticate_in_chat.png "Agent authentication flow")

### Update agents

If a newer version of the agent becomes available, a blue dot appears next to it.

![Update available](https://resources.jetbrains.com/help/img/idea/2026.2/ai_acp_agent_update_available.png "Update available")

You can update the agent from the registry as follows:

1.  Navigate to Settings | Tools | AI Assistant | Agents.

2.  Locate the agent with the newer version available.

3.  Click Update.

    ![Update agents](https://resources.jetbrains.com/help/img/idea/2026.2/ai_update_install_acp_agents.png "Update agents")

4.  Click OK to apply changes.

### Uninstall agents

To uninstall agents:

1.  Navigate to Settings | Tools | AI Assistant | Agents.

2.  Locate the agent that you want to uninstall.

3.  Click Uninstall.

    ![Update agents](https://resources.jetbrains.com/help/img/idea/2026.2/ai_update_install_acp_agents.png "Update agents")

4.  Click OK to apply changes.

## Add a custom agent

If you want to add a custom agent not listed in the registry, you need to provide its configuration in the acp.json file:

1.  Open the ! AI Chat tool window.

2.  Click the ! button in the upper-right corner of the AI Chat tool window and select Add Custom Agent.

    ![Configure ACP Agents](https://resources.jetbrains.com/help/img/idea/2026.2/ai_configure_acp_agents.png "Configure ACP Agents")

    Choosing this option creates the acp.json file at ~/.jetbrains/acp.json and opens it for editing, where you need to provide the configuration details.

3.  Populate the configuration file with the details of your agent. You can add multiple agents if needed. The configuration needs to follow this format:

    ```
    {
        "default_mcp_settings": {},
        "agent_servers": {
            "Example Agent": {
                "command": "/path/to/agent",
                "args": [
                    "acp"
                ],
                "env": {
                    "API_KEY": "your-api-key-here"
                }
            }
        }
    }
    ```

    -   `default_mcp_settings` – defines the default MCP configuration applied to all local agents, unless overridden by agent-specific MCP settings. Has two options:

        -   `use_custom_mcp` – controls whether [user-configured MCP servers](mcp.html#connect-to-an-mcp-server) are exposed to the agent. Set to `true` by default.

        -   `use_idea_mcp` – controls whether the [integrated IntelliJ MCP Server](mcp.html#use_ide_as_an_mcp_server) is exposed to the agent. Set to `false` by default. When this option is set to `true`, you can optionally restrict the tools available from the integrated MCP Server by specifying the `idea_mcp_allowed_tools` key. If not specified, all available tools from the integrated MCP Server are exposed to the agent.

    -   `agent_servers` – top-level object that contains all configured agents. Each key inside this object is the display name of the agent as it appears in AI Chat.

    -   `Example Agent` – display name used to identify the agent.

    -   `command` – path to the agent executable. AI Assistant launches this file as a subprocess.

    -   `args` – array of command-line arguments passed to the agent when it starts.

    -   `env` – collection of environment variables set for the agent process.

        > ### tip
        >
        > Although the example includes an `API_KEY`, most agents do not require one. Instead, you are typically expected to run the agent in a terminal and authenticate there using the provided instructions. The credentials you enter are saved in your user configuration, so the agent will no longer ask for them again the next time it is started.

    > ### note
    >
    > Refer to your agent's documentation for agent-specific configuration details, such as supported arguments or required environment variables.

    > ### tip
    >
    > The IDE can detect ACP-compatible agents already installed on your machine and offers to add them to the configuration. To do this, click Add to configuration.
    >
    > ![Add detected agents to the configuration](https://resources.jetbrains.com/help/img/idea/2026.2/ai_acp_add_detected_agents.png "Add detected agents to the configuration")

Once you complete the configuration, the agent becomes available for selection in [AI Chat](ai-chat.html). Added agents are indicated by the ! icon.

![Added ACP Agents in AI Chat](https://resources.jetbrains.com/help/img/idea/2026.2/ai_added_acp_agents.png "Added ACP Agents in AI Chat")

To use the configured agent, select it in the list, enter a prompt, and send it.

## Collect ACP logs

To collect logs for configured agents, click the ! button in the upper-right corner of the AI Chat tool window and select Get ACP Logs. This will download an archive containing the agent logs.

To collect more detailed logs, including all requests sent to agents and their responses, enable the `llm.agent.extended.logging` key in the Registry:

1.  In the main menu, go to Navigate | Search Everywhere or press Shift twice to open the search window.

2.  Type Registry and press Enter.

3.  In the dialog that opens, find the `llm.agent.extended.logging` key using Ctrl0F and enable it.

4.  Click Close and restart the IDE to apply the changes.

> ### warning
>
> When the `llm.agent.extended.logging` registry key is enabled, collected logs may contain sensitive information, such as chat contents. Review the logs and remove any sensitive data before sharing them.

After the IDE restarts, you can collect logs as usual using the Get ACP Logs action.

## Configuration example

This section shows an example of what an ACP configuration file may look like:

```
{
    "default_mcp_settings": {
        "use_idea_mcp": true,
        "use_custom_mcp": true
    },
    "agent_servers": {
        "openode": {
            "command": "/Users/<username>/.opencode/bin/opencode",
            "args": [
                "acp"
            ]
        },
        "goose": {
            "command": "/Users/<username>/.local/bin/goose",
            "args": [
                "acp"
            ]
        },
        "auggie": {
            "command": "/Users/<username>/.nvm/versions/node/v20.5.0/bin/auggie",
            "args": [
                "--acp"
            ]
        }
    }
}
```

## Troubleshooting

This section contains troubleshooting tips for ACP-compatible agents.

Added agent is not shown in the list

Agents added to the acp.json file should become available in AI Chat right away. If an agent does not appear in the list:

-   Check that the acp.json file is correctly formatted.

-   Restart the IDE.

Agent fails to start

If the custom agent fails to start, try the following:

-   Ensure that all provided parameters have the correct values, as different agents may require different keys or arguments.

-   Use the full path to the agent executable in the `command` parameter.

-   If the agent supports a console mode, try running it manually from a terminal to verify that it works.

If the issue persists, do the following:

1.  [Collect](/help/ai-assistant/acp.html#collect-acp-logs) the logs.

2.  Copy your acp.json configuration (remove any sensitive information before copying).

3.  Take screenshots or record a short video illustrating the issue.

4.  Create an issue in [YouTrack](https://youtrack.jetbrains.com/newIssue?project=LLM&summary=%5BACP%5D&description=**Agen[…]+a+screenshot%2Fscreencast%0A%0A&c=Type+Bug&c=Triaged+Yes).

5.  Attach the screenshots, logs, and the configuration file to the issue.
