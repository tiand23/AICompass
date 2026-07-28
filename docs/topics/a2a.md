# A2A

## 简介

A2A（Agent-to-Agent Protocol）：Google 主导的 Agent 间协作开放协议——标准化消息格式、任务协调与能力发现，让独立开发的 Agent 能互相委托任务。已获 50+ 厂商支持（Salesforce、MongoDB、ServiceNow 等），并有处理 Agent 间支付的扩展 **AP2**（Agent Payments Protocol）。

## 为什么重要

单 Agent 撑不起复杂业务，多 Agent 协作需要横向标准——A2A 是这一层的领跑者。它与 MCP 构成的"双层协议栈"（MCP 纵向接工具、A2A 横向连 Agent）正在成为企业部署的架构默认；押注协议就是押注生态互操作的未来。

## 核心概念

- **Agent Card / 能力发现**：Agent 以标准格式声明自己能干什么，其他 Agent 据此发现并委托。
- **任务生命周期**：跨 Agent 任务的提交、进行、产物交付有统一状态语义，支持长任务。
- **与 MCP 互补而非竞争**：单个 Agent 用 MCP 调工具，多个 Agent 用 A2A 互相协调——生产系统通常两者同时跑。
- **AP2 支付扩展**：Agent 间安全交易的协议层，Agent 经济的基础设施雏形。

## 相关技术

- [mcp](/topics/mcp)（协议栈的纵向层）
- [cloud-agent-platforms](/topics/cloud-agent-platforms)（Google 平台原生支持 A2A）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)（跨组织 Agent 协作的企业场景）

## 最佳实践

- 组织内多 Agent 先用框架内建的编排（同进程/同平台），跨组织、跨厂商边界才是 A2A 的真正用武之地——别为协议而协议。

## 推荐学习资料

- [MCP vs A2A 对比指南](https://pickaxe.co/post/mcp-vs-a2a-protocol)
- [Agent 互操作协议 2026：MCP、A2A、ACP 与收敛之路（Zylos Research）](https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence/)

## Timeline

### 2026-07-28

建档。现状：50+ 厂商站队，AP2 支付扩展发布，与 MCP 的双层栈成为架构共识；协议收敛话题（A2A/ACP 等）是 2026 年的进行时。
