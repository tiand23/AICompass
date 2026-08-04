# Enterprise AI Agents

## 简介

企业级 AI Agent 的落地：托管平台与运行时、交付模式（自建 / 平台 / 驻场交付）、以及围绕权限、评估、运维的工程实践。覆盖 OpenAI Presence、Claude Managed Agents 等平台形态。

## 为什么重要

这是"生成 AI 进企业"的主战场。模型能力趋同后，竞争转向交付与运维：谁能让 Agent 可靠地接入企业系统、按策略行动、出错时升级到人。对开发者，平台方的动向决定了自建与外采的边界在哪里。

## 核心概念

- **交付模式光谱**：纯 API 自建 → 托管运行时（Managed Agents）→ 平台 + 驻场工程师（Presence 的 FDE 模式）。
- **策略与权限**：企业定义的 policy、permission、评估标准约束 Agent 行为；人工升级（escalation）是标配。
- **运维成熟度信号**：生命周期 webhook、会话预置、流式观测等 API 能力是评估平台成熟度的具体指标。
- **"拥有你的智能"之争**：智能外包给平台还是握在自己手里——企业 AI 架构选型的核心分歧。

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

### [2026-08-03](/today/2026-08-03)

Stripe Kai 案例（LangChain 发布）：公司级 Agent 的完整生产参考——开源 harness + 企业 harness + 配置层的分层，联邦 skills 由业务团队自治生产覆盖 500+ 内部工具，83% 员工周活。"平台供底座、业务供能力"的分工模式得到大规模验证。

### [2026-07-30](/today/2026-07-30)

LangSmith 推出 LLM Gateway：生产 Agent 的运行时管控（模型路由、配额、策略）——Gateway 层补上企业 Agent 运维拼图，与 Agent365 管控平面同趋势。

### [2026-07-25](/today/2026-07-25)

Harrison Chase 发表《What does it mean to "own your intelligence"?》，把"智能所有权"之争摆上台面。

### [2026-07-22](/today/2026-07-22)

OpenAI 发布 Presence：企业语音/对话 Agent 平台，受限 GA，FDE 与集成商主导交付，自称已处理其约 75% 的入站支持请求。同日 Claude Managed Agents 发布一批运维向 API 更新（effort 配置、生命周期 webhook、会话预置、event deltas）。
