# Agent Workspaces

## 简介

Agent 工作台：以"给 Agent 一个工作环境"为中心的桌面/本地应用形态——用户在一个界面里给 Agent 派任务、连服务、装能力（skills/MCP），Agent 在受控环境中长时间自主工作。代表产品：Anthropic 的 Claude Cowork（面向知识工作）、OpenAI 的 Codex app，以及开源侧的 openwork（基于 opencode）。

## 为什么重要

Agent 工作台是"Chat 界面"之后的下一代交互形态：从一问一答变成"布置工作—收验收成果"。开源替代品（openwork 单日 +796 star 登上 Trending）的迅速出现说明这一形态已被验证；而 openwork 把"同一套 skills、MCP、连接服务跨工具/跨团队复用"作为核心卖点，指出了多工具并存时代的真实痛点——能力配置正从单一工具的私有资产变成可移植资产。

## 核心概念

- **工作台 vs 编码工具**：编码工具（Claude Code/Cursor）以代码库为中心；工作台以任务和连接的服务为中心，覆盖非编码知识工作。
- **独立浏览器 Agent 产品的存续风险**：OpenAI 的 Atlas（独立浏览器 + Agent 模式）上线不到一年即停运，能力并入 ChatGPT/Codex——把 Agent 能力嵌进已有主力入口，比做一个独立新形态产品更容易验证价值，这类"新形态先试后并"是当前平台方的常见路径。
- **能力配置的可移植性**：skills、MCP 服务器、账号连接作为一层独立资产，通过统一接入点（如 openwork MCP）在多个 Agent 客户端间共享。
- **组织级管控面**：团队维度的推理供给、访问管理、skill 发布与策略控制（openwork Den），与企业 Agent 平台的管控面思路同源。
- **从单 Agent 工作台到多 Agent 团队管理**：openwork 等解决"一个人配一个 Agent 工作环境"，Paperclip 代表的新一层解决"一个团队配一整支 Agent 队伍"——工单分派、组织架构、预算、审批流，心智模型从"给 Agent 一个工作环境"升级为"像管理员工一样管理一群 Agent"。

## 相关技术

- [agent-skills](/topics/agent-skills)（工作台装载的能力单元）
- [mcp](/topics/mcp)（连接服务的协议层）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)（组织级管控面的企业侧对应物）

## 最佳实践

- 选型时把"能力配置能否带走"作为一等标准——skills/MCP 配置锁死在单一工具里的迁移成本会随使用深度增长。

## 推荐学习资料

- [different-ai/openwork](https://github.com/different-ai/openwork)

## Timeline

### [2026-08-10](/today/2026-08-10)

Paperclip 登场（累计 7.62 万 star）：开源的"Agent 团队人力管理"产品——工单追踪、组织架构、预算强制、治理审批、审计日志；不做框架/编排，只做管理面。工作台形态从"一人一 Agent"扩展到"团队管一支 Agent 队伍"（详见 [enterprise-ai-agents](/topics/enterprise-ai-agents)）。

### [2026-08-09](/today/2026-08-09)

OpenAI 停运独立浏览器产品 Atlas，浏览器 Agent 能力并入 ChatGPT 桌面应用与 Codex——"独立新形态产品"路线在不到一年内让位于"嵌入既有主力产品"（详见 [openai-models](/topics/openai-models)）。

### [2026-08-01](/today/2026-08-01)

openwork 登上 GitHub Trending（单日 +796，累计 19.5k star）：Claude Cowork 的开源替代，基于 opencode；一个 MCP 接入任意客户端复用同一套 skills/MCP/连接，配组织级管控面 Den。
