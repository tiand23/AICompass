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
- **托管化**：开源框架之上出现托管运行时——LangSmith Managed Deep Agents（2026-08 公测）把持久化执行、沙箱、记忆、可观测打包，`mda deploy` 一键上线，是"开源框架 + 托管运行时"分层模式在 Deep Agents 上的落地。
- **自我改进循环（内置 vs 外部）**：prime-agent 的 `/refine` 把"复盘轨迹→更新经验"做成 Agent 自身内置能力（写回 harness 状态），是相对 loopx 外部状态层的另一种实现路径——同一个"让运行留下可复用沉淀"的目标，可以做在 Agent 内部，也可以做成外部工具。
- **模型路由降本**：长时程任务里多数调用不需要前沿模型——LangChain 用 Switchyard 实测 Deep Agents 评估集，93% 调用可路由到 30B 级模型，仅 7% 需要升级到前沿模型，整体成本降 74%（详见 [model-efficiency](/topics/model-efficiency)）。
- **能力来自计算环境而非工具数量**：monday.com Sidekick 案例显示，塞进 200+ 预置工具会造成上下文污染、模型变笨变贵；给 Agent 一个持久、隔离、可执行代码的沙箱环境（而非穷举工具清单）才是能力上限所在（详见 [agent-sandboxes](/topics/agent-sandboxes)）。
- **强制人工检查点的垂直全流程编排**：OpenMontage 把"调研→提案→脚本→分镜→素材→剪辑→合成"标准化为长时程多阶段管线，每个关键节点强制人工审批+决策审计轨迹——长时程 Agent"自主执行但保持人工检查点"模式在具体垂直领域（视频制作）的完整工程实现。

## 相关技术

- LangGraph（LangChain 的 Agent 编排框架）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)

## 最佳实践

- 评估自建长时程 Agent 时参考 LangChain 的基准方法论，别只测端到端成功率。

## 推荐学习资料

- [How We Benchmark Deep Agents（LangChain Blog）](https://www.langchain.com/blog/)

## Timeline

### [2026-08-12](/today/2026-08-12)

LangChain 发文系统列出把 Agent 推向生产必须解决的 7 类基础设施难题（运行时可靠性、事件流式推送、安全执行不可信代码、上下文管理、性能评估、记忆系统、授权权限），主张托管服务打包这些基础设施；同日 LangSmith BYOC 部署模式在 AWS 正式 GA（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

OpenMontage 开源（累计 4.73 万 star）：把 AI 编码助手变成视频制作全流程编排者，12 套结构化生产管线均走"调研→提案→脚本→分镜→素材→剪辑→合成"标准阶段，每个关键节点强制人工审批——长时程多阶段 Agent 任务"自主执行 + 人工检查点"模式在垂直领域的完整落地样本（详见 [agent-skills](/topics/agent-skills)）。

### [2026-08-11](/today/2026-08-11)

LangChain 用 NVIDIA Switchyard 实测：自家 Deep Agents 评估集里 93% 的调用可路由到 30B 级模型，仅 7% 真正需要前沿模型，整体成本降 74%、准确率只掉 6 个百分点（详见 [model-efficiency](/topics/model-efficiency)）。同日发文披露 monday.com Sidekick 案例：单 Agent 塞 200+ 预置工具导致上下文污染、变笨变贵，改用 LangSmith Sandboxes（硬件级 microVM）给 Agent 一台"自己的电脑"后问题解决——能力上限来自可动态执行的计算环境而非工具数量（详见 [agent-sandboxes](/topics/agent-sandboxes)）。

### [2026-08-08](/today/2026-08-08)

Prime Intellect 发布 prime-agent（累计 6.5k star）：RLM（递归语言模型）思路——把上下文当变量、工具当函数调用，在持久化 Python REPL 里运行；`/refine` 复盘任务轨迹并把经验写回 harness 状态，实现内置式自我改进，与 loopx 的外部状态内核是同一目标的不同实现路径（详见 [coding-agents](/topics/coding-agents)）。

### [2026-08-07](/today/2026-08-07)

LangSmith 发布 Managed Deep Agents 公测：托管化的 Deep Agents 运行时，持久化执行/沙箱/记忆/Slack·GitHub 接入/OIDC 身份/Harbor 评估/全链路可观测打包交付，`mda dev`/`mda deploy` 开发部署闭环；继 Claude、Gemini 之后第三家把"深度 Agent 托管化"推成产品线（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

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
