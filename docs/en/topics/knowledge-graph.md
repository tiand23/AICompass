# Knowledge Graph (AI Applications)

## Overview

Knowledge graphs in AI systems: modeling entities, relationships, and sometimes decisions themselves as typed graph structures, queried via graph traversal and graph reasoning rather than embedding similarity alone. Related to but broader than GraphRAG (graph-assisted retrieval) covered under [rag](/en/topics/rag) — this topic covers knowledge graphs as an independent infrastructure layer (deterministic reasoning, decision provenance, audit). Representative project: semantica.

## Why It Matters

Vector retrieval answers "what's semantically similar," but not "how was this conclusion reached, can I find precedent, can I prove it to an auditor." In regulated industries like finance, healthcare and government, an agent's black-box decision-making is itself a compliance risk. A knowledge-graph layer makes relationships and reasoning paths explicit, queryable and exportable — a practical alternative route to "AI decision explainability" beyond "research a more interpretable model": using an external deterministic structural layer instead of waiting for the model itself to become interpretable.

## Core Concepts

- **Graph queries vs vector retrieval**: graph traversal answers "what relationship exists between A and B and how did it arise"; vector retrieval answers "what content is semantically close to this sentence" — complementary, with graph queries winning for complex relational questions.
- **Decisions as first-class objects**: beyond modeling "knowledge" (entities/relationships), model each decision an agent makes as a graph node too, with confidence, reasoning and a causal chain — traceable, searchable by precedent, exportable to standard formats like W3C PROV-O for regulators.
- **Deterministic reasoning engines**: classical symbolic reasoning methods — forward chaining, Rete networks, Datalog, SPARQL — producing explainable inference paths, not dependent on an LLM's "black box" inference.
- **Multi-source ingestion and conflict detection**: enterprise data is scattered across Databricks/Snowflake/databases/files/APIs/streams; ingestion needs entity resolution and deduplication, and cross-source contradictory facts must be flagged before they're written in.
- **Pluggable storage**: property graphs (Neo4j/FalkorDB), RDF triple stores (Blazegraph/Apache Jena), and vector stores (FAISS/Qdrant/Pinecone/Weaviate) coexist — pick the backend that fits the query type.
- **Temporal modeling**: a bi-temporal graph distinguishing "when a fact was true" (valid time) from "when the system recorded it" (recorded time), supporting point-in-time historical snapshot queries.

## Related Technologies

- [rag](/en/topics/rag) (GraphRAG is the graph-assisted-retrieval sub-case)
- [vector-databases](/en/topics/vector-databases) (vector storage and graph storage commonly coexist and complement each other)
- [agent-memory](/en/topics/agent-memory) (the CodeGraph/knowledge assets in team-level memory overlap this tech stack)
- [mcp](/en/topics/mcp) (graph query capability is typically exposed to agent clients via an MCP server)
- [agentic-safety](/en/topics/agentic-safety) (decision provenance is infrastructure for agent behavioral audit)

## Best Practices

- Not every scenario needs a graph — a vector store suffices for pure semantic retrieval; graph queries only pay off for questions about relationship chains, blast radius, or decision precedent.
- For agent systems in regulated industries, design record_decision-style calls at key decision points as compliance infrastructure from day one, not a bolt-on afterthought.
- When ingesting multi-source data, prioritize conflict detection and disambiguation strategy — a graph's value depends on data quality; a dirty graph is more dangerous than no graph.

## Recommended Resources

- [semantica-agi/semantica](https://github.com/semantica-agi/semantica)

## Timeline

### [2026-08-10](/en/today/2026-08-10)

Semantica arrives (3.7k stars total): deterministic knowledge-graph infrastructure that models decisions themselves as traceable, precedent-searchable, compliance-exportable first-class graph objects; on a 118,000-node production graph, cache-optimized search sped up 6,000x. Targeting regulated industries (finance/healthcare/government), an external-structural-layer answer to AI decision explainability. The founding entry for the Knowledge Graph / GraphRAG niche.
