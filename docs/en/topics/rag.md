# RAG

## Overview

RAG (Retrieval-Augmented Generation): having an LLM retrieve external knowledge (document stores, vector databases, databases, graphs) before/while generating, anchoring answers in facts. The core architecture for knowledge-base applications and the most common pattern for enterprise generative AI adoption.

## Why It Matters

Model parameters can't hold private knowledge or keep up with knowledge updates — RAG solves "what to know" with retrieval, letting the model focus on "how to say it", while providing traceability (cited sources). For enterprises it's the standard way to connect internal documents, policies and business data to LLMs — far cheaper than fine-tuning and instantly updatable.

## Core Concepts

- **The classic pipeline (2023–2025)**: embed the query → top-k retrieval → stuff into context → generate. Simple but rigid: bad recall sinks everything.
- **Agentic RAG (the 2026 mainstream)**: retrieval decisions embedded in the model's reasoning flow — the model autonomously decides when to retrieve, what to retrieve, and whether results suffice; plan → retrieve → critique → rewrite → reflect loops, with specialized agents handling retrieval and validation in parallel.
- **Frontier directions**: long-document memory, adaptive retrieval (skip retrieval for easy questions), multimodal grounding, graph reasoning (GraphRAG), retrieval security. Graphs as an independent infrastructure layer (deterministic reasoning, decision provenance) are covered under [knowledge-graph](/en/topics/knowledge-graph).
- **Enterprise prerequisite**: access control, metadata and context governance must precede retrieval — enterprise RAG without governance fails.

## Related Technologies

- [vector-databases](/en/topics/vector-databases) (the storage/retrieval layer)
- [document-parsing](/en/topics/document-parsing) (upstream document structuring)
- [deep-agents](/en/topics/deep-agents) (Agentic RAG shares orchestration patterns with long-horizon agents)
- [enterprise-ai-agents](/en/topics/enterprise-ai-agents) (RAG is the knowledge access layer of enterprise agents)
- [knowledge-graph](/en/topics/knowledge-graph) (graphs as a deterministic reasoning/decision-provenance infrastructure layer, broader than GraphRAG)

## Best Practices

- Design new projects agentic-first (let the model decide when to retrieve), but start with the simplest pipeline to validate data quality, then add loops.
- Governance before retrieval: don't connect sensitive stores to RAG before permissions and metadata are in place.
- Evaluation-driven: build a retrieval eval set with ground truth; run it on every pipeline change instead of tuning by feel.

## Recommended Resources

- [Agentic Retrieval-Augmented Generation: A Survey (arXiv 2501.09136)](https://arxiv.org/abs/2501.09136)
- [SoK: Agentic RAG — Taxonomy, Architectures, Evaluation (arXiv 2603.07379)](https://arxiv.org/abs/2603.07379)
- [20 Advanced RAG Types (Turing Post)](https://www.turingpost.com/p/ragtypes)

## Timeline

### [2026-10-06](/en/today/2026-10-06)

Google launches EmbeddingGemma 2: a 740M-parameter open multimodal on-device embedding model (Apache 2.0, built on Gemma 4) mapping text/code, image, and audio into one shared vector space via a 270M text/code backbone plus a 170M vision encoder and a 300M audio encoder; the quantized full version uses roughly 567MB of active RAM on a Pixel 11 Pro (191MB text-only), an 8,192-token context window (4x the first EmbeddingGemma), and leads sub-1B multimodal embedders on benchmarks like MTEB Code and MAEB — packing privacy-first, offline-capable multimodal semantic search/RAG into a footprint consumer hardware can afford, a concrete instance of "a small on-device model covering a vertical capability" applied to the embedding layer at the core of RAG.

(Auto-filled by daily updates; baseline below)

### 2026-07-28

Topic created. Current state of the ecosystem: Agentic RAG is the dominant paradigm — retrieval has moved from fixed pipelines to autonomous decisions inside the model's reasoning, with multi-agent retrieval/validation division of labor; frontier directions are long-document memory, adaptive retrieval, multimodal grounding and GraphRAG; the enterprise consensus is "governance precedes retrieval".
