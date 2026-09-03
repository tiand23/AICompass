# 架构图

企业级 AI 系统的参考架构图集合——用 [draw.io](https://www.diagrams.net/) 手工绘制，源文件均可下载继续编辑。

| 图 | 说明 |
|---|---|
| [企业 AI 参考架构](/diagrams/enterprise-ai-architecture) | 知识库问答 / 设计书生成 / 代码生成三个场景的端到端架构，按日本企业的数据合规与稟議审批文化约束选型 |
| [资产结构化 · 方案一：通用多链路结构化](/diagrams/asset-structuring-01-general) | 全文 / 向量 / 知识图谱 / 图像向量四条链路并行摄取，不区分资产价值，适合资产异构度高的场景 |
| [资产结构化 · 方案二：全体图谱化](/diagrams/asset-structuring-02-graph) | 先设计本体（Ontology），所有抽取服从统一 schema，收敛成一张知识图谱 |
| [资产结构化 · 方案三：以 grep 为中心](/diagrams/asset-structuring-03-grep) | 精度来自工具不来自 AI，参照真实验证过的工程实现；含简明版与详细版 |
| [QA Agent · 方案一：混合检索](/diagrams/qa-01-hybrid-retrieval) | 全文 / 向量 / Graph / 图向量四路并行 + 统一表示化 + 重排序，带记忆层，广度优先 |
| [QA Agent · 方案二：Graph 查询为主](/diagrams/qa-02-graph-first) | 图谱多跳遍历为主线（带预算保护），可解释路径，非图谱问题降级兜底，带记忆层 |
| [QA Agent · 方案三：以 grep 为核心 + harness](/diagrams/qa-03-grep-harness) | LLM 只决定查什么，工具本身没有 AI；区分会话内记忆（已实现）与跨会话记忆（设计延伸） |
