# Vector Databases

## 简介

向量数据库：RAG 与 Agent 记忆的存储检索层。2026 年格局已收敛：Pinecone（托管领导者）、Qdrant（Rust 开源速度领先）、Weaviate（混合检索最强）、Milvus（超大规模）、Chroma（开发体验）、pgvector（Postgres 集成默认项）、Vespa（大规模混合负载）。

## 为什么重要

向量库选错的代价在规模化时才爆发（延迟、成本、召回率塌方），而迁移成本极高。同时"要不要独立向量库"本身成了架构辩题——pgvector 让 Postgres 用户多数场景不再需要专用库。

## 核心概念

- **混合检索是标配**：向量相似度 + BM25 关键词联合，2026 年生产 RAG 的 table stakes；开源实现 Weaviate 与 Qdrant 最强。
- **按规模选型**：<100 万向量 → Chroma/pgvector 足够；100 万~1000 万 → pgvector(HNSW)/Qdrant/Weaviate/Pinecone；1000 万~1 亿 → Qdrant/Weaviate/Pinecone/Milvus；1 亿+ → Milvus/Vespa/Pinecone 企业版。
- **性能参考**：Qdrant 开源速度领先（常见负载快 10-25%，1000 万向量 p99 约 12ms）；但 pgvectorscale 这类扩展在特定负载下 QPS 反超一个数量级——benchmark 要看你自己的负载。
- **别过早上专用库**：已有 Postgres 且数据量中小，pgvector 是默认正确答案。
- **多向量（后期交互）检索**：ColBERT 式路线——每个 token 保留一个向量而非把整份文档压成一个向量，交互推迟到打分阶段（MaxSim 算子：每个查询 token 找文档里相似度最高的 token 再求和）；同等规模下多向量在多数数据集上精度优于稠密向量，但存储成本高一个数量级（可用 PLAID 索引/token 池化压缩）。Sentence Transformers v6.0 起原生支持，标志着这条此前偏小众的路线进入主流库。
- **静态 Embedding**：纯查表+平均，无需 Transformer 前向计算，CPU 上约 0.05 毫秒/行；根本局限是不感知上下文、长文本池化稀释语义。轻量卷积适配器（推理时按上下文微调 token 向量）可把精度做到稠密小模型（MiniLM-L6）的约 94%，速度却快约 100 倍——延迟极度敏感、CPU/边缘部署场景的一个具体折中点，但换更强教师模型、直接对比训练等更复杂手段均未进一步突破。

## 相关技术

- [rag](/topics/rag)（消费方）
- [document-parsing](/topics/document-parsing)（上游数据生产）

## 最佳实践

- 用自己的数据和查询分布做召回率/延迟测试，公开 benchmark 只能圈初选名单。
- 一开始就启用混合检索（纯向量对专有名词、代码、编号类查询召回很差）。

## 推荐学习资料

- [2026 向量数据库完整对比（Firecrawl）](https://www.firecrawl.dev/blog/best-vector-databases)
- [Qdrant vs Pinecone vs pgvector 选型](https://www.knowsync.ai/blog/choosing-vector-database-qdrant-pinecone-pgvector-2026)

## Timeline

### [2026-08-26](/today/2026-08-26)

LlamaIndex 实验静态 Embedding + MaxSim（minishlab/potion-base-32M）：轻量卷积适配器（530KB）把精度做到 MiniLM-L6 的约 94%（0.526 vs 0.562 NDCG），速度快约 100 倍；换更强教师模型、直接对比训练、微调整个 embedding 表等其余尝试均未进一步突破——静态 Embedding 精度上限的一次扎实实证探索（详见 [rag](/topics/rag)）。

### [2026-08-18](/today/2026-08-18)

Sentence Transformers v6.0 新增 `MultiVectorEncoder`，原生支持 ColBERT 式多向量/后期交互 Embedding：NanoBEIR 基准上同规模多向量模型（LateOn）13 个数据集中 9 个跑赢稠密版本（DenseOn），但编码同批文档存储成本高约 20-40 倍（可经 PLAID 索引/token 池化大幅压缩）；已支持 Qdrant/Weaviate/Vespa 等原生索引（详见 [rag](/topics/rag)）。

### 2026-07-28

建档。现状：市场从混战收敛为清晰类别；混合检索成为生产标配；pgvector 生态（含 pgvectorscale）让"不上专用库"成为多数中小场景的默认选择。
