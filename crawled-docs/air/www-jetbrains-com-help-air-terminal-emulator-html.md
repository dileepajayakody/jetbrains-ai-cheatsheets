1.  [Tools](tools.html)

2.  [Terminal](#0)

# Terminal

Last modified: 16 March 2026

Use Terminal to run command-line tasks inside JetBrains Air. You can run Git commands, install dependencies, and execute scripts without leaving the workspace. JetBrains Air starts a terminal session in the project root by default. You can open additional sessions in separate tabs.

### Open the Terminal tool

-   Navigate to View in the main menu and select Terminal.

-   On the tool panel, click Terminal.

## Start a new terminal session

### Start a new session

-   In the Terminal tool, click New Terminal.

    A new session opens in a new tab.

    ![New Terminal session](https://resources.jetbrains.com/help/img/air/aird_terminal_new_session.png "New Terminal session")

## Search in terminal output

### Search in a terminal session

1.  In the Terminal tool, press ⌘Cmd0F.

2.  Type the text to search for.

## Open a terminal in a file directory

### Open Terminal for a file

1.  In Files or in an editor tab, right-click a file.

2.  Select Open in | Terminal.

3.  JetBrains Air opens a new terminal session in the directory of that file.

## Configure Terminal settings

You can configure the terminal shell and appearance in settings.

### Open Terminal settings

-   Press ⌘Cmd0, to open settings and select Tools | Terminal.

Common settings include the terminal font, font size, line height, caret shape, and the default shell profile.

## Configure the shell profile

JetBrains Air runs the default system shell by default, but you can select a different shell by configuring a terminal profile.

### Configure the shell

1.  Open settings.

2.  In the Terminal section, find the Default profile list.

3.  From the Default profile list, select Edit Terminal Profiles.

4.  In settings.json, add the `"terminal.profiles"` array. Specify the following within the array:

    -   `program`: specifies the command that runs the REPL.

    -   `args`: specifies additional arguments. This parameter is optional.

    -   `name`: specifies the name displayed in the Default profile list. This parameter is optional.

    Consider the following examples. The exact code may vary depending on your environment. Ensure that you reference a shell installed on your system.

    Windows

    Linux/macOS

    ```
    "terminal.profiles": [
        {
            "program": "cmd",
            "args": [""], // optional
            "name": "cmd" // optional
        }
    ]
    ```

    or

    ```
    "terminal.profiles": [
        {
            "program": "C:/Program Files/Git/usr/bin/bash.exe", // or "C:/Program Files/Git/bin/bash.exe"
            "args": [""], // optional
            "name": "Git bash" // optional
        }
    ]
    ```

    ```
    "terminal.profiles": [
        {
            "program": "/bin/bash",
            "args": ["-l"], // optional
            "name": "bash" // optional
        }
    ]
    ```

    or

    ```
    "terminal.profiles": [

        {
            "program": "/opt/homebrew/bin/oh-my-posh",
            "args": ["init zsh"],
            "name": "oh-my-posh",
        },
        {
            "program": "/bin/zsh",
            "args": ["--login"],
            "name": "Zsh",
        },
    ],
    ```

5.  From the Default profile list, select the profile that you created.
