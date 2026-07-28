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

### 2026-07-24

Claude Opus 5 发布：1M 上下文（默认即最大）、128k 输出、thinking 默认开启、$5/$25 定价与 Opus 4.8 持平；effort 五档成为主要调控手段；破坏性变更——高 effort 下不可禁用 thinking、Opus 4.7 fast mode 移除。同日：mid-conversation tool changes 进入 beta（多轮间增删工具且保留 prompt cache）、`fallbacks` 新增 `"default"` 模式。

### 2026-07-22

Claude Managed Agents 更新：agent 模型配置支持 effort；webhook 覆盖 environment / memory store 生命周期；session 创建支持 `initial_events` 预置并直接启动；`version` 字段改为可选（乐观并发）；线程级事件流支持 event deltas。
