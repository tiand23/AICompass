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

### [2026-10-13](/en/today/2026-10-13)

LangSmith launches AI Search in public beta (free on LangSmith Cloud in GCP's US, EU, and APAC regions): describe the behavior you're looking for in natural language instead of keywords to search agent execution traces, with a fast decision model reading traces and returning matching sessions ("did the user get frustrated," "did PII leak," "did the agent claim it finished but didn't"), using trajectories to normalize traces for faster queries — upgrading observability from "keyword event search" to "semantic behavior search" (see [agent-evaluation](/en/topics/agent-evaluation)).

### [2026-10-06](/en/today/2026-10-06)

Gemini Enterprise adds Antigravity admin controls: enterprise admins can now centrally manage access to Boost (a tiered multi-agent hierarchy for complex algorithmic/deep-debugging tasks, now GA) and Teamwork (coordinated autonomous subagents for large-scale, long-horizon projects, still in preview) — Google's version of adding governance switches to enterprise agent features.

### [2026-09-24](/en/today/2026-09-24)

Microsoft Foundry adds voice agents in public preview (sub-second latency, 80+ languages/140+ locales, deployable to web/Teams/Teams Phone/Twilio, supporting both prompt-based and hosted agent forms), expanded model choice (new GPT-6-series SKUs and Claude Opus 5.5), and continuous optimization (tuning agents from production traces against quality/latency/cost) — voice agents fill the last piece of Foundry's puzzle to compete with Google Gemini Live (see [voice-agents](/en/topics/voice-agents)). Same day, LangChain ships five LangSmith updates: **Engine v2** (red-teaming and automated testing added to the agent-failure-diagnosis Engine), **Managed Deep Agents v0.8** (adds authentication, memory management, and messaging channels — right on the heels of 09-09's Connections), **Trajectories** (a readable view of an agent session's full run), **LangSmith Fine-Tuning**, and **LangSmith Custom Apps** — LangSmith is converging from a collection of tools toward an integrated agent production platform (see [deep-agents](/en/topics/deep-agents)).

### [2026-09-22](/en/today/2026-09-22)

The full GPT-6 Astra/Sol/Luna lineup and the just-launched Claude Opus 5.5 arrive on Microsoft Foundry the same day for production agent scenarios, folded into the unified model evaluation/deployment/governance control plane — the lag between a model vendor's release cadence and a cloud vendor's listing cadence keeps shrinking, with the two model lines now directly comparable side by side (see [openai-models](/en/topics/openai-models) ・ [claude-models](/en/topics/claude-models)).

### [2026-09-05](/en/today/2026-09-05)

Microsoft Foundry adds GPT-6 Astra (launched 09-03): rolling out through a Limited Access Program, available only in the Global and US data zones (**no EU data zone**); Global standard-tier pricing runs $10-$75 per million tokens (tiered by context length), with a premium in the US zone; both Standard (pay-as-you-go) and Provisioned Throughput (dedicated capacity) purchase options; integrates Microsoft Entra identity management, encryption, private networking, and full activity logging. This continues the "multi-vendor model marketplace" strategy following 08-31's xAI Grok 4.6 addition, but this time comes with explicit geographic restrictions and staged access — the Critical-level cybersecurity rating is flowing directly into the cloud vendor's own access policy, not just OpenAI's release cadence (see [openai-models](/en/topics/openai-models)).

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
