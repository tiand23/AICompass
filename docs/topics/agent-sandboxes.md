# Agent Sandboxes

## 简介

Agent 沙箱：给 AI Agent 提供隔离执行环境（跑代码、装文件系统、访问网络）的基础设施层——本质是"Agent 的电脑"。代表产品：E2B、Daytona、Modal Sandboxes，以及云厂商自研的 Cloudflare computer。区别于 [agent-workspaces](/topics/agent-workspaces)（面向用户的桌面工作台产品），沙箱是更底层的开发者基础设施积木。

## 为什么重要

Agent 一旦要"自己跑代码验证结果"（而不只是生成代码建议），就必须有一个安全、可控、可复用的执行环境——不能直接扔进宿主机，也不能每次冷启动一个完整虚拟机。这一层的隔离强度、启动速度、状态持久化能力，直接决定了编码 Agent、深度研究 Agent 能跑多快、多安全、多便宜。它也是 [agentic-safety](/topics/agentic-safety) 里"沙箱逃逸"风险的直接承载对象——沙箱设计得好不好，就是安全边界画得准不准。

## 核心概念

- **存储层与隔离层解耦**：文件系统状态（如存 SQLite）与执行后端（容器/隔离 shell/隔离 JS 运行时）分离，同一份工作区状态可按需切换隔离强度，而非绑死一种沙箱形态（Cloudflare computer 的设计取向）。
- **隔离强度的光谱**：从"进程级隔离"（快、轻，隔离弱）到"微虚拟机/容器"（慢一些，隔离强，可跑完整 Linux 用户态与真实网络访问）——按任务风险选强度，而非一刀切用最重的方案。
- **冷启动与复用**：沙箱按需创建、用完销毁的成本很高；托管沙箱平台普遍在做"秒级冷启动"与"沙箱池复用"优化。
- **统一执行入口**：多种后端背后暴露单一调用接口（如 `workspace.runtime.exec()`），让上层 Agent 逻辑不必感知具体隔离实现。

## 相关技术

- [agentic-safety](/topics/agentic-safety)（沙箱逃逸是 Agent 安全的核心风险面）
- [coding-agents](/topics/coding-agents)（编码 Agent 是沙箱最大的消费方）
- [agent-workspaces](/topics/agent-workspaces)（面向用户的上层产品，常内置沙箱）
- [cloud-agent-platforms](/topics/cloud-agent-platforms)（企业托管平台通常自带沙箱能力）

## 最佳实践

- 按任务风险分级选隔离强度：只读分析用轻量隔离即可，涉及网络访问或系统调用的任务上重隔离。
- 沙箱默认断网或走白名单代理，凭证按会话最小化注入——和 Agent 权限管理同一套原则。
- 生产环境慎用"仅预览"阶段的沙箱产品，先确认其隔离边界经过安全审计。

## 推荐学习资料

- [cloudflare/computer](https://github.com/cloudflare/computer)

## Timeline

### [2026-08-06](/today/2026-08-06)

Cloudflare 开源 computer：运行在 Durable Object 内的虚拟文件系统 + 三种可插拔执行后端（Container/Isolate Shell/Isolate JavaScript），把存储层与隔离层解耦成独立可替换组件；目前仅预览阶段。Agent 沙箱作为独立基础设施层的建档起点。
