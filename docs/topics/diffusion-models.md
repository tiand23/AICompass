# Diffusion Models

## 简介

扩散模型（图像/视频生成的主流架构）及其推理优化：量化（4-bit 等）、蒸馏、缓存等降本增效技术，以及 Diffusers 等主流库的工程生态。

## 为什么重要

图像/视频生成的落地瓶颈主要在推理成本与显存门槛。量化推理进入主流库意味着消费级硬件可用性提升，直接改变生成 AI 应用的部署选型与单位成本。

## 核心概念

- **低比特量化推理**：4-bit 权重/激活量化在质量损失可控的前提下大幅降低显存与延迟（如 Nunchaku）。
- **Diffusers**：HuggingFace 的扩散模型标准库，新技术并入它即意味着"进入主流"。

## 相关技术

- [world-models](/topics/world-models)（生成式仿真同属生成建模）

## 最佳实践

- 部署图像生成服务先测 4-bit 量化版本的质量差异，多数场景可显著降本。

## 推荐学习资料

- [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers（HuggingFace Blog）](https://huggingface.co/blog)

## Timeline

### [2026-07-23](/today/2026-07-23)

Nunchaku 的 4-bit 量化推理并入 Diffusers，高效图像生成进入主流库。
