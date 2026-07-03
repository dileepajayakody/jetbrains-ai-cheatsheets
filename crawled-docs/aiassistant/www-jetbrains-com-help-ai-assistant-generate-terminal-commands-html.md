Not in some IDEs

# Generate terminal commands

Last modified: 03 September 2025

**Not available in:** DataGrip

> ### warning
>
> The AI features described in this chapter are related to the experimental terminal engine (known as New Terminal) that was available in IDEs of version 2024.\* and is now deprecated. Only users who enabled this experimental terminal in IDEs of version 2024.\* will be able to use it.

In addition to standard shell commands, you can type any text in the Terminal, for example, `Rename current folder`. If AI Assistant identifies the input as a natural language, the AI mode will be enabled automatically. If your query is not recognized as a prompt, you can enable it manually.

1.  In the Terminal tool window, click ! (Ask AI Assistant) or press ⌘Cmd0\\.

2.  Type your query and press ↩Enter.

    AI Assistant will generate a command taking into account the shell that you are using and your terminal context, such as the name of the current directory and the output of the previous commands.

3.  Press ↩Enter again to run this command.

![https://resources.jetbrains.com/help/img/idea/2026.1/terminal\_ask\_ai\_assistant\_for\_command\_start.png](https://resources.jetbrains.com/help/img/idea/2026.1/terminal_ask_ai_assistant_for_command_start.png)

Gif

> ### tip
>
> Some terminal commands, such as `check` or `copy`, may resemble natural language queries. As a result, AI Assistant might interpret them as part of your prompt instead of terminal commands. If you want your input to always be treated as a terminal command, you can disable the natural language detection feature. In the tool window header, click ![Options](https://resources.jetbrains.com/help/img/idea/2026.1/app.expui.general.moreVertical.svg "Options") and clear the Detect Natural Language option.
