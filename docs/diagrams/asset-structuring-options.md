---
aside: false
---

# 资产结构化 · 三种方案对比

企业 AI 参考架构图的 [Section 0 · 资产接入](/diagrams/enterprise-ai-architecture) 只讲了"文档需要结构化"这一个前提，没有展开具体怎么做——结构化的方案有很多种，向量化只是其中一种。这里对比三种典型设计思路，帮助按资产特点选型。

| 方案 | 核心思路 | 适合场景 |
|---|---|---|
| 一 · 通用多链路结构化 | 全文 / 向量 / 知识图谱 / 图像向量四条链路并行摄取，不区分资产价值 | 资产异构度高、不追求精确结构化 |
| 二 · 全体图谱化 | 先设计本体（Ontology），所有抽取服从统一 schema，收敛成一张知识图谱 | 资产结构相对规整、业务概念可预先建模 |
| 三 · 以 grep 为中心 | 精度来自工具不来自 AI：表格类内容机械抽取（0费用·100%准确），AI 只做机械做不到的事；参照了一套真实验证过的工程实现 | 结构化程度不一、需要精确影响调查（"改这个字段会影响哪里"） |

## 方案一 · 通用多链路结构化

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-01-general.svg" alt="方案一·通用多链路结构化架构图">
</div>

源文件：[asset-structuring-01-general.drawio](/diagrams/asset-structuring-01-general.drawio)

## 方案二 · 全体图谱化（Ontology 驱动）

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-02-graph.svg" alt="方案二·全体图谱化架构图">
</div>

源文件：[asset-structuring-02-graph.drawio](/diagrams/asset-structuring-02-graph.drawio)

## 方案三 · 以 grep 为中心（机械抽取优先）

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-03-grep.svg" alt="方案三·以grep为中心架构图">
</div>

源文件：[asset-structuring-03-grep.drawio](/diagrams/asset-structuring-03-grep.drawio)

### 方案三 · 简明版（面向客户）

详细版信息密度较高，适合技术团队内部参考；给客户讲核心思路时，用这版更合适——只保留索引、台账、harness 工具调用循环三个核心概念，机械抽取的内部机制（两段推断、健康检查、corrections 表等）和完整的 10 个工具清单都略去了，实现细节见上面的详细版。

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-04-grep-simple.svg" alt="方案三简明版架构图">
</div>

源文件：[asset-structuring-04-grep-simple.drawio](/diagrams/asset-structuring-04-grep-simple.drawio)

<style>
.diagram-frame {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  background: #ffffff;
  margin: 24px -4rem;
}
.diagram-frame img {
  display: block;
  width: 100%;
  height: auto;
}
@media (max-width: 960px) {
  .diagram-frame {
    margin: 24px 0;
  }
}
</style>
