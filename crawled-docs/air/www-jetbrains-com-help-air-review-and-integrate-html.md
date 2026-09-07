# Review and integrate

Last modified: 13 August 2026

After an agent finishes a task, review the changes and decide what to do next. In JetBrains Air, review includes both human review and review performed by an agent. The goal is to keep changes safe and reviewable, and then integrate the result into your workflow.

You review changes by opening the diff in the editor. This is where you inspect what changed, leave comments for follow-ups, revert changes, and decide whether to accept the result.

### Review and integrate changes

1.  Open the finished task and review the diff. Iterate on feedback when needed.

    Learn more in [Review changes](review-changes.html).

2.  You can also ask an agent to review the diff. Agentic review is useful for structured checks, but you should still verify critical behavior manually.

    Learn more in [Review with agent](agentic-review.html).

3.  Accept and commit the result.

    When you are satisfied with the changes, accept them, commit, and push to the remote repository. If you worked in an isolated environment (for example, Git Worktree or Docker container), first, bring the changes back to your local workspace.

    Learn more in [Accept changes](accept-changes.html).
