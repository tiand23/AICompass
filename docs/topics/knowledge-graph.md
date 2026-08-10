# Knowledge Graph（企业 AI 场景）

## 简介

知识图谱在 AI 系统里的应用：把实体、关系、有时还有决策本身建成带类型的图结构，供 LLM/Agent 按图遍历和图推理查询，而非仅靠向量相似度匹配。与 [rag](/topics/rag) 里的 GraphRAG（图谱辅助检索）相关但更宽——本 Topic 覆盖图谱作为独立基础设施层（确定性推理、决策溯源、审计）的用法，代表项目：semantica。

## 为什么重要

向量检索解决"语义相近"，但解决不了"这个结论是怎么推出来的、能不能查先例、能不能对审计员证明"。在金融、医疗、政府等受监管行业，Agent 的黑箱决策本身就是合规风险。知识图谱层把关系和推理路径变成显式、可查询、可导出的结构，是"AI 决策可解释性"問題除了"研究更好的模型"之外的另一条现实路径——用外部确定性结构层，而不是等模型本身变得可解释。

## 核心概念

- **图查询 vs 向量检索**：图遍历回答"A 和 B 之间有什么关系、这条关系链怎么来的"，向量检索回答"哪些内容和这句话语义相近"——两者互补，复杂关系型问题图查询更准。
- **决策作为一等对象**：不止建模"知识"（实体/关系），把"Agent 做出的每个决策"也建成图节点，带 confidence、reasoning、因果链——可追溯、可按先例检索、可导出成 W3C PROV-O 等标准格式给监管方。
- **确定性推理引擎**：前向链、Rete 网络、Datalog、SPARQL 等经典符号推理方法，输出可解释的推理路径，不依赖 LLM 的"黑箱"推断。
- **多源摄取与冲突检测**：企业数据分散在 Databricks/Snowflake/数据库/文件/API/流里，摄取时要做实体消歧、去重，并在写入前检测跨源矛盾事实。
- **存储可插拔**：属性图（Neo4j/FalkorDB）、RDF 三元组存储（Blazegraph/Apache Jena）、向量库（FAISS/Qdrant/Pinecone/Weaviate）并存，按查询类型选合适的后端。
- **时态建模**：区分"事实何时为真"（valid time）与"系统何时记录该事实"（recorded time）的双时态图，支持任意历史时间点快照查询。

## 相关技术

- [rag](/topics/rag)（GraphRAG 是图谱辅助检索这一子场景）
- [vector-databases](/topics/vector-databases)（向量存储与图存储常并存互补）
- [agent-memory](/topics/agent-memory)（团队级记忆资产里的 CodeGraph/知识资产与本主题技术栈重叠）
- [mcp](/topics/mcp)（图谱查询能力通常经 MCP server 暴露给 Agent 客户端）
- [agentic-safety](/topics/agentic-safety)（决策溯源是 Agent 行为审计的基础设施）

## 最佳实践

- 不是所有场景都需要图——单纯语义检索用向量库足够；只有涉及"关系链""影响范围""决策先例"这类问题时图查询才划算。
- 受监管行业的 Agent 系统，把关键决策点的 record_decision 类调用当成合规基础设施来设计，而非事后补丁。
- 摄取多源数据时优先做好冲突检测和消歧策略，图谱的价值取决于数据质量，脏图比没图更危险。

## 推荐学习资料

- [semantica-agi/semantica](https://github.com/semantica-agi/semantica)

## Timeline

### [2026-08-10](/today/2026-08-10)

Semantica 登场（累计 3.7k star）：确定性知识图谱基础设施，把"决策"本身建成可追溯、可查先例、可导出合规格式的一等图对象；118,000 节点生产图谱上搜索经缓存优化提速 6000 倍。面向金融/医疗/政府等受监管行业，是"AI 决策可解释性"问题的一条外部结构层解法。Knowledge Graph / GraphRAG 生态位建档起点。
