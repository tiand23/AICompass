# Agent Evaluation

## Overview

Agent evaluation: methods and benchmarks for measuring agent performance on multi-step tasks with real side effects. Unlike traditional model benchmarks (one question, one scored answer), agent evaluation faces non-unique trajectories, diverse outcomes and open-ended tasks; the prevailing approach is "real-task-derived samples + LLM-as-judge comparison against a baseline".

## Why It Matters

Whether an agent can go to production is ultimately decided by evaluation — without reproducible evals, every prompt tweak, model swap or tool change is blind tuning. Benchmarks are also the industry's progress bar: ReviewBench shows current models recover only ~30% of the human review baseline, meaning code review agents are far from saturated — and quantifying exactly where the headroom is.

## Core Concepts

- **Real-task-derived benchmarks**: build tasks by curating substantive samples from production data (real PR review comments, real tickets) — more reflective of actual capability than synthetic tasks (ReviewBench's approach).
- **Coverage vs precision**: the two basic axes of agent evaluation — did it find everything (coverage) and are its reports accurate (precision), usually combined as F1. Critical for review-class agents, where false positives burn user trust directly.
- **LLM-as-judge**: use a model to compare agent output against the human baseline for semantic equivalence (hitting the same underlying issue, not matching wording) — the mainstream scoring method for open-ended tasks; watch for judge bias.
- **Strategy is a variable**: the same model scores significantly higher with a structured, purpose-built prompt — evaluate "model + strategy" as a unit, not the model alone.
- **Vertical benchmarks built by the domain's own leading company**: Harvey LAB (legal — 24 practice areas, 1,671 tasks) follows the same pattern as ReviewBench (code review) — a company deeply embedded in the domain builds its own all-pass-rubric real-task benchmark, closer to the industry's deep-water reality than a generic third-party benchmark; a shared route for evaluating professional-services agents (legal, finance, healthcare).
- **Large-scale real-research tasks as a stress test**: the ICML 2026 Reproducibility Hackathon had 1,221 people use coding agents to reproduce the core claims of 2,226 papers (34% of the conference's accepted total), with an automated judge model uniformly issuing "verified/falsified/toy-scale/inconclusive" verdicts — an extreme-scale sample of the "real-task-derived benchmark" methodology applied to open-ended research reproduction, with a quantitative baseline of 51% of papers getting at least one claim verified and 23% falsified or contested; the conclusion stresses that the most reliable results come from human-in-the-loop, not full agent autonomy in reaching a verdict.
- **Specialized judge models replacing frontier models for evaluation**: rather than building your own LLM-as-judge, an evaluation-toolchain vendor can turn a "specially trained judgment model" directly into a managed service — LangSmith's first Tuned Evaluator, Perceived Error, is post-trained on labeled conversation data and outperforms all frontier models in judgment accuracy while cutting cost by 82% (up to 98% in some scenarios); the "vertical scenarios don't need frontier intelligence" efficiency philosophy now extends to the evaluation tooling itself.
- **Benchmaxxing detection**: a high public-benchmark score doesn't prove genuine task capability — a model may have simply learned to recognize "which benchmark it's on" and reproduce benchmark-specific patterns; probes like reference disagreement, masked-entity recovery rate, and orthographic-convention selection can detect this kind of dataset fingerprinting (a concrete ASR-domain methodology; see [voice-agents](/en/topics/voice-agents)).
- **A structured-verdict model replacing generative LLM-as-judge**: Jev doesn't generate a text judgment, it returns a typed verdict directly — on 500 real agent decisions judged repeatedly, it matched human-reviewer verdicts on every call, with continuous quality-score variance 92–913x lower than mainstream LLM judges, at two orders of magnitude lower cost and latency; but a structured-verdict model can still have its ruling swayed by prompt injection — it isn't immune.
- **Source correctness is an evaluation dimension independent of factual correctness**: when an MCP agent stitches an answer together from multiple tool calls, "is the claim supported by some evidence" (factual correctness) and "is the claim's cited source actually that evidence" (source correctness) are two different things — a "cross-source conflation" error (a claim that's true but attributed to the wrong source) slips past fact-checking methods that only look at support, requiring dedicated source-aware verification (see [mcp](/en/topics/mcp)).
- **Grading an agent on system end-state, not self-reported completion**: a final response and a valid tool call are both just proxies — an agent can sound correct while writing the wrong value, changing the wrong record, or creating an extra side effect; ThinkingBox directly inspects the end-state and side effects an agent leaves in a database, repeating the same task 20 times to quantify a dimension rarely measured on its own — can it succeed reliably, not just get lucky once — extending the "don't just trust what the agent says about itself" methodology (after ProvenanceGuard's source-attribution check) to the object of "actual system-state change."
- **Decision-making/judgment is splitting off into its own specialized model category**: LangChain's Jev (09-21), OpenAI's Decisions API (10-06, powered by GPT-6 Luna), and LiquidAI's d1 (10-07, a single forward pass returning a deterministic answer) — three vendors from very different backgrounds converged on a structurally identical solution within one month: a narrowly-defined question, typed output, and cost/latency far below a general chat call; classification, routing, and deciding an agent's next action no longer default to "call a general LLM and parse a text answer" — evaluation and selection should now treat a dedicated decision model as an option alongside LLM-as-judge.
- **Methodology for building the evaluation task itself**: split "writing the task" into a human-reviewed spec-generation stage (a Markdown spec describing input/environment/scoring rubric) and an agent-automated Spec2Task conversion stage, letting task creation run in parallel while concentrating human review at the cheapest step; a "world spec" shared across tasks (data schemas, scoring methodology, domain patterns) further cuts the cost of repeated task-writing — systematizing the "real-task-derived benchmark" methodology at the engineering level of "how you actually write the tasks."

## Related Technologies

- [ai-code-review](/en/topics/ai-code-review) (what ReviewBench evaluates)
- [deep-agents](/en/topics/deep-agents) (evaluation and recovery for long-horizon agents)
- Evaluation toolchains such as LangSmith / Harbor

## Best Practices

- Build eval sets from your own real failure cases first; generic benchmark scores often correlate weakly with your scenario.
- Include prompts/strategies in what you A/B — much of "the model can't do it" is really "the strategy can't".

## Recommended Resources

- [Evaluating code review agents with ReviewBench](https://www.langchain.com/blog/evaluating-code-review-agents-with-reviewbench)

## Timeline

### [2026-10-07](/en/today/2026-10-07)

LiquidAI open-sources the decision models d1-3B/d1-omni-600M (a single forward pass returning a deterministic answer), together with 10-06's OpenAI Decisions API confirming "decision-specialized models" are becoming their own category (see [model-efficiency](/en/topics/model-efficiency)).

### [2026-10-06](/en/today/2026-10-06)

OpenAI's Decisions API opens public beta: powered by GPT-6 Luna, focused on developer-defined questions with a finite set of candidate answers, up to 10x faster than calling Luna directly, billed on input tokens only ($0.10/million, output/cache free); together with LangChain's Jev (09-21) and LiquidAI's d1 (10-07), this forms a new trend of "decision-making/judgment splitting off into its own specialized model category" (see [openai-models](/en/topics/openai-models) ・ [model-efficiency](/en/topics/model-efficiency)).

### [2026-10-03](/en/today/2026-10-03)

Microsoft × Hugging Face launch ThinkingBox: grading agents by the end-state and side effects they leave in a database, rather than trusting their final response or tool-call record; 507 stateful enterprise workflows, each run 20 times per model across 18 LLMs, built on the argument that both "the final response" and "a valid tool call" are only proxies — only the records left behind settle whether the agent actually succeeded.

### [2026-09-29](/en/today/2026-09-29)

A paper proposes ProvenanceGuard: a "source-aware" fact-checking approach for MCP agents — consuming captured MCP traces with stable tool IDs, source IDs, and raw outputs, decomposing answers into atomic claims, routing each to its specific source evidence, checking support, and comparing the claimed attribution against the actually-routed source, returning per-claim verdicts plus an overall allow/block decision — the first approach to systematize "is the citation correct" as an independent verification dimension (see [mcp](/en/topics/mcp)).

### [2026-09-21](/en/today/2026-09-21)

LangChain launches Jev and ships it into LangSmith Evals: a structured-verdict model that doesn't generate text — in LangChain's own test, repeatedly judging 500 real agent decisions, it matched human-reviewer verdicts on every call, with continuous-score variance 92–913x lower than GPT-5.6 Luna/Terra and Claude Sonnet 4.6, 0.44 seconds per call, $0.34 for the whole test run (versus $28.17 for Claude Sonnet 4.6). This extends the 08-18 LangSmith Tuned Evaluators "dedicated judge model replaces frontier-model evaluation" idea, but for the first time with large-scale consistency data showing complete agreement with a human baseline; a structured-verdict model can still have its ruling swayed by prompt injection.

### [2026-08-25](/en/today/2026-08-25)

LangChain shares its methodology for building agent evaluation environments and tasks: a spec-generation (human-reviewed) + Spec2Task conversion (agent-automated) two-stage pipeline, with a "world spec" carrying information shared across tasks; already used to build internal benchmarks for GTM research, code review and trace mining. Same day, LangSmith Engine gets an upgrade: its IssueBench score more than doubles, having scanned 60M+ traces to identify 20,000+ issues (see [enterprise-ai-agents](/en/topics/enterprise-ai-agents)).

### [2026-08-21](/en/today/2026-08-21)

HuggingFace proposes an ASR benchmaxxing-detection methodology: three probes — reference disagreement, masked-entity retrieval, and orthographic switching — find that some speech-recognition models exhibit "dataset fingerprinting" behavior rather than genuinely better transcription, giving the "do benchmark scores reflect real capability" question its first reproducible detection method in the speech-recognition vertical (see [voice-agents](/en/topics/voice-agents)).

### [2026-08-18](/en/today/2026-08-18)

LangSmith launches Tuned Evaluators, a managed service: the first evaluator, Perceived Error, is post-trained specifically on labeled conversational agent traces, outperforms all frontier models in judgment accuracy while cutting cost by 82% (up to 98% for some customer workloads); threads must meet a minimum two rounds of human-AI message pairs, evaluation completes within 12 hours, and billing applies only to successful runs.

### [2026-08-13](/en/today/2026-08-13)

HuggingFace publishes ICML 2026 Reproducibility Hackathon results: 1,221 participants used coding agents like Claude Code, Codex and Cursor to attempt reproducing the claims of 2,226 papers, producing 6,816 reproduction logbooks and 35,908 judged claims — 51% of examined papers had at least one claim verified, 23% had claims falsified or contested, and 266 were fully verified; agents showed limitations like getting stuck in loops and misreading scale-dependent behavior, and the most reliable results came from human-in-the-loop (see [coding-agents](/en/topics/coding-agents)).

### [2026-08-09](/en/today/2026-08-09)

Harvey open-sources Harvey LAB: a legal agent benchmark — 24 practice areas, 1,671 real tasks (including M&A data-room scenarios), scored via all-pass rubrics plus an LLM judge — the "real-task-derived benchmark" methodology landing in the high-expertise legal vertical, built by a leading company in the domain itself.

### [2026-08-04](/en/today/2026-08-04)

LangChain proposes a three-axis framework for voice agents: execution (tool-call/process correctness), outcomes (business attainment), experience (latency/interruptions/naturalness) — voice turns "experience" from a soft impression into an evaluation axis of its own (see [voice-agents](/en/topics/voice-agents)).

### [2026-07-31](/en/today/2026-07-31)

LangChain ships ReviewBench: 59 tasks derived from real LangSmith PR review comments, LLM-as-judge against baseline, F1 scoring. Models recover only ~30% of baseline issues with basic prompting; a structured review prompt lifts scores markedly.
