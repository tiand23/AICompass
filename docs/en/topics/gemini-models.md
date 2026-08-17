# Gemini Models

## Overview

Google DeepMind's Gemini model family. The current iteration mainline is the Flash tier (latest: 3.6 Flash), complemented by Flash-Lite (cost-optimal) and capability-gated domain-specialized variants (e.g. 3.5 Flash Cyber); available via the Gemini API / Vertex AI.

## Why It Matters

Gemini is the third mainstream choice alongside Claude / GPT. The Flash tier's "cheaper + fewer tokens" iteration strategy directly affects model selection for cost-sensitive generative AI applications; Google's release cadence (skipping 3.5 Pro to ship 3.6 Flash) also reflects the industry shift from stacking capability to improving efficiency.

## Core Concepts

- **Flash / Flash-Lite / Pro tiers**: the capability–cost ladder; Flash is Google's designated "workhorse" tier.
- **Token efficiency**: 3.6 Flash uses up to 17% fewer tokens than its predecessor — an effective price cut.
- **Frequent, incremental iteration**: the Flash tier's release cadence has clearly accelerated (3.6→3.7 Flash just 3 weeks apart), with coding/agent benchmarks jumping more than general conversational ones, and introductory pricing dropping further — "frequent iteration, agent-scenario-first, ongoing price cuts" is Flash's fixed playbook.
- **Capability-gated specialized models**: Flash Cyber is available only to governments and trusted partners — a sample of the gated-release pattern.

## Related Technologies

- [claude-models](/en/topics/claude-models) (competing model line)
- Vertex AI (enterprise hosting channel)

## Best Practices

- Include the Flash tier in benchmarks for cost-sensitive workloads; compute real cost from token efficiency, not unit price alone.

## Recommended Resources

- [Google releases three new Gemini models (TechCrunch)](https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/)
- [Google AI Blog](https://blog.google/technology/ai/)

## Timeline

### [2026-08-13](/en/today/2026-08-13)

Gemini 3.7 Flash released, just 3 weeks after 3.6 Flash: big jumps on coding/agent benchmarks (AutomationBench 17.0%→30.4%, DeepSWE v1.1 49.0%→65.3%, WebDev Arena Elo 1538→1588), introductory pricing halved from 3.6 Flash's launch price ($0.75/$3.75 per million tokens); no 3.5 Pro released.

### [2026-07-21](/en/today/2026-07-21)

Gemini 3.6 Flash (workhorse tier, up to 17% fewer tokens, cheaper than 3.5 Flash), 3.5 Flash-Lite (cheapest in class), and 3.5 Flash Cyber (security-specialized, gated to governments/trusted partners) released the same day; no 3.5 Pro.
