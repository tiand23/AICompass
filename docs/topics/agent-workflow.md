# Agent Workflow

## 简介

Agent 工作流开发：如何把业务过程表达为"确定性编排 + 模型自主决策"的组合——图/状态机编排、人工审批节点（human-in-the-loop）、持久化执行（durable execution）、错误恢复与重试。

## 为什么重要

"全自主 Agent"在 2026 年的企业现实中仍是少数——主流是 **assisted workflow**：人审核、Agent 执行。工作流设计（哪里给模型自由、哪里上确定性约束、哪里必须人签字）是企业 Agent 项目成败的第一设计决策，比选模型重要。

## 核心概念

- **确定性 vs 自主的光谱**：纯流水线（可预测、难应变）→ 图编排+受限决策（主流甜点区）→ 全自主规划（Deep Agents 方向，评估与信任是瓶颈）。
- **Human-in-the-loop 节点**：破坏性操作前的审批闸门；设计要点是让"人审"低摩擦，否则会被绕过。
- **持久化执行**：长流程要能跨小时/天挂起恢复（等审批、等外部系统），状态必须落盘而非驻留内存。
- **可回滚性**：图架构流行的实际原因——每个节点是天然的审计点和回滚点。
- **持久化工作流不是 Agent 专属需求**：LlamaIndex 用 Temporal 重构文档解析管线调度证明，"长任务可在故障后从检查点自动恢复而非从头重来"是任何大规模异步处理系统的通用刚需，与是否涉及 Agent 无关；把"资源协调"本身建模成持久化、可观测的工作流实体（如信号量 Workflow），比在应用代码里散落维护锁和重试计数器更可靠（详见 [document-parsing](/topics/document-parsing)）。

## 相关技术

- [agent-frameworks](/topics/agent-frameworks)（工作流的实现载体）
- [deep-agents](/topics/deep-agents)（光谱的全自主端）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)（企业侧的策略与权限要求）

## 最佳实践

- 从"模型自由度最小"的版本起步上线，用真实运行数据逐步放权，方向永远是"先可靠再聪明"。
- 每个自主决策点配三件事：置信度出口（不确定就升级到人）、超时预算、失败后的确定性兜底路径。

## 推荐学习资料

- [How We Benchmark Deep Agents（LangChain）](https://www.langchain.com/blog/)
- [Agentic AI Frameworks 2026: Production Comparison](https://uvik.net/blog/agentic-ai-frameworks/)

## Timeline

### [2026-08-17](/today/2026-08-17)

LlamaIndex 分享用 Temporal 持久化工作流重构文档处理调度的实践：Workflow+Activity 模型、信号量 Workflow 做并发控制、失败任务自动从检查点续跑——持久化执行模式在非 Agent 中心场景（大规模文档处理）的具体落地（详见 [document-parsing](/topics/document-parsing)）。

### 2026-07-28

建档。行业现状：企业主流形态是人审后执行的 assisted workflow；图编排 + 持久化执行 + HITL 审批成为工作流层的标准组合。
