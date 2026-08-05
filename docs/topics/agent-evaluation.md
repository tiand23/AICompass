# Agent Evaluation

## 简介

Agent 评估：衡量 Agent 在多步骤、有真实副作用的任务上表现的方法与基准。与传统模型基准（一问一答对分数）不同，Agent 评估要面对轨迹不唯一、结果多样、任务开放的难题，当前主流做法是"真实任务样本 + LLM-as-judge 比对基线"。

## 为什么重要

Agent 能不能上生产，最终由评估说了算——没有可复现的评估，改 prompt、换模型、调工具都是盲调。评估基准也是行业的"进度条"：如 ReviewBench 显示当前模型只能找回约 30% 的人工评审基线问题，说明代码评审 Agent 远未饱和，也量化了改进空间在哪。

## 核心概念

- **真实任务派生基准**：从生产数据（真实 PR 评审意见、真实工单）筛选出实质性样本构建任务，比合成任务更能反映实际水平（ReviewBench 的做法）。
- **覆盖率 vs 精确率**：Agent 评估的两个基本轴——找没找全（coverage）与报得准不准（precision），通常以 F1 为综合分；对评审类 Agent 尤其关键，误报直接消耗用户信任。
- **LLM-as-judge**：用模型比对 Agent 输出与人工基线是否命中同一问题（语义等价而非字面匹配），是开放式任务评分的主流方案，需注意 judge 本身的偏差。
- **策略是变量**：同一模型换评估目标明确的结构化 prompt，分数可显著提升——评估应把"模型 + 策略"作为整体对象，而非只测模型。

## 相关技术

- [ai-code-review](/topics/ai-code-review)（ReviewBench 的评测对象）
- [deep-agents](/topics/deep-agents)（长时程 Agent 的评估与恢复）
- LangSmith / Harbor 等评估工具链

## 最佳实践

- 评估集优先从自己的真实失败案例里建，通用基准分数与自己场景的相关性往往有限。
- 把 prompt/策略纳入被评估对象做 A/B，很多"模型不行"其实是策略不行。

## 推荐学习资料

- [Evaluating code review agents with ReviewBench](https://www.langchain.com/blog/evaluating-code-review-agents-with-reviewbench)

## Timeline

### [2026-08-04](/today/2026-08-04)

LangChain 提出语音 Agent 三轴评测框架：执行（工具调用/流程正确性）、结果（业务达成）、体验（延迟/打断/自然度）——语音场景把"体验"从软性感受变成了独立评测轴（详见 [voice-agents](/topics/voice-agents)）。

### [2026-07-31](/today/2026-07-31)

LangChain 发布 ReviewBench：59 个由 LangSmith 真实 PR 评审意见派生的任务，LLM-as-judge 比对基线，F1 计分。基础 prompt 下模型只找回约 30% 基线问题；结构化评审 prompt 显著提分。
