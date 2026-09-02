---
aside: false
---

# 资产结构化 · 方案三：以 grep 为中心

精度来自工具，不来自 AI：表格类内容机械抽取（0 费用 · 100% 准确），AI 只做机械做不到的事——读图、读散文、写摘要。参照了一套真实验证过的工程实现（ExcelSheetToPngText → DesignDocIndexer → DesignDocAsk），适合结构化程度不一、需要精确影响调查（"改这个字段会影响哪里"）的场景。

其他方案：[方案一 · 通用多链路结构化](/diagrams/asset-structuring-01-general) · [方案二 · 全体图谱化](/diagrams/asset-structuring-02-graph)

## 简明版

只保留索引、台账、harness 工具调用循环三个核心概念，机械抽取的内部机制（两段推断、健康检查、corrections 表等）和完整的 10 个工具清单都略去了——快速理解核心思路看这版。

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-04-grep-simple.svg" alt="方案三简明版架构图">
</div>

源文件：[asset-structuring-04-grep-simple.drawio](/diagrams/asset-structuring-04-grep-simple.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

## 详细版

包含完整的实现细节，供技术团队内部参考。

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-03-grep.svg" alt="方案三详细版架构图">
</div>

源文件：[asset-structuring-03-grep.drawio](/diagrams/asset-structuring-03-grep.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

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
