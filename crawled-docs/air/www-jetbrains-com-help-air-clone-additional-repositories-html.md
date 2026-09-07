1.  [Cloud tasks](cloud-tasks.html)

2.  [Multiple repositories](#0)

EAP

# Clone additional repositories

Last modified: 05 August 2026

> ### note
>
> Support for multiple repositories in a task is planned. Until it's available, use the workaround described here.

A cloud task runs against one repository. If the task needs code from several repositories at once – for example, when you keep skills, commands, or shared configuration in a separate repository – clone the additional repositories from the environment's [startup script](configure-environments.html#cloud_startup_script).

> ### warning
>
> This workaround doesn't work in [automations](automations.html).

## Before you start

Check the following before you write the script:

-   **Both repositories are on the same VCS provider** – the cloud environment authenticates with a provider-specific token. A task that starts on a GitHub repository can't clone a GitLab repository, and the other way around.

-   **You can access the additional repository** – the JetBrains Air connection app needs access to it, the same way as for the task's own repository. [Learn how to manage repository access](connect-repositories.html#manage_repository_access).

## Clone an additional repository

1.  In the repository that the task runs on, create the file `.air/cloud/startup.sh`.

2.  Add the script that clones the additional repository:

    ```
    #!/bin/bash
    set -eu

    # The task's own repository, and the credential helper that Air installed into it.
    REPO_ROOT="$(git rev-parse --show-toplevel)"
    CREDENTIAL_HELPER="$REPO_ROOT/.git/jcp-git-credential-helper"

    # The repository to clone. Use the HTTPS URL - an ssh:// URL doesn't work.
    REPO_URL="https://github.com/my-org/my-second-repo.git"
    TARGET_DIR="$HOME/my-second-repo"

    if [ ! -x "$CREDENTIAL_HELPER" ]; then
        echo "startup.sh: credential helper not found: $CREDENTIAL_HELPER" >&2
        exit 1
    fi

    # Reuse the refresh URL that Air set up for the task's own repository.
    REFRESH_URL="$(printf '%s\n' "${GIT_JCP_AUTH_MAPPING:-}" | awk -F'\t' 'NF>=2 {print $2; exit}')"

    if [ -z "$REFRESH_URL" ]; then
        echo "startup.sh: no refresh URL in GIT_JCP_AUTH_MAPPING" >&2
        exit 1
    fi

    # Add a mapping entry for the additional repo. The helper matches the key exactly
    # against "host[:port]/path" as Git sends it, so derive the key from REPO_URL.
    TAB="$(printf '\t')"
    KEY="$(printf '%s' "$REPO_URL" | sed -E 's#^https?://##')"

    case "$GIT_JCP_AUTH_MAPPING" in
        *"$KEY$TAB"*) ;;
        *) export GIT_JCP_AUTH_MAPPING="$GIT_JCP_AUTH_MAPPING
    $KEY$TAB$REFRESH_URL" ;;
    esac

    # Run Git with the credential helper. Both the clone and the update need it.
    git_auth() {
        GIT_TERMINAL_PROMPT=0 git \
            -c credential.helper="$CREDENTIAL_HELPER" \
            -c credential.useHttpPath=true "$@"
    }

    # Clone the repo, or update an existing checkout to the latest commit.
    # The environment can start from a snapshot that already contains the clone,
    # so checking only for the directory would leave the agent on an old commit.
    if [ -d "$TARGET_DIR/.git" ]; then
        echo "startup.sh: updating $TARGET_DIR"
        git -C "$TARGET_DIR" remote set-url origin "$REPO_URL"
        git_auth -C "$TARGET_DIR" fetch --depth 1 origin HEAD
        git_auth -C "$TARGET_DIR" reset --hard FETCH_HEAD
        git_auth -C "$TARGET_DIR" clean -ffd
    else
        echo "startup.sh: cloning $REPO_URL into $TARGET_DIR"
        git_auth clone --depth 1 "$REPO_URL" "$TARGET_DIR"
    fi
    ```

    Replace `REPO_URL` and `TARGET_DIR` with your own values. To clone more than one repository, repeat the mapping and clone steps for each of them. See [Choose where to clone](/help/air/clone-additional-repositories.html#choose_clone_location) for details.

    > ### warning
    >
    > Treat the refresh URL as a secret. Anything that can read it can request a token, so don't write it to a file, log it, or echo it from your script.

3.  Commit and push the file.

4.  Run a cloud task and check that the clone succeeded. The script output is included in the [environment logs](troubleshoot-cloud-tasks.html#collect_logs).

    If the script fails, the task still starts and the agent runs, so check the logs to confirm the clone completed. Look for the `startup.sh: cloning` line that the script logs itself.

How cloning works

The cloud environment includes a Git credential helper that supplies an auth token to the Git client. JetBrains Air installs it into the task repository at <repository>/.git/jcp-git-credential-helper and configures it for that repository only. The helper reads `GIT_JCP_AUTH_MAPPING`, an environment variable that maps a repository to a refresh URL.

When Git needs credentials, it passes the protocol, host, port, and path to the helper. The helper builds the key `host[:port]/path`, looks it up in the mapping, and calls the matching refresh URL, which returns a short-lived username and token.

The key only decides which URL the helper calls. The token's scope comes from the JetBrains Air connection app, so the same refresh URL works for every repository the app can access – which is why the script can reuse it for the additional repository.

The script takes the refresh URL from the existing entry, adds an entry for the repository you want to clone, and points the new clone at the same helper. The following details decide whether this works:

-   **HTTPS only** – the helper supplies a username and password, so an `ssh://` URL never reaches it.

-   **The helper is per-repository** – it's configured in the task repository's .git/config, not globally, so a fresh clone of another repository starts without it.

-   **Git has to send the path** – by default Git looks up credentials by host only, so the helper builds the key `github.com`, finds no entry, and returns nothing. Set `credential.useHttpPath=true` so that Git sends the repository path as well.

-   **The environment needs `curl` or `wget`** – the helper calls the refresh URL with one of them. If you use a custom image without either, the clone fails.

> ### note
>
> The refresh URL is tied to the current workspace session, so you can't store it and reuse it later. This is why the mapping belongs in the startup script, which JetBrains Air runs on every environment start.

## Choose where to clone

The startup script runs as the environment user with `sudo` rights, and it starts in the project root. Where you clone decides whether you need `sudo` at all.

### Clone into the home directory

The home directory belongs to the environment user, so a clone into $HOME needs no extra permissions. This is the simplest option, and it's what the example above uses. Choose it unless the agent has a reason to see the repository next to the task's own sources.

### Clone next to the task repository

JetBrains Air checks out the task's repository into /workspaces/<repository>. To place the additional repository beside it, replace the `TARGET_DIR` line in the script above with the following two lines (below the `REPO_ROOT` assignment):

```
# Put the clone next to the task's repository.
TARGET_DIR="$(dirname "$REPO_ROOT")/my-second-repo"

# /workspaces belongs to root, so create the directory as root and hand it to the
# environment user. Git then clones into the empty directory without sudo.
sudo install -d -o "$(id -u)" -g "$(id -g)" "$TARGET_DIR"
```

`install -d` also resets the directory's owner on every run, so it repairs an environment where a previous run was interrupted. If the environment already holds a clone that belongs to `root`, from an earlier version of your script, repair the whole checkout once:

```
sudo chown -R "$(id -u):$(id -g)" "$TARGET_DIR"
```

## Run Git commands in the cloned repository

The startup script runs in a separate process, so the mapping it exports doesn't reach the agent session. If the agent only reads files from the cloned repository, that's enough. If the agent also needs to run Git commands there, such as `git pull`, make the mapping available in the agent's shell.

The refresh URL changes with every session, so append the code that rebuilds the mapping to `~/.bashrc` instead of the value itself.

Add the following at the end of `.air/cloud/startup.sh`, below the block that clones or updates the repository. The order matters: the script stops on a failed clone, so it doesn't give the agent credentials for a repository that isn't there.

```
# Give the agent session credentials for the additional repository. Replace the block
# instead of skipping it, so that changing REPO_URL later takes effect.
touch ~/.bashrc
sed -i '/# >>> air: additional repository credentials >>>/,/# <<< air: additional repository credentials <<</d' ~/.bashrc
cat >> ~/.bashrc <<'EOF'
# >>> air: additional repository credentials >>>
REPO_URL="https://github.com/my-org/my-second-repo.git"
REFRESH_URL="$(printf '%s\n' "$GIT_JCP_AUTH_MAPPING" | awk -F'\t' 'NF>=2 {print $2; exit}')"
if [ -n "$REFRESH_URL" ]; then
    TAB="$(printf '\t')"
    KEY="$(printf '%s' "$REPO_URL" | sed -E 's#^https?://##')"
    case "$GIT_JCP_AUTH_MAPPING" in
        *"$KEY$TAB"*) ;;
        *) export GIT_JCP_AUTH_MAPPING="$GIT_JCP_AUTH_MAPPING
$KEY$TAB$REFRESH_URL" ;;
    esac
fi
unset REPO_URL REFRESH_URL TAB KEY
# <<< air: additional repository credentials <<<
EOF
```

Replace `REPO_URL` with the URL of your additional repository (same value as above).

## Point the agent to the cloned repository

The script runs before the agent starts, so nothing tells the agent that the directory exists. Reference the path in your [project instructions](project-instructions.html) or in the task definition, and describe what the repository is for.

The additional repository stays outside the project that JetBrains Air opens, so the agent reaches it by path rather than through the project view. It's also a separate Git repository, so Git commands there need `-C <path>`.

Skills and commands are a special case: the agent reads them from fixed locations in the project root, so it doesn't pick them up from a cloned repository. Either clone into the location the agent already reads, or copy the files there in the same script.

To copy [shared skills](skills.html#shared_skills), add the following at the end of `.air/cloud/startup.sh`, below the block that clones or updates the repository. The copy needs both `REPO_ROOT` and `TARGET_DIR`, and the files it reads only exist once the clone has finished:

```
# Copy the shared skills into the location the agent reads. Build the destination from
# REPO_ROOT: a relative path would depend on the directory the script runs in.
mkdir -p "$REPO_ROOT/.agents/skills"
cp -R "$TARGET_DIR/skills/." "$REPO_ROOT/.agents/skills/"
```
