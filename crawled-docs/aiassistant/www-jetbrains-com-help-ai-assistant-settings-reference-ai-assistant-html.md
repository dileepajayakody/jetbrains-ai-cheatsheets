# AI Assistant

Last modified: 05 May 2026

Settings | Tools | AI Assistant

Use this page to configure the general behavior of AI Assistant.

[![AI Assistant settings reference](https://resources.jetbrains.com/help/img/idea/2026.1/ai_settings_reference.png "AI Assistant settings reference")](https://resources.jetbrains.com/help/img/idea/2026.1/ai_settings_reference.png)

## Features

Item

Description

Provide AI-generated name suggestions

Enables AI Assistant to suggest names when renaming symbols.

For additional information, refer to [Get help with name suggestions](refactoring-with-ai.html#ai-add-name-suggestions).

Suggest converting pasted code to the language of the target file

Suggests converting the pasted code to the language of the target file.

![Convert Pasted Code](https://resources.jetbrains.com/help/img/idea/2026.1/ai_convert_pasted_code.png "Convert Pasted Code")

For additional information, refer to [Convert code to another language](convert-files-to-another-language-with-ai.html).

Generate a title for the shelved changelist

When enabled, AI Assistant automatically generates a title for the silently shelved changes.

For additional information, refer to [Generate shelf title](ai-in-vcs-integration.html#generate-shelf-title).

GitHub Plugin: Generate a summary upon opening a Pull Request

Enables AI Assistant to automatically generate a summary of changes when opening an incoming pull request.

> ### note
>
> This functionality relies on the [GitHub](https://plugins.jetbrains.com/plugin/https://plugins.jetbrains.com/plugin/13115-github) plugin, which is bundled and enabled in JetBrains IDEs by default. If the relevant features are not available, make sure that you did not disable the plugin.

For additional information, refer to [Generate a summary of an incoming pull request](ai-in-vcs-integration.html#generate-summary-of-incoming-pr).

Database Permissions for MCP Tools

A group of settings that allows you to control how [MCP tools](mcp.html) configured in AI Assistant can interact with databases and schemas:

-   Read database schemas – allows MCP tools to read database schemas without asking for confirmation. Enabling this setting improves the query generation quality but also increases quota consumption.

-   Modify database schemas – allows MCP tools to modify database schemas without asking for confirmation.

-   Read database data – allows MCP tools to read database data without asking for confirmation.

-   Modify database data – allows MCP tools to modify database data without asking for confirmation.

## Code Completion and Next Edit Suggestions

Code completion and next edit suggestions settings are located at Settings | General | Editor | Code Completion | Inline. For more information, refer to [Code completion](code-completion.html#configure-cloud-completion) and [Next edit suggestions](next-edit-suggestions.html#enable_next_edit_suggestions) sections.

## Natural Language

Item

Description

Receive AI Assistant chat responses in a custom language

Specify the language in which you want to receive chat responses.

For additional information, refer to [Change the chat response language](customize-ai-chat.html#change-chat-response-language).

## Message Trimming Threshold

Item

Description

Trim message if it exceeds % of a model context window

Specify the percentage of the model's context window beyond which AI Assistant should start trimming messages.

If your message, including attached files, exceeds this limit, the attached files will be trimmed to optimize performance. Smaller files are more likely to be included in full, while larger files are trimmed, with only key content extracted and included in the message.

For additional information, refer to [Set a message trimming threshold](chat-mode.html#set-message-trimming-threshold).
