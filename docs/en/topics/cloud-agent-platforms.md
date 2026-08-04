# Cloud Agent Platforms

## Overview

The hyperscalers' managed agent platforms: AWS **Bedrock AgentCore**, Microsoft **Azure AI Foundry** (paired with the Agent365 control plane), Google's **Gemini Enterprise Agent Platform** (reorganized from Vertex AI at Cloud Next in April 2026, with low-code Agent Studio and a sub-second cold-start Agent Runtime), and Anthropic's **Claude Managed Agents** — plus SaaS-side players like Salesforce Agent Fabric.

## Why It Matters

The enterprise agent platform market entered consolidation in 2026 — the need to build your own runtime is shrinking, platform choice has become the first architectural decision, and platforms are deeply coupled to their clouds, making migration expensive once chosen.

## Core Concepts

- **The first law of selection: follow your existing cloud.** Azure shops → AI Foundry; AWS → Bedrock AgentCore; GCP → Gemini Enterprise Agent Platform. Cross-cloud neutrality is the reason to go direct with Anthropic/OpenAI.
- **Respective strengths**: AgentCore has the broadest model access (30+ models behind one API — Claude, Llama, Mistral); Foundry is deepest on the GPT family and M365/Copilot Studio; Google is strongest for ML-heavy workloads, native multimodal, and the A2A protocol (Gemini API Managed Agents has since completed its productionization set: hooks, budget guardrails, scheduled triggers); Managed Agents leads on the Claude ecosystem and API engineering (effort, webhooks, event streams).
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

### [2026-08-01](/en/today/2026-08-01)

Claude Managed Agents: Dreams (research preview) supports Opus 5 — a new model propagating into the hosted product line one week after release.

### [2026-07-28](/en/today/2026-07-28)

Google expands Gemini API Managed Agents: default model up to Gemini 3.6 Flash; pre/post execution hooks in the sandbox (block/lint/audit tool calls); `max_total_tokens` budget guardrail, cron-scheduled triggers, an Environments API and a free tier — productionization catching up with Claude Managed Agents.

Topic also created this day. Current landscape: all four hyperscaler platforms are production-ready and the market is consolidating — Google reorganized Vertex AI into the Gemini Enterprise Agent Platform (April 2026), Microsoft shipped the Agent365 control plane, AWS pushed AgentCore into broad production, Salesforce relaunched Agent Fabric.
