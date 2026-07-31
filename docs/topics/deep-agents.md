# Deep Agents

## 简介

Deep Agents 是 LangChain 提出的概念与产品方向：能执行长时程、多步骤自主任务的 Agent——有规划、子任务分解、持久记忆与错误恢复能力，区别于单轮工具调用式的"浅"Agent。

## 为什么重要

长时程自主性是 Agent 能力竞争的当前前沿，也是最难评估的部分：单轮基准测不出规划、工具使用与错误恢复。头部框架方围绕它构建概念、产品与评估方法论，值得跟踪其演进来校准自己的 Agent 架构。

## 核心概念

- **长时程（long-horizon）任务**：跨多步骤、多工具、长时间的目标达成。
- **评估难题**：过程正确性 vs 结果正确性、中途恢复能力的度量。

## 相关技术

- LangGraph（LangChain 的 Agent 编排框架）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)

## 最佳实践

- 评估自建长时程 Agent 时参考 LangChain 的基准方法论，别只测端到端成功率。

## 推荐学习资料

- [How We Benchmark Deep Agents（LangChain Blog）](https://www.langchain.com/blog/)

## Timeline

### [2026-07-29](/today/2026-07-29)

Deep Agents v0.7 发布：基础 harness 输入 token 减 65%、文件工具优化、DeltaChannel 增量 checkpoint、实验性 QuickJS 代码执行；TodoListMiddleware 改手动开启（破坏性变更）。

### [2026-07-23](/today/2026-07-23)

LangChain 发布《How We Benchmark Deep Agents》，公开其长时程 Agent 评估方法论。
