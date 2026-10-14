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
- **Source correctness is an independent verification dimension**: when an MCP agent stitches an answer together from multiple tool calls, traditional fact-checking methods (RAGAS faithfulness, MiniCheck, etc.) only ask "is the claim supported somewhere in the evidence pool," not "does the output's cited source actually support it" — this "cross-source conflation" failure slips through, requiring dedicated verification that aligns the claimed source against the actually-routed one (the ProvenanceGuard approach; see [agent-evaluation](/en/topics/agent-evaluation)).

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

### [2026-10-14](/en/today/2026-10-14)

HKUDS/CLI-Anything hits GitHub Trending (52K stars total): a 7-phase automated pipeline generates an "agent-native" CLI (REPL mode, JSON output, a `SKILL.md` file) for any open-source GUI app (GIMP, Blender, Inkscape, OBS Studio, etc.) — letting an agent issue structured commands and read deterministic feedback instead of recognizing a UI from screenshots; compatible with OpenClaw, Claude Code, Codex and other SKILL-spec agents, unified under a `skills/` directory. Another, more deterministic route for the long-standing problem of "how does an agent operate software built for humans," as an alternative to computer-use's screenshot-and-click approach (see [agent-skills](/en/topics/agent-skills)).

### [2026-10-09](/en/today/2026-10-09)

`rea` (an MCP server + CLI) spikes +54,706 stars in a day, ~186K total over two days — wiring professional reverse-engineering tools like Ghidra and IDA Pro behind a coding agent via MCP, analyzing native binaries/Electron/.NET/APKs/websites, explaining feature implementations without source code and backing it with an evidence chain and recreation steps. A high-heat example of MCP connecting a "professional toolchain," not just data sources/APIs, behind an agent (see [agent-skills](/en/topics/agent-skills)).

### [2026-09-29](/en/today/2026-09-29)

A paper proposes ProvenanceGuard: consuming captured MCP traces with stable tool IDs, source IDs, and raw outputs, decomposing answers into atomic claims, routing each to its specific source evidence, checking support, and comparing the claimed attribution against the actually-routed source, returning per-claim verdicts plus an overall allow/block decision — the first approach to systematize "is the citation correct" as an independent verification dimension; this blind spot will grow as MCP agents spread (see [agent-evaluation](/en/topics/agent-evaluation)).

### [2026-08-29](/en/today/2026-08-29)

three.ws open-sources: its official registry includes 72 MCP servers as part of its "multi-surface distribution" capability, letting the same agent instance (including its 3D embodiment and on-chain payment identity) be accessed directly through any MCP client — a large-scale application sample of MCP at the distribution layer (see [agent-frameworks](/en/topics/agent-frameworks)).

### [2026-08-03](/en/today/2026-08-03)

Agent-Reach hits Trending (+659/day, 64.7k total): a "CLI capability layer" route complementary to MCP's protocol approach — reusing existing CLI tools with primary-method/fallback-list routing to keep tools usable under anti-scraping measures and API churn.

### 2026-07-28

Topic created. Status: MCP is the de facto tool-integration standard, supported across major clients (Claude/ChatGPT/Cursor) and frameworks; the MCP+A2A two-layer stack is the enterprise architectural default.
