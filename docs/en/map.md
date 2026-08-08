# Knowledge Map

> Organized by niches of the generative AI development stack. Each slot is a domain — slots with topics list them; empty slots are marked "accumulating" (tracked, no content yet).
>
> Status: 🔥 activity within 7 days ・ 📈 within 30 days ・ 💤 older

## 1. Model Layer

### Foundation Models

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [claude-models](/en/topics/claude-models) | Anthropic's Claude model line | Model selection and migration for agent/coding workloads | 🔥 | 2026-08-07 |
| [openai-models](/en/topics/openai-models) | OpenAI's GPT model line & API platform | Selection, price volatility and deprecation risk | 🔥 | 2026-08-02 |
| [gemini-models](/en/topics/gemini-models) | Google's Gemini model line | Cost-effective selection for price-sensitive workloads | 📈 | 2026-07-21 |

### Multimodal Generation

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [diffusion-models](/en/topics/diffusion-models) | Diffusion models & inference optimization | Cost and VRAM barriers of image/video generation | 📈 | 2026-07-23 |
| [world-models](/en/topics/world-models) | World models / generative simulation | Robot training data is expensive and dangerous | 📈 | 2026-07-27 |

### Efficiency & Miniaturization (SLM ・ Distillation ・ Quantization)

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [model-efficiency](/en/topics/model-efficiency) | SLMs, distillation, quantization, efficient architectures, CPU/edge inference | Usable intelligence from less compute | 🔥 | 2026-08-04 |

## 2. Knowledge & Retrieval

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [rag](/en/topics/rag) | Retrieval-augmented generation (mainstream: Agentic RAG) | Connecting private knowledge to LLMs; factuality and traceability | 📈 | 2026-07-28 |
| [document-parsing](/en/topics/document-parsing) | Document parsing & structuring (VLM + semantic reconstruction) | The first mile of unstructured documents into knowledge bases | 🔥 | 2026-08-05 |
| [vector-databases](/en/topics/vector-databases) | Vector DB selection & hybrid search | The storage/retrieval layer for RAG and memory | 📈 | 2026-07-28 |
| [agent-memory](/en/topics/agent-memory) | Agent memory infrastructure (session/long-term/team assets) | Retaining experience across sessions; team knowledge assets | 🔥 | 2026-08-03 |

*Also watching: knowledge graphs / GraphRAG (accumulating).*

## 3. Agent Development

### Orchestration & Workflow

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [deep-agents](/en/topics/deep-agents) | Long-horizon autonomous agents (LangChain) | Planning, recovery and evaluation of multi-step tasks | 🔥 | 2026-08-08 |
| [agent-frameworks](/en/topics/agent-frameworks) | Framework landscape: LangGraph/CrewAI/ADK/Agents SDK… | Framework selection and long-term safety | 📈 | 2026-08-06 |
| [agent-workflow](/en/topics/agent-workflow) | Workflow paradigms: orchestration vs autonomy, HITL, durable execution | Getting agents reliably into business processes | 📈 | 2026-07-28 |
| [agent-skills](/en/topics/agent-skills) | Reusable capability packages (incl. GitHub heat rankings) | Distribution and reuse of agent capabilities | 🔥 | 2026-08-08 |
| [voice-agents](/en/topics/voice-agents) | Voice agents (cascaded/realtime S2S, frameworks & evaluation) | Realtime engineering and evaluation of voice-interface agents | 🔥 | 2026-08-04 |

### Runtime & Cloud (Hosted Runtimes ・ Agent Platforms ・ Foundry)

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [enterprise-ai-agents](/en/topics/enterprise-ai-agents) | Enterprise agent platforms & delivery models | Reliably connecting agents to enterprise systems and operating them | 🔥 | 2026-08-07 |
| [cloud-agent-platforms](/en/topics/cloud-agent-platforms) | The hyperscaler platform landscape (AgentCore/Foundry/GEAP/Managed Agents) | Platform selection and lock-in trade-offs | 🔥 | 2026-08-07 |
| [agent-workspaces](/en/topics/agent-workspaces) | Desktop agent workspaces (Cowork/openwork/Codex app) | The assign-work-accept-results interaction form; portable capability config | 📈 | 2026-08-01 |
| [agent-sandboxes](/en/topics/agent-sandboxes) | Agent execution sandbox infrastructure (E2B/Daytona/Cloudflare computer) | Safe, isolated, reusable code-execution environments for agents | 🔥 | 2026-08-06 |

### Protocols & Interoperability (MCP ・ A2A ・ AG-UI)

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [mcp](/en/topics/mcp) | Tool-integration protocol (de facto standard) | The M×N glue-code problem of connecting AI to tools | 🔥 | 2026-08-03 |
| [a2a](/en/topics/a2a) | Agent collaboration protocol (Google-led, 50+ vendors) | Discovery and task delegation across vendors | 📈 | 2026-07-28 |

*Also watching: AG-UI (accumulating).*

## 4. Inference & Deployment

*Accumulating. Watching: serving architecture, inference cost reduction, edge deployment. (For 4-bit diffusion inference, see [diffusion-models](/en/topics/diffusion-models).)*

## 5. Evaluation

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [agent-evaluation](/en/topics/agent-evaluation) | Agent evaluation methods & benchmarks (real-task-derived + LLM-as-judge) | Reproducible measurement before agents go to production | 🔥 | 2026-08-04 |

*Also watching: model benchmarks. (For long-horizon agent evaluation, see [deep-agents](/en/topics/deep-agents).)*

## 6. Safety

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [agentic-safety](/en/topics/agentic-safety) | Agent behavioral safety | Real risks of autonomous models overstepping and escaping | 🔥 | 2026-08-05 |
| [content-provenance](/en/topics/content-provenance) | AI content watermarking & verification (SynthID/C2PA) | Identifiability and compliance checking of generated content | 🔥 | 2026-07-31 |

## 7. Coding Tools

| Topic | What it is | Problem it solves | Status | Last activity |
|---|---|---|---|---|
| [ai-code-review](/en/topics/ai-code-review) | AI code review tools & architecture | Scaling review while keeping signal-to-noise | 🔥 | 2026-08-07 |
| [coding-agents](/en/topics/coding-agents) | Terminal/CLI coding agents (Claude Code/Codex CLI/Reasonix…) | Category selection; harness engineering and model-ecosystem coupling | 🔥 | 2026-08-08 |
