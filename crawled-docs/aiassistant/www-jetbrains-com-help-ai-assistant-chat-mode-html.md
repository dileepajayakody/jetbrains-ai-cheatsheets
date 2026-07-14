1.  [AI Chat](ai-chat.html)

2.  [Chat with AI](#0)

# Chat with AI

Last modified: 26 June 2026

In Chat mode, you can ask questions about your code or project, generate code snippets, and work with AI responses directly in the chat.

## Start a conversation

To begin working with AI Assistant, open the AI Chat tool window. You can then start a conversation.

### Open AI Chat

To open the AI Chat tool window, click ! AI Chat on the right toolbar (in DataGrip, click ![the More tool windows icon](https://resources.jetbrains.com/help/img/idea/2026.1/app-client.expui.general.moreHorizontal%4020x20.svg "the More tool windows icon") More tool windows in the header and select ! AI Assistant).

![Open AI Chat](https://resources.jetbrains.com/help/img/idea/2026.1/ai_open_ai_chat.png "Open AI Chat")

By default, the tool window opens with an agent selected rather than Chat mode. You can switch to Chat mode at any time, as described below. For more information, refer to [AI Chat](ai-chat.html#default-interaction-mode).

### Switch between chat and an agent

To switch to Chat mode or to a different agent, click the ! button and select it from the list.

![Switch chat mode](https://resources.jetbrains.com/help/img/idea/2026.1/ai_switch_chat_mode.png "Switch chat mode")

> ### tip
>
> Alternatively, press ⌘Cmd0/ to switch between the Chat mode and the last selected agent.

### Start a new chat

If you already have an open chat and want to start a new one, click ! New Chat or press ⌘Cmd0N.

![Start a new chat](https://resources.jetbrains.com/help/img/idea/2026.1/ai_start_new_chat.png "Start a new chat")

## Select a model

You can choose the model that processes your requests. AI Assistant supports models provided through the [JetBrains AI service](supported-llms.html#jbai-service-models), configured [third-party provider](use-custom-models.html#provide-your-own-api-key), or [locally running model](use-custom-models.html#connect-local-models).

To select a model you want to use:

1.  In the chat, click the ! button next to the model's name.

    ![Select the model from the list](https://resources.jetbrains.com/help/img/idea/2026.1/ai_select_cloud_llm_intro.png "Select the model from the list")

2.  Select the desired model from the list.

    > ### tip
    >
    > If you are unsure which model to choose, you can set it to Auto. AI Assistant will automatically select the model that offers the best balance between performance and cost.

AI Assistant provides hints for each model next to its name:

-   ![Reasoning model](https://resources.jetbrains.com/help/img/idea/2026.1/brain.svg "Reasoning model") – these models are better suited for tasks that require logical reasoning, structured output, or deeper contextual understanding.

-   ![High cost model](https://resources.jetbrains.com/help/img/idea/2026.1/ruby.svg "High cost model") – models marked with this icon may consume more tokens, resulting in higher [quota usage](licensing-and-subscriptions.html#reasons-for-high-quota-usage).

-   ![Beta model](https://resources.jetbrains.com/help/img/idea/2026.1/beta.svg "Beta model") – these models may produce varying results, meaning that their behavior or performance is less predictable.

## Add context

AI Assistant uses context from your project to generate responses. It can collect this context automatically, or you can add it manually.

### Disable codebase mode

By default, AI Assistant automatically gathers relevant context to provide a response. If you prefer to add the context manually, you can disable this behavior. To do this, click ! and disable the Enable Codebase Mode setting.

![Codebase setting](https://resources.jetbrains.com/help/img/idea/2026.1/ai_chat_mode_codebase_setting.png "Codebase setting")

After that, you can [add](/help/ai-assistant/chat-mode.html#add-attachments-manually) the relevant information manually via the ! button or using `@` [references](/help/ai-assistant/chat-mode.html#use-mentions).

> ### warning
>
> When the Codebase Mode is enabled, context is not gathered from files listed in `.gitignore` and `.aiignore`. For more information, refer to [Restrict usage of AI Assistant in specific files or folders](disable-ai-assistant.html#restrict-ai-assistant-usage-in-specific-files-or-folders).

### Add attachments manually

You can add the relevant context manually by clicking the ! Add attachment button. You can then select the category of attachment, and the item you want to add.

![Add context](https://resources.jetbrains.com/help/img/idea/2026.1/ai_add_context_to_request.png "Add context")

> ### tip
>
> You can also use the Search field to find elements that can be used as context for your query, as well as certain context-related actions.

Below you can find detailed instructions on adding specific types of context to your query:

Add files or folders to context

Adding files and folders to the context gives AI Assistant access to relevant code and project structure, helping it understand dependencies and provide more accurate, context-aware answers.

To add a file or folder to the context:

1.  In the chat, click ! Add attachment.

2.  Select the Files and Folders option from the menu and specify the file or folder you want to add.

    ![Add Folder](https://resources.jetbrains.com/help/img/idea/2026.1/ai_add_context_to_request.png "Add Folder")

    > ### tip
    >
    > Alternatively, you can add a file or folder to the chat using the `@` reference:
    >
    > -   To reference a file, use `@file:file_name`.
    >
    > -   To reference a folder, use `@folder:folder_name`.
    >
    >
    > You can also drag and drop a file or folder directly into the chat.

3.  Type your question in the chat and submit the query.

AI Assistant will use the attached file or folder to collect additional context when providing an answer.

> ### note
>
> Files and folders may not always be included in full if their size exceeds the language model's context window. In such cases, the file or folder contents are trimmed and only partially added to the context. For more information, refer to [Set a message trimming threshold](/help/ai-assistant/chat-mode.html#set-message-trimming-threshold).

Add images to context

AI Assistant can extract relevant information from images and use it as context when processing your requests. It can read code snippets from screenshots, analyze error messages, or interpret other visual context.

To add an image to your request:

1.  Click ! Add attachment.

2.  Select the Add Image option from the menu and specify the image you want to add. If needed, you can attach multiple images.

    > ### note
    >
    > The attached image must not exceed 20 MB in size.

    ![Add Image](https://resources.jetbrains.com/help/img/idea/2026.1/ai_add_context_to_request.png "Add Image")

    > ### tip
    >
    > Alternatively, you can add an image to the chat by referencing it via `@file:file_name`, copying and pasting it, or dragging and dropping it into the chat.

3.  Type your question in the chat and submit the query.

AI Assistant will process the image and extract relevant information needed to generate a reply.

The extracted code snippets can then be further [processed](/help/ai-assistant/chat-mode.html#process-responses) as needed.

Add context from UI

When asking questions in the chat, you can add context to your query directly from a UI element. It can be a terminal, tool window, console, etc. For example, you can attach a build log from the console to ask why your build failed.

1.  In the chat, click ! Add attachment.

2.  Select the Add context from UI option from the menu.

    ![Add context from UI](https://resources.jetbrains.com/help/img/idea/2026.1/ai_add_context_to_request.png "Add context from UI")

3.  Select the UI element that contains data that you want to add to the context.

    > ### warning
    >
    > When adding context this way, be mindful of the files you include, as some may be explicitly marked as [restricted](disable-ai-assistant.html#restrict-ai-assistant-usage-in-specific-files-or-folders) in the `.aiignore` file. Adding them as context bypasses this restriction, allowing AI Assistant to process them.

4.  Type your question in the chat and submit the query.

AI Assistant will consider the added context when generating the response.

Attach database object

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin starting from IDE version 2025.2

You can attach a specific database object to your request in AI chat to provide the LLM with additional context. To do this:

1.  In the chat, type `@`, then start typing or select `dbObject:`.

2.  From the list of database objects that appears, select the one you want to attach.

    ![Attaching a database object to AI chat](https://resources.jetbrains.com/help/img/idea/2026.1/db_ai_attach_db_object_to_ai_chat.png "Attaching a database object to AI chat")

    > ### tip
    >
    > If you want to attach a whole schema, you can also click ! Add Attachment in the chat, then select the Database Schema option and specify the schema. In DataGrip, click ![the Attach Schema button](https://resources.jetbrains.com/help/img/idea/2026.1/database-plugin.icons.expui.schema.svg "the Attach Schema button") Attach Schema and select one from the list.

    You can see which object was attached to your message and navigate to it by clicking the corresponding attachment in the chat.

3.  Type your question in the chat and submit the query.

> ### note
>
> By default, AI Assistant does not have access to the database objects, so when you add one to your request, it will ask for confirmation. If you do not want to be prompted for confirmation every time, you can enable the Always allow attaching database objects to AI Assistant chat checkbox in the Attach Schemas to AI Assistant Chat dialog.
>
> Alternatively, enable the Allow attaching database schemas to AI Assistant chat setting in Settings | Tools | AI Assistant.

Mention database context

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin starting from IDE version 2026.1

AI Assistant can manage settings for the [file created from a code snippet](/help/ai-assistant/chat-mode.html#process-responses) automatically. For this, provide any context relating to the SQL dialect, a data source, or a schema in the chat. Also, if you ask AI Assistant about a file that already has a data source attached, it attaches that data source to the newly created file.

![Database context is applied to a newly created file](https://resources.jetbrains.com/help/img/idea/2026.1/db_db_context_for_new_file.png "Database context is applied to a newly created file")

Attach selection as context

Sometimes, it is necessary to explain a specific part of the code, a runtime warning, terminal output, or other results shown in various tool windows while working with your code. AI Assistant allows you to select this content and add it to the chat as context for your request.

To get an explanation:

1.  Select the content you want explained. This can be a code snippet from the editor, a runtime error, terminal output, or other console messages shown in a corresponding tool window.

    ![Selection is added to chat](https://resources.jetbrains.com/help/img/idea/2026.1/ai_selection_added_to_chat.png "Selection is added to chat")

    The selection is automatically added to the chat as context.

2.  In the chat, ask AI Assistant to explain the selection.

### Use @mentions

You can use `@mentions` to add specific items, such as files or symbols, to your request as context.

![Add context](https://resources.jetbrains.com/help/img/idea/2026.1/ai_references_list.png "Add context")

> ### tip
>
> Some `@mentions` represent categories that group related items. If you know the name of the item you want to reference, type `@` followed by its name and select it from the list instead of browsing categories.

Available categories

-   `@thisFile` refers to the currently open file.

-   `@selection` refers to a piece of code that is currently selected in the editor.

-   `@projectStructure` refers to the structure of the project displayed in the Project tool window.

-   `@problems` refers to the issues detected in the currently open file.

-   `@localChanges` refers to the uncommitted changes.

-   `@file:` invokes a popup with selection of files from the current project. You can select the necessary [file](/help/ai-assistant/chat-mode.html#add-files-or-folders-to-context) or [image](/help/ai-assistant/chat-mode.html#add-images-to-context) from the popup or write the name of the file (for example, `@file:Foo.md` or `@file:img.png`).

-   `@folder:` refers to a [folder](/help/ai-assistant/chat-mode.html#add-files-or-folders-to-context) in the current project. The selected folder, along with all its contents, is added as context to the prompt.

-   `@rule:` adds a [project rule](configure-project-rules.html) into prompt. You can either select a rule from the invoked popup or write the rule name manually.

-   `@dbObject:` refers to a [database object](/help/ai-assistant/chat-mode.html#attach-database-object) such as a schema or table. For example, you can attach a database schema to your request to improve the quality of generated SQL queries.

-   `@commit:` adds a commit reference into prompt. You can either select a commit from the invoked popup or write the commit hash manually.

-   `@symbol:` adds a symbol into prompt (for example, `@symbol:FieldName`).

-   `@jupyter:` for PyCharm and DataDrip, adds a Jupyter variable into prompt (for example, `@jupyter:df`).

### Review attachments

You can review any attachment by clicking it. The item will be opened in a separate window.

![Click the attached file to review it](https://resources.jetbrains.com/help/img/idea/2026.1/ai_review_attachments.png "Click the attached file to review it")

If the request was already sent, you can find the attachments that were added to it by clicking the ! button.

![Review attached context](https://resources.jetbrains.com/help/img/idea/2026.1/ai_reviewing_attached_context.png "Review attached context")

The attachments provided by AI Assistant in the answer are always shown but can be hidden if needed by clicking !.

## Manage context size

Each language model has a [context window](supported-llms.html) – the maximum amount of context it can process at once. If this limit is exceeded, the model may produce incomplete responses or discard earlier parts of the conversation.

![Model context window is full](https://resources.jetbrains.com/help/img/idea/2026.1/ai_context_used_warning.png "Model context window is full")

To ensure your requests stay within the model's capacity, you can configure a message trimming threshold. If this threshold is exceeded, AI Assistant starts prioritizing smaller files and extracting key content from larger ones to optimize the amount of context sent to the model.

### Set a message trimming threshold

1.  Go to Settings | AI Assistant.

    Alternatively, hover over the trimmed attachment, marked with the ! icon, and click Adjust threshold.

    ![Adjust the threshold](https://resources.jetbrains.com/help/img/idea/2026.1/ai_adjust_threshold_popup.png "Adjust the threshold")

2.  In the Message Trimming Threshold section, select a value for the Trim message if it exceeds % of a model context window setting.

    ![Set message trimming threshold](https://resources.jetbrains.com/help/img/idea/2026.1/ai_set_message_trimming_threshold.png "Set message trimming threshold")

3.  Click OK to save changes.

As a result, when your message exceeds the specified threshold, AI Assistant trims the attachments to ensure the model can process the request. The trimmed content is marked with the ! icon.

> ### note
>
> Trimming is also applied to the responses returned by the LLM. For example, your request may trigger the use of an external tool that returns multiple attachments as context. If the combined size of these attachments exceeds the defined trimming threshold, their contents will be trimmed.
>
> ![Response from the external tool exceeds the model's context window limit](https://resources.jetbrains.com/help/img/idea/2026.1/ai_response_exceeds_context_window.png "Response from the external tool exceeds the model's context window limit")

## Use /commands

Commands act as shortcuts for specific actions, allowing you to save time when typing your query. You can use them in combination with `[@mentions](/help/ai-assistant/chat-mode.html#reference-categories)`.

By default, the following `/` commands are available:

-   `/docs` – searches the IDE documentation for information on the specified topic. If applicable, AI Assistant will provide a link to the corresponding setting or documentation page.

-   `/explain` – explains a mentioned entity.

-   `/help` – provides information about AI Chat features.

-   `/refactor` – suggest refactoring for the code selected in the editor.

-   `/web` – searches for information on the internet. AI Assistant will provide an answer and attach a set of relevant links that were used to retrieve the information.

> ### note
>
> The list of commands can be extended by connecting to an [MCP server](mcp.html). Coding agents may also provide additional `/` commands.

## Process responses

In Chat mode, you can apply or reuse AI-generated suggestions using the actions available in the top-right corner of the code snippet.

![Asking AI Assistant programming-related questions](https://resources.jetbrains.com/help/img/idea/2026.1/ai_ask_questions.png "Asking AI Assistant programming-related questions")

-   Apply – [apply](/help/ai-assistant/chat-mode.html#apply-changes-to-the-current-file) the suggestion to the currently open file.

-   ![Copy to Clipboard](https://resources.jetbrains.com/help/img/idea/2026.1/app.expui.general.copy.svg "Copy to Clipboard") Copy to Clipboard – copy the code snippet.

-   ![Insert Snippet at Caret](https://resources.jetbrains.com/help/img/idea/2026.1/ml-llm.icons.expui.sendToEditor.svg "Insert Snippet at Caret") Insert Snippet at Caret – insert the code snippet into the editor.

-   ![Create File from Snippet](https://resources.jetbrains.com/help/img/idea/2026.1/app-client.expui.actions.addFile.svg "Create File from Snippet") Create File from Snippet – creates a new file from the snippet.

    > ### note
    >
    > The file is created in the folder selected in the Project tool window (in Rider, in the project selected in the Explorer tool window). If a file is selected instead of a folder, the new file is created in the same folder as the selected file.

-   ![Run Snippet](https://resources.jetbrains.com/help/img/idea/2026.1/app-client.expui.gutter.run.svg "Run Snippet") Run Snippet – execute the generated command or code.

### Apply a suggestion to the current file

Code snippets generated by AI Assistant in the Chat mode can be applied to the currently open file. The changes are applied to the entire file, with relevant code adjusted to integrate the updates.

To apply the suggestion:

1.  Locate the code snippet that you want to apply.

2.  Click the Apply button.

    ![Apply changes to the current file](https://resources.jetbrains.com/help/img/idea/2026.1/ai_ask_questions.png "Apply changes to the current file")

3.  In the editor, review the changes by clicking ! Next Change or ! Previous Change buttons.

    ![Review the changes](https://resources.jetbrains.com/help/img/idea/2026.1/ai_apply_changes_to_the_current_file_review.png "Review the changes")

4.  When you are ready to apply the changes, click Accept All. Otherwise, click Discard All to reject the changes.

    > ### tip
    >
    > You can reject a specific change by clicking the ! Revert button in the gutter.

### Regenerate the response

If you do not like the answer provided by AI Assistant, click ! Regenerate this response at the end of the response to generate a new one.

![Regenerate response](https://resources.jetbrains.com/help/img/idea/2026.1/ai_regenerate_response.png "Regenerate response")

## View chat history

AI Assistant stores chat history separately for each project across IDE sessions. You can find the saved chats in the ! Chat History list.

![All Chats list](https://resources.jetbrains.com/help/img/idea/2026.1/ai_all_chats.png "All Chats list")

Names of the chats are generated automatically and contain the summary of the initial query. Right-click the chat's name to rename it or delete it from the list. Search for a particular chat name using ⌘Cmd0F.

Besides searching for a specific chat, you can also search within a chat instance. To revisit a specific part of the conversation:

1.  In the chat instance, press ⌘Cmd0F. Alternatively, click ! and select Find in Chat.

2.  In the search field, type your query. AI Assistant will highlight all occurrences of the specified text in the chat.

    > ### tip
    >
    > You can also search for multiple lines by pressing ⌘Cmd⇧Shift↩Enter or clicking New Line after each specified line.

3.  Use ! ! buttons to navigate to the next/previous occurrence.

    ![Search through chat](https://resources.jetbrains.com/help/img/idea/2026.1/ai_search_through_chat.png "Search through chat")
