# Agent Memory

## 简介

Agent 记忆：让 Agent 跨会话、跨任务保留并复用信息的基础设施层——从会话内上下文管理，到长期记忆（用户偏好、决策历史），再到团队级共享记忆资产。代表项目/产品：Mem0、Zep、LangMem（LangChain），以及把记忆做成团队资产枢纽的 TencentDB-Agent-Memory。

## 为什么重要

上下文窗口再大也只是"工作记忆"——Agent 要长期服务一个用户或团队，必须有独立于单次会话的记忆层。记忆质量直接决定 Agent 的"熟练度"：不记得偏好的助手每次从零开始，不记得决策历史的 Agent 会重复犯错。团队级记忆（如腾讯的四资产架构）进一步把个人经验变成组织资产，是企业 Agent 落地的关键拼图。

## 核心概念

- **分层记忆架构**：从原始对话（L0）逐层提炼到摘要、事实、人格/偏好（L3）——存储粒度与检索成本的分层权衡（TencentDB-Agent-Memory 的 Chat Memory 分层是典型实现）。
- **记忆资产类型**：不止对话记忆——技能（可执行流程）、知识（Wiki/文档）、代码图谱（符号与调用关系）都可以资产化，各有不同的提炼与检索方式。
- **写入策略**：什么值得记（显式指令 vs 自动提炼）、何时更新、何时遗忘/失效——记忆的信噪比管理是工程难点。
- **权限与作用域**：团队级记忆需要 RBAC（private/team/restricted）与按 Agent 绑定（loadout）而非全局注入——记忆越权是新的安全面。
- **与 RAG 的关系**：技术栈高度重叠（向量检索、结构化存储），区别在数据来源与生命周期——RAG 检索静态知识库，记忆持续从交互中生长。

## 相关技术

- [vector-databases](/topics/vector-databases)（记忆的存储检索层）
- [rag](/topics/rag)（同栈不同源：静态知识 vs 交互生长）
- [agent-skills](/topics/agent-skills)（skill 可以是记忆提炼的产物）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)（团队记忆是企业 Agent 运维的一环）

## 最佳实践

- 先分清"要记什么"再选方案：用户偏好类少而精可结构化存储；经验类多而杂需要提炼管线；别把所有对话原文都灌进向量库当记忆。
- 记忆写入要有信噪比闸门（评审、置信度阈值），脏记忆比没记忆更糟。

## 推荐学习资料

- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)
- [Mem0](https://github.com/mem0ai/mem0)

## Timeline

### [2026-08-03](/today/2026-08-03)

腾讯云 TencentDB-Agent-Memory 登上 Trending（单日 +602，累计 11k）：团队级记忆枢纽，四类资产（分层对话记忆/Skills/Wiki/CodeGraph）+ RBAC + 按 Agent 绑定 loadout——记忆从会话上下文升级为团队资产层。
