1.  [Understand and improve code](#0)

2.  [Find and fix problems with AI](#0)

# Find and fix problems with AI

Last modified: 12 November 2025

AI Assistant helps you find and fix problems in your code by analyzing the provided context, detecting potential issues, and providing suggestions to resolve them.

## Find problems

1.  Select a code fragment and click ! in the popup that appears.

2.  In the menu, click Find Problems.

    ![Find Problems](https://resources.jetbrains.com/help/img/idea/2026.2/ai_popup_find_problems.png "Find Problems")

    The AI Chat will open, where the model will analyze the selected code fragment, identifying potential issues and suggesting possible solutions.

    ![AI Assistant finds potential problems in the selected code](https://resources.jetbrains.com/help/img/idea/2026.2/ai-find-potential-problems.png "AI Assistant finds potential problems in the selected code")

Specific IDEs

## Fix SQL code

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin starting from IDE version 2024.3

This feature may require [attaching the database schema](ai-chat.html) to suggest proper fixes.

For any problems higher than [weak warning](https://www.jetbrains.com/help/datagrip/configuring-inspection-severities.html), the assistant suggests a fix. To use it, do the following:

1.  In the editor, invoke the intention actions by placing the caret at the highlighted code and pressing AltEnter, then select AI Actions.

2.  In the AI Actions dialog, select Fix SQL problem under caret.

![AI Assistant suggests a fix for the problems of selected SQL code](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_fix_problems.png "AI Assistant suggests a fix for the problems of selected SQL code")

AI Assistant will provide its fix in editor.

![AI Assistant suggests a fix for the problems of selected SQL code](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_fix_problems_result.png "AI Assistant suggests a fix for the problems of selected SQL code")

AI Assistant can also suggest fixes for syntax errors. To use them, do the following:

-   In the editor, invoke the intention actions by placing the caret at the highlighted code and pressing AltEnter, then select Fix with AI Assistant.

![AI Assistant suggests a fix for the syntax errors of selected SQL code](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_fix_syntax_problems.png "AI Assistant suggests a fix for the syntax errors of selected SQL code")

AI Assistant will provide its fix in editor.

![AI Assistant suggests a fix for the syntax errors of selected SQL code](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_fix_syntax_problems_result.png "AI Assistant suggests a fix for the syntax errors of selected SQL code")

Specific IDEs

## Query execution error handling

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin starting from IDE version 2024.3

AI Assistant can explain and fix SQL query execution errors in editor tabs. The corresponding actions are available in the error message area.

### Explain SQL errors

AI Assistant can explain the SQL execution error in your code. You can also ask further questions about the error in AI chat.

This feature may require [attaching the database schema](ai-chat.html) to suggest proper explanations.

1.  After running an SQL query and encountering a query execution error, click Explain with AI in the error message area.

    ![SQL query execution error handling actions](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_err_handling_actions.png "SQL query execution error handling actions")

2.  AI Assistant opens AI chat with an automatically sent prompt and AI Assistant’s response, providing an explanation of the error.

    [![SQL query error explained by AI Assistant](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_err_handling_explained.png "SQL query error explained by AI Assistant")](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_err_handling_explained.png)

### Fix SQL errors

AI Assistant can fix the SQL execution error in your code.

This feature may require [attaching the database schema](ai-chat.html) to suggest proper fixes.

1.  After running an SQL query and encountering a query execution error, click Fix with AI in the error message area.

    ![SQL query execution error handling actions](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_err_handling_actions.png "SQL query execution error handling actions")

2.  AI Assistant generates a fix for the query execution error in the editor.

    ![SQL query error fixed by AI Assistant](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_err_handling_fixed.png "SQL query error fixed by AI Assistant")

    > ### tip
    >
    > If you'd like to provide feedback on this feature, click Yes or No in the Do you like the generated result? popup.
