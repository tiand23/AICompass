# Gemini Models

## 简介

Google DeepMind 的 Gemini 模型家族。当前迭代主线是 Flash 档（最新 3.6 Flash），辅以 Flash-Lite（成本最优）与受管控的领域特化版本（如 3.5 Flash Cyber）；通过 Gemini API / Vertex AI 提供。

## 为什么重要

Gemini 是 Claude / GPT 之外的第三个主流选型，Flash 档"更便宜 + 更省 token"的迭代策略直接影响成本敏感型生成 AI 应用的模型选择；Google 的发布节奏（跳过 3.5 Pro 直接推 3.6 Flash）也反映了行业从"堆能力"转向"提效率"的趋势。

## 核心概念

- **Flash / Flash-Lite / Pro 档位**：能力—成本阶梯；Flash 是 Google 定义的"主力模型"档。
- **Token 效率**：3.6 Flash 相比前代 token 用量最多降 17%，等效于变相降价。
- **高频小步迭代**：Flash 档发布节奏明显加快（3.6→3.7 Flash 仅间隔 3 周），编码/Agent 类基准跳升幅度大于通用对话类基准，引入价格再降——"高频迭代、Agent 场景优先、持续降价"是 Flash 档的固定打法。
- **受管控特化模型**：Flash Cyber 仅向政府与可信伙伴限量开放——"能力受管控发布"模式的样本。

## 相关技术

- [claude-models](/topics/claude-models)（竞品模型线）
- Vertex AI（企业托管渠道）

## 最佳实践

- 成本敏感场景把 Flash 档纳入基准测试对比，注意用 token 效率（而非单价）算实际成本。

## 推荐学习资料

- [Google 发布三个 Gemini 新模型（TechCrunch）](https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/)
- [Google AI Blog](https://blog.google/technology/ai/)

## Timeline

### [2026-08-17](/today/2026-08-17)

Google 正式关停 Gemini API 侧的 Imagen 4 三档生成端点（standard/fast/ultra），引导迁移至 Gemini 3.1 Flash Image；Vertex AI 侧已于 3 月弃用。`generate_images()` 方法整体消失，非无缝替换，需按 Gemini 原生图像 API 重写调用（详见 [diffusion-models](/topics/diffusion-models)）。

### [2026-08-13](/today/2026-08-13)

Gemini 3.7 Flash 发布，距 3.6 Flash 仅 3 周：编码/Agent 基准大幅跳升（AutomationBench 17.0%→30.4%、DeepSWE v1.1 49.0%→65.3%、WebDev Arena Elo 1538→1588），引入价较 3.6 Flash 发布价再降一半（$0.75/$3.75 每百万 token）；未发 3.5 Pro。

### [2026-07-21](/today/2026-07-21)

Gemini 3.6 Flash（主力档，token 用量最多降 17%、比 3.5 Flash 便宜）、3.5 Flash-Lite（同级最低成本）、3.5 Flash Cyber（安全漏洞特化，政府/可信伙伴限量）同日发布；未发 3.5 Pro。
