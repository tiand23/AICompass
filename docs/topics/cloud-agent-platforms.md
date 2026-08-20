# Cloud Agent Platforms

## 简介

四大云厂商的托管 Agent 平台：AWS **Bedrock AgentCore**、微软 **Azure AI Foundry**（配 Agent365 管控平面）、Google **Gemini Enterprise Agent Platform**（2026 年 4 月 Cloud Next 上由 Vertex AI 改组而来，含 Agent Studio 低代码与亚秒冷启动的 Agent Runtime）、Anthropic **Claude Managed Agents**；此外还有 Salesforce Agent Fabric 等 SaaS 系玩家。

## 为什么重要

2026 年企业 Agent 平台市场已进入整合期——自建运行时的必要性在下降，选平台变成架构决策的第一步，且平台与云深度绑定，一旦选定迁移成本很高。

## 核心概念

- **选型的第一定律是跟着现有云走**：Azure 用户 → AI Foundry；AWS → Bedrock AgentCore；GCP → Gemini Enterprise Agent Platform。跨云中立需求才考虑 Anthropic/OpenAI 直连。
- **各家长板**：AgentCore 模型面最广（30+ 模型统一 API，Claude/Llama/Mistral）；Foundry 深绑 GPT 家族与 M365/Copilot Studio；Google 强在 ML 密集负载、原生多模态与 A2A 协议（Gemini API Managed Agents 已补齐 hooks/预算护栏/定时触发的生产化能力）；Managed Agents 强在 Claude 生态与 API 工程化（effort、webhook、事件流、会话预算硬顶、顾问模型、数据落地地、GitHub 加载 skills）。
- **托管 Deep Agents 成新品类**：继 Claude/Gemini 之后，LangSmith 的 Managed Deep Agents（2026-08 公测）把开源框架包装成托管运行时——持久化执行/沙箱/记忆/可观测打包交付，"框架开源 + 运行时托管"正成为多家的共同路线。
- **托管化要解决的 7 类基础设施难题**：运行时可靠性、面向用户的事件流式推送、不可信 Agent 生成代码的安全执行、上下文管理、性能评估、记忆系统、授权权限——LangChain 把此前散见于各产品页的"为什么要用托管"论点整理成一份可对照的清单，评估自建 vs 托管时可直接核对。
- **部署模式三选项**：全托管云服务 / BYOC（Bring Your Own Cloud，跑在客户自己云账号的集群里，数据不出私有环境）/ 完全自托管——BYOC 是介于"托管便利"与"数据主权"之间的折中选项，LangSmith 已在 AWS 上把这一模式做到 GA。
- **管控平面**：Agent365 这类"Agent 的 MDM"是 2026 年新出现的层——企业要统一管理成百上千个 Agent 的身份、权限与审计。
- **现实主流是"人审后执行"**：多数企业仍在 assisted workflow 阶段，全自主生产管线是少数。

## 相关技术

- [enterprise-ai-agents](/topics/enterprise-ai-agents)（交付模式与企业落地视角）
- [agent-frameworks](/topics/agent-frameworks)（框架层，常与平台搭配：AWS+LangGraph、GCP+ADK）
- [claude-models](/topics/claude-models)（Managed Agents 的模型底座）
- [a2a](/topics/a2a)（Google 平台原生支持的 Agent 协作协议）

## 最佳实践

- 用"数据在哪、身份体系在哪"决定平台，而不是用模型跑分。
- 把 Agent 定义与编排逻辑写在框架层（可迁移），平台只当运行时用，降低锁定。

## 推荐学习资料

- [三大云 Agent 平台对比决策指南（AgentMarketCap）](https://agentmarketcap.ai/blog/2026/04/07/azure-ai-foundry-enterprise-agent-platform-2026)
- [AWS Bedrock vs Microsoft Foundry vs Vertex AI 2026](https://www.epcgroup.net/blog/aws-bedrock-vs-microsoft-foundry-vs-vertex-ai-2026)

## Timeline

### [2026-08-19](/today/2026-08-19)

Claude Managed Agents 新增网络工具域名白名单/黑名单：可对一个 agent 的 `web_search`/`web_fetch` 工具设置 `allowed_domains` 或 `blocked_domains`，`web_fetch` 另支持 `max_content_tokens`——权限最小化原则在托管 Agent 网络访问场景的又一次细化落地。同日 Agent Skills API 正式转 GA（详见 [agent-skills](/topics/agent-skills)）。

### [2026-08-12](/today/2026-08-12)

LangChain 发文《Why managed agents are the next big thing in agent building》：系统列出把 Agent 推向生产必须解决的 7 类基础设施难题（运行时可靠性、事件流式推送、安全执行不可信代码、上下文管理、性能评估、记忆系统、授权权限），主张托管服务打包这些基础设施让开发者专注业务逻辑。同日 LangSmith 的 BYOC 部署模式在 AWS 正式 GA——企业可把 LangSmith 跑在自己 AWS 账号下的集群里，数据不出私有环境，是托管便利与数据主权之间的第三种部署选项（详见 [deep-agents](/topics/deep-agents)）。

### [2026-08-07](/today/2026-08-07)

Claude Managed Agents 一次上线四项：会话预算硬顶（`budget_reached` 自动暂停）、Advisor 顾问模型（主线程中途咨询更强模型的策略建议）、`inference_geo` 推理地理位置控制（数据落地合规）、从挂载的 GitHub 仓库自动发现加载 skills。同日 LangSmith 发布 Managed Deep Agents 公测，第三家把 Deep Agent 托管化作为产品线推出（详见 [deep-agents](/topics/deep-agents)）。

### [2026-08-01](/today/2026-08-01)

Claude Managed Agents：Dreams（research preview）支持 Opus 5——新模型发布一周后渗透到托管产品线。

### [2026-07-28](/today/2026-07-28)

Google 扩展 Gemini API Managed Agents：默认模型升至 Gemini 3.6 Flash；沙箱内 pre/post 执行 hooks（拦截/lint/审计工具调用）；`max_total_tokens` 预算护栏、cron 定时触发、Environments API 与免费层——生产化能力对齐 Claude Managed Agents。

同日建档。当前格局：四大云平台均已生产可用，市场进入整合期——Google 把 Vertex AI 改组为 Gemini Enterprise Agent Platform（2026 年 4 月），微软推出 Agent365 管控平面，AWS AgentCore 大规模生产化，Salesforce 重启 Agent Fabric。
