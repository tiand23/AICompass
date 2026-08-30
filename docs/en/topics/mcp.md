# MCP

## Overview

MCP (Model Context Protocol): the open protocol from Anthropic standardizing how AI systems connect to external tools, databases and data sources — "USB-C for AI". Supported by Claude, ChatGPT, Cursor and most major products; the de facto tool-integration standard.

## Why It Matters

Before MCP, every AI app × every tool needed its own glue code (the M×N problem); MCP makes it M+N — a tool vendor writes one MCP server and every MCP client can use it. It is the settled lower layer of the "two-layer protocol stack" consensus: **MCP for vertical tool integration, A2A for horizontal agent coordination**.

## Core Concepts

- **Server/client architecture**: tool vendors implement an MCP server (exposing tools, resources, prompts); AI applications connect as clients.
- **Transports**: local stdio and remote HTTP (with auth) — remote MCP is the main enterprise integration form.
- **Tool discovery and lazy loading**: clients can search and defer-load tool schemas, easing context pressure from large tool sets.
- **Security surface**: MCP servers are a new attack surface — tool-description injection, privilege escalation; enterprise deployments need server allowlists and permission narrowing.

## Related Technologies

- [a2a](/en/topics/a2a) (the horizontal layer of the stack)
- [agent-skills](/en/topics/agent-skills) (MCP connects tools; skills package usage)
- [agent-frameworks](/en/topics/agent-frameworks) (all major frameworks ship MCP support)
- [agentic-safety](/en/topics/agentic-safety) (tool permissions are the heart of agent safety)

## Best Practices

- Inside an enterprise, prefer few, focused MCP servers — one per domain with minimized permissions — over exposing your whole internal API at once.
- Treat MCP servers as production services: auth, audit logging, and rate limiting are non-negotiable.

## Recommended Resources

- [MCP official documentation](https://modelcontextprotocol.io/)
- [Six agent protocols guide (MindStudio)](https://www.mindstudio.ai/blog/six-agent-protocols-ai-builders-2026)

## Timeline

### [2026-08-29](/en/today/2026-08-29)

three.ws open-sources: its official registry includes 72 MCP servers as part of its "multi-surface distribution" capability, letting the same agent instance (including its 3D embodiment and on-chain payment identity) be accessed directly through any MCP client — a large-scale application sample of MCP at the distribution layer (see [agent-frameworks](/en/topics/agent-frameworks)).

### [2026-08-03](/en/today/2026-08-03)

Agent-Reach hits Trending (+659/day, 64.7k total): a "CLI capability layer" route complementary to MCP's protocol approach — reusing existing CLI tools with primary-method/fallback-list routing to keep tools usable under anti-scraping measures and API churn.

### 2026-07-28

Topic created. Status: MCP is the de facto tool-integration standard, supported across major clients (Claude/ChatGPT/Cursor) and frameworks; the MCP+A2A two-layer stack is the enterprise architectural default.
