# Voice Agents

## Overview

Voice agents: realtime conversational agents with voice as the interface — the technical form behind voice customer service, voice assistants, and interview/training dialogue. Two routes coexist: **cascaded** (STT → LLM → TTS, each stage independently selectable) and **end-to-end realtime speech models** (speech-to-speech, e.g. OpenAI's GPT-Live — listening while speaking). Representative frameworks: livekit/agents, Pipecat.

## Why It Matters

Voice is the natural interface for customer service, interviews, automotive and accessibility scenarios, and the main channel through which agents penetrate enterprise CX. The essential difference from text agents is **realtime-ness**: latency, interruptions and turn-taking directly determine whether it "feels human" — an entire engineering and evaluation layer that doesn't exist for text agents. With realtime voice models (the GPT-Live class) in commercial use in 2026, voice agents moved from "can converse" to "competing on experience".

## Core Concepts

- **Cascaded vs end-to-end**: cascaded (STT→LLM→TTS) is flexible, controllable, and vendor-swappable per stage, but latencies stack and paralinguistic information is lost; end-to-end speech-to-speech has low latency and preserves tone and pauses, but controllability and tool-calling maturity still lag.
- **Latency budget**: natural human response gaps run ~200-800ms; a cascaded pipeline has to squeeze latency across streaming STT, LLM first-token, and streaming TTS.
- **Barge-in and turn detection**: users interrupt at will — the agent must stop cleanly and pick the thread back up; VAD/turn-detection accuracy directly determines conversational flow.
- **Three-axis evaluation** (LangChain, 2026-08): execution (tool-call/process correctness), outcomes (business attainment), experience (latency/interruptions/naturalness) — the third axis is voice-specific.
- **Access channels**: WebRTC (browser/app) and telephony (SIP/PSTN) are the two mainstream channels; the framework layer (livekit et al.) papers over the difference.

## Related Technologies

- [agent-evaluation](/en/topics/agent-evaluation) (the three-axis evaluation methodology)
- [openai-models](/en/topics/openai-models) (the GPT-Live realtime voice model line)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (CX support is voice agents' biggest landing zone)
- [content-provenance](/en/topics/content-provenance) (voice-cloning abuse and audio watermarking)

## Best Practices

- Pick the route by the scenario's controllability requirement: process-heavy, compliance-heavy support favors cascaded (each stage auditable with fallbacks); experience-first assistants can go end-to-end.
- Don't evaluate dialogue quality alone — latency distribution (P50/P95) and barge-in recovery rate belong in acceptance criteria.

## Recommended Resources

- [How to evaluate voice agents (LangChain)](https://www.langchain.com/blog/how-to-evaluate-voice-agents-execution-outcomes-and-experience)
- [livekit/agents](https://github.com/livekit/agents)

## Timeline

### [2026-08-04](/en/today/2026-08-04)

LangChain publishes the three-axis voice-agent evaluation methodology (execution/outcomes/experience) — with realtime voice models in commercial use, the voice-specific "experience axis" starts getting methodologized. livekit/agents hits GitHub Trending (+432/day) the same period; the voice-agent framework layer heats up in step.
