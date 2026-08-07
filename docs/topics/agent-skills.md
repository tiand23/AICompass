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
| book-to-skill | 新晋（2026-07-29 上榜 Trending） | PDF → Claude Code skill 自动转换 |
| superpowers | 新晋（2026-07-30 上榜，08-05 回榜 +653） | Agentic skills 框架 + 开发方法论 |
| last30days-skill | 新晋（2026-07-31 上榜，连续在榜至 08-03） | 跨平台"最近 30 天"调研 skill |
| reverse-skill | 新晋（2026-08-01 上榜，08-04/05 连续两日 +2,300 上下高热） | 逆向/渗透/安全研究 skill 路由包 |
| addyosmani/agent-skills | 新晋（2026-08-06 上榜，累计 8.2 万 star） | 覆盖全开发生命周期的 24 个专业工程 skill |
| mattpocock/skills | 新晋（2026-08-07 上榜，累计约 20.7 万 star，目前 skill 生态单点最高热） | 从个人 `.agents` 目录提炼的工程纪律 skill（面谈式规划/TDD/架构评估） |

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

### [2026-08-07](/today/2026-08-07)

Matt Pocock 发布 skills（累计约 20.7 万 star，接棒成为生态单点最高热）：从个人 `.agents` 目录提炼，主打"面谈式规划"（先反问澄清意图再动手）等对齐类技能——继 Addy Osmani 之后一天内又一位知名独立工程师把私人经验提炼成高星 skill 包，"个人经验沉淀开源"正成为可复制模式，且开始触及"沟通对齐"这类比流程规范更难的问题。

### [2026-08-06](/today/2026-08-06)

Addy Osmani 发布 agent-skills（累计 8.2 万 star，目前生态单点最高热）：24 个覆盖全开发生命周期（Define/Plan/Build/Verify/Review/Ship）的专业工程 skill，专门列出并逐条反驳"Agent 可能用来偷懒跳步的借口"——skill 写作从"教 Agent 做什么"深化到"防 Agent 偷懒"，是内容质量的一次显著成熟。

### [2026-08-05](/today/2026-08-05)

compound-engineering-plugin 登上 Trending（累计 23.9k，单日 +40）：又一个方法论类 skill 包，且做到跨平台分发（Claude Code/Cursor/Codex/Cline/Devin CLI 同步上架）——分发正从"单工具专属"走向"一次编写、多工具复用"。

### [2026-08-03](/today/2026-08-03)

腾讯云 TencentDB-Agent-Memory 把"从 Agent 交互中提炼 skill、评审后团队共享"做进记忆管线（详见 [agent-memory](/topics/agent-memory)）——skill 的生产开始被基础设施化。同日 Stripe Kai 案例给出企业侧样本：1,000+ skills 由各业务团队联邦自治生产、动态加载，覆盖 500+ 内部工具——集中平台 + 联邦生产是 skill 规模化的可行分工。reverse-skill 持续加速（单日 +1,141）。

### [2026-08-01](/today/2026-08-01)

reverse-skill 上榜（单日 +612）：首个"skill router"形态——路由 + 按需工具链 + 自进化经验库，单领域 skill 库开始有内部结构。openwork 上榜（单日 +796）则把 skills/MCP 配置做成跨工具可移植资产（详见 [agent-workspaces](/topics/agent-workspaces)）。

### [2026-07-31](/today/2026-07-31)

last30days-skill 上榜（单日 +378）：跨 Reddit/X/YouTube/HN 的调研能力封装为 skill——一周内第三个，"定期调研综述"成为标准化能力。

### [2026-07-30](/today/2026-07-30)

superpowers 登上 Trending（单日 +616 star）：skills 框架 + 开发方法论——skill 从单点能力包升级为组织开发流程的一等单位。

### [2026-07-29](/today/2026-07-29)

book-to-skill 登上 Trending（单日 +423 star）：把 PDF 自动编译成 skill 包——"知识 → skill"工具链化的信号。

### 2026-07-28

建档。生态现状：开放标准发布约半年，GitHub 分发生态成型，头部仓库 star 达 20 万量级，awesome 清单成为主要发现入口。
