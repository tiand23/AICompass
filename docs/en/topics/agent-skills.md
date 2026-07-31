# Agent Skills

## Overview

Skills: reusable agent capability packages — bundled instructions plus resources that an agent loads on demand for a specialized job (working a document type, executing a procedure). Anthropic shipped Skills with Claude in October 2025 and opened the format as an open standard in December 2025; within months GitHub became the primary distribution channel for thousands of reusable instruction packages.

## Why It Matters

Skills turn "teaching an agent to do something" from prompt engineering into a distributable, versionable software artifact — the key step toward an agent capability ecosystem, much like package managers were for code reuse. Tracking skill ecosystem heat is tracking what people are actually making agents do.

## Core Concepts

- **Structure**: a skill = metadata (name, trigger description) + instruction document + optional resources/scripts; agents auto-load by task relevance.
- **Division of labor vs MCP**: MCP gives an agent **tools** (the interface to a capability); a skill gives it **knowledge and procedure** (how to use capabilities) — complements, not competitors.
- **Distribution ecosystem**: GitHub is the main channel; awesome-lists (e.g. ComposioHQ/awesome-claude-skills) are the entry points; community rankings blend stars, interaction heat, and documented time savings.

## Ecosystem Heat (GitHub Rankings)

High-star representative repos at topic creation (2026-07):

| Repo | Stars | Positioning |
|---|---|---|
| ECC | ~226k | Claude Code ecosystem tooling |
| hermes-agent | ~209k | Agent framework/tooling |
| cc-switch | ~113k | Claude Code config switching |
| ui-ux-pro-max-skill | ~101k | UI/UX specialist skill |
| awesome-claude-skills | ~67k | Curated list (50+ skills) |
| book-to-skill | New (hit Trending 2026-07-29) | Automatic PDF → Claude Code skill conversion |
| superpowers | New (hit Trending 2026-07-30, +616/day) | Agentic skills framework + development methodology |
| last30days-skill | New (hit Trending 2026-07-31, +378/day) | Cross-platform "last 30 days" research skill |

> This ranking is refreshed by `/update` whenever skill-related repos hit GitHub Trending.

## Related Technologies

- [mcp](/en/topics/mcp) (tool integration layer, complementary)
- [agent-frameworks](/en/topics/agent-frameworks)
- [ai-code-review](/en/topics/ai-code-review) (review is among the most common skill scenarios)

## Best Practices

- The heart of a skill is its **trigger description** — the agent decides when to load it from that; a vaguely described skill might as well not exist.
- Inside a team, mine "procedures you keep re-explaining to the AI" for skill material first — most direct payoff.

## Recommended Resources

- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)
- [Claude Code repos star leaderboard](https://githublb.vercel.app/topic/claude-code)

## Timeline

### [2026-07-31](/en/today/2026-07-31)

last30days-skill hit Trending (+378/day): cross-platform research packaged as a skill — the third in a week; "periodic research and synthesis" is becoming a standardized capability.

### [2026-07-30](/en/today/2026-07-30)

superpowers hit Trending (+616 stars/day): a skills framework plus development methodology — skills upgrading from single capability packages to a first-class unit for organizing development workflows.

### [2026-07-29](/en/today/2026-07-29)

book-to-skill hit Trending (+423 stars in a day): compiling PDFs into skill packages automatically — a signal of the "knowledge → skill" toolchain emerging.

### 2026-07-28

Topic created. Ecosystem state: ~half a year after the open standard, GitHub distribution is established, top repos reach the 200k-star scale, awesome-lists are the main discovery entry.
