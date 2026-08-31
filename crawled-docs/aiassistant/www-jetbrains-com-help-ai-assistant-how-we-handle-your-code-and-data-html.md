# Data handling

Last modified: 12 August 2026

When you use AI features, AI Assistant needs to send your requests and pieces of your code to the LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)) provider. Besides the prompts you type, it may send additional details, such as file types, frameworks used, and any other information that may be necessary for providing context to the LLM.

In addition, JetBrains IDE builds with the AI Assistant plugin perform an opt-in collection of detailed data about AI feature usage, including the full communication between you and the LLM (both text and code fragments). This data is kept strictly confidential and can be used by JetBrains for product improvement and training AI models. It is never shared with any external parties or revealed in any form to any other users.

The option that controls detailed data collection can be found in the IDE Settings under Settings | Appearance & Behavior | System Settings | Data Sharing | Send detailed code-related data and is disabled by default.

> ### note
>
> In DataGrip, AI Assistant does not share or get access to the data in your database.

For more information about our data collection policies, refer to [Data Collection and Use Policy](https://www.jetbrains.com/help/ai/data-collection-and-use-policy.html).

## Review the data sent to external services

AI Assistant logs prompts that are sent to the LLM provider. You can review them in the `ai-assistant-requests.md` file if needed.

### Open AI Assistant requests log

To open the request log:

1.  In the main menu, go to Navigate | Search Everywhere or press Shift twice to open the search window.

2.  Type Open AI Assistant Requests Log in Editor and press Enter.

    ![Action in Search Everywhere for opening AI Assistant requests log](https://resources.jetbrains.com/help/img/idea/2026.2/open_ai_requests_log.png "Action in Search Everywhere for opening AI Assistant requests log")

3.  Review log in the `ai-assistant-requests.md` file that opens.

    > ### note
    >
    > For DataGrip: this functionality relies on the [Markdown](https://plugins.jetbrains.com/plugin/7793-markdown) plugin, which you need to install and enable. For more information, refer to [Install a plugin from Marketplace](https://www.jetbrains.com/help/datagrip/managing-plugins.html#install_plugin_from_repo).

    ![File with AI Assistant requests log](https://resources.jetbrains.com/help/img/idea/2026.2/ij_ai_assistant_requests.png "File with AI Assistant requests log")

    Logs are stored during the current AI Assistant session.

### Clean up AI Assistant requests log

1.  In the main menu, go to Navigate | Search Everywhere or press Shift twice to open the search window.

2.  To clean up the entire AI Assistant requests log, type Clean Up AI Assistant Requests Log and press Enter.

    ![Action in Search Everywhere for cleaning up AI Assistant requests log](https://resources.jetbrains.com/help/img/idea/2026.2/clean_up_ai_requests_log.png "Action in Search Everywhere for cleaning up AI Assistant requests log")

    To clean up the requests log only for the current project, type Clean Up AI Assistant Requests Log for Current Project and press Enter.
