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
- **Read/write privilege separation**: read-only diagnosis/analysis can be fully autonomous; any write with side effects must go through human approval (HITL) — the core design rule from the Kubernetes SRE agent case, with approval scope narrowed to "a human can understand it" rather than broadly greenlighting a whole class of operations.
- **External state kernel**: cross-session goals, todos, evidence and handoffs of ownership don't fit well inside a single conversation's context — agent-agnostic external control planes like loopx are emerging as a standalone layer for long-horizon multi-agent collaboration, rather than a built-in feature of any one framework.
- **Managed/hosted**: hosted runtimes are appearing on top of open-source frameworks — LangSmith's Managed Deep Agents (public beta, 2026-08) bundles durable execution, sandboxes, memory and observability behind a one-command `mda deploy`, an instance of the "open-source framework + hosted runtime" layering applied to Deep Agents.
- **Self-improvement loop (built-in vs external)**: prime-agent's `/refine` makes "review the trajectory, then update the harness's own state" a built-in agent capability (writing back into harness state) — an alternative implementation path to loopx's external state layer, for the same goal of letting a run leave behind reusable residue.

## Related Technologies

- LangGraph (LangChain's agent orchestration framework)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents)

## Best Practices

- When evaluating your own long-horizon agents, use LangChain's benchmark methodology as a reference — don't measure end-to-end success rate alone.

## Recommended Resources

- [How We Benchmark Deep Agents (LangChain Blog)](https://www.langchain.com/blog/)

## Timeline

### [2026-08-08](/en/today/2026-08-08)

Prime Intellect releases prime-agent (6.5k stars total): the RLM (Recursive Language Model) idea — context as variables, tools as function calls, running in a persistent Python REPL; `/refine` reviews the trajectory and writes experience back into harness state as built-in self-improvement, an alternative path to loopx's external state kernel toward the same goal (see [coding-agents](/en/topics/coding-agents)).

### [2026-08-07](/en/today/2026-08-07)

LangSmith launches Managed Deep Agents public beta: a hosted Deep Agents runtime bundling durable execution, sandboxes, memory, Slack/GitHub channels, OIDC identity, Harbor evals and full-chain observability, with `mda dev`/`mda deploy` closing the develop-to-deploy loop; the third vendor, after Claude and Gemini, to launch "hosted deep agents" as a product line (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

### [2026-08-06](/en/today/2026-08-06)

LangChain publishes a post clarifying Deep Agents / LangChain / LangGraph positioning: Deep Agents is an "opinionated" harness with built-in filesystem backends, subagents, skills and memory management — the default starting point for complex long-running tasks; all three are composable, three points on the "agency vs determinism" spectrum (see [agent-frameworks](/en/topics/agent-frameworks)).

loopx arrives (2.1k stars total): not another agent framework, but an agent-agnostic external state kernel layered on top of any agent (Codex/Claude Code/Cursor) — durable goals, handoff-able todos, quota-aware scheduling, evidence logs. State management for long-horizon multi-agent collaboration is becoming its own independent layer.

### [2026-08-05](/en/today/2026-08-05)

LangChain publishes an autonomous Kubernetes SRE agent case study: a scheduler runs lightweight periodic checks (Haiku) → anomalies trigger parallel specialist subagents to investigate → a Sonnet orchestrator synthesizes a fix proposal → execution is strictly gated behind human approval. "Reads are autonomous, writes are always gated", with approval scope narrowed to human-legible — a joint application of cost-layered models and read/write privilege separation (see [enterprise-ai-agents](/en/topics/enterprise-ai-agents)).

### [2026-08-03](/en/today/2026-08-03)

Stripe case study published: company-wide agent "Kai" built on Deep Agents — first version by one engineer in one week, the middleware trio (filesystem/sandbox/summarization) plus 1,000+ federated skills; 5,000+ users within four weeks, 83% of employees weekly.

### [2026-07-29](/en/today/2026-07-29)

Deep Agents v0.7 released: 65% fewer base input tokens, filesystem tool overhaul, DeltaChannel incremental checkpoints, experimental QuickJS code execution; TodoListMiddleware now opt-in (breaking change).

### [2026-07-23](/en/today/2026-07-23)

LangChain published "How We Benchmark Deep Agents", opening up its long-horizon agent evaluation methodology.
