# MCP

## 简介

MCP（Model Context Protocol）：Anthropic 提出的开放协议，标准化 AI 系统连接外部工具、数据库与数据源的方式——"AI 的 USB-C"。Claude、ChatGPT、Cursor 等主流产品均已支持，是当前事实上的工具接入标准。

## 为什么重要

在 MCP 之前，每个 AI 应用接每个工具都要写一遍胶水代码（M×N 问题）；MCP 把它变成 M+N——工具方写一次 MCP Server，所有支持 MCP 的客户端直接可用。它已是"双层协议栈"共识的下层：**MCP 管纵向接工具，A2A 管横向连 Agent**。

## 核心概念

- **Server / Client 架构**：工具方实现 MCP Server（暴露 tools、resources、prompts 三类原语），AI 应用作为 Client 连接。
- **传输**：本地 stdio 与远程 HTTP（可挂鉴权），远程 MCP 是企业集成的主形态。
- **工具发现与按需加载**：客户端可搜索/延迟加载工具 schema，缓解大工具集的上下文占用。
- **安全面**：MCP Server 是新的攻击面——工具描述注入、越权访问；企业部署要做 server 白名单与权限收敛。
- **溯源正确性是独立的核查维度**：MCP Agent 拼接多个工具调用结果作答时，传统事实核查方法（RAGAS faithfulness、MiniCheck 等）只判断"论断是否被证据池某处支持"，不判断"引用的具体来源是否就是那个支持它的来源"——这类"跨来源混淆"错误会被放过，需要能对齐"声称来源"与"实际路由来源"的专门核查（ProvenanceGuard 方案，详见 [agent-evaluation](/topics/agent-evaluation)）。

## 相关技术

- [a2a](/topics/a2a)（协议栈的横向层）
- [agent-skills](/topics/agent-skills)（MCP 接工具，skill 装用法）
- [agent-frameworks](/topics/agent-frameworks)（主流框架均已内建 MCP 支持）
- [agentic-safety](/topics/agentic-safety)（工具权限是 Agent 安全的核心）

## 最佳实践

- 企业内优先建"少而精"的 MCP Server：一个领域一个 server、权限按最小化收敛，胜过一口气暴露全部内部 API。
- 把 MCP Server 当生产服务对待：鉴权、审计日志、速率限制一个不能少。

## 推荐学习资料

- [MCP 官方文档](https://modelcontextprotocol.io/)
- [六大 Agent 协议指南（MindStudio）](https://www.mindstudio.ai/blog/six-agent-protocols-ai-builders-2026)

## Timeline

### [2026-10-09](/today/2026-10-09)

`rea`（MCP server + CLI）单日暴涨 +54,706 star，两日内累计约 18.6 万——把 Ghidra、IDA Pro 等专业逆向工程工具通过 MCP 接到编码 Agent 背后，分析原生二进制/Electron/.NET/APK/网站，无需源码即可解释功能实现并给出证据链与复现步骤。是 MCP 把"专业工具链"而非仅"数据源/API"接入 Agent 的一个高热度样本（详见 [agent-skills](/topics/agent-skills)）。

### [2026-09-29](/today/2026-09-29)

论文提出 ProvenanceGuard：消费带稳定工具 ID/来源 ID/原始输出的 MCP 调用记录，把答案拆解成原子论断，逐条路由到对应来源证据核查支持度，再比对"声称的来源"与"实际路由到的来源"是否一致，输出逐条判定与整体放行/拦截结论——第一个把"引用对不对源"系统化为独立核查维度的方案，MCP 普及会放大这个此前被忽视的盲区（详见 [agent-evaluation](/topics/agent-evaluation)）。

### [2026-08-29](/today/2026-08-29)

three.ws 开源：官方注册表含 72 个 MCP server，作为其"多端分发"能力的一环——让同一个 Agent 实例（含 3D 具身与链上支付身份）经 MCP 客户端直接接入，是 MCP 协议在分发层的一次大规模应用样本（详见 [agent-frameworks](/topics/agent-frameworks)）。

### [2026-08-03](/today/2026-08-03)

Agent-Reach 登上 Trending（单日 +659，累计 64.7k）：与 MCP 协议化互补的"CLI 能力层"路线——复用现成 CLI 工具 + 主方法/降级列表路由，解决平台反爬与接口变动下的工具可用性运维。

### 2026-07-28

建档。现状：MCP 已成工具接入的事实标准，主流客户端（Claude/ChatGPT/Cursor）与主流框架全面支持；"MCP+A2A 双层栈"成为企业 Agent 架构默认。
