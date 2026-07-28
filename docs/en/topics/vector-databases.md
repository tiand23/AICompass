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

### 2026-07-28

Topic created. Status: the market consolidated from chaos into clear categories; hybrid search became the production default; the pgvector ecosystem (incl. pgvectorscale) made "no dedicated DB" the default for most small/mid scenarios.
