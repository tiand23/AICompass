---
aside: false
---

# 资产结构化 · 方案二：全体图谱化（Ontology 驱动）

先设计本体（Ontology），所有抽取都服从这个统一 schema，最终收敛成一张知识图谱——不像方案一那样并行输出多种独立索引。前置本体设计投入较高，适合资产结构相对规整、业务概念可预先建模的场景。

其他方案：[方案一 · 通用多链路结构化](/diagrams/asset-structuring-01-general) · [方案三 · 以 grep 为中心](/diagrams/asset-structuring-03-grep)

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-02-graph.svg" alt="方案二·全体图谱化架构图">
</div>

源文件：[asset-structuring-02-graph.drawio](/diagrams/asset-structuring-02-graph.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

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
