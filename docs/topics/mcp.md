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

### 2026-07-28

建档。现状：MCP 已成工具接入的事实标准，主流客户端（Claude/ChatGPT/Cursor）与主流框架全面支持；"MCP+A2A 双层栈"成为企业 Agent 架构默认。
