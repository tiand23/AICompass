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

### [2026-08-01](/en/today/2026-08-01)

Dreams (research preview) in Managed Agents now supports Opus 5 (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

### [2026-07-24](/en/today/2026-07-24)

Claude Opus 5 released: 1M context (default and max), 128k output, thinking on by default, $5/$25 pricing unchanged from Opus 4.8; the five-level effort ladder becomes the primary control; breaking changes — thinking cannot be disabled at high effort, Opus 4.7 fast mode removed. Same day: mid-conversation tool changes entered beta (change tools between turns while preserving the prompt cache), and `fallbacks` gained a `"default"` mode.

### [2026-07-22](/en/today/2026-07-22)

Claude Managed Agents updates: effort in agent model configuration; webhooks covering environment / memory store lifecycle; session creation with `initial_events` that seeds and starts the loop; `version` now optional on updates (optimistic concurrency); thread-level event streams support event deltas.
