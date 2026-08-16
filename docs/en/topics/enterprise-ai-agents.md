# Enterprise AI Agents

## Overview

Bringing AI agents into the enterprise: hosted platforms and runtimes, delivery models (self-built / platform / embedded delivery), and the engineering practices around permissions, evaluation and operations. Covers platform offerings such as OpenAI Presence and Claude Managed Agents.

## Why It Matters

This is the main battleground for generative AI in the enterprise. As model capabilities converge, competition shifts to delivery and operations: who can get agents reliably connected to enterprise systems, acting within policy, and escalating to humans on failure. For developers, platform vendors' moves define the boundary between building and buying.

## Core Concepts

- **Delivery model spectrum**: pure API self-build → hosted runtime (Managed Agents) → platform + embedded engineers (Presence's FDE model).
- **Policy & permissions**: company-defined policies, permissions and evaluation standards constrain agent behavior; human escalation is table stakes.
- **Operational maturity signals**: lifecycle webhooks, session seeding, streaming observation — concrete API capabilities for judging platform maturity; hard session-budget caps and data-residency control are the latest additions to this signal set.
- **The "own your intelligence" debate**: outsource intelligence to a platform or keep it in-house — the core divide in enterprise AI architecture.
- **The migration of an "HR management" mental model**: once agent count grows, teams start managing agents the way they manage employees — ticket assignment, org structure (roles/reporting lines), budget enforcement, governance approval workflows, audit logs (the Paperclip case). A productized attempt to fold Managed Agents' budget/permission capabilities and agent workflow orchestration into a single unified management plane.
- **Three speeds of cost governance**: runtime optimization (route each request to a right-sized model in real time), workflow optimization (test and improve agent efficiency over days/weeks), continuous governance (spending caps that don't get relaxed on demand) — three different paces that need to run in parallel, not as an either-or choice; a way to organize previously scattered cost-reduction tactics (routing, caching, evaluation-driven iteration, hard spending caps) into one framework (proposed by Azure). A companion self-check: can you see cost by model/agent/workflow? Are requests over-provisioned to unnecessarily capable models? Is there a mechanism for agent efficiency to keep improving? Can you enforce spending limits during usage spikes?

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

### [2026-08-12](/en/today/2026-08-12)

Azure proposes a "three-speed" model for agent cost governance: runtime routing, workflow iteration and continuous governance running at three paces in parallel, paired with Microsoft Foundry's model router / prompt caching / agent optimizer / AI Gateway rate limits; the core argument is shifting from "buying intelligence" once to "managing it" continuously (see [model-efficiency](/en/topics/model-efficiency)).

### [2026-08-10](/en/today/2026-08-10)

Paperclip arrives (76.2k stars total): "managing an agent team" as a standalone product — ticket tracking, org structure, budget enforcement by agent/project/company, governance approval, multi-company data isolation, audit logs; explicitly not a chatbot/framework/workflow builder, purely "enterprise management software for an agent team." Integrates previously scattered fragments — cross-session state, budgets, approval — into a unified "agent HR management" mental model (see [agent-workspaces](/en/topics/agent-workspaces)).

### [2026-08-07](/en/today/2026-08-07)

Claude Managed Agents ships four ops features at once: hard session-budget caps, Advisor models (consult a stronger model mid-turn for strategic guidance), `inference_geo` data-residency control, and GitHub-repo-loaded skills. Same day, LangSmith launches Managed Deep Agents public beta — hosted-runtime competition intensifies further (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

### [2026-08-05](/en/today/2026-08-05)

Claude Enterprise ships Inference Hooks (beta): governed prompts get a real-time allow/deny verdict from an organization's own security server before inference, across claude.ai/Cowork/Claude Code. Enterprise agent governance opens up inference itself as a step a policy gateway can plug into, rather than only auditable after the fact (see [agentic-safety](/en/topics/agentic-safety)).

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
