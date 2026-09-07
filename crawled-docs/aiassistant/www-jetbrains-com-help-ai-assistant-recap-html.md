# Recap

Last modified: 26 February 2026

This functionality is provided by the [AI Assistant Experimental Features](https://plugins.jetbrains.com/plugin/30055-jetbrains-ai-assistant-experimental-features) plugin. If the feature does not become available after installation, go to Settings | Tools | AI Assistant Experimental Features, disable the corresponding feature, and then enable it again.

The **Recap** feature automatically generates a summary of your recent work to speed up context restoration. It highlights what was done and provides contextual hints, helping you to retrace your steps and continue working from where you left off.

### Review the prepared recap

1.  Navigate to the ! Recap tool window and click Open Recap.

2.  Scroll through the log and review the summary of your actions.

    [![Review Recap](https://resources.jetbrains.com/help/img/idea/2026.2/ai_review_recap.png "Review Recap")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_review_recap.png)

    You can click the referenced items to navigate to the corresponding file or line.

3.  If you want to update the log to include the most recent activities, click ! Update in the upper part of the Recap tool window.

### Set Recap auto-update time

By default, Recap is set to update automatically after **5 minutes** of inactivity. If you want to specify a different time period, do the following:

1.  Navigate to Tools | AI Assistant Experimental Features.

2.  In the Recap section, set the desired time interval for the Update Recap after setting.

    [![AI Workflows settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_ai_workflows.png "AI Workflows settings")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_reference_ai_workflows.png)

3.  Click OK to save changes.

After the system detects inactivity that lasts for the specified period of time, the Recap gets automatically updated, listing the most recent activities.
