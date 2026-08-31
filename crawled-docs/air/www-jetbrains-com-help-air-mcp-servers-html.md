1.  [Define tasks](define-tasks.html)

2.  [MCP servers](#0)

# MCP servers

Last modified: 29 July 2026

MCP servers extend agents with additional tools. They are commonly used in agentic workflows to fetch data and perform actions in external systems. For example, you can paste a YouTrack issue link into a task and let the agent fetch the issue details through a YouTrack MCP server.

MCP servers are configured with an `msp.json` file.

> ### note
>
> In [the web version of JetBrains Air](https://air.jetbrains.cloud), you can also connect to MCP servers through [connectors](connectors.html) without writing a configuration file. MCP servers added through connectors and through `mcp.json` work together in cloud tasks and automations.

### Add an MCP server

1.  Open Settings and go to AI | MCP Servers.

2.  Make sure Enable MCP support is turned on.

3.  Click Add Global MCP Server to add a server available in all your projects. Use the drop-down menu to choose Add Local MCP Server or Add Workspace MCP Server.

    -   **Global** – available in all projects on your machine. Use it for personal integrations you use everywhere.

    -   **Local** – available only in the current project and stored along with other JetBrains Air settings in `.air/mcp.json` in the project root. Use it for project-specific configuration.

    -   **Workspace** – uses the standard `.mcp.json` file in the project root. Use it when your repository already contains MCP configuration, and you want JetBrains Air to reuse it.

        If you want JetBrains Air to use `.mcp.json` from the repository, make sure Launch workspace MCP servers is enabled.

4.  Paste the JSON configuration and save it. For example:

    ```
    {
        "mcpServers": {
            "youtrack": {
                "url": "https://youtrack.example.com/mcp",
                "headers": {
                    "Authorization": "Bearer token-goes-here"
                }
            }
        }
    }
    ```

    > ### note
    >
    > For bearer token authentication, provide the token directly in `mcp.json`. Tokens passed through environment variables aren't supported.

5.  JetBrains Air then tries to connect to the server. What happens next depends on the authentication the server requires:

    -   **No authentication or bearer token** – JetBrains Air connects immediately. When the connection succeeds, the server appears in the Added list with a green status indicator and the number of discovered tools.

    -   **OAuth** – the server appears in the Added list with a Connect button. Click it to open the provider's authorization page and approve the connection.

    ![An MCP server in the Added list](https://resources.jetbrains.com/help/img/air/air-connected-mcp.png "An MCP server in the Added list")
