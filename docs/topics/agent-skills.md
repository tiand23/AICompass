# Agent Skills

## 简介

Skills：可复用的 Agent 能力包——一段打包好的指令 + 资源，让 Agent 按需加载专项能力（如操作某类文档、执行某套流程）。Anthropic 2025 年 10 月随 Claude 推出，2025 年 12 月开放为开放标准后，GitHub 已成为数千个 skill 包的主要分发渠道。

## 为什么重要

Skills 把"教会 Agent 做一件事"从 prompt 工程变成了可分发、可版本化的软件工件——这是 Agent 能力生态化的关键一步，类似当年的包管理器之于代码复用。跟踪 skill 生态的热度，等于跟踪"大家都在让 Agent 干什么"。

## 核心概念

- **结构**：skill = 元数据（名称、触发描述）+ 指令文档 + 可选资源/脚本，Agent 按任务相关性自动加载。
- **与 MCP 的分工**：MCP 给 Agent **接工具**（能力的接口），Skill 给 Agent **装知识和流程**（能力的用法）——互补而非竞争。
- **分发生态**：GitHub 为主渠道，awesome 类清单（如 ComposioHQ/awesome-claude-skills）是入口，社区排行混合 star、互动热度与实测省时数据。

## 生态热度（GitHub 排行）

建档时（2026-07）高星代表仓库：

| 仓库 | Star | 定位 |
|---|---|---|
| ECC | ~226k | Claude Code 生态工具 |
| hermes-agent | ~209k | Agent 框架/工具 |
| cc-switch | ~113k | Claude Code 配置切换 |
| ui-ux-pro-max-skill | ~101k | UI/UX 专项 skill |
| awesome-claude-skills | ~67k | 精选清单（50+ skills） |

> 此排行由 `/update` 在 skill 类仓库登上 GitHub Trending 时自动更新。

## 相关技术

- [mcp](/topics/mcp)（工具接入层，与 skill 互补）
- [agent-frameworks](/topics/agent-frameworks)
- [ai-code-review](/topics/ai-code-review)（review 类是最常见的 skill 场景之一）

## 最佳实践

- 写 skill 的核心是**触发描述**——Agent 靠它决定何时加载；描述含混的 skill 等于不存在。
- 团队内先从"重复给 AI 解释的流程"里挑素材做 skill，收益最直接。

## 推荐学习资料

- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)
- [Claude Code 高星仓库排行](https://githublb.vercel.app/topic/claude-code)

## Timeline

### 2026-07-28

建档。生态现状：开放标准发布约半年，GitHub 分发生态成型，头部仓库 star 达 20 万量级，awesome 清单成为主要发现入口。
