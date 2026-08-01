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

### [2026-07-31](/en/today/2026-07-31)

LangChain ships ReviewBench: 59 tasks derived from real LangSmith PR review comments, LLM-as-judge against baseline, F1 scoring. Models recover only ~30% of baseline issues with basic prompting; a structured review prompt lifts scores markedly.
