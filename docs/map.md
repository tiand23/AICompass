# 知识地图

> 按生成式 AI 开发栈的生态位组织。每个格子代表一个领域——有 Topic 的列出，空格子标"待积累"（在跟踪，还没内容）。
>
> 状态：🔥 最近 7 天有动态 ・ 📈 最近 30 天 ・ 💤 更久

## 1. 模型层

### 基础模型

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [claude-models](/topics/claude-models) | Anthropic Claude 模型线 | Agent/编码场景的模型选型与迁移 | 🔥 | 2026-07-24 |
| [gemini-models](/topics/gemini-models) | Google Gemini 模型线 | 成本敏感场景的高性价比选型 | 🔥 | 2026-07-21 |

### 多模态生成

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [diffusion-models](/topics/diffusion-models) | 扩散模型与推理优化 | 图像/视频生成的成本与显存门槛 | 🔥 | 2026-07-23 |
| [world-models](/topics/world-models) | 世界模型 / 生成式仿真 | 机器人训练数据昂贵且危险 | 🔥 | 2026-07-27 |

### 效率与小型化（SLM ・ 蒸馏 ・ 量化）

*待积累。关注：小语言模型、知识蒸馏、低比特量化、端侧部署。（量化推理暂参见 [diffusion-models](/topics/diffusion-models)）*

## 2. 知识与检索

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [rag](/topics/rag) | 检索增强生成（当前主流：Agentic RAG） | 私有知识接入 LLM、事实性与可溯源 | 🔥 | 2026-07-28 |

*另关注：向量数据库、Knowledge Graph（待积累）。*

## 3. Agent 开发

### 编排与 Workflow

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [deep-agents](/topics/deep-agents) | 长时程自主任务 Agent（LangChain） | 多步骤任务的规划、恢复与评估 | 🔥 | 2026-07-23 |

### 运行时与云（托管运行时 ・ Agent 平台 ・ Foundry）

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [enterprise-ai-agents](/topics/enterprise-ai-agents) | 企业 Agent 平台与交付模式 | Agent 如何可靠接入企业系统并被运维 | 🔥 | 2026-07-25 |

### 协议与互操作（MCP ・ A2A ・ AG-UI）

*待积累。*

## 4. 推理与部署

*待积累。关注：serving 架构、推理降本、边缘部署。（扩散模型的 4-bit 推理参见 [diffusion-models](/topics/diffusion-models)）*

## 5. 评估

*待积累。关注：Agent 评估、模型基准、LLM-as-judge。（长时程 Agent 评估参见 [deep-agents](/topics/deep-agents)）*

## 6. 安全

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [agentic-safety](/topics/agentic-safety) | Agent 行为安全 | 自主模型越权、逃逸带来的真实风险 | 🔥 | 2026-07-27 |

## 7. 编码工具

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [ai-code-review](/topics/ai-code-review) | AI 代码评审工具与架构 | 评审的规模化与信噪比 | 🔥 | 2026-07-27 |

*另关注：Claude Code、Codex、Cursor 等 AI 编码工具（待积累）。*
