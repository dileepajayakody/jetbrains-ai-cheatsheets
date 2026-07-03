1.  [Review and integrate](review-and-integrate.html)

2.  [Review changes](#0)

# Review changes

Last modified: 24 April 2026

After an agent plans and implements a change, review the result before you integrate it. In JetBrains Air, review is interactive: you can inspect diffs, navigate to modified files, comment on code, and turn feedback into the next iteration.

Review can be done by a human or by an agent. This topic describes human review. For agent-based review, see [Review with agent](agentic-review.html).

## Review workflow

### Review, iterate, and verify

1.  Open the task changes.

    After a task is finished, the Chat tool shows the Changes button. Click it to open the merged diff in a single editor tab named Task Changes.

    [![The Changes button in task chat and the Task Changes diff tab](https://resources.jetbrains.com/help/img/air/review-changes.png "The Changes button in task chat and the Task Changes diff tab")](https://resources.jetbrains.com/help/img/air/review-changes.png)

2.  Navigate the diff and choose how to inspect it.

    Use the diff header to switch between Unified and Side-by-side views. Use the navigation controls to jump to the next or previous hunk. You can also open the changed files and review them in the context of the whole project.

    ![Diff view modes and diff navigation controls](https://resources.jetbrains.com/help/img/air/review-diff-view.png "Diff view modes and diff navigation controls")

3.  Review the result and choose how to provide feedback.

    In JetBrains Air, you can review changes in several ways:

    -   **Comment on code** – add comments to specific lines and send them to the task as review feedback. You can send one comment immediately or collect several comments and send them together. See [Comment on changes](/help/air/review-changes.html#comment_on_changes).

    -   **Add selected code to the task** – send a selected code fragment directly to the task as context for a follow-up. See [Add selected code to the task](/help/air/review-changes.html#add_selected_code_to_task).

4.  Iterate on the result.

    If more work is needed, send your review feedback to the task and let the agent update the result. You can also add more context using the same tools as when defining a task: attach files and folders, mention symbols, add terminal output, or upload a file. Learn more in [Task context](task-context.html).

5.  Verify the updated result.

    You can verify changes by running the project yourself or by asking the agent to run commands or tests. For example, ask the agent to run newly added tests, or run the app if it is a console project.

    ![A task requesting command execution for verification](https://resources.jetbrains.com/help/img/air/run-command-approval.png "A task requesting command execution for verification")

    After the agent completes the follow-up, JetBrains Air shows the Changes button again. Each iteration returns you to the updated Task Changes tab.

## Review actions

### Comment on changes

Use comments when you want to leave review feedback on specific lines. You can send a single comment immediately or collect several comments and send them together.

1.  In the diff or editor, select the line you want to comment on.

    ![Adding a comment to a changed line](https://resources.jetbrains.com/help/img/air/air-comment-in-editor.png "Adding a comment to a changed line")

2.  Enter your comment.

3.  Choose how to proceed:

    -   To keep reviewing and add more comments, click Add Comment.

    -   To send all currently collected comments and start the next iteration, click Send Comments.

4.  (Optional) Open the Comments tool if you want to review all collected comments before sending them.

    The tool shows comments for the current task and, if needed, all comments across tasks.

    ![The Comments tool showing collected review comments and the Send button](https://resources.jetbrains.com/help/img/air/air-comments-send.png "The Comments tool showing collected review comments and the Send button")

### Add selected code to the task

Use this action when you want to send a selected code fragment directly to the task as follow-up input.

1.  In the diff or editor, select the code you want to reference.

2.  Click Add to Task.

3.  Enter the follow-up instruction and send it to the task.
