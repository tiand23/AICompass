# Agent Workspaces

## Overview

Agent workspaces: desktop/local applications centered on "giving the agent a working environment" — one interface where users assign tasks, connect services and install capabilities (skills/MCP), while agents work autonomously for extended periods in a controlled environment. Representative products: Anthropic's Claude Cowork (knowledge work), OpenAI's Codex app, and on the open-source side openwork (built on opencode).

## Why It Matters

The agent workspace is the next interaction form after the chat interface: from question-and-answer to "assign work — accept deliverables". The rapid arrival of an open-source alternative (openwork hit Trending at +796 stars/day) shows the form factor is validated; and openwork making "one set of skills, MCPs and connected services reused across tools and teams" its core pitch names the real pain of the multi-tool era — capability configuration is shifting from a single tool's private asset to a portable one.

## Core Concepts

- **Workspace vs coding tool**: coding tools (Claude Code/Cursor) center on a codebase; workspaces center on tasks and connected services, covering non-coding knowledge work.
- **Survival risk of standalone browser-agent products**: OpenAI's Atlas (a standalone browser plus Agent mode) was retired in under a year, its capability folded into ChatGPT/Codex — embedding agent capability into an existing flagship entry point validates value faster than building a standalone new-form product; this "try the new form, then fold it in" is a common route for platform vendors right now.
- **Portable capability configuration**: skills, MCP servers and account connections as an independent asset layer, shared across agent clients through a single integration point (e.g. the openwork MCP).
- **Org-level control plane**: team-scale inference provisioning, access management, skill publishing and policy control (openwork's Den) — the same idea as enterprise agent platforms' control planes.
- **From single-agent workspace to multi-agent team management**: openwork solves "give one person one agent's working environment"; Paperclip represents a new layer solving "give a team a whole fleet of agents" — ticket assignment, org structure, budget, approval workflows — the mental model upgrading from "give the agent a working environment" to "manage a fleet of agents the way you manage employees."
- **Multiple agents running side by side, sharing memory**: holaOS lets Claude Code, Codex and other agents run in parallel in the same workspace rather than switching back and forth, sharing the same memory — stored as user-readable plain files rather than a vendor's proprietary cloud format, a concrete implementation of "memory should be auditable and not locked to a single vendor" at the workspace-product layer.

## Related Technologies

- [agent-skills](/en/topics/agent-skills) (the capability units a workspace loads)
- [mcp](/en/topics/mcp) (the protocol layer for connecting services)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (the enterprise counterpart of the org control plane)

## Best Practices

- Make "can the capability configuration leave with you" a first-class selection criterion — the migration cost of skills/MCP config locked into one tool grows with depth of use.

## Recommended Resources

- [different-ai/openwork](https://github.com/different-ai/openwork)

## Timeline

### [2026-08-12](/en/today/2026-08-12)

holaOS open-sources (6.2k stars total): "the computer for you and your agent" — Claude Code/Codex/its native agent run side by side in one workspace sharing plain-text local memory, 100+ integrations plus MCP, built-in models and BYOK. Multi-agent parallelism with cross-agent shared memory becomes a new differentiator for workspace products.

### [2026-08-10](/en/today/2026-08-10)

Paperclip arrives (76.2k stars total): an open-source "agent-team HR management" product — ticket tracking, org structure, budget enforcement, governance approval, audit logs; no framework or orchestration, purely a management plane. The workspace form expands from "one person, one agent" to "a team managing a fleet of agents" (see [enterprise-ai-agents](/en/topics/enterprise-ai-agents)).

### [2026-08-09](/en/today/2026-08-09)

OpenAI retires the standalone browser product Atlas, folding browser-agent capability into the ChatGPT desktop app and Codex — "standalone new-form product" gives way to "embedded in an existing flagship" within under a year (see [openai-models](/en/topics/openai-models)).

### [2026-08-01](/en/today/2026-08-01)

openwork hits GitHub Trending (+796/day, 19.5k stars total): an open-source alternative to Claude Cowork built on opencode; one MCP plugs into any client to reuse the same skills/MCPs/connections, with an org control plane, Den.
