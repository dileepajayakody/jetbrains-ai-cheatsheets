# Junie Local

Last modified: 28 August 2026

Junie Local is a local inference engine for macOS Apple Silicon that runs the [Qwen3.6-27B-4bit](https://huggingface.co/mlx-community/Qwen3.6-27B-4bit) model on your machine. It exposes an OpenAI-compatible API, so Junie CLI can connect to it without any proxy or cloud provider.

It is based on [mlx-vlm](https://github.com/Blaizzy/mlx-vlm), an open-source framework for running vision-language models on Apple Silicon. Junie Local packages this as a managed background server (`junie-mlx-vlm`) with the bundled installer script. The engine also includes a small draft model ([Qwen3.6-27B-MTP-4bit](https://huggingface.co/mlx-community/Qwen3.6-27B-MTP-4bit)) for speculative decoding, which can speed up generation.

## Prerequisites

Requirement

Value

OS

macOS 26 or higher

CPU

Apple Silicon (M5 or newer)

RAM

64 GB or more

Disk

~21 GB free

## Quick start

1.  In an active Junie session, run the `/local` command.

2.  Review the system requirements on the setup screen and choose Proceed to install. Junie downloads the engine and the model (~15 GB), configures itself, and starts the local server in the background.

3.  Choose Try local model. Junie Local is already selected — run `/model` to confirm or to switch back later.

4.  Give Junie a task as usual. The first response waits for the model to finish loading; later ones are faster.

The rest of this page explains each of these steps in detail.

## Install Junie Local

The `/local` command opens the setup screen inside Junie: it checks the system requirements first, and once you confirm, runs the installer and reports its progress on the same screen. Keep the screen open until the installation is done.

> ### note
>
> The command is available in nightly builds on macOS machines with 64 GB of RAM or more.

In [ACP clients](junie-cli-acp.html), `/local` has no screen of its own to draw: it opens a Terminal window and runs the installer there. That installation keeps going even if the client exits, and the window closes itself once the script is done.

The installer downloads the inference engine and the models, verifies their checksums, configures Junie, and starts the background server. Downloads are resumable and every unpacked artifact is marked as installed, so a re-run only fetches what is missing.

You can also run the installer yourself. It lives next to the Junie CLI installers in the [Junie repository](https://github.com/JetBrains/junie):

```
curl -fsSL https://junie.jetbrains.com/install-local.sh -o /tmp/junie-local-install.sh && sh /tmp/junie-local-install.sh
```

Download the script and run it instead of piping it into a shell: the installer reads a keypress before it exits, so a pipe would leave it without a usable standard input.

The installer is non-interactive and uses its built-in defaults; the following options are available:

Option

Description

`--model <name>`

Model to install: `qwen3.6` (default) or `qwen3.8`

`--check-only`

Report system information and the install configuration, then exit

`--keep-config`

Preserve the existing engine configuration instead of rewriting it

Each model version installs into its own directory and gets its own Junie model configuration, so the versions live side by side and installing one leaves the other untouched.

After installation, models are available in `~/.local/share/junie-local/models/`:

-   `Qwen3.6-27B-MLX-4bit/` — the main model (~15 GB)

-   `Qwen3.6-27B-MTP-MLX-4bit/` — the draft model for speculative decoding (~250 MB)

Junie is configured automatically: the installer writes a [custom model profile](custom-llm-models.html) to `$JUNIE_HOME/models/local-qwen3.6-27b-4bit.json` that points at `http://localhost:19239/v1/chat/completions`, and makes it the default model. The `/local` setup screen selects the new model in the running session; after a standalone installer run, restart Junie to pick it up. You can switch models later with the `/model` command.

> ### note
>
> The first response in a new project may take longer due to initial prompt processing (prefill). Subsequent responses will be faster, as the model caches previously processed context.
>
> Prefill and generation are compute-intensive operations that can generate significant heat. If this is a concern, enable Low Power Mode in macOS Settings — it will reduce heat at the cost of some performance.

## Engine control

Junie starts the engine itself whenever the local model is selected, including after a reboot, and stops it once the last Junie instance using it exits. The engine keeps loading the model in the background after it starts, so the first request through Junie waits for it to become ready.

The bundled `serverctl.sh` script (located at `~/.local/share/junie-local/current/serverctl.sh`) is only needed to control the engine outside Junie:

Command

Description

`start`

Launch the server

`stop`

Graceful shutdown

`status`

Lifecycle phase and inference progress

`wait`

Poll the status until the engine is ready

`health`

Health check

`uninstall`

Stop the engine and remove the installation

To remove Junie Local, select the local model in the `/model` picker and press Backspace. Junie runs `serverctl.sh uninstall`, which stops the engine and deletes the installation together with the generated model configuration.

Thanks for your feedback!

Was this page helpful?

YesNo
