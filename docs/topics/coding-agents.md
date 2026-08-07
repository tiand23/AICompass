# Coding Agents

## 简介

终端/CLI 编码 Agent：以命令行为界面、能自主读改代码库、跑命令、迭代验证的编码工具品类。代表：Claude Code（Anthropic）、Codex CLI（OpenAI）、Gemini CLI（Google）、开源侧的 opencode、Aider，以及模型生态分化出的 DeepSeek-Reasonix（DeepSeek 原生）。与 IDE 内嵌类工具（Cursor、Windsurf）的区别是以对话驱动的自主执行为中心，而非编辑器内的补全与内联修改。

## 为什么重要

终端编码 Agent 是当前 AI 编码工具竞争的主形态，也是"harness 工程"的发源地——上下文管理、工具编排、权限控制、成本优化这些 Agent 工程的核心问题都在这个品类里被最先解决，其设计模式（skills、hooks、MCP、子代理）正外溢到通用 Agent 领域。选型上它与模型生态强绑定，工具的差异化越来越多来自 harness 而非模型本身。

## 核心概念

- **Harness（执行框架）**：模型之外的一切——工具集、上下文管理、权限模式、循环控制。同一模型配不同 harness 表现差异巨大，harness 质量正成为独立的竞争维度。
- **按模型生态分化**：Claude Code 之于 Claude、Codex CLI 之于 GPT、DeepSeek-Reasonix 之于 DeepSeek——针对特定模型的成本结构（如 prefix cache 稳定性）做 harness 级调优是新的差异化手段。
- **上下文与成本管理**：长会话的 token 成本靠缓存稳定性（避免破坏 prefix cache 的上下文变动）与过期内容修剪控制。
- **扩展机制**：MCP（接工具）、skills（装流程）、hooks（拦截审计）、插件/子进程——各家扩展模型趋同，正在形成品类级的事实约定。
- **架构取向**：从功能全家桶（Claude Code）到单二进制配置驱动的极简路线（DeepSeek-Reasonix 的 `reasonix.toml` 声明式配置）。
- **跨领域应用扩展**：编码 Agent 的"读改文件+跑命令+验证"这套通用能力正被复用到编码之外——video-use 用同一套 harness 剪视频，靠"先转写成低维代理表示、按需才升维到像素级"控制 token 成本，是多模态省 token 的通用模式。
- **跨平台 skill 分发**：compound-engineering-plugin 等方法论类 skill 包同时上架 Claude Code/Cursor/Codex/Cline 等多个市场，"一次编写、多工具复用"正成为 skill 分发的新常态。
- **代码图作为上下文优化层**：与其让 Agent 读整棵文件树，不如先建一张 Tree-sitter 代码图（函数/类/调用关系），Agent 经 MCP 按影响范围查图——是编码 Agent 品类里"上下文管理"这条核心问题的具体解法之一（详见 [ai-code-review](/topics/ai-code-review)）。

## 相关技术

- [agent-skills](/topics/agent-skills)（编码 Agent 是 skill 生态的主要宿主）
- [mcp](/topics/mcp)（工具扩展的标准协议层）
- [ai-code-review](/topics/ai-code-review)（评审是编码 Agent 的核心子场景）
- [agent-workspaces](/topics/agent-workspaces)（工作台形态：从代码库中心到任务中心）

## 最佳实践

- 选型跟着主力模型走：harness 对自家模型的调优（缓存、effort 档位、工具格式）很难跨模型复制。
- 长会话成本失控时先查上下文管理（缓存命中、工具输出堆积），再考虑换模型档位。

## 推荐学习资料

- [Claude Code 文档](https://docs.claude.com/en/docs/claude-code)
- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)

## Timeline

### [2026-08-07](/today/2026-08-07)

code-review-graph 登上 Trending（累计 2.9 万 star）：Tree-sitter 代码图 + MCP 查询接口，把"读整棵文件树"换成"按影响范围查结构化图"，实测节省约 65 倍 token——上下文管理这一编码 Agent 核心问题的又一具体解法（详见 [ai-code-review](/topics/ai-code-review)）。

### [2026-08-05](/today/2026-08-05)

video-use 登上 Trending（累计 19.5k）：用编码 Agent 剪视频，靠"转写代理视觉信息、按需才升维"控制 token 成本——编码 Agent 的通用能力向视频等非编码领域扩展。compound-engineering-plugin 同日登榜（累计 23.9k），方法论类 skill 跨平台分发成为新常态。

### [2026-08-04](/today/2026-08-04)

DeepSeek-Reasonix 连续两日 Trending（累计 29.9k star）：DeepSeek 原生终端编码 Agent——单静态 Go 二进制、`reasonix.toml` 配置驱动、围绕 prefix cache 调优长会话成本。终端编码 Agent 品类开始按模型生态分化。
