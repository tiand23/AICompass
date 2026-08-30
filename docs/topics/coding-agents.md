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
- **RLM 路线**：把上下文当变量、工具当函数调用，在持久化编程环境（如 IPython REPL）里运行 Agent，而非常规对话式工具调用循环——prime-agent 代表的这条路线是"harness 形态"的另一种结构性选择，不只是全家桶 vs 极简配置的光谱，而是完全不同的执行范式。
- **本地微调模型直连编码 Agent**：Unsloth Desktop 的 `unsloth start` 命令把本地训练/微调出的模型直接接给 Claude Code、Codex 使用——"本地模型生态"与"编码 Agent 生态"开始打通成一条流水线，而不是两条平行赛道（详见 [model-efficiency](/topics/model-efficiency)）。
- **执行环境本地化 vs 完全本地化**：Claude Code 自托管 runner 只把"执行"放进客户网络（源码检出、构建产物留在本地），推理请求仍需发给云端模型——是比"全托管"和"完全自建"更细粒度的第三条路，精确对应"源码不能出内网、但可接受 prompt 经供应商推理"这条常见合规红线。
- **会话间原生协调**：Claude Code 支持独立会话通过 `ListAgents`/`SendMessage` 互相发现、交换纯文本消息（不含历史与文件），把单会话工具变成小型分布式系统——多 Agent 协调能力开始做进编码 Agent 产品自身，而不必全靠外部编排框架或外部状态层。
- **Agent 正成为软件生态的新访问主体**：HuggingFace 数据显示 2026 年 Agent 首次超过人类成为 Hub 主要流量来源，7 月 Claude Code 单一工具占比达 44.4%（但波动剧烈，尚无稳定霸主），另有近 25% 流量来自未注册身份的 Agent——编码 Agent 的影响力已经从"开发者用的工具"变成"平台流量的主要来源之一"，度量生态热度需要把 Agent 流量本身当作独立变量看待（详见 [model-efficiency](/topics/model-efficiency)）。
- **大规模真实任务复现作为能力试金石**：ICML 2026 可复现性黑客松让编码 Agent 独立复现 2,226 篇论文的核心主张，51% 的论文至少一条主张验证通过、23% 被证伪或存疑——这是编码 Agent"读文档→写代码→跑实验→下结论"这条完整能力链条迄今最大规模的真实世界压力测试，也印证了"人在回路"仍是当前阶段获得可靠结果的必要条件，而非可选项（详见 [agent-evaluation](/topics/agent-evaluation)）。
- **记忆跨厂商交接**：多工具并用成为编码 Agent 使用常态后（此前 holaOS 也体现同一趋势），记忆本身不该被锁死在单一供应商的 harness 里——ai-memory 为不同 Agent 各自适配 hook schema、但共用同一记忆服务，实现"退出 Claude Code、换 Codex 继续、不必重讲架构"的无缝交接（详见 [agent-memory](/topics/agent-memory)）。

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

### [2026-08-29](/today/2026-08-29)

OpenAI 终止与 Cursor 的合作：Cursor 于 8 月 14 日被 SpaceX 以股票方式收购完成后，OpenAI 提出 11 月 12 日为 Cursor 失去其模型直接访问权的日期（合同允许的最长通知期），官方归因于"对马斯克旗下公司此前违反合同经历的不信任"；Cursor 称 OpenAI 模型仅占其约 5% 流量，Anthropic 已承诺补位。工具层稳定性开始受股权归属与上游模型厂商关系影响，是编码 Agent 品类里少见的供应链风险案例（详见 [openai-models](/topics/openai-models)）。

### [2026-08-27](/today/2026-08-27)（补漏）

WIRED 在 Codex CLI 公开代码中发现未正式发布的"Persistent mode"：允许 Agent 使用远超现有模式的算力/token/时间跨会话持续工作，完成请求后自主创建后续任务并利用"对用户的了解"决定下一步；OpenAI 确认在测试但无近期发布计划。与 Claude Code 跨会话消息、loopx 外部状态内核并列，是"Agent 跨会话持久化"这条线在 OpenAI 一侧的信号（详见 [deep-agents](/topics/deep-agents)）。

### [2026-08-18](/today/2026-08-18)

ai-memory 开源：编码 Agent 长期记忆层，支持跨厂商无缝交接任务（Claude Code 中途退出、同目录换 Codex 继续不必重讲架构）；为不同 Agent 分别适配 hook schema 但共用同一记忆服务，另提供零 LLM 模式（详见 [agent-memory](/topics/agent-memory)）。

### [2026-08-14](/today/2026-08-14)

HuggingFace《2026 夏季开源模型现状》报告：Agent 首次超过人类成为 HuggingFace Hub 主要流量来源，7 月 Claude Code 单工具占比 44.4%，另有近 25% 流量来自未注册身份的 Agent——采用速度已超过追踪基础设施建设速度（详见 [model-efficiency](/topics/model-efficiency)）。

### [2026-08-13](/today/2026-08-13)

HuggingFace 公布 ICML 2026 可复现性黑客松结果：1,221 名参与者用 Claude Code、Codex、Cursor 等编码 Agent 复现 2,226 篇论文（占会议录用总量 34%），51% 的论文至少一条主张验证通过、23% 被证伪或存疑，266 篇全部主张验证通过；结论——最可靠结果来自人在回路而非完全放手（详见 [agent-evaluation](/topics/agent-evaluation)）。

### [2026-08-12](/today/2026-08-12)

Unsloth 发布桌面客户端：本地训练/推理图形化，`unsloth start` 命令把本地微调模型直接接给 Claude Code、Codex 用——本地模型生态与编码 Agent 生态开始打通（详见 [model-efficiency](/topics/model-efficiency)）。

### [2026-08-09](/today/2026-08-09)

code-graph-rag 登上 Trending（累计 2.7k star）：图数据库（Memgraph）版本的代码知识图谱，AI 生成 Cypher 查询做自然语言代码问答——与 code-review-graph 的本地 SQLite 路线并存，代码图子领域出现明确的架构分野（详见 [ai-code-review](/topics/ai-code-review)）。

### [2026-08-08](/today/2026-08-08)

Prime Intellect 发布 prime-agent（累计 6.5k star）：RLM 思路——上下文作变量、工具作函数调用，跑在持久化 Python REPL 里；`/refine` 复盘轨迹并写回 harness 状态实现内置式自我改进。编码 Agent 的执行范式出现结构性分支（详见 [deep-agents](/topics/deep-agents)）。

### [2026-08-07](/today/2026-08-07)

code-review-graph 登上 Trending（累计 2.9 万 star）：Tree-sitter 代码图 + MCP 查询接口，把"读整棵文件树"换成"按影响范围查结构化图"，实测节省约 65 倍 token——上下文管理这一编码 Agent 核心问题的又一具体解法（详见 [ai-code-review](/topics/ai-code-review)）。

Claude Code v2.1.224（补漏）：新增跨会话通信——独立会话通过 `ListAgents`/`SendMessage` 互相发现并交换纯文本消息（不含对话历史或文件），同机器走 Unix domain socket、跨机器经 Remote Control 路由；次日 2.1.225 放宽为可按名字主动发起对话。仅 macOS/Linux。与前一天的自托管 runner 互补：一个解决执行放在哪，一个解决多会话怎么协调（详见 [deep-agents](/topics/deep-agents)）。

### [2026-08-06](/today/2026-08-06)（补漏）

Claude Code 上线自托管环境公测：Team/Enterprise 组织可把会话跑在自己网络内，长驻 runner 进程接单派生独立 Claude Code 进程，支持固定/按需自动扩缩容两种模式；源码检出、构建产物留在客户基础设施，但对话内容仍需传给 Anthropic 推理——执行本地化而非完全本地化。默认关闭，需自建 runner 镜像与编排（详见 [enterprise-ai-agents](/topics/enterprise-ai-agents)）。

### [2026-08-05](/today/2026-08-05)

video-use 登上 Trending（累计 19.5k）：用编码 Agent 剪视频，靠"转写代理视觉信息、按需才升维"控制 token 成本——编码 Agent 的通用能力向视频等非编码领域扩展。compound-engineering-plugin 同日登榜（累计 23.9k），方法论类 skill 跨平台分发成为新常态。

### [2026-08-04](/today/2026-08-04)

DeepSeek-Reasonix 连续两日 Trending（累计 29.9k star）：DeepSeek 原生终端编码 Agent——单静态 Go 二进制、`reasonix.toml` 配置驱动、围绕 prefix cache 调优长会话成本。终端编码 Agent 品类开始按模型生态分化。
