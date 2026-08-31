1.  [Automations](automations.html)

2.  [Work with run results](#0)

EAP

# Work with automation run results

Last modified: 29 July 2026

Every automation run is a [cloud task](cloud-tasks.html) that JetBrains Air starts from a trigger instead of a person. A run uses the same environment configuration, checks out a branch in the cloud environment, and the agent works on the task. What happens to the changes the run produces is decided in advance by the trigger's [change handling](create-automation.html#automation_trigger_change_handling), so a run can push commits, open a pull request, or make no code changes at all.

You can work with automation run results from the Automations page: open a pull request from a pushed branch, open the run in JetBrains Air to inspect it, or continue the work in a new task.

Cloud environmentAgentBranchTrigger(schedule or event)Remote repository(1) starts an automation run(2) Air clones the repoand checks out a branch(4) Air handles the changes perthe trigger's change handling(3) edits files(5) you review, open a PR,or continue in a new task

## What a run does with its changes

Each trigger sets how its runs handle changes, so what you get after a run depends on the trigger's change-handling option. To set or change it, see [Triggers. Change handling](create-automation.html#automation_trigger_change_handling).

Change handling

What you get after a run

No code changes

The run commits nothing. Its result is available in the run output and in any [notifications](create-automation.html#outgoing_webhooks) you configured. Use it for analysis, triage, or reporting.

Push to source branch

The changes are committed to the branch the run worked on: the checked-out branch, or the pull request's source branch. For a pull request trigger, this adds commits to the existing pull request.

Push to new branch

The changes are on a new branch JetBrains Air pushed for the run. Open a pull request from it when you're ready – see [Create a pull request from a run](/help/air/automation-run-results.html#create_pr_from_run).

Create a PR

JetBrains Air has already opened a pull request from the run's branch. Review and complete it in your VCS provider as usual.

\>

## Create a pull request from a run

When a trigger uses Push to new branch, the run pushes its changes to a new branch but doesn't open a pull request. Create one from that branch when you're ready. With Create a PR, JetBrains Air already opened the pull request for you. This is the same review-and-apply flow as with a regular cloud task.

### Create a pull request from a run

1.  On the Automations page, select the automation and open the run you want to apply.

2.  Click Create PR.

    ![An automation run open in JetBrains Air with the Create PR button in the top-right and the changed files in the Changes panel](https://resources.jetbrains.com/help/img/air/automation-run-create-pr.png "An automation run open in JetBrains Air with the Create PR button in the top-right and the changed files in the Changes panel")

3.  Review and complete the pull request in your VCS provider as usual.

You can also open the pushed branch directly in your VCS provider and create the pull request there.

## Open a run in Air

To see the full run details, open the run's cloud environment in JetBrains Air. Click Open Chat on the run to inspect the agent conversation, the steps it took, and the files it changed. This is useful when a run finished but the outcome isn't what you expected – see [Troubleshoot automations](troubleshoot-automations.html#unexpected_output).

## Continue a run in a new task

If you want to keep working on what an automation started, continue the run in a new task. JetBrains Air creates a new cloud environment and sets it up so the new task picks up where the run left off:

-   **Branch** – the new environment is on the same feature branch the run pushed to, so the run's changes are already in place.

-   **Context** – the new task starts with the automation run's result as context, together with an instruction telling the agent it's continuing automation's work.

### Continue a run in a new task

1.  Open the run on the Automations page.

2.  Next to Open Chat, open the menu and select Continue in New Task.

    ![The run action menu expanded next to Open Chat, showing the Continue in New Task item](https://resources.jetbrains.com/help/img/air/automation-run-continue-in-new-task.png "The run action menu expanded next to Open Chat, showing the Continue in New Task item")

3.  JetBrains Air opens the new task. Add more context or instructions and continue working as you would with any cloud task.
