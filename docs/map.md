# 知识地图

> 按生成式 AI 开发栈的生态位组织。每个格子代表一个领域——有 Topic 的列出，空格子标"待积累"（在跟踪，还没内容）。
>
> 状态：🔥 最近 7 天有动态 ・ 📈 最近 30 天 ・ 💤 更久

## 1. 模型层

### 基础模型

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [claude-models](/topics/claude-models) | Anthropic Claude 模型线 | Agent/编码场景的模型选型与迁移 | 📈 | 2026-08-11 |
| [openai-models](/topics/openai-models) | OpenAI GPT 模型线与 API 平台 | 选型、成本波动与产品弃用风险 | 🔥 | 2026-08-19 |
| [gemini-models](/topics/gemini-models) | Google Gemini 模型线 | 成本敏感场景的高性价比选型 | 🔥 | 2026-08-17 |

### 多模态生成

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [diffusion-models](/topics/diffusion-models) | 扩散模型与推理优化 | 图像/视频生成的成本与显存门槛 | 🔥 | 2026-08-17 |
| [world-models](/topics/world-models) | 世界模型 / 生成式仿真 | 机器人训练数据昂贵且危险 | 📈 | 2026-07-27 |

### 效率与小型化（SLM ・ 蒸馏 ・ 量化）

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [model-efficiency](/topics/model-efficiency) | SLM、蒸馏、量化、高效架构、CPU/端侧推理 | 用更少算力跑出够用的智能 | 🔥 | 2026-08-19 |

## 2. 知识与检索

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [rag](/topics/rag) | 检索增强生成（当前主流：Agentic RAG） | 私有知识接入 LLM、事实性与可溯源 | 📈 | 2026-08-10 |
| [document-parsing](/topics/document-parsing) | 文档解析与结构化（VLM + 语义重建） | 非结构化文档进知识库的第一道工序 | 🔥 | 2026-08-17 |
| [vector-databases](/topics/vector-databases) | 向量数据库选型与混合检索 | RAG/记忆的存储检索层 | 🔥 | 2026-08-18 |
| [agent-memory](/topics/agent-memory) | Agent 记忆基础设施（会话/长期/团队级资产） | Agent 跨会话保留经验、团队沉淀组织资产 | 🔥 | 2026-08-18 |
| [knowledge-graph](/topics/knowledge-graph) | 知识图谱作为确定性推理/决策溯源基础设施层 | Agent 决策的可解释性、可审计、可查先例 | 📈 | 2026-08-10 |

## 3. Agent 开发

### 编排与 Workflow

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [deep-agents](/topics/deep-agents) | 长时程自主任务 Agent（LangChain） | 多步骤任务的规划、恢复与评估 | 📈 | 2026-08-12 |
| [agent-frameworks](/topics/agent-frameworks) | 框架版图：LangGraph/CrewAI/ADK/Agents SDK… | 框架选型与长期安全性 | 📈 | 2026-08-06 |
| [agent-workflow](/topics/agent-workflow) | 工作流范式：编排 vs 自主、HITL、持久化执行 | 让 Agent 可靠地跑进业务流程 | 🔥 | 2026-08-17 |
| [agent-skills](/topics/agent-skills) | 可复用能力包生态（含 GitHub 热度排行） | Agent 能力的分发与复用 | 🔥 | 2026-08-19 |
| [voice-agents](/topics/voice-agents) | 语音 Agent（级联/实时 S2S、框架与评测） | 语音界面 Agent 的实时性工程与评测 | 📈 | 2026-08-10 |

### 运行时与云（托管运行时 ・ Agent 平台 ・ Foundry）

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [enterprise-ai-agents](/topics/enterprise-ai-agents) | 企业 Agent 平台与交付模式 | Agent 如何可靠接入企业系统并被运维 | 📈 | 2026-08-12 |
| [cloud-agent-platforms](/topics/cloud-agent-platforms) | 四大云托管 Agent 平台版图（AgentCore/Foundry/GEAP/Managed Agents） | 平台选型与锁定权衡 | 🔥 | 2026-08-19 |
| [agent-workspaces](/topics/agent-workspaces) | 桌面 Agent 工作台（Cowork/openwork/Codex app） | 派任务收成果的交互形态；能力配置跨工具移植 | 📈 | 2026-08-12 |
| [agent-sandboxes](/topics/agent-sandboxes) | Agent 执行沙箱基础设施（E2B/Daytona/Cloudflare computer） | 给 Agent 安全隔离、可复用的代码执行环境 | 📈 | 2026-08-11 |

### 协议与互操作（MCP ・ A2A ・ AG-UI）

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [mcp](/topics/mcp) | 工具接入协议（事实标准） | AI 接工具的 M×N 胶水代码问题 | 📈 | 2026-08-03 |
| [a2a](/topics/a2a) | Agent 间协作协议（Google 主导，50+ 厂商） | 跨厂商 Agent 的发现与任务委托 | 📈 | 2026-07-28 |

*另关注：AG-UI（待积累）。*

## 4. 推理与部署

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [inference-serving](/topics/inference-serving) | GPU 集群调度与利用率、serving 架构、推理降本 | 把硬件投入转化为实际产出而非闲置/低效排队 | 🔥 | 2026-08-17 |

*（扩散模型的 4-bit 推理参见 [diffusion-models](/topics/diffusion-models)；边缘部署参见 [model-efficiency](/topics/model-efficiency)）*

## 5. 评估

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [agent-evaluation](/topics/agent-evaluation) | Agent 评估方法与基准（真实任务派生 + LLM-as-judge） | Agent 上生产前的可复现度量 | 🔥 | 2026-08-18 |

*另关注：模型基准。（长时程 Agent 评估参见 [deep-agents](/topics/deep-agents)）*

## 6. 安全

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [agentic-safety](/topics/agentic-safety) | Agent 行为安全 | 自主模型越权、逃逸带来的真实风险 | 🔥 | 2026-08-19 |
| [content-provenance](/topics/content-provenance) | AI 内容水印与验证（SynthID/C2PA） | 生成内容的可识别与合规核查 | 🔥 | 2026-08-14 |

## 7. 编码工具

| Topic | 是什么 | 解决什么问题 | 状态 | 最近动态 |
|---|---|---|---|---|
| [ai-code-review](/topics/ai-code-review) | AI 代码评审工具与架构 | 评审的规模化与信噪比 | 📈 | 2026-08-09 |
| [coding-agents](/topics/coding-agents) | 终端/CLI 编码 Agent（Claude Code/Codex CLI/Reasonix…） | 品类选型；harness 工程与模型生态绑定 | 🔥 | 2026-08-18 |
