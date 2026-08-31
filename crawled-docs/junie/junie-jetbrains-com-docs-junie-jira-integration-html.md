1.  [Junie GitHub Action](junie-on-github.html)

2.  [Jira integration](#0)

# Jira integration

Last modified: 28 August 2026

Trigger Junie GitHub Action from issues and issue comments in [Atlassian Jira](https://www.atlassian.com/software/jira).

## How it works

When a Jira issue is created, updated, or has a special label added to it, or when a user comments on a Jira issue mentioning @junie, a Junie GitHub Action workflow is started via `workflow_dispatch`.

Junie receives the issue details (summary, description, user discussion in the comments, attached screenshots/other files), implements the changes based on the task description, and creates a GitHub PR with the changes.

Junie posts a comment to the Jira issue to inform you that it has started working, and when finished, updates this comment with the task result (a link to the GitHub PR or error details).

## Setup

### Step 1: Create a Jira user for Junie

> ### tip
>
> A dedicated Jira user for Junie is recommended, but not required. Having its own user allows Junie to author comments to Jira issues and be tagged by username.

1.  In your Jira instance, go to Administration → User Management → Users.

2.  Click Create user and fill in:

    -   Email: a valid email address for the Junie user (e.g., `junie@your-company.com`).

    -   Full name: `Junie`.

    -   Username: `junie`.

3.  Grant the user appropriate project permissions (at a minimum, `browse projects` and `add comments`).

4.  Log in as the new user, go to the [Atlassian Account](https://id.atlassian.com/manage-profile/security/api-tokens) settings → Security → Create and manage API tokens, and create an API token.

    You'll need this API token when [configuring the GitHub project](/docs/junie-jira-integration.html#step-2-configure-the-github-project) as a value for the `JIRA_API_TOKEN` secret.

### Step 2: Configure the GitHub project

Configure the GitHub project where the Junie GitHub Action will be run:

1.  Add the following secrets to your GitHub repository in Settings → Secrets and variables → Actions.

    Secret

    Description

    Required

    `JUNIE_API_KEY`

    The API key for Junie CLI generated at [junie.jetbrains.com/cli](https://junie.jetbrains.com/cli).

    Yes

    `JIRA_EMAIL`

    The email address registered for your Jira user at [step 1](/docs/junie-jira-integration.html#step-1-create-a-jira-user-for-junie).

    Yes

    `JIRA_API_TOKEN`

    The Jira API token created for your Jira user at [step 1](/docs/junie-jira-integration.html#step-1-create-a-jira-user-for-junie).

    > ### tip
    >
    > If you are not using a dedicated Jira user for Junie, [generate an API token](https://id.atlassian.com/manage-profile/security/api-tokens) for your own Jira user instead.

    Yes

    `JIRA_BASE_URL`

    The URL of your Jira instance, for example, `https://your-company.atlassian.net`.

    Yes

2.  Copy and add the `.github/workflows/junie-jira.yml` workflow file to your GitHub repository.

    ```
    name: Junie Jira Integration

    on:
      workflow_dispatch:
        inputs:
          action:
            description: 'Action type'
            default: 'jira_event'
            required: true
            type: string
          issue_key:
            description: 'Jira issue key (e.g., TEST-1)'
            required: true
            type: string
          issue_summary:
            description: 'Jira issue summary/title'
            required: true
            type: string
          issue_description:
            description: 'Jira issue description'
            required: false
            type: string
          issue_comments:
            description: 'Jira issue comments'
            required: false
          issue_attachments:
            description: 'Jira issue attachments'
            required: false
          trigger_comment:
            description: 'Optional comment that triggered Junie (used as user instruction)'
            required: false
            type: string

    jobs:
      junie:
        runs-on: ubuntu-latest
        permissions:
          contents: write
          pull-requests: write
          issues: write
        if: ${{ inputs.action == 'jira_event' }}

        steps:
          - name: Checkout repository
            uses: actions/checkout@v4
            with:
              fetch-depth: 1

          - name: Run Junie
            id: junie
            uses: JetBrains/junie-github-action@v1
            with:
              junie_api_key: ${{ secrets.JUNIE_API_KEY }}
              jira_base_url: ${{ secrets.JIRA_BASE_URL }}
              jira_email: ${{ secrets.JIRA_EMAIL }}
              jira_api_token: ${{ secrets.JIRA_API_TOKEN }}
    ```

### Step 3: Create automation rules in Jira

In your Jira space, create automation rules in Space settings → Automation:

1.  In Manage secrets (or organization-level Automation secrets), add a new secret named `GITHUB_TOKEN` that will be used to authorize requests to the GitHub API from automation rules in Jira.

    As the value, provide a GitHub Personal Access Token (classic or fine-grained) with at least `workflow` scope (and `repo` for private repositories). This token will be referenced in headers as `YOUR_GITHUB_TOKEN`.

2.  Create an automation rule for triggering the GitHub workflow.

    There are rules for two trigger types:

    -   Rule 1: Label trigger – triggers the Junie GitHub Action when a Jira issue is created or updated, or a label (such as `junie-agent`) is added to the issue.

        Trigger: Issue created/updated, or Label added.

        Condition (for a label trigger): `{{issue.labels}}` contains `junie-agent`.

        Action: Send web request with the following configuration:

        Web request URL:

        ```
        https://api.github.com/repos/{owner}/{repo}/actions/workflows/junie-jira.yml/dispatches
        ```

        HTTP method: `POST`

        Web request body (Custom data):

        ```
        {
          "ref": "YOUR DEFAULT BRANCH(main/master for example)",
          "inputs": {
            "action": "jira_event",
            "issue_key": "{{issue.key}}",
            "issue_summary": "{{issue.summary.jsonEncode}}",
            "issue_description": "{{issue.description.jsonEncode}}",
            "issue_comments": "[{{#issue.comments}}{\"author\":\"{{author.displayName.jsonEncode}}\",\"body\":\"{{body.jsonEncode}}\",\"created\":\"{{created}}\"}{{^last}},{{/}}{{/}}]",
            "issue_attachments": "[{{#attachment}}{\"filename\":\"{{filename.jsonEncode}}\",\"mimeType\":\"{{mimeType}}\",\"size\":{{size}},\"content\":\"{{content}}\"}{{^last}},{{/}}{{/}}]"
          }
        }
        ```

        Headers:

        ```
        Authorization: Bearer YOUR_GITHUB_TOKEN
        Content-Type: application/json
        ```

    -   Rule 2: Comment trigger – triggers the Junie GitHub Action when a user comments on a Jira issue tagging `@junie`.

        Trigger: Work item commented.

        Comment type: Comment is the main action.

        Condition: `{{comment.body}}` contains `@junie`.

        Action: Send web request with the following configuration:

        Web request URL:

        ```
        https://api.github.com/repos/{owner}/{repo}/actions/workflows/junie-jira.yml/dispatches
        ```

        HTTP method: `POST`

        Web request body (Custom data):

        ```
        {
          "ref": "main",
          "inputs": {
            "action": "jira_event",
            "issue_key": "{{issue.key}}",
            "issue_summary": "{{issue.summary.jsonEncode}}",
            "issue_description": "{{issue.description.jsonEncode}}",
            "issue_comments": "[{{#issue.comments}}{\"author\":\"{{author.displayName.jsonEncode}}\",\"body\":\"{{body.jsonEncode}}\",\"created\":\"{{created}}\"}{{^last}},{{/}}{{/}}]",
            "issue_attachments": "[{{#attachment}}{\"filename\":\"{{filename.jsonEncode}}\",\"mimeType\":\"{{mimeType}}\",\"size\":{{size}},\"content\":\"{{content}}\"}{{^last}},{{/}}{{/}}]",
            "trigger_comment": "{{comment.body.jsonEncode}}"
            }
        }
        ```

        Headers:

        ```
        Authorization: Bearer YOUR_GITHUB_TOKEN
        Content-Type: application/json
        ```

        > ### tip
        >
        > Handling special characters
        >
        > The action automatically handles unescaped special characters (newlines, quotes, etc.) that may not be properly encoded by Jira's `jsonEncode`. This means the basic configuration above will work in most cases without additional
        > modifications.
        >
        > If you experience issues or want to ensure maximum compatibility, you can add explicit character replacement in your Jira automation:
        >
        > ```
        > {
        >   "ref": "main",
        >   "inputs": {
        >     "action": "jira_event",
        >     "issue_key": "{{issue.key}}",
        >     "issue_summary": "{{issue.summary.jsonEncode}}",
        >     "issue_description": "{{issue.description.jsonEncode}}",
        >     "issue_comments": "[{{#issue.comments}}{\"author\":\"{{author.displayName.jsonEncode}}\",\"body\":\"{{body.jsonEncode.replace(\"\\n\",\" \").replace(\"\\\"\",\"\")}}\",\"created\":\"{{created}}\"}{{^last}},{{/}}{{/}}]",
        >     "issue_attachments": "[{{#attachment}}{\"filename\":\"{{filename.jsonEncode}}\",\"mimeType\":\"{{mimeType}}\",\"size\":{{size}},\"content\":\"{{content}}\"}{{^last}},{{/}}{{/}}]"
        >   }
        > }
        > ```
        >
        > The `.replace("\\n"," ").replace("\\"","")` addition removes newlines and quotes that could break JSON parsing.

Thanks for your feedback!

Was this page helpful?

YesNo
