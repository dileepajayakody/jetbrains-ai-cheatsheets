# About AI Assistant

Last modified: 05 August 2026

**AI Assistant** is a collection of AI-powered features and coding agents integrated into JetBrains IDEs. It helps you work with code in AI Chat, directly in the editor, and through coding agents that can handle multi-step development tasks.

AI Assistant connects your IDE to AI models and agents that help you write, understand, and improve code by generating snippets, explaining existing logic, suggesting improvements, and automating routine development tasks.

[![AI Assistant in IDE](https://resources.jetbrains.com/help/img/idea/2026.2/ai_about_aia_overview.png "AI Assistant in IDE")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_about_aia_overview.png)

## Key capabilities

AI Assistant provides a range of AI-powered features designed to support your development workflow:

-   ! **Context-aware AI Chat**
    Ask questions about your code, navigate your project structure, and get relevant insights based on your current context.

-   [![Context-aware AI chat](https://resources.jetbrains.com/help/img/idea/2026.2/ai_context_aware_chat_preview.png "Context-aware AI chat")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_context_aware_chat_preview.png)

-   ! **Coding agents**
    Delegate complex, multi-step tasks to AI-powered agents that can work across multiple files and handle larger changes.

-   [![Coding agents](https://resources.jetbrains.com/help/img/idea/2026.2/ai_switch_chat_mode_intro.png "Coding agents")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_switch_chat_mode_intro.png)

-   ! **In-editor AI assistance**
    Generate or update code from natural language prompts and receive inline code completion and next edit suggestions.

-   [![Code insights](https://resources.jetbrains.com/help/img/idea/2026.2/ai_in_editor_assistance_preview.png "Code insights")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_in_editor_assistance_preview.png)

-   ! **Code insights**
    Ask AI to explain code, suggest improvements, assist with refactoring, and identify potential issues.

-   [![AI Assistant actions - Explain Code](https://resources.jetbrains.com/help/img/idea/2026.2/ai_code_insights_preview.png "AI Assistant actions - Explain Code")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_code_insights_preview.png)

-   ! **Routine automation**
    Reduce manual work by generating documentation, unit tests, commit messages, and pull request summaries.

-   [![Routine automation](https://resources.jetbrains.com/help/img/idea/2026.2/ai_routine_automation_prview.png "Routine automation")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_routine_automation_prview.png)

## Flexible AI configuration

AI Assistant can be [set up](activation-scenarios.html) in different ways to match your needs. You can use it with a JetBrains AI subscription, provide your own API keys, authorize integrated agents with provider accounts, or install external coding agents.

![Activation options](https://resources.jetbrains.com/help/img/idea/2026.2/ai_bring_your_own_key.png "Activation options")

This flexibility allows you to choose the AI models and services that best fit your development workflow.

## How AI Assistant works

AI Assistant integrates AI-powered capabilities directly into JetBrains IDEs. It uses relevant context from your project, such as the currently open file, selected code, or recent changes, to generate useful suggestions and responses.

When you use AI Assistant features, your request and relevant context are sent to an AI model, which processes them and returns results to the IDE as code suggestions, explanations, or other assistance.

The workflow typically looks like this:

1.  **You trigger a feature** – for example, by asking a question in AI Chat or invoking an AI-powered action in the editor.

2.  **AI Assistant gathers relevant context** from your project, such as selected code or the current file.

3.  **The request and context are sent to an AI model**, which processes the request.

4.  **The response is returned to the IDE**, where it appears as code suggestions, explanations, or other assistance in the editor or tool windows.

Typical AI Assistant workflow

User triggers
feature

AI Assistant
collects context

AI model
processes request

Response is shown
in IDE

## IDE compatibility

AI Assistant can be installed in the following JetBrains IDEs:

-   ![CLion](https://resources.jetbrains.com/help/img/idea/2026.2/CLion_icon.png "CLion")   [CLion](https://www.jetbrains.com/clion/)

-   ![DataGrip](https://resources.jetbrains.com/help/img/idea/2026.2/DataGrip_icon.png "DataGrip")   [DataGrip](https://www.jetbrains.com/datagrip/)

-   ![DataSpell](https://resources.jetbrains.com/help/img/idea/2026.2/DataSpell_icon.png "DataSpell")   [DataSpell](https://www.jetbrains.com/dataspell/)

-   ![GoLand](https://resources.jetbrains.com/help/img/idea/2026.2/GoLand_icon.png "GoLand")   [GoLand](https://www.jetbrains.com/go/)

-   ![IntelliJ IDEA](https://resources.jetbrains.com/help/img/idea/2026.2/IntelliJ_IDEA_icon.png "IntelliJ IDEA")   [IntelliJ IDEA](https://www.jetbrains.com/idea/)

-   ![PhpStorm](https://resources.jetbrains.com/help/img/idea/2026.2/PhpStorm_icon.png "PhpStorm")   [PhpStorm](https://www.jetbrains.com/phpstorm/)

-   ![PyCharm](https://resources.jetbrains.com/help/img/idea/2026.2/PyCharm_icon.png "PyCharm")   [PyCharm](https://www.jetbrains.com/pycharm/)

-   ![Rider](https://resources.jetbrains.com/help/img/idea/2026.2/Rider_icon.png "Rider")   [Rider](https://www.jetbrains.com/rider/)

-   ![RubyMine](https://resources.jetbrains.com/help/img/idea/2026.2/RubyMine_icon.png "RubyMine")   [RubyMine](https://www.jetbrains.com/ruby/)

-   ![RustRover](https://resources.jetbrains.com/help/img/idea/2026.2/RustRover_icon.png "RustRover")   [RustRover](https://www.jetbrains.com/rust/)

-   ![WebStorm](https://resources.jetbrains.com/help/img/idea/2026.2/WebStorm_icon.png "WebStorm")   [WebStorm](https://www.jetbrains.com/webstorm/)

In addition, you can use AI Assistant in other environments:

-   [Android Studio](https://developer.android.com/studio) – the official IDE for Android development, created by Google and based on IntelliJ IDEA by JetBrains.

-   [ReSharper](https://www.jetbrains.com/resharper/) – available as a separate product that can be installed together with the ReSharper extension for Visual Studio.

> ### note
>
> This documentation describes how to use AI Assistant in JetBrains IDEs only. Usage in **Android Studio** and **ReSharper** is not covered here. For details, refer to the documentation for the respective product.

## Next steps

To start using AI Assistant, explore the following topics:

-   [Install AI Assistant in your IDE](installation-guide-ai-assistant.html) – install the plugin in a supported IDE.

-   [Activate AI Assistant](activation-scenarios.html) – choose one of the supported activation options: use a JetBrains AI subscription, your own API keys, authorize integrated agents with a provider account, or add external agents.

-   [Feature availability](feature-set.html) – explore the main capabilities of AI Assistant and their availability across JetBrains IDEs.

-   [Supported models](supported-llms.html) – review the AI models available for use.
