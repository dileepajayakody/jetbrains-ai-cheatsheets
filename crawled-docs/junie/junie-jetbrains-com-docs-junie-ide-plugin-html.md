# Junie IDE plugin

Last modified: 10 July 2026

The recommended way to use Junie is from the single [AI Chat in your JetBrains IDE](https://www.jetbrains.com/help/ai-assistant/ai-chat.html): select Junie by JetBrains from the list of supported coding agents and have it downloaded automatically.

![Junie in ai chat](img/junie/junie_in_ai_chat.png "Junie in ai chat")

> ### tip
>
> The AI Chat tool window is part of JetBrains' [AI Assistant](https://www.jetbrains.com/help/ai-assistant/installation-guide-ai-assistant.html) plugin.

Installing the [Junie plugin](https://plugins.jetbrains.com/plugin/26104-jetbrains-junie) manually is required only if you want to use Junie from a separate tool window. This page describes how to install and work with the Junie plugin outside of the AI Chat of your JetBrains IDE.

## Install the Junie plugin

> ### tip
>
> Minimum IDE version requirements
>
> The Junie plugin requires IDE version 2024.3.2 or later for [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/), [PyCharm Pro](https://www.jetbrains.com/pycharm/), [WebStorm](https://www.jetbrains.com/webstorm/), and [GoLand](https://www.jetbrains.com/go/); version 2025.1 or later for [IntelliJ IDEA Community](https://www.jetbrains.com/idea/), [PhpStorm](https://www.jetbrains.com/phpstorm/), [RubyMine](https://www.jetbrains.com/ruby/), and [RustRover](https://www.jetbrains.com/rust/); and version 2025.2.1 or later for [CLion](https://www.jetbrains.com/clion/) and [Rider](https://www.jetbrains.com/rider/).

Junie is also available in [Android Studio](https://developer.android.com/studio) – the official IDE for Android app development, created by Google and based on IntelliJ IDEA by JetBrains.

### Install Junie from Marketplace

1.  In your JetBrains IDE, press ⌘Cmd0, to open settings and then select Plugins.

2.  Click the Marketplace tab and type the plugin name in the search field.

    ![Install Junie from Marketplace](img/junie/install_junie_from_marketplace.png "Install Junie from Marketplace")

3.  Click Install.

### Install Junie from disk

1.  Download the plugin from the [JetBrains Junie plugin page](https://plugins.jetbrains.com/plugin/26104-jetbrains-junie) in JetBrains Marketplace.

2.  In your JetBrains IDE, press ⌘Cmd0, to open settings and then select Plugins.

3.  On the Plugins page, click ![The Settings button](img/junie/app.expui.general.settings.svg "The Settings button") and then click Install Plugin from Disk.

    ![Install Plugin from Disk](img/junie/py_install_plugin_from_disk.png "Install Plugin from Disk")

4.  In the dialog that opens, set the path to the downloaded plugin `.zip` file and click OK.

> ### warning
>
> Plugins that are installed from disk do not receive automatic updates from JetBrains Marketplace and need to be updated manually.

The installed plugin adds a ! Junie icon to the IDE sidebar on the right. You can also open the Junie tool window by selecting View | Tool Windows | Junie in the main menu.

![Junie tool window](img/junie/junie-tool-window.png "Junie tool window")

## Licensing and subscriptions

Junie is powered by the [JetBrains AI](https://www.jetbrains.com/ai-ides/) service which connects you, as a product user, to different external large language models (LLMs) and enables AI features.

### Sign up for a trial

To access the JetBrains AI service, you need to acquire a license. Before [acquiring](/docs/junie-ide-plugin.html#get_jb_ai_license) one, you can sign up for a limited trial that includes 30 days of AI Pro usage.

To start a trial:

1.  Log in to your [JetBrains Account](https://account.jetbrains.com/).

2.  Open the IDE where you want to try Junie.

3.  Install the Junie plugin.

4.  Once installed, open the Junie tool window and click Start Free Trial.

    ![Ai start free trial junie](img/junie/ai_start_free_trial_junie.png "Ai start free trial junie")

In some cases, you may be asked to link a credit card to your JetBrains Account. If prompted, in your account, navigate to Payment Methods, click Add credit card, and provide the required information.

After this, your free trial will be linked to your [JetBrains Account](https://account.jetbrains.com/). Once it expires, you can either switch to a paid license or you will be moved to the **AI Free** tier.

> ### tip
>
> If you have the [AI Assistant plugin installed](https://www.jetbrains.com/help/ai-assistant/installation-guide-ai-assistant.html#install-ai-assistant-plugin-and-activate-license), you can also sign up for the JetBrains AI trial [from the AI Chat tool window](https://www.jetbrains.com/help/ai-assistant/licensing-and-subscriptions.html#sign_up_for_a_trial).

### Acquire the license

To acquire the JetBrains AI license:

1.  Log in to your [JetBrains Account](https://account.jetbrains.com/).

2.  Navigate to the [AI in IDEs](https://www.jetbrains.com/ai-ides/buy) webpage.

3.  Select the license tier you want to acquire and proceed to checkout.

4.  On the **eStore Order Checkout** page, enter all required information and submit your order.

Once the order is processed, the purchased JetBrains AI license will be linked to your [JetBrains Account](https://account.jetbrains.com/).

### Contact support

If you need any help regarding your license, you can [contact our support team](https://intellij-support.jetbrains.com/hc/en-us/requests/new?ticket_form_id=66731).

Read more:

-   [JetBrains AI license tiers](https://www.jetbrains.com/help/ai-assistant/licensing-and-subscriptions.html#ai-assistant-license-tiers)

-   [Get JetBrains AI license](https://www.jetbrains.com/help/ai-assistant/licensing-and-subscriptions.html#get-ai-assistant-license)

-   [Manage Top-up AI Credits](https://www.jetbrains.com/help/ai-assistant/licensing-and-subscriptions.html#manage-top-up-ai-credits)

-   [JetBrains AI Terms of Service](https://www.jetbrains.com/legal/docs/terms/jetbrains-ai-service/)

-   [JetBrains AI Data Collection and Use Policy](https://www.jetbrains.com/help/ai/data-collection-and-use-policy.html)

## Agent modes

Modes in Junie are agent configurations that enable tailoring Junie's behavior to different types of tasks.

### Code mode

In code mode, Junie breaks the task into a multistep plan and executes the proposed plan while reporting back to the user on the progress. To execute the task, it can autonomously run terminal commands, create new files, write or edit code, run tests, and verify the changes.

![Junie code mode](img/junie/junie_code_mode.png "Junie code mode")

When the task is done, you can give Junie follow-up instructions, keep the changes and start a new task, or decline the changes and roll everything back.

### Ask mode

In ask mode, Junie operates in read-only capacity: it can explore files, analyze code, and understand project structure, but cannot modify the code or the project files.

Use ask mode to get answers to your questions, explore and understand the codebase and the project structure, collaborate with Junie on the action plan, or brainstorm new features and improvements.

![img/junie/junie\_ask\_mode.png](img/junie/junie_ask_mode.png)

Gif

### Switching between modes

To switch between modes, use the mode picker dropdown in the prompt window. Select Auto to have Junie figure out which mode to use on its own.

![Junie mode picker](img/junie/junie_mode_picker.png "Junie mode picker")

## Brave mode

You can authorize Junie to execute all potentially sensitive actions without user approval by selecting Brave Mode in Junie's task window. However, using brave mode is not recommended. Opt for [adding actions to the Action Allowlist](/docs/junie-ide-plugin.html#action-allowlist) whenever possible.

![Enable brave mode checkbox](img/junie/enable_brave_mode_checkbox.png "Enable brave mode checkbox")

## Action Allowlist

Most terminal commands, code execution, and execution of MCP tools are considered to be sensitive actions, and Junie by default requires explicit approval from the user for executing them. With [Action Allowlist](action-allowlist.html), you can specify the actions and commands that Junie is allowed to always execute without user approval.

### Add rules to Action Allowlist

#### From Junie's tool window

You can add rules to the Action Allowlist right from Junie's tool window while the agent is executing the task. To do so, click ![More actions](img/junie/app-client.actions.more.svg "More actions") next to the executed action and select either of the following:

-   Allow this command to add only this particular command to the Action Allowlist.

-   Allow similar commands to have Junie generate a regular expression (Regex) for this command pattern and add it to the Action Allowlist.

    For example, for the `git log --oneline -2` command, a `^\Qgit log --oneline \E\S+$` RegEx will be added.

-   Allow all action type commands to add all actions of this type to the Action Allowlist.

-   Allowlist to open the [Action Allowlist settings page](action-allowlist.html).

![Add terminal command to Allowlist](img/junie/add_terminal_command_to_allowlist_with_Junie.png "Add terminal command to Allowlist")

#### In the settings

To view and edit the full list of currently allowed actions or add specific rules, go to [Settings | Tools | Junie | Action Allowlist](action-allowlist.html).

## Restrict access to files or folders

You can restrict Junie from processing the contents of specific files or folders by creating and configuring an `.aiignore` file in the project root directory. If a file or folder is on the `.aiignore` list, Junie will ask for explicit approval before viewing or editing it.

> ### tip
>
> Only the contents of files listed in `.aiignore` are protected. Junie will still have access to the file and folder names.

> ### tip
>
> Junie might still have access to the files listed in `.aiignore` in the following cases:
>
> -   If Brave Mode is turned on.
>
> -   When executing a command that is added to the Action Allowlist — if such command references the files and folders listed in `.aiignore`.
>

The `.aiignore` file follows the same [syntax and pattern format](https://git-scm.com/docs/gitignore) as the `.gitignore` file.

### Add .aiignore file

To add the `.aiignore` file, click ![Add button](img/junie/app-client.expui.general.add.svg "Add button") on the prompt panel and select Create AI ignore file.

![Junie create aiignore](img/junie/junie_create_aiignore.png "Junie create aiignore")

A configured `aiignore` file might look as follows:

```
.aiignore
```

## Diffs and review

### Diff viewer

As Junie reports which project files it adds or edits, it also provides links to view the code changes in the diff viewer.

![img/junie/junie\_diff\_for\_file.png](img/junie/junie_diff_for_file.png)

Gif

### Apply/reject

When Junie completes the task execution, all changed and added files are listed in the Done panel.

From here, you can review and selectively revert the code changes file by file before accepting or rejecting the prompt execution result.

![Junie done panel](img/junie/junie_done_panel.png "Junie done panel")

### Open Junie's terminal

You can open Junie's terminal to view the output of the CLI commands that the agent runs or provide user input in case the currently executed command is waiting for it.

![img/junie/open\_terminal.png](img/junie/open_terminal.png)

Gif

## Guidelines

Guidelines allow you to provide persistent, reusable context to the agent. Junie adds this context to every task it works on.

Guidelines are stored in the `.junie/AGENTS.md` file in the root project directory, so you can version-control them and reuse at the project level. For more information on the format, see the [AGENTS.md](https://agents.md/) documentation.

When Junie starts a task, it looks for guidelines in the following order:

1.  Custom path: If a specific path to guidelines is specified in the IDE's project settings (**Settings | Tools | Junie | Project Settings**).

2.  `.junie/AGENTS.md`: This is the most preferred standard location.

3.  `AGENTS.md` in the project root folder: If no file is found in the `.junie` folder, the project root is checked.

4.  Legacy locations (deprecated):

    -   `.junie/guidelines.md`

    -   `.junie/guidelines/` directory (it collects the contents of all `.md` files inside).

## MCP configuration

You can connect Junie to [Model Context Protocol (MCP) servers](https://github.com/modelcontextprotocol/servers). This will provide Junie with executable functionality for working with data sources and tools, such as file systems, productivity tools, or databases.

When running a prompt, Junie analyzes what commands registered with the configured MCP servers as [available tools](/docs/junie-ide-plugin.html#view-available-tools) are relevant, and executes them through the respective MCP server.

### Add an MCP server

To connect Junie to an MCP server, add this server's JSON configuration to `.junie/mcp/mcp.json` either at the project level or globally.

-   Global configuration. The MCP servers added via the Tools | Junie | MCP Settings page in your Jetbrains IDE settings are saved to the `~/.junie/mcp/mcp.json` file in the home directory. Such servers are available globally for all projects that are opened in the IDE.

-   Project-level configuration. To configure an MCP server at the project level, add an `mcp.json` file manually to the `.junie/mcp/` folder in the project root.

Where to get an MCP server

There is a variety of local and remote MCP servers available, depending on your use case and setup. As a starting point, you can explore the reference servers provided in the [official MCP repository](https://github.com/modelcontextprotocol/servers), which includes examples, usage instructions, and configuration details.

For example, a configuration that sets up a [GitHub MCP server](https://github.com/github/github-mcp-server) looks as follows:

```
{
    "mcpServers": {
        "github": {
            "command": "docker",
            "args": [
                "run",
                "-i",
                "--rm",
                "-e",
                "GITHUB_PERSONAL_ACCESS_TOKEN",
                "ghcr.io/github/github-mcp-server"
            ],
            "env": {
                "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_PAT"
            }
        }
    }
}
```

### Authentication

At the moment, Junie does not support security tokens in MCP configs. As a workaround, you can load environment variables from Docker's `.env` file. For example, in the GitHub MCP server config example, you can move the `"GITHUB_PERSONAL_ACCESS_TOKEN"` secret to the `~/.env.mcp` file:

```
{
    "mcpServers": {
        "github": {
            "command": "docker",
            "args": [
                "run",
                "-i",
                "--rm",
                "--env-file",
                "~/.env.mcp",
                "ghcr.io/github/github-mcp-server"
            ]
        }
    }
}
```

If the MCP server is not run via Docker, you can preload environment variables from a file using an additional script, for example `npx dotenv -- npx ...`.

### Manage configured MCP servers

The MCP servers configured at both global and project levels are displayed on the MCP Servers list in Settings (⌘Cmd0,) | Tools | Junie | MCP Settings.

#### Server connection status

To see the connection status for a configured server, check the Status column. In case of a connection failure, hover over the status icon to see the error message.

![Mcp server connection error](img/junie/mcp_server_connection_error.png "Mcp server connection error")

#### Edit server configuration

To edit a configuration, select it on the list and click ![Edit](img/junie/app.expui.general.edit.svg "Edit") on the toolbar.

![List of mcp configurations](img/junie/list_of_mcp_configurations.png "List of mcp configurations")

### View available tools

Actions that Junie can perform through configured MCP servers are listed as available tools.

To view what tools are available for a specific MCP server, navigate to Settings (⌘Cmd0,) | Tools | Junie | MCP Settings, locate the server on the list, and expand the Status drop-down list.

> ### tip
>
> MCP tool limit
>
> To effectively choose among the available tools, Junie supports a maximum of 100 tools from all configured MCP servers.

![Junie available tools](img/junie/junie_available_tools.png "Junie available tools")

Thanks for your feedback!

Was this page helpful?

YesNo
