# Agent Memory

## Overview

Agent memory: the infrastructure layer that lets agents retain and reuse information across sessions and tasks — from in-session context management, to long-term memory (user preferences, decision history), to team-level shared memory assets. Representative projects/products: Mem0, Zep, LangMem (LangChain), and TencentDB-Agent-Memory, which builds memory into a team asset hub.

## Why It Matters

However large the context window, it is only "working memory" — an agent serving a user or team long-term needs a memory layer independent of any single session. Memory quality directly determines an agent's "proficiency": an assistant that forgets preferences starts from zero every time; an agent that forgets decision history repeats mistakes. Team-level memory (like Tencent's four-asset architecture) goes further, turning individual experience into organizational assets — a key piece of enterprise agent adoption.

## Core Concepts

- **Layered memory architecture**: progressive distillation from raw conversations (L0) up to summaries, facts, personas/preferences (L3) — a layered trade-off between storage granularity and retrieval cost (TencentDB-Agent-Memory's Chat Memory layers are a typical implementation).
- **Memory asset types**: beyond conversation memory — skills (executable procedures), knowledge (wiki/documents) and code graphs (symbols and call relationships) can all be turned into assets, each with its own extraction and retrieval method.
- **Write policy**: what deserves remembering (explicit instruction vs automatic extraction), when to update, when to forget/expire — managing memory signal-to-noise is the hard engineering problem.
- **Permissions and scope**: team-level memory needs RBAC (private/team/restricted) and per-agent binding (loadouts) rather than global injection — memory overreach is a new security surface.
- **Relation to RAG**: heavily overlapping stacks (vector retrieval, structured storage); the difference is data source and lifecycle — RAG retrieves a static knowledge base, memory grows continuously from interactions.
- **Delivery strategy for experience memory**: when distilling "lessons" from execution trajectories, don't compress into summaries (that loses information) — keep itemized detail tracked by support count; but delivery at retrieval time should be selective, not a full dump — ALTK-Evolve's "small high-support core + task-relevant picks" cuts 60-85% of tokens versus ACE's "inject the full playbook every step," with accuracy holding or improving (especially on weaker models/harder tasks, where an overlong context hurts judgment).
- **Cross-vendor portability of memory**: prior memory discussion mostly focused on "how does the same agent/same vendor remember across sessions" — ai-memory extends the scope to "can memory travel when you switch to a different vendor's agent": rather than storing raw conversation logs, it sanitizes lifecycle events and compiles them into a searchable Markdown wiki, implementing separate hook adapters for different agents (Claude Code, Codex, Cursor, etc.) that all write into the same memory service, which is what makes cross-vendor handoff possible; it also ships a "zero-LLM mode" that decouples having a memory system from being able to afford a large model.
- **Delivery should be calibrated by model tier, not one-size-fits-all**: an IBM Research follow-up study (8 models, 117B-745B parameters, 585 AppWorld tasks) found "more memory is always better" doesn't hold — capable, headroom-rich models (DeepSeek-V3.2) benefit most from full-guideline injection; weaker/smaller models (gpt-oss-120b) instead do better with curated retrieval (higher accuracy gains, fewer tokens spent); already-saturated models (GLM-5) show no gain from either delivery mode. Memory optimization is fundamentally about "calibrating the dose," not maximizing information volume — delivery strategy needs to be tuned per target-model capability tier.
- **A memory system is only as good as its ability to forget**: as code or knowledge keeps evolving, previously accurate memory goes stale, but traditional memory systems lack a mechanism to detect when the supporting evidence has changed, causing memory drift and poisoning; OpenWiki represents every statement as a "claim + versioned evidence reference" — when the underlying source changes, the dependent claim is auto-flagged as "stale" rather than deleted or kept as-is, and re-verified on the next update. Replacing "trust it all or delete it all" with "versioned evidence + stale flagging" cut the stale-claim rate from 3.5% to 0.5% and hallucinated claims from 0.7% to 0% in testing.

## Related Technologies

- [vector-databases](/en/topics/vector-databases) (memory's storage/retrieval layer)
- [rag](/en/topics/rag) (same stack, different source: static knowledge vs interaction-grown)
- [agent-skills](/en/topics/agent-skills) (skills can be a product of memory distillation)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (team memory is part of enterprise agent operations)
- [model-efficiency](/en/topics/model-efficiency) (selective memory delivery is fundamentally a token-efficiency optimization)

## Best Practices

- Decide "what to remember" before picking a solution: preference-class memory is small and structured; experience-class memory is large and messy and needs an extraction pipeline. Don't dump raw conversation logs into a vector store and call it memory.
- Gate memory writes for signal-to-noise (review, confidence thresholds) — dirty memory is worse than no memory.

## Recommended Resources

- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)
- [Mem0](https://github.com/mem0ai/mem0)

## Timeline

### [2026-08-31](/en/today/2026-08-31)

Microsoft Foundry Agent Service publishes an Azure Cosmos DB long-term memory reference implementation: a sample `CosmosMemoryContextProvider` combines vector similarity (semantic relevance), full-text search (lexical matching), and structured metadata (user/memory type). Memories persist against a stable user ID rather than a session ID — a new chat carries no prior transcript but still recalls that user's stated preferences — while different users' memories stay isolated even within the same database, and it supports factual, procedural, and episodic memory types. It re-implements, using the cloud vendor's own database plus an official Microsoft Agent Framework sample, core design patterns previously scattered across dedicated memory products like Mem0/Zep/LangMem — teams already committed to Azure/Cosmos DB now have an official reference path that doesn't require adopting a separate memory product (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

### [2026-08-25](/en/today/2026-08-25)

LangChain shares OpenWiki's self-correcting memory design: each claim carries a versioned evidence reference; when code changes, dependent claims get flagged "stale" rather than deleted, then re-verified automatically on the next update. Testing across 2,000 claims cut the stale rate from 3.5% to 0.5% and hallucination rate from 0.7% to 0%, with cost scaling with code changes rather than accumulated claim volume — filling in the "what happens when what you remembered goes stale" gap in memory signal-to-noise management.

### [2026-08-19](/en/today/2026-08-19) (backfilled)

Claude Managed Agents' self-hosted sandbox sessions gain memory-store attachment: an SDK worker downloads the attached store into the sandbox at session start and syncs the agent's changes back — pushing agent memory down from an API-level capability into the hosted execution environment itself, binding memory read/write directly to the sandbox lifecycle.

### [2026-08-18](/en/today/2026-08-18)

IBM Research publishes an ALTK-Evolve follow-up: 8 models (117B-745B parameters) on 585 AppWorld tasks show "how much memory to give" varies by model tier — a capable model (DeepSeek-V3.2) gains 9.5 percentage points in task completion with full-guideline injection; a weaker model (gpt-oss-120b) gains 16.1 points with curated retrieval while spending only 5% more tokens; a saturated model (GLM-5) gains 0 from either mode. Memory optimization should be understood as "calibrating the dose" rather than "maximizing information volume."

ai-memory open-sources: a long-term memory layer for coding agents, built around seamless cross-vendor handoff (quit Claude Code mid-task, switch to Codex in the same directory, continue without re-explaining the architecture); sanitizes session lifecycle events into a Markdown wiki, with separate hook adapters for Claude Code/Codex/Cursor and others sharing the same memory service; ships a zero-LLM mode (see [coding-agents](/en/topics/coding-agents)).

### [2026-08-11](/en/today/2026-08-11)

IBM Research open-sources ALTK-Evolve: shares its core premise with ACE (Agentic Context Engineering) — both distill "lessons" from execution trajectories and keep itemized detail tracked by support count rather than compressing into summaries — but differ in delivery: ACE injects the full playbook every step, ALTK-Evolve grounds on a small core of high-support guidelines plus task-relevant picks. On the AppWorld benchmark, DeepSeek-V3.2 hit higher accuracy (89.3% vs. 80.4%) at roughly 40% of ACE's token cost; on the weaker gpt-oss-120b, accuracy tied while using roughly one-seventh of ACE's tokens.

### [2026-08-03](/en/today/2026-08-03)

Tencent Cloud's TencentDB-Agent-Memory hits Trending (+602/day, 11k total): a team-level memory hub — four asset types (layered chat memory/skills/wiki/code graph) + RBAC + per-agent loadouts. Memory upgrades from session context to a team asset layer.
