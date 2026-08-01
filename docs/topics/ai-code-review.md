# AI Code Review

## 简介

用 LLM/Agent 做代码评审的工具与架构模式。当前主流设计是"确定性流水线 + LLM Agent"混合：能用规则判定的走规则，需要理解语义的交给模型。

## 为什么重要

代码评审是 AI 编码工具链中投入产出最直接的环节之一；大厂开源实现（如 alibaba/open-code-review）提供了可参考的工程化取舍——何时信规则、何时信模型、如何控制误报。

## 核心概念

- **混合架构**：确定性检查（lint、规则）与 LLM 语义评审的分工与编排。
- **误报控制**：评审工具的可用性取决于信噪比，常见手段是多验证器投票、可复现性检查。
- **能力基线**：ReviewBench（真实 PR 评审意见派生的基准）显示当前模型基础 prompt 下只找回约 30% 人工基线问题；结构化评审 prompt 可显著提分——策略与模型同样重要。

## 相关技术

- Claude Code / Codex 等 AI 编码工具（内置 review 能力）
- CI 集成（评审作为流水线环节）

## 最佳实践

- 引入 AI 评审先从"高置信度问题"开始（空指针、资源泄漏），逐步放开语义类检查，控制误报对信任的消耗。

## 推荐学习资料

- [alibaba/open-code-review](https://github.com/alibaba/open-code-review)
- [Evaluating code review agents with ReviewBench](https://www.langchain.com/blog/evaluating-code-review-agents-with-reviewbench)

## Timeline

### [2026-07-31](/today/2026-07-31)

LangChain 发布 ReviewBench：59 个真实 PR 评审意见派生任务评测代码评审 Agent，F1 计分。基础 prompt 只找回约 30% 基线问题（详见 [agent-evaluation](/topics/agent-evaluation)）。

### [2026-07-27](/today/2026-07-27)

alibaba/open-code-review 登上 GitHub Trending 日榜（单日 +980 star）：确定性流水线 + LLM Agent 的混合评审工具。
