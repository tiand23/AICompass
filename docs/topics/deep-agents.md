# Deep Agents

## 简介

Deep Agents 是 LangChain 提出的概念与产品方向：能执行长时程、多步骤自主任务的 Agent——有规划、子任务分解、持久记忆与错误恢复能力，区别于单轮工具调用式的"浅"Agent。

## 为什么重要

长时程自主性是 Agent 能力竞争的当前前沿，也是最难评估的部分：单轮基准测不出规划、工具使用与错误恢复。头部框架方围绕它构建概念、产品与评估方法论，值得跟踪其演进来校准自己的 Agent 架构。

## 核心概念

- **长时程（long-horizon）任务**：跨多步骤、多工具、长时间的目标达成。
- **评估难题**：过程正确性 vs 结果正确性、中途恢复能力的度量。
- **Middleware 组合**：文件系统（跨轮持久引用）、沙箱执行（隔离跑代码）、上下文摘要（长会话控成本）——Stripe Kai 案例验证的长会话 Agent 标配三件套。
- **分层架构**：开源 harness（Deep Agents）→ 企业专属 harness → 配置层（定制 Agent 实例）——通用底座与企业定制的分工模式。
- **读写权限分离**：只读的诊断/分析可以完全自主，涉及副作用的写操作必须过人工审批（HITL）——Kubernetes SRE Agent 案例的核心设计铁律，审批范围还要收窄到"人能看懂"，而非笼统放行整类操作。
- **外部状态内核**：跨会话的目标、待办、证据、责任交接不适合塞进单次对话上下文——loopx 这类 Agent-agnostic 的外部控制平面正在成为长时程多 Agent 协作的独立一层，而非某个框架的内置功能。
- **托管化**：开源框架之上出现托管运行时——LangSmith Managed Deep Agents（2026-08 公测）把持久化执行、沙箱、记忆、可观测打包，`mda deploy` 一键上线，是"开源框架 + 托管运行时"分层模式在 Deep Agents 上的落地。
- **自我改进循环（内置 vs 外部）**：prime-agent 的 `/refine` 把"复盘轨迹→更新经验"做成 Agent 自身内置能力（写回 harness 状态），是相对 loopx 外部状态层的另一种实现路径——同一个"让运行留下可复用沉淀"的目标，可以做在 Agent 内部，也可以做成外部工具。
- **模型路由降本**：长时程任务里多数调用不需要前沿模型——LangChain 用 Switchyard 实测 Deep Agents 评估集，93% 调用可路由到 30B 级模型，仅 7% 需要升级到前沿模型，整体成本降 74%（详见 [model-efficiency](/topics/model-efficiency)）。
- **能力来自计算环境而非工具数量**：monday.com Sidekick 案例显示，塞进 200+ 预置工具会造成上下文污染、模型变笨变贵；给 Agent 一个持久、隔离、可执行代码的沙箱环境（而非穷举工具清单）才是能力上限所在（详见 [agent-sandboxes](/topics/agent-sandboxes)）。
- **强制人工检查点的垂直全流程编排**：OpenMontage 把"调研→提案→脚本→分镜→素材→剪辑→合成"标准化为长时程多阶段管线，每个关键节点强制人工审批+决策审计轨迹——长时程 Agent"自主执行但保持人工检查点"模式在具体垂直领域（视频制作）的完整工程实现。
- **上下文传递模式（Forked vs Isolated Subagents）**：LangChain 把 Supervisor/子 Agent 架构里"子 Agent 该拿多少上下文"显式区分为两种模式——Isolated（默认，子 Agent 只拿任务描述，空白上下文起步，适合并行/独立验证）与 Forked（`'mode': 'fork'`，子 Agent 继承主管当前状态与对话历史，靠 prompt 缓存复用，避免重复取证）；选型准则是 Worker/Memory Agent 用 fork，Verifier/Researcher 用 isolated。
- **多路径推理应对不确定性**：Microsoft Discovery Engine（内核 CLIO）代表的另一种长时程模式——不是单线程规划-执行-恢复，而是多条独立推理路径并行探索、互相比对，自主决定继续探索、切换策略、换模型或引入人类专家；在科研发现这类高不确定性垂直任务上给出了可比较的基准分数（详见 [enterprise-ai-agents](/topics/enterprise-ai-agents)）。
- **托管凭证与按调用者身份**：LangSmith Managed Deep Agents 的 Connections 把凭证管理独立成两条轴——归属（Agent 共享 / 按调用者各自）与类型（静态密钥 / OAuth）——解决托管 Agent 密钥轮换与"操作应带真实调用者身份而非笼统机器人身份"这两个问题，免去手工搭 OAuth 回调管道。
- **工具披露与 skill 披露绑定**：企业 skill 库规模涨到数千条后暴露的问题——工具与 skill 披露分离导致 Agent 可能绕过指令直接用工具；`include_tools` 让工具在 skill 元数据里绑定，对上下文保持隐藏直到 Agent 读取该 skill 才作为新系统消息出现（支持中途加工具的模型可借此保持 prompt 缓存不失效），`pinned_skills` 让应用在模型调用前把指定 skill 完整指令直接预加载（省掉"先发现再加载"的一轮），调用时把 `skills_metadata` 设为 `None` 让长时程线程不重启也能感知新增/修改的 skill——三项改动都不破坏"渐进式披露"这一核心设计原则。
- **按运行时上下文动态配置的部署**：同一个托管部署可以依据运行时上下文（如触发它的 Slack 频道）选择不同的模型/指令/skills/工具/沙箱，不必为每种场景复制粘贴几乎一样的 Agent；配合聊天触发的定时任务（周期任务绑定 prompt+cron，一次性任务在指定时间运行并回复原线程），把"配置 Agent"和"调度 Agent"都变成运行时可声明的参数而非部署时固定的常量。

## 相关技术

- LangGraph（LangChain 的 Agent 编排框架）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)

## 最佳实践

- 评估自建长时程 Agent 时参考 LangChain 的基准方法论，别只测端到端成功率。

## 推荐学习资料

- [How We Benchmark Deep Agents（LangChain Blog）](https://www.langchain.com/blog/)

## Timeline

### [2026-10-13](/today/2026-10-13)

LangChain 发布 ScaleDown 与 Deep Agents 集成：用"约束解码模型"（CDM，专精窄任务的小模型）接管长会话上下文管理里该用前沿 LLM 做又慢又贵的结构性决策——`ScaledownSummarizationMiddleware` 替换内置摘要中间件压缩旧对话历史（成本比 GPT 系模型低 41 倍）、工具结果压缩中间件在 Agent 看到大型工具输出前先提取相关片段（压缩约 90% 上下文）、精确抽取结构化字段（订单号/邮箱等不改写直接拷贝）、分类打标签+置信度+理由（可用于检测行为漂移/路由）；官方称这类窄任务模型比前沿模型快 200 倍、便宜 467 倍。是"垂直场景不需要前沿智能"效率哲学在"长会话上下文管理"这个具体子问题上的专用化落地（详见 [model-efficiency](/topics/model-efficiency)）。

### [2026-10-09](/today/2026-10-09)

Claude Managed Agents 公测 Dynamic Workflows：面向"处理大量相似条目"的任务，Agent 本身可以编写一个工作流程序——分阶段调度多个 Agent 并行工作、合并结果，工作流在服务端作为后台 workflow run 执行并可通过事件流跟踪。是托管运行时从"单 Agent 配工具"向"Agent 自己生成并托管执行多 Agent 编排程序"演进的一步——把编排逻辑的生成也下放给了 Agent 本身，而不只是执行环境（详见 [claude-models](/topics/claude-models)）。

### [2026-10-07](/today/2026-10-07)

LangSmith Managed Deep Agents v0.9 公测：新增 Schedules SDK（聊天创建/修改/查看/删除定时任务，周期任务绑定 prompt+cron，一次性任务指定时间运行并回复原线程）、按次运行配置（同一部署依据运行时上下文选择不同模型/指令/skills/工具/沙箱）、可配置的 Slack 确认反应。同日 LangChain 发文《Revamping Skills in Deep Agents》重构 Skills 机制，解决企业 skill 库规模涨到数千条后暴露的三个问题（工具披露与 skill 披露脱节、显式请求仍要多一轮加载、长时程线程感知不到 skill 更新），具体改动见上方核心概念。紧接两周前的 v0.8（认证/记忆/消息渠道）与三周前的 Connections，托管运行时能力扩充节奏明显加快（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

### [2026-09-24](/today/2026-09-24)

LangSmith Managed Deep Agents v0.8 发布：新增身份认证、记忆管理、消息渠道（Channels）能力，紧接 09-09 Connections 托管凭证之后两周内又一次托管运行时能力扩充，与同日发布的 Engine v2（红队测试）、Trajectories（可读会话视图）、Fine-Tuning、Custom Apps 共同构成一次打包的 LangSmith 平台更新周（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

### [2026-09-17](/today/2026-09-17)

LangChain 发布 Deep Life Sci：基于 Deep Agents harness 的开源临床/实验室科研 Agent，接入 60 万+ ClinicalTrials.gov 试验、2900 万篇 PubMed 摘要、1200 万篇 PubMed Central 全文，支持 PDF/图像/表格/RIS/SMILES/FASTA/RNA-seq/蛋白质组学等输入，沙箱化子 Agent 分工检索/审阅/分析，LangSmith 记录检索/代码执行/文档审阅/子 Agent 路由到最终答案的全链路供调试审计；因开源可接入私有数据、换模型、加自定义护栏。同日 Included Health 发布用 Deep Agents + LangGraph 构建联邦医疗导航 Agent 的案例，叠加 09-14 Madrigal Pharmaceuticals/Abridge/Vizient 规模化经验分享——生命科学/医疗正接棒成为继客服、企业内部工具之后的下一个重点垂直场景，延续"开源通用 harness + 垂直深度定制"模式（继 OpenMontage 视频制作、Harvey LAB 法律之后）（详见 [enterprise-ai-agents](/topics/enterprise-ai-agents)）。

### [2026-09-09](/today/2026-09-09)

LangChain 发布 Connections：LangSmith Managed Deep Agents 新增托管凭证系统，命名凭证存在工作区（不进代码/`.env`），运行时按 `connections.get("<slug>", {"type": "agent"|"user"})` 取用；归属（Agent 共享 vs 按调用者）与凭证类型（静态密钥 vs OAuth）两条独立维度，免去手工搭建 OAuth 回调/令牌存储/刷新逻辑——解决密钥轮换与"操作应带真实调用者身份"两个托管 Agent 的真实痛点。

### [2026-09-08](/today/2026-09-08)

LangChain 为 Deep Agents 框架显式区分两种多 Agent 上下文传递模式：Isolated（默认，子 Agent 空白上下文起步，适合并行验证/独立调研）与新增的 Forked（`'mode': 'fork'`，继承主管当前状态与对话历史，靠 prompt 缓存复用，避免子 Agent 重复取证），给出按角色选型准则（Worker/Memory 用 fork，Verifier/Researcher 用 isolated）。同日 Microsoft 发布 Discovery Engine（内核 CLIO）：多条独立推理路径并行探索、互相比对收敛为单一证据支撑结果，可自主决定继续探索/切换策略/换模型/引入人类专家，在 "Agent's Last Exam" 基准取得健康 61.6%、物理科学 75.2%、生命科学 64.6%，称已协助发现一种新型有机氧化还原液流电池——长时程 Agent 应对不确定性的另一种模式（多路径探索 vs 单线程规划-恢复），落地在科研发现这一垂直场景（详见 [enterprise-ai-agents](/topics/enterprise-ai-agents)）。

### [2026-08-27](/today/2026-08-27)（补漏）

WIRED 在 Codex CLI 公开代码中发现 OpenAI 未正式发布的"Persistent mode"：Agent 完成请求后自主创建后续任务、跨会话持续工作，利用过往交互与"对用户的了解"决定下一步——与本知识库持续跟踪的 loopx 外部状态内核、Claude Code 跨会话消息同属"Agent 跨会话持久协调"这条线，OpenAI 官方确认在测试但无近期发布计划（详见 [coding-agents](/topics/coding-agents)）。

### [2026-08-25](/today/2026-08-25)

IBM 发布 Granite 4.2：Apache 2.0 开源推理模型家族（3B/8B/30B），核心创新是多阶段链式强化学习——基础 RL 之后专设 Agentic RL 阶段，8B/30B 版本直接在真实沙箱化仓库/终端/浏览器里训练 SWE Agent、终端操作与网页搜索，而非合成模拟环境；30B 版本 SWE-Bench Verified 达 57%。训练侧开始用真实环境而非模拟环境，呼应评估侧"真实任务派生基准"的同一趋势（详见 [model-efficiency](/topics/model-efficiency)）。

### [2026-08-24](/today/2026-08-24)（补漏）

Toyota 北美案例（LangChain 发布）：ToyotaGPT/GearPal/R&D GPT 三款生产应用，Agent 部署周期从"6 个月 6 人"压缩到"4 天 1 人"，设备诊断从 5-6 小时压缩到 2-3 分钟，团队要求每个项目年化 ROI 达六到七位数——"把 AI 当资本支出而非实验开支"的量化案例（详见 [enterprise-ai-agents](/topics/enterprise-ai-agents)）。

### [2026-08-12](/today/2026-08-12)

LangChain 发文系统列出把 Agent 推向生产必须解决的 7 类基础设施难题（运行时可靠性、事件流式推送、安全执行不可信代码、上下文管理、性能评估、记忆系统、授权权限），主张托管服务打包这些基础设施；同日 LangSmith BYOC 部署模式在 AWS 正式 GA（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

OpenMontage 开源（累计 4.73 万 star）：把 AI 编码助手变成视频制作全流程编排者，12 套结构化生产管线均走"调研→提案→脚本→分镜→素材→剪辑→合成"标准阶段，每个关键节点强制人工审批——长时程多阶段 Agent 任务"自主执行 + 人工检查点"模式在垂直领域的完整落地样本（详见 [agent-skills](/topics/agent-skills)）。

### [2026-08-11](/today/2026-08-11)

LangChain 用 NVIDIA Switchyard 实测：自家 Deep Agents 评估集里 93% 的调用可路由到 30B 级模型，仅 7% 真正需要前沿模型，整体成本降 74%、准确率只掉 6 个百分点（详见 [model-efficiency](/topics/model-efficiency)）。同日发文披露 monday.com Sidekick 案例：单 Agent 塞 200+ 预置工具导致上下文污染、变笨变贵，改用 LangSmith Sandboxes（硬件级 microVM）给 Agent 一台"自己的电脑"后问题解决——能力上限来自可动态执行的计算环境而非工具数量（详见 [agent-sandboxes](/topics/agent-sandboxes)）。

### [2026-08-08](/today/2026-08-08)

Prime Intellect 发布 prime-agent（累计 6.5k star）：RLM（递归语言模型）思路——把上下文当变量、工具当函数调用，在持久化 Python REPL 里运行；`/refine` 复盘任务轨迹并把经验写回 harness 状态，实现内置式自我改进，与 loopx 的外部状态内核是同一目标的不同实现路径（详见 [coding-agents](/topics/coding-agents)）。

### [2026-08-07](/today/2026-08-07)

LangSmith 发布 Managed Deep Agents 公测：托管化的 Deep Agents 运行时，持久化执行/沙箱/记忆/Slack·GitHub 接入/OIDC 身份/Harbor 评估/全链路可观测打包交付，`mda dev`/`mda deploy` 开发部署闭环；继 Claude、Gemini 之后第三家把"深度 Agent 托管化"推成产品线（详见 [cloud-agent-platforms](/topics/cloud-agent-platforms)）。

Claude Code v2.1.224（补漏）：新增跨会话通信，独立会话经 `ListAgents`/`SendMessage` 互发纯文本消息协调——多 Agent 协调能力做进编码 Agent 产品本身，而非全靠外部编排框架或外部状态层，是"外部状态内核"（loopx 一类）之外的另一种协调实现路径（详见 [coding-agents](/topics/coding-agents)）。

### [2026-08-06](/today/2026-08-06)

LangChain 发文厘清 Deep Agents / LangChain / LangGraph 三者定位：Deep Agents 是内置文件系统/子 Agent/skills/记忆管理的"有主见"harness，复杂长任务的默认起点；三者同栈可组合，是"能动性 vs 确定性"光谱上的三个刻度（详见 [agent-frameworks](/topics/agent-frameworks)）。

loopx 登场（累计 2.1k star）：不做另一个 Agent 框架，而是给任意 Agent（Codex/Claude Code/Cursor）加一层 Agent-agnostic 的外部状态内核——持久目标、可交接待办、按配额调度、证据日志。长时程多 Agent 协作的状态管理正独立成单独一层。

### [2026-08-05](/today/2026-08-05)

LangChain 发布 Kubernetes 自治 SRE Agent 案例：调度器轻量周期检查（Haiku）→ 触发后并行拉起专项子 Agent 深入排查 → Sonnet 编排器汇总建议 → 执行严格锁在人工审批后。"读自主、写必须过人"且审批范围收窄到人能看懂，是分层用模型控成本与读写权限分离两条原则的联合落地（详见 [enterprise-ai-agents](/topics/enterprise-ai-agents)）。

### [2026-08-03](/today/2026-08-03)

Stripe 案例发布：全公司级 Agent "Kai" 基于 Deep Agents——一人一周首版，middleware 三件套（文件系统/沙箱/摘要）+ 联邦 skills（1,000+），四周涨到 5,000+ 用户，83% 员工每周使用。

### [2026-07-29](/today/2026-07-29)

Deep Agents v0.7 发布：基础 harness 输入 token 减 65%、文件工具优化、DeltaChannel 增量 checkpoint、实验性 QuickJS 代码执行；TodoListMiddleware 改手动开启（破坏性变更）。

### [2026-07-23](/today/2026-07-23)

LangChain 发布《How We Benchmark Deep Agents》，公开其长时程 Agent 评估方法论。
