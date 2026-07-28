# AI Code Review

## Overview

Tools and architectural patterns for LLM/agent-based code review. The prevailing design is a "deterministic pipeline + LLM agent" hybrid: rule-decidable checks go through rules; semantic understanding goes to the model.

## Why It Matters

Code review is one of the most directly cost-effective links in the AI coding toolchain; major-vendor open-source implementations (e.g. alibaba/open-code-review) offer reference engineering trade-offs — when to trust rules, when to trust the model, and how to control false positives.

## Core Concepts

- **Hybrid architecture**: division and orchestration between deterministic checks (lint, rules) and LLM semantic review.
- **False-positive control**: a review tool's usefulness hinges on signal-to-noise; common techniques include multi-verifier voting and reproducibility checks.

## Related Technologies

- AI coding tools such as Claude Code / Codex (built-in review capabilities)
- CI integration (review as a pipeline stage)

## Best Practices

- Start AI review with high-confidence issues (null dereferences, resource leaks), then gradually open up semantic checks — false positives burn trust.

## Recommended Resources

- [alibaba/open-code-review](https://github.com/alibaba/open-code-review)

## Timeline

### [2026-07-27](/en/today/2026-07-27)

alibaba/open-code-review topped GitHub Trending daily (+980 stars in a day): a hybrid deterministic-pipeline + LLM-agent review tool.
