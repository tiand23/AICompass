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

### 2026-07-28

Topic created. State of practice: the enterprise mainstream is review-then-execute assisted workflows; graph orchestration + durable execution + HITL approvals form the standard combination at the workflow layer.
