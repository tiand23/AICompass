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
