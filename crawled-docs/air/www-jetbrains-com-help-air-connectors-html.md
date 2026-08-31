1.  [Cloud tasks](cloud-tasks.html)

2.  [MCP Connectors](#0)

EAP

# MCP Connectors

Last modified: 29 July 2026

Connectors are managed connections to MCP servers that you set up in [the web version of JetBrains Air](https://air.jetbrains.cloud). Connecting a service makes its tools available to your cloud tasks and automations, so the agent can fetch data and perform actions in external systems such as GitHub, Jira, Figma, and others.

The GitHub connector is always enabled for automations, so it shows as connected and the GitHub MCP server is always available to the agent during an automation run. You can't disable it.

> ### note
>
> Connectors are available in cloud environments only if allowed by the organization's AI policy. See [Manage AI access for your organization](set-up.html#setup-org-ai-access).

## Connectors and mcp.json servers

A connector is an easier alternative to configuring an [MCP server in a `mcp.json` file](mcp-servers.html): you don't write a configuration file or pass a token to the run environment. You pick a service and sign in, and JetBrains Air handles the connection.

Both ways of adding MCP servers work together. If a project has connectors and a `mcp.json` file, the agent uses the tools from all of them at the same time. Use connectors for a quick, guided setup, and `mcp.json` when you need a server that isn't available as a connector or want to keep the configuration in the repository.

## Personal and project connectors

You can add connectors at two levels:

-   **Personal** – available in your own cloud tasks and automations. You add them in Settings | Connectors and sign in with your own account.

-   **Project** – available to every cloud task and automation in a [project](projects.html). A project admin adds them on the project page and signs in with a shared account, so all project members use the same connection.

### Add a personal connector

### Connect a service

1.  Open the web version of JetBrains Air at [https://air.jetbrains.cloud](https://air.jetbrains.cloud).

2.  Open Settings and go to Settings | Connectors.

3.  Find the service you want under Available. To filter the list, type in Search connectors.

    [![The Connectors page in Settings, showing a connected GitHub service and a list of available services such as AWS, Browser, and Confluence, each with a Connect button](https://resources.jetbrains.com/help/img/air/connectors-settings-page.png "The Connectors page in Settings, showing a connected GitHub service and a list of available services such as AWS, Browser, and Confluence, each with a Connect button")](https://resources.jetbrains.com/help/img/air/connectors-settings-page.png)

4.  Click Connect and follow the provider's authorization flow to sign in and grant access.

5.  When you finish, the service moves to the Connected list. You can then select the connector in your cloud tasks and, through Select MCP connectors, in your [automations](create-automation.html#automation_connectors).

### Add a connector to a project

Project admins add connectors on the project page. A project connector is available to every cloud task and automation in the project, so you set it up once instead of each member configuring the same MCP server.

For details, see [Projects | Add connectors to a project](projects.html#add_project_connector_procedure).
