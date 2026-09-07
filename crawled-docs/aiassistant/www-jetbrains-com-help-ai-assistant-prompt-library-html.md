# Add and customize prompts

Last modified: 06 May 2026

You can define your own custom prompts or modify the built-in prompts used by AI Assistant for specific AI actions:

-   Custom prompts are added to the AI Actions menu and can be invoked manually when needed.

-   Built-in prompts are used when you invoke the corresponding AI action.

## Add your own prompts

You can add your own prompts to the Prompt Library and use them from the AI Actions menu.

1.  Do one of the following:

    -   Right-click anywhere in the editor to open the context menu, select AI Actions, and click Add Your Prompts.

    -   Press AltEnter, select AI Actions, and click Add your prompts.

    -   Press CtrlAlt0S to open settings and then select Tools | AI Assistant | Prompt Library.

2.  Click ! to create a new prompt.

    ![User prompts library settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_new_prompt.png "User prompts library settings")

3.  In the text field, write the prompt.

    If needed, click the `$SELECTION` variable to insert a Markdown-formatted code block containing the current code selection and its language name.

4.  Edit the Prompt name.

    ![Custom prompt parameters](https://resources.jetbrains.com/help/img/idea/2026.2/ai_custom_prompt.png "Custom prompt parameters")

5.  Enable the Wait for additional user input after invoking setting if you want AI Assistant to wait for additional input from you in the chat after invoking the prompt.

6.  Leave the Show prompt in 'AI Actions' popup enabled if you want your new prompt to be listed in the AI Actions menu.

7.  You can also move your custom prompts up or down using the ! and ! buttons to change the order in which the prompts are displayed in the AI Actions popup.

8.  Click Apply.

Once you create a prompt, it becomes available for use from the AI Actions menu that can be opened by right-clicking anywhere in the editor or pressing AltEnter.

![AI Actions menu with a custom prompt](https://resources.jetbrains.com/help/img/idea/2026.2/ai_custom_prompt_in_ai_actions_menu.png "AI Actions menu with a custom prompt")

You can edit or delete it at any time.

## Modify built-in prompts

You can adjust how AI Assistant behaves when using specific AI actions by modifying the prompts associated with them. For example, you can add custom guidelines for features such as [commit message generation](ai-in-vcs-integration.html), [unit test generation](generate-tests-with-ai.html), and others.

1.  Do one of the following:

    -   Right-click anywhere in the editor to open the context menu, select AI Actions, and click Add Your Prompts.

    -   Press AltEnter, select AI Actions, and click Add your prompts.

    -   Press CtrlAlt0S to open settings and then select Tools | AI Assistant | Prompt Library.

2.  Select the action for which you want to modify the prompt.

    ![Select the action](https://resources.jetbrains.com/help/img/idea/2026.2/ai_modify_prompt.png "Select the action")

    > ### note
    >
    > Most prompts are used when you invoke a corresponding action from the AI Actions menu, while the Chat Instructions prompt in the General section is intended for use in AI Chat. Each time you open a new chat, AI Assistant uses this prompt to automatically add specific instructions to your conversation.

3.  Add new instructions.

4.  Click Apply.

The instructions you provide are appended to the default prompt, extending the behavior of the corresponding action.

## Save a prompt written in AI Chat

If you want to save a prompt you have written in AI Chat, do the following:

1.  Hover the mouse over the prompt and click !.

2.  Select the ! Save Current Prompt option from the menu.

    ![Save Current Prompt](https://resources.jetbrains.com/help/img/idea/2026.2/ai_save_prompt_from_chat.png "Save Current Prompt")

3.  In the Prompt Library dialog, configure the [prompt settings](/help/ai-assistant/prompt-library.html#configuring-prompt-settings).

    ![Configure prompt settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_prompt_library_dialog.png "Configure prompt settings")

4.  Click OK.

The saved prompt can be [invoked](/help/ai-assistant/prompt-library.html#invoking-created-prompt) from the AI Actions menu.
