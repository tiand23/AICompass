# Voice Agents

## 简介

语音 Agent：以语音为界面的实时对话 Agent——语音客服、语音助理、面试/培训对话等场景的技术形态。两条技术路线并存：**级联式**（STT → LLM → TTS，各环节可独立选型）与**端到端实时语音模型**（speech-to-speech，如 OpenAI GPT-Live，边听边说）。代表框架：livekit/agents、Pipecat。

## 为什么重要

语音是客服、面试、车载、无障碍等场景的自然界面，也是 Agent 渗透企业客服（CX）的主通道。它与文本 Agent 的本质区别在**实时性**：延迟、打断、轮替（turn-taking）直接决定"像不像人"，这一整层工程与评测维度在文本 Agent 里不存在。2026 年实时语音模型（GPT-Live 一类）商用后，语音 Agent 从"能对话"进入"拼体验"阶段。

## 核心概念

- **级联 vs 端到端**：级联式（STT→LLM→TTS）灵活、可控、各环节可换供应商，但延迟叠加且丢失语气信息；端到端 speech-to-speech 延迟低、能保留副语言信息（语气、停顿），但可控性与工具调用成熟度仍在追赶。
- **延迟预算**：人类对话的自然响应间隔约 200-800ms；级联管线需要在 STT 流式化、LLM 首 token、TTS 流式合成三段里抠延迟。
- **打断处理（barge-in）与轮替检测**：用户随时插话，Agent 要停得下来、接得回去；VAD/turn detection 的准确度直接决定对话流畅感。
- **三轴评测**（LangChain 2026-08 提出）：执行（工具调用与流程正确性）、结果（业务目标达成）、体验（延迟/打断/自然度）——语音特有的是第三轴。
- **接入通道**：WebRTC（浏览器/App）与电话（SIP/PSTN）是两类主流接入，框架层（livekit 等）负责抹平。
- **开放权重本地 TTS**：级联路线 STT/LLM/TTS 三环节中 TTS 此前多依赖云端商用 API；权重开放、可完全本地部署的 TTS（如 NVIDIA Magpie TTS）补上了"级联路线全链路本地化"的最后一块，对延迟与数据合规敏感的场景是比端到端语音模型更贴合"可控优先"取向的选择。

## 相关技术

- [agent-evaluation](/topics/agent-evaluation)（三轴评测方法论）
- [openai-models](/topics/openai-models)（GPT-Live 实时语音模型线）
- [enterprise-ai-agents](/topics/enterprise-ai-agents)（CX 客服是语音 Agent 最大落地场景）
- [content-provenance](/topics/content-provenance)（语音克隆滥用与音频水印）

## 最佳实践

- 选路线先看场景对"可控性"的要求：强流程、强合规的客服选级联（每环节可审计可兜底），体验优先的助理类可上端到端。
- 评测不要只测对话质量——延迟分布（P50/P95）、打断恢复成功率要进验收指标。

## 推荐学习资料

- [How to evaluate voice agents（LangChain）](https://www.langchain.com/blog/how-to-evaluate-voice-agents-execution-outcomes-and-experience)
- [livekit/agents](https://github.com/livekit/agents)

## Timeline

### [2026-08-10](/today/2026-08-10)

NVIDIA 开源 Magpie TTS：面向语音 Agent 的低延迟多语言 TTS，权重开放、可完全本地部署，不依赖云端 API——为延迟预算紧或数据不能出私有环境的语音客服场景补上级联路线最后一块本地化拼图。

### [2026-08-04](/today/2026-08-04)

LangChain 发布语音 Agent 三轴评测方法论（执行/结果/体验）——实时语音模型商用后，语音特有的"体验轴"评测开始方法论化。同期 livekit/agents 登上 GitHub Trending（+432/日），语音 Agent 框架层热度同步上升。
