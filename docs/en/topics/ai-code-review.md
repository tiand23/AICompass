# AI Code Review

## Overview

Tools and architectural patterns for LLM/agent-based code review. The prevailing design is a "deterministic pipeline + LLM agent" hybrid: rule-decidable checks go through rules; semantic understanding goes to the model.

## Why It Matters

Code review is one of the most directly cost-effective links in the AI coding toolchain; major-vendor open-source implementations (e.g. alibaba/open-code-review) offer reference engineering trade-offs — when to trust rules, when to trust the model, and how to control false positives.

## Core Concepts

- **Hybrid architecture**: division and orchestration between deterministic checks (lint, rules) and LLM semantic review.
- **False-positive control**: a review tool's usefulness hinges on signal-to-noise; common techniques include multi-verifier voting and reproducibility checks.
- **Capability baseline**: ReviewBench (a benchmark derived from real PR review comments) shows current models recover only ~30% of the human baseline with basic prompting; a structured review prompt lifts scores markedly — strategy matters as much as the model.

## Related Technologies

- AI coding tools such as Claude Code / Codex (built-in review capabilities)
- CI integration (review as a pipeline stage)

## Best Practices

- Start AI review with high-confidence issues (null dereferences, resource leaks), then gradually open up semantic checks — false positives burn trust.

## Recommended Resources

- [alibaba/open-code-review](https://github.com/alibaba/open-code-review)
- [Evaluating code review agents with ReviewBench](https://www.langchain.com/blog/evaluating-code-review-agents-with-reviewbench)

## Timeline

### [2026-07-31](/en/today/2026-07-31)

LangChain ships ReviewBench: 59 tasks derived from real PR review comments to evaluate code review agents, F1-scored. Basic prompting recovers only ~30% of baseline issues (see [agent-evaluation](/en/topics/agent-evaluation)).

### [2026-07-27](/en/today/2026-07-27)

alibaba/open-code-review topped GitHub Trending daily (+980 stars in a day): a hybrid deterministic-pipeline + LLM-agent review tool.
