# Agent Evaluation

## Overview

Agent evaluation: methods and benchmarks for measuring agent performance on multi-step tasks with real side effects. Unlike traditional model benchmarks (one question, one scored answer), agent evaluation faces non-unique trajectories, diverse outcomes and open-ended tasks; the prevailing approach is "real-task-derived samples + LLM-as-judge comparison against a baseline".

## Why It Matters

Whether an agent can go to production is ultimately decided by evaluation — without reproducible evals, every prompt tweak, model swap or tool change is blind tuning. Benchmarks are also the industry's progress bar: ReviewBench shows current models recover only ~30% of the human review baseline, meaning code review agents are far from saturated — and quantifying exactly where the headroom is.

## Core Concepts

- **Real-task-derived benchmarks**: build tasks by curating substantive samples from production data (real PR review comments, real tickets) — more reflective of actual capability than synthetic tasks (ReviewBench's approach).
- **Coverage vs precision**: the two basic axes of agent evaluation — did it find everything (coverage) and are its reports accurate (precision), usually combined as F1. Critical for review-class agents, where false positives burn user trust directly.
- **LLM-as-judge**: use a model to compare agent output against the human baseline for semantic equivalence (hitting the same underlying issue, not matching wording) — the mainstream scoring method for open-ended tasks; watch for judge bias.
- **Strategy is a variable**: the same model scores significantly higher with a structured, purpose-built prompt — evaluate "model + strategy" as a unit, not the model alone.
- **Vertical benchmarks built by the domain's own leading company**: Harvey LAB (legal — 24 practice areas, 1,671 tasks) follows the same pattern as ReviewBench (code review) — a company deeply embedded in the domain builds its own all-pass-rubric real-task benchmark, closer to the industry's deep-water reality than a generic third-party benchmark; a shared route for evaluating professional-services agents (legal, finance, healthcare).
- **Large-scale real-research tasks as a stress test**: the ICML 2026 Reproducibility Hackathon had 1,221 people use coding agents to reproduce the core claims of 2,226 papers (34% of the conference's accepted total), with an automated judge model uniformly issuing "verified/falsified/toy-scale/inconclusive" verdicts — an extreme-scale sample of the "real-task-derived benchmark" methodology applied to open-ended research reproduction, with a quantitative baseline of 51% of papers getting at least one claim verified and 23% falsified or contested; the conclusion stresses that the most reliable results come from human-in-the-loop, not full agent autonomy in reaching a verdict.
- **Specialized judge models replacing frontier models for evaluation**: rather than building your own LLM-as-judge, an evaluation-toolchain vendor can turn a "specially trained judgment model" directly into a managed service — LangSmith's first Tuned Evaluator, Perceived Error, is post-trained on labeled conversation data and outperforms all frontier models in judgment accuracy while cutting cost by 82% (up to 98% in some scenarios); the "vertical scenarios don't need frontier intelligence" efficiency philosophy now extends to the evaluation tooling itself.

## Related Technologies

- [ai-code-review](/en/topics/ai-code-review) (what ReviewBench evaluates)
- [deep-agents](/en/topics/deep-agents) (evaluation and recovery for long-horizon agents)
- Evaluation toolchains such as LangSmith / Harbor

## Best Practices

- Build eval sets from your own real failure cases first; generic benchmark scores often correlate weakly with your scenario.
- Include prompts/strategies in what you A/B — much of "the model can't do it" is really "the strategy can't".

## Recommended Resources

- [Evaluating code review agents with ReviewBench](https://www.langchain.com/blog/evaluating-code-review-agents-with-reviewbench)

## Timeline

### [2026-08-18](/en/today/2026-08-18)

LangSmith launches Tuned Evaluators, a managed service: the first evaluator, Perceived Error, is post-trained specifically on labeled conversational agent traces, outperforms all frontier models in judgment accuracy while cutting cost by 82% (up to 98% for some customer workloads); threads must meet a minimum two rounds of human-AI message pairs, evaluation completes within 12 hours, and billing applies only to successful runs.

### [2026-08-13](/en/today/2026-08-13)

HuggingFace publishes ICML 2026 Reproducibility Hackathon results: 1,221 participants used coding agents like Claude Code, Codex and Cursor to attempt reproducing the claims of 2,226 papers, producing 6,816 reproduction logbooks and 35,908 judged claims — 51% of examined papers had at least one claim verified, 23% had claims falsified or contested, and 266 were fully verified; agents showed limitations like getting stuck in loops and misreading scale-dependent behavior, and the most reliable results came from human-in-the-loop (see [coding-agents](/en/topics/coding-agents)).

### [2026-08-09](/en/today/2026-08-09)

Harvey open-sources Harvey LAB: a legal agent benchmark — 24 practice areas, 1,671 real tasks (including M&A data-room scenarios), scored via all-pass rubrics plus an LLM judge — the "real-task-derived benchmark" methodology landing in the high-expertise legal vertical, built by a leading company in the domain itself.

### [2026-08-04](/en/today/2026-08-04)

LangChain proposes a three-axis framework for voice agents: execution (tool-call/process correctness), outcomes (business attainment), experience (latency/interruptions/naturalness) — voice turns "experience" from a soft impression into an evaluation axis of its own (see [voice-agents](/en/topics/voice-agents)).

### [2026-07-31](/en/today/2026-07-31)

LangChain ships ReviewBench: 59 tasks derived from real LangSmith PR review comments, LLM-as-judge against baseline, F1 scoring. Models recover only ~30% of baseline issues with basic prompting; a structured review prompt lifts scores markedly.
