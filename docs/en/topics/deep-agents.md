# Deep Agents

## Overview

Deep Agents is LangChain's concept and product direction: agents that execute long-horizon, multi-step autonomous tasks — with planning, subtask decomposition, persistent memory and error recovery — as opposed to "shallow" single-turn tool-calling agents.

## Why It Matters

Long-horizon autonomy is the current frontier of agent capability competition, and the hardest part to evaluate: single-turn benchmarks can't measure planning, tool use or error recovery. A leading framework vendor is building concepts, products and evaluation methodology around it — worth tracking to calibrate your own agent architecture.

## Core Concepts

- **Long-horizon tasks**: goal completion across many steps, tools and extended time.
- **The evaluation problem**: process correctness vs. outcome correctness; measuring mid-task recovery.
- **Middleware combo**: filesystem (persistent cross-turn references), sandboxed execution (isolated code runs), context summarization (long-session cost control) — the standard trio for long-session agents, validated by the Stripe Kai case.
- **Layered architecture**: open-source harness (Deep Agents) → company-specific harness → configuration layer (custom agent instances) — the division of labor between a general base and enterprise customization.

## Related Technologies

- LangGraph (LangChain's agent orchestration framework)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents)

## Best Practices

- When evaluating your own long-horizon agents, use LangChain's benchmark methodology as a reference — don't measure end-to-end success rate alone.

## Recommended Resources

- [How We Benchmark Deep Agents (LangChain Blog)](https://www.langchain.com/blog/)

## Timeline

### [2026-08-03](/en/today/2026-08-03)

Stripe case study published: company-wide agent "Kai" built on Deep Agents — first version by one engineer in one week, the middleware trio (filesystem/sandbox/summarization) plus 1,000+ federated skills; 5,000+ users within four weeks, 83% of employees weekly.

### [2026-07-29](/en/today/2026-07-29)

Deep Agents v0.7 released: 65% fewer base input tokens, filesystem tool overhaul, DeltaChannel incremental checkpoints, experimental QuickJS code execution; TodoListMiddleware now opt-in (breaking change).

### [2026-07-23](/en/today/2026-07-23)

LangChain published "How We Benchmark Deep Agents", opening up its long-horizon agent evaluation methodology.
