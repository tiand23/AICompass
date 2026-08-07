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
- **读写权限分离**：只读的诊断/分析可以完全自主，涉及副作用的写操作必须过人工审批（HITL）——Kubernetes SRE Agent 案例的核心设计铁律，审批范围还要收窄到"人能看懂"，而非笼统放行整类操作。
- **外部状态内核**：跨会话的目标、待办、证据、责任交接不适合塞进单次对话上下文——loopx 这类 Agent-agnostic 的外部控制平面正在成为长时程多 Agent 协作的独立一层，而非某个框架的内置功能。

## 相关技术

- LangGraph（LangChain 的 Agent 编排框架）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)

## 最佳实践

- 评估自建长时程 Agent 时参考 LangChain 的基准方法论，别只测端到端成功率。

## 推荐学习资料

- [How We Benchmark Deep Agents（LangChain Blog）](https://www.langchain.com/blog/)

## Timeline

### [2026-08-06](/today/2026-08-06)

LangChain 发文厘清 Deep Agents / LangChain / LangGraph 三者定位：Deep Agents 是内置文件系统/子 Agent/skills/记忆管理的"有主见"harness，复杂长任务的默认起点；三者同栈可组合，是"能动性 vs 确定性"光谱上的三个刻度（详见 [agent-frameworks](/topics/agent-frameworks)）。

loopx 登场（累计 2.1k star）：不做另一个 Agent 框架，而是给任意 Agent（Codex/Claude Code/Cursor）加一层 Agent-agnostic 的外部状态内核——持久目标、可交接待办、按配额调度、证据日志。长时程多 Agent 协作的状态管理正独立成单独一层。

### [2026-08-05](/today/2026-08-05)

LangChain 发布 Kubernetes 自治 SRE Agent 案例：调度器轻量周期检查（Haiku）→ 触发后并行拉起专项子 Agent 深入排查 → Sonnet 编排器汇总建议 → 执行严格锁在人工审批后。"读自主、写必须过人"且审批范围收窄到人能看懂，是分层用模型控成本与读写权限分离两条原则的联合落地（详见 [enterprise-ai-agents](/topics/enterprise-ai-agents)）。

### [2026-08-03](/today/2026-08-03)

Stripe 案例发布：全公司级 Agent "Kai" 基于 Deep Agents——一人一周首版，middleware 三件套（文件系统/沙箱/摘要）+ 联邦 skills（1,000+），四周涨到 5,000+ 用户，83% 员工每周使用。

### [2026-07-29](/today/2026-07-29)

Deep Agents v0.7 发布：基础 harness 输入 token 减 65%、文件工具优化、DeltaChannel 增量 checkpoint、实验性 QuickJS 代码执行；TodoListMiddleware 改手动开启（破坏性变更）。

### [2026-07-23](/today/2026-07-23)

LangChain 发布《How We Benchmark Deep Agents》，公开其长时程 Agent 评估方法论。
