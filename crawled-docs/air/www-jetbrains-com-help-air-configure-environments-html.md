1.  [Cloud tasks](cloud-tasks.html)

2.  [Environments](#0)

EAP

# Environments

Last modified: 20 August 2026

A cloud environment is a Docker container that runs on a virtual machine in the cloud. JetBrains Air creates this environment for the task and runs the agent in it.

Use environment configuration to make the remote environment fit your project requirements. For example, you can choose the VM size, control internet access, and provide environment variables and secrets.

Create environment configurations in the web version of JetBrains Air: Settings | Environments.

[![The Environments page in the web version of JetBrains Air](https://resources.jetbrains.com/help/img/air/airc-settings-environments.png "The Environments page in the web version of JetBrains Air")](https://resources.jetbrains.com/help/img/air/airc-settings-environments.png)

When you create a cloud task, you select either an environment configuration or a repository. If you select a repository, JetBrains Air uses the [default configuration](/help/air/configure-environments.html#cloud_default_image). [Learn how to run cloud tasks](run-tasks-in-cloud.html#run_cloud_task).

## Default environment

If you select only a repository when you create a cloud task – without choosing an environment configuration – JetBrains Air runs the task in the default environment.

The default configuration uses the default image and does not add any custom variables, secrets, or internet access rules. This is the simplest option and is enough for tasks that do not require project-specific setup.

The default image includes almost all common tools and frameworks.

## Personal and project environments

An environment configuration is either personal or owned within a project:

-   **Personal** – you create it for yourself, and only you can use it until you [share it](/help/air/configure-environments.html#cloud_share_environment) with other users, service accounts, or user groups.

-   **Project** – you create it from a [project](projects.html) page. It's automatically shared with every project member, and deleting the project deletes the configuration. [Learn about project environments](projects.html#share_project_environment).

## Create an environment configuration

Create an environment configuration for a repository, then select it when you run a cloud task.

### Create an environment configuration

1.  Open the web version of JetBrains Air at [https://air.jetbrains.cloud](https://air.jetbrains.cloud).

2.  Go to Settings | Environments.

3.  Click New Environment.

4.  Select the repository.

5.  Configure the environment:

    -   **Name** – a unique configuration name.

    -   **Repository** – the repository this configuration applies to.

    -   **VM Size** – the amount of CPU, RAM, and disk space available for the task.
        [Learn about VM sizes](/help/air/configure-environments.html#cloud_vm_resources)

    -   **Internet access** – whether the agent can access the internet, and if so, which domains it can reach.
        [Learn how to configure internet access](/help/air/configure-environments.html#cloud_limit_internet_access)

    -   **Additional domains** – extra domains that are allowed when internet access is limited.

    -   **Environment Variables** – variables and secrets available to the agent in the cloud environment. Add plain-text variables, personal secrets, or shared secrets.
        [Learn how to add variables and secrets](/help/air/configure-environments.html#cloud_variables_and_secrets)

6.  Click Save.

Now you can select this configuration when you run a cloud task for this repository.

## Edit an environment configuration

To edit an existing configuration, go to Settings | Environments in the web version of JetBrains Air, open the configuration, change the settings you need, and click Save.

Your changes apply only to newly created environments – to the new cloud tasks that use this configuration. Tasks that already exist keep the environments they started in, so they don't pick up the change, not even after you resume them.

So if a task fails because an environment variable, secret, or domain is missing, add it to the configuration and start a new cloud task.

## Share an environment configuration

By default, an environment configuration is personal – only you can see and use it. Share it with other users, service accounts, or user groups so they can run cloud tasks with the same setup. Service accounts and user groups come from JetBrains Central Console.

### Share an environment configuration

1.  In Settings | Environments, open the configuration you want to share, or create a new one.

2.  Click Share.

3.  In Search names, emails, or user groups, find a user, service account, or user group, then click Add.

    To copy a link to the configuration page, click Copy link. The link only points to the configuration in the web version of JetBrains Air – it does not grant access.

    ![The Share Environment dialog listing the people with access, each with a Can edit or Can view selector](https://resources.jetbrains.com/help/img/air/share-environment.png "The Share Environment dialog listing the people with access, each with a Can edit or Can view selector")

4.  Set each person's access to Can edit or Can view.

    > ### note
    >
    > If the configuration belongs to a project, the project also appears here, and you can set the access for each project member. See [Share a project's environment configuration](projects.html#share_project_environment).

5.  Save the configuration.

Everyone you add appears under People with access. To change someone's access, open the access selector next to their name and choose Can edit or Can view. To revoke access, choose Remove.

### Access levels

Each person with access to a shared configuration has one of these access levels.

Access level

What it allows

Owner

Edit the configuration and share it with other users, service accounts, or user groups. When you create a configuration, you automatically become its owner and the configuration is tied to your account.

Can edit

Edit the configuration and share it with other users, service accounts, or user groups.

Can view

Run cloud tasks using the configuration.

\>

### Secrets in a shared configuration

When you share a configuration, its plain environment variables and shared secrets become available to everyone with access. Personal secrets behave differently: they are never shared, so the people you share the configuration with don't see them and must create their own.

> ### note
>
> **Known temporary limitation:** JetBrains Air does not yet prompt users for the personal secrets that a shared configuration requires. Until this prompt is available, if your configuration needs personal secrets, tell the people you share it with which ones to create before they run tasks.

For details on the variable types, see [Add environment variables and secrets](/help/air/configure-environments.html#cloud_variables_and_secrets).

## Use a custom image

Custom Docker images for cloud environments are not supported yet. This functionality is planned.

> ### note
>
> Even if the project contains [`.air/docker.json`](execution-environments.html#docker_configuration), this file is not used for cloud environments.

## Add environment variables and secrets

Under Environment Variables, store values that the agent receives as environment variables in the cloud environment, such as configuration flags, tokens, passwords, or API keys.

### Add a variable or secret

1.  Under Environment Variables, click Add Variable.

2.  Select a Type, then enter a Name and Value.

    ![The Add Variable dialog with the Type selector open on Environment variable, Personal secret, and Shared secret](https://resources.jetbrains.com/help/img/air/add-variable-types.png "The Add Variable dialog with the Type selector open on Environment variable, Personal secret, and Shared secret")

3.  Save the configuration.

The type controls how the value is stored and who can see it once the configuration is [shared](/help/air/configure-environments.html#cloud_share_environment):

Type

Storage

Visible to

Use for

Environment variable

Plain text

Everyone with access

Non-sensitive configuration values

Personal secret

Encrypted

Only user

Sensitive values for personal use, e.g., a personal API token

Shared secret

Encrypted

Everyone with access

Sensitive values the whole team shares, such as a common service token

## Limit internet access

Use Internet access to control which external sites the agent can reach from the cloud environment. Limiting internet access helps reduce the risk of unintended access to untrusted resources.

The following modes are available:

-   **Off** – no internet access.

-   **Specified domains** – access only to domains you list in Additional domains.

-   **Trusted domains** – access to a preset list of domains commonly used for downloading dependencies, plus any domains you add manually.

    The preset includes common source control, package management, and dependency domains.

    ```
    Trusted domains list
    ```

-   **All domains** – unrestricted internet access.

> ### warning
>
> Grant the narrowest internet access that still lets the task complete successfully.

### Add your own domains

Use Additional domains to add domains that are required for your project but are not included in the preset list.

Enter one domain per line. You can specify exact domains such as `example.com` and wildcard domains such as `*.example.com`.

## Run commands before the agent session

To run commands before the agent session starts, add the file `.air/cloud/startup.sh` under the repository root. JetBrains Air runs this script in the cloud environment after it clones the repository but before the agent starts working on the task.

Use this script for environment setup, for example, to install tools, prepare configuration files, or initialize project-specific resources.

The list below describes how the startup script works and how to use it:

-   **When it runs** – every time JetBrains Air starts the cloud environment for the task, both when you first create the task and every time you resume it later.

-   **Run order** – the script runs after JetBrains Air clones the repository but before the agent starts. The repository is already checked out, and the script starts in the project root. Note that the checkout is shallow – it contains only the latest commit.

-   **User** – the script runs as the environment user with `sudo` rights.

-   **Access to environment variables** – the script can read everything already present in the environment, including the variables and secrets from your environment configuration.

-   **Set variables for the agent** – the script runs in a separate process, so variables you `export` in it are not passed to the agent session. To make a variable available to the agent, append it to `~/.bashrc`. Add it only when it isn't already present so that resuming the task doesn't create duplicate entries (see below).

-   **Idempotency** – make the script idempotent.

    > ### note
    >
    > JetBrains Air runs the script on every environment launch – not only the first time. That includes resuming the task and starting a new task from a [snapshot](cloud-tasks.html#state_between_runs), where the tools and files from an earlier run are already in place. A script that isn't idempotent can repeat heavy setup or leave the environment in a broken state.
    >
    > -   Write the script so that it's safe to run repeatedly and does nothing when the setup is already in place.
    >
    > -   Guard each step so that resuming a task doesn't reinstall dependencies or re-apply the configuration that's already there, and skip expensive one-time work when a marker from a previous run is present.
    >

    The following example installs a tool, prepares a configuration directory, and sets a variable for the agent. Each step is skipped when the work is already done, so the script does nothing on resume:

    ```
    #!/bin/sh
    set -e

    # Install tools only if they are missing
    if ! command -v jq >/dev/null; then
        apt-get update
        apt-get install -y jq
    fi

    # Create the configuration directory if it doesn't exist
    mkdir -p ~/.config/my-tool

    # Add a variable for the agent only once
    grep -q MY_TOKEN ~/.bashrc || echo 'export MY_TOKEN=secret-value' >> ~/.bashrc
    ```

-   **Logs** – the startup script output is included in the [environment logs](troubleshoot-cloud-tasks.html#collect_logs), which you can download for debugging.

-   **Failure behavior** – if the script exits with a non-zero code, the task still starts and the agent runs. Check the logs to confirm the script completed as expected.

## Configure VM resources

The VM Size sets the amount of CPU, RAM, and disk space available for the task. Cloud environments use predefined VM sizes that you select in the environment configuration.

The following predefined VM sizes are available:

-   **Small** – 2 CPUs / 8 GB RAM / 20 GB disk space

-   **Medium** – 4 CPUs / 16 GB RAM / 30 GB disk space

-   **Large** – 8 CPUs / 32 GB RAM / 50 GB disk space

-   **Extra Large** – 16 CPUs / 64 GB RAM / 100 GB disk space

Custom VM sizes are not available yet. In a future release, you'll be able to define your own VM sizes.
