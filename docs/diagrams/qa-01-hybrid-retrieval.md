---
aside: false
---

# QA Agent · 方案一：混合检索（带记忆层）

四路并行检索（全文 / 向量 / Graph / 图向量）+ 统一表示化 + 重排序的标准 RAG 架构，广度优先，适合不确定该走哪条检索路径的场景。记忆层沿用企业 AI 参考架构 Section A 的四步循环（查询记忆库 → 分层校准 → 任务执行 → 写入声明），保证跨会话的上下文连续性。

其他方案：[方案二 · Graph 查询为主](/diagrams/qa-02-graph-first) · [方案三 · 以 grep 为核心 + harness](/diagrams/qa-03-grep-harness)

<div class="diagram-frame">
  <img src="/diagrams/qa-01-hybrid-retrieval.svg" alt="QA-1混合检索架构图">
</div>

源文件：[qa-01-hybrid-retrieval.drawio](/diagrams/qa-01-hybrid-retrieval.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

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
