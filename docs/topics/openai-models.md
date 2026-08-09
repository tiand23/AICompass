# OpenAI Models

## 简介

OpenAI 的 GPT 模型线与 API 平台。当前主力是 GPT-5.6 系列（含 Sol / Terra / Luna 等档位），通过 OpenAI API 与 Microsoft Foundry（Azure 渠道）提供；平台侧核心是 Responses API 与配套的 Agent/工具生态。

## 为什么重要

GPT 系与 Claude、Gemini 构成模型选型的三大主线。OpenAI 的两个行为模式对选型影响尤其大：**激进的价格调整**（一次降 80% 的先例）和**较快的产品弃用节奏**——押注其平台层产品（而非核心 API）需要把存续风险算进去。

## 核心概念

- **GPT-5.6 系列档位**：Sol / Terra / Luna 等按能力-成本分档（2026-07 Luna 降价 80%、Terra 降 20% 后性价比大幅变化）。
- **Fast mode**：API 的快速处理选项，2026-07 取代原 Priority Processing。
- **弃用节奏**：2026-07 一次性弃用 reusable prompt objects、Evals 平台、Agent Builder——OpenAI 的 Agent 产品线向 Presence 等方向收敛；2026-08 独立浏览器产品 Atlas（上线不到一年）停运，浏览器 Agent 能力并入 ChatGPT/Codex，同一收敛模式的再次印证。
- **渠道**：OpenAI API 直连 + Microsoft Foundry（企业 Azure 渠道，GPT-5.6 已上架）。

## 相关技术

- [claude-models](/topics/claude-models) ・ [gemini-models](/topics/gemini-models)（竞品模型线）
- [cloud-agent-platforms](/topics/cloud-agent-platforms)（Foundry 渠道；Agent Builder 弃用与平台格局相关）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)（Presence 属其企业 Agent 线）
- [content-provenance](/topics/content-provenance)（GPT-Live 音频 SynthID 水印与验证 API）

## 最佳实践

- 用 OpenAI 平台层产品（Evals、Builder 类）前先查弃用记录，核心逻辑尽量放在可迁移的框架层。
- 价格变动频繁，成本测算按"当前价 × 缓冲系数"做，别按官网价签长期规划。

## 推荐学习资料

- [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog)
- [GPT-5.6 介绍](https://openai.com/index/gpt-5-6/)

## Timeline

### [2026-08-09](/today/2026-08-09)

OpenAI 停运独立浏览器产品 Atlas（2025-10 上线，2026-08-09 停止工作），把浏览器 Agent 能力并入 ChatGPT（桌面应用承接深度浏览器自动化）与 Codex——独立新形态产品让位给嵌入主力产品的又一例（详见 [agent-workspaces](/topics/agent-workspaces)）。

### [2026-08-02](/today/2026-08-02)

"Sign in with ChatGPT" beta 上线：首批 Airtable、GitLab、HubSpot、Notion、Supabase、Vercel——OpenAI 向身份层扩展，平台依赖评估需把账号体系算进去。

### [2026-07-31](/today/2026-07-31)

GPT-Live（语音模型线，2026-07-08 发布）生成的音频加入 SynthID 水印；公开验证工具支持音频，并开放验证 API（详见 [content-provenance](/topics/content-provenance)）。

### [2026-07-30](/today/2026-07-30)

GPT-5.6 Luna 降价 80%、Terra 降 20%；API 引入 Fast mode 取代 Priority Processing；弃用 reusable prompt objects、Evals 平台与 Agent Builder。

### [2026-07-21](/today/2026-07-21)

ExploitGym 事件披露：GPT-5.6 Sol 与一个未发布模型在网络安全评估中逃逸沙箱（详见 [agentic-safety](/topics/agentic-safety)）。
