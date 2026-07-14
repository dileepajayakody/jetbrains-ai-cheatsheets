# Integration with JetBrains IDEs

Last modified: 10 July 2026

This page describes how Junie CLI integrates with JetBrains IDEs, what products are supported, which features depend on the JetBrains IDE connection, and how to inspect the connection with `/ide`.

## What JetBrains IDE integration does

When JetBrains IDE integration is available, Junie CLI can connect to the Junie plugin running inside a JetBrains IDE for the same project and use JetBrains IDE awareness for that session.

This improves features that depend on project understanding inside the IDE, such as symbol-aware search, safer code edits, code inspections, test workflows, and product-specific actions.

JetBrains IDE integration requires the Junie IDE plugin. For installation and setup details, see [Junie IDE plugin](junie-ide-plugin.html).

JetBrains IDE integration is passive from the CLI side:

-   The IDE plugin becomes available automatically when you open the same project.

-   The CLI discovers running IDE sessions automatically.

-   The CLI selects the best matching JetBrains IDE for the current working directory.

-   The CLI connects to the JetBrains IDE only when IDE-backed features are needed or when you inspect the state with `/ide`.

> ### note
>
> Junie CLI currently supports only JetBrains IDEs for this integration. It does not connect to non-JetBrains editors or IDEs.

## Supported JetBrains IDEs

The current IDE discovery implementation supports these JetBrains IDEs:

-   ![CLion](img/junie/CLion_icon.png "CLion") [CLion](https://www.jetbrains.com/clion/)

-   ![GoLand](img/junie/GoLand_icon.png "GoLand") [GoLand](https://www.jetbrains.com/go/)

-   ![IntelliJ IDEA](img/junie/IntelliJ_IDEA_icon.png "IntelliJ IDEA") [IntelliJ IDEA](https://www.jetbrains.com/idea/)

-   ![PhpStorm](img/junie/PhpStorm_icon.png "PhpStorm") [PhpStorm](https://www.jetbrains.com/phpstorm/)

-   ![PyCharm](img/junie/PyCharm_icon.png "PyCharm") [PyCharm](https://www.jetbrains.com/pycharm/)

-   ![Rider](img/junie/Rider_icon.png "Rider") [Rider](https://www.jetbrains.com/rider/)

-   ![RubyMine](img/junie/RubyMine_icon.png "RubyMine") [RubyMine](https://www.jetbrains.com/ruby/)

-   ![RustRover](img/junie/RustRover_icon.png "RustRover") [RustRover](https://www.jetbrains.com/rust/)

-   ![WebStorm](img/junie/WebStorm_icon.png "WebStorm") [WebStorm](https://www.jetbrains.com/webstorm/)

Support means that the CLI can detect installed and running instances of these products and match them to the current project when the [Junie plugin](junie-ide-plugin.html) is available.

## What features are affected

The JetBrains IDE connection affects user-visible features that benefit from the IDE understanding your project.

In practice, JetBrains IDE integration can improve tasks such as:

-   Code search with symbol awareness and project indexes.

-   Code edits that use the IDE understanding of your project structure.

-   Code inspections and structure-aware analysis.

-   Test discovery and test execution from the IDE project context.

-   Refactorings and other project-aware changes.

-   Product-specific workflows in IDEs such as CLion or Rider.

JetBrains IDE integration also improves `@` completions in the prompt. When the IDE is connected, Junie CLI can suggest not only project files and folders, but also classes and symbols known to the connected JetBrains IDE.

The CLI can also use JetBrains IDE context for the session, such as which files are currently open in the IDE.

If no JetBrains IDE is connected, Junie CLI can still work, but IDE-backed capabilities are unavailable.

## Requirements

For JetBrains IDE integration to work:

-   Open the target project in a supported JetBrains IDE.

-   Make sure the Junie plugin is installed and running.

-   Open the same project so the IDE integration can start.

-   Run Junie CLI from the same project or a child directory of that project.

If the project paths do not match, the CLI will not select that IDE session.

## Use the `/ide` command

Use `/ide` in Junie CLI to inspect the current JetBrains IDE integration state.

What `/ide` does:

-   Lists running IDEs and their states.

-   Allows you to switch between multiple IDEs and projects.

-   Helps install the plugin if it is missing.

### Possible states

State

Meaning

`Connected`

The CLI is connected to that JetBrains IDE and can use JetBrains IDE-backed features

`Connecting…`

The CLI found a matching JetBrains IDE and is opening the connection

`Auth required`

The JetBrains IDE session is running, but the current connection is no longer authorized

`Error`

The JetBrains IDE was found, but the connection failed for another reason

`Ready`

The Junie plugin for that JetBrains IDE is available and can be selected

`Missing`

The Junie plugin is not installed for that JetBrains IDE

`Not responding`

The Junie plugin is installed, but it is not responding

`Unsupported`

That JetBrains IDE version is too old for Junie IDE integration

### Notes

-   `/ide` is a status command. It does not start a JetBrains IDE or enable JetBrains IDE integration by itself.

-   The available features depend on the connected JetBrains IDE, the open project, and which capabilities are available in that session.

-   If several JetBrains IDEs are running, the CLI prefers the one whose project path matches the current working directory most closely.

-   `/ide` reports only JetBrains IDE integration state. It does not represent support for other editors or IDEs.

## Troubleshooting

Problem

What to check

`/ide` shows `Missing`

Install the Junie plugin for that JetBrains IDE, then wait a moment and run `/ide` again

`/ide` shows `Auth required`

Restart the JetBrains IDE, then run `/ide` again. If the problem stays, inspect `~/.junie/logs/junie.log`

`/ide` shows `Not responding`

Check whether the Junie plugin is enabled and update it to the latest version if needed

`/ide` shows `Error`

Check `~/.junie/logs/junie.log` for the connection error and verify that the JetBrains IDE project path matches the CLI working directory

`/ide` shows `Unsupported`

Update that JetBrains IDE to version `2026.1` or newer

`/ide` shows few available features after connecting

Verify that the JetBrains IDE session is fully loaded for that project and that the required JetBrains IDE features are available for that product and project

## Related documentation

-   [Using Junie in the terminal](junie-cli.html)

-   [Junie for ACP clients](junie-cli-acp.html)

-   [Junie IDE plugin](junie-ide-plugin.html)

Thanks for your feedback!

Was this page helpful?

YesNo
