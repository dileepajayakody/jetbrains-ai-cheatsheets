# Restrict or disable AI Assistant features

Last modified: 14 July 2026

You can restrict the use of AI Assistant if you do not want to share source code with third parties, or choose to disable it entirely.

> ### note
>
> Refer to [Data handling](how-we-handle-your-code-and-data.html) to learn more about how your code and data are handled.

### Disable AI Assistant for the current project

You can disable AI Assistant for the project that is currently open in your IDE.

1.  Click the ! JetBrains AI widget located in the toolbar in the window header.

    ![JetBrains AI settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_hub.png "JetBrains AI settings")

2.  Hover over the Disable AI Assistant option and click Disable for This Project.

    ![Disable for This Project](https://resources.jetbrains.com/help/img/idea/2026.2/ai_hub_disable_for_project.png "Disable for This Project")

The JetBrains AI widget icon will change, and a notification that AI features are disabled for the project will appear. This information will also be duplicated in the AI Chat.

As a result, all AI Assistant icons in the toolbars and AI actions in the context menu will become unavailable.

### Permanently disable AI Assistant

To disable AI Assistant on the IDE level, you can disable the AI Assistant plugin.

1.  Click the ! JetBrains AI widget located in the toolbar in the window header.

    ![JetBrains AI settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_hub.png "JetBrains AI settings")

2.  Hover over the Disable AI Assistant option and select the Disable Permanently via Plugin option.

    ![Disable Permanently via Plugin](https://resources.jetbrains.com/help/img/idea/2026.2/ai_hub_disable_permanently.png "Disable Permanently via Plugin")

3.  On the plugin's description pane that opens, click Disable.

> ### tip
>
> If the AI Assistant plugin description pane has not opened, you can search for the plugin's name in Settings | Plugins | Installed.

You can also uninstall the plugin on the same plugin's description pane by clicking the ! arrow button to open the actions list, selecting Uninstall, and then restarting the IDE.

> ### note
>
> For more information about enabling and disabling AI Assistant on a company level, refer to [How to enable AI Assistant for companies](https://jb.gg/aienable).

### Restrict usage of AI Assistant for a project

As an alternative to disabling AI Assistant, you can create a file that will restrict the usage of AI features in the project.

-   Create an empty file named `.noai` in the root directory of the project.

When this file is present, all AI Assistant features are fully disabled for the project. Even if this project is opened in another IDE, the AI Assistant features will not be available.

![Project root contains a .noai file](https://resources.jetbrains.com/help/img/idea/2026.2/ai_noai_file_warning.png "Project root contains a .noai file")

> ### note
>
> Note that this file affects only the JetBrains AI Assistant plugin and does not affect any third-party AI integration plugins for JetBrains IDEs or other tools that may send code to external LLMs ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)).

### Restrict usage of AI Assistant in specific files or folders

You can restrict AI Assistant from processing specific files or folders by creating and configuring an `.aiignore` file.

> ### warning
>
> Files added to the `.aiignore` are not processed by AI Assistant, and AI features are disabled for them. However, in some cases, ignored files may still be processed due to unforeseen issues. If you notice any unexpected behavior, please report it so we can investigate.

> ### note
>
> If your project already contains a `.cursorignore`, `.codeiumignore`, or `.aiexclude` file, there is no need to create a separate `.aiignore` file, as these files are also supported. As long as they are located in the root folder of the project, they will be used to restrict AI Assistant's access to the specified files and folders.

1.  Navigate to Settings | Tools | AI Assistant | Project Settings.

2.  Select the Enable .aiignore checkbox and click Create .aiignore file.

    > ### tip
    >
    > If you do not want to apply restrictions immediately, leave the Enable .aiignore setting unchecked. You can enable it later after finalizing the list of restricted files and folders.

3.  Specify a pattern to exclude files and/or folders from processing by AI Assistant. The `.aiignore` file uses the same syntax as a [.gitignore](https://git-scm.com/docs/gitignore) file and provides a configuration template.

    ![Add restricted files and folders to the .aiignore file](https://resources.jetbrains.com/help/img/idea/2026.2/ai_aiignore_file_template.png "Add restricted files and folders to the .aiignore file")

    The configured file might look like this:

    ```
    # Ignore build output directories
    target/
    out/

    # Ignore Maven wrapper files
    .mvn/

    # Ignore project files
    .idea/
    *.iml

    # Ignore compiled Java class files
    *.class

    # Ignore all .java files except the ones from the 'src/main' folder
    *.java
    !src/main/**/*.java

    # Ignore test reports and test directories
    test-results/
    allure-results/

    # Ignore logs and temporary files
    logs/
    *.log
    *.tmp
    ```

As a result, if you try to invoke any AI Assistant action in a restricted file, you will receive the following message:

![AI Has No Access to This File warning](https://resources.jetbrains.com/help/img/idea/2026.2/ai_aiignore_warning_message.png "AI Has No Access to This File warning")

### Disable AI Assistant on a network level

You can restrict access to AI Assistant by blocking the following [JetBrains AI](https://www.jetbrains.com/ai/#ai-service) service's base URLs on a network level:

-   `https://api.jetbrains.ai/`

    (for Mainland China: `https://api.ai.jetbrains.com.cn/`)

-   `https://api.app.prod.grazie.aws.intellij.net/`

### Hide the AI Chat tool window and JetBrains AI widget

Even if you do not have the AI Assistant plugin installed, you may still notice the ! AI Chat tool window offering to install the plugin, and the ! JetBrains AI widget in the toolbar in the window header.

![AI Assistant installation tool window](https://resources.jetbrains.com/help/img/idea/2026.2/install_ai.png "AI Assistant installation tool window")

These items are not the AI Assistant plugin, and they have no access to your code. However, if you still wish to remove them, you can do so.

To hide the AI Chat tool window, right-click the icon and select Hide:

![Hiding the tool window](https://resources.jetbrains.com/help/img/idea/2026.2/ai_hiding_ai_tool_window.png "Hiding the tool window")

> ### tip
>
> If you later decide to restore the tool window, press Shift twice and search for the ! AI Assistant action.

To hide the JetBrains AI widget:

1.  Right-click the ! icon and select Customize Toolbar.

2.  In the Customize Main Toolbar dialog, select the widget and click ! Remove.

    ![Hiding the widget](https://resources.jetbrains.com/help/img/idea/2026.2/ai_hiding_jetbrains_ai_widget.png "Hiding the widget")

3.  Click Apply to save the changes.

> ### tip
>
> If you later decide to restore the widget:
>
> 1.  Right-click anywhere in the main toolbar and select Customize Toolbar.
>
> 2.  Choose the part of the toolbar where you want to add the widget (Right by default), and click Add.
>
> 3.  Search for the `AIAssistantHubPopupAction` action, select it, and click OK.
>
