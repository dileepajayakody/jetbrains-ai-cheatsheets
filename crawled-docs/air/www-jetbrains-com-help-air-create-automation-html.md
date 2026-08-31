1.  [Automations](automations.html)

2.  [Create automations](#0)

EAP

# Create automations

Last modified: 20 August 2026

## Before you start

Before you create an automation, make sure that:

-   Your organization is set up for the web version of JetBrains Air. This is done once by an administrator – see [Set up Air for your organization](set-up.html#setup-admin).

-   You are signed in to JetBrains Air with your JetBrains Account and have access to the organization.

-   The repository you want to automate is available through a configured repository connection. If needed, see [Connect repositories to Air](connect-repositories.html#connect_repositories).

## Create an automation

You can create an automation from scratch or start from a predefined template. A template mainly pre-fills the prompt, and you can edit it afterward. You apply a template while creating or editing the automation, so the rest of the workflow is the same either way.

### Create an automation

1.  Log in to [https://air.jetbrains.cloud](https://air.jetbrains.cloud) with your JetBrains Account.

2.  Open the Automations page.

3.  Click New Automation.

4.  Enter a name for the automation in the Automation name field.

5.  In the Instructions section, define what the automation does:

    -   **Project** – a project to share the automation within so its members can use it, or Personal to keep it to yourself. A project automation uses the project's AI credits instead of yours, and project admins can manage it. This choice also sets which environments and connectors you can select. For details, see [Visibility and sharing](/help/air/create-automation.html#automation_sharing).

    -   **Repository** | **Environment** – the repository the automation works on. If you have a preconfigured environment configuration for that repository, select it to run with its dependencies and settings; otherwise the automation uses the repository's default cloud environment. For details, see [Configure environments for automations](/help/air/create-automation.html#automation_environment_configuration).

    -   **Prompt** – the instructions the agent follows when the automation starts

    -   **Model** – the model used for automation runs

    -   **Connectors** – add connections to the MCP servers that the agent can use during the run. For details, see [Add MCP connectors](/help/air/create-automation.html#automation_connectors).

    -   **Use Template** – opens the Automation Templates list. Select a template to pre-fill the prompt with a ready-made task, which you can then edit.

6.  Add one or more triggers. Each trigger sets what starts a run, which branch the run works on, and what JetBrains Air does with the changes it produces. For details, see [Triggers](/help/air/create-automation.html#automation_triggers).

    ![The automation form with the Instructions, Triggers, and Notifications sections. The trigger row shows At time, a weekday selector, checkout master, and Push to new branch.](https://resources.jetbrains.com/help/img/air/automation-create-form.png "The automation form with the Instructions, Triggers, and Notifications sections. The trigger row shows At time, a weekday selector, checkout master, and Push to new branch.")

7.  Optionally, add one or more notifications. For details, see [Outgoing webhooks](/help/air/create-automation.html#outgoing_webhooks).

8.  Click Create.

## Triggers

A trigger is a run rule for the automation. It sets three things: what starts a run, which branch the run works on, and what JetBrains Air does with the changes the run produces. An automation can have one or more triggers, and each trigger can handle changes differently.

![Automation run rules](https://resources.jetbrains.com/help/img/air/automations-triggers-run-rules.png "Automation run rules")

To add a trigger, click Add Trigger and select a start condition. Each trigger row then has up to three parts:

-   **Start condition** – the event or schedule that starts a run. See [Triggers. Start conditions](/help/air/create-automation.html#automation_trigger_start_conditions).

-   **Branch** – the branch the run checks out, chosen with the checkout selector. Pull request triggers don't show this selector – they run on the pull request's source branch.

-   **Change handling** – what happens to the changes the run produces. See [Triggers. Change handling](/help/air/create-automation.html#automation_trigger_change_handling).

## Triggers. Start conditions

The start condition is the event or schedule that starts a run. Choose one when you add the trigger.

### Schedule

Use the At time trigger to run the automation at a specific time on selected days. This is useful for recurring daily or weekly routines.

### Repetitive run

Use the Repeat every trigger to run the automation on a fixed interval, for example, every 2 hours.

### GitHub events

Use GitHub event triggers to start automations in response to activity in a repository.

Once the JetBrains Air app is installed for your personal or organization account, JetBrains Air automatically receives notifications for repositories covered by that installation. There is no separate GitHub webhook setup inside the automation itself.

Each GitHub event trigger maps to a single GitHub action, so the automation runs only when that exact action happens, not on every change to the pull request or issue.

Pull request events:

-   PR opened – a new pull request is created. Reopening a closed pull request doesn't fire this trigger.

-   PR has new changes – new commits are pushed to the pull request branch. This is the GitHub `synchronize` action. It doesn't fire on comments, label changes, or edits to the title or description.

-   PR merged – the pull request is merged into its target branch. Closing a pull request without merging doesn't fire this trigger.

-   PR review requested – a review is requested from a user or team on the pull request. Enter a login in the Reviewer login field to react only to requests for that reviewer.

-   PR review received – a review is submitted on the pull request. Use the Any review selector to filter by review type, and the Reviewer login and PR author login fields to react only to reviews from a specific reviewer or on a specific author's pull requests.

-   PR labeled – a label is added to the pull request. Enter the label in the Label name field. Removing a label doesn't fire this trigger. If you add several labels at once, the trigger fires once per label.

For pull request triggers, select Ignore draft pull requests to skip runs while a pull request is still a draft.

Issue events:

-   Issue opened – a new issue is created.

-   Issue label – a label is added to an issue. Enter the label in the Label name field. Removing a label doesn't fire this trigger. If you add several labels at once, the trigger fires once per label.

Workflow events:

-   Workflow failed – a GitHub Actions workflow run fails. Enter a name in the Workflow name field to react only to a specific workflow. Use this to investigate a failed build or prepare a recovery change.

-   Workflow job failed – a single job within a GitHub Actions workflow fails. Enter a name in the Job name field to react only to a specific job, and in the Workflow name field to limit it to a specific workflow.

> ### note
>
> Comments on pull requests and issues don't fire these triggers. To start an automation from a comment or another external signal, use an [incoming webhook](/help/air/create-automation.html#automation_trigger_webhook) instead.

To make GitHub repositories and events available, see [Connect repositories](connect-repositories.html).

### Incoming webhooks

Use the Webhook trigger to start an automation from an external system. This is useful when another service needs to notify JetBrains Air about an event and trigger an automation run.

After you add the trigger and save the automation, JetBrains Air generates:

-   a webhook URL in the format `.../api/v1/events/automations/<automation-id>`

-   a permanent token used to authorize requests to this webhook

Use Copy Webhook URL and Copy Token to copy these values from the trigger section.

Configure your external system to send an HTTP `POST` request to the webhook URL and include the token in the `Authorization` header as `Authorization: ApiKey <token>`.

The request body is optional. You can send a webhook without any payload if the automation only needs the event itself.

If you want to pass additional input to the automation task, send a JSON payload in the request body. This payload becomes part of the task context.

For example:

```
curl -X POST \
  'https://api.jetbrains.cloud/air-automations-gateway/api/v1/events/automations/0987654321def' \
  -H 'Authorization: ApiKey abc1234567890' \
  -H 'Content-Type: application/json' \
  -d '{
    "environment": "staging",
    "service": "user-service",
    "error": "Failed to create user",
    "timestamp": "2026-04-23T10:15:00Z"
  }'
```

## Triggers. Change handling

Choose what JetBrains Air does with the changes a run produces. This decides where the result lands, so you can send an automation straight to a pull request or keep it review-only. For what you can do with a run afterward, see [Work with automation run results](automation-run-results.html).

![Change handling](https://resources.jetbrains.com/help/img/air/automations-change-handling.png "Change handling")

-   No code changes – the run doesn't commit or push anything. Use it for automations that analyze, triage, or report and return their result through the run output or a [notification](/help/air/create-automation.html#outgoing_webhooks).

-   Push to source branch – commits and pushes the changes to the branch the run worked on: the checked-out branch, or the pull request's source branch. Use it to add commits to an existing pull request or update a branch in place.

-   Push to new branch – creates a new branch for the run's changes and pushes to it, without opening a pull request. You can open one later from the run.

-   Create a PR – pushes the changes to a new branch and opens a pull request automatically.

> ### note
>
> Not every option is available for every start condition.

## Notifications

Every automation reports its failures by default: when a run fails, JetBrains Air emails the automation's owner at the email address of their JetBrains Account.

To report runs somewhere else, use notifications (outgoing webhooks) to send automation results to an external system after a run completes.

To add an outgoing webhook, click Add Notification, select Webhook, and enter the destination URL.

When an automation run finishes, JetBrains Air sends an HTTP `POST` request to each configured webhook URL.

Every outgoing webhook request includes these headers:

-   `X-Air-Webhook-Id` – event identifier in the form `evt_<uuid>`. This value is stable across delivery attempts and can be used as an idempotency key.

-   `X-Air-Webhook-Event` – `automation.execution.succeeded` or `automation.execution.failed`

-   `X-Air-Webhook-Format` – `json` or `slack-workflow`

-   `User-Agent` – `Air-Webhooks/1`

-   `Content-Type` – `application/json`

Regardless of the format, every payload includes a `statusUrl` field with a link to the automation run that sent the notification, in the form `https://air.jetbrains.cloud/org/{orgId}/automations/{automationId}?run={runId}`. Open this link to see the run details in JetBrains Air.

### JSON format

For regular webhook URLs, JetBrains Air sends the payload in the `json` format.

Successful runs send the automation result in `output.result`. Failed runs send an `error` object with the failure details.

Example success payload:

```
{
    "id": "evt_9a3f2b",
    "type": "automation.execution.succeeded",
    "apiVersion": 1,
    "createdAt": "2026-05-11T11:48:06.000Z",
    "automationId": "auto-1a2b3c",
    "automationName": "AIR Automations Overview",
    "automationRunId": "run-9f8e7d",
    "statusUrl": "https://air.jetbrains.cloud/org/org-42/automations/auto-1a2b3c?run=run-9f8e7d",
    "output": {
        "result": "# Weekly summary\n\n…markdown body produced by the agent…"
    }
}
```

Example failure payload:

```
{
    "id": "evt_5c1e0d",
    "type": "automation.execution.failed",
    "apiVersion": 1,
    "createdAt": "2026-05-11T10:43:02.987Z",
    "automationId": "auto-4d5e6f",
    "automationName": "Nightly dependency upgrade",
    "automationRunId": "run-2c3b4a",
    "statusUrl": "https://air.jetbrains.cloud/org/org-42/automations/auto-4d5e6f?run=run-2c3b4a",
    "error": {
        "message": "Agent run timed out",
        "code": "timeout"
    }
}
```

### Slack workflow format

If the destination URL matches `https://hooks.slack.com/triggers/...`, JetBrains Air sends the payload in the `slack-workflow` format.

This format is flattened because Slack workflow variables must be primitive strings.

On success, the generated result is sent in `outputText`. On failure, the error is sent in `errorText`.

Example success payload:

```
{
    "id": "evt_9a3f2b",
    "type": "automation.execution.succeeded",
    "apiVersion": "1",
    "createdAt": "2026-05-11T11:48:06.000Z",
    "automationId": "auto-1a2b3c",
    "automationName": "AIR Automations Overview",
    "automationRunId": "run-9f8e7d",
    "statusUrl": "https://air.jetbrains.cloud/org/org-42/automations/auto-1a2b3c?run=run-9f8e7d",
    "outputText": "# Weekly summary\n\n…markdown body produced by the agent…",
    "errorText": ""
}
```

Example failure payload:

```
{
    "id": "evt_5c1e0d",
    "type": "automation.execution.failed",
    "apiVersion": "1",
    "createdAt": "2026-05-11T10:43:02.987Z",
    "automationId": "auto-4d5e6f",
    "automationName": "Nightly dependency upgrade",
    "automationRunId": "run-2c3b4a",
    "statusUrl": "https://air.jetbrains.cloud/org/org-42/automations/auto-4d5e6f?run=run-2c3b4a",
    "outputText": "",
    "errorText": "{\"message\":\"Agent run timed out\",\"code\":\"timeout\"}"
}
```

## Configure environments for automations

Automations are cloud tasks, so they run in cloud environments.

If you select just a repository in the Instructions section, the automation runs in that repository's default cloud environment. This is enough for simple cases.

If the automation needs specific dependencies, environment variables, secrets, or other runtime settings, create an environment configuration for the repository in advance, then select it instead of the repository – see [Configure environments](configure-environments.html).

The environments you can select depend on the automation's scope, which is set by the Project field: a personal automation (Personal) lists your personal environments, and a project automation lists that project's environments.

Each run gets its own environment, but a run can start from a snapshot of an earlier run or task on the same repository, so files outside the repository can be preserved. Don't rely on that for correctness – see [Snapshots and preserved state](cloud-tasks.html#state_between_runs).

## Add MCP connectors

[Connectors](connectors.html) give the automation's agent access to external tools through MCP, so it can read and act on data in services such as Sentry, Jira, or Figma during a run. In the automation settings, open the Connectors selector and select which connectors this automation uses.

> ### note
>
> The GitHub connector is always enabled for automations, so the GitHub MCP server is always available to the agent during a run. You can't disable it.

The selector shows the connectors available for the automation's scope:

-   For a project automation, it lists the project's connectors under Project Connectors. Select which of them the automation can use, or click Add Project Connector to add a new one.

-   For a personal automation, it lists your personal connectors. Select which of them the automation can use, or add a new one.

Selecting connectors doesn't replace `mcp.json`. The agent also uses any MCP servers defined in a `.mcp.json` file in the repository root, alongside the connectors you select. See [MCP servers](mcp-servers.html).

## Visibility and sharing

An automation is either personal or shared within a [project](projects.html). This sets who can use it and whose AI credits its runs consume:

-   Personal – the default. Only you can view, edit, or run the automation, and its runs consume your AI credits.

-   **Project** – project admins can manage the automation, and project members can view it and run it manually. Its runs consume the project's AI credits instead of yours – see [AI credits for automation runs](/help/air/create-automation.html#automation_ai_credits).

    > ### note
    >
    > Known limitation: For VCS providers other than GitHub, project automations use owner's AI credits instead of the project's.

To share an automation, select a project in the Project selector in the automation settings when you create or edit the automation. You can change the project at any time, or set it to Personal to make the automation personal again.

![The Project selector at the top of the automation properties, open and showing Personal, the available projects, and New Project](https://resources.jetbrains.com/help/img/air/automation-project-selector.png "The Project selector at the top of the automation properties, open and showing Personal, the available projects, and New Project")

## AI credits for automation runs

Every automation run consumes AI credits. Which credits a run draws on depends on whether the automation is personal or assigned to a [project](projects.html).

-   **Personal automation** – runs consume your AI credits, the same as the tasks you run yourself.

-   **Project automation** – runs consume the project's AI credits, not yours. These credits belong to the project's service account, and runs execute under that account. This applies whether you create the automation as a project automation or assign an existing one to a project. For details, see [Project service account](projects.html#project_service_account).

    > ### note
    >
    > Known limitation: For VCS providers other than GitHub, project automations use owner's AI credits instead of the project's.
