# Claude Models

## 简介

Anthropic 的 Claude 模型家族。当前主要档位：旗舰的 Opus 系列（最新 Opus 5）、新引入的 Mythos 级（Fable 5 / Mythos 5，位于 Opus 之上，两者同底座，Fable 面向公开可用并附加双重用途能力的安全措施，Mythos 仅向获批组织开放）、均衡的 Sonnet 与轻量的 Haiku。可通过 Claude API、Amazon Bedrock、Google Vertex AI、Microsoft Foundry 使用。

## 为什么重要

Claude 是 Agent 与编码场景的主流模型选择之一。其模型线的每次更新（上下文窗口、effort 机制、定价、破坏性变更）都直接影响 LLM 应用的选型、成本与迁移工作量。

## 核心概念

- **Effort 档位**：`low` / `medium` / `high` / `xhigh` / `max` 五档，是 Opus 5 起的主要调控手段，替代了大量手工 prompt 调优；`max` 用于能力优先的关键任务。
- **Thinking**：扩展思考。Opus 5 默认开启；effort 为 `xhigh`/`max` 时不可禁用（返回 400）。
- **上下文与输出**：Opus 5 支持 1M token 上下文（默认即最大）、128k 最大输出。
- **Fast mode**：以更快输出运行 Opus 档模型（不降级到小模型），支持的型号随代际变化（4.7 已移除，需用 4.8 / 5）。
- **本地会话合规审计**：Compliance API 可检索运行在用户本机的 Cowork / Claude Code 会话完整转录（`GET /v1/compliance/apps/sessions/local` 系列端点），把企业侧的 Agent 可观测性从"推理前拦截"（Inference Hooks）延伸到"事后可查"。
- **引入价转正**：Sonnet 5 的引入价（$2/$10 每百万 token）已转为长期标准价，原定涨价计划取消——定价策略上用稳定价格换长期使用承诺。

## 相关技术

- Claude Code（尚未建档）
- Claude Managed Agents（托管 Agent 运行时）
- Amazon Bedrock / Vertex AI / Microsoft Foundry（三方托管渠道）

## 最佳实践

- 迁移到 Opus 5 时检查两点：是否有 `thinking: disabled` 搭配高 effort 的调用（会 400）；是否依赖 Opus 4.7 fast mode（已移除）。
- 用 effort 而不是换模型来调节质量/成本/延迟的权衡。

## 推荐学习资料

- [Claude 平台 Release Notes](https://platform.claude.com/docs/en/release-notes/overview)
- [What's new in Claude Opus 5](https://platform.claude.com/docs/en/about-claude/models/whats-new-opus-5)
- [模型总览](https://platform.claude.com/docs/en/about-claude/models/overview)

## Timeline

### [2026-08-27](/today/2026-08-27)

Anthropic 预览 Model Hardware Standard（MHS）：让 Agent 安全并行操作实验室/制造设备的共享规范，与模型无关，经 MCP 等标准协议访问，把设备集成从数周数月压缩到几小时（详见 [agentic-safety](/topics/agentic-safety)）。同日宣布向科学家开放 1 万个免费/折扣 Claude Team 席位，建立在 Claude Science（06-30 发布）之上，并与美国政府合作为生命科学研究者开放 Mythos 级模型访问计划——科研正成为除企业 Agent 外的第二条重点产品线。

### [2026-08-26](/today/2026-08-26)

Compliance API 会话相关端点（Cowork、Claude Code）转正式 GA；本地会话检索新增覆盖 Claude Science 与 Claude for Microsoft 365（Excel/PowerPoint/Word/Outlook）会话完整转录，Claude Enterprise beta——合规审计能力随 Claude 产品面扩张同步铺开。

### [2026-08-20](/today/2026-08-20)

Claude Python SDK 发布 v1.0：httpx 迁移至 httpx2，移除 legacy Text Completions API 等长期废弃接口，要求 Python 3.10+——大版本清债式发布，对停留旧版本、依赖 httpx 补丁的集成方是破坏性变更。

### [2026-08-19](/today/2026-08-19)（补漏）

Claude API 新增浏览器工具（`browser_toolset_20260801`，浏览器视口内操作、读无障碍树而非纯截图）、计算机工具转 GA、Managed Agents 自托管沙箱支持挂载记忆库（详见 [agent-sandboxes](/topics/agent-sandboxes) ・ [agent-memory](/topics/agent-memory)）。

### [2026-08-11](/today/2026-08-11)

Compliance API 新增本地会话检索端点：可获取运行在用户本机上的 Cowork / Claude Code 会话完整转录，beta 阶段面向 Claude Enterprise。与 08-05 上线的 Inference Hooks 合起来，构成"事前拦截 + 事后审计"的完整企业治理闭环（详见 [agentic-safety](/topics/agentic-safety)）。

### [2026-08-10](/today/2026-08-10)

Claude Sonnet 5 引入价（$2/$10 每百万 token）转为长期标准价，原定 2026-09-01 上调至 $3/$15 的计划取消——主力模型定价不确定性收敛的信号。

### [2026-08-07](/today/2026-08-07)

Fable 5 生物安全分类器重训：重写分类"宪法"、补充良性用途豁免、专家反馈+新训练数据，生物学相关误拦截降约 85%；病毒学/毒理学/分子设计仍拦截并路由至 Opus 5。双重用途护栏从"一刀切"走向"规则细化+数据反哺"的精细化校准。Managed Agents 同日上线会话预算硬顶、Advisor 顾问模型、`inference_geo` 数据落地控制、GitHub 仓库加载 skills（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

### [2026-08-05](/today/2026-08-05)

Claude Enterprise 上线 Inference Hooks（beta）：受管辖 prompt 推理前实时经企业安全服务器裁决 allow/deny，覆盖 claude.ai/Cowork/Claude Code（详见 [agentic-safety](/topics/agentic-safety)）。同日 Claude Opus 4.1 正式退役，请求返回错误，建议迁移 Opus 5。

### [2026-08-01](/today/2026-08-01)

Managed Agents 的 Dreams（research preview）支持 Opus 5（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

### [2026-07-24](/today/2026-07-24)

Claude Opus 5 发布：1M 上下文（默认即最大）、128k 输出、thinking 默认开启、$5/$25 定价与 Opus 4.8 持平；effort 五档成为主要调控手段；破坏性变更——高 effort 下不可禁用 thinking、Opus 4.7 fast mode 移除。同日：mid-conversation tool changes 进入 beta（多轮间增删工具且保留 prompt cache）、`fallbacks` 新增 `"default"` 模式。

### [2026-07-22](/today/2026-07-22)

Claude Managed Agents 更新：agent 模型配置支持 effort；webhook 覆盖 environment / memory store 生命周期；session 创建支持 `initial_events` 预置并直接启动；`version` 字段改为可选（乐观并发）；线程级事件流支持 event deltas。
