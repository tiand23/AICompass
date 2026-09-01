# Cloud Agent Platforms

## Overview

The hyperscalers' managed agent platforms: AWS **Bedrock AgentCore**, Microsoft **Azure AI Foundry** (paired with the Agent365 control plane), Google's **Gemini Enterprise Agent Platform** (reorganized from Vertex AI at Cloud Next in April 2026, with low-code Agent Studio and a sub-second cold-start Agent Runtime), and Anthropic's **Claude Managed Agents** — plus SaaS-side players like Salesforce Agent Fabric.

## Why It Matters

The enterprise agent platform market entered consolidation in 2026 — the need to build your own runtime is shrinking, platform choice has become the first architectural decision, and platforms are deeply coupled to their clouds, making migration expensive once chosen.

## Core Concepts

- **The first law of selection: follow your existing cloud.** Azure shops → AI Foundry; AWS → Bedrock AgentCore; GCP → Gemini Enterprise Agent Platform. Cross-cloud neutrality is the reason to go direct with Anthropic/OpenAI.
- **Respective strengths**: AgentCore has the broadest model access (30+ models behind one API — Claude, Llama, Mistral); Foundry is deepest on the GPT family and M365/Copilot Studio; Google is strongest for ML-heavy workloads, native multimodal, and the A2A protocol (Gemini API Managed Agents has since completed its productionization set: hooks, budget guardrails, scheduled triggers); Managed Agents leads on the Claude ecosystem and API engineering (effort, webhooks, event streams, hard session-budget caps, advisor models, data residency, GitHub-loaded skills).
- **Hosted Deep Agents is a new category**: following Claude and Gemini, LangSmith's Managed Deep Agents (public beta, 2026-08) wraps the open-source framework into a hosted runtime — durable execution/sandboxes/memory/observability bundled and delivered; "open-source framework + hosted runtime" is becoming a shared route across vendors.
- **7 infrastructure challenges a managed offering must solve**: runtime reliability, user-facing event streaming, safely executing untrusted agent-generated code, context management, performance evaluation, memory systems, authorization and permissions — LangChain organized the previously scattered "why go managed" arguments into one checkable list, useful when evaluating self-build vs. managed.
- **Three deployment-mode options**: fully-managed cloud / BYOC (Bring Your Own Cloud — runs in the customer's own cloud account, data stays in their private environment) / full self-hosting — BYOC is a middle ground between "managed convenience" and "data sovereignty"; LangSmith has taken this mode GA on AWS.
- **Control planes**: Agent365-style "MDM for agents" is a new 2026 layer — enterprises need unified identity, permissions and auditing across hundreds of agents.
- **The realistic mainstream is review-then-execute**: most organizations run assisted workflows, not fully autonomous production pipelines.

## Related Technologies

- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (the delivery-model and adoption view)
- [agent-frameworks](/en/topics/agent-frameworks) (the framework layer, typically paired: AWS+LangGraph, GCP+ADK)
- [claude-models](/en/topics/claude-models) (the model line behind Managed Agents)
- [a2a](/en/topics/a2a) (natively supported on Google's platform)

## Best Practices

- Decide by where your data and identity systems live, not by model benchmarks.
- Keep agent definitions and orchestration logic in the framework layer (portable); treat the platform as a runtime only, to limit lock-in.

## Recommended Resources

- [The 2026 Enterprise Agent Platform Decision Guide (AgentMarketCap)](https://agentmarketcap.ai/blog/2026/04/07/azure-ai-foundry-enterprise-agent-platform-2026)
- [AWS Bedrock vs Microsoft Foundry vs Vertex AI 2026](https://www.epcgroup.net/blog/aws-bedrock-vs-microsoft-foundry-vs-vertex-ai-2026)

## Timeline

### [2026-08-31](/en/today/2026-08-31)

Microsoft Foundry (formerly Azure AI Foundry) adds xAI's Grok 4.6 in public preview: from its 1.5T-scale model family, built for long-horizon reasoning and complex workflows spanning software engineering, office productivity, research, and inference optimization, integrated into Foundry's unified model evaluation/deployment/governance control plane. This continues the "multi-vendor model marketplace" strategy (having already added GPT, Cohere, Llama, Mistral, and more), reinforcing "platform before model" — enterprises already committed to Azure can evaluate more frontier models without switching vendor contracts. The same day, Foundry Agent Service published an Azure Cosmos DB long-term memory reference implementation (see [agent-memory](/en/topics/agent-memory)).

### [2026-08-19](/en/today/2026-08-19)

Claude Managed Agents adds web-tool domain allow/block lists: an agent's `web_search`/`web_fetch` tools can be scoped with `allowed_domains` or `blocked_domains`, with `web_fetch` also supporting `max_content_tokens` — another step in refining least-privilege for hosted agents' network access. Same day, the Agent Skills API reaches formal GA (see [agent-skills](/en/topics/agent-skills)), and the Claude API's browser/computer-use tools and self-hosted-sandbox memory-store attachment ship in the same batch (see [agent-sandboxes](/en/topics/agent-sandboxes) ・ [agent-memory](/en/topics/agent-memory)).

### [2026-08-12](/en/today/2026-08-12)

LangChain publishes "Why managed agents are the next big thing in agent building," systematically listing 7 infrastructure challenges that must be solved to take an agent to production (runtime reliability, event streaming, safely executing untrusted code, context management, performance evaluation, memory systems, authorization), arguing managed services bundle this infrastructure so developers can focus on business logic. Same day, LangSmith's BYOC deployment mode goes generally available on AWS — enterprises can run LangSmith on a cluster in their own AWS account, data never leaving their private environment, a third deployment option between managed convenience and data sovereignty (see [deep-agents](/en/topics/deep-agents)).

### [2026-08-07](/en/today/2026-08-07)

Claude Managed Agents ships four features at once: hard session-budget caps (auto-pause with `budget_reached`), Advisor models (a stronger model the primary thread can consult mid-turn), `inference_geo` inference-location control (data-residency compliance), and skills auto-discovered from a mounted GitHub repo. Same day, LangSmith launches Managed Deep Agents public beta — the third vendor to launch hosted deep agents as a product line (see [deep-agents](/en/topics/deep-agents)).

### [2026-08-01](/en/today/2026-08-01)

Claude Managed Agents: Dreams (research preview) supports Opus 5 — a new model propagating into the hosted product line one week after release.

### [2026-07-28](/en/today/2026-07-28)

Google expands Gemini API Managed Agents: default model up to Gemini 3.6 Flash; pre/post execution hooks in the sandbox (block/lint/audit tool calls); `max_total_tokens` budget guardrail, cron-scheduled triggers, an Environments API and a free tier — productionization catching up with Claude Managed Agents.

Topic also created this day. Current landscape: all four hyperscaler platforms are production-ready and the market is consolidating — Google reorganized Vertex AI into the Gemini Enterprise Agent Platform (April 2026), Microsoft shipped the Agent365 control plane, AWS pushed AgentCore into broad production, Salesforce relaunched Agent Fabric.
