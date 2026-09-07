1.  [Getting started](getting-started.html)

2.  [Credits and usage](#0)

# Credits and usage

Last modified: 18 August 2026

Every task you run consumes credits from the provider that runs it (for details on how to connect a provider, see [Connect an AI provider](set-up.html#connect-ai-provider)).

-   **JetBrains AI account** – The provider you connect with your JetBrains Account spends JetBrains AI credits from your subscription. You have a monthly credit limit; if you belong to an organization, an administrator sets it in [JetBrains Central Console](https://console.jetbrains.cloud/) under AI governance | Settings. See [Manage AI access for your organization](set-up.html#setup-org-ai-access).

-   **Your own provider account** – An Anthropic, OpenAI, or Google account that you connect directly spends that account's own balance. There are two kinds:

    -   A **subscription** you already pay for, such as Claude Pro, Max, or Team. Tasks count against that plan's quota.

    -   An **API billing** account that you connect with your own key (BYOK). Tasks spend your API balance with that provider.

-   **[Agents you add yourself](select-agents-and-models.html#add-acp-agent)** spend whatever their own subscription is metered in.

## Which credits a task spends

-   **Local tasks** follow the rule "**your own account comes before JetBrains AI credits**". If you connected your own account for the provider behind the agent, the task spends that account's subscription quota or API balance. It spends JetBrains AI credits only when the agent has no account of your own connected.

    > ### note
    >
    > **Known limitation**: [Docker tasks](execution-environments.html#run_in_docker) can't use a Claude subscription. In Docker, Claude Agent runs on Anthropic API billing or on JetBrains AI credits.

-   **[Cloud tasks](cloud-tasks.html)** always spend JetBrains AI credits.

-   **[Automations](automations.html)** always spend JetBrains AI credits too. Whose credits a run spends depends on whether the automation is personal or shared with a project – see [AI credits for automation runs](create-automation.html#automation_ai_credits).

## Check how much you've used

JetBrains Air tracks usage for JetBrains AI only. For a provider you connected directly, check the usage in that provider's own app or console, the same way you would outside JetBrains Air.

### Check your JetBrains AI credits in the desktop app

1.  Open the settings menu at the bottom of the tool panel on the right.

2.  Read the counter at the top of the menu. It shows your credit usage and the date your limit resets. To update it, click the refresh icon.

    ![The account menu in the desktop app, showing monthly credits used, the usage bar, and the renewal date](https://resources.jetbrains.com/help/img/air/ai-credits-account-menu.png "The account menu in the desktop app, showing monthly credits used, the usage bar, and the renewal date")

The same counter appears next to the JetBrains provider in Settings | Account | AI Providers.

### Check your JetBrains AI credits in the web version

1.  Open [the web version of JetBrains Air](https://air.jetbrains.cloud).

2.  Go to Settings | Account. Your account card shows how much of your credit limit is still available.
