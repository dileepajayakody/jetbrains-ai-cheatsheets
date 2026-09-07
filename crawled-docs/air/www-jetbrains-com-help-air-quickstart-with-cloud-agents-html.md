1.  [Cloud tasks](cloud-tasks.html)

2.  [Quickstart](#0)

EAP

# Quickstart with cloud tasks

Last modified: 05 August 2026

Cloud tasks run in remote cloud environments instead of on your machine. This is useful when you want to work from the web version of JetBrains Air, avoid setting up a project locally, run tasks in an isolated environment, or create automations that work without your machine being online.

## Before you start

Make sure the following prerequisites are met:

-   Your organization is set up for the web version of JetBrains Air. This is done once by an administrator – see [Set up Air for your organization](set-up.html#setup-admin).

-   You are signed in to your [JetBrains Account](https://account.jetbrains.com/login).

-   You have access to the repository you want to work on in the cloud, hosted in GitHub or GitLab.

-   **For organization repositories** – your organization is set up for cloud tasks, and the JetBrains Air app is installed in your VCS provider for the organization that owns the repositories. Ask your administrator to set it up – see [app installation instructions](connect-repositories.html#grant_air_access_to_org_repositories_procedure).

    **For personal repositories** – no prerequisites required – the app is installed for your personal account during onboarding.

## 1\. Complete onboarding

The first time you open [https://air.jetbrains.cloud](https://air.jetbrains.cloud), an onboarding wizard guides you through the initial setup: choosing an organization, connecting a VCS provider, authorizing access, and trying your first task.

After onboarding, the repositories you can access in the connected VCS provider become available in JetBrains Air, and you land on the new task page.

## 2\. (Optional) Run a task

After onboarding, you can run a task at any time – either from the web or from the desktop app.

From the web version of JetBrains Air

From JetBrains Air

### Run a cloud task from the browser

1.  Open [https://air.jetbrains.cloud](https://air.jetbrains.cloud).

2.  In the new task form, select a repository.

    ![New task page in the web version of JetBrains Air with the repository selector](https://resources.jetbrains.com/help/img/air/air-web-select-repository.png "New task page in the web version of JetBrains Air with the repository selector")

3.  Select a branch.

4.  Enter your task prompt and click Send.

    ![New task form in the web version of JetBrains Air](https://resources.jetbrains.com/help/img/air/air-web-new-task-form.png "New task form in the web version of JetBrains Air")

5.  Wait while JetBrains Air creates the cloud environment and starts the task.

    The task appears in the left panel in the Starting state.

    ![Running task in the left panel](https://resources.jetbrains.com/help/img/air/air-web-task-running.png "Running task in the left panel")

6.  Click the task to open the JetBrains Air editor right in the browser.

    After the task starts, you work with it the same way as with other JetBrains Air tasks: review changes, iterate on the result, and decide whether to accept the changes and create a pull request.

    ![Air editor in web](https://resources.jetbrains.com/help/img/air/air-web-cloud-task-session.png "Air editor in web")

### Run a cloud task from the desktop app

1.  Open your project in JetBrains Air.

2.  Start creating a new task.

3.  In the task header, click the run environment selector and choose Cloud.

    ![New cloud task form in the Air desktop app](https://resources.jetbrains.com/help/img/air/air-app-select-cloud-environment.png "New cloud task form in the Air desktop app")

4.  Enter your task prompt and send it.

    ![New task form in the Air desktop app](https://resources.jetbrains.com/help/img/air/air-app-new-cloud-task.png "New task form in the Air desktop app")

5.  Wait while JetBrains Air prepares the cloud environment and opens the task session.

6.  Review the running task in the same familiar JetBrains Air interface. When ready, create a pull request.

## 3\. (Optional) Connect other VCS providers

During onboarding, you connect one VCS provider. To work with repositories hosted in another provider, connect it from Settings | VCS Providers.

### Connect another VCS provider

1.  In the web version of JetBrains Air, click ![Settings](https://resources.jetbrains.com/help/img/air/air-web-settings-icon.png "Settings") Settings in the left panel, then open the VCS Providers section.

    ![Settings page in the web version of JetBrains Air with the VCS Providers section open](https://resources.jetbrains.com/help/img/air/air-web-settings-integrations-no-bb.png "Settings page in the web version of JetBrains Air with the VCS Providers section open")

2.  Click Connect next to the VCS provider you want to add.

3.  Complete the authorization flow in the provider UI and grant access to the required repositories (personal or organizational).

4.  Return to JetBrains Air and verify that the provider is shown as connected.

    ![VCS Providers page showing a successfully connected VCS provider](https://resources.jetbrains.com/help/img/air/air-web-provider-connected-no-bb.png "VCS Providers page showing a successfully connected VCS provider")

For full details, including how to grant access to organization repositories, see [Connect repositories](connect-repositories.html).

## 4\. (Optional) Create an environment configuration

For many projects, the default cloud environment is enough, and you can skip this step.

Create an environment configuration if your project needs additional setup, for example:

-   environment variables

-   personal secrets such as API tokens

-   a specific VM size

-   restricted or expanded internet access

Environment configurations are created per repository in Settings | Environments. If no configuration exists, JetBrains Air uses the default one.

### Create an environment configuration

1.  Open the web version of JetBrains Air at [https://air.jetbrains.cloud](https://air.jetbrains.cloud).

2.  In the left panel, click ![Settings](https://resources.jetbrains.com/help/img/air/air-web-settings-icon.png "Settings") Settings. Then open the Environments section.

3.  Click New Environment.

    [![Environments page](https://resources.jetbrains.com/help/img/air/air-web-new-env-config-button-no-envs.png "Environments page")](https://resources.jetbrains.com/help/img/air/air-web-new-env-config-button-no-envs.png)

4.  Adjust the configuration:

    -   Select the repository that the configuration will apply to.

    -   Choose the VM size and internet access mode.

    -   Add environment variables and personal secrets if your project requires them.

    [![New environment configuration form](https://resources.jetbrains.com/help/img/air/air-web-new-env-config.png "New environment configuration form")](https://resources.jetbrains.com/help/img/air/air-web-new-env-config.png)

5.  Click Save.

> ### note
>
> Personal secrets are encrypted, available only to you, and exposed to the cloud environment as environment variables. They are not shared with other users.

For full details, see [Configure environments](configure-environments.html).

## Where to go next

-   [Connect repositories](connect-repositories.html)

-   [Run tasks in cloud](run-tasks-in-cloud.html)

-   [Configure environments](configure-environments.html)

-   [Clone additional repositories](clone-additional-repositories.html)

-   [Automations](automations.html)
