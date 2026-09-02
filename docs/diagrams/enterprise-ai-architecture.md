# 企业 AI 参考架构

知识库问答、设计书生成、代码生成三个场景，从资产接入、Agent 记忆、到共享基础设施的请求生命周期——一张图画到底。按日本企业的数据合规与稟議审批文化约束选型：数据落地地优先自建/日本区云，写操作强制人工审批（链长可配置），代码生成走 CLI harness 不做 IDE 内嵌。

<div class="diagram-frame">
  <img src="/diagrams/enterprise-ai-architecture-zh.svg" alt="企业 AI 参考架构图">
</div>

源文件：[enterprise-ai-architecture-zh.drawio](/diagrams/enterprise-ai-architecture-zh.drawio)（可在 [draw.io](https://app.diagrams.net/) 中打开继续编辑）

<style>
.diagram-frame {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  background: #ffffff;
  margin: 24px 0;
}
.diagram-frame img {
  display: block;
  width: 100%;
  min-width: 1400px;
  height: auto;
}
</style>
