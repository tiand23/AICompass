---
aside: false
---

# QA Agent · 方案四：质量闭环（会话检索状态 · 索引新鲜度 · 评估反馈）

本图不是第四种竞争方案，是 QA-1/2/3 任选一种检索架构后共用的质量保障层。补上三个共性缺口：多轮追问要不要复用上一轮检索结果、索引内容过期了怎么发现、回答质量差怎么被发现并改进——评估反馈闭环呼应[企业 AI 参考架构](/diagrams/enterprise-ai-architecture) Section C 里"自动诊断根因→人工复核队列，不自动应用"的治理链路。

其他方案：[方案一 · 混合检索](/diagrams/qa-01-hybrid-retrieval) · [方案二 · Graph 查询为主](/diagrams/qa-02-graph-first) · [方案三 · 以 grep 为核心 + harness](/diagrams/qa-03-grep-harness)

<div class="diagram-frame">
  <img src="/diagrams/qa-04-quality-loop.svg" alt="QA-4质量闭环架构图">
</div>

源文件：[qa-04-quality-loop.drawio](/diagrams/qa-04-quality-loop.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

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
