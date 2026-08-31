# Headless mode

Last modified: 28 August 2026

> ### tip
>
> Junie CLI is currently in an [Early Access Program (EAP)](https://junie.jetbrains.com/tos-eap).

You can run Junie CLI in headless mode without interactive UI in CI/CD environments and build pipelines. Such integration will automatically trigger AI code reviews or other prompts as part of your CI or build pipeline.

### Installation

Linux / macOS

Windows

```
curl -fsSL https://junie.jetbrains.com/install.sh | bash
```

```
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex (irm 'https://junie.jetbrains.com/install.ps1')"
```

### Authentication token

Junie CLI requires an authentication token to run. To generate the token, go to [junie.jetbrains.com/cli](https://junie.jetbrains.com/cli).

### Usage

Authenticate Junie CLI using the `--auth` option and run the `junie` command with your prompt as a positional argument:

```
junie --auth="$JUNIE_API_KEY" "Review and fix any code quality issues in the latest commit"
```

To list all available command options, run:

```
junie --help
```

For the full list of available options and environment variables, see [reference](parameters.html).

### Project trust

Interactive UI launches enforce project trust: Junie asks you to trust a project before it loads project-scoped inputs. Non-interactive runs — one-shot prompts, piped-input tasks, ACP, and Gateway — cannot ask for a trust decision, so they are trusted by design and load the project's Junie configuration (MCP servers, hooks, agents, skills, and guidelines) without prompting. Only run Junie non-interactively in projects you trust.

To manage trust for interactive sessions, start `junie` interactively and select Trust this project or Trust all projects in `<parent>`. Delete the corresponding marker under `<Junie Home>/trust` to revoke exact or inherited parent trust for the next launch.

Thanks for your feedback!

Was this page helpful?

YesNo
