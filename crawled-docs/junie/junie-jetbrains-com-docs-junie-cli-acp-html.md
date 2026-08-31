# Junie for ACP clients

Last modified: 28 August 2026

Use Junie CLI with editors and IDEs that support the Agent Client Protocol (ACP).

## What is ACP?

[Agent Client Protocol (ACP)](https://agentclientprotocol.com/) is a protocol that standardizes communication between code editors/IDEs and coding agents, similar in spirit to how the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) unified language tools. In short, ACP decouples agents and editors so that:

-   Agents that implement ACP can work with any ACP-compatible editor.

-   Editors that support ACP can integrate any ACP-compatible agent.

ACP reuses MCP JSON structures where appropriate and adds types tailored for agentic coding UX (for example, diffs). Markdown is used as the default user-readable format.

For the full documentation index (entry point), see [official site](https://agentclientprotocol.com/llms.txt).

## When to use ACP mode

Use ACP mode when:

-   You are building an editor/IDE integration that expects an ACP-capable agent.

-   You want Junie to serve requests initiated from an ACP client (instead of direct human interaction in the terminal).

Use standard (non-ACP) Junie CLI when:

-   You operate Junie [interactively in your terminal](junie-cli.html).

-   You [run Junie in headless/CI scripts](junie-headless.html) without an ACP client.

## Enable ACP mode in Junie CLI

To run Junie CLI in ACP mode, use the `--acp` flag:

```
junie --acp true
```

When Junie CLI is connected to a JetBrains IDE for the same project, you can also use the `/ide` command to inspect the current JetBrains IDE connection state and the JetBrains IDE features available to the session. For details, see [Junie CLI and JetBrains IDE integration](junie-cli-jetbrains-ide-integration.html).

## Local vs. remote scenarios

ACP supports both local and remote agent setups:

-   Local agents: subprocess communication via JSON-RPC over `stdio`.

-   Remote agents: HTTP or WebSocket communication. Full support for remote agents is evolving in the ecosystem.

Refer to the [official ACP documentation](https://agentclientprotocol.com/) for the current transport recommendations and capabilities.

Thanks for your feedback!

Was this page helpful?

YesNo
