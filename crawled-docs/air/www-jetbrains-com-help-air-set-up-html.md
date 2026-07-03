# Set up Air

Last modified: 17 June 2026

JetBrains Air requires a small amount of setup before you can run agentic tasks. You need to connect at least one AI provider, and you may need additional tooling depending on how you want to run tasks.

## Required tools

Make sure the following tools are installed:

-   **Git** – required for working with repositories and task branches.

-   **Docker** and **Docker Desktop** – required only if you want to run tasks in containers.

    Other Docker runtimes (for example, Colima) may work but can require additional configuration. If you use an alternative runtime, make sure Docker commands work from the terminal before you use Docker tasks in JetBrains Air.

## Install JetBrains Air

-   **macOS**: Download JetBrains Air for macOS from the [official page at air.dev](https://air.dev/)

-   **Linux**: Install JetBrains Air for Linux through [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

-   **Windows**: Support for Windows is planned for 2026

## Connect AI providers

AI providers are required to run agentic tasks. On the first start of JetBrains Air, you must connect at least one provider before you can continue.

If you want to connect additional providers later, use Settings.

### Connect an AI provider

1.  Open Settings (⌘Cmd0,) and go to Account | AI Providers.

2.  Click Connect next to the provider you want to use.

    If you have a JetBrains AI subscription, connect JetBrains AI. It works as a universal provider and unlocks multiple agents (Claude Agent, OpenAI Codex, Gemini CLI, and Junie) under one subscription, with usage tracked through JetBrains AI credits.

    If you already use a specific provider account, connect it directly.

3.  Follow the login flow. For most providers, you can choose the account type you already use, for example, a subscription account or an API billing account.

## Keymap and general settings

You can customize editor behavior and UI preferences in Settings. For example, you can choose a keymap (multiple keymaps are supported, including IntelliJ IDEA and VS Code keymaps) and adjust general options.

Learn more in [Settings](settings.html).
