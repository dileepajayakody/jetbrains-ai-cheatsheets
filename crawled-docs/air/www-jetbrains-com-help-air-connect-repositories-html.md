1.  [Cloud tasks](cloud-tasks.html)

2.  [Source control](#0)

EAP

# Source control

Last modified: 19 August 2026

Unlike local runs, cloud environments do not already have your project checked out. To make repositories available for the cloud environments, configure integration with a supported VCS provider: [GitHub](/help/air/connect-repositories.html#github_access) or [GitLab](/help/air/connect-repositories.html#gitlab_access).

Repository access is based on the [JetBrains Air](/help/air/connect-repositories.html#how_repository_access_works) connection app in your VCS provider. It works differently on GitHub than on the other providers.

You can start the connection flow from [the web version of JetBrains Air](https://air.jetbrains.cloud). In JetBrains Air and AI Assistant in IntelliJ-based IDEs, repository authorization is started from the cloud task flow.

## Connect repositories to Air

Make sure the following prerequisites are met:

-   You have access to the repository you want to work on in GitHub or GitLab.

-   **For GitHub organization repositories** – the JetBrains Air connection app is installed in GitHub for the organization that owns the repository. A user with administrative permissions in that organization does this once – see [Set up organization repository access on GitHub](/help/air/connect-repositories.html#prepare_organization_repositories).

-   **For personal repositories** – no extra setup is needed. You authorize the app for your own account as part of the connection flow, and on GitHub you install it for your account at the same time.

### Connect repositories

1.  Start the connection flow.

    -   **From the web version of JetBrains Air:**

        In [the web version of JetBrains Air](https://air.jetbrains.cloud), go to Settings | VCS Providers, find your VCS provider, and click Connect.

    -   **From JetBrains Air or AI Assistant:**

        Start creating a task and select a cloud run environment. See how to do it in [JetBrains Air](execution-environments.html#run_in_cloud) and in [AI Assistant](run-tasks-in-cloud.html#start_cloud_task_in_ide). The task flow prompts you to connect the provider when access is needed.

2.  If the JetBrains Air connection app isn't authorized yet, click Authorize and complete the provider's authorization flow.

    Authorizing lets the app act on your behalf in the provider, for example, to read code and open pull requests. It doesn't widen what you can reach – you never gain access to repositories you can't already access in the provider.

3.  After the connection is established, the connected provider appears in [the web version of JetBrains Air](https://air.jetbrains.cloud) under Settings | VCS Providers, showing the connected account and the organizations available through that connection.

    ![The VCS Providers page in the web version of JetBrains Air showing a connected account and its available organizations](https://resources.jetbrains.com/help/img/air/airteam-vcs-connections-no-bb.png "The VCS Providers page in the web version of JetBrains Air showing a connected account and its available organizations")

4.  Finish the flow. What happens next depends on your VCS provider.

    -   **GitHub** – authorization grants access to your personal repositories but not to organization repositories.

        If the task still can't run, read access to the target repository is required. Click Manage to open GitHub and grant the app access to the repository, or request it if you aren't entitled to grant it yourself. See [Manage repository access](/help/air/connect-repositories.html#manage_repository_access).

        Organization owners are notified about the request, but repository admins aren't. If the repository is administered by a repository admin, contact them directly.

    -   **GitLab** – authorizing completes the connection. Cloud tasks can use every repository you can access in GitLab, with no extra step.

A cloud task runs against one repository. If the agent also needs code from another repository, for example shared skills or configuration, clone it from the environment's startup script – see [Clone additional repositories](clone-additional-repositories.html).

## How repository access works

How JetBrains Air accesses your repositories depends on the provider. GitHub is the only provider with an installation step: someone installs the JetBrains Air connection app into an account, and that installation carries its own list of repositories it can access. Every other provider uses a plain OAuth authorization that is scoped to you, with nothing to install.

Whose access the agent uses

When a cloud task reads your code or opens a pull request, it acts within your own access rights and never sees repositories you can't already access in the VCS provider. Connecting JetBrains Air doesn't widen what you can reach – it only lets JetBrains Air act on the repositories you already have access to.

-   **To the VCS provider**, access goes through the JetBrains Air app with your authenticated user as the principal, so the provider's own permissions gate every action.

-   **Within JetBrains Air**, the cloud task operates under your user or service account.

### GitHub

On GitHub, repository access goes through the JetBrains Air connection app, published as [JetBrains Air](https://github.com/apps/jetbrains-air) in the GitHub Marketplace.

The app is installed per account, not per repository

The JetBrains Air connection app is installed into a GitHub **account** – a personal account or an organization – not into individual repositories. You install it once per account, then choose which repositories that installation can access: all repositories or only selected ones. You can change this selection at any time (see [Manage repository access](/help/air/connect-repositories.html#manage_repository_access)).

Installing and authorizing the app

Connecting GitHub involves two distinct actions:

-   **Installing the app** – an administrator installs the JetBrains Air connection app into a GitHub account – a personal account or an organization – and chooses which repositories the app can access. This is what makes those repositories available to JetBrains Air.

-   **Authorizing the app** – each user authorizes the JetBrains Air connection app to act on their behalf, for example, to view issues and create pull requests. This is an OAuth flow.

Sometimes one person performs both actions. For example, when you connect your own personal account, you both install the app for that account and authorize it to act on your behalf. For an organization, an administrator usually installs the app, and each user then authorizes it for themselves.

Who can grant the app access to a repository

A user can grant app access in these cases:

-   **Personal repositories** – if the app is installed in the user's personal account, the user can grant access to their personal repositories.

-   **Organization repositories** – organization owners can grant the app access to organization repositories.

-   **Repository admins** – repository administrators can grant access to repositories they administer, if the organization allows repository administrators to install GitHub apps.

Users with only normal read or write access cannot directly grant the app access to a repository. On GitHub, such repositories can appear with a Request badge instead.

If you aren't an owner or repository admin, you can't install the app yourself. When you start the connection flow, GitHub sends an installation request to your organization's owners, similar to requesting any other third-party GitHub app. After an owner approves and installs the app, you can authorize it for yourself and access the repositories you're entitled to.

But repository admins aren't notified about requests for the repositories they administer. If the repository you need is administered by a repository admin rather than an organization owner, contact them directly.

How to make a repository appear in JetBrains Air

Installing the app for an organization does not mean that every repository in that organization will appear for every user in JetBrains Air.

A repository appears in JetBrains Air only if both of the following are true:

-   the app installation has access to that repository

-   the user has explicit repository access in GitHub

**Repository type**

**When it appears in JetBrains Air**

Personal repository

The app is installed in the personal account and has access to the repository.

Organization public repository

The organization installation has access to the repository.

Organization private repository

The organization installation has access to the repository, and the user has explicit repository access in GitHub.

Organization internal repository

The organization installation has access to the repository, and the user has explicit repository access in GitHub. Organization membership alone is not enough.

**Internal repositories need special attention.** A user may be able to open an internal repository directly in GitHub because they belong to the organization, but the same repository still may not appear in JetBrains Air.

For internal repositories, the usual fix is to grant the user explicit repository access, for example through a team or a direct collaborator role.

### GitLab

GitLab has no installation step. You authorize JetBrains Air once through OAuth, and the authorization is scoped to you: cloud tasks can use any repository you can access in GitLab.

The authorization requests these GitLab scopes:

-   `api` – acting on your behalf through the GitLab API, for example, to open a merge request

-   `read_repository` – cloning the repository into the cloud environment

-   `write_repository` – pushing the task branch back to GitLab

To change which repositories a cloud task can reach, change your own access in GitLab.

## Set up organization repository access on GitHub

> ### tip
>
> These instructions are for GitHub organization administrators. Other providers have no installation step, so there is nothing to set up for an organization – each user authorizes access for themselves.

Installing the connection app is one part of setting up JetBrains Air for an organization. For the other steps, see [Set up Air for your organization](set-up.html#setup-admin).

To make organization repositories available in JetBrains Air, the JetBrains Air connection app must first be installed for that organization in GitHub.

This first step must be done by a user with sufficient administrative permissions in that organization – see [Who can grant the app access to a repository](/help/air/connect-repositories.html#who_can_grant_access).

### Grant JetBrains Air access to organization repositories

1.  In [the web version of JetBrains Air](https://air.jetbrains.cloud), go to Settings | VCS Providers.

2.  Find GitHub and click Connect.

3.  In the GitHub flow opened by the web version of JetBrains Air, install the [JetBrains Air](https://github.com/apps/jetbrains-air) connection app for the organization.

4.  Grant the app access either to all organization repositories or only to selected repositories.

    Only the repositories granted to the app at this stage can later appear in JetBrains Air.

After that, users from that organization can connect GitHub in JetBrains Air and access the repositories that are available to them according to GitHub's access rules.

## Manage repository access

On GitHub, you choose which repositories the JetBrains Air connection app can access. You can open repository access management from Settings | VCS Providers in the web version of JetBrains Air, or from the Manage button shown in the task flow when a task needs read access to a repository.

### Manage repository access

1.  In [the web version of JetBrains Air](https://air.jetbrains.cloud), open Settings | VCS Providers.

2.  Find the connected provider and click Settings.

3.  Select the personal account or organization account you want to manage.

    ![GitHub app installation flow where the user chooses a personal or organization account](https://resources.jetbrains.com/help/img/air/air-team-github-app-connection.png "GitHub app installation flow where the user chooses a personal or organization account")

4.  Update repository access for that account.

    For example, in GitHub you can choose:

    -   **All repositories** – the app can access all current and future repositories in that account

    -   **Only select repositories** – the app can access only the repositories you choose

    For a personal account, switching to Only select repositories lets you choose which of your repositories the app can access.

    For an organization account, the list can also include repositories that are allowed for the app installation but that you cannot grant yourself. On GitHub, such repositories can appear with a Request badge. You can request access to those repositories from this screen. Organization owners are notified about the request, but repository admins aren't, so contact them directly.

5.  Save the changes.

## If a repository does not appear in JetBrains Air

If a repository is missing from the repository list in JetBrains Air, check the following:

-   the provider is connected in JetBrains Air

-   on GitHub, the app installation has access to that repository

-   you are connected to the correct personal or organization account

-   you have the required repository access in the VCS provider

-   for GitHub internal repositories, you are not relying only on organization membership visibility
