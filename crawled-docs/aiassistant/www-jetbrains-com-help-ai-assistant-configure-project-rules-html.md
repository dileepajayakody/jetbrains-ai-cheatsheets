# Configure project rules

Last modified: 27 May 2026

Project rules let you define guidelines that AI Assistant follows in [chat mode](chat-mode.html). For information on configuring agent behavior, refer to the [Agent instructions](configure-agent-behavior.html) section.

Project-specific rules help AI Assistant better understand your code, preferred tools, and coding conventions. By defining these rules, you can improve the relevance of AI responses and ensure that suggestions align with your project setup.

By default, project rules are automatically added to each chat session, so AI Assistant adheres to the provided guidelines. You can customize this behavior – for example, apply rules only to specific files, invoke them manually, or let the model decide when to use them.

To configure project rules:

1.  Go to Settings | Tools | AI Assistant | Rules.

    [![Project rules](https://resources.jetbrains.com/help/img/idea/2026.2/ai_project_rules_settings.png "Project rules")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_project_rules_settings.png)

2.  Click New Project Rules File and provide a name for the file. This creates an `.aiassistant/rules` folder with the `.md` file in it.

    > ### tip
    >
    > Alternatively, you can manually create the `.aiassistant/rules` folder in the project root and add a `.md` file there.

3.  Switch to the created rule file in the editor and select the Rule type. The following types are available:

    ![Project rules types](https://resources.jetbrains.com/help/img/idea/2026.2/ai_project_rules_types.png "Project rules types")

    -   Always – applied automatically to all chat sessions. As a result, AI Assistant will always take the specified guidelines into consideration when providing responses.

    -   Manually – applied only when explicitly [invoked](chat-mode.html#reference-project-rule-in-chat) in the chat using `@rule:` or `#rule:`, or added via the ! Add attachment action.

    -   By model decision – applied when the model considers the rule relevant. You must also provide an Instruction so AI Assistant can understand when the rule should be applied. For example, you can instruct AI Assistant to apply the rule only when you work with Java files.

    -   By file patterns – applied when a file [referenced](chat-mode.html#reference-file-in-chat) in the chat matches the specified file pattern (for example, `*.kt` or `src/**`). The pattern must be provided in the Patterns field.

    -   Off – the rule is inactive and not applied.

4.  Add the guidelines to the Markdown file. Here is an [example](https://resources.jetbrains.com/help/img/idea/2026.2/project_code_review_guidelines.md) of what the file with guidelines may look like:

    ```
    # General Code Review Guidelines
    ```

Once configured, AI Assistant will use the rules (if applicable) when providing responses. To check whether the rules were applied, expand the list of attachments at the beginning of the AI Assistant's response:

![Project rules attached to the AI Assistant's response](https://resources.jetbrains.com/help/img/idea/2026.2/ai_attached_project_rules_in_chat.png "Project rules attached to the AI Assistant's response")
