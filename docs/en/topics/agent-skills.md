# Agent Skills

## Overview

Skills: reusable agent capability packages — bundled instructions plus resources that an agent loads on demand for a specialized job (working a document type, executing a procedure). Anthropic shipped Skills with Claude in October 2025 and opened the format as an open standard in December 2025; within months GitHub became the primary distribution channel for thousands of reusable instruction packages.

## Why It Matters

Skills turn "teaching an agent to do something" from prompt engineering into a distributable, versionable software artifact — the key step toward an agent capability ecosystem, much like package managers were for code reuse. Tracking skill ecosystem heat is tracking what people are actually making agents do.

## Core Concepts

- **Structure**: a skill = metadata (name, trigger description) + instruction document + optional resources/scripts; agents auto-load by task relevance.
- **Division of labor vs MCP**: MCP gives an agent **tools** (the interface to a capability); a skill gives it **knowledge and procedure** (how to use capabilities) — complements, not competitors.
- **Distribution ecosystem**: GitHub is the main channel; awesome-lists (e.g. ComposioHQ/awesome-claude-skills) are the entry points; community rankings blend stars, interaction heat, and documented time savings.
- **Supplier tiers**: standards vendor (Anthropic — anthropics/skills is its own maintained reference implementation + spec) → hyperscaler official product-line collections (google/skills, covering the whole product line — "documentation's executable version") → distilled personal experience from well-known independent engineers (Addy Osmani, Matt Pocock) → full-pipeline domain-expertise packaging (OpenMontage packages video-production expertise into 700+ skill files) → anonymous/community repos — credibility and update-sync differ by tier; weigh selection by source tier.
- **Vendor-neutral skill package managers**: skill repos used to be maintained independently, with users figuring out installation on their own; Vercel's `npx skills` is the first general-purpose install/management tool decoupled from any specific agent vendor (`add`/`use`/`list`/`update`, supporting 75+ agents) — much like npm is to JS packages, a signal of the ecosystem moving from "repo distribution" toward "a unified package manager."

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
| superpowers | New (hit Trending 2026-07-30; back on 08-05 at +653) | Agentic skills framework + development methodology |
| last30days-skill | New (hit Trending 2026-07-31; still on through 08-03) | Cross-platform "last 30 days" research skill |
| reverse-skill | New (hit Trending 2026-08-01; ~+2,300/day two days running on 08-04/05) | Reverse engineering / pentest / security research skill router pack |
| addyosmani/agent-skills | New (hit Trending 2026-08-06, 82k stars total) | 24 professional engineering skills spanning the full development lifecycle |
| mattpocock/skills | New (hit Trending 2026-08-07, ~207k stars total — currently the single hottest point in the skill ecosystem) | Engineering discipline distilled from a personal `.agents` directory (interview-driven planning/TDD/architecture review) |
| google/skills | New (hit Trending 2026-08-08, 16.2k stars total, official Google) | Official skill collection spanning GKE/BigQuery/Gemini API and Google's whole product line |
| agency-agents | New (hit Trending 2026-08-09, ~140k stars total) | 230+ cross-domain expert-persona agent team template, with conversion scripts for 8+ platforms |
| anthropics/skills | New (hit Trending 2026-08-12, 168k stars total, official Anthropic) | The standards vendor's official reference implementation: spec + example skills + template; the same implementation behind Claude's native document capabilities |
| Anthropic-Cybersecurity-Skills | New (hit Trending 2026-08-18, 28.5k stars total) | 817 cybersecurity practitioner skills mapped to MITRE ATT&CK/ATLAS/D3FEND, NIST CSF/AI RMF, and MITRE F3 |
| archify | New (hit Trending 2026-08-31, ~36k stars total) | Generates architecture/workflow/sequence/data-flow/lifecycle diagrams from natural language or Mermaid input, self-contained HTML output |
| scientific-agent-skills | New (hit Trending 2026-08-31, ~30-40k stars total) | 165 validated scientific-research skills + 100+ scientific databases, covering biology, chemistry, medicine, and drug discovery |
| academic-research-skills | New (hit Trending 2026-09-01, ~44k stars total) | Full academic-research-workflow skill suite: research → write → review → revise → finalize; companion Codex-native version available |
| ponytail | New (hit Trending 2026-09-03, climbed to ~122k stars within 9 days, the fastest-growing skill repo recently) | Enforces a "decision ladder" to compress AI-generated code volume; official benchmark shows an average 54% reduction in code output |
| mattpocock/skills | As of 2026-10-08, ~281k stars total (up from ~207k when first listed 08-07 — still leads the skill ecosystem's single hottest point) | Engineering discipline distilled from a personal `.agents` directory |
| rea | Spikes another +54,706/day on 2026-10-09 (first listed 10-08 at +7,744/day), ~186K stars total over two days — the fastest riser among recent skill/agent-tool repos | An MCP server + CLI wiring Ghidra/IDA Pro-class reverse-engineering tools behind an agent, analyzing native binaries/Electron/.NET/APKs/websites with evidence-backed explanations and recreation steps |
| vercel-labs/skills | New (hit Trending 2026-10-09, `npx skills`) | Vercel's official vendor-neutral skill package manager, supporting Claude Code/OpenCode/Codex/Cursor and 75+ other agents |
| knowledge-work-plugins | New (hit Trending 2026-10-08, ~27.3k stars total) | An open-source plugin repo for knowledge workers, mainly for use with Claude Cowork |
| superpowers | Back on Trending 2026-10-01 (+888/day) | Agentic skills framework + development methodology |
| OpenShell (NVIDIA) | New (hit Trending 2026-10-01, +2,503/day — the fastest riser that day) | A "safe, private" runtime for autonomous AI agents, written in Rust — a major hardware vendor shipping agent-execution-isolation infrastructure directly |

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

### [2026-10-09](/en/today/2026-10-09)

`rea` (the MCP reverse-engineering tool, first listed 10-08) spikes another +54,706 stars in a day, ~186K total over two days, topping the day's Trending — wiring professional tools like Ghidra and IDA Pro behind an agent, explaining how a feature works without source code and backing it with an evidence chain, confidence scores, and recreation steps, compatible with Claude Code/Codex/Cursor/Gemini CLI and other mainstream coding agents. Same day, Vercel ships `vercel-labs/skills` (`npx skills`): `skills add/use/list/update` and more, supporting Claude Code, OpenCode, Codex, Cursor, and 75+ other agents, with official v1.1.1 adding interactive skill discovery (`npx skills find`) — the first general-purpose skill package manager decoupled from any specific agent vendor (see [mcp](/en/topics/mcp) ・ [coding-agents](/en/topics/coding-agents)).

### [2026-10-08](/en/today/2026-10-08)

A GitHub Trending snapshot: `mattpocock/skills` grows to ~281k stars total, still leading; `rea` (an agent-based reverse-engineering tool spanning behavioral analysis to low-level inspection) spikes +7,744/day — the fastest riser among recent skill/agent-tool repos, continuing the observation (first evidenced by reverse-skill) that demand for security-research-oriented agent tools runs high; `knowledge-work-plugins` (an open-source plugin repo for knowledge workers, mainly for Claude Cowork, ~27.3k stars total) newly lists.

### [2026-10-01](/en/today/2026-10-01)

A GitHub Trending snapshot: `mattpocock/skills` grows to ~273k stars total, still leading the skill ecosystem; `superpowers` re-enters trending with +888/day; NVIDIA open-sources **OpenShell** (written in Rust, a "safe, private runtime for autonomous AI agents"), gaining 2,503 stars in a single day — another example, after official skill collections from Google and Anthropic, of a major vendor shipping agent-infrastructure open source. Also trending: `pi` (a unified LLM API + agent loop + TUI + coding-agent CLI toolkit, 110K+ stars total), `context-mode` (context-window optimization and tool sandboxing for coding agents, 24.7K stars total), and `openrig` (building persistent agent teams with shared context, 3,405 stars total). NVIDIA's entry echoes the 09-23 "agent-first platforms" post's argument that execution environments need dedicated isolation infrastructure (see [agent-sandboxes](/en/topics/agent-sandboxes)).

### [2026-09-03](/en/today/2026-09-03)

ponytail arrives (GitHub Trending, climbed to ~122k stars within 9 days, the fastest-growing skill repo recently): a general-purpose skill compatible with 15+ platforms including Claude Code/Codex/Copilot CLI, whose core is a forced "decision ladder" to run through before writing any code — does this need to exist, is it already in the codebase, can the standard library/native platform feature/an installed dependency do it, all "no" required before writing anything new. Official benchmarks show an average 54% reduction in code output, up to 94% in the best case. Continues the "stopping agents from being lazy or over-engineering" thread (Addy Osmani's agent-skills previously introduced "rebutting the agent's excuses for cutting corners"), pushing "write less code" into an enforced process rather than a suggestion — the further extreme of that idea — and its rapid growth suggests demand for "constraint" skills may be no less than for "capability-expanding" ones.

### [2026-09-01](/en/today/2026-09-01)

academic-research-skills hit GitHub Trending (~44k stars total): packages the full academic research workflow (research → write → review → revise → finalize) into a Claude Code skill suite, with a companion Codex-native version. Continues the trajectory from "general engineering-discipline skills" to "vertical-domain, full-workflow knowledge packaging," another high-star vertical-domain instance after video production and scientific research.

### [2026-08-31](/en/today/2026-08-31)

archify (~36k stars total) and scientific-agent-skills (~30-40k stars total) hit GitHub Trending on the same day: the former packages architecture/workflow/sequence/data-flow/lifecycle diagram generation into a skill, accepting natural-language or pasted-Mermaid input and producing self-contained HTML (with motion) plus PNG/SVG/WebM/share-card exports; the latter targets scientific research, with 165 validated skills and 100+ scientific databases covering biology, chemistry, medicine, and drug discovery, compatible with Claude Code, Cursor, Codex, and more. Continues the trajectory from "general engineering-discipline skills" to "vertical-domain, full-workflow knowledge packaging" — scientific-agent-skills is a larger-scale instance of vertical-domain packaging after video production (OpenMontage).

### [2026-08-19](/en/today/2026-08-19)

Claude Platform's Agent Skills and Skills API (`/v1/skills`) reach formal GA, no longer requiring the `skills-2025-10-02` beta header, including Messages API requests that load a Skill via the `container` parameter — the rapidly expanding skill ecosystem since October 2025 finally gets an official, production-grade API commitment (see [cloud-agent-platforms](/en/topics/cloud-agent-platforms)).

### [2026-08-18](/en/today/2026-08-18)

Anthropic-Cybersecurity-Skills arrives (28.5k stars total): 817 skills drawn from real practitioner workflows across 29 security domains, systematically mapped to six industry frameworks — MITRE ATT&CK v19.1, NIST CSF 2.0, MITRE ATLAS, MITRE D3FEND, NIST AI RMF, and MITRE F3; uses progressive disclosure ("lightweight frontmatter scan, ~30 tokens per skill, load full content only on a match") to control token cost, and is compatible with Claude Code and 20+ platforms (see [agentic-safety](/en/topics/agentic-safety)).

### [2026-08-12](/en/today/2026-08-12)

Anthropic's own anthropics/skills hits GitHub Trending under its official banner for the first time (168k stars total): the standards vendor's own maintained reference implementation (spec `/spec` + example skills + template), filling in the topmost tier of the supply chain — developers can now benchmark other-source skill packages directly against an official spec. Same day, OpenMontage open-sources (47.3k stars total): 700+ skill/production-knowledge files package full-pipeline video-production expertise into an agent-loadable knowledge layer, a data point for the skills ecosystem expanding from "general engineering discipline" toward "full-pipeline domain expertise" (see [deep-agents](/en/topics/deep-agents)).

### [2026-08-09](/en/today/2026-08-09)

agency-agents arrives (~140k stars total): 230+ cross-domain expert personas (engineering/design/marketing/sales/game dev/GIS and more across 15+ divisions), native to Claude Code with conversion scripts for Copilot/Cursor/Aider and 8+ other platforms — huge demand for the "prebuilt expert-persona team" distribution form, a data point for the agent-capability ecosystem expanding from engineer tooling toward general workplace role-play.

### [2026-08-08](/en/today/2026-08-08)

Google officially releases google/skills (16.2k stars total): covering GKE, BigQuery, Gemini API, the Well-Architected Framework and the rest of its own product line — after two independent engineers' high-star skill packs, the first hyperscaler to officially maintain a skill collection for its own products; "a skill is an executable version of product documentation" is being formally adopted by platform vendors.

### [2026-08-07](/en/today/2026-08-07)

Matt Pocock releases skills (~207k stars total, taking over as the ecosystem's single hottest point): distilled from a personal `.agents` directory, led by "interview-driven planning" (ask clarifying questions before starting) and other alignment-focused skills — a day after Addy Osmani, another well-known independent engineer distills personal experience into a high-star skill pack. "Open-sourcing distilled personal experience" is becoming a repeatable pattern, and skills are starting to reach for "communication alignment", a harder problem than procedural discipline.

### [2026-08-06](/en/today/2026-08-06)

Addy Osmani releases agent-skills (82k stars total — currently the ecosystem's single hottest point): 24 professional engineering skills spanning the full development lifecycle (Define/Plan/Build/Verify/Review/Ship), explicitly listing and rebutting the excuses an agent might use to skip steps — skill-writing craft maturing from "teach the agent what to do" to "prevent the agent from cutting corners", a notable step up in content quality.

### [2026-08-05](/en/today/2026-08-05)

compound-engineering-plugin hits Trending (23.9k total, +40/day): another methodology-class skill pack, and a genuinely cross-platform one (listed in Claude Code/Cursor/Codex/Cline/Devin CLI marketplaces at once) — distribution moving from "single-tool-exclusive" to "write once, reuse across tools".

### [2026-08-03](/en/today/2026-08-03)

Tencent Cloud's TencentDB-Agent-Memory builds "extract skills from agent interactions, share after team review" into its memory pipeline (see [agent-memory](/en/topics/agent-memory)) — skill production is getting infrastructure. Same day, the Stripe Kai case supplies the enterprise-side sample: 1,000+ skills produced federally by business teams and dynamically loaded, covering 500+ internal tools — central platform plus federated production is the workable division of labor for scaling skills. reverse-skill keeps accelerating (+1,141/day).

### [2026-08-01](/en/today/2026-08-01)

reverse-skill hits Trending (+612/day): the first "skill router" form — routing + on-demand toolchain + self-evolving experience base; a single domain's skill library gaining internal structure. openwork (+796/day) makes skills/MCP config a portable cross-tool asset (see [agent-workspaces](/en/topics/agent-workspaces)).

### [2026-07-31](/en/today/2026-07-31)

last30days-skill hit Trending (+378/day): cross-platform research packaged as a skill — the third in a week; "periodic research and synthesis" is becoming a standardized capability.

### [2026-07-30](/en/today/2026-07-30)

superpowers hit Trending (+616 stars/day): a skills framework plus development methodology — skills upgrading from single capability packages to a first-class unit for organizing development workflows.

### [2026-07-29](/en/today/2026-07-29)

book-to-skill hit Trending (+423 stars in a day): compiling PDFs into skill packages automatically — a signal of the "knowledge → skill" toolchain emerging.

### 2026-07-28

Topic created. Ecosystem state: ~half a year after the open standard, GitHub distribution is established, top repos reach the 200k-star scale, awesome-lists are the main discovery entry.
