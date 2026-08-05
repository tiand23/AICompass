# Enterprise AI Agents

## Overview

Bringing AI agents into the enterprise: hosted platforms and runtimes, delivery models (self-built / platform / embedded delivery), and the engineering practices around permissions, evaluation and operations. Covers platform offerings such as OpenAI Presence and Claude Managed Agents.

## Why It Matters

This is the main battleground for generative AI in the enterprise. As model capabilities converge, competition shifts to delivery and operations: who can get agents reliably connected to enterprise systems, acting within policy, and escalating to humans on failure. For developers, platform vendors' moves define the boundary between building and buying.

## Core Concepts

- **Delivery model spectrum**: pure API self-build → hosted runtime (Managed Agents) → platform + embedded engineers (Presence's FDE model).
- **Policy & permissions**: company-defined policies, permissions and evaluation standards constrain agent behavior; human escalation is table stakes.
- **Operational maturity signals**: lifecycle webhooks, session seeding, streaming observation — concrete API capabilities for judging platform maturity.
- **The "own your intelligence" debate**: outsource intelligence to a platform or keep it in-house — the core divide in enterprise AI architecture.

## Related Technologies

- [claude-models](/en/topics/claude-models) (the model line behind Managed Agents)
- [agentic-safety](/en/topics/agentic-safety) (permissions and isolation are prerequisites for enterprise adoption)
- [deep-agents](/en/topics/deep-agents) (evaluating long-horizon agents)

## Best Practices

- Position yourself on the delivery spectrum: with platform engineering capacity, choose a hosted runtime; short on people, evaluate embedded delivery's cost-effectiveness.
- Whichever model you choose, keep permission tiering and human escalation under your own control — never fully delegate them to the platform.

## Recommended Resources

- [Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence/)
- [Claude Managed Agents docs](https://platform.claude.com/docs/en/release-notes/overview)

## Timeline

### [2026-08-04](/en/today/2026-08-04)

LangChain publishes CX-agent production lessons from Lyft, Vodafone and LATAM Airlines — following Stripe Kai, the "agents-in-production case library" is taking shape systematically; customer experience is confirmed as the deepest-penetrated enterprise scenario.

### [2026-08-03](/en/today/2026-08-03)

The Stripe Kai case study (published by LangChain): a complete production reference for company-wide agents — open-source harness + company harness + configuration layering, federated skills produced autonomously by business teams covering 500+ internal tools, 83% weekly employee adoption. "Platform provides the base, business provides the capabilities" validated at scale.

### [2026-07-30](/en/today/2026-07-30)

LangSmith shipped LLM Gateway: runtime controls for production agents (model routing, quotas, policy) — the gateway layer completing the enterprise agent ops puzzle, same trend as Agent365-style control planes.

### [2026-07-25](/en/today/2026-07-25)

Harrison Chase published "What does it mean to 'own your intelligence'?", putting the intelligence-ownership debate on the table.

### [2026-07-22](/en/today/2026-07-22)

OpenAI launched Presence: an enterprise voice/chat agent platform in limited GA, with FDE- and integrator-led delivery, reportedly already handling ~75% of OpenAI's own inbound support requests. Same day, Claude Managed Agents shipped a batch of operations-oriented API updates (effort configuration, lifecycle webhooks, session seeding, event deltas).
