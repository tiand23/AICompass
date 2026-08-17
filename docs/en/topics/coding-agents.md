# Coding Agents

## Overview

Terminal/CLI coding agents: the category of coding tools with a command-line interface that autonomously read and modify codebases, run commands and iterate on verification. Representatives: Claude Code (Anthropic), Codex CLI (OpenAI), Gemini CLI (Google), open-source opencode and Aider, and the model-ecosystem offshoot DeepSeek-Reasonix (DeepSeek-native). Distinct from IDE-embedded tools (Cursor, Windsurf) in centering on conversation-driven autonomous execution rather than in-editor completion and inline edits.

## Why It Matters

Terminal coding agents are the main arena of AI coding tool competition, and the birthplace of "harness engineering" — context management, tool orchestration, permission control and cost optimization all got solved first in this category, and its design patterns (skills, hooks, MCP, subagents) are spilling over into general agents. Selection is strongly coupled to model ecosystems, and differentiation increasingly comes from the harness rather than the model itself.

## Core Concepts

- **Harness**: everything besides the model — toolset, context management, permission modes, loop control. The same model performs very differently under different harnesses; harness quality is becoming an independent competitive axis.
- **Splitting along model ecosystems**: Claude Code for Claude, Codex CLI for GPT, DeepSeek-Reasonix for DeepSeek — harness-level tuning to a specific model's cost structure (e.g. prefix-cache stability) is a new differentiation lever.
- **Context & cost management**: long-session token costs are controlled through cache stability (avoiding context changes that break the prefix cache) and pruning of stale content.
- **Extension mechanisms**: MCP (tools), skills (procedures), hooks (interception/audit), plugins/subprocesses — extension models are converging into de facto category-level conventions.
- **Architectural poles**: from full-featured suites (Claude Code) to the single-binary, config-driven minimalist route (DeepSeek-Reasonix's declarative `reasonix.toml`).
- **Extending into non-coding domains**: the coding agent's generic "read/edit files, run commands, verify" capability is being reused beyond code — video-use applies the same harness to video editing, controlling token cost by "transcribe to a low-dimensional proxy first, upgrade to pixels only when needed", a general multimodal token-saving pattern.
- **Cross-platform skill distribution**: methodology-class skill packs like compound-engineering-plugin now list simultaneously across Claude Code/Cursor/Codex/Cline marketplaces — "write once, reuse across tools" is becoming the new norm for skill distribution.
- **Code graphs as a context-optimization layer**: instead of having the agent read the whole file tree, build a Tree-sitter code graph (functions/classes/call relationships) first and let the agent query it by blast-radius over MCP — a concrete solution to the "context management" core problem in the coding-agent category (see [ai-code-review](/en/topics/ai-code-review)).
- **The RLM route**: treat context as variables and tools as function calls, running the agent inside a persistent programming environment (e.g. an IPython REPL) instead of a conventional conversational tool-calling loop — the route prime-agent represents is a structurally different choice of harness form, not just a point on the full-suite-vs-minimal-config spectrum but a wholly different execution paradigm.
- **Locally fine-tuned models connect directly to coding agents**: Unsloth Desktop's `unsloth start` command connects a locally trained/fine-tuned model directly to Claude Code or Codex — the "local model ecosystem" and the "coding agent ecosystem" are starting to merge into one pipeline rather than staying two parallel tracks (see [model-efficiency](/en/topics/model-efficiency)).
- **Agents becoming a new primary access identity in the software ecosystem**: HuggingFace data shows agents overtook humans as the Hub's primary traffic source for the first time in 2026, with Claude Code alone accounting for 44.4% of July traffic (though volatile, with no stable incumbent) and nearly 25% of traffic coming from unregistered agent identities — coding agents' influence has shifted from "a tool developers use" to "one of a platform's primary traffic sources," and measuring ecosystem heat now requires treating agent traffic as its own variable (see [model-efficiency](/en/topics/model-efficiency)).
- **Large-scale real-task reproduction as a capability litmus test**: the ICML 2026 Reproducibility Hackathon had coding agents independently reproduce the core claims of 2,226 papers, with 51% of papers getting at least one claim verified and 23% falsified or contested — the largest real-world stress test to date of the coding agent's full "read the doc → write the code → run the experiment → draw a conclusion" capability chain, and confirmation that human-in-the-loop remains a necessary condition, not an optional extra, for reliable results at the current stage (see [agent-evaluation](/en/topics/agent-evaluation)).

## Related Technologies

- [agent-skills](/en/topics/agent-skills) (coding agents are the skill ecosystem's main host)
- [mcp](/en/topics/mcp) (the standard protocol layer for tool extension)
- [ai-code-review](/en/topics/ai-code-review) (review is a core sub-scenario of coding agents)
- [agent-workspaces](/en/topics/agent-workspaces) (the workspace form: from codebase-centric to task-centric)

## Best Practices

- Choose along with your primary model: a harness's tuning for its own model (caching, effort levels, tool formats) rarely transfers across models.
- When long-session costs blow up, check context management first (cache hits, tool-output accumulation) before switching model tiers.

## Recommended Resources

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)

## Timeline

### [2026-08-14](/en/today/2026-08-14)

HuggingFace's "State of Open Models: Summer 2026" report: agents overtook humans as HuggingFace Hub's primary traffic source for the first time, with Claude Code alone accounting for 44.4% of July traffic, and nearly 25% of July traffic coming from unregistered agent identities — adoption is outpacing tracking infrastructure (see [model-efficiency](/en/topics/model-efficiency)).

### [2026-08-13](/en/today/2026-08-13)

HuggingFace publishes ICML 2026 Reproducibility Hackathon results: 1,221 participants used coding agents like Claude Code, Codex and Cursor to reproduce 2,226 papers (34% of the conference's accepted total), with 51% of papers getting at least one claim verified and 23% falsified or contested, and 266 fully verified; conclusion — the most reliable results come from human-in-the-loop, not full autonomy (see [agent-evaluation](/en/topics/agent-evaluation)).

### [2026-08-12](/en/today/2026-08-12)

Unsloth ships a desktop app: local training/inference in a GUI, with `unsloth start` connecting locally fine-tuned models directly to Claude Code and Codex — the local-model ecosystem and coding-agent ecosystem starting to merge (see [model-efficiency](/en/topics/model-efficiency)).

### [2026-08-09](/en/today/2026-08-09)

code-graph-rag hits Trending (2.7k stars total): a graph-database (Memgraph) version of the code knowledge graph, with AI-generated Cypher for natural-language code Q&A — coexisting with code-review-graph's local SQLite route; a clear architectural split emerges in the code-graph sub-field (see [ai-code-review](/en/topics/ai-code-review)).

### [2026-08-08](/en/today/2026-08-08)

Prime Intellect releases prime-agent (6.5k stars total): the RLM route — context as variables, tools as function calls, running inside a persistent Python REPL; `/refine` reviews trajectories and writes experience back into harness state for built-in self-improvement. A structural fork appears in the coding agent's execution paradigm (see [deep-agents](/en/topics/deep-agents)).

### [2026-08-07](/en/today/2026-08-07)

code-review-graph hits Trending (29k stars total): a Tree-sitter code graph plus an MCP query interface, replacing "read the whole file tree" with "query a structured graph by blast-radius" — measured at roughly 65x fewer tokens. Another concrete solution to context management, the coding agent category's core problem (see [ai-code-review](/en/topics/ai-code-review)).

### [2026-08-05](/en/today/2026-08-05)

video-use hits Trending (19.5k total): editing video with coding agents by "transcribing to a proxy representation, upgrading to vision only when needed" to control token cost — the coding agent's generic capability extending into non-coding domains like video. compound-engineering-plugin also trends the same day (23.9k total): cross-platform distribution becomes the norm for methodology-class skills.

### [2026-08-04](/en/today/2026-08-04)

DeepSeek-Reasonix trends for a second day (29.9k stars total): a DeepSeek-native terminal coding agent — single static Go binary, `reasonix.toml` config-driven, long-session costs tuned around the prefix cache. The terminal coding agent category starts splitting along model ecosystems.
