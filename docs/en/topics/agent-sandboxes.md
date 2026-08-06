# Agent Sandboxes

## Overview

Agent sandboxes: infrastructure that gives AI agents isolated execution environments — to run code, mount filesystems, reach the network — essentially "a computer for the agent". Representative products: E2B, Daytona, Modal Sandboxes, and hyperscalers' own builds like Cloudflare computer. Distinct from [agent-workspaces](/en/topics/agent-workspaces) (user-facing desktop workspace products) — sandboxes are the lower-level developer-infrastructure building block.

## Why It Matters

Once an agent needs to actually run code to verify results (not just suggest code), it needs a safe, controllable, reusable execution environment — it can't run directly on the host, and it can't cold-start a full VM every time. The isolation strength, startup speed and state-persistence capability at this layer directly determine how fast, safe and cheap coding agents and deep-research agents can run. It's also the direct substrate for the "sandbox escape" risk in [agentic-safety](/en/topics/agentic-safety) — how well the sandbox is designed is exactly how accurately the security boundary is drawn.

## Core Concepts

- **Decoupling storage from isolation**: filesystem state (e.g. backed by SQLite) is separated from the execution backend (container / isolated shell / isolated JS runtime), so the same workspace state can switch isolation strength on demand rather than being locked to one sandbox form (Cloudflare computer's design choice).
- **A spectrum of isolation strength**: from process-level isolation (fast, light, weaker isolation) to micro-VMs/containers (slower, stronger isolation, full Linux userland and real network access) — pick strength by task risk rather than defaulting to the heaviest option everywhere.
- **Cold start and reuse**: on-demand sandbox creation and teardown is expensive; hosted sandbox platforms commonly optimize for sub-second cold starts and sandbox-pool reuse.
- **A unified execution entry point**: multiple backends exposed behind a single call interface (e.g. `workspace.runtime.exec()`), so the agent logic above doesn't need to know the concrete isolation implementation.

## Related Technologies

- [agentic-safety](/en/topics/agentic-safety) (sandbox escape is a core risk surface for agent security)
- [coding-agents](/en/topics/coding-agents) (coding agents are the biggest consumer of sandboxes)
- [agent-workspaces](/en/topics/agent-workspaces) (the user-facing layer above, which often bundles a sandbox)
- [cloud-agent-platforms](/en/topics/cloud-agent-platforms) (enterprise hosted platforms typically ship built-in sandbox capability)

## Best Practices

- Grade isolation strength by task risk: read-only analysis can use light isolation; tasks touching the network or system calls need heavier isolation.
- Default sandboxes to no network access or an allowlisted proxy; inject credentials minimally, per session — the same principles as agent permission management.
- Be cautious about using "preview only" sandbox products in production; confirm their isolation boundary has been security-audited first.

## Recommended Resources

- [cloudflare/computer](https://github.com/cloudflare/computer)

## Timeline

### [2026-08-06](/en/today/2026-08-06)

Cloudflare open-sources computer: a virtual filesystem inside a Durable Object plus three pluggable execution backends (Container/Isolate Shell/Isolate JavaScript), decoupling storage from isolation into independently swappable components; preview stage only. The founding entry for agent sandboxes as a standalone infrastructure layer.
