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

### [2026-10-13](/en/today/2026-10-13)

Gemini 4 Argon reaches GA for developers and enterprises (previewed 09-30): a shared 1.05M-token context window across input/thinking/output, with developer API output defaulting to 65,536 tokens synchronously; scores 77.9% on DeepSWE v1.1 and leads 13 of 19 rows in Google's own comparison table against GPT-6 Astra and Claude; priced at $2/$10 per million tokens (through November 30, rising to $4/$20 from December 1), available via the Gemini API paid tier, AI Studio, the Gemini platform, the Gemini app, and AI Mode in Search — following GPT-6 Astra (09-03) and Claude Opus/Sonnet 5.5 (09-22/09-28), the third major vendor to complete a flagship refresh within a month and a half, this time with a self-reported benchmark table showing it outscoring both rivals row by row.

### [2026-08-17](/en/today/2026-08-17)

Google formally shuts down the Imagen 4 generation endpoints on the Gemini API side (standard/fast/ultra), pointing to Gemini 3.1 Flash Image; already deprecated on Vertex AI in March. The `generate_images()` method disappears entirely — not a seamless replacement; callers must rewrite against the Gemini-native image API (see [diffusion-models](/en/topics/diffusion-models)).

### [2026-08-13](/en/today/2026-08-13)

Gemini 3.7 Flash released, just 3 weeks after 3.6 Flash: big jumps on coding/agent benchmarks (AutomationBench 17.0%→30.4%, DeepSWE v1.1 49.0%→65.3%, WebDev Arena Elo 1538→1588), introductory pricing halved from 3.6 Flash's launch price ($0.75/$3.75 per million tokens); no 3.5 Pro released.

### [2026-07-21](/en/today/2026-07-21)

Gemini 3.6 Flash (workhorse tier, up to 17% fewer tokens, cheaper than 3.5 Flash), 3.5 Flash-Lite (cheapest in class), and 3.5 Flash Cyber (security-specialized, gated to governments/trusted partners) released the same day; no 3.5 Pro.
