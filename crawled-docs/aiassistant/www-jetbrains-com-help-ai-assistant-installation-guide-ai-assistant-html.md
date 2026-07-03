# Install AI Assistant

Last modified: 26 June 2026

The [AI Assistant plugin](https://plugins.jetbrains.com/plugin/22282-ai-assistant) is **not bundled** with [JetBrains IDEs](about-ai-assistant.html#ide-compatibility) and is **disabled** by default\[1\].

It does not access your code unless you install the plugin, [activate](activation-scenarios.html) it, and explicitly agree to the applicable terms of service, including the [JetBrains AI Terms of Service](https://www.jetbrains.com/legal/docs/terms/jetbrains-ai-service/), the [JetBrains AI Acceptable Use Policy](https://www.jetbrains.com/legal/docs/terms/jetbrains-ai/acceptable-use/), or any third-party provider terms.

> ### note
>
> \[1\]AI Assistant is enabled by default **only** for organizations. To disable it, follow the instructions provided [here](https://sales.jetbrains.com/hc/en-gb/articles/14753675807506-How-do-I-enable-AI-Assistant-for-my-company#manage_in_teams).

## System requirements

By default, AI Assistant relies on cloud-hosted LLMs, so there is no load on your local hardware. The same generally applies to energy consumption, since cloud models do not increase your machine's power usage. Therefore, you can refer to the system requirements of the specific IDE in which you use AI Assistant:

-   ![CLion](https://resources.jetbrains.com/help/img/idea/2026.1/CLion_icon.png "CLion")   [CLion](https://www.jetbrains.com/help/clion/installation-guide.html#requirements)

-   ![DataGrip](https://resources.jetbrains.com/help/img/idea/2026.1/DataGrip_icon.png "DataGrip")   [DataGrip](https://www.jetbrains.com/help/datagrip/installation-guide.html#requirements)

-   ![DataSpell](https://resources.jetbrains.com/help/img/idea/2026.1/DataSpell_icon.png "DataSpell")   [DataSpell](https://www.jetbrains.com/help/dataspell/installation-guide.html#requirements)

-   ![GoLand](https://resources.jetbrains.com/help/img/idea/2026.1/GoLand_icon.png "GoLand")   [GoLand](https://www.jetbrains.com/help/go/installation-guide.html#requirements)

-   ![IntelliJ IDEA](https://resources.jetbrains.com/help/img/idea/2026.1/IntelliJ_IDEA_icon.png "IntelliJ IDEA")   [IntelliJ IDEA](https://www.jetbrains.com/help/idea/installation-guide.html#requirements)

-   ![PhpStorm](https://resources.jetbrains.com/help/img/idea/2026.1/PhpStorm_icon.png "PhpStorm")   [PhpStorm](https://www.jetbrains.com/help/phpstorm/installation-guide.html#requirements)

-   ![PyCharm](https://resources.jetbrains.com/help/img/idea/2026.1/PyCharm_icon.png "PyCharm")   [PyCharm](https://www.jetbrains.com/help/pycharm/installation-guide.html#requirements)

-   ![Rider](https://resources.jetbrains.com/help/img/idea/2026.1/Rider_icon.png "Rider")   [Rider](https://www.jetbrains.com/dotnet/download/system-requirements/#section-rider)

-   ![RubyMine](https://resources.jetbrains.com/help/img/idea/2026.1/RubyMine_icon.png "RubyMine")   [RubyMine](https://www.jetbrains.com/help/ruby/installation-guide.html#requirements)

-   ![RustRover](https://resources.jetbrains.com/help/img/idea/2026.1/RustRover_icon.png "RustRover")   [RustRover](https://www.jetbrains.com/help/rust/installation-guide.html#requirements)

-   ![WebStorm](https://resources.jetbrains.com/help/img/idea/2026.1/WebStorm_icon.png "WebStorm")   [WebStorm](https://www.jetbrains.com/help/webstorm/installation-guide.html#requirements)

However, if you plan to use [local models](use-custom-models.html), you will need to assess the hardware requirements and energy consumption yourself, as these third-party models are not provided by JetBrains. AI Assistant simply enables integration with the local models of your choice.

> ### note
>
> The **AI Enterprise** plan allows you to run LLMs within your organization’s environment, which may require additional hardware resources. If you are interested in the **AI Enterprise** plan, please contact our [Sales Team](https://www.jetbrains.com/ide-services/#contact-sales).

## Prerequisites

Before installing the AI Assistant plugin, make sure the following conditions are met:

-   **IDE Version**

    -   AI Assistant requires IDE version **2023.3** or later.

    -   For Community Edition IDEs, version **2024.1.1** or later is required (version **2025.1** or later for PyCharm Unified).

    -   To use an organizational JetBrains AI subscription with a Community Edition IDE, update to version **2024.2.1** or later. Earlier Community Edition versions (**2024.1.1** – **2024.2**) support only [individual subscriptions](https://www.jetbrains.com/ai/?plan=individuals).

-   **Organizational access**

    -   If you are using a commercial IDE license provided by your employer, make sure that JetBrains AI is enabled in your organization.

## Install AI Assistant

You can install AI Assistant with a single click using the ! AI Chat tool window, ! JetBrains AI widget, or [JetBrains Marketplace](https://plugins.jetbrains.com/):

AI Chat

JetBrains AI widget

JetBrains Marketplace

In the ! AI Chat tool window, click Install Plugin.

![AI Chat tool window](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_tool_window.png "AI Chat tool window")

This triggers the plugin installation.

> ### note
>
> The ! AI Chat tool window is not the AI Assistant plugin, and it has no access to your code.
>
> If you want to hide this tool window, refer to [Hide the AI Chat tool window and JetBrains AI widget](disable-ai-assistant.html#hide-ai-chat-and-jb-ai-widget).

In the ! JetBrains AI widget located in the window header, click Let's Go.

![Install from AI Hub](https://resources.jetbrains.com/help/img/idea/2026.1/ai_hub_install_plugin.png "Install from AI Hub")

This triggers the plugin installation.

> ### note
>
> The ! JetBrains AI widget is not the AI Assistant plugin, and it has no access to your code.
>
> If you want to hide this widget, refer to [Hide the AI Chat tool window and JetBrains AI widget](disable-ai-assistant.html#hide-ai-chat-and-jb-ai-widget).

1.  Open Settings | Plugins | Marketplace and type AI Assistant in the search field.

    ![AI Assistant in the list of available plugins in the marketplace](https://resources.jetbrains.com/help/img/idea/2026.1/install_ai_marketplace.png "AI Assistant in the list of available plugins in the marketplace")

2.  Click Install.

After installation, AI Assistant checks your license status:

-   If you already have an active JetBrains AI subscription, it will be automatically verified and activated.

-   If your JetBrains AI subscription has expired, you will receive the **AI Free** license tier with a possibility to upgrade to a different tier at any time.

-   If you are an owner of [All Products Pack](https://www.jetbrains.com/all/) or [dotUltimate](https://www.jetbrains.com/dotnet/), you will receive the **AI Pro** license tier.

-   If you are a new user and do not have a JetBrains AI subscription yet, you are [eligible](jetbrains-ai-subscription.html#sign_up_for_a_trial) for a 30-day trial of **AI Pro** license tier. The free trial will be linked to your [JetBrains Account](https://account.jetbrains.com/) and activated automatically.

-   If you do not have or prefer not to use a JetBrains AI subscription, you can [use](activation-scenarios.html) AI Assistant with external models or agents.

> ### tip
>
> You can [disable AI Assistant](disable-ai-assistant.html) any time you want.

## Manage plugin

Once the plugin is installed, you can control its key settings in the ! JetBrains AI widget.

![JetBrains AI key settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_hub_key_settings_key_elements.png "JetBrains AI key settings")

Using this widget, you can:

1.  Check your current subscription plan, which may be one of the following:

    -   **Trial** – a 30-day trial license tier (can also be **Pro Trial** or **Business Trial**).

    -   **Free** – the **AI Free** license tier.

    -   **Pro** – the **AI Pro** license tier.

    -   **Business** – the **AI Pro** license tier for organizations.

    -   **Ultimate** – the **AI Ultimate** license tier (both for personal use and organizations).

    -   **Enterprise** – the **AI Enterprise** license tier.

    > ### tip
    >
    > The displayed plan name indicates that your JetBrains AI license is active. You can click the link to open your [JetBrains Account](https://account.jetbrains.com/), where you can get more details about your plan.

2.  Track your quota and Top-up AI Credits usage:

    -   The **monthly credits left** counter shows how many AI Credits you have left out of your [subscription quota](licensing-and-subscriptions.html#ai-quota). The progress bar reflects overall usage and decreases as you use cloud-based features. The date under the progress bar indicates when the monthly quota resets.

    -   The **top-up credits** counter shows how many Top-up AI Credits you currently have, with an option to [add](licensing-and-subscriptions.html#add-top-up-ai-credits-using-widget) more, if needed.

        > ### note
        >
        > If you are using an account provided by your organization, the counter shows the number of **shared top-up credits** – Top-up AI Credits that come from a single pool shared by all members of your organization.
        >
        > ![Shared Top-up AI Credits](https://resources.jetbrains.com/help/img/idea/2026.1/ai_hub_quota_top_up_credits_counter_org.png "Shared Top-up AI Credits")
        >
        > The amount available to you is set by your administrator, but the actual number may be lower if your team has already used some credits.

3.  Configure AI Assistant settings:

    -   Navigate to AI Assistant [settings](settings-reference-ai-assistant.html).

    -   Disable AI Assistant either for the [project](disable-ai-assistant.html#disable-ai-assistant-for-project) or [permanently](disable-ai-assistant.html#completely-disable-ai-assistant).

    -   Check the available AI Assistant features.

Additionally, if your quota is nearly used up, your subscription is about to expire, or there is an issue that requires your attention, you will receive a corresponding notification in this widget.

Examples of such notifications include:

Quota limit is reached

Subscription has expired

Issue detected

![Quota limit reached](https://resources.jetbrains.com/help/img/idea/2026.1/ai_hub_notification_quota_limit_reached.png "Quota limit reached")

![Subscription has expired](https://resources.jetbrains.com/help/img/idea/2026.1/ai_hub_notification_plan_expired.png "Subscription has expired")

![Detected issue](https://resources.jetbrains.com/help/img/idea/2026.1/ai_hub_notification_no_local_models.png "Detected issue")

## Update AI Assistant plugin

When a new version of the AI Assistant plugin becomes available, you will receive a notification in the ! AI Chat or ! JetBrains AI widget.

![Update is available](https://resources.jetbrains.com/help/img/idea/2026.1/ai_hub_notification_update_available.png "Update is available")

To install a new version:

1.  Click Update AI Assistant in the notification.

2.  In the Plugin Updates dialog, click Update.

    ![Plugin Updates dialog](https://resources.jetbrains.com/help/img/idea/2026.1/ai_plugin_updates_dialog.png "Plugin Updates dialog")

    > ### tip
    >
    > You can review the changes in the What's New tab or find all relevant information about the plugin in the other tabs.
    >
    > Additionally, you can choose how to proceed with the update:
    >
    > -   Click Ignore this update to skip the suggested update.
    >
    > -   Select Enable auto-update to automatically install the update when it becomes available.
    >
