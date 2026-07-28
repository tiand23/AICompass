# Agent Frameworks

## Overview

The agent framework landscape: LangGraph (LangChain family, graph orchestration), CrewAI (role-based multi-agent), OpenAI Agents SDK (the handoff abstraction), Google ADK 2.0 (Python/Go/TS first-class, graph workflows), Microsoft Agent Framework, LlamaIndex Workflows, Claude Agent SDK, Mastra — with AutoGen entering maintenance mode in 2026.

## Why It Matters

The framework determines how agent logic is expressed and how portable it is — platforms lock you in; the framework layer is where neutrality lives. Landscape shifts (who leads, who goes maintenance-mode) directly affect the long-term safety of your choice.

## Core Concepts

- **Mid-2026 standings**: LangGraph leads enterprise adoption (34.5M monthly downloads; passed CrewAI in GitHub stars in early 2026), its graph architecture mapping cleanly to production needs like audit trails and rollback; Dify leads the low-code line at 144k stars.
- **AutoGen maintenance mode**: two options if you run it in production — live with the feature set, or migrate; LangGraph is the closest architectural fit.
- **Pick by stack**: M365/Azure → Copilot Studio + Semantic Kernel; AWS → AgentCore + LangGraph; GCP → ADK; custom code → LangGraph or the Claude Agent SDK.
- **Abstraction styles differ**: graphs (LangGraph/ADK), roles (CrewAI), handoffs (OpenAI Agents SDK) — they define your mental model and debugging experience.

## Related Technologies

- [agent-workflow](/en/topics/agent-workflow) (the workflow design paradigm above frameworks)
- [deep-agents](/en/topics/deep-agents) (LangChain's long-horizon direction)
- [cloud-agent-platforms](/en/topics/cloud-agent-platforms) (framework-platform pairings)
- [mcp](/en/topics/mcp) (the tool-integration standard all major frameworks support)

## Best Practices

- Default candidate for new projects: LangGraph (ecosystem and production maturity); fast role-based prototypes: CrewAI; deep on one cloud: that vendor's SDK.
- Judge frameworks on the "production four": state persistence, observability (e.g. LangSmith), human-in-the-loop nodes, error recovery — demos all look alike, the gap is here.

## Recommended Resources

- [The best AI agent frameworks in 2026 (LangChain)](https://www.langchain.com/resources/ai-agent-frameworks)
- [Best open-source agent frameworks (Firecrawl)](https://www.firecrawl.dev/blog/best-open-source-agent-frameworks)

## Timeline

### 2026-07-28

Topic created. Current standings: LangGraph leads both enterprise adoption and stars; AutoGen entered maintenance mode; Google ADK shipped 2.0 (three languages, graph workflows); OpenAI Agents SDK and Microsoft Agent Framework iterate steadily.
