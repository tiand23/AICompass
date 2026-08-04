# Deep Agents

## 简介

Deep Agents 是 LangChain 提出的概念与产品方向：能执行长时程、多步骤自主任务的 Agent——有规划、子任务分解、持久记忆与错误恢复能力，区别于单轮工具调用式的"浅"Agent。

## 为什么重要

长时程自主性是 Agent 能力竞争的当前前沿，也是最难评估的部分：单轮基准测不出规划、工具使用与错误恢复。头部框架方围绕它构建概念、产品与评估方法论，值得跟踪其演进来校准自己的 Agent 架构。

## 核心概念

- **长时程（long-horizon）任务**：跨多步骤、多工具、长时间的目标达成。
- **评估难题**：过程正确性 vs 结果正确性、中途恢复能力的度量。
- **Middleware 组合**：文件系统（跨轮持久引用）、沙箱执行（隔离跑代码）、上下文摘要（长会话控成本）——Stripe Kai 案例验证的长会话 Agent 标配三件套。
- **分层架构**：开源 harness（Deep Agents）→ 企业专属 harness → 配置层（定制 Agent 实例）——通用底座与企业定制的分工模式。

## 相关技术

- LangGraph（LangChain 的 Agent 编排框架）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)

## 最佳实践

- 评估自建长时程 Agent 时参考 LangChain 的基准方法论，别只测端到端成功率。

## 推荐学习资料

- [How We Benchmark Deep Agents（LangChain Blog）](https://www.langchain.com/blog/)

## Timeline

### [2026-08-03](/today/2026-08-03)

Stripe 案例发布：全公司级 Agent "Kai" 基于 Deep Agents——一人一周首版，middleware 三件套（文件系统/沙箱/摘要）+ 联邦 skills（1,000+），四周涨到 5,000+ 用户，83% 员工每周使用。

### [2026-07-29](/today/2026-07-29)

Deep Agents v0.7 发布：基础 harness 输入 token 减 65%、文件工具优化、DeltaChannel 增量 checkpoint、实验性 QuickJS 代码执行；TodoListMiddleware 改手动开启（破坏性变更）。

### [2026-07-23](/today/2026-07-23)

LangChain 发布《How We Benchmark Deep Agents》，公开其长时程 Agent 评估方法论。
