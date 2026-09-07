1.  [Understand and improve code](#0)

2.  [Explain code with AI](#0)

# Explain code with AI

Last modified: 21 October 2025

Use pre-written prompts to explain your code. JetBrains IDEs provide project-specific context, such as the languages and technologies used in your project.

## Explain code

1.  Select a code fragment and right-click it to open the context menu.

    Alternatively, select a code fragment and press AltEnter.

2.  Select AI Actions and then Explain Code.

    ![AI Assistant actions - Explain Code](https://resources.jetbrains.com/help/img/idea/2026.2/ai_explain_code_context_menu.png "AI Assistant actions - Explain Code")

    The AI Chat tool window will open to provide you with an explanation.

    [![AI Assistant explains code](https://resources.jetbrains.com/help/img/idea/2026.2/ai_explain_code.png "AI Assistant explains code")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_explain_code.png)

    Click ! Attachments to see the list of files that provided the necessary context for generating the answer.

    ![Attached files that were analyzed to generate the answer](https://resources.jetbrains.com/help/img/idea/2026.2/ai_more_context.png "Attached files that were analyzed to generate the answer")

    AI Assistant can also detect and explain injected language fragments like regular expressions, SQL, or cron expressions. The detected fragment type is indicated in the context menu option (Explain RegExp fragment for regular expressions and so on).

    ![Explain RegExp option in the context menu](https://resources.jetbrains.com/help/img/idea/2026.2/ai_dialog_regex.png "Explain RegExp option in the context menu")

Not in some IDEs

## Explain runtime error

**Not available in:** GoLand, Rider, RustRover

JetBrains IDEs provide you with AI explanations for errors that occur when running commands, queries, and files, Java and Python code, PHP scripts, and unit tests.

1.  Click Explain with AI in the console.

    Alternatively, select the error message, right-click it, and then select Explain Error Message with AI from the context menu.

    IntelliJ IDEA

    PyCharm

    DataSpell

    WebStorm

    PhpStorm

    DataGrip

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/ai_runtime_error_explained.png "Explain with AI option in console")

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/py_ai_runtime_error_explained.png "Explain with AI option in console")

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/py_ds_ai_runtime_error_explained.png "Explain with AI option in console")

    ![Explain  error message with AI](https://resources.jetbrains.com/help/img/idea/2026.2/ws_ai_runtime_error_explained.png "Explain  error message with AI")

    PHP scripts

    PHP unit tests

    Composer log console

    Symfony log console

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/ps_php_script_runtime_error_ai_explained.png "Explain with AI option in console")

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/ps_phpunit_test_runtime_error_ai_explained.png "Explain with AI option in console")

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/ps_composer_command_runtime_error_ai_explained.png "Explain with AI option in console")

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/ps_symfony_command_runtime_error_ai_explained.png "Explain with AI option in console")

    SQL script

    SQL file

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/db_sql_script_run_error_ai_explain.png "Explain with AI option in console")

    ![Explain with AI option in console](https://resources.jetbrains.com/help/img/idea/2026.2/db_sql_file_run_error_ai_explain.png "Explain with AI option in console")

    The AI Chat tool window will open to give you an explanation of the error and suggest a fix.

    [![Runtime error explanation](https://resources.jetbrains.com/help/img/idea/2026.2/ai_runtime_error.png "Runtime error explanation")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_runtime_error.png)

2.  If you want to use the suggested fix, click Apply in the field with the refactored code to put the AI-generated code into the currently open file.

    Alternatively, click ![Insert Snippet at Caret](https://resources.jetbrains.com/help/img/idea/2026.2/ml-llm.icons.expui.sendToEditor.svg "Insert Snippet at Caret") to insert the AI-generated code at the caret position.

Specific IDEs

## Explain log errors

**Only available in:** PhpStorm

AI Assistant allows you to get AI explanations for the errors in log files when you open such files in the editor.

-   Click Explain with AI in the editor next to the log line with an error.

    The AI Assistant tool window will open to give you an explanation of the error and suggest a fix.

    [![Explain logs with AI in the editor](https://resources.jetbrains.com/help/img/idea/2026.2/ai_log_error_explained.png "Explain logs with AI in the editor")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_log_error_explained.png)

Specific IDEs

## Explain CMake errors

**Only available in:** CLion

AI Assistant can help you investigate CMake execution problems.

1.  Click Explain with AI in the CMake tool window next to the error message:

    ![Explain with AI for CMake errors](https://resources.jetbrains.com/help/img/idea/2026.2/cl_aiassist_cmakerrors.png "Explain with AI for CMake errors")

2.  The AI Assistant will explain the error for you and suggest how to fix it:

    ![The AI Assistant explanation of a CMake error](https://resources.jetbrains.com/help/img/idea/2026.2/cl_aiassist_cmakerrors_answer.png "The AI Assistant explanation of a CMake error")

Specific IDEs

## Explain build errors and warnings

**Only available in:** Rider

If you have any warnings or errors in the Build tool window Alt00, click Explain with AI:

![Explain build warning with AI](https://resources.jetbrains.com/help/img/idea/2026.2/ai_explain_build_warning.png "Explain build warning with AI")

Specific IDEs

## Explain compilation errors

**Only available in:** RustRover

AI Assistant can also help you analyze build error messages.

-   In the console, locate the error message and click Explain with AI.

    ![Explain compilation error with AI](https://resources.jetbrains.com/help/img/idea/2026.2/ri_explain_with_AI_in_build_output.png "Explain compilation error with AI")

The AI Chat tool window will open to provide you with an explanation.

[![AI Chat tool window with an explanation of the compilation error](https://resources.jetbrains.com/help/img/idea/2026.2/ri_error_explanation.png "AI Chat tool window with an explanation of the compilation error")](https://resources.jetbrains.com/help/img/idea/2026.2/ri_error_explanation.png)

Specific IDEs

## Explain SQL code

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin starting from IDE version 2024.3

This feature may require [attaching the database schema](ai-chat.html) to suggest proper explanations.

For any problems higher than [weak warning](https://www.jetbrains.com/help/datagrip/configuring-inspection-severities.html), the assistant suggests an explanation. To use it, do the following:

1.  In the editor, invoke the intention actions by placing the caret at the highlighted code and pressing AltEnter, then select AI Actions.

2.  In the AI Actions dialog, select Explain SQL problem under caret.

AI Assistant will provide its explanation in chat.

[![AI Assistant explains problems in the selected SQL code](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_explain_problems.png "AI Assistant explains problems in the selected SQL code")](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_explain_problems.png)
