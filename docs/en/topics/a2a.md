# A2A

## Overview

A2A (Agent-to-Agent Protocol): the Google-led open protocol for agent collaboration — standardized message formats, task coordination and capability discovery, letting independently built agents delegate work to each other. Backed by 50+ vendors (Salesforce, MongoDB, ServiceNow and more), with **AP2** (Agent Payments Protocol) as its extension for secure agent-to-agent transactions.

## Why It Matters

No single agent carries a complex business; multi-agent collaboration needs a horizontal standard, and A2A leads that layer. Together with MCP it forms the "two-layer protocol stack" (MCP vertical for tools, A2A horizontal for agents) that is becoming the enterprise deployment default — betting on the protocol is betting on ecosystem interoperability.

## Core Concepts

- **Agent Card / capability discovery**: agents declare what they can do in a standard format; others discover and delegate accordingly.
- **Task lifecycle**: unified state semantics for submitting, progressing and delivering cross-agent tasks, including long-running ones.
- **Complementary to MCP**: an individual agent calls tools via MCP; multiple agents coordinate via A2A — production systems typically run both.
- **AP2 payments extension**: a protocol layer for secure inter-agent transactions — early infrastructure for an agent economy.

## Related Technologies

- [mcp](/en/topics/mcp) (the vertical layer of the stack)
- [cloud-agent-platforms](/en/topics/cloud-agent-platforms) (native A2A support on Google's platform)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (cross-organization agent collaboration scenarios)

## Best Practices

- For agents inside one organization, use your framework's built-in orchestration (same process/platform); A2A earns its keep at cross-organization and cross-vendor boundaries — don't adopt protocol for protocol's sake.

## Recommended Resources

- [MCP vs A2A comparison guide](https://pickaxe.co/post/mcp-vs-a2a-protocol)
- [Agent interoperability protocols 2026: MCP, A2A, ACP and convergence (Zylos Research)](https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence/)

## Timeline

### 2026-07-28

Topic created. Status: 50+ vendors on board, the AP2 payments extension released, the two-layer stack with MCP is architectural consensus; protocol convergence (A2A/ACP etc.) is 2026's live debate.
