# Debug mode

Last modified: 28 August 2026

Slash command to switch to Debug mode:

`/debug`

Debug mode turns Junie CLI into an AI debugging assistant. Instead of editing source code, Junie CLI launches or attaches to a running program, manages breakpoints, inspects runtime state, and evaluates expressions in the currently paused execution frame.

Use Debug mode for problems that are easier to investigate at runtime than by reading code — flaky behavior, unexpected variable values, or tracking down where execution actually goes.

## How Debug mode works

In Debug mode, Junie CLI operates against a live debugger session connected to a JetBrains IDE. The agent uses a specialized set of tools focused on runtime inspection and execution control rather than source code modification:

-   Session control: Launch a new debug session, attach to an existing process, resume execution, or step through code (step over, step into, step out).

-   Breakpoint management: Set line and exception breakpoints, remove existing ones, and list all active breakpoints in the project.

-   State inspection: Inspect variables in the current scope, view the call stack for all threads, and switch between threads and frames.

-   Expression evaluation: Evaluate expressions or code fragments in the context of the currently paused frame.

Junie CLI does not modify source code while in Debug mode unless you explicitly ask for a change that is compatible with the current execution state.

### Example interactions

-   "Why is `x` null?" — Junie CLI inspects the current paused frame, retrieves the value of `x` and the surrounding context (call stack, related variables), and explains the state.

-   "Stop at line 42 in `Main.kt` ." — Junie CLI sets a line breakpoint at the requested location.

-   "What is `list.size()` ?" — Junie CLI evaluates the expression in the current frame and reports the result.

## Requirements

Debug mode is only useful when Junie CLI can talk to a debugger. Make sure the following is in place before enabling Debug mode:

-   Junie CLI is connected to a JetBrains IDE with debugging support. For details on the IDE integration, see [Junie CLI and JetBrains IDE integration](junie-cli-jetbrains-ide-integration.html).

-   The IDE has a debug session active, or you are ready to ask Junie to start or attach to one.

If no IDE with debugging support is connected when you try to enable Debug mode, Junie CLI reports that "Debug mode requires an IDE with debugging support connected" and stays in the default mode.

## Enable Debug mode

To switch to Debug mode, run the `/debug` slash command in the Junie CLI prompt, or press `Shift+Tab` to cycle through the modes (default → Plan → Debug):

```
> /debug
```

Running `/debug` again, or continuing the `Shift+Tab` cycle back to the default mode, disables Debug mode and returns Junie CLI to the default mode.

> ### note
>
> Debug mode applies to the next prompt you submit. After each submitted prompt, Junie CLI returns to the default mode, so re-enable Debug mode if you want to continue debugging.

## Related documentation

-   [Junie CLI and JetBrains IDE integration](junie-cli-jetbrains-ide-integration.html)

-   [Using Junie in the terminal](junie-cli.html)

-   [Slash commands reference](slash-commands.html)

Thanks for your feedback!

Was this page helpful?

YesNo
