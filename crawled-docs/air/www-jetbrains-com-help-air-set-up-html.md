# Set up Air

Last modified: 20 August 2026

JetBrains Air requires a small amount of setup before you can run agentic tasks. You need to connect at least one AI provider, and you may need additional tooling depending on how you want to run tasks.

## Desktop and web versions

JetBrains Air comes in two versions:

-   **Desktop app** – runs on your machine. Use it to run tasks locally or in the cloud, with full access to your local project, tools, and run environments.

-   **Web version** – [the web version of JetBrains Air](https://air.jetbrains.cloud) runs in the browser. Use it to run cloud tasks and automations from anywhere, without a local setup.

    The web version is currently available only to organizations. You sign in with your JetBrains Account, and an organization administrator enables and manages access. See [Set up Air for your organization](/help/air/set-up.html#setup-admin).

## Required tools

Make sure the following tools are installed:

-   **Git** – required for working with repositories and task branches.

-   **Docker** and **Docker Desktop** – required only if you want to run tasks in containers.

    Other Docker runtimes (for example, Colima) may work but can require additional configuration. If you use an alternative runtime, make sure Docker commands work from the terminal before you use Docker tasks in JetBrains Air.

## Install JetBrains Air

You can install the desktop version of JetBrains Air on the following OSs:

-   **macOS** – download JetBrains Air for macOS from the [official page at air.dev](https://air.dev/) or install it through [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

-   **Linux** – run the install script:

    ```
    curl -fsSL https://jb.gg/air-install.sh | sh
    ```

    You can also install JetBrains Air for Linux through [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

-   **Windows** – install JetBrains Air for Windows through [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

## Connect AI providers

AI providers are required to run agentic tasks. On the first start of JetBrains Air, you must connect at least one provider before you can continue.

If you want to connect additional providers later, use Settings.

### Connect an AI provider

1.  Open Settings (Ctrl0,) and go to Account | AI Providers.

2.  Click Connect next to the provider you want to use.

    If you have a JetBrains AI subscription, connect JetBrains AI. It works as a universal provider and unlocks multiple agents (Claude Agent, OpenAI Codex, Gemini CLI, and Junie) under one subscription, with usage tracked through [AI credits](ai-credits.html).

    If you already use a specific provider account, connect it directly.

3.  Follow the login flow. For most providers, you can choose the account type you already use, for example, a subscription account or an API billing account.

EAP

## Set up Air for your organization

> ### tip
>
> These instructions are for organization administrators.

JetBrains Air is available to everyone, including individual developers. An organization unlocks more ways to work (the web version of Air, cloud tasks, and automations) and gives you central control over the AI features and agents your developers can use.

Organization access is managed through JetBrains Central Console and relies on the following:

-   Your organization has an account in [JetBrains Central Console](https://console.jetbrains.cloud/).

-   Your developers are members of that organization.

-   Each developer signs in to JetBrains Air with their JetBrains Account in Settings | Account | AI Providers. They then use the provided AI agents based on the applied AI policies.

As an administrator, you set up the web version of Air, give Air access to your organization repositories, and manage what developers can do with AI, as described below.

### Set up the web version of Air

The first time you open [the web version of JetBrains Air](https://air.jetbrains.cloud) as an organization administrator, a setup wizard guides you through enabling the web version for your organization. After you finish it, the web version of JetBrains Air becomes available to organization developers for cloud tasks and automations.

![The Set up your organization wizard step showing the organization name, member count, AI access, and AI credits](https://resources.jetbrains.com/help/img/air/air-web-org-setup-review.png "The Set up your organization wizard step showing the organization name, member count, AI access, and AI credits")

> ### note
>
> To run the wizard, sign in with a JetBrains Account that has the organization administrator role in JetBrains Central Console.

### Set up repository access for cloud tasks

Cloud environments don't have your project checked out, so developers can run cloud tasks only on the repositories that JetBrains Air can reach in your VCS provider: GitHub, GitLab, etc.

To make organization repositories available in JetBrains Air, the JetBrains Air connection app must first be installed for that organization in GitHub.

This first step must be done by a user with sufficient administrative permissions in that organization – see [Who can grant the app access to a repository](connect-repositories.html#who_can_grant_access).

### Grant JetBrains Air access to organization repositories

1.  In [the web version of JetBrains Air](https://air.jetbrains.cloud), go to Settings | VCS Providers.

2.  Find GitHub and click Connect.

3.  In the GitHub flow opened by the web version of JetBrains Air, install the [JetBrains Air](https://github.com/apps/jetbrains-air) connection app for the organization.

4.  Grant the app access either to all organization repositories or only to selected repositories.

    Only the repositories granted to the app at this stage can later appear in JetBrains Air.

After that, users from that organization can connect GitHub in JetBrains Air and access the repositories that are available to them according to GitHub's access rules.

### Manage AI access for your organization

Once your developers sign in to JetBrains Air with their JetBrains Account, you control what they can do with AI from [JetBrains Central Console](https://console.jetbrains.cloud/). AI access is governed by policies in the AI governance section. These policies apply wherever a developer is signed in with their organization JetBrains Account – across JetBrains Air (in both local and cloud tasks, and in the desktop and web versions), and in AI Assistant in JetBrains IDEs.

You can open JetBrains Central Console directly at [https://console.jetbrains.cloud/](https://console.jetbrains.cloud/), or from the web version of JetBrains Air: open your account menu and select Organization Dashboard.

By default, every organization developer has AI access, can use all agents, and can run tasks in the cloud. To apply stricter rules, change the AI access settings or create a policy, as described below.

![The Change AI access settings dialog in JetBrains Central Console with AI access turned on for everyone in the organization](https://resources.jetbrains.com/help/img/air/jetbrains-central-ai-access-settings.png "The Change AI access settings dialog in JetBrains Central Console with AI access turned on for everyone in the organization")

The following table shows what controls AI access for your organization developers, where to configure it, and where it applies:

Where to configure

Applies to

Allow AI access and limit usage

Turn AI access on or off for developers and set AI credit limits (AI governance | Settings). See [AI access](https://www.jetbrains.com/help/jetbrains-console/eap/ai-access.html).

Local and cloud tasks, desktop and web

Limit the available agents

Create a policy, then select the AI providers on its General tab and the agents on its Agents tab (AI governance | Policies). See [Agents](https://www.jetbrains.com/help/jetbrains-console/eap/ai-policies-configure.html#agents-tab).

Local and cloud tasks, desktop and web

Allow running tasks in the cloud

Create a policy, then turn on Cloud tasks on its General tab (AI governance | Policies). See [Policy settings](https://www.jetbrains.com/help/jetbrains-console/eap/ai-policies-configure.html#policy-settings).

Cloud tasks only, desktop and web

Allow connectors

Create a policy, then turn on Other MCP servers on its MCP tab (AI governance | Policies). Without this, [connectors](connectors.html) don't appear in the cloud environment. See [MCP policy settings](https://www.jetbrains.com/help/jetbrains-console/eap/ai-policies-configure.html#mcp-tab).

Cloud tasks and automations, web

Use your own AI provider accounts (a subscription or BYOK)

Developers can connect their own AI provider accounts in the JetBrains Air desktop app (Settings | Account | AI Providers). This isn't managed in JetBrains Central Console.

Desktop only (local tasks); not available for cloud tasks

For the full policy reference, see [Configure AI policies](https://www.jetbrains.com/help/jetbrains-console/eap/ai-policies-configure.html#configure-policies) in the JetBrains Central Console documentation.

> ### note
>
> Gemini CLI is temporarily unavailable for cloud tasks.
