# Junie GitHub Action

Last modified: 10 July 2026

Junie GitHub Action integrates Junie CLI into your GitHub workflows. It also allows you to trigger Junie to run code reviews, fix bugs, or implement new features right from GitHub issues or PR comments.

The action executes entirely on your GitHub runners, so your code always stays on your infrastructure.

[View on GitHub Marketplace](https://github.com/marketplace/actions/official-junie-github-action)

## Key features

-   [Automated code reviews](automated-code-reviews.html): Automatically review pull requests and post inline comments with suggestions. Use the built-in review prompt or define your own review criteria.

-   Turning issues into fixes: Junie creates pull requests with code changes or fixes from issue descriptions, PR reviews, or comments.

-   Agent-enhanced CI/CD automation: Fix CI build failures, automatically resolve merge conflicts, or solve your specific CI/CD goals with Junie CLI.

-   MCP extensibility: Connect to pre-configured MCP servers from GitHub Actions workflows.

-   Agent guidelines for GitHub: Define GitHub-specific guidelines using the `junie_guidelines_filename` input parameter or the `JUNIE_GUIDELINES_FILENAME` environment variable to override the default guideline file. This can be useful if you are using Junie both in your JetBrains IDE or terminal and in GitHub Actions.

## Setup

Get started in minutes with your API key and preconfigured templates.

> ### tip
>
> Prerequisites
>
> -   A GitHub repository with GitHub Actions enabled.
>
> -   Admin access to configure repository's secrets and workflows.
>
> -   The Allow GitHub Actions to create and approve pull requests checkbox enabled in the Workflow permissions section of your repository's Settings → Actions → General.
>

To set up [Junie GitHub Actions](https://github.com/JetBrains/junie-github-action) in your repository:

1.  Add `JUNIE_API_KEY` to the repository's secrets in Settings → Secrets and variables → Actions. To generate the key, go to [junie.jetbrains.com/cli](https://junie.jetbrains.com/cli).

    > ### note
    >
    > Bring your own key (BYOK)
    >
    > Alternatively, you can use your own API keys from third-party LLM providers like OpenAI, Anthropic, Google, or OpenRouter. The supported keys are: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GROK_API_KEY`, `OPENROUTER_API_KEY`, `GOOGLE_API_KEY`.

2.  Add one of the [preconfigured workflow files](https://github.com/JetBrains/junie-github-action/blob/main/COOKBOOK.md) to your repository's `.github/workflows/`.

    To start with, you can copy and paste the following `junie.yaml` template:

    ```
    name: Junie

    on:
      issue_comment:
        types: [created]
      pull_request_review_comment:
        types: [created]
      issues:
        types: [opened, assigned]
      pull_request_review:
        types: [submitted]

    jobs:
      junie:
        if: |
          (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@junie-agent')) ||
          (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@junie-agent')) ||
          (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@junie-agent')) ||
          (github.event_name == 'issues' && (contains(github.event.issue.body, '@junie-agent') || contains(github.event.issue.title, '@junie-agent')))
        runs-on: ubuntu-latest
        permissions:
          contents: write
          pull-requests: write
          issues: write
        steps:
          - name: Checkout repository
            uses: actions/checkout@v4
            with:
              fetch-depth: 1

          - name: Run Junie
            id: junie
            uses: JetBrains/junie-github-action@v0
            with:
              junie_api_key: ${{ secrets.JUNIE_API_KEY }} # Change to the vendor key in case of BYOK, e.g. `anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}`
    ```

    This workflow will run Junie CLI whenever the user tags @junie-agent in an issue or PR comment.

    > ### tip
    >
    > Version tags
    >
    > `JetBrains/junie-github-action@v0` for the latest v0.x.x version (pre-release).
    >
    > `JetBrains/junie-github-action@v0.1.0` for a specific version.
    >
    > `JetBrains/junie-github-action@main` for the latest development version (not recommended for production).

A repository can have multiple workflow files with the [Junie GitHub Actions](https://github.com/JetBrains/junie-github-action) in it, each performing a different set of tasks.

See the [cookbook](basic-workflow.html) for examples of workflow templates to help you get up and running with different scenarios. You can adapt the templates to configure triggers, permissions, branches, or output, adjust the prompt, or further customize the action with parameters.

## Parameter reference

### Input Parameters

#### Trigger configuration

Input

Description

Default

`trigger_phrase`

The phrase to activate Junie in comments/issues.

`@junie-agent`

`assignee_trigger`

The username that triggers a Junie action when assigned.

\-

`label_trigger`

The GitHub label that triggers a Junie action when applied to an issue.

`junie`

#### Branch management

Input

Description

Default

`base_branch`

The base branch for creating new branches from.

`github.base_ref`

`create_new_branch_for_pr`

Determines whether Junie should create a new branch when proposing changes for a pull request, or push commits directly to the existing branch of that PR.

`false`

#### Junie configuration

Input

Description

Default

`prompt`

User-defined instructions for Junie.

\-

`model`

The LLM to use for Junie's primary agent. For the available options, see [Model selection](junie-cli-model-selection.html).

\-

`junie_version`

The Junie CLI version to install.

\-

`junie_work_dir`

The directory used by Junie CLI for storing its working files, caches, and session artifacts.

`/tmp/junie-work`

`junie_guidelines_filename`

The name of a file with Junie's guidelines (e.g. `my_guidelines_github.md`) that will override the default `.junie/AGENTS.md` file for the current environment.

`AGENTS.md`

`allowed_mcp_servers`

A comma-separated list of [MCP servers](/docs/junie-on-github.html#mcp-servers) to enable.

The `mcp_github_inline_comment_server` MCP server is automatically enabled for `pull_request` events.

\-

#### Advanced features

Input

Description

Default

`resolve_conflicts`

Enables Junie to automatically detect and resolve merge conflicts in pull requests.

Always set to `false` for workflows with manual `@junie-agent` resolution.

`false`

`silent_mode`

Runs Junie in silent mode without repository modifications (committing code, creating branches or pull requests) or user-facing feedback (posting PR/issue or inline comments).

Useful for dry runs, testing, or when Junie is integrated into a larger pipeline where another tool handles the generated results via [output parameters](/docs/junie-on-github.html#output-parameters).

`false`

`use_single_comment`

Reuses and updates a single comment for all Junie runs instead of creating a new comment for every execution.

`false`

`use_structured_prompt`

Uses the new structured prompt format with XML tags for better organization.

`true`

#### Authentication

##### Junie API key

Input

Description

`junie_api_key`

JetBrains Junie API key. To generate the key, go to [junie.jetbrains.com/cli](https://junie.jetbrains.com/cli).

`custom_github_token`

Custom GitHub token (optional).

##### Provider API keys (BYOK)

Input

Description

`openai_api_key`

API key for [OpenAI](https://platform.openai.com/) (GPT models).

`anthropic_api_key`

API key for [Anthropic](https://console.anthropic.com/) (Claude models).

`grok_api_key`

API key for [xAI](https://x.ai/) (Grok models).

`openrouter_api_key`

API key for [OpenRouter](https://openrouter.ai/), an aggregator service that provides access to a wide variety of LLMs from different providers through a unified API (BYOK).

`google_api_key`

API key for [Google AI](https://ai.google.dev/) (Gemini models).

Example — using an Anthropic key:

```
- uses: JetBrains/junie-github-action@v1
  with:
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

Example — using an OpenRouter key:

```
- uses: JetBrains/junie-github-action@v1
  with:
    openrouter_api_key: ${{ secrets.OPENROUTER_API_KEY }}
```

> ### tip
>
> Provide either `junie_api_key` or one of the BYOK keys — not both.
>
> All API keys are automatically masked in workflow logs.

### Output parameters

Output

Description

`branch_name`

Name of the working branch created by Junie.

`should_skip`

Specifies whether Junie's execution was skipped (due to no trigger matched or no `write` permissions).

`commit_sha`

SHA of the commit created by Junie (if any).

`pr_url`

URL of the pull request created by Junie (if any).

`junie_title`

Title of the task completion from Junie.

`junie_summary`

Summary of the changes made by Junie.

`github_token`

The GitHub token used by the Junie action.

Example usage of output parameters in the workflow:

```
- uses: JetBrains/junie-github-action@v0
  id: junie
  with:
    junie_api_key: ${{ secrets.JUNIE_API_KEY }}

- name: Use outputs
  if: steps.junie.outputs.should_skip != 'true'
  run: |
    echo "Branch: ${{ steps.junie.outputs.branch_name }}"
    echo "Title: ${{ steps.junie.outputs.junie_title }}"
    if [ "${{ steps.junie.outputs.pr_url }}" != "" ]; then
      echo "PR created: ${{ steps.junie.outputs.pr_url }}"
    fi
```

### MCP servers

The available pre-configured MCP servers are:

MCP server

Description

`mcp_github_checks_server`

Analyzes failed GitHub Actions checks.

`mcp_github_inline_comment_server`

Creates inline code review comments with GitHub suggestions on PRs (enabled automatically for PRs).

Example configuration:

```
- uses: JetBrains/junie-github-action@v0
  with:
    junie_api_key: ${{ secrets.JUNIE_API_KEY }}
    allowed_mcp_servers: "mcp_github_checks_server"
```

> ### tip
>
> The `mcp_github_inline_comment_server` is enabled automatically for `pull_request` events. No manual configuration is needed.

Thanks for your feedback!

Was this page helpful?

YesNo
