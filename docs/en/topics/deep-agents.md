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
- **Cost reduction via model routing**: most calls in a long-horizon task don't need a frontier model — LangChain's Switchyard benchmark on the Deep Agents eval suite routed 93% of calls to a 30B-class model, with only 7% escalated to a frontier model, cutting overall cost 74% (see [model-efficiency](/en/topics/model-efficiency)).
- **Capability comes from the compute environment, not tool count**: the monday.com Sidekick case shows that cramming 200+ pre-defined tools into an agent pollutes context and makes it dumber and more expensive; giving the agent a persistent, isolated, code-executing sandbox — not an exhaustive tool catalog — is where the capability ceiling actually lives (see [agent-sandboxes](/en/topics/agent-sandboxes)).
- **Vertical full-pipeline orchestration with mandatory human checkpoints**: OpenMontage standardizes a research→proposal→script→scene-plan→assets→edit→compose pipeline into long-horizon, multi-stage work with mandatory human approval and decision audit trails at every key node — a complete engineering implementation of "autonomous execution with retained human checkpoints" in a specific vertical (video production).

## Related Technologies

- LangGraph (LangChain's agent orchestration framework)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents)

## Best Practices

- When evaluating your own long-horizon agents, use LangChain's benchmark methodology as a reference — don't measure end-to-end success rate alone.

## Recommended Resources

- [How We Benchmark Deep Agents (LangChain Blog)](https://www.langchain.com/blog/)

## Timeline

### [2026-08-12](/en/today/2026-08-12)

LangChain systematically lists 7 infrastructure challenges that must be solved to take an agent to production (runtime reliability, event streaming, safely executing untrusted code, context management, performance evaluation, memory systems, authorization), arguing managed services bundle this infrastructure; same day, LangSmith's BYOC deployment mode goes generally available on AWS (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

OpenMontage open-sources (47.3k stars total): turns an AI coding assistant into a full-pipeline video production orchestrator; all 12 structured production pipelines follow a research→proposal→script→scene-plan→assets→edit→compose standard, with mandatory human approval at every key node — a complete landing example of "autonomous execution + human checkpoints" for long-horizon, multi-stage agent tasks, applied to a vertical domain (see [agent-skills](/en/topics/agent-skills)).

### [2026-08-11](/en/today/2026-08-11)

LangChain's NVIDIA Switchyard benchmark: 93% of calls in its own Deep Agents eval suite can be routed to a 30B-class model, with only 7% genuinely needing a frontier model, cutting overall cost 74% for a 6-point accuracy loss (see [model-efficiency](/en/topics/model-efficiency)). Same day, a post reveals the monday.com Sidekick case: a single agent crammed with 200+ pre-defined tools caused context pollution and got dumber and more expensive; switching to LangSmith Sandboxes (hardware-virtualized microVMs) to give the agent "its own computer" solved it — the capability ceiling comes from a dynamically executable compute environment, not tool count (see [agent-sandboxes](/en/topics/agent-sandboxes)).

### [2026-08-08](/en/today/2026-08-08)

Prime Intellect releases prime-agent (6.5k stars total): the RLM (Recursive Language Model) idea — context as variables, tools as function calls, running in a persistent Python REPL; `/refine` reviews the trajectory and writes experience back into harness state as built-in self-improvement, an alternative path to loopx's external state kernel toward the same goal (see [coding-agents](/en/topics/coding-agents)).

### [2026-08-07](/en/today/2026-08-07)

LangSmith launches Managed Deep Agents public beta: a hosted Deep Agents runtime bundling durable execution, sandboxes, memory, Slack/GitHub channels, OIDC identity, Harbor evals and full-chain observability, with `mda dev`/`mda deploy` closing the develop-to-deploy loop; the third vendor, after Claude and Gemini, to launch "hosted deep agents" as a product line (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

Claude Code v2.1.224 (backfilled): adds cross-session communication, with independent sessions exchanging plain-text messages via `ListAgents`/`SendMessage` to coordinate — multi-agent coordination capability gets built into the coding agent product itself, rather than relying entirely on an external orchestration framework or external state layer, another implementation path alongside the "external state kernel" approach (loopx-style) (see [coding-agents](/en/topics/coding-agents)).

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
