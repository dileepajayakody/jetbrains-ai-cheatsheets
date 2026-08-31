1.  [Automations](automations.html)

2.  [Troubleshooting](#0)

EAP

# Troubleshoot automations

Last modified: 06 August 2026

Automations run in remote cloud environments. When a run fails or produces an unexpected result, this topic helps you tell the two apart, fix the problems you can fix yourself, and collect the right information before you contact support.

## Check the run status

Start with the status. Open the Automations page, select the automation, and inspect its runs in the Runs section. Each run shows how it ended:

-   **Done** – the agent finished and pushed its result to a branch

-   **Problem** – the run failed or was aborted before the agent could finish

For the full automation workflow, see [Manage automations](manage-automations.html).

## The run finished but the output is unexpected

If a run completes but the outcome doesn't match what you expected, the issue is usually in how the agent approached the task rather than in the platform. To see what happened, open the run and select Open Chat to read through the agent's steps – see [Open a run in Air](automation-run-results.html#open_run_in_air).

This is almost always model behavior. Refine the automation and run it again to check the result – try a different model first, and adjust the prompt or context as needed. Learn how to [edit an automation](manage-automations.html#edit_automation) and how to [run one manually](manage-automations.html#run_automation_manually_procedure) to test a change.

## Fix common setup problems

Some failures come from the configuration you control. Check these before you report a bug.

### No repositories appear when creating an automation

The repository isn't available yet. Make sure the JetBrains Air app is installed for the repository and that the repository is added, then try again. Learn how to [connect repositories](connect-repositories.html).

### MCP server errors during a run

MCP failures are most often caused by a variable name mismatch. Every token, key, or URL referenced in your repository's MCP configuration must have a matching environment variable, with exactly the same name. Names are case-sensitive. Verify the names match and rotate and re-add a token if it may have expired. Learn more about [MCP servers](mcp-servers.html).

### A trigger didn't fire

What to check depends on the trigger type:

-   **Schedule** – a scheduled run launches on behalf of the automation's creator. If a schedule that used to work goes silent, the creator's session may have expired. The creator needs to sign in to JetBrains Air again.

-   **GitHub events** – only specific events start an automation, and each event maps to a single GitHub action. If the action you expected isn't one of the supported events, the automation won't run. See the supported events in [Triggers](create-automation.html#automation_trigger_github_events).

## The run failed to start or ended with a problem

If a run doesn't start, or starts and ends with a **Problem** status you can't act on, this is usually an infrastructure issue on the JetBrains side. Some failures are transient, so run the automation again to check whether it reproduces. If it does, copy the diagnostic information for the run and [contact support](/help/air/troubleshoot-automations.html#contact_support).

## Copy diagnostic information for a run

The diagnostic information identifies the run and its environment so support can trace the failure without extra back-and-forth. To copy it, open the run, open the options menu, and select Copy Diagnostic Info.

![An automation run with a Problem status showing the Copy Diagnostic Info action in the options menu](https://resources.jetbrains.com/help/img/air/automation-run-diagnostic-info.png "An automation run with a Problem status showing the Copy Diagnostic Info action in the options menu")

The copied text contains identifiers such as the organization, automation, run, and workspace IDs. Paste this into your support request.

## Contact support

To reach support, open the user menu and select Contact Support.

![The user menu with the Contact Support item selected](https://resources.jetbrains.com/help/img/air/contact-support-user-menu.png "The user menu with the Contact Support item selected")

To help support investigate, include:

-   the diagnostic information for the run (see [Copy diagnostic information for a run](/help/air/troubleshoot-automations.html#copy_diagnostic_info))

-   the trigger type – schedule, GitHub event, or webhook

-   what you expected to happen and what happened instead, with the steps to reproduce it
