# Model Context Protocol (MCP)

Last modified: 14 August 2026

AI Assistant can interact with external tools and data sources through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction). By connecting to MCP servers, AI Assistant gains access to a range of tools that significantly extend its capabilities.

> ### note
>
> If your organization manages AI centrally through JetBrains IDE Services or JetBrains Central, an administrator can preconfigure the MCP servers available to you and control whether you can add your own. As a result, some MCP servers might already be set up, and you might not be able to connect additional servers.
>
> For details, refer to the [JetBrains IDE Services](https://www.jetbrains.com/help/ide-services/configure-profiles.html#ai_profile) or [JetBrains Central](https://www.jetbrains.com/help/jetbrains-console/eap/ai-policies.html) documentation.

Supported transport mechanisms

AI Assistant supports the following [transport mechanisms](https://modelcontextprotocol.io/docs/concepts/transports#built-in-transport-types) for connecting to MCP servers:

-   **Standard input/output (STDIO)** – AI Assistant launches the MCP server as a subprocess and exchanges data through standard input and output. This transport is typically used for local MCP servers.

-   **Streamable HTTP** – AI Assistant connects to an MCP server over HTTP using the Streamable HTTP transport defined in the Model Context Protocol specification. This transport allows communication with local or remote MCP servers through a single HTTP endpoint and supports both request/response and streaming interactions.

> ### note
>
> AI Assistant also supports the **SSE** transport mechanism for legacy MCP servers.

Where to get an MCP server

There are many MCP-compatible servers available, depending on your use case and setup. As a starting point, you can explore the reference servers provided in the [official MCP repository](https://github.com/modelcontextprotocol/servers), which includes examples, usage instructions, and configuration details.

What is needed to connect to an MCP server

To connect AI Assistant to an MCP server, you need a JSON configuration that defines the command and arguments for starting the server. The exact configuration depends on the specific MCP server. In most cases, the server's developers will provide a recommended configuration you can get and use.

## Connect to an MCP server

To connect to an MCP server:

1.  Go to Settings | Tools | AI Assistant | Model Context Protocol (MCP).

    Alternatively, you can open the screen with the MCP settings by typing `/` in the chat and selecting the Add Command option.

    ![Add Command](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_add_command.png "Add Command")

2.  On the Model Context Protocol (MCP) settings page, click ! Add to add a new MCP server configuration.

    > ### note
    >
    > Alternatively, if you use [Claude Desktop](https://claude.ai/download) and already have an MCP server configuration, you can reuse it. To do this, click ! Import from Claude. All configured MCP servers will be added to the table.
    >
    > ![Import from Claude](https://resources.jetbrains.com/help/img/idea/2026.2/ai_import_from_claude.png "Import from Claude")

3.  In the New MCP Server dialog, select how you want to connect to the MCP server and provide a JSON configuration:

    STDIO

    HTTP

    ![Connect to the server over STDIO](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_parameters_stdio.png "Connect to the server over STDIO")

    -   JSON configuration – provide a JSON snippet with the parameters required to start the MCP server. The configuration needs to follow this format:

        ```
        {
            "mcpServers": {
                "yourServerName": {
                    "command": "path-or-command-to-start-server",
                    "args": [
                        "optional-arguments-passed-to-server"
                    ]
                }
            }
        }
        ```

    -   Working directory – specify the path to the folder from which the server is launched. This allows you to use relative paths in arguments instead of absolute paths.

    -   Server level – specify whether the configured server should be available globally or only in the current project.

    ![Connect to the server over HTTP](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_parameters_http.png "Connect to the server over HTTP")

    -   JSON configuration – provide a JSON snippet with the parameters required to start the MCP server. The configuration needs to follow this format:

        ```
        {
            "mcpServers": {
                "yourServerName": {
                    "url": "https://example.com/mcp"
                }
            }
        }
        ```

    -   Server level – specify whether the configured server should be available globally or only in the current project.

    > ### tip
    >
    > For examples of JSON configurations, refer to [JSON configuration examples](/help/ai-assistant/mcp.html#json-configuration-examples).

4.  Click OK. The MCP server will appear in the list.

5.  Click Apply. This will start the configured server and establish a connection to it. You can monitor the status of your connection in the Status column.

> ### tip
>
> If you want to automatically start newly added MCP servers or servers whose configuration was changed, enable the Automatically enable new and changed MCP servers setting.

As a result, the tools provided by the MCP server become available to AI Assistant. It can trigger them automatically when processing your request, or you can invoke them manually by typing the appropriate `/` command in the chat:

![List of commands available on the MCP server](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_list_of_commands.png "List of commands available on the MCP server")

### Review available tools

Once the connection to the MCP server is successfully established, you can review the list of available tools by clicking the icon in the Status column.

![List of available tools](https://resources.jetbrains.com/help/img/idea/2026.2/ai_configured_mcp_server.png "List of available tools")

### Change the server level

If you want to change the level at which the MCP server is available, click the ! buton in the Level column, and select whether the setup should be available globally or only in the current project.

![Change the MCP server level](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_change_level.png "Change the MCP server level")

### Stop the MCP server

To stop the MCP server:

1.  Deselect the checkbox for the MCP server you want to stop.

    ![Stop MCP server](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_stop_server.png "Stop MCP server")

2.  Click Apply.

### Reconnect to the MCP server

To reconnect to the MCP server:

1.  Select the server you want to reconnect to.

2.  Click the ! Reconnect button.

### Get MCP server logs

For debugging purposes, you might want to review the logs of the spawned MCP server. To do this:

1.  In the main menu, go to Help and select Show Log in Explorer on Windows or Show Log in Finder on macOS. This opens the logs directory.

2.  Locate the mcp folder and open it. This folder contains the logs for each configured MCP server.

### JSON configuration examples

This section provides example configurations for connecting AI Assistant to an MCP server, depending on how the server is hosted. It covers locally installed servers, NPX-based setups, Docker-based environments, and remote servers.

Local installation

If the MCP server is installed on your machine, you can connect to it by running the server executable along with any required arguments. A template for such a configuration would look like this:

```
{
    "mcpServers": {
        "yourServerName": {
            "command": "command-to-run-server",
            "args": [
                "path-to-server-executable-or-script",
                "optional-arguments-for-server"
            ]
        }
    }
}
```

-   The `command` is the executable or script that launches the MCP server. This could be `node`, a direct path to an executable file, or another command appropriate for launching the server.

-   The `args` list contains arguments passed to the server on startup, such as the path to the server script or configuration options.

For example, if you use the [Filesystem MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem), your configuration may look like this:

```
{
    "mcpServers": {
        "filesystem": {
            "command": "node",
            "args": [
                "/Users/JohnDoe/IdeaProjects/servers/src/filesystem/dist/index.js",
                "/Users/JohnDoe/Desktop"
            ]
        }
    }
}
```

Here, the `node` command runs the server script. The first argument specifies the path to the server script, and the second argument tells the server which directory it is allowed to operate in.

Using NPX

If the MCP server is not installed locally, you can use `npx` to download and run it on demand. A template for such a configuration would look like this:

```
{
    "mcpServers": {
        "yourServerName": {
            "command": "npx",
            "args": [
                "-y",
                "npm-package-name",
                "optional-arguments-for-server"
            ]
        }
    }
}
```

-   The `command` is set to `npx`, which runs a package from the npm registry without installing it globally.

-   The `args` list includes:

    -   `-y` – to automatically confirm prompts that may appear when running the package for the first time,

    -   the name of the npm package that provides the MCP server,

    -   any additional arguments passed to the server, such as file paths or configuration options.

For example, if you use the [Filesystem MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem), your configuration may look like this:

```
{
    "mcpServers": {
        "filesystem": {
            "command": "npx",
            "args": [
                "-y",
                "@modelcontextprotocol/server-filesystem",
                "/Users/JohnDoe/Desktop"
            ]
        }
    }
}
```

Here, the `npx` command runs the `@modelcontextprotocol/server-filesystem` package. The path provided in the arguments tells the server which directory it is allowed to operate in.

Using Docker

You can run the MCP server in an isolated environment using Docker. This starts the server inside a container and mounts local folders into it so the server can access them. A template for such a configuration would look like this:

```
{
    "mcpServers": {
        "yourServerName": {
            "command": "docker",
            "args": [
                "run",
                "-i",
                "--rm",
                "--mount", "type=bind,src=/local/path,dst=/container/path",
                "docker-image-name",
                "/container/path"
            ]
        }
    }
}
```

-   The `command` is set to `docker`, which starts the MCP server inside a container based on the specified Docker image.

-   The `args` list includes:

    -   `run` – to start a new container,

    -   `-i` – to keep the container interactive so the IDE can communicate with it,

    -   `--rm` – to automatically remove the container after use,

    -   one or more `--mount` options – to bind local folders (`src`) to container paths (`dst`),

    -   the Docker image name that provides the MCP server,

    -   the final argument that tells the server the directory where it is allowed to operate inside the container.

For example, if you use the [Filesystem MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem), your configuration may look like this:

```
{
    "mcpServers": {
        "filesystem": {
            "command": "docker",
            "args": [
                "run",
                "-i",
                "--rm",
                "--mount", "type=bind,src=/Users/JohnDoe/Desktop,dst=/projects/Desktop",
                "--mount", "type=bind,src=/Users/JohnDoe/Documents,dst=/projects/Documents,ro",
                "mcp/filesystem",
                "/projects"
            ]
        }
    }
}
```

Here, the `docker` command runs the `mcp/filesystem` image. The local folders /Users/JohnDoe/Desktop and /Users/JohnDoe/Documents are mounted into the container, and the /projects argument tells the server where to operate inside the container.

Remote servers

If the MCP server is hosted remotely and accessible over HTTP, you can connect to it by specifying its URL in the configuration. A template for such a configuration would look like this:

```
{
    "mcpServers": {
        "yourServerName": {
            "url": "http://remote-server-address/mcp"
        }
    }
}
```

-   The `url` parameter represents the HTTP endpoint of the MCP server. This should point to the base URL that implements the Streamable HTTP transport for the server.

> ### note
>
> AI Assistant also supports the **SSE** transport mechanism. In this case, the configuration needs to follow this format:
>
> ```
> {
>     "mcpServers": {
>         "yourServerName": {
>             "url": "http://remote-server-address/sse"
>         }
>     }
> }
> ```

For example, to connect to a remote MCP server, your configuration may look like this:

```
{
    "mcpServers": {
        "microsoftdocs": {
            "url": "https://learn.microsoft.com/api/mcp"
        }
    }
}
```

Here, AI Assistant connects to the MCP server over HTTP using the Streamable HTTP transport. The server is managed remotely, and AI Assistant communicates directly with it through the specified URL.

## Use your IDE as an MCP server

Starting with version 2025.2, JetBrains IDEs come with an integrated [MCP Server](https://plugins.jetbrains.com/plugin/26071-mcp-server), allowing external clients such as Claude Code, Codex, VS Code, and others to access tools provided by the IDE. This gives users the ability to control and interact with JetBrains IDEs without leaving their application of choice.

> ### tip
>
> You can find more information about the Model Context Protocol (MCP) [here](https://modelcontextprotocol.io/introduction).

### Enable the MCP Server plugin

This functionality relies on the MCP Server plugin, which is bundled and enabled in JetBrains IDEs by default. If the relevant features are not available, make sure that you did not disable the plugin.

1.  Press CtrlAlt0S to open settings and then select Plugins.

2.  Open the Installed tab, find the MCP Server plugin, and select the checkbox next to the plugin name.

### Enable MCP Server

To enable the MCP server, do the following:

1.  Go to Settings | Tools | MCP Server.

2.  Select the Enable MCP Server checkbox.

    ![Select the Enable MCP Server checkbox](https://resources.jetbrains.com/help/img/idea/2026.2/aia_enabling_mcp_server.png "Select the Enable MCP Server checkbox")

3.  In the Enable MCP Server? dialog, review what access third-party applications will get to the projects opened in the IDE, and click Enable to continue.

4.  Click Apply.

Once the MCP server is enabled, you can proceed to configure external clients.

### External client setup

For detected external clients like Junie, VS Code, Claude Code, Codex, Air, and GitHub Copilot CLI, configuration can be performed automatically. Setting up a client means adding the address of the IDE MCP server to that client's configuration file.

To do this:

1.  Go to Settings | Tools | MCP Server.

2.  In the Clients Auto-Configuration section, click Auto-Configure for each client you want to set up for use with the MCP server. This updates the client's configuration file automatically. The set of configured transports depends on the client.

    ![MCP Server settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_settings.png "MCP Server settings")

    To configure a specific transport yourself, click ! next to Auto-Configure and select the required option from the list.

    ![Configuration options](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_config_options.png "Configuration options")

    > ### tip
    >
    > The same menu provides two more options:
    >
    > -   Open Client Settings File opens the client's configuration file in the editor.
    >
    > -   Copy Config copies the configuration to the clipboard so that you can apply it manually.
    >

3.  Restart your client for the configuration to take effect.

### Project-level client setup

Some clients also read a configuration file from the project's working directory. For these clients, the IDE can write the connection settings directly to the configuration file in the currently opened project, so the MCP server is available only while you work on that project.

Use this option if you work with several projects and do not want the MCP server registered for every client session.

1.  Go to Settings | Tools | MCP Server.

2.  In the Project Clients Auto-Configuration section, click Auto-Configure for each client you want to set up. This updates the client's project-level configuration file automatically.

    ![Autoconfigure client's project-level configuration](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_project_level_setup.png "Autoconfigure client's project-level configuration")

    If you want to configure a specific transport mechanism, click ! next to Auto-Configure and select the required option from the list.

3.  Restart your client for the configuration to take effect.

### Manual client setup

If the client you want to connect is not on the list, configure it manually.

1.  In the Manual Client Configuration section, click either Copy SSE Config, Copy Stdio Config, or Copy HTTP Stream Config depending on the connection type.

    ![MCP Server manual configuration](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_manual_config.png "MCP Server manual configuration")

2.  Paste the copied configuration into your client's settings or configuration file.

3.  Restart your client for the configuration to take effect.

### Execute actions without confirmation

The MCP server allows connected external clients to execute terminal commands or run configurations in the IDE without prompting for user confirmation each time.

To enable this mode:

1.  Go to Settings | Tools | MCP Server.

2.  In the Command execution section, enable the Run shell commands or run configurations without confirmation (brave mode) setting.

3.  Click Apply.

### Show setup suggestions in terminal sessions

When Codex or Claude starts in a terminal session without a matching MCP server setup, the IDE can show a banner that suggests configuring the connection.

![A suggestion to update the MCP Server configuration in terminal](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_terminal_suggestions.png "A suggestion to update the MCP Server configuration in terminal")

To control this behavior:

1.  Go to Settings | Tools | MCP Server.

2.  In the Terminal Sessions section, select or clear the Show setup suggestions for Codex and Claude terminal sessions checkbox.

3.  Click Apply.

### Supported tools

The MCP Server exposes a set of tools that allow external clients to interact with your IDE and project – for example, to analyze code, modify files, run configurations, or execute terminal commands.

You can view and manage the full list of available tools in Settings | Tools | MCP Server | Exposed Tools. For each tool, select or clear the Enabled checkbox to control whether the tool is exposed to external clients.

[![The Exposed Tools settings page](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_exposed_tools.png "The Exposed Tools settings page")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_mcp_server_exposed_tools.png)

You can also select the Router-only checkbox for a tool. Router-only tools are hidden from the direct MCP tool list and remain available only through the dedicated router [tool](/help/ai-assistant/mcp.html#universal-toolset). This keeps unnecessary tool descriptions out of the tool list and saves context. Use the Enable router-only mode for setting to specify when router-only mode applies, for example, for All agents, or ACP agents only.

> ### tip
>
> When a tool is available only through the router, describe it in skills or other agent documentation so that agents know when to use it.

Below you can find the list of tools provided by the MCP server.

#### Analysis tools

analyze\_calls

Builds the IDE Call Hierarchy tree for a method, function, constructor, or supported type target. Use it to see who calls a symbol (`INCOMING_CALLS`) or what the symbol calls (`OUTGOING_CALLS`).

Prefer this tool over usage search, text search, or regex search when evaluating dependencies by actual calls. It uses IDE call hierarchy data, so it provides more precise call relationships with less noise and fewer follow-up calls than primitive searches.

Pass `symbolFqn` as a fully qualified name, for example `com.example.Service.run`. If the name is ambiguous, the tool returns exact signatures; pass one of them back as `symbolFqn`. If you only know a short name or fragment, use `search_symbol` first to find the target.

The result is an expandable text tree. Each node includes `filePath` and `treePath`; `filePath` is project-relative when possible. Pass `treePath` back to render the subtree. Use `childOffset` to continue after a truncated _… and n more_ line. `depth`, `maxChildren`, and `maxNodes` bound the rendered tree. Symbols can come from project sources, source jars, or decompiled binary jar dependencies when the IDE can resolve them.

**Parameters:**

-   `symbolFqn` (required): Plain fully qualified symbol name, or an exact signature returned by an ambiguity error or copied from a rendered child node. If you only know a short name or fragment, use `search_symbol` first and pass the best fully qualified callable name here. Examples: `com.example.Service.run`, `com.example.Service.run(String)`, or `org.assertj.core.api.Assertions.assertThat(String)`. Do not pass a file path, line, column, or a separate target signature.

-   `analysisKind` (required): Call analysis direction. Use `INCOMING_CALLS` to show callers of `symbolFqn`, or `OUTGOING_CALLS` to show symbols called from `symbolFqn`.

-   `depth`: Maximum number of call levels to render below the requested subtree root. Defaults to 5. Use 0 to render only the subtree root.

-   `maxChildren`: Maximum number of direct children rendered for each node. Defaults to 50.

-   `maxNodes`: Maximum total number of rendered call nodes. Defaults to 1000.

-   `treePath`: Optional path to a subtree root, copied exactly from a previous `analyze_calls` result. Null or omitted means the root path `[]`. Each component is an exact signature, not a display name.

-   `childOffset`: Offset for paging direct children of the node addressed by `treePath`. Defaults to 0.

-   `timeout`: Timeout in milliseconds.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

build\_project

Triggers building of the project or specified files, waits for completion, and returns build errors. Use this tool to build the project or compile files and get detailed information about compilation errors and warnings.

You have to use this tool after performing edits to validate if the edits are valid.

**Parameters:**

-   `rebuild`: Whether to perform a full rebuild of the project. Defaults to false. Effective only when `filesToRebuild` is not specified.

-   `filesToRebuild`: If specified, only compile files with the specified paths. Paths are relative to the project root.

-   `timeout`: Timeout in milliseconds.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

get\_file\_problems

Analyzes the specified file for errors and warnings using IntelliJ inspections. Use this tool to identify coding issues, syntax errors, and other problems in a specific file.

Returns a list of problems, including severity, description, and location information.

> ### note
>
> Notes
>
> -   Only files within the project directory can be analyzed.
>
> -   Line and column numbers are 1-based.
>

**Parameters:**

-   `filePath`: Path relative to the project root.

-   `errorsOnly`: Whether to include only errors or both errors and warnings.

-   `timeout`: Timeout in milliseconds.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

get\_project\_dependencies

Returns a list of all dependencies defined in the project. Provides structured information about library names.

**Parameters:**

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

get\_project\_modules

Returns a list of all modules in the project with their types. Provides structured information about each module, including its name and type.

**Parameters:**

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

lint\_files

Analyzes the specified files for errors and warnings using IntelliJ inspections. Use this tool to lint several files after editing them. Returns per-file problems with severity, description, and location information.

Batch responses may include file entries with `timedOut: true` and empty `problems` when individual files exceed the available budget. File entries with a `notAnalyzedReason` indicate files that could not be analyzed, for example files outside project content roots, excluded files, or unsupported file types. A top-level `more: true` means the batch is incomplete.

> ### note
>
> Notes
>
> -   Only files within the project directory are analyzed.
>
> -   Line and column numbers are 1-based.
>

**Parameters:**

-   `files` (required): List of project-relative files to analyze. Duplicate paths are ignored after normalization.

-   `min_severity`: Minimum severity to include: `warning` or `error`. Defaults to `warning`.

-   `timeout`: Timeout in milliseconds.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Code Insight tools

get\_symbol\_info

Retrieves information about the symbol at the specified position in the specified file. Provides the same information as IntelliJ IDEA's Quick Documentation feature. The information may include the symbol's name, signature, type, documentation, and other details, depending on the programming language.

If the position references a symbol, the tool will return a code snippet with the symbol's declaration, if available. Use this tool to understand a symbol's declaration, semantics, and location.

**Parameters:**

-   `filePath`: Path relative to the project root.

-   `line`: 1-based line number.

-   `column`: 1-based column number.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

Specific IDEs

#### Database-specific tools

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin

To guarantee strictly read-only access for an AI agent, use a database user with properly restricted (read-only) privileges and configure the data source to use that user.

cancel\_sql\_query

Cancel a running query using its unique ID.

**Parameters:**

-   `sessionId`: Query session ID.

create\_database\_connection

Creates a new database connection (data source) by name, DBMS (`dbms`), JDBC URL (`url`), and a flag to check the connection (`needToCheckDs`). All parameters are required. Returns connection diagnostic information.

**Parameters:**

-   `name` (required): Unique name of the database connection.

-   `dbms`: Name of the database management system (DBMS).

-   `url`: Fully formed JDBC URL of the database connection, for example `jdbc:postgresql://<host>:<port>/<database>`.

-   `needToCheckDs`: Whether to test the connection right after the data source is created or edited. Set to `false` when configuring multiple connections in a batch — the per-connection probe is expensive, and `test_database_connection` can be called explicitly for the connections that matter.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

edit\_database\_connection

Edits an existing database connection (data source) identified by `connectionId`. Updates the connection's DBMS driver and JDBC URL; the connection `name` is preserved. Returns connection diagnostic information.

> ### note
>
> Do not use this tool for DDL data sources, as they have no underlying DBMS connection.

**Parameters:**

-   `connectionId`: Unique connection ID.

-   `dbms`: Name of the database management system (DBMS).

-   `url`: Fully formed JDBC URL of the database connection, for example `jdbc:postgresql://<host>:<port>/<database>`.

-   `needToCheckDs`: Whether to test the connection right after the data source is created or edited. Set to `false` when configuring multiple connections in a batch — the per-connection probe is expensive, and `test_database_connection` can be called explicitly for the connections that matter.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

execute\_sql\_query

Execute a SQL query against the given database connection.

The tool reports execution status: success or error. For errors, it also provides an error description.

If the query returns data, it is appended to the tool response in CSV format.

**Parameters:**

-   `connectionId`: Unique connection ID.

-   `queryText`: SQL query to be executed.

fetch\_query\_result

Fetches rows from an already executed query by its ID, starting at the given row offset. Returns the same shape as `execute_sql_query`: the `resultSetId` and the rendered result in CSV format.

Use this tool to paginate over a `resultSetId` previously returned by `execute_sql_query` or `preview_table_data`.

**Parameters:**

-   `resultSetId` (required): The opaque result-set ID returned by a previous `execute_sql_query` or `preview_table_data` call.

-   `offset` (required): Row offset to start fetching from. Defaults to 0.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

get\_database\_object\_description

Retrieves the structure of a database object (columns, types, keys, indexes) within a particular schema as a hierarchical text representation.

In case of ambiguity returns definitions of all applicable objects.

**Parameters:**

-   `connectionId`: Unique connection ID.

-   `databaseName`: Name of the database the schema belongs to. Can be empty if the DBMS has no databases but only schemas.

-   `schemaName`: Name of the schema.

-   `kind`: Set this parameter to a particular object kind code to list only objects of that kind. Set it to null to retrieve all objects in the schema.

-   `objectName`: Object name of the specified kind (e.g., table or view name). May not be empty.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

introspect\_schema

Introspects a database schema, loading its metadata (tables, columns, and indexes) into the local model. Use this when a schema's `isIntrospected` flag is false and you need to investigate the schema's structure, or to refresh stale metadata. Returns the schema identifier with the updated introspection status.

**Parameters:**

-   `connectionId`: Unique connection ID.

-   `databaseName`: Name of the database the schema belongs to. Can be empty if the DBMS has no databases but only schemas.

-   `schemaName`: Name of the schema.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

list\_database\_connections

Retrieves a list of configured database connections or data sources in the project. For each connection returns its unique ID, name, DBMS, and driver name.

list\_database\_schemas

Retrieves a list of database schemas in the specified database connection.

For each schema, the tool returns the schema's own name as well as the database name (empty if not applicable).

**Parameters:**

-   `connectionId`: Unique connection ID.

-   `selectedOnly`: True if only the schemas selected in the database tree should be listed; false if all schemas should be listed.

list\_recent\_sql\_queries

This feature is not available in free subscription plans.

Retrieves a list of recent, including currently running, queries for the given database connection.

For each query returns:

-   Unique ID of a query session.

-   Time spent on running the query (in milliseconds).

-   The current state of the query. For example, running, cancelling, finished, and so on.

-   Completion status of the query. For example, success, finished with error, cancelled, and so on.

-   Text of the query.

**Parameters:**

-   `connectionId`: Unique connection ID.

list\_schema\_object\_kinds

Retrieves a list of supported schema object kinds for the given database connection. For each object kind, returns the object kind unique code and human-readable name.

**Parameters:**

-   `connectionId`: Unique connection ID.

list\_schema\_objects

Retrieves a list of database objects within the given schema. For each object, returns the object name within the schema and its kind.

**Parameters:**

-   `connectionId`: Unique connection ID.

-   `schemaName`: Name of the schema.

-   `databaseName`: Name of the database the schema belongs to. Can be empty if the DBMS has no databases but only schemas.

-   `kind`: Set this parameter to a particular object kind code to list only objects of that kind. Set it to null to retrieve all objects in the schema.

preview\_table\_data

Returns preview data of the table, view, materialized view, or other table-like object using a given database connection.

The tool returns table content in CSV format.

**Parameters:**

-   `connectionId`: Unique connection ID.

-   `schemaName`: Name of the schema.

-   `databaseName`: Name of the database the schema belongs to. Can be empty if the DBMS has no databases but only schemas.

-   `tableName`: Name of the table.

-   `maxRowCount`: Maximum number of rows to return. Default is `100`.

test\_database\_connection

Returns connection diagnostic info:

-   Flag indicating if the connection is problematic: yes, no, or unknown.

-   Detailed information about the database connection such as DBMS type, version, and JDBC driver.

-   Summary of the connection attempt result. In case of a failure, contains a DBMS-provided error description.

**Parameters:**

-   `id`: Unique connection ID.

Specific IDEs

#### Debugger tools

**Available in:** IntelliJ IDEA Ultimate, CLion, RubyMine

> ### note
>
> These tools are provided by the **Debugger MCP toolset** plugin. This plugin comes bundled in multiple IDEs by default. If the toolset is not available, make sure the plugin is enabled.

These tools give an external client control over the IDE's debugger: it can set, list, and remove breakpoints, start a debug session and step through it, and inspect the call stack, threads, and variable values at runtime.

To improve how external clients use the IDE's debugger tools, you can install a specific skill for them. This skill comes bundled with the IDE and guides an external client on when to apply the debugger tools.

To install the skill for an external client:

1.  Go to Settings | Tools | AI Assistant | Skills.

2.  Navigate to the Bundled skills section and locate the corresponding skill. It is enabled by default, but is available only to the agents inside the IDE.

    ![The ij-debugger skill](https://resources.jetbrains.com/help/img/idea/2026.2/ai_bundled_skills_debugger.png "The ij-debugger skill")

3.  To use the skill in Claude Code or Codex outside the IDE, you need to install it for those clients explicitly. To do this, click ! and select Claude Agent (Global) or Codex (Global), depending on which client you want to use.

    ![Install the ij-debugger skill for an external client](https://resources.jetbrains.com/help/img/idea/2026.2/ai_installing_debugger_skill.png "Install the ij-debugger skill for an external client")

Depending on the target you select, the skill is installed into the following folders:

-   **Claude Code**:

    Windows

    macOS

    Linux

    %USERPROFILE%\\.claude\\skills\\ij-debugger\\

    ~/.claude/skills/ij-debugger/

    ~/.claude/skills/ij-debugger/

-   **Codex**:

    Windows

    macOS

    Linux

    %USERPROFILE%\\.codex\\skills\\ij-debugger\\

    ~/.codex/skills/ij-debugger/

    ~/.codex/skills/ij-debugger/

To invoke the skill in the external client, use `/ij-debugger`, or let it activate automatically when relevant.

> ### tip
>
> For more information about installing and managing skills, refer to [Skills](agent-skills.html#install-skills).
>
> For detailed instructions on how to use this toolset, refer to the documentation for the relevant IDE:
>
> -   ![IntelliJ IDEA](https://resources.jetbrains.com/help/img/idea/2026.2/IntelliJ_IDEA_icon.png "IntelliJ IDEA") [IntelliJ IDEA](https://www.jetbrains.com/help/idea/agentic-debugging.html)
>
> -   ![CLion](https://resources.jetbrains.com/help/img/idea/2026.2/CLion_icon.png "CLion") [CLion](https://www.jetbrains.com/help/clion/agentic-debugging.html)
>
> -   ![RubyMine](https://resources.jetbrains.com/help/img/idea/2026.2/RubyMine_icon.png "RubyMine") [RubyMine](https://www.jetbrains.com/help/ruby/use-agentic-debugging.html)
>

xdebug\_control\_session

Controls the execution of a debug session. Use this tool to step through code, resume execution, pause, or stop the debug session.

Preconditions:

-   A debug session must exist.

-   `STEP_*` and `RESUME` require a suspended session.

Actions:

-   **STEP\_INTO**: Step into the next method call

-   **STEP\_OVER**: Step over the current line

-   **STEP\_OUT**: Step out of the current method

-   **RESUME**: Resume program execution until the next breakpoint

-   **PAUSE**: Pause program execution

-   **STOP**: Stop the debug session

-   **WAIT\_FOR\_PAUSE**: Wait until the session pauses (breakpoint hit or paused manually)

-   **DRAIN\_EVENTS**: Drain tracepoint outputs for the session (breakpoint errors are drained for all actions)

Important notes:

-   If the program is running, use **WAIT\_FOR\_PAUSE** or **PAUSE** before `STEP_*`/`RESUME`.

-   Use a current `sessionId` from `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session stops, times out, or disappears, refresh the session list before the next session-scoped call.

-   **RESUME** does NOT set breakpoints. If there are no enabled breakpoints (or none will be hit next), the program may run to completion and the session may stop without pausing.

-   After **RESUME**, call **WAIT\_FOR\_PAUSE** to confirm the next suspension. If **WAIT\_FOR\_PAUSE** times out, consider **PAUSE** and re-check breakpoints.

-   **DRAIN\_EVENTS** also requires an existing session; do not reuse a stale `sessionId` after the session has terminated.

Next call:

-   After **RESUME**, call `xdebug_control_session(action=WAIT_FOR_PAUSE)`.

-   After a paused result, call `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)`/`[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)`/`[xdebug_evaluate_expression](/help/ai-assistant/mcp.html#xdebug_evaluate_expression)`.

Status values in the result:

-   **running**: Program is executing

-   **paused**: Execution is suspended (breakpoint, step, or manual pause); paused results also include `frameValues`, a current-frame snapshot in `xdebug_get_frame_values(depth=0)` format when available

-   **stopped**: Debug session has terminated

-   `breakpointErrorsTail` is returned for any action

-   `tracepointOutputsTail` is returned only for **DRAIN\_EVENTS**

Event support scope:

-   Breakpoint error and tracepoint output events are currently reported only by JVM-based debuggers (Java, Kotlin, etc.).

-   On other debugger backends these event tails can be empty even when breakpoints/logging are configured.

**Parameters:**

-   `sessionId`: Debug session ID. Use the current ID returned by `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session has stopped, timed out, or disappeared, refresh the session list before reusing an old ID. Format: uses session name as ID by default; if multiple sessions share the same name, ID is `<sessionName>#<executionId>`. If null and exactly one active session exists, it is selected automatically. If multiple sessions are active and `sessionId` is omitted, the call fails. Default: null.

-   `action`: Action to perform: **STEP\_INTO**, **STEP\_OVER**, **STEP\_OUT**, **RESUME**, **PAUSE**, **STOP**, **WAIT\_FOR\_PAUSE**, **DRAIN\_EVENTS**. Event draining is currently populated only by JVM-based debuggers (Java, Kotlin, etc.).

-   `timeout`: Timeout in milliseconds to wait for action completion. Guidance: **STEP\_\***/**PAUSE** usually 5000-15000; **WAIT\_FOR\_PAUSE** usually 30000-120000 depending on workload and breakpoints. Default: 30000.

-   `eventsLimit`: Maximum number of latest events to drain per event list. For **DRAIN\_EVENTS** this limit is applied independently to `breakpointErrorsTail` and `tracepointOutputsTail`. Default: 100.

-   `clearEventsAfterRead`: Compatibility flag. Returned events are always removed from internal buffers, regardless of this value.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_evaluate\_expression

Evaluates an expression in the context of the current stack frame. Use this tool to compute values, call methods, or inspect expressions during debugging.

Preconditions:

-   Session must be suspended.

-   Evaluation must be supported for the selected frame/language.

-   `expression` must be a valid expression in the language of the current frame.

The result is returned as:

-   `depth == 0`: just the presentation of the evaluated expression

-   `depth > 0`: the presentation plus a pseudo-graphics tree of its children up to the requested depth

Input rules:

-   Pass raw expression text exactly as the debugger evaluator should parse it.

-   Do not pass JSON-escaped payloads or literal escape sequences such as `\\"text\\"`.

Next call:

-   If the expression confirms hypothesis, continue with `xdebug_control_session(STEP_*|RESUME)`.

-   If more detail is needed, inspect related values via `[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)`/`[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)`.

**Parameters:**

-   `sessionId`: Debug session ID. Use the current ID returned by `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session has stopped, timed out, or disappeared, refresh the session list before reusing an old ID. Format: uses session name as ID by default; if multiple sessions share the same name, ID is `<sessionName>#<executionId>`. If null and exactly one active session exists, it is selected automatically. If multiple sessions are active and `sessionId` is omitted, the call fails. Default: null.

-   `frameIndex`: Stack frame index as integer (0 = top frame). Obtain this from the current paused `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)` result; do not reuse a cached frame index after **RESUME**, **STEP\_\***, `xdebug_run_to_line`, or any change in paused location. If null, uses the top frame. Default: null.

-   `expression`: Expression to evaluate in the current context. Pass raw expression text in the language of the current frame; do not pass JSON-escaped payloads or literal backslash-escaped quoted text.

-   `depth`: Maximum depth for expanding children of the evaluated result (0 = value only, 1 = immediate children, 2 = children + grandchildren, etc.). Default: 0.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_get\_debugger\_status

Returns the current status of the debugger including all active debug sessions. Use this tool to get an overview of all running debug sessions and their states.

Preconditions:

-   None.

Returns explicit `sessions[]` and `activeSessionId`.

Next call:

-   If no sessions are running, call `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`.

-   If multiple sessions are active, use returned `id` as `sessionId` in subsequent calls.

**Parameters:**

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_get\_frame\_values

Returns the values visible in the specified stack frame as a tree structure. Use this tool to inspect local variables, parameters, and fields or other values available at a specific point in the call stack.

Preconditions:

-   Session must be suspended.

-   Frame index should come from the current paused `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)` result (0 = top frame).

Format:

-   Nodes that have children are marked with `+`.

Next call:

-   Use `[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)` to drill into nested fields.

-   Use `[xdebug_evaluate_expression](/help/ai-assistant/mcp.html#xdebug_evaluate_expression)` for computed checks in the same frame.

-   Do not reuse a cached `frameIndex` after **RESUME**, **STEP\_\***, `xdebug_run_to_line`, or any change in paused location.

**Parameters:**

-   `sessionId`: Debug session ID. Use the current ID returned by `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session has stopped, timed out, or disappeared, refresh the session list before reusing an old ID. Format: uses session name as ID by default; if multiple sessions share the same name, ID is `<sessionName>#<executionId>`. If null and exactly one active session exists, it is selected automatically. If multiple sessions are active and `sessionId` is omitted, the call fails. Default: null.

-   `frameIndex`: Stack frame index as integer (0 = top frame). Obtain this from the current paused `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)` result; do not reuse a cached frame index after **RESUME**, **STEP\_\***, `xdebug_run_to_line`, or any change in paused location. If null, uses the top frame. Default: null.

-   `depth`: Maximum depth for expanding children of the evaluated result (0 = value only, 1 = immediate children, 2 = children + grandchildren, etc.). Default: 0.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_get\_stack

Returns the call stack for a thread in the debug session. Use this tool to see the sequence of method calls that led to the current execution point.

Preconditions:

-   Session must be suspended.

Behavior:

-   `threadId` should come from `[xdebug_get_threads](/help/ai-assistant/mcp.html#xdebug_get_threads)` and matches the debugger thread display name (defaults to active thread).

-   Includes frames even when source position is missing (`file`/`line` may be null).

Pagination:

-   `offset`/`limit` are applied after collecting the full stack.

Frame fields include:

-   `index`

-   `file`

-   `line`

-   `isCurrent`

-   `presentation`

`file` is reported as provided by the debugger (no path normalization).

Next call:

-   Use frame index from the current paused result in `[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)`, `[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)`, or `[xdebug_evaluate_expression](/help/ai-assistant/mcp.html#xdebug_evaluate_expression)`.

-   Do not reuse a cached `frameIndex` after **RESUME**, **STEP\_\***, `xdebug_run_to_line`, or any change in paused location.

**Parameters:**

-   `sessionId`: Debug session ID. Use the current ID returned by `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session has stopped, timed out, or disappeared, refresh the session list before reusing an old ID. Format: uses session name as ID by default; if multiple sessions share the same name, ID is `<sessionName>#<executionId>`. If null and exactly one active session exists, it is selected automatically. If multiple sessions are active and `sessionId` is omitted, the call fails. Default: null.

-   `threadId`: Thread ID to get stack for. This value should come from `[xdebug_get_threads](/help/ai-assistant/mcp.html#xdebug_get_threads)` and matches the debugger thread display name, not an opaque numeric ID. If not specified, uses the current/active thread. Default: null.

-   `limit`: Max frames to return. Default: 200.

-   `offset`: Page offset. Default: 0.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_get\_threads

Returns the list of threads in the debug session. Use this tool to see all threads and their current status.

Preconditions:

-   Session must be suspended.

Next call:

-   Use `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)` for the selected thread.

Pagination:

-   `offset`/`limit` are applied after collecting all stacks.

Ordering:

-   Active thread first.

-   Remaining threads are sorted by descending stack depth.

Schema fields include:

-   `id`

-   `name`

-   `state`

-   `isCurrent`

-   `additionalInfo`

-   `additionalInfoTooltip`

-   `frameCount`

`additionalInfo`/`additionalInfoTooltip` use additional display info when available.

**Parameters:**

-   `sessionId`: Debug session ID. Use the current ID returned by `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session has stopped, timed out, or disappeared, refresh the session list before reusing an old ID. Format: uses session name as ID by default; if multiple sessions share the same name, ID is `<sessionName>#<executionId>`. If null and exactly one active session exists, it is selected automatically. If multiple sessions are active and `sessionId` is omitted, the call fails. Default: null.

-   `limit`: Page size. Default: 50, max: 200.

-   `offset`: Page offset. Default: 0.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_get\_value\_by\_path

Gets the value of a nested object by following a path of property names. Use this tool to drill down into complex objects and inspect their nested properties.

Preconditions:

-   Session must be suspended.

-   Path must be non-empty and refer to names visible in the selected frame/object.

The result is returned as:

-   `depth == 0`: just the presentation of the value at the specified path

-   `depth > 0`: the presentation of the value plus a pseudo-graphics tree of its children up to the requested depth

Example:

-   To get the value of `obj.field.subField`, use `path = ["obj", "field", "subField"]`.

-   For array/list indexers, pass the index token as a regular path element (child name), e.g. `items[0].name`\-> `path = ["items", "[0]", "name"]`.

-   Use exact child names from the current paused `[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)`/ previous `[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)` output because index node names may differ by language/debugger (for example, `"[0]"` vs `"0"`).

-   Refresh `path` tokens after **RESUME**, **STEP\_\***, `xdebug_run_to_line`, or any other change in paused location.

Next call:

-   Use another `[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)` call to continue drilling deeper.

-   Use `[xdebug_evaluate_expression](/help/ai-assistant/mcp.html#xdebug_evaluate_expression)` when direct name-path navigation is insufficient.

**Parameters:**

-   `sessionId`: Debug session ID. Use the current ID returned by `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session has stopped, timed out, or disappeared, refresh the session list before reusing an old ID. Format: uses session name as ID by default; if multiple sessions share the same name, ID is `<sessionName>#<executionId>`. If null and exactly one active session exists, it is selected automatically. If multiple sessions are active and `sessionId` is omitted, the call fails. Default: null.

-   `frameIndex`: Stack frame index as integer (0 = top frame). Obtain this from the current paused `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)` result; do not reuse a cached frame index after **RESUME**, **STEP\_\***, `xdebug_run_to_line`, or any change in paused location. If null, uses the top frame. Default: null.

-   `path`: List of child names to navigate through, e.g. `['myObject', 'field', 'subField']` or `['items', '[0]', 'name']`. Use exact node names from the current paused `[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)`/`[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)` output and refresh stale path tokens after the paused location changes.

-   `depth`: Maximum depth for expanding children of the evaluated result (0 = value only, 1 = immediate children, 2 = children + grandchildren, etc.). Default: 0.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_list\_breakpoints

Lists all breakpoints in the project or in a specific file. Use this tool to see all currently set breakpoints and their properties.

> ### tip
>
> Call this before **RESUME** to confirm there is at least one enabled breakpoint that is expected to be hit next.

Behavior:

-   If `filePath` is provided, returns only breakpoints in that file.

-   Returns rich attributes for each breakpoint (`id`, `type`, `file`, `line`, `enabled`, `owner`, `condition`, `isLogMessage`, `isLogStack`, `temporary`, `suspendPolicy`, `hitCount`).

Next call:

-   If no suitable breakpoint exists, call `[xdebug_set_breakpoint](/help/ai-assistant/mcp.html#xdebug_set_breakpoint)`.

-   Then continue execution with `xdebug_control_session(action=RESUME)` and `xdebug_control_session(action=WAIT_FOR_PAUSE)`.

**Parameters:**

-   `filePath`: Optional file path to filter breakpoints. Path to the file. Supports project-relative paths, paths with .., absolute paths, archive entries like /path/lib.jar!/pkg/Foo.class, and URLs such as file://, jar://, and jrt://. Any path returned from the other tools can be passed as is (e.g. paths from `search_*` tools). If not specified, returns all breakpoints. Default: null.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_remove\_breakpoint

Removes breakpoints filtered by owner and optional selectors. Use this tool to remove previously set breakpoints.

Behavior:

-   `owner` defaults to `agent`.

-   If only `owner` is provided, removes all breakpoints of that owner.

-   If `breakpointId` is provided, removes matching breakpoint(s) for the selected owner.

-   If `filePath`+`line` are provided, removes matching line breakpoint(s) for the selected owner.

-   If multiple selectors are provided, all of them are combined (logical AND).

-   Idempotent: removing a non-existing breakpoint returns `removed=false`.

-   To remove all breakpoints regardless of owner, call twice: once with `owner=user`, once with `owner=agent`.

Next call:

-   Use `[xdebug_list_breakpoints](/help/ai-assistant/mcp.html#xdebug_list_breakpoints)` to verify the remaining set.

**Parameters:**

-   `breakpointId`: Canonical breakpoint ID returned by `[xdebug_set_breakpoint](/help/ai-assistant/mcp.html#xdebug_set_breakpoint)` or `[xdebug_list_breakpoints](/help/ai-assistant/mcp.html#xdebug_list_breakpoints)`.

-   `filePath`: Optional file path to filter breakpoints. Path to the file. Supports project-relative paths, paths with .., absolute paths, archive entries like /path/lib.jar!/pkg/Foo.class, and URLs such as file://, jar://, and jrt://. Any path returned from the other tools can be passed as is (e.g. paths from `search_*` tools). If not specified, returns all breakpoints. Default: null.

-   `line`: Optional input: line number (1-based) of the breakpoint to remove.

-   `owner`: Breakpoint owner filter. Default: agent.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_run\_to\_line

Resumes execution to a target line. Use this tool to run until a specific source position without manually stepping.

Preconditions:

-   Session must be suspended.

-   Target file/line must be valid.

Outcome:

-   `paused`: session paused at or after target.

-   `stopped`: session terminated before pause.

-   `timeout`: no pause/stop within timeout window.

Next call:

-   If paused, call `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)`/`[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)`/`[xdebug_evaluate_expression](/help/ai-assistant/mcp.html#xdebug_evaluate_expression)`.

-   If the session stopped or disappeared, refresh `sessionId` via `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` before issuing another session-scoped call.

**Parameters:**

-   `sessionId`: Debug session ID. Use the current ID returned by `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session has stopped, timed out, or disappeared, refresh the session list before reusing an old ID. Format: uses session name as ID by default; if multiple sessions share the same name, ID is `<sessionName>#<executionId>`. If null and exactly one active session exists, it is selected automatically. If multiple sessions are active and `sessionId` is omitted, the call fails. Default: null.

-   `filePath`: Path relative to the project root.

-   `line`: Target line number (1-based).

-   `timeout`: Timeout in milliseconds waiting for a paused/stopped result. Default: 30000.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_set\_breakpoint

Creates or updates a breakpoint. Use this tool to set line breakpoints, update existing breakpoints by ID, and control tracepoint/logging behavior.

Targeting modes:

-   By location: provide `filePath` + `line`, and omit `breakpointId` (or pass `null`). Do not use placeholder strings such as `""`, `"/"`, or `"__omit__"`.

-   By ID: provide an existing opaque canonical `breakpointId` returned by `[xdebug_set_breakpoint](/help/ai-assistant/mcp.html#xdebug_set_breakpoint)` or `[xdebug_list_breakpoints](/help/ai-assistant/mcp.html#xdebug_list_breakpoints)` (optional `filePath`/`line` can relocate line breakpoints).

Validation:

-   In location mode, both `filePath` and `line` are required.

-   In ID mode, breakpoint must exist and be uniquely identified by `breakpointId`.

-   In location mode, `filePath` is relative to the project root, `line` is 1-based, and the target location must be executable.

Event reporting:

-   Invalid `condition` expressions are reported asynchronously via `xdebug_control_session(...).breakpointErrorsTail`.

-   Tracepoint output from breakpoints with `isLogMessage` and/or `isLogStack` is drained via `xdebug_control_session(action=DRAIN_EVENTS).tracepointOutputsTail`.

-   Breakpoint-error and tracepoint-output reporting are currently supported only by JVM-based debuggers (Java, Kotlin, etc.).

-   A successful `[xdebug_set_breakpoint](/help/ai-assistant/mcp.html#xdebug_set_breakpoint)` response does not guarantee that `condition` or tracepoint expressions are valid; check later `breakpointErrorsTail` before relying on them.

-   Successful line-breakpoint responses also include `lineText`, a truncated excerpt of the actual source line where the breakpoint now resides. Inspect it to confirm placement before resuming.

Apply semantics:

-   Provided fields are applied as the resulting state for the target breakpoint.

-   `condition=null` clears existing condition.

-   `isLogMessage=true` logs breakpoint hit position.

-   `isLogStack=true` logs current stack trace.

-   If both flags are true, both position and stack are logged.

-   With `isLogMessage`/`isLogStack` + `suspendPolicy=NONE`, the breakpoint behaves as a tracepoint.

-   In ID mode, if `filePath`/`line` are provided for a line breakpoint, it is relocated (recreated) at the new location.

-   In ID mode, for non-line breakpoints, `filePath`/`line` are ignored and reported in `message`.

-   Any successful operation marks breakpoint as `agent` ownership (`mcpBreakpointMarker`).

Next call:

-   Use returned `lineText` and/or `[xdebug_list_breakpoints](/help/ai-assistant/mcp.html#xdebug_list_breakpoints)` to verify placement.

-   Start/continue execution via `xdebug_start_debugger_session` or `xdebug_control_session(action=RESUME)`.

**Parameters:**

-   `breakpointId`: Canonical breakpoint ID returned by `[xdebug_set_breakpoint](/help/ai-assistant/mcp.html#xdebug_set_breakpoint)` or `[xdebug_list_breakpoints](/help/ai-assistant/mcp.html#xdebug_list_breakpoints)`.

-   `filePath`: Optional file path to filter breakpoints. Path to the file. Supports project-relative paths, paths with .., absolute paths, archive entries like /path/lib.jar!/pkg/Foo.class, and URLs such as file://, jar://, and jrt://. Any path returned from the other tools can be passed as is (e.g. paths from `search_*` tools). If not specified, returns all breakpoints. Default: null.

-   `line`: 1-based line number. Required only in location mode. Optional in ID mode to relocate line breakpoints.

-   `condition`: Optional condition expression - breakpoint will only trigger when this evaluates to true. Validation errors are reported asynchronously via `xdebug_control_session(...).breakpointErrorsTail` (JVM-based debuggers only). Default: null.

-   `isLogMessage`: Whether to log breakpoint hit position (source location) when breakpoint is reached. In JVM-based debuggers output is available via `xdebug_control_session(action=DRAIN_EVENTS).tracepointOutputsTail`. Default: false.

-   `isLogStack`: Whether to log stack trace when breakpoint is reached. In JVM-based debuggers output is available via `xdebug_control_session(action=DRAIN_EVENTS).tracepointOutputsTail`. Default: false.

-   `temporary`: Temporary breakpoint (removed after first hit). Default: false.

-   `suspendPolicy`: Suspend policy: **ALL**, **THREAD**, **NONE**. Default: **ALL**.

-   `enabled`: Whether breakpoint is enabled. Default: true.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_set\_variable

Mutates a variable value by path in the selected stack frame. Use this tool to change state during debugging.

Preconditions:

-   Session must be suspended.

-   Value must be modifiable.

-   `path` should come from the current paused `[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)`/`[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)` output.

Path format is the same as in `[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)`. `newValue` must be a raw expression in the language of the current frame, and it must be assignable to the target value by the debugger/evaluator. Do not pass JSON-escaped payloads or literal escape sequences such as `\\"text\\"`.

Result:

-   Returns `oldValue`/`newValue`/`applied`.

-   Unsupported mutation returns an error with a textual message.

Next call:

-   Re-read value via `[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)` or `[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)` to confirm.

**Parameters:**

-   `sessionId`: Debug session ID. Use the current ID returned by `[xdebug_get_debugger_status](/help/ai-assistant/mcp.html#xdebug_get_debugger_status)` or `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. If a session has stopped, timed out, or disappeared, refresh the session list before reusing an old ID. Format: uses session name as ID by default; if multiple sessions share the same name, ID is `<sessionName>#<executionId>`. If null and exactly one active session exists, it is selected automatically. If multiple sessions are active and `sessionId` is omitted, the call fails. Default: null.

-   `frameIndex`: Stack frame index as integer (0 = top frame). Obtain this from the current paused `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)` result; do not reuse a cached frame index after **RESUME**, **STEP\_\***, `xdebug_run_to_line`, or any change in paused location. If null, uses the top frame. Default: null.

-   `path`: Path to target value, same format as `[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)`. Use exact node names from the current paused `[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)`/`[xdebug_get_value_by_path](/help/ai-assistant/mcp.html#xdebug_get_value_by_path)` output and refresh stale path tokens after the paused location changes.

-   `newValue`: New value expression to assign. Pass raw expression text in the language of the current frame; it must be assignable to the target value by the debugger/evaluator. Do not pass JSON-escaped payloads or literal backslash-escaped quoted text.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

xdebug\_start\_debugger\_session

Start a debugger session for either an existing run configuration by name or a code location (`filePath` + `line`) in the current project. Use this tool to start a debugger session. Use this tool with either an existing run configuration name, or with `filePath` + `line`. When using `filePath` + `line`, a line with a runnable method such as `main`, a test, or another executable entry point will almost always work. If you are unsure which line to use, `[get_run_configurations](/help/ai-assistant/mcp.html#get_run_configurations)` can help discover runnable locations in the file. The session will be started, and you can then use other debugger tools to control execution.

Preconditions:

-   When using `configurationName`, pass the exact existing run configuration name; do not pass a test method name or other derived target identifier.

-   When using `filePath` + `line`, point at a runnable code location such as `main`, a test, or another executable entry point.

-   Set at least one breakpoint first; otherwise the program may run to completion without pausing.

-   Pass either `configurationName`, or `filePath` together with `line`. These modes are mutually exclusive.

Behavior:

-   Waits for session creation up to `timeout`.

-   Applies a grace wait (`graceWaitMs`) after the session starts and returns refreshed state.

-   Optional launch overrides (`programArguments`, `workingDirectory`, `envs`) are applied only for this debug launch and are not persisted.

-   `[get_run_configurations](/help/ai-assistant/mcp.html#get_run_configurations)` is the source of truth for override support: only pass launch overrides when the selected run configuration reports `supportsDynamicLaunchOverrides=true`.

-   Do not pass these override parameters unless you explicitly need to change the configured launch values for this debug launch.

-   Missing/null override parameters keep existing run configuration values unchanged.

-   For string overrides (`programArguments`, `workingDirectory`), missing/null or empty string (`""`) keeps the existing value unchanged.

-   Pass a whitespace-only string such as `" "` to clear an existing value for this debug launch.

Next call:

-   `xdebug_control_session(action=WAIT_FOR_PAUSE)` to wait for first suspension.

-   After pause, call `[xdebug_get_stack](/help/ai-assistant/mcp.html#xdebug_get_stack)` and `[xdebug_get_frame_values](/help/ai-assistant/mcp.html#xdebug_get_frame_values)` (or `[xdebug_evaluate_expression](/help/ai-assistant/mcp.html#xdebug_evaluate_expression)`) for runtime evidence.

Returns a flat result with debugger session metadata plus the execution snapshot fields from the launch:

-   `sessionId`, `name`, `status`, and optional `runConfigurationName`

-   `output` preview and optional `fullOutputPath`

-   optional `exitCode` when process termination is already known

**Parameters:**

-   `configurationName`: Name of the existing run configuration to debug.

-   `filePath`: File path relative to the project root. Provide together with `line` to start debugging from a code location.

-   `line`: 1-based line number for `filePath`. Provide together with `filePath` and do not combine with `configurationName`.

-   `timeout`: Timeout in milliseconds to wait for the debug session to start. Default: 60000.

-   `graceWaitMs`: Grace wait in milliseconds after session starts to refresh state. Default: 2000.

-   `programArguments`: Optional program arguments override for this launch only. Pass this only when the selected run configuration reports `supportsDynamicLaunchOverrides=true` in `get_run_configurations`. Missing/null or empty string keeps the existing value; whitespace-only string clears it.

-   `workingDirectory`: Optional working directory override for this launch only. Pass this only when the selected run configuration reports `supportsDynamicLaunchOverrides=true` in `get_run_configurations`. Missing/null or empty string keeps the existing value; whitespace-only string clears it.

-   `envs`: Optional environment variable overrides for this launch only. Pass this only when the selected run configuration reports `supportsDynamicLaunchOverrides=true` in `[get_run_configurations](/help/ai-assistant/mcp.html#get_run_configurations)`. Missing/null keeps existing env unchanged; when provided, values are merged over existing env.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Execution tools

execute\_run\_configuration

Run either an existing run configuration by name or a temporary run configuration created from a code location (`filePath` + `line`) in the current project, then wait up to the specified timeout for it to finish. Use this tool with either a configuration name returned by `[get_run_configurations](/help/ai-assistant/mcp.html#get_run_configurations)`, or with a run point (`filePath` + `line`) returned by `get_run_configurations(filePath = ...)`.

Optional launch overrides (`programArguments`, `workingDirectory`, `envs`) are applied only for this run and are not persisted. Do not pass these override parameters unless you explicitly need to change the configured launch values for this run. Missing/null override parameters keep existing run configuration values unchanged. For string overrides (`programArguments`, `workingDirectory`), missing/null or empty string (`""`) keeps the existing value unchanged. Pass a whitespace-only string such as `" "` to clear an existing value for this launch.

Pass either `configurationName`, or `filePath` together with `line`. These modes are mutually exclusive.

Behavior:

-   When `waitForExit=true`, waits up to `timeout` milliseconds for process termination. If the timeout expires, the process keeps running in the background and `exitCode` is omitted from the result.

-   When `waitForExit=false`, waits only for the process to start, then returns immediately without applying `timeout`.

-   `fullOutputPath` points to a temp file with the full raw output and may continue growing while the process is alive.

Returns the execution result including current output snapshot, optional exit code, and optional `fullOutputPath`.

**Parameters:**

-   `configurationName`: Name of the existing run configuration to execute.

-   `filePath`: File path relative to the project root. Provide together with `line` to create and execute a temporary run configuration from code context.

-   `line`: 1-based line number for `filePath`. Provide together with `filePath` and do not combine with `configurationName`.

-   `timeout`: Timeout in milliseconds.

-   `waitForExit`: Whether to wait for process termination. If false, the tool returns immediately after the process starts and ignores `timeout`.

-   `programArguments`: Optional program arguments override for this launch only. Missing/null or empty string keeps the existing value; whitespace-only string clears it.

-   `workingDirectory`: Optional working directory override for this launch only. Missing/null or empty string keeps the existing value; whitespace-only string clears it.

-   `envs`: Optional environment variable overrides for this launch only. Missing/null keeps existing env unchanged; when provided, values are merged over existing env.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

get\_run\_configurations

Returns either project run configurations or executable code locations, depending on the input.

Without `filePath`, this tool lists the project's existing run configurations. The result includes configuration names and, when available, launch details such as program arguments, working directory, environment variables, and `supportsDynamicLaunchOverrides`.

`supportsDynamicLaunchOverrides` is the source-of-truth capability flag for one-time launch overrides (`programArguments`, `workingDirectory`, `envs`) in `[execute_run_configuration](/help/ai-assistant/mcp.html#execute_run_configuration)` and `[xdebug_start_debugger_session](/help/ai-assistant/mcp.html#xdebug_start_debugger_session)`. Only pass those override parameters when this flag is `true` for the selected configuration.

With `filePath`, this tool discovers executable entry points (run points) in that file, such as test methods, main methods, or other executable entry points where the IDE shows a Run gutter icon. The result contains `filePath` and `runPoints`; use the returned line numbers with `[execute_run_configuration](/help/ai-assistant/mcp.html#execute_run_configuration)` to run from code.

**Parameters:**

-   `filePath`: Optional file path relative to the project root. When provided, returns run points (executable entry points) in the file instead of project-wide run configurations.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### File tools

create\_new\_file

Creates a new file at the specified path within the project directory. Optionally, writes the provided text into the file.

> ### note
>
> Any required parent directories are created automatically.

**Parameters:**

-   `pathInProject`: Path where the file should be created relative to the project root.

-   `text` (optional): Content to write into the new file.

-   `overwrite`: Whether to overwrite an existing file. If set to `false`, an exception is thrown in case of a conflict.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

get\_all\_open\_file\_paths

Returns the paths of all files opened for editing in the active editor or any other open editors, relative to the project root. Use this tool to explore currently open editors.

**Parameters:**

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

list\_directory\_tree

Provides a tree representation of the specified directory in the pseudo-graphic format, similar to the `tree` utility. Use this tool to explore the contents of a directory or the entire project. Prefer this tool over command-line utilities like `ls` or `dir` for directory listing.

**Parameters:**

-   `directoryPath`: Path relative to the project root.

-   `maxDepth`: Maximum recursion depth.

-   `timeout`: Timeout in milliseconds.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

open\_file\_in\_editor

Opens the specified file in the JetBrains IDE editor. Requires a `filePath` parameter containing the path to the file to open. The file path can be absolute or relative to the project root.

**Parameters:**

-   `filePath`: Path relative to the project root.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Formatting tools

reformat\_file

Reformats the specified file in the JetBrains IDE. Use this tool to apply code formatting to a file identified by its path.

**Parameters:**

-   `path`: Path relative to the project root.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

Specific IDEs

#### Jupyter Notebooks tools

**Available in:** PyCharm

To improve how external clients work with Jupyter notebooks, you can use the bundled `jupyter` skill. The skill provides guidance on when and how to use the corresponding notebook tools.

> ### note
>
> For more information about skills, refer to the official [AI Assistant documentation](https://www.jetbrains.com/help/ai-assistant/agent-skills.html).

create\_notebook

Creates an empty Jupyter notebook file with the `.ipynb` extension. The notebook uses the `nbformat` 4.5 schema.

Use `edit_notebook` to add cells after the notebook is created.

The tool returns the path to the new file.

Parameters:

-   `file_path`: Absolute path or path relative to the project root where the notebook should be created.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

edit\_notebook

Edits a cell in a Jupyter notebook and saves the updated notebook file.

You can replace, insert, or delete a cell. If the specified cell cannot be found, the tool returns a validation error with the available cell IDs.

Examples:

-   `{"file_path": "/abs/path/demo.ipynb", "cell_id": "abc123", "new_source": "print('hello')", "edit_mode": "replace"}`

-   `{"file_path": "/abs/path/demo.ipynb", "cell_id": "abc123", "new_source": "# Title", "cell_type": "markdown", "edit_mode": "insert"}`

-   `{"file_path": "/abs/path/demo.ipynb", "cell_id": "abc123", "edit_mode": "delete"}`

Parameters:

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `cell_id`: Cell ID to replace or delete. For insertion, the new cell is added after this cell. If omitted in insert mode, the new cell is appended to the end of the notebook.

-   `new_source`: Source text for the new or replacement cell. Omit it only to create or replace a cell with empty content.

-   `cell_type`: Cell type, either `code` or `markdown`. Required for insertion and ignored for replacement and deletion.

-   `edit_mode`: Editing operation to perform: `replace`, `insert`, or `delete`. The default value is `replace`.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

execute\_code\_on\_kernel

Runs a short code snippet in the active kernel of a Jupyter notebook without modifying the notebook.

Use this tool for quick checks, such as inspecting variables, metrics, data shapes, or the execution environment. For longer operations that should remain in the notebook, add or edit a cell and use `run_notebook_cell`.

The tool requires an existing Jupyter kernel session. It returns compact text from the last textual output or an error message.

Parameters:

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `code`: Code snippet to run in the notebook kernel.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

get\_notebook\_state

Checks the current execution state of a Jupyter notebook kernel without starting a new kernel session.

The tool reports whether the kernel is unavailable, idle, or busy. When this information is available, it also includes the ID of the currently executing cell and the IDs of queued cells.

Parameters:

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

interrupt\_notebook

Interrupts the current execution in a Jupyter notebook while keeping the kernel session available.

Use this tool to stop a cell that is stuck or no longer needed. If no active notebook execution manager is available, the tool reports that the kernel has already been stopped.

Parameters:

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

kill\_notebook

Terminates the Jupyter kernel session associated with a notebook.

Use this tool when the kernel state, imports, variables, or memory need to be reset, or when the notebook should be rerun from a clean state. The next cell execution starts a new kernel session, so initialization and import cells must be run again.

Parameters:

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

read\_notebook

Reads the contents of a Jupyter notebook without executing any cells.

The tool returns the notebook cells in their original order, including each cell's ID, type, execution status when available, source code, and rendered outputs. Supported outputs include text, Markdown, JSON, errors, images, browser content, and tables.

Images are saved as temporary PNG files, and tables are rendered as simple HTML. Because the notebook-level response is limited in size, use `read_notebook_cell` to inspect an individual large cell.

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

read\_notebook\_cell

Reads a specific cell in a Jupyter notebook without executing it.

The tool can return the cell source, its output, or both. It formats the result as a compact XML-like block.

Large outputs are returned as a preview together with a temporary text file that contains the complete output. Image outputs are saved as temporary PNG files. For dynamic tables, the tool attempts to load the first 100 rows and statistics within 10 seconds, then falls back to the static table representation.

Parameters:

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `cell_id`: ID of the notebook cell to read.

-   `read_mode`: Content to return, `all` for the source and output, `source` for the source only, or `output` for the output only.

-   `output_mode`: Output scope to return. Use `delta` to return only output added since the previous call for this cell, or `full` to return the complete output. The default value is `delta`.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

run\_notebook\_cell

Runs one or more cells in a Jupyter notebook using the notebook kernel.

Use this tool when the notebook execution must produce side effects or updated cell outputs. For a short check in an already running kernel, use `execute_code_on_kernel` instead.

The tool waits for the requested cells to finish and returns their rendered outputs. Large outputs are returned as a preview together with a temporary text file containing the complete output. Image outputs are saved as temporary PNG files.

Parameters:

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `cell_ids`: Optional list of cell IDs to run. If omitted, all cells are executed in order.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

wait\_cell\_execution

Waits for a Jupyter notebook cell to finish execution or reach another terminal state.

Use this tool for long-running cells that produce little or no useful output while they are running. For cells with incremental logs or other useful live output, use `read_notebook_cell` with `output_mode` set to `delta`.

If the cell is still running when the wait period ends, the tool returns a normal status indicating that execution is still in progress. Call the tool again to continue waiting.

Parameters:

-   `file_path`: Absolute path or path relative to the project root to the `.ipynb` file.

-   `cell_id`: ID of the notebook cell whose execution state to wait for.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Inspection Generator MCP Tools

validate\_inspection\_kts

Validates an inspection.kts script against specification examples. Compiles the inspection and runs it against positive/negative examples. Returns compilation status and detailed verification results.

Positive examples should trigger the inspection (problems expected). Negative examples should NOT trigger the inspection (no problems expected on forbidden lines).

Returns overall success, per-example results, and aggregation statistics.

**Parameters:**

-   `inspectionKtsCode`: The inspection.kts script content to compile and validate.

-   `pathToSpecification`: Path to specification with examples to validate against.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Inspection KTS MCP tools

generate\_inspection\_kts\_api

Returns the Inspection KTS API documentation for the target language. Provides available classes and functions that can be used when writing inspection.kts files.

**Parameters:**

-   `language`: Target language: 'Java' or 'Kotlin'.

-   `wrapInTags`: If true, wraps the API content in `<API>` and `<api.kt>` tags.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

generate\_inspection\_kts\_examples

Returns example inspection.kts templates for the target language to guide code generation. Provides XML-wrapped examples showing how to write inspections using the InspectionKts API.

**Parameters:**

-   `language`: Target language: 'Java' or 'Kotlin'.

-   `includeAdditionalExamples`: If true, includes additional curated examples besides templates.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

generate\_psi\_tree

Creates a PSI tree for the provided Java or Kotlin code and returns it as indented text. Use this tool to understand the PSI structure of code snippets when writing inspections. The output shows element types and their hierarchy, with hints about when `node.children()` is needed.

**Parameters:**

-   `code`: Source code snippet to parse.

-   `language`: Target language: 'Java' or 'Kotlin'.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

run\_inspection\_kts

Compiles an inspection.kts script and runs it against a target file. Returns compilation errors if any, or the list of problems found by the inspection. Use this tool to test inspection.kts scripts during development.

**Parameters:**

-   `inspectionKtsCode`: The inspection.kts script content to compile and run.

-   `contextPath`: Relative path of the target file inside project to analyze (for example, src/my/package/Example.kt).

-   `targetFileContent`: The content of the target file to analyze. If not provided, the file must exist in the project.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Patch tools

apply\_patch

Applies a patch in the Codex `apply_patch` format or the unified Git diff format. Supports Add, Delete, and Update operations, with an optional move-to path for updates. Paths must stay inside the project directory.

**Parameters:**

-   `input`: Patch text in the `apply_patch` format or the unified Git diff format.

-   `patch`: Alias of `input` for compatibility with clients that send `{patch: ...}`.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

Specific IDEs

#### Python Environment MCP

**Available in:** PyCharm

To improve how external clients work with Python environments, you can use the bundled `python-tools` skill. The skill provides guidance on when and how to use the corresponding environment tools.

> ### note
>
> For more information about skills, refer to the official [AI Assistant documentation](https://www.jetbrains.com/help/ai-assistant/agent-skills.html).

configure\_python\_interpreter

Configures a local Python interpreter for the module that contains the specified file.

AI Assistant can attach an existing virtual environment, inherit an interpreter from a parent module, or create a new environment using an available environment manager.

Call this tool only when the response from `get_python_environment` indicates that AI Assistant can configure an interpreter. After configuration, call `get_python_environment` again to verify the environment.

> ### note
>
> Remote, WSL, and Docker interpreters are not supported.

Parameters:

-   `filePath`: Absolute path or path relative to the project root to a Python file in the module whose interpreter should be configured.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

get\_python\_environment

Returns information about the Python environment configured for the specified file.

Use this tool before running Python commands to determine the interpreter version, environment type, executable path, environment location, and package manager used by AI Assistant. The tool does not modify the project configuration.

If no interpreter is configured, the response includes a hint about the next action. If the response indicates that AI Assistant can configure an interpreter, call `configure_python_interpreter` with the same file path.

Parameters:

-   `filePath`: Absolute path or path relative to the project root to a Python file in the target module.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Read tools

read\_file

Reads a file in the project directory or from any project dependency or other project source root. Can read sources inside Jar/Jrt files and decompile Java class files inside Jar/Jrt files or on disk. Returns numbered lines (1-indexed) as text.

Modes:

-   `slice`

-   `lines`

-   `line_columns`

-   `offsets`

-   `indentation`

Mode details:

-   `slice` uses `start_line` and `max_lines`.

-   `lines` uses `start_line`/`end_line` (inclusive).

-   `line_columns` uses `start_line`/`start_column` and `end_line`/`end_column` (`end` is exclusive; `end_line` defaults to `start_line`).

-   `offsets` uses `start_offset`/`end_offset` (`end` is exclusive).

-   `indentation` uses `start_line` with `max_levels`/`include_*`.

`max_lines` caps the total output in all modes; `context_lines` applies to range modes (per side).

**Parameters:**

-   `file_path`: Path to the file. Supports project-relative paths, paths with '..', absolute paths, archive entries like /path/lib.jar!/pkg/Foo .class, and URLs such as file://, jar://, and jrt://. Any path returned from the other tools can be passed as is (e.g. paths from `search_*` tools).

-   `mode`: Read mode: `slice`, `lines`, `line_columns`, `offsets`, or `indentation`.

-   `start_line`: 1-based line number to start reading from.

-   `max_lines`: Maximum number of lines to return (slice uses as line count; all modes cap output).

-   `end_line`: 1-based end line for `lines`/`line_columns` mode (inclusive for `lines`; exclusive for `line_columns`).

-   `start_column`: 1-based start column for `line_columns` mode.

-   `end_column`: 1-based end column for range read (exclusive).

-   `start_offset`: 0-based start offset for offsets mode (requires `end_offset`).

-   `end_offset`: 0-based end offset for offsets mode (exclusive).

-   `context_lines`: Number of context lines to include around the range (per side).

-   `max_levels`: Indentation mode: maximum indentation levels to include (0 = only anchor block).

-   `include_siblings`: Indentation mode: include sibling blocks at the same indentation level.

-   `include_header`: Indentation mode: include header comments/annotations directly above anchor.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Refactoring tools

rename\_refactoring

Renames a symbol (variable, function, class, etc.) in the specified file. Use this tool to perform rename refactoring operations.

Unlike a simple text search-and-replace, the `rename_refactoring` tool is a context-aware utility that understands the code's structure. It intelligently updates all references to the specified symbol throughout the project, ensuring code integrity and preventing broken references. It is always the preferred method for renaming programmatic symbols.

The tool returns a success message if the rename operation was successful, or an error message if the file or symbol cannot be found, or if the rename operation fails.

**Parameters:**

-   `pathInProject`: Path relative to the project root.

-   `symbolName`: Name of the symbol to rename.

-   `newName`: New name for the symbol.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Search tools

search\_file

Searches for files by glob pattern within the project. Use this tool when you need to match file paths using glob syntax.

Glob patterns are relative to the project root.

Examples:

-   `"**/*.kt"`

-   `"src/**/Foo*.java"`

-   `"build.gradle.kts"`

Patterns without `'/'` are treated as `"**/pattern"`. `paths` are optional additional glob filters relative to the project root.

**Parameters:**

-   `q`: Glob pattern to search for.

-   `paths`: Optional list of project-relative glob patterns to filter results. Supports `!` excludes. Trailing `/` expands to `**`. Patterns without `/` are treated as `**/pattern`. Empty strings are ignored.

-   `includeExcluded`: Whether to include excluded/ignored files in results.

-   `limit`: Maximum number of results to return.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

search\_regex

Searches for regex matches within project files. Use this tool when you need regex search with snippet results. Results include match coordinates when available (1-based line/column, 0-based offsets).

Paths are glob patterns relative to the project root.

Examples:

-   `["src/**", "!**/test/**"]`

-   `["**/*.kt"]`

-   `["foo/"]`

**Parameters:**

-   `q`: Regex pattern to search for.

-   `paths`: Optional list of project-relative glob patterns to filter results. Supports `!` excludes. Trailing `/` expands to `**`. Patterns without `/` are treated as `**/pattern`. Empty strings are ignored.

-   `limit`: Maximum number of results to return.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

search\_symbol

Searches for symbols (classes, methods, fields). Use this tool for semantic lookup by identifier fragments. Results include match coordinates when available (1-based line/column, 0-based offsets).

Paths are glob patterns relative to the project root.

By default, this searches project symbols only. If you don't find a suitable result, try again with `include_external=true` to search SDK and library symbols too.

**Parameters:**

-   `q`: Symbol query text.

-   `paths`: Optional list of project-relative glob patterns to filter results. Supports `!` excludes. Trailing `/` expands to `**`. Patterns without `/` are treated as `**/pattern`. Empty strings are ignored.

-   `include_external`: Whether to include SDK and library symbols. Disabled by default; if nothing suitable is found, try again with `include_external=true`.

-   `limit`: Maximum number of results to return.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

search\_text

Searches for a text substring within project files. Use this tool for fast text search with snippet results. Results include match coordinates when available (1-based line/column, 0-based offsets).

Paths are glob patterns relative to the project root.

Examples:

-   `["src/**", "!**/test/**"]`

-   `["**/*.kt"]`

-   `["foo/"]`

**Parameters:**

-   `q`: Text to search for.

-   `paths`: Optional list of project-relative glob patterns to filter results. Supports `!` excludes. Trailing `/` expands to `**`. Patterns without `/` are treated as `**/pattern`. Empty strings are ignored.

-   `limit`: Maximum number of results to return.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Skill Search tools

skill\_search

Performs a unified project search with an explicit mode:

-   `file`: glob path search.

-   `text`: literal content search.

-   `regex`: regex content search.

-   `symbol`: semantic symbol lookup.

Symbol search is project-focused by default. If you do not find a suitable symbol, try again with `include_external=true` to search SDK and library symbols too.

**Parameters:**

-   `mode` (required): Search mode: `file`, `text`, `regex`, or `symbol`.

-   `q` (required): Search query. For `mode=file` this is a glob pattern.

-   `paths`: Optional project-relative glob filters. Supports `!`\-excludes and a trailing `/`.

-   `include_external`: Whether to include SDK and library symbols for `mode=symbol`. Disabled by default; if nothing suitable is found, try again with `include_external=true`.

-   `includeExcluded`: Whether to include excluded or ignored files. Supported only for `mode=file`.

-   `limit`: Maximum number of results to return.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Terminal tools

execute\_terminal\_command

Executes a specified shell command in the IDE's integrated terminal. Use this tool to run terminal commands within the IDE environment.

Important features and limitations:

-   Checks if a process is running before collecting output.

-   Limits output to 2000 lines (truncates any excess).

-   Times out after the specified timeout, with a notification.

-   Requires user confirmation unless [Brave Mode](/help/ai-assistant/mcp.html#execute-actions-without-confirmation) is enabled in the settings.

Returns possible responses:

-   Terminal output (truncated if over 2000 lines).

-   Output with an interruption notice if the command times out.

-   Error messages for various failure cases.

**Parameters:**

-   `command`: Shell command to execute.

-   `executeInShell`: Whether to execute the command in the user's default shell (bash, zsh, etc.). Useful if the command is a shell script or if it is important to preserve the real environment of the user's terminal. If set to `false`, the command will be started as a process.

-   `reuseExistingTerminalWindow`: Whether to reuse an existing terminal window to avoid creating multiple terminals.

-   `timeout`: Timeout in milliseconds.

-   `maxLinesCount`: Maximum number of lines to return.

-   `truncateMode`: How to truncate the text: from the start, in the middle, at the end, or do not truncate at all.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### Universal tools

execute\_tool

Universal tool executor that dynamically invokes a specific IDE MCP tool from a command-line string.

**Parameters:**

-   `command` (required): Command-line string with the tool name and arguments.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

#### VCS tools

get\_repositories

Retrieves the list of VCS roots in the project. Use this tool to identify all repositories in a multi-repository project.

**Parameters:**

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

git\_status

Retrieves the Git status for one or more repositories in the current project. Returns porcelain-style index and worktree status codes and summary counters. By default, all Git repositories are returned.

**Parameters:**

-   `repositoryPathRelativeToProject`: Optional path relative to the project root used to select a single containing repository.

-   `includeUntracked`: Whether to include untracked files.

-   `includeIgnored`: Whether to include ignored files.

-   `limit`: Maximum number of entries returned per repository.

-   `projectPath`: The project path. Always provide this value if known to reduce ambiguous calls. If only the current working directory is known, you can use it as the project path.

Specific IDEs

#### Rails-specific tools

**Available in:** RubyMine

get\_rails\_routes

Retrieves Rails routes in the project. Results are returned in a paginated list and filtered based on included/excluded paths, actions (specified by fully-qualified name, or FQN), directories, and HTTP methods.

Prefer this tool over manual code inspection as it performs deep analysis of Rails routes.

**Parameters:**

-   `page`: Page number for pagination.

-   `page_size`: Number of items per page.

-   `included_route_path_filters`: List of route path patterns to include.

-   `excluded_route_path_filters`: List of route path patterns to exclude.

-   `included_action_fqn_filters`: List of fully-qualified action names to include.

-   `excluded_action_fqn_filters`: List of fully-qualified action names to exclude.

-   `included_action_directory_filters`: List of action directories to include.

-   `excluded_action_directory_filters`: List of action directories to exclude.

-   `min_action_count`: Minimum number of actions a route must have.

-   `max_action_count`: Maximum number of actions a route can have.

-   `included_http_method_filters`: List of HTTP methods to include (GET, POST, etc.).

-   `excluded_http_method_filters`: List of HTTP methods to exclude.

get\_rails\_models

Retrieves Rails models in the project. Results are paginated and can be filtered by FQN

**Parameters:**

-   `page`: Page number for pagination.

-   `page_size`: Number of items per page.

-   `included_fqn_filters`: List of FQN patterns to include.

-   `excluded_fqn_filters`: List of FQN patterns to exclude.

-   `included_directory_filters`: List of directories to include.

-   `excluded_directory_filters`: List of directories to exclude.

-   `controller_filter`: Filter to include only models with or without corresponding controllers.

get\_rails\_controllers

Retrieves Rails controllers in the project. Results are paginated and can be filtered by FQN, directory, views, abstract status, and corresponding model presence.

**Parameters:**

-   `page`: Page number for pagination.

-   `page_size`: Number of items per page.

-   `included_fqn_filters`: List of FQN patterns to include.

-   `excluded_fqn_filters`: List of FQN patterns to exclude.

-   `included_directory_filters`: List of directories to include.

-   `excluded_directory_filters`: List of directories to exclude.

-   `included_view_filters`: List of view filters to include.

-   `excluded_view_filters`: List of view filters to exclude.

-   `abstract_filter`: Filter to include only abstract, non-abstract, or all controllers.

-   `model_filter`: Filter to include only controllers with or without a corresponding model.

get\_rails\_helpers

Retrieves Rails helpers in the project. Results are paginated and can be filtered by FQN and directory.

**Parameters:**

-   `page`: Page number for pagination.

-   `page_size`: Number of items per page.

-   `included_fqn_filters`: List of FQN patterns to include.

-   `excluded_fqn_filters`: List of FQN patterns to exclude.

-   `included_directory_filters`: List of directories to include.

-   `excluded_directory_filters`: List of directories to exclude.

get\_rails\_views

Retrieves Rails views in the project. Results are paginated and can be filtered by partiality, layout, controller association, path, and controller directory/FQN.

> ### note
>
> Filters related to controller directory/FQN apply to the controller associated with the view, not the view file itself

**Parameters:**

-   `page`: Page number for pagination.

-   `page_size`: Number of items per page.

-   `partiality_filter`: Filter to include only partial views, non-partial views, or both.

-   `layout_filter`: Filter to include only layout views, non-layout views, or both.

-   `controller_filter`: Filter to include only views with associated controllers.

-   `included_path_filters`: List of view paths to include.

-   `excluded_path_filters`: List of view paths to exclude.

-   `included_controller_fqn_filters`: List of controller FQNs to include.

-   `excluded_controller_fqn_filters`: List of controller FQNs to exclude.

-   `included_controller_directory_filters`: List of controller directories to include.

-   `excluded_controller_directory_filters`: List of controller directories to exclude.

get\_rails\_mailers

Retrieves Rails mailers in the project. Results are paginated and can be filtered by FQN and directory.

**Parameters:**

-   `page`: Page number for pagination.

-   `page_size`: Number of items per page.

-   `included_fqn_filters`: List of FQN patterns to include.

-   `excluded_fqn_filters`: List of FQN patterns to exclude.

-   `included_directory_filters`: List of directories to include.

-   `excluded_directory_filters`: List of directories to exclude.
