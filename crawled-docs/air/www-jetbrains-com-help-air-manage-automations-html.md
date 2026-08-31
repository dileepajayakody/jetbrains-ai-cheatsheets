1.  [Automations](automations.html)

2.  [Manage automations](#0)

EAP

# Manage automations

Last modified: 29 July 2026

On the Automations page, you can browse automations, inspect their runs, and manage them from the options menu.

![The Automations page with the automation list and the details panel](https://resources.jetbrains.com/help/img/air/air-web-automations-page.png "The Automations page with the automation list and the details panel")

### Browse automations and their runs

1.  Log in to [https://air.jetbrains.cloud](https://air.jetbrains.cloud) with your JetBrains Account.

2.  Open the Automations page.

3.  In the main list, choose which automations to show:

    -   Project for automations shared within a project

    -   Personal for your personal automations

4.  To make the list easier to browse, group automations by repository.

5.  Select an automation in the list. This will open the page with automation details and the list of its runs.

6.  To inspect a specific run, click it in the Runs section.

    The run output opens inline in the same panel. Depending on how the trigger handled the run's changes, you can open a pull request, inspect the run in JetBrains Air, or continue it in a new task – see [Work with automation run results](automation-run-results.html).

    ![An automation details panel with the output of a selected run](https://resources.jetbrains.com/help/img/air/air-automations-run-details.png "An automation details panel with the output of a selected run")

### Filter and search the automation list

Use filters and search to quickly find the automations you need.

![Filtering and searching automations](https://resources.jetbrains.com/help/img/air/air-automations-search-and-filter.png "Filtering and searching automations")

1.  On the Automations page, choose which automations to show:

    -   Project for automations shared within a project

    -   Personal for your personal automations

2.  Use the All Projects filter to show automations for one project or for all projects. The Project column shows which project each automation belongs to.

3.  Use the All Repositories filter to show automations for one repository or for all repositories.

4.  To search by automation name, click the search icon and type your query.

### Edit an automation

You can always edit your personal automations. To edit a [project automation](create-automation.html#automation_sharing), you need to be an admin in that project and have access to its repository in the [VCS provider](connect-repositories.html).

1.  Open the Automations page and select the automation.

2.  Start editing in one of the following ways:

    -   click Edit in the automation header

    -   open the automation menu and click Edit

3.  Change the automation settings.

4.  Click Save.

### Run an automation manually

Use this to test an automation or start it on demand without waiting for a trigger.

1.  Open the Automations page and select the automation.

2.  Start the run in one of the following ways:

    -   select the automation and click Run Now on its details page

    -   open the automation menu and click Run Now

    ![The automation menu](https://resources.jetbrains.com/help/img/air/air-web-automation-menu.png "The automation menu")

3.  In the Test Automation Manually dialog, set up the run:

    -   Select the branch to check out.

    -   Select how to handle the changes the run produces – see [Change handling](create-automation.html#automation_trigger_change_handling).

    -   Optionally, enter Context for the run. The context stands in for the data a [trigger](create-automation.html#automation_triggers) would normally provide, such as an issue link, a pull request, or event details. Leave it empty to run the automation with no payload.

    ![The Test Automation Manually dialog with a branch selector, a change-handling selector set to Push to new branch, a context field, and the Run button](https://resources.jetbrains.com/help/img/air/automation-run-manually-dialog.png "The Test Automation Manually dialog with a branch selector, a change-handling selector set to Push to new branch, a context field, and the Run button")

4.  Click Run.

### Stop a run in progress

Stop a run that is still in progress if you no longer need its result or started it by mistake.

1.  Open the Automations page and select the automation.

2.  In the Runs section, find the run that is still in progress and click the stop icon ![Stop run](https://resources.jetbrains.com/help/img/air/automation-run-stop-icon.png "Stop run") next to it.

### Pause and resume an automation

If you want an automation to stop reacting to its triggers for a while, pause it instead of deleting it. When you want it to run again, resume it.

1.  Open the Automations page and select the automation.

2.  Open the automation menu and click Pause. The automation stays in the list in the Paused state but no longer starts when its [triggers](create-automation.html#automation_triggers) fire.

3.  To resume, open the automation menu and click Resume. The automation reacts to its triggers again.

### Assign an automation to a project

Assign an automation to a [project](projects.html) so project admins can manage it and project members can use it. A project automation uses the project's AI credits instead of the credits of the person who created it. You can change the project at any time.

1.  Open the Automations page and select the automation.

2.  Click Edit in the automation header.

3.  Open the Project selector and choose a project. Choose Personal to make the automation personal again.

    ![The Project selector at the top of the automation properties, open and showing Personal, the available projects, and New Project](https://resources.jetbrains.com/help/img/air/automation-project-selector.png "The Project selector at the top of the automation properties, open and showing Personal, the available projects, and New Project")

4.  Click Save.

### Duplicate an automation

Use this to create a new automation based on the existing one.

1.  Open the Automations page and select the automation.

2.  Open the automation menu and click Duplicate.

3.  Update the copied automation settings if needed.

4.  Click Save.

### Delete an automation

Use this to remove an automation you no longer need.

1.  Open the Automations page and select the automation.

2.  Open the automation menu and click Delete.

3.  Confirm deletion.
