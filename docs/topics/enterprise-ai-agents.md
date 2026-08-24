# Enterprise AI Agents

## 简介

企业级 AI Agent 的落地：托管平台与运行时、交付模式（自建 / 平台 / 驻场交付）、以及围绕权限、评估、运维的工程实践。覆盖 OpenAI Presence、Claude Managed Agents 等平台形态。

## 为什么重要

这是"生成 AI 进企业"的主战场。模型能力趋同后，竞争转向交付与运维：谁能让 Agent 可靠地接入企业系统、按策略行动、出错时升级到人。对开发者，平台方的动向决定了自建与外采的边界在哪里。

## 核心概念

- **交付模式光谱**：纯 API 自建 → 托管运行时（Managed Agents）→ 平台 + 驻场工程师（Presence 的 FDE 模式）。
- **策略与权限**：企业定义的 policy、permission、评估标准约束 Agent 行为；人工升级（escalation）是标配。
- **运维成熟度信号**：生命周期 webhook、会话预置、流式观测等 API 能力是评估平台成熟度的具体指标；会话级预算硬顶、数据落地地控制是这一信号集的最新补充。
- **"拥有你的智能"之争**：智能外包给平台还是握在自己手里——企业 AI 架构选型的核心分歧。
- **"人力管理"心智模型的迁移**：Agent 数量一多，团队开始用管理员工的方式管理 Agent——工单分派、组织架构（角色/汇报线）、预算强制、治理审批流、审计日志（Paperclip 案例）。这是把 Managed Agents 的预算/权限能力和 Agent 工作流编排整合到一个统一管理面的产品化尝试。
- **成本治理的三种节奏**：运行时优化（实时按成本路由请求到合适规格模型）、工作流优化（以天/周为周期测试迭代 Agent 效率）、持续治理（设定不会被随意放宽的支出上限）——三层节奏不同、需同时并行而非二选一，是把分散的降本手段（路由、缓存、评估驱动迭代、支出硬顶）组织成统一框架的思路（Azure 提出）；配套的自查清单：能否按模型/Agent/工作流拆解看清成本？请求是否被过度配置到不必要的高规格模型？Agent 效率是否有机制随时间持续改进？用量激增时能否强制止损？
- **执行本地化作为合规折中方案**：Claude Code 自托管 runner 把源码检出、构建产物留在客户网络内，但 prompt/对话内容仍发给云端推理——是"全托管"与"完全自建"之间更细粒度的第三条路，直接对应"源码不能出内网、可接受内容经供应商推理"这条常见企业合规红线（详见 [coding-agents](/topics/coding-agents)）。

## 相关技术

- [claude-models](/topics/claude-models)（Managed Agents 依托的模型线）
- [agentic-safety](/topics/agentic-safety)（权限与隔离是企业落地的前提）
- [deep-agents](/topics/deep-agents)（长时程 Agent 的评估）

## 最佳实践

- 选型时按"交付模式光谱"定位自己：有平台工程能力选托管运行时，缺人则评估驻场交付的性价比。
- 无论哪种模式，权限分级与人工升级机制自己必须掌控，不能全权委托平台。

## 推荐学习资料

- [Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence/)
- [Claude Managed Agents 文档](https://platform.claude.com/docs/en/release-notes/overview)

## Timeline

### [2026-08-20](/today/2026-08-20)

LangSmith 发布 Preview Builds 公测：PR 打开时自动创建关联生产环境的隔离 Agent 预览部署，新提交自动重建同步，支持非工程角色直接访问测试——把"CI/CD 预览环境"这一 Web 开发成熟实践系统性搬进 Agent 部署（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

### [2026-08-12](/today/2026-08-12)

Azure 发文提出 Agent 成本治理"三速模型"：运行时路由、工作流迭代、持续治理三层节奏并行，配套 Microsoft Foundry 的模型路由器/prompt 缓存/Agent optimizer/AI Gateway 速率限制；核心主张从"一次性采购智能"转向"持续管理智能"（详见 [model-efficiency](/topics/model-efficiency)）。

### [2026-08-10](/today/2026-08-10)

Paperclip 登场（累计 7.62 万 star）：把"管理 Agent 团队"做成独立产品——工单追踪、组织架构、按 Agent/项目/公司的预算强制、治理审批流、多公司数据隔离、审计日志；明确不做聊天机器人/框架/工作流编排，只做"给 Agent 团队配的企业管理软件"。把此前分散的跨会话状态、预算、审批碎片能力整合进统一的"Agent 人力管理"心智模型（详见 [agent-workspaces](/topics/agent-workspaces)）。

### [2026-08-07](/today/2026-08-07)

Claude Managed Agents 一次上线四项运维能力：会话预算硬顶、Advisor 顾问模型（中途咨询更强模型的策略建议）、`inference_geo` 数据落地地控制、GitHub 仓库自动加载 skills。同日 LangSmith 发布 Managed Deep Agents 公测，托管化竞争进一步升温（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

### [2026-08-06](/today/2026-08-06)（补漏）

Claude Code 上线自托管环境公测：Team/Enterprise 组织可把会话执行放进自己网络，紧邻内部服务与安全管控，但推理请求仍发给 Anthropic——是企业"源码留内网、内容可外发推理"这条合规红线的具体产品化实现（详见 [coding-agents](/topics/coding-agents)）。

### [2026-08-05](/today/2026-08-05)

Claude Enterprise 上线 Inference Hooks（beta）：受管辖 prompt 在推理前实时 POST 给企业自建安全服务器等待 allow/deny，覆盖 claude.ai/Cowork/Claude Code。企业 Agent 治理第一次把"推理"本身开放成策略网关可插入的环节，而非只能事后审计（详见 [agentic-safety](/topics/agentic-safety)）。

### [2026-08-04](/today/2026-08-04)

LangChain 发布 Lyft・Vodafone・LATAM 航空的 CX Agent 生产经验——继 Stripe Kai 之后，"Agent 生产化案例库"在系统性成形，客服（CX）确认为渗透最深的企业场景。

### [2026-08-03](/today/2026-08-03)

Stripe Kai 案例（LangChain 发布）：公司级 Agent 的完整生产参考——开源 harness + 企业 harness + 配置层的分层，联邦 skills 由业务团队自治生产覆盖 500+ 内部工具，83% 员工周活。"平台供底座、业务供能力"的分工模式得到大规模验证。

### [2026-07-30](/today/2026-07-30)

LangSmith 推出 LLM Gateway：生产 Agent 的运行时管控（模型路由、配额、策略）——Gateway 层补上企业 Agent 运维拼图，与 Agent365 管控平面同趋势。

### [2026-07-25](/today/2026-07-25)

Harrison Chase 发表《What does it mean to "own your intelligence"?》，把"智能所有权"之争摆上台面。

### [2026-07-22](/today/2026-07-22)

OpenAI 发布 Presence：企业语音/对话 Agent 平台，受限 GA，FDE 与集成商主导交付，自称已处理其约 75% 的入站支持请求。同日 Claude Managed Agents 发布一批运维向 API 更新（effort 配置、生命周期 webhook、会话预置、event deltas）。
