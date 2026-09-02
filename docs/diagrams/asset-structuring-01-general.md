---
aside: false
---

# 资产结构化 · 方案一：通用多链路结构化

企业 AI 参考架构图的 [Section 0 · 资产接入](/diagrams/enterprise-ai-architecture) 只讲了"文档需要结构化"这一个前提，没有展开具体怎么做——结构化的方案有很多种，这是其中一种典型思路：全文 / 向量 / 知识图谱 / 图像向量四条链路并行摄取，不区分资产的业务价值高低，AI（VLM）参与度较高。适合资产异构度高、不追求精确结构化的场景。

其他方案：[方案二 · 全体图谱化](/diagrams/asset-structuring-02-graph) · [方案三 · 以 grep 为中心](/diagrams/asset-structuring-03-grep)

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-01-general.svg" alt="方案一·通用多链路结构化架构图">
</div>

源文件：[asset-structuring-01-general.drawio](/diagrams/asset-structuring-01-general.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

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
