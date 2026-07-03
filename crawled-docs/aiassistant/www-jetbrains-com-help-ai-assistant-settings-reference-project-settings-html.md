1.  [AI Assistant](settings-reference-ai-assistant.html)

2.  [Project Settings](#0)

# Project Settings

Last modified: 26 May 2026

Settings | Tools | AI Assistant | Project Settings

Use this page to [restrict](disable-ai-assistant.html) the usage of AI Assistant in the current project or in specific folders and files and to set up guidelines for the [Self-Review with AI](ai-in-vcs-integration.html#ai-self-review) feature.

[![AI Assistant project settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_settings_reference_project_settings.png "AI Assistant project settings")](https://resources.jetbrains.com/help/img/idea/2026.1/ai_settings_reference_project_settings.png)

Item

Description

Enable AI Assistant for this project

Enable/disable the use of AI Assistant for the project that is currently open.

For more information about restricting the use of AI Assistant, refer to [Restrict or disable AI Assistant features](disable-ai-assistant.html).

Enable .aiignore

Enable this setting to restrict AI Assistant's access to files and folders specified in the `.aiignore` file.

For more information about the `.aiignore` file, refer to [Restrict usage of AI Assistant in specific files or folders](disable-ai-assistant.html#restrict-ai-assistant-usage-in-specific-files-or-folders).

Create .aiignore file

Click to create a `.aiignore` file. This file should list the names of files or folder paths that AI Assistant must not process.

Open .aiignore file

If the `.aiignore` file already exists, click to open it for editing.

Path to rules for AI Self-Review

Specify a Markdown file with code review guidelines that must be taken into account by AI Assistant during code review.

For more information, refer to [Perform Self-Review with AI](ai-in-vcs-integration.html#ai-self-review).
