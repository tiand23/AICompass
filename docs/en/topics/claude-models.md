# Claude Models

## Overview

Anthropic's Claude model family. Current tiers: the flagship Opus line (latest: Opus 5); the newly introduced Mythos class (Fable 5 / Mythos 5, positioned above Opus — same underlying model, with Fable generally available with additional safety measures for dual-use capabilities and Mythos restricted to approved organizations); the balanced Sonnet; and the lightweight Haiku. Available via the Claude API, Amazon Bedrock, Google Vertex AI, and Microsoft Foundry.

## Why It Matters

Claude is one of the mainstream model choices for agent and coding workloads. Every update to the model line — context windows, the effort mechanism, pricing, breaking changes — directly affects model selection, cost, and migration work for LLM applications.

## Core Concepts

- **Effort levels**: five levels (`low` / `medium` / `high` / `xhigh` / `max`), the primary steering control from Opus 5 onward, replacing much manual prompt tuning; `max` is for capability-critical work.
- **Thinking**: extended thinking. On by default on Opus 5; cannot be disabled at effort `xhigh`/`max` (returns 400).
- **Context & output**: Opus 5 supports a 1M-token context window (default and maximum) and 128k max output.
- **Fast mode**: runs Opus-tier models with faster output (no downgrade to a smaller model); supported models change across generations (removed for 4.7 — use 4.8 / 5).
- **Local-session compliance auditing**: the Compliance API can retrieve full transcripts of Cowork/Claude Code sessions running on a user's own machine (`GET /v1/compliance/apps/sessions/local` and related endpoints), extending enterprise agent observability from "pre-inference blocking" (Inference Hooks) to "after-the-fact audit."
- **Introductory price made permanent**: Sonnet 5's introductory pricing ($2/$10 per MTok) is now the long-term standard price, with the planned increase cancelled — a pricing strategy that trades a stable price for a long-term usage commitment.

## Related Technologies

- Claude Code (not yet documented here)
- Claude Managed Agents (hosted agent runtime)
- Amazon Bedrock / Vertex AI / Microsoft Foundry (third-party hosting channels)

## Best Practices

- When migrating to Opus 5, check two things: calls combining `thinking: disabled` with high effort (will 400), and any dependency on Opus 4.7 fast mode (removed).
- Tune the quality/cost/latency trade-off with effort rather than by switching models.

## Recommended Resources

- [Claude Platform Release Notes](https://platform.claude.com/docs/en/release-notes/overview)
- [What's new in Claude Opus 5](https://platform.claude.com/docs/en/about-claude/models/whats-new-opus-5)
- [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview)

## Timeline

### [2026-08-11](/en/today/2026-08-11)

Compliance API gains local-session retrieval endpoints: full transcripts of Cowork/Claude Code sessions running on a user's own machine, beta for Claude Enterprise. Together with Inference Hooks (shipped 08-05), this closes the loop between pre-inference blocking and after-the-fact audit (see [agentic-safety](/en/topics/agentic-safety)).

### [2026-08-10](/en/today/2026-08-10)

Claude Sonnet 5's introductory price ($2/$10 per MTok) becomes the long-term standard price; the planned 2026-09-01 increase to $3/$15 is cancelled — a signal of converging certainty on flagship-model pricing.

### [2026-08-07](/en/today/2026-08-07)

Fable 5's biology-safety classifier retrained: rewrote the classification "constitution," added benign-use carve-outs, retrained on expert feedback and updated data — biology-related false-positive blocks down ~85%; virology/toxicology/molecular-design requests still blocked and routed to Opus 5. Dual-use guardrails moving from blanket restriction to fine-grained "rule refinement + data feedback" calibration. Same day, Managed Agents ships hard session-budget caps, Advisor models, `inference_geo` data-residency control, and GitHub-repo-loaded skills (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

### [2026-08-05](/en/today/2026-08-05)

Claude Enterprise ships Inference Hooks (beta): a real-time allow/deny verdict from an organization's security server before governed prompts run, across claude.ai/Cowork/Claude Code (see [agentic-safety](/en/topics/agentic-safety)). Same day, Claude Opus 4.1 is formally retired — requests now return an error; migrate to Opus 5.

### [2026-08-01](/en/today/2026-08-01)

Dreams (research preview) in Managed Agents now supports Opus 5 (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

### [2026-07-24](/en/today/2026-07-24)

Claude Opus 5 released: 1M context (default and max), 128k output, thinking on by default, $5/$25 pricing unchanged from Opus 4.8; the five-level effort ladder becomes the primary control; breaking changes — thinking cannot be disabled at high effort, Opus 4.7 fast mode removed. Same day: mid-conversation tool changes entered beta (change tools between turns while preserving the prompt cache), and `fallbacks` gained a `"default"` mode.

### [2026-07-22](/en/today/2026-07-22)

Claude Managed Agents updates: effort in agent model configuration; webhooks covering environment / memory store lifecycle; session creation with `initial_events` that seeds and starts the loop; `version` now optional on updates (optimistic concurrency); thread-level event streams support event deltas.
