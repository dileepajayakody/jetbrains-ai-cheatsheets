1.  [Cloud agents](cloud-agents.html)

2.  [Configure environments](#0)

Limited EAP

# Configure environments

Last modified: 01 July 2026

A cloud environment is a Docker container that runs on a virtual machine in the cloud. JetBrains Air creates this environment for the task, runs the agent in it, and removes it when the task is finished. If you return to the task later, JetBrains Air recreates the environment.

Use environment configuration to make the remote environment fit your project requirements. For example, you can choose the VM size, control internet access, and provide environment variables and personal secrets.

Create environment configurations in the web version of JetBrains Air: Settings | Environments.

Each user can have only one cloud environment configuration per repository. If you create one, JetBrains Air always uses it for your cloud tasks and automations in that repository. If you do not create one, JetBrains Air uses the default configuration.

## Create an environment configuration

Create an environment configuration once for the repository and then reuse it for all cloud tasks in that repository.

### Create an environment configuration

1.  Open the web version of JetBrains Air at [https://air.jetbrains.cloud](https://air.jetbrains.cloud).

2.  Go to Settings | Environments.

3.  Click New Configuration.

4.  Select the repository.

5.  Configure the environment:

    -   **Repository** – the repository this configuration applies to.

    -   **VM Size** – the amount of CPU, RAM, and disk space available for the task.
        [Learn how to configure custom VM resources](configure-resources.html)

    -   **Internet access** – whether the agent can access the internet, and if so, which domains it can reach.
        [Learn how to configure internet access](/help/air/configure-environments.html#cloud_limit_internet_access)

    -   **Additional domains** – extra domains that are allowed when internet access is limited.

    -   **Environment Variables** – non-sensitive variables available in the cloud environment.

    -   **Personal Secrets** – sensitive values that are stored securely and exposed in the environment as variables.
        [Learn more about personal secrets](/help/air/configure-environments.html#cloud_personal_secrets)

6.  Click Save.

Now, all tasks you run for this repository will use this configuration.

## Configuration visibility and access

Environment configurations are currently personal.

You see and use only your own configurations. Other users can create their own configuration for the same repository, or have no configuration for it at all.

Shared cloud environment configurations are not supported yet. You cannot view, reuse, or inherit configurations created by other users.

This also applies to personal secrets stored in the configuration. Other users cannot view, reuse, or inherit them.

## Use the default image

If you do not create a custom environment configuration, JetBrains Air uses the default environment configuration.

The default configuration uses the default image and does not add any custom variables, secrets, or internet access rules. This is the simplest option and is enough for tasks that do not require project-specific setup.

The default image includes almost all common tools and frameworks.

## Use a custom image

Custom Docker images for cloud environments are not supported yet. This functionality is planned.

> ### note
>
> Even if the project contains [`.air/docker.json`](execution-environments.html#docker_configuration), this file is not used for cloud environments.

## Provide personal secrets

Use Personal Secrets to store sensitive values such as tokens, passwords, or API keys.

Personal secrets are stored in encrypted form and are available in the environment as environment variables.

Because environment configurations are personal, secrets are not shared with other users.

> ### note
>
> Use personal secrets for sensitive values. Use regular environment variables for non-sensitive configuration values.

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

-   **Run order** – the script runs after JetBrains Air clones the repository but before the agent starts. The repository is already checked out, and the script starts in the project root.

-   **User** – the script runs as the environment user with `sudo` rights.

-   **Access to environment variables** – the script can read everything already present in the environment, including the variables and secrets from your environment configuration.

-   **Set variables for the agent** – the script runs in a separate process, so variables you `export` in it are not passed to the agent session. To make a variable available to the agent, append it to `~/.bashrc`, as in the example above. Add it only when it isn't already present so that resuming the task doesn't create duplicate entries (see below).

-   **Idempotency** – make the script idempotent.

    > ### warning
    >
    > JetBrains Air runs the script on every environment launch, including every time you resume the task – not only the first time. A script that isn't idempotent can repeat heavy setup or leave the environment in a broken state on resume.
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

-   **Failure behavior** – if the script exits with a non-zero code, the task still starts and the agent runs. Check the logs to confirm the script completed as expected.

-   **Logs** – the startup script output is included in the environment logs, which you can download for debugging.
