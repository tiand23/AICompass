# Agent Frameworks

## 简介

Agent 开发框架版图：LangGraph（LangChain 系，图编排）、CrewAI（角色制多 Agent）、OpenAI Agents SDK（handoff 抽象）、Google ADK 2.0（Python/Go/TS 三语、图工作流）、Microsoft Agent Framework、LlamaIndex Workflows、Claude Agent SDK、Mastra 等；AutoGen 已于 2026 年进入维护模式。

## 为什么重要

框架决定了 Agent 逻辑的表达方式和可迁移性——平台会锁定，框架层是保持中立的地方。版图变化（谁领先、谁维护模式）直接影响技术选型的长期安全性。

## 核心概念

- **当前格局（2026 年中）**：LangGraph 企业采用领先（月下载 3450 万，2026 年初 GitHub star 反超 CrewAI），图架构天然契合审计与回滚等生产需求；Dify 以 144k star 领跑低代码线。
- **AutoGen 维护模式**：在产的两条路——维持现状或迁移，架构最接近的迁移目标是 LangGraph。
- **选型跟栈走**：M365/Azure → Copilot Studio + Semantic Kernel；AWS → AgentCore + LangGraph；GCP → ADK；纯代码自建 → LangGraph 或 Claude Agent SDK。
- **抽象风格差异**：图（LangGraph/ADK）、角色（CrewAI）、handoff（OpenAI Agents SDK）——决定了心智模型和调试方式。

## 相关技术

- [agent-workflow](/topics/agent-workflow)（框架之上的工作流设计范式）
- [deep-agents](/topics/deep-agents)（LangChain 在长时程方向的延伸）
- [cloud-agent-platforms](/topics/cloud-agent-platforms)（框架与平台的搭配关系）
- [mcp](/topics/mcp)（各框架的工具接入标准）

## 最佳实践

- 新项目默认候选：LangGraph（生态与生产成熟度）；快速原型多 Agent 角色戏：CrewAI；深绑某家云则用该家 SDK。
- 关注框架的"生产四件套"：状态持久化、可观测性（如 LangSmith）、人工介入节点、错误恢复——demo 都一样，差距在这。

## 推荐学习资料

- [The best AI agent frameworks in 2026（LangChain）](https://www.langchain.com/resources/ai-agent-frameworks)
- [开源 Agent 框架横评（Firecrawl）](https://www.firecrawl.dev/blog/best-open-source-agent-frameworks)

## Timeline

### 2026-07-28

建档。当前格局：LangGraph 双料领先（企业采用 + star），AutoGen 进入维护模式，Google ADK 发布 2.0（三语言、图工作流），OpenAI Agents SDK 与 Microsoft Agent Framework 稳定迭代。
