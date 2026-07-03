1.  [Activate AI Assistant](activation-scenarios.html)

2.  [Use JetBrains AI subscription](#0)

# Use JetBrains AI subscription

Last modified: 22 April 2026

The instructions provided on this page apply when no authentication method is configured in AI Assistant.

If authentication is already configured, clear it in Settings | Tools | AI Assistant | Providers & API keys: [revoke](activate-agents.html#revoke-agent-authorization) agent authorization, [log out](licensing-and-subscriptions.html#log-out-of-jb-ai) of JetBrains AI, or set Provider to None if you use [BYOK](use-custom-models.html#provide-your-own-api-key).

You can activate AI Assistant using a JetBrains AI subscription for a fully integrated, ready-to-use experience.

This option gives you access to all AI Assistant features and all supported integrated agents.

You can start with a free trial or purchase a subscription.

For more information about available subscription plans, refer to the [JetBrains AI plans and usage](licensing-and-subscriptions.html) section.

## Sign up for a trial

Before purchasing a JetBrains AI subscription, you can sign up for a limited trial that includes **30** days of **AI Pro** usage. This option is available to users with paid and complimentary JetBrains IDE [licenses](/help/ai-assistant/jetbrains-ai-subscription.html#ide_license_types_eligible_for_a_trial).

To start a trial:

1.  Open the ! AI Chat tool window.

2.  Click Start Free Trial.

    ![Start Free Trial](https://resources.jetbrains.com/help/img/idea/2026.1/ai_start_free_trial.png "Start Free Trial")

3.  Click Verify Account. You will be redirected to your JetBrains Account, where you will need to link a payment card.

    ![Verify Account](https://resources.jetbrains.com/help/img/idea/2026.1/ai_verify_account.png "Verify Account")

4.  Link a payment card, then return to the IDE, and click Check Account Status.

    ![Check Account Status](https://resources.jetbrains.com/help/img/idea/2026.1/ai_card_linked.png "Check Account Status")

After completing these steps, your free trial will be linked to your [JetBrains Account](https://account.jetbrains.com/). A **Trial** label will appear in the AI Chat tool window to indicate that the trial has been successfully activated.

![Trial label](https://resources.jetbrains.com/help/img/idea/2026.1/ai_trial_label.png "Trial label")

When the trial expires, you can switch to a paid license of your choice. Otherwise, you will be automatically moved to the **AI Free** tier.

### Trial FAQ

Why can’t I start a free trial?

If you don’t see the option to start a free trial, check the following:

-   **Outdated IDE version**

    AI Assistant requires IDE version **2023.3** or later (**2024.1.1** or later for Community Editions and **2025.1** or later for PyCharm Unified). [Updating](installation-guide-ai-assistant.html#update-ai-assistant-plugin) your IDE to the latest version may resolve the issue.

-   **IDE license incompatibility**

    In IDE versions **2023.3**–**2024.2**, only users with a paid license can start a trial. Starting from version **2024.2.1**, this limitation is removed, so [updating](installation-guide-ai-assistant.html#update-ai-assistant-plugin) your IDE to the latest version may resolve the issue.

    Users with non-paid IDE licenses (trial, [students, teachers, or classrooms](https://www.jetbrains.com/academy/student-pack/#students), [open-source](https://www.jetbrains.com/community/opensource/#support), Community Edition IDEs, PyCharm Unified, EAP, or non-commercial licenses for [RustRover](https://www.jetbrains.com/rust/buy/?section=personal&billing=yearly), [WebStorm](https://www.jetbrains.com/webstorm/buy/?section=personal&billing=monthly), [Rider](https://www.jetbrains.com/rider/buy/?section=personal&billing=yearly)) may be asked to add a payment method, but the trial remains free.

-   **No purchase history**

    JetBrains AI free trials are not available to users in Mainland China who have not previously purchased a JetBrains product. If you have already bought a JetBrains product, make sure you’re signed in with the correct [JetBrains Account](https://account.jetbrains.com/).

-   **Organization-managed licenses**

    If you use IDE versions **2023.3**–**2024.2**, and your license comes from License Vault, License Server, or IDE Services, you cannot start a personal trial. Ask your employer to [request a corporate trial](https://sales.jetbrains.com/hc/en-gb/articles/15578446119314-Can-my-company-use-JetBrains-AI-with-License-Vault-or-License-Server) instead.

-   **AI Assistant is disabled in your company**

    If JetBrains AI is disabled, contact your administrator to enable it. If it’s already enabled, but you still cannot use it, try [refreshing](https://sales.jetbrains.com/hc/en-gb/articles/15589608094354-How-do-I-make-JetBrains-AI-instantly-available-to-my-developers-once-it-s-enabled) your access settings.

List of IDE license types eligible for a trial

The trial may not be available for certain IDE license types or in older IDE versions:

IDE license type

IDE versions 2024.2.1 and later

IDE versions prior to 2024.2.1

Paid license for individual use

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

Organizational license assigned by your employer

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")\[1\]

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")\[1\]

Commercial license obtained from License Vault Cloud, License Server, or IDE Services

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")\[2\]

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")\[3\]

[Free educational license](https://www.jetbrains.com/academy/student-pack/#students) for students and teachers

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")

[Free classroom license](https://www.jetbrains.com/academy/student-pack/#classrooms) for educational institutions

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")

[Free open-source development license](https://www.jetbrains.com/community/opensource/#support)

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")

Free non-commercial license ([RustRover](https://www.jetbrains.com/rust/buy/?section=personal&billing=yearly), [WebStorm](https://www.jetbrains.com/webstorm/buy/?section=personal&billing=monthly), [Rider](https://www.jetbrains.com/rider/buy/?section=personal&billing=yearly))

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")

JetBrains IDE free trial

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")

Community Editions of PyCharm and IntelliJ IDEA

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")

PyCharm Unified (starting from version 2025.1)

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")

Fleet EAP license

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

Early Access Program license for any other JetBrains IDE

![Available](https://resources.jetbrains.com/help/img/idea/2026.1/check.svg "Available")

![Not available](https://resources.jetbrains.com/help/img/idea/2026.1/cross.svg "Not available")

> ### note
>
> \[1\]Make sure AI Assistant is [enabled](https://sales.jetbrains.com/hc/en-gb/articles/14753675807506-Enable-or-disable-JetBrains-AI-for-all-users-in-your-organization) in your organization.
>
> \[2\]You can get a trial for **individual use** if AI Assistant is [enabled](https://sales.jetbrains.com/hc/en-gb/articles/14753675807506-Enable-or-disable-JetBrains-AI-for-all-users-in-your-organization) in your organization. Alternatively, you can ask your employer to request a [trial for organizations](https://sales.jetbrains.com/hc/en-gb/articles/15578446119314-Can-my-company-use-JetBrains-AI-with-License-Vault-or-License-Server).
>
> \[3\]To try AI Assistant, ask your employer to request a [trial for organizations](https://sales.jetbrains.com/hc/en-gb/articles/15578446119314-Can-my-company-use-JetBrains-AI-with-License-Vault-or-License-Server).

## Activate JetBrains AI

The activation process depends on whether you already have a JetBrains AI license.

License already purchased

No license yet

If you have already purchased the license on the [AI in IDEs](https://www.jetbrains.com/ai-ides/buy) webpage, do the following:

1.  Open the ! AI Chat tool window.

2.  Click Start with JetBrains AI.

    ![Start with JetBrains AI](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Start with JetBrains AI")

3.  Log in to your JetBrains Account.

If you have not purchased a license yet, do the following:

1.  Open the ! AI Chat tool window.

2.  Click Get JetBrains AI Pro.

    ![Get a JetBrains AI license](https://resources.jetbrains.com/help/img/idea/2026.1/ai_start_free_trial.png "Get a JetBrains AI license")

3.  On the [AI in IDEs](https://www.jetbrains.com/ai-ides/buy) webpage, select the license tier you want to purchase.

4.  On the **eStore Order Checkout** page, enter all required information and submit your order.

5.  Restart the IDE.

6.  Open the ! AI Chat tool window, and click Start with JetBrains AI.

    ![Start with JetBrains AI](https://resources.jetbrains.com/help/img/idea/2026.1/ai_bring_your_own_key.png "Start with JetBrains AI")

7.  Log in to your JetBrains Account.

This will activate AI Assistant, and you will be able to start using it.
