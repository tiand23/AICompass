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

### [2026-08-04](/en/today/2026-08-04)

DeepSeek-Reasonix trends for a second day (29.9k stars total): a DeepSeek-native terminal coding agent — single static Go binary, `reasonix.toml` config-driven, long-session costs tuned around the prefix cache. The terminal coding agent category starts splitting along model ecosystems.
