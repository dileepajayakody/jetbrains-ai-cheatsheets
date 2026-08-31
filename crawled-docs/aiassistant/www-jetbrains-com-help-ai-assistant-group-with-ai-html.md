# Group with AI

Last modified: 26 February 2026

This functionality is provided by the [AI Assistant Experimental Features](https://plugins.jetbrains.com/plugin/30055-jetbrains-ai-assistant-experimental-features) plugin. If the feature does not become available after installation, go to Settings | Tools | AI Assistant Experimental Features, disable the corresponding feature, and then enable it again.

The **Group with AI** feature is intended to speed up the review and validation process. It evaluates both [committed](/help/ai-assistant/group-with-ai.html#group-committed-changes) and [uncommitted](/help/ai-assistant/group-with-ai.html#group-uncommitted-changes) changes, clusters them into task-level groups, prioritizes them by importance, and provides brief explanations of each update, allowing you to focus on the highest-impact changes first.

The changes are divided into three groups:

-   ![High-impact changes](https://resources.jetbrains.com/help/img/idea/2026.2/high.svg "High-impact changes") – high-impact changes, such as large-scale refactorings, logic changes, and other major code updates.

-   ![Medium-impact changes](https://resources.jetbrains.com/help/img/idea/2026.2/mid.svg "Medium-impact changes") – medium-impact changes, such as removing unused imports, introducing small structural or organizational improvements, and other moderate adjustments.

-   ![Low-impact changes](https://resources.jetbrains.com/help/img/idea/2026.2/low.svg "Low-impact changes") – low-impact changes, such as fixing typos, reformatting code, and other minor edits.

Each group represents a set of related changes, with a brief description and a list of modified files, making it easier to review.

### Group and sort uncommitted changes

You can use the **Group with AI** feature to group introduced changes for review before committing them:

1.  Press Alt00 to open the Commit tool window.

2.  Click ![The Group with AI button](https://resources.jetbrains.com/help/img/idea/2026.2/Disabled.svg "The Group with AI button") Group with AI.

    ![Group the changes](https://resources.jetbrains.com/help/img/idea/2026.2/ai_diff_group_with_ai.png "Group the changes")

    AI Assistant will group the changes into changelists and mark them based on their impact.

Once the changes are grouped, you can review them. Click an item in the changelist to open the diff in the editor.

[![Select a changelist to commit](https://resources.jetbrains.com/help/img/idea/2026.2/ai_diff_group_uncommitted_changes.png "Select a changelist to commit")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_diff_group_uncommitted_changes.png)

### Group and sort already committed changes

You can use the **Group with AI** feature to review already committed changes:

1.  Press Alt09 to open the version control tool window.

2.  Select the commit for which you want to generate a diff.

3.  Click the ![The Group with AI button](https://resources.jetbrains.com/help/img/idea/2026.2/Disabled.svg "The Group with AI button") Group with AI button in the pane on the right.

    [![Select a commit](https://resources.jetbrains.com/help/img/idea/2026.2/ai_diff_select_commit.png "Select a commit")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_diff_select_commit.png)

4.  Review the changes in the pane. Double-click the grouping or item to open the diff in the editor.

    [![Review the diff](https://resources.jetbrains.com/help/img/idea/2026.2/ai_diff_calculate_from_vcs_log.png "Review the diff")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_diff_calculate_from_vcs_log.png)
