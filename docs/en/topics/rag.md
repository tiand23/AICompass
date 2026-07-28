# RAG

## Overview

RAG (Retrieval-Augmented Generation): having an LLM retrieve external knowledge (document stores, vector databases, databases, graphs) before/while generating, anchoring answers in facts. The core architecture for knowledge-base applications and the most common pattern for enterprise generative AI adoption.

## Why It Matters

Model parameters can't hold private knowledge or keep up with knowledge updates — RAG solves "what to know" with retrieval, letting the model focus on "how to say it", while providing traceability (cited sources). For enterprises it's the standard way to connect internal documents, policies and business data to LLMs — far cheaper than fine-tuning and instantly updatable.

## Core Concepts

- **The classic pipeline (2023–2025)**: embed the query → top-k retrieval → stuff into context → generate. Simple but rigid: bad recall sinks everything.
- **Agentic RAG (the 2026 mainstream)**: retrieval decisions embedded in the model's reasoning flow — the model autonomously decides when to retrieve, what to retrieve, and whether results suffice; plan → retrieve → critique → rewrite → reflect loops, with specialized agents handling retrieval and validation in parallel.
- **Frontier directions**: long-document memory, adaptive retrieval (skip retrieval for easy questions), multimodal grounding, graph reasoning (GraphRAG), retrieval security.
- **Enterprise prerequisite**: access control, metadata and context governance must precede retrieval — enterprise RAG without governance fails.

## Related Technologies

- Vector databases, Knowledge Graphs (future topics in this slot)
- [deep-agents](/en/topics/deep-agents) (Agentic RAG shares orchestration patterns with long-horizon agents)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (RAG is the knowledge access layer of enterprise agents)

## Best Practices

- Design new projects agentic-first (let the model decide when to retrieve), but start with the simplest pipeline to validate data quality, then add loops.
- Governance before retrieval: don't connect sensitive stores to RAG before permissions and metadata are in place.
- Evaluation-driven: build a retrieval eval set with ground truth; run it on every pipeline change instead of tuning by feel.

## Recommended Resources

- [Agentic Retrieval-Augmented Generation: A Survey (arXiv 2501.09136)](https://arxiv.org/abs/2501.09136)
- [SoK: Agentic RAG — Taxonomy, Architectures, Evaluation (arXiv 2603.07379)](https://arxiv.org/abs/2603.07379)
- [20 Advanced RAG Types (Turing Post)](https://www.turingpost.com/p/ragtypes)

## Timeline

(Auto-filled by daily updates; baseline below)

### 2026-07-28

Topic created. Current state of the ecosystem: Agentic RAG is the dominant paradigm — retrieval has moved from fixed pipelines to autonomous decisions inside the model's reasoning, with multi-agent retrieval/validation division of labor; frontier directions are long-document memory, adaptive retrieval, multimodal grounding and GraphRAG; the enterprise consensus is "governance precedes retrieval".
