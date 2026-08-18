# Agent Workflow

## Overview

Agent workflow development: expressing business processes as a combination of deterministic orchestration and model autonomy — graph/state-machine orchestration, human-in-the-loop approval nodes, durable execution, error recovery and retries.

## Why It Matters

Fully autonomous agents remain the minority in 2026 enterprise reality — the mainstream is the **assisted workflow**: humans review, agents execute. Workflow design (where the model gets freedom, where determinism constrains it, where a human must sign off) is the first make-or-break decision of an enterprise agent project — more important than model choice.

## Core Concepts

- **The determinism–autonomy spectrum**: pure pipeline (predictable, brittle) → graph orchestration + bounded decisions (the mainstream sweet spot) → fully autonomous planning (the Deep Agents direction; evaluation and trust are the bottleneck).
- **Human-in-the-loop nodes**: approval gates before destructive actions; the design goal is making review low-friction, or it gets bypassed.
- **Durable execution**: long processes must suspend/resume across hours or days (waiting on approvals, external systems) — state belongs on disk, not in memory.
- **Rollbackability**: the practical reason graph architectures won — every node is a natural audit and rollback point.
- **Durable workflows aren't an agent-only need**: LlamaIndex's rebuild of its document-parsing pipeline scheduling on Temporal proves that "a long task can automatically resume from a checkpoint after a failure rather than restarting from scratch" is a general requirement for any large-scale asynchronous processing system, agent or not; modeling "resource coordination" itself as a durable, observable workflow entity (e.g. a semaphore Workflow) is more reliable than scattering locks and retry counters through application code (see [document-parsing](/en/topics/document-parsing)).

## Related Technologies

- [agent-frameworks](/en/topics/agent-frameworks) (where workflows are implemented)
- [deep-agents](/en/topics/deep-agents) (the fully-autonomous end of the spectrum)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (enterprise policy and permission requirements)

## Best Practices

- Ship the minimum-autonomy version first and expand the model's freedom using real production data — reliable first, clever second.
- Give every autonomous decision point three things: a confidence exit (escalate to a human when unsure), a timeout budget, and a deterministic fallback path on failure.

## Recommended Resources

- [How We Benchmark Deep Agents (LangChain)](https://www.langchain.com/blog/)
- [Agentic AI Frameworks 2026: Production Comparison](https://uvik.net/blog/agentic-ai-frameworks/)

## Timeline

### [2026-08-17](/en/today/2026-08-17)

LlamaIndex shares its practice of rebuilding document-processing scheduling on Temporal durable workflows: a Workflow+Activity model, a semaphore Workflow for concurrency control, failed jobs automatically resuming from a checkpoint — durable execution landing in a concrete, non-agent-centric scenario (large-scale document processing) (see [document-parsing](/en/topics/document-parsing)).

### 2026-07-28

Topic created. State of practice: the enterprise mainstream is review-then-execute assisted workflows; graph orchestration + durable execution + HITL approvals form the standard combination at the workflow layer.
