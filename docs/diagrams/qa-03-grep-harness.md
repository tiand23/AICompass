---
aside: false
---

# QA Agent · 方案三：以 grep 为核心 + harness（带记忆层）

精度优先：LLM 只负责决定查什么、什么时候够了，真正执行查询的是下面的工具（grep / 台账 / resolve 等），工具本身没有 AI。是[资产结构化 · 方案三](/diagrams/asset-structuring-03-grep)里 harness 循环机制的通用化版本，从资产结构化场景的一个子区块提升为独立的 QA agent 架构。

**记忆层特别说明**：图上区分了两层——**会话内记忆**（实线框，对应 DesignDocAsk 已验证实现的 `history` 机制，随会话结束而消失）和**跨会话持久记忆**（虚线框 + 赤陶红警示框，是在已验证实现基础上的设计延伸，DesignDocAsk 当前尚未实现）。两者不要混为一谈。

其他方案：[方案一 · 混合检索](/diagrams/qa-01-hybrid-retrieval) · [方案二 · Graph 查询为主](/diagrams/qa-02-graph-first) · [方案四 · 质量闭环](/diagrams/qa-04-quality-loop)

<div class="diagram-frame">
  <img src="/diagrams/qa-03-grep-harness.svg" alt="QA-3 grep+harness架构图">
</div>

源文件：[qa-03-grep-harness.drawio](/diagrams/qa-03-grep-harness.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

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
