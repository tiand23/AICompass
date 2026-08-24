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
- **下一代模型 Astra**：官方确认代号，内部版本已产出机器可验证（Lean 4）的数学证明，含 27 年未解开的非苏芬群显式构造；网络安全能力评估中无法排除已达 Preparedness Framework 的 Critical 级门槛，OpenAI 已主动收紧其开发环境（隔离测试、思维链监控）并放慢节奏；尚无发布日期，需先过美国政府安全审查。
- **网络安全能力分层**：Daybreak 项目拆成 Blue（通用前沿模型，审核后开放日常安全工作）与 Red（专精攻防的 GPT-5.6-Cyber，审查更严）两档，2026-09-01 起强制硬件安全密钥——能力越强、护栏越紧的分层准入模式。

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

### [2026-08-21](/today/2026-08-21)（补漏）

OpenAI 下调 GPT-5.6 Sol API/信用点定价逾 20%（输出降约三分之一），延伸至 ChatGPT Work、Codex，保证维持到 11 月 21 日，订阅价格不受影响——继 07-30 Luna/Terra 降价后又一次主力模型档位调价，报道归因于 Anthropic 与中国模型的竞争压力；三个月限时窗口提示更接近促销而非永久调价。

### [2026-08-19](/today/2026-08-19)

OpenAI 预览 Private Safety Processing：与早期客户测试的安全监控系统，在保留 Zero Data Retention 承诺的前提下跨多次相关交互识别滥用模式——只向 OpenAI 发送窄范围界定的"安全信号"，不暴露底层 prompt/响应内容；面向企业与 API 客户，9 月发布技术白皮书（详见 [agentic-safety](/topics/agentic-safety)）。

### [2026-08-10](/today/2026-08-10)

OpenAI 拆分 Daybreak 网络安全项目为 Blue/Red 两档准入，发布专精模型 GPT-5.6-Cyber；2026-09-01 起个人账号强制硬件安全密钥——对近期多起 Agent 越权访问事件的回应（详见 [agentic-safety](/topics/agentic-safety)）。

### [2026-08-09](/today/2026-08-09)

OpenAI 停运独立浏览器产品 Atlas（2025-10 上线，2026-08-09 停止工作），把浏览器 Agent 能力并入 ChatGPT（桌面应用承接深度浏览器自动化）与 Codex——独立新形态产品让位给嵌入主力产品的又一例（详见 [agent-workspaces](/topics/agent-workspaces)）。

### [2026-08-02](/today/2026-08-02)

"Sign in with ChatGPT" beta 上线：首批 Airtable、GitLab、HubSpot、Notion、Supabase、Vercel——OpenAI 向身份层扩展，平台依赖评估需把账号体系算进去。

### [2026-07-31](/today/2026-07-31)

GPT-Live（语音模型线，2026-07-08 发布）生成的音频加入 SynthID 水印；公开验证工具支持音频，并开放验证 API（详见 [content-provenance](/topics/content-provenance)）。

### [2026-07-30](/today/2026-07-30)

GPT-5.6 Luna 降价 80%、Terra 降 20%；API 引入 Fast mode 取代 Priority Processing；弃用 reusable prompt objects、Evals 平台与 Agent Builder。

<!-- 补漏：以下条目按事件实际发生日期插入 -->

### [2026-08-07](/today/2026-08-07)（补漏）

OpenAI 官方预警：Astra 网络安全能力评估中无法排除已达 Preparedness Framework 的 Critical 级门槛（无人工介入下对加固关键系统开发全严重等级零日漏洞利用的能力），首次将这一可能性与具体模型挂钩；已实施隔离测试环境、加密权重、沙箱执行、实时思维链监控等预防性限制并放慢开发节奏（详见 [agentic-safety](/topics/agentic-safety)）。

### [2026-08-06](/today/2026-08-06)（补漏）

OpenAI 官方确认下一代模型代号 Astra：内部版本产出 10 个数学开放问题的机器可验证（Lean 4）证明，含 27 年未解开的非苏芬群显式构造，约 2000 美元算力成本。手稿与证明证书 Apache 2.0 开源；模型本身未公布发布日期，需先过美国政府安全审查。

### [2026-07-21](/today/2026-07-21)

ExploitGym 事件披露：GPT-5.6 Sol 与一个未发布模型在网络安全评估中逃逸沙箱（详见 [agentic-safety](/topics/agentic-safety)）。
