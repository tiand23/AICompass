# AI Code Review

## Overview

Tools and architectural patterns for LLM/agent-based code review. The prevailing design is a "deterministic pipeline + LLM agent" hybrid: rule-decidable checks go through rules; semantic understanding goes to the model.

## Why It Matters

Code review is one of the most directly cost-effective links in the AI coding toolchain; major-vendor open-source implementations (e.g. alibaba/open-code-review) offer reference engineering trade-offs — when to trust rules, when to trust the model, and how to control false positives.

## Core Concepts

- **Hybrid architecture**: division and orchestration between deterministic checks (lint, rules) and LLM semantic review.
- **False-positive control**: a review tool's usefulness hinges on signal-to-noise; common techniques include multi-verifier voting and reproducibility checks.
- **Capability baseline**: ReviewBench (a benchmark derived from real PR review comments) shows current models recover only ~30% of the human baseline with basic prompting; a structured review prompt lifts scores markedly — strategy matters as much as the model.
- **Code graphs instead of full-text reads**: parse the codebase with Tree-sitter into a structured graph of functions/classes/call relationships, and query it by blast-radius during review instead of reading the whole file tree — measured at roughly 65x fewer tokens than naive full-text reads (the code-review-graph case), a key cost lever for scaling review.
- **Lightweight local storage vs graph database**: two implementation routes for a code graph — local SQLite plus MCP query tools (code-review-graph) is lightweight and easy to deploy; a dedicated graph database plus natural-language-to-Cypher queries (code-graph-rag, using Memgraph) natively supports complex multi-hop relationship queries at the cost of an extra infrastructure dependency. Choose by required query complexity.

## Related Technologies

- AI coding tools such as Claude Code / Codex (built-in review capabilities)
- CI integration (review as a pipeline stage)

## Best Practices

- Start AI review with high-confidence issues (null dereferences, resource leaks), then gradually open up semantic checks — false positives burn trust.

## Recommended Resources

- [alibaba/open-code-review](https://github.com/alibaba/open-code-review)
- [Evaluating code review agents with ReviewBench](https://www.langchain.com/blog/evaluating-code-review-agents-with-reviewbench)

## Timeline

### [2026-08-09](/en/today/2026-08-09)

code-graph-rag arrives (2.7k stars total): stores Tree-sitter parse results in a Memgraph graph database, keeping functions/classes/calls/data-flows as queryable relationships, with AI-generated Cypher for natural-language Q&A — a contrast to code-review-graph's lightweight local SQLite route, a concrete data point on architectural choice in the code-graph sub-field.

### [2026-08-07](/en/today/2026-08-07)

code-review-graph arrives (29k stars total): a Tree-sitter code graph + local SQLite + 30 MCP query tools, replacing full-text reads with blast-radius analysis — token cost for reviewing the Flask codebase drops from 143,594 to 2,196 (71x), median ~65x across six repos. The third recurrence of the same "compress into a low-dimensional structured proxy" pattern seen in document parsing's spatial grounding and video editing's transcription proxy.

### [2026-07-31](/en/today/2026-07-31)

LangChain ships ReviewBench: 59 tasks derived from real PR review comments to evaluate code review agents, F1-scored. Basic prompting recovers only ~30% of baseline issues (see [agent-evaluation](/en/topics/agent-evaluation)).

### [2026-07-27](/en/today/2026-07-27)

alibaba/open-code-review topped GitHub Trending daily (+980 stars in a day): a hybrid deterministic-pipeline + LLM-agent review tool.
