1.  [Run tasks](run-tasks.html)

2.  [Run environments](#0)

# Task run environments

Last modified: 25 February 2026

Select an environment in the task header before you start the task.

### Select a task run environment

-   In the task header, click the environment name.

    -   Local Workspace: runs directly in your current workspace. This mode has the fastest startup and uses your existing environment, but changes are applied to your project folder. It does not provide isolation.

    -   Git Worktree: creates a separate working branch of the repository. This mode provides isolation from your main branch while still using your local environment. Note that you may need to reinstall project dependencies or repeat location-specific setup for every new task.

    -   Docker: runs in an isolated container. You must have Docker Desktop installed and a valid license to use it. This mode offers complete isolation for code changes and tools. Isolation means that all edits, commands, and dependencies stay inside the container and do not affect your local workspace or system environment.

    -   Cloud: runs in a remote cloud environment. In cloud runs, JetBrains Air commits changes to a separate task branch and pushes them to the remote repository after the task is done.

    ![AI agent workspace selection](https://resources.jetbrains.com/help/img/air/aird_ai_agent_workspace.png "AI agent workspace selection")

## Local Workspace

Use Local Workspace to run a task on your machine in the current workspace. This option starts fast and uses your existing local setup. Changes apply to your working copy.

## Git Worktree

Use Git Worktree to run a task in a separate working copy of the same repository. This option helps you isolate changes from your main working directory. Use it when you want to work on multiple tasks without mixing edits. For more information about Git worktrees, refer to [git-worktree at git-scm.com](https://git-scm.com/docs/git-worktree).

For each task, JetBrains Air creates a separate branch in the worktree. Learn more about how the isolation in a Git worktree works [here](accept-changes.html#isolation-model).

Git Worktree isolates files and branches, but not the host environment itself. The task still runs on your machine. If you need task-specific environment variables or preparation steps, configure them in `.air/worktree.json`.

### worktree.json

Git Worktree settings are stored in `.air/worktree.json` in the project root. You can open this file directly or from the project settings: Open Settings | <Project> tab | AI | Worktree and click Edit.

Use the following example as a reference:

```
"environment": [...]
```

### Specify environment variables

Use the `environment` section to pass environment variables to the worktree task.

These variables are resolved against the host environment before setup commands run. They are merged into the shell process that executes setup commands and remain available throughout the agent session.

Environment variables defined in `.air/worktree.json` are scoped to the current worktree session. They do not automatically affect other worktrees or unrelated local sessions.

**Entry type**

**Description**

`env`

Sets a single environment variable. If `value` is omitted, the value is inherited from the host environment.

`envFile`

Loads variables from a `.env` file. Relative paths are resolved from the workspace root. Absolute paths and `~`\-prefixed paths are also supported.

The following system variables are reserved and cannot be overridden: `HOME`, `PATH`, `USER`, `SHELL`, `TMPDIR`, variables that start with `FSD_`, and variables that start with `XDG_`.

For example:

```
{
    "environment": [
        {
            "type": "env",
            "key": "DATABASE_URL",
            "value": "postgres://localhost/test"
        },
        {
            "type": "envFile",
            "path": "~/.env.test"
        }
    ],
    "setup": {
        "macos": [
            "echo TEST_VAR_IN_SETUP=$DATABASE_URL"
        ]
    }
}
```

In this example, `DATABASE_URL` is available both in the setup command and in terminal sessions spawned by the agent inside the same worktree session.

> ### note
>
> If you omit `value` for an `env` entry, the variable is inherited from the host environment. This is useful for secrets that should not be stored in the project.

### Run commands before the agent session

Use the `setup` section to run commands on the host machine inside the worktree directory before the agent session starts.

Only the commands for the current operating system are executed. Commands for other operating systems are ignored. If there is no entry for the current OS, setup is skipped.

Variables from the `environment` section are available in setup commands.

**Parameter**

**Description**

`setup.linux`

(Optional) Commands to run before launching an agent in a worktree on Linux.

`setup.macos`

(Optional) Commands to run before launching an agent in a worktree on macOS.

`setup.windows`

(Optional) Commands to run before launching an agent in a worktree on Windows.

For example:

```
{
    "setup": {
        "macos": [
            "echo \"Setup ran successfully with $TEST!\" > /tmp/setup-test.txt"
        ]
    }
}
```

### Run commands before the worktree is deleted

Use the `cleanup` section to run commands on the host machine inside the worktree directory before JetBrains Air deletes the worktree. Use it to remove temporary files, stop background processes, or release resources the task created.

> ### note
>
> JetBrains Air deletes the worktree after the task is completed, that is, after you apply the changes to your local workspace. See [Accept changes from isolated environments](accept-changes.html#accept-isolated-environments).

Only the commands for the current operating system are executed. Commands for other operating systems are ignored. If there is no entry for the current OS, cleanup is skipped.

Variables from the `environment` section are available in cleanup commands.

**Parameter**

**Description**

`cleanup.linux`

(Optional) Commands to run before deleting a worktree on Linux.

`cleanup.macos`

(Optional) Commands to run before deleting a worktree on macOS.

`cleanup.windows`

(Optional) Commands to run before deleting a worktree on Windows.

For example:

```
{
    "cleanup": {
        "macos": [
            "echo \"Cleanup ran successfully with $TEST!\" > /tmp/cleanup-test.txt"
        ]
    }
}
```

## Docker

Use Docker to run a task in an isolated container. This option helps you isolate tools, dependencies, and runtime configuration from your local machine.

For each task, JetBrains Air creates a separate branch inside the container.

### docker.json

Docker settings are stored in `.air/docker.json` in the project root. You can open this file directly or from the project settings: Open Settings | <Project> tab | AI | Docker and click Edit.

Use the following example as a reference:

```
"image": "ubuntu:24.04"
```

### Use the default image

If your task does not require any specific tooling or dependencies, you can run it without creating `.air/docker.json`. In this case, JetBrains Air uses a managed default image that contains almost all common tools and frameworks.

This is the simplest option and is often enough for basic tasks.

### Use a custom image

Use a custom image when your project depends on tools, packages, or system libraries that are not available in the default image.

Important notes:

-   You can use either a prebuilt image from Docker Hub (`image`) or build an image from a Dockerfile (`build`).

-   You can use either `image` or `build`, but not both.

-   A custom image must include Git and provide `/bin/sh`. To install Git, you can add to the Dockerfile `RUN apt-get update && apt-get install -y git-all`

-   When you use a custom image, pay attention to the container user configuration. See [Run the container as a specific user](/help/air/execution-environments.html#docker_user).

#### Prebuilt image

Use `image` to run the agent in an existing Docker image. For example:

```
{
    "image": "ubuntu:24.04",
    "user": {
        "user": "some-user",
        "group": "some-user"
    }
}
```

**Parameter**

**CLI equivalent**

**Description**

`image`

`docker run [image]`

Name of a prebuilt Docker image from Docker Hub, for example `ubuntu:24.04`.

When you use `image`, specify the container user explicitly in the `user` section.

#### Dockerfile

Use `build` to build a custom image from a Dockerfile. For example:

```
{
    "build": {
        "dockerfile": "Dockerfile",
        "context": ".",
        "buildArgs": [
            {
                "key": "APP_ENV",
                "value": "development"
            }
        ]
    },
    "user": {
        "user": "some-user",
        "group": "some-user"
    }
}
```

**Parameter**

**CLI equivalent**

**Description**

`build.dockerfile`

`docker build -f [dockerfile]`

Path to the Dockerfile. Relative paths are resolved from the build context. Absolute paths and `~`\-prefixed paths are also supported.

When `build` is specified, you must specify a valid `user` that is created explicitly by the Dockerfile.

`build.context`

`docker build [context]`

(Optional) Build context directory. Relative paths are resolved from the workspace root. Absolute paths and `~`\-prefixed paths are also supported. Defaults to `.`

`build.buildArgs`

`--build-arg KEY=VALUE`

(Optional) List of `{ "key", "value" }` pairs passed as Docker build arguments. If `value` is omitted, it is inherited from the host environment at build time.

Important:

-   JetBrains Air controls the container runtime itself. Because of this, some Dockerfile directives that affect runtime behavior are overridden or ignored when the agent starts.

-   The Dockerfile is still used for image build steps such as `FROM`, `RUN`, `COPY`, `ADD`, `ENV`, `ARG`, `LABEL`, and `ONBUILD`. However, directives that control how the container runs, such as `ENTRYPOINT`, `CMD`, `EXPOSE`, `WORKDIR`, and `SHELL`, are replaced by JetBrains Air runtime configuration.

-   `VOLUME` instructions must not target paths that overlap with the reserved mount point `/mnt/air`.

#### Run the container as a specific user

Use the `user` section to define which OS user the container process runs as.

If you specify `user`, you must also specify either `image` or `build`.

If you use `build`, the user and group must be created explicitly by the Dockerfile. If you use `image` and omit `user`, JetBrains Air creates a default user `airuser:agents` automatically, with `sudo` access, a home directory, and a Bash shell.

**Parameter**

**CLI equivalent**

**Description**

`user`

`docker run -u --user [uid]:[gid]`

Object with `user` and `group` parameters. Both values must be non-empty and must correspond to an existing user and group in the image.

The user must have a valid home directory.

For custom images, make sure the Dockerfile creates the user and group. For example: `RUN groupadd some-user && useradd --create-home some-user`

### Specify environment variables

Use the `environment` section to pass environment variables to the Docker container.

These variables are injected when the container starts, similarly to Docker `run` flags. They become part of the container process environment, so they are available to all processes inside the container, including setup commands and the agent itself during the whole session.

The following system variables are reserved and cannot be overridden: `HOME`, `PATH`, `USER`, `SHELL`, `TMPDIR`, `TMP`, `TEMP`, `LOGNAME`, `SHLVL`, `WORKSPACE_SECRET`, variables that start with `FSD_`, and variables that start with `XDG_`.

**Entry type**

**CLI equivalent**

**Description**

`env`

`docker run -e KEY=VALUE`

Sets a single environment variable.

If `value` is omitted, the variable is inherited from the host environment when the container starts. This is useful for values such as secrets that you do not want to store in the project.

`envFile`

`docker run --env-file [path]`

Loads variables from a `.env` file.

Relative paths are resolved from the workspace root. Absolute paths and `~`\-prefixed paths are also supported.

#### Set variables directly

Use `type: "env"` to define individual variables directly. For example:

```
{
    "environment": [
        {
            "type": "env",
            "key": "APP_ENV",
            "value": "development"
        },
        {
            "type": "env",
            "key": "NVM_BIN"
        }
    ]
}
```

In this example, `APP_ENV` is set explicitly, while `NVM_BIN` is inherited from the host environment when the container starts.

#### Load variables from a file

Use `type: "envFile"` to load variables from a file instead of listing them one by one. For example:

```
{
    "environment": [
        {
            "type": "envFile",
            "path": "~/.env.test"
        }
    ]
}
```

The file does not have to be stored in the current workspace. You can use a path inside the project or an absolute path outside it.

> ### note
>
> If you need variables only for setup commands, you can still define them in `environment`. They will be available both to setup commands and to the agent session.
>
> If you do not want to commit sensitive values to version control, omit the `value` parameter and inherit the variable from the host environment, or load it from an external `.env` file.

### Run commands before the agent session

Use the `setup` section to run shell commands inside the container before the agent session starts. For example:

```
{
    "setup": [
        "apt-get update",
        "apt-get install -y jq",
        "mkdir -p ~/.config/my-tool",
        "echo 'setup complete'"
    ]
}
```

These commands run after the container starts and after JetBrains Air initializes the file system daemon, but before the agent begins working on the task. You can use them to:

-   install additional packages

-   create or update configuration files

-   prepare directories or caches

-   run project-specific initialization steps

> ### note
>
> Setup commands run in a separate shell process. If you use `export` inside a setup command, the exported variables do not persist to the agent session.
>
> If you want a variable to be available during the whole session, define it in the `environment` section instead.

## Cloud

Use Cloud to run a task in a remote environment. Cloud environments have a limited lifetime, so you might not be able to return later and review changes in the same environment.

To avoid losing the result, JetBrains Air uses a Git-based workflow for cloud runs: after the task is done, JetBrains Air commits the changes to a separate task branch and pushes the branch to the remote repository. Then you review the result and create a pull request from the task branch.

For details, refer to [Run tasks in cloud](run-tasks-in-cloud.html).
