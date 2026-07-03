# Junie GitLab CI/CD

Last modified: 26 June 2026

Run AI tasks from GitLab issues or MRs with Junie GitLab CI/CD.

> ### note
>
> GitLab compatibility
>
> Junie GitLab CI/CD works with any GitLab instance, including GitLab.com (SaaS) and self-managed GitLab installations. The setup process is the same regardless of your GitLab deployment type.

## How it works

Junie GitLab CI/CD integrates Junie into your GitLab CI/CD pipelines.

When you tag `#junie` in a comment to a GitLab issue or merge request, the agent is invoked to run the task. Junie runs a CI pipeline to execute the task, creates a new Merge Request with the changes, and posts a comment with a link to the created MR.

![Junie gitlab issue comment](img/junie/junie_gitlab_issue-comment.png "Junie gitlab issue comment")

### Why use Junie GitLab CI/CD?

-   Delegate tasks to Junie: Junie creates merge requests with code changes from issue comments.

-   Have Junie review MRs: Tag and instruct `#junie` in a comment to an existing merge request to have the agent review and fix the changes before merging.

-   Fix issues in projects without opening the IDE: When running the task, the agent is aware of your entire project structure, agent guidelines, and existing code patterns the same way as it would when working directly in the IDE.

-   Iterate on tasks with follow-up instructions: The MR submitted by Junie needs another iteration? Tag `#junie` in a comment to it and provide follow-up instructions.

-   Work on multiple tasks at a time: Junie GitLab CI/CD can work on multiple tasks simultaneously, excluding parallel runs on the same MR branch.

## Setup

The setup process requires creation of a separate container project for Junie's CI/CD pipelines (one per GitLab instance). This allows you to run Junie without tweaking the CI/CD pipelines in your existing projects.

### Step 1: Set up a project for Junie

1.  Create a new empty GitLab project.

2.  Add the following environment variables in the project's Settings → CI/CD → Variables:

    > ### tip
    >
    > Minimum role to use pipeline variables should be set to Maintainer or higher.

    -   `JUNIE_API_KEY` with your API token for Junie. To generate the token, go to [junie.jetbrains.com/cli](https://junie.jetbrains.com/cli).

        Alternatively, instead of `JUNIE_API_KEY`, you can use your own API key from a third-party LLM provider (BYOK). Add one of the following variables: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GROK_API_KEY`, `OPENROUTER_API_KEY`, or `GOOGLE_API_KEY`.

    -   `GITLAB_TOKEN_FOR_JUNIE` with a [personal](https://docs.gitlab.com/user/profile/personal_access_tokens/#create-a-personal-access-token) or [group](https://docs.gitlab.com/user/group/settings/group_access_tokens/#create-a-group-access-token) Gitlab access token. Make sure that the token has at least Maintainer role and the api checkbox selected for Selected scope. Select `init` from the Environments dropdown to restrict the variable's exposure to Junie initialization jobs.

3.  Add a `.gitlab-ci.yml` file with the following contents to the project:

```
.gitlab-ci.yml
```

### Step 2: Initialize Junie in your project

1.  In Junie's project, go to Build → Pipelines and click New pipeline.

2.  On the Run new pipeline page that opens, fill in the Variable value for the `PROJECTS_TO_INIT` Variable key with a comma-separated lost of IDs for the projects where Junie needs to be initialized. For a project's ID, go to its Settings → General page.

    ![New gitlab pipeline](img/junie/new_gitlab_pipeline.png "New gitlab pipeline")

3.  Click the New pipeline button to open the new pipeline's page and run it.

    ![New gitlab pipeline run](img/junie/new_gitlab_pipeline_run.png "New gitlab pipeline run")

4.  Once the pipeline run is finished, make sure that the target projects have a webhook for triggering pipelines in Junie's project (Settings → Webhooks) and an access token allowing Junie to access the project's repository, MRs, or issues (Settings → Access tokens).

    ![Gitlab webhooks list](img/junie/gitlab_webhooks_list.png "Gitlab webhooks list")

    ![Gitlab access tokens list](img/junie/gitlab_access_tokens_list.png "Gitlab access tokens list")

## Use Junie GitLab CI/CD

### Basic usage

Type #junie or tag the Junie by JetBrains bot in an issue comment, followed by the description of what needs to be done.

![Gitlab junie comment](img/junie/gitlab_junie_comment.png "Gitlab junie comment")

![Gitlab junie mention](img/junie/gitlab_junie_mention.png "Gitlab junie mention")

### Code reviews

Junie will perform a code review with a pre-defined prompt for any opened merge request automatically.

![Gitlab auto review](img/junie/gitlab_auto_review.png "Gitlab auto review")

-   To customize the prompt for automatically triggered reviews, adjust the `JUNIE_CUSTOM_PROMPT` variable in the [`.gitlab-ci.yml`](/docs/junie-gitlab-ci-cd.html#gitlab-ci-yml) configuration file.

-   To disable automated code reviews, uncheck the Merge request events checkbox in the Junie webhook's settings.

-   To trigger a code review in an existing merge request on demand, leave a comment tagging Junie along with the `code-review` keyword.

    ![Gitlab junie mr review](img/junie/gitlab_junie_mr_review.png "Gitlab junie mr review")

Thanks for your feedback!

Was this page helpful?

YesNo
