# Keyboard shortcuts

Last modified: 03 August 2026

Settings | Keymap | Plugins | JetBrains AI Assistant

Settings | Keymap | JetBrains AI Assistant | Input

This page lists all default AI Assistant keyboard shortcuts that you can use in the editor, chat, and tool window.

## Editor shortcuts

Use the following shortcuts when working with code in the editor.

Shortcut

Action

Ctrl0\\

Performs different actions based on context:

-   If used on an empty line, lets you provide a prompt to generate new code.

-   If used with selected code, lets you provide a prompt to modify it.

Tab

Accept the suggested code. If needed, you can [configure a different shortcut](code-completion.html#change-cloud-completion-shortcut) for this action.

Ctrl0→

Accept a suggestion word by word.

End

Accept a suggestion line by line.

Esc

Reject the suggested code.

AltShift0\\

Manually [invoke](code-completion.html#work-with-cloud-completion) code completion.

AltEnter

Open a context menu to access AI Assistant actions.

## Chat shortcuts

Use the following shortcuts when interacting with AI Assistant in [chat](ai-chat.html).

Shortcut

Action

AltInsert

Open a new chat.

Ctrl0F

Depending on where the shortcut is used:

-   Invoked in the chat – [searches](chat-mode.html#search-through-chat) through the current chat instance.

-   Invoked while viewing [chat history](chat-mode.html#chat-history) – searches for a specific chat.

Enter

Send – send the message in the current chat.

ShiftEnter

New Line – insert a line break without sending the message.

CtrlShiftEnter

Send to a New Chat – start a new chat and send the message there.

CtrlEnter

Send Now – interrupt the agent or model that's generating a response and send your prompt right away.

## AI Assistant tool window shortcuts

Use the following shortcut to resize the AI Assistant tool window.

Shortcut

Action

CtrlShift0'

Maximize/restore the AI Assistant tool window.

## Troubleshooting

### Do you have a non-English keyboard layout?

All keymaps in JetBrains IDEs are designed for the [QWERTY US English keyboard layout](https://en.wikipedia.org/wiki/QWERTY#United_States). If you use a keyboard layout for another Latin-script alphabet, some shortcuts may not work because characters used in those shortcuts may not have dedicated keyboard keys.

For example, there is no dedicated keyboard key for the forward slash `/` in the German keyboard layout, and therefore it is impossible to use the Ctrl0/ shortcut.

The recommended workaround in this case is to install the [Keymap Nationalizer](https://plugins.jetbrains.com/plugin/14625-keymap-nationalizer) plugin, which will generate a non-conflicting keymap for your keyboard layout. Alternatively, you can fix specific shortcuts by assigning another shortcut instead of the one that does not work.

Regardless of the workaround, we are still looking for a solution that would work out-of-the-box for any keyboard layout. The progress is tracked in [this issue](https://youtrack.jetbrains.com/issue/IDEA-165950).

### Configure AI Assistant shortcuts

You can assign custom shortcuts to specific AI Assistant actions or reassign the existing ones.

1.  Press CtrlAlt0S to open settings and then select Keymap.

2.  Expand the Plugins folder, then navigate to JetBrains AI Assistant.

    [![Configure shortcuts](https://resources.jetbrains.com/help/img/idea/2026.2/ai_configure_shortcuts.png "Configure shortcuts")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_configure_shortcuts.png)

3.  Configure the shortcuts as required.

It is also possible to assign a shortcut for opening the ! AI Chat toolwindow.

1.  Press CtrlAlt0S to open settings and then select Keymap.

2.  Expand the Tool Windows folder, then navigate to AI Assistant.

    [![Configure shortcuts](https://resources.jetbrains.com/help/img/idea/2026.2/ai_configure_shortcuts_toolwindow.png "Configure shortcuts")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_configure_shortcuts_toolwindow.png)

3.  Configure the shortcuts as required.
