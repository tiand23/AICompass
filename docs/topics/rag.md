# RAG

## 简介

RAG（Retrieval-Augmented Generation，检索增强生成）：让 LLM 在生成前/生成中检索外部知识（文档库、向量库、数据库、图谱），以事实为锚回答问题。是知识库类应用的核心架构，也是企业落地生成式 AI 最普遍的模式。

## 为什么重要

模型参数装不下私有知识、也追不上知识更新——RAG 用检索解决"知道什么"，让模型专注"怎么说"，同时提供可溯源性（引用出处）。对企业，它是把内部文档、制度、业务数据接入 LLM 的标准做法，成本远低于微调且可即时更新。

## 核心概念

- **经典管线（2023–2025）**：query 向量化 → top-k 召回 → 塞进上下文生成。简单但僵硬：召回差则全盘皆输。
- **Agentic RAG（2026 主流）**：检索决策嵌入模型推理流程——模型自主决定何时检索、检索什么、结果够不够，规划→检索→批判→改写→反思成环，多 Agent 并行分工（检索/验证互相把关）。
- **进阶方向**：长文档记忆、自适应检索（简单问题不检索）、多模态 grounding、图谱推理（GraphRAG）、检索安全。
- **企业前提**：权限控制、元数据、上下文治理必须先于检索——没有治理的企业 RAG 必然失败。

## 相关技术

- 向量数据库、Knowledge Graph（本格子后续 Topic）
- [deep-agents](/topics/deep-agents)（Agentic RAG 与长时程 Agent 共享编排模式）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)（企业 Agent 的知识接入层就是 RAG）

## 最佳实践

- 新项目直接按 Agentic 思路设计（让模型决定检索时机），但从最简管线起步验证数据质量，再加环。
- 先治理后检索：权限与元数据体系没建好之前，不要把敏感库接进 RAG。
- 评估驱动：建一套带标准答案的检索评估集，任何管线改动跑一遍，别凭感觉调。

## 推荐学习资料

- [Agentic Retrieval-Augmented Generation: A Survey（arXiv 2501.09136）](https://arxiv.org/abs/2501.09136)
- [SoK: Agentic RAG——分类、架构、评估与研究方向（arXiv 2603.07379）](https://arxiv.org/abs/2603.07379)
- [20 Advanced RAG Types（Turing Post）](https://www.turingpost.com/p/ragtypes)

## Timeline

（每日更新自动填充；以下为建档基线）

### 2026-07-28

建档。当前生态：Agentic RAG 成为主流范式——检索从固定管线变成模型推理中的自主决策，多 Agent 检索/验证分工；进阶方向为长文档记忆、自适应检索、多模态 grounding、GraphRAG；企业侧共识是"治理先于检索"。
