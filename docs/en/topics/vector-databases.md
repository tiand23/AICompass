# Vector Databases

## Overview

Vector databases: the storage and retrieval layer for RAG and agent memory. The 2026 landscape has consolidated: Pinecone (managed leader), Qdrant (Rust OSS speed leader), Weaviate (strongest hybrid search), Milvus (very large scale), Chroma (developer experience), pgvector (the Postgres-integrated default), Vespa (large-scale hybrid workloads).

## Why It Matters

The cost of the wrong choice explodes only at scale (latency, cost, recall collapse) while migration is expensive. Meanwhile "do you need a dedicated vector DB at all" became its own architectural debate — pgvector means most Postgres shops don't, at moderate scale.

## Core Concepts

- **Hybrid search is table stakes**: vector similarity + lexical BM25 combined is the 2026 production baseline; Weaviate and Qdrant have the strongest OSS implementations.
- **Choose by scale**: <1M vectors → Chroma/pgvector suffice; 1M–10M → pgvector (HNSW)/Qdrant/Weaviate/Pinecone; 10M–100M → Qdrant/Weaviate/Pinecone/Milvus; 100M+ → Milvus/Vespa/Pinecone Enterprise.
- **Performance reference**: Qdrant leads OSS speed (10–25% faster on common workloads; ~12ms p99 at 10M vectors) — but extensions like pgvectorscale can flip the result by an order of magnitude on specific workloads. Benchmark on your own load.
- **Don't go dedicated too early**: with Postgres already in place and small-to-mid data, pgvector is the default right answer.
- **Multi-vector (late-interaction) retrieval**: the ColBERT-style approach — keep one vector per token rather than compressing the whole document into one, deferring "interaction" to scoring time (the MaxSim operator: for each query token, find the document token with the highest similarity, then sum). At matched scale, multi-vector beats dense on most datasets in accuracy, but at an order-of-magnitude higher storage cost (mitigated via PLAID indexing / token pooling). Natively supported from Sentence Transformers v6.0 onward, marking this previously niche path's entry into a mainstream library.
- **Static embeddings**: pure lookup-plus-average, no transformer forward pass, ~0.05ms/line on CPU; fundamentally limited by context-blindness and semantic dilution from pooling long text. A lightweight convolutional adapter (adjusting token vectors based on context at inference time) can push accuracy to about 94% of a small dense model (MiniLM-L6) at roughly 100x the speed — a concrete middle ground for latency-critical, CPU/edge scenarios, though more complex approaches (stronger teacher models, direct contrastive training) fail to push further.

## Related Technologies

- [rag](/en/topics/rag) (the consumer)
- [document-parsing](/en/topics/document-parsing) (upstream data production)

## Best Practices

- Test recall/latency on your own data and query distribution; public benchmarks only shortlist candidates.
- Enable hybrid search from day one (pure vector recall is poor for proper nouns, code, and identifiers).

## Recommended Resources

- [Best vector databases in 2026 (Firecrawl)](https://www.firecrawl.dev/blog/best-vector-databases)
- [Qdrant vs Pinecone vs pgvector selection guide](https://www.knowsync.ai/blog/choosing-vector-database-qdrant-pinecone-pgvector-2026)

## Timeline

### [2026-08-26](/en/today/2026-08-26)

LlamaIndex experiments with static embeddings + MaxSim (minishlab/potion-base-32M): a lightweight convolutional adapter (530KB) reaches about 94% of MiniLM-L6's accuracy (0.526 vs. 0.562 NDCG) at roughly 100x the speed; switching to a stronger teacher model, direct contrastive training, and fine-tuning the full embedding table all failed to push further — a solid empirical exploration of static embeddings' accuracy ceiling (see [rag](/en/topics/rag)).

### [2026-08-18](/en/today/2026-08-18)

Sentence Transformers v6.0 adds `MultiVectorEncoder`, natively supporting ColBERT-style multi-vector/late-interaction embeddings: at matched model scale, the multi-vector version (LateOn) beats the corresponding dense version (DenseOn) on 9 of 13 NanoBEIR datasets, but encoding the same document batch costs roughly 20-40x more storage (heavily reducible via PLAID indexing/token pooling); already supports native indexing in Qdrant/Weaviate/Vespa and others (see [rag](/en/topics/rag)).

### 2026-07-28

Topic created. Status: the market consolidated from chaos into clear categories; hybrid search became the production default; the pgvector ecosystem (incl. pgvectorscale) made "no dedicated DB" the default for most small/mid scenarios.
