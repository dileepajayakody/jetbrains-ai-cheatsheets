1.  [Automations](automations.html)

2.  [Create automations](#0)

Limited EAP

# Create automations

Last modified: 23 June 2026

## Before you start

Before you create an automation, make sure that:

-   You are signed in to JetBrains Air with your JetBrains Account and have access to the organization.

-   The repository you want to automate is available through a configured repository connection. If needed, see [Connect repositories](connect-repositories.html).

## Create an automation

You can create an automation either from a predefined template or from scratch. A template mainly pre-fills the prompt. The rest of the workflow is the same.

### Create an automation

1.  Log in to [https://air.jetbrains.cloud](https://air.jetbrains.cloud) with your JetBrains Account.

2.  Open the Automations page.

3.  Start creating the automation in one of the following ways:

    -   click a predefined template to use it as a starting point

    -   click New Automation to create one from scratch

4.  Fill in the main automation settings:

    -   **Automation name** – the name shown in the automation list

    -   **Privacy** – who can view the automation and who can edit it. For details, see [Visibility and sharing](/help/air/create-automation.html#automation_visibility).

    -   **Repository** – the repository where the automation runs. To make repositories available in cloud environments, see [Connect repositories](connect-repositories.html).

    -   **Branch** – the branch context for the automation

    -   **Prompt** – the instructions the agent follows when the automation starts

    -   **Model** – the model used for automation runs

    -   **Use Template** – inserts a predefined prompt as a starting point

5.  Add one or more triggers. For details, see [Trigger types](/help/air/create-automation.html#automation_triggers).

6.  Optionally, add one or more notifications. For details, see [Outgoing webhooks](/help/air/create-automation.html#outgoing_webhooks).

7.  Click Create.

## Triggers

A trigger defines when JetBrains Air starts the automation. An automation can have one or more triggers.

### Schedule

Use the At time trigger to run the automation at a specific time on selected days. This is useful for recurring daily or weekly routines.

### Repetitive run

Use the Repeat every trigger to run the automation on a fixed interval, for example, every 2 hours.

### GitHub events

Use GitHub event triggers to start automations in response to activity in a repository.

Once the JetBrains Air app is installed for your personal or organization account, JetBrains Air automatically receives notifications for repositories covered by that installation. There is no separate GitHub webhook setup inside the automation itself.

When you add a GitHub event trigger, you select one or more specific events. Each event maps to a single GitHub action, so the automation runs only when that exact action happens, not on every change to the pull request or issue.

Pull request events:

-   **Opened** – a new pull request is created. Reopening a closed pull request does not fire this event.

-   **Updated** – new commits are pushed to the pull request branch. This is the GitHub `synchronize` action. It does not fire on comments, label changes, or edits to the title or description.

-   **Merged** – the pull request is merged into its target branch. Closing a pull request without merging does not fire this event.

-   **Review requested** – a review is requested from a user or team on the pull request.

-   **Labeled** – a label is added to the pull request. Removing a label does not fire this event. If you add several labels at once, the event fires once per label.

Issue events:

-   **Opened** – a new issue is created.

-   **Labeled** – a label is added to the issue. Removing a label does not fire this event. If you add several labels at once, the event fires once per label.

> ### note
>
> Comments on pull requests and issues do not fire these events. To start an automation from a comment or another external signal, use an [incoming webhook](/help/air/create-automation.html#automation_trigger_webhook) instead.

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

## Notifications

Use notifications (outgoing webhooks) to send automation results to an external system after a run completes.

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

Because automations run in cloud environments, they use the same environment model as cloud agent tasks.

If no environment configuration exists for the selected repository, JetBrains Air uses the default cloud environment. This is enough for simple cases.

If the automation needs specific dependencies, environment variables, secrets, or other runtime settings, create an environment configuration for the repository in advance.

For details, see [Configure environments](configure-environments.html).

## Visibility and sharing

![Visibility of an automation](https://resources.jetbrains.com/help/img/air/automations-visibility.png "Visibility of an automation")

Every automation has a privacy level.

-   **Private** – the automation is personal. Only its owner can view it, edit it, or run it manually. This is similar to cloud environment configurations, which are also personal entities.

-   **Organization** – the automation is visible to everyone in the organization. However, only its owner can edit it. Other users in the organization can view it and run it manually.
