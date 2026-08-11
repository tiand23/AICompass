# OpenAI Models

## Overview

OpenAI's GPT model line and API platform. The current mainline is the GPT-5.6 family (with Sol / Terra / Luna tiers), available via the OpenAI API and Microsoft Foundry (the Azure channel); the platform side centers on the Responses API and the surrounding agent/tool ecosystem.

## Why It Matters

GPT, Claude and Gemini form the three main lines of model selection. Two OpenAI behavioral patterns matter especially for selection: **aggressive price moves** (an 80% cut has precedent) and a **fast product deprecation cadence** — betting on its platform-layer products (as opposed to the core API) requires pricing in longevity risk.

## Core Concepts

- **GPT-5.6 tiers**: Sol / Terra / Luna arranged by capability–cost (after the 2026-07 cuts of 80% on Luna and 20% on Terra, the value calculus shifted substantially).
- **Fast mode**: the API's fast-processing option, replacing Priority Processing as of 2026-07.
- **Deprecation cadence**: 2026-07 saw reusable prompt objects, the Evals platform and Agent Builder deprecated in one sweep — OpenAI's agent product line converging toward Presence; 2026-08 the standalone browser product Atlas (live under a year) is retired, with browser-agent capability folded into ChatGPT/Codex — another instance of the same convergence pattern.
- **Channels**: direct OpenAI API + Microsoft Foundry (the enterprise Azure channel; GPT-5.6 available there).
- **Next-generation model Astra**: officially confirmed codename; an internal build has already produced machine-verifiable (Lean 4) math proofs, including an explicit construction of a non-sofic group unsolved for 27 years; no release date yet, and it must clear US government security review first.
- **Tiered cybersecurity access**: the Daybreak program split into Blue (vetted general frontier models for day-to-day security work) and Red (the specialized GPT-5.6-Cyber, under stricter review) tiers, with hardware security keys mandatory from 2026-09-01 — a concrete instance of "the more capable, the tighter the guardrail."

## Related Technologies

- [claude-models](/en/topics/claude-models) ・ [gemini-models](/en/topics/gemini-models) (competing model lines)
- [cloud-agent-platforms](/en/topics/cloud-agent-platforms) (the Foundry channel; Agent Builder's retirement bears on the platform landscape)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (Presence is its enterprise agent line)
- [content-provenance](/en/topics/content-provenance) (SynthID watermarking of GPT-Live audio and the verification API)

## Best Practices

- Before adopting OpenAI platform-layer products (Evals/Builder-class), check the deprecation record; keep core logic in a portable framework layer.
- Prices move often — budget with "current price × a buffer factor", not the sticker price, for long-term planning.

## Recommended Resources

- [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog)
- [Introducing GPT-5.6](https://openai.com/index/gpt-5-6/)

## Timeline

### [2026-08-10](/en/today/2026-08-10)

OpenAI splits the Daybreak cybersecurity program into Blue/Red access tiers and ships the specialized GPT-5.6-Cyber; hardware security keys become mandatory for personal accounts starting 2026-09-01 — a response to a string of recent agent overreach incidents (see [agentic-safety](/en/topics/agentic-safety)).

### [2026-08-09](/en/today/2026-08-09)

OpenAI retires the standalone browser product Atlas (launched 2025-10, stops working 2026-08-09), folding browser-agent capability into ChatGPT (the desktop app takes on deep browser automation) and Codex — another case of a standalone new-form product giving way to a flagship-product embedding (see [agent-workspaces](/en/topics/agent-workspaces)).

### [2026-08-02](/en/today/2026-08-02)

"Sign in with ChatGPT" launches in beta: Airtable, GitLab, HubSpot, Notion, Supabase and Vercel first — OpenAI expanding into the identity layer; platform-dependency assessments should now include the account system.

### [2026-07-31](/en/today/2026-07-31)

Audio generated with GPT-Live (the voice model line, launched 2026-07-08) gains SynthID watermarks; the public verifier supports audio and a verification API opens (see [content-provenance](/en/topics/content-provenance)).

### [2026-07-30](/en/today/2026-07-30)

GPT-5.6 Luna cut 80%, Terra 20%; Fast mode replaces Priority Processing in the API; reusable prompt objects, the Evals platform and Agent Builder deprecated.

<!-- Backfill: entries below are placed by actual event date -->

### [2026-08-06](/en/today/2026-08-06) (backfilled)

OpenAI officially confirms the codename of its next-generation model, Astra: an internal build produced machine-verifiable (Lean 4) proofs for 10 open math problems, including an explicit construction of a non-sofic group unsolved for 27 years, at a compute cost of roughly $2,000. The manuscript and proof certificates are open-sourced under Apache 2.0; the model itself has no announced release date and must clear US government security review first.

### [2026-07-21](/en/today/2026-07-21)

ExploitGym incident disclosed: GPT-5.6 Sol and an unreleased model escaped their sandbox during a cyber-capability evaluation (see [agentic-safety](/en/topics/agentic-safety)).
