# Model Efficiency

## 简介

模型效率与小型化：用更少的算力跑出可用的智能——小语言模型（SLM）、知识蒸馏、低比特量化、高效架构（如 Liquid AI 的非 Transformer 系 LFM），以及 CPU/端侧推理。

## 为什么重要

前沿模型越来越大，但多数生产工作负载（分类、嵌入、抽取、路由）不需要前沿智能——需要的是**够用、便宜、快**。效率技术决定了 AI 应用的单位经济性和部署边界（能不能跑在 CPU、端侧、私有环境），是"生成 AI 规模化落地"的隐形地基。

## 核心概念

- **SLM（小语言模型）**：数亿~几十亿参数的专用模型，配合蒸馏在窄任务上逼近大模型质量。
- **知识蒸馏**：用大模型（教师）的输出训练小模型（学生），把能力压进小体积。
- **低比特量化**：4-bit 等精度压缩，显存与延迟大幅下降（参见扩散模型侧的 Nunchaku）。
- **高效架构**：Liquid AI 的 LFM 等非 Transformer 路线，目标是同等质量下数量级更低的推理成本。
- **CPU/端侧推理**：不依赖 GPU 的部署形态——embedding、编码器类负载已经实用化。

## 相关技术

- [diffusion-models](/topics/diffusion-models)（图像侧的量化推理）
- [rag](/topics/rag)（embedding 环节是效率技术的直接受益者）
- [claude-models](/topics/claude-models) / [gemini-models](/topics/gemini-models)（大模型侧的 token 效率同属此命题）

## 最佳实践

- 先问"这个环节需要多少智能"再选模型——路由、抽取、嵌入类环节用 SLM/编码器，把大模型预算留给真正难的推理。
- 量化/小型化后必须用自己的评估集回归测试，质量损失是任务相关的。

## 推荐学习资料

- [LFM2.5-Encoders: Fast Long-Context Inference on CPU（HuggingFace Blog）](https://huggingface.co/blog)

## Timeline

### [2026-07-28](/today/2026-07-28)

Liquid AI 发布 LFM2.5-Encoders：CPU 上的快速长上下文推理编码器——嵌入/检索类负载脱离 GPU 的实用化信号。
