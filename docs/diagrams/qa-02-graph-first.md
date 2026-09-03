---
aside: false
---

# QA Agent · 方案二：Graph 查询为主（带记忆层）

关系/路径类问题走图谱多跳遍历（带预算保护，不无限遍历），属性/一般类问题降级走简化检索兜底。卖点是可解释性——能说清"沿着哪条关系链得出的结论"，适合强调"影响范围/关联关系"的场景，和方案一是互补关系。记忆层沿用企业 AI 参考架构 Section A 的四步循环。

其他方案：[方案一 · 混合检索](/diagrams/qa-01-hybrid-retrieval) · [方案三 · 以 grep 为核心 + harness](/diagrams/qa-03-grep-harness) · [方案四 · 质量闭环](/diagrams/qa-04-quality-loop)

<div class="diagram-frame">
  <img src="/diagrams/qa-02-graph-first.svg" alt="QA-2 Graph为主架构图">
</div>

源文件：[qa-02-graph-first.drawio](/diagrams/qa-02-graph-first.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

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
