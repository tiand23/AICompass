# Document Parsing

## Overview

Document parsing and structuring: turning PDFs, scans, tables and charts into LLM-ready structured data (Markdown/JSON). The 2026 mainstream is **VLM (vision-language model) + semantic reconstruction — agentic parsing** — displacing template OCR and traditional IDP. Representative tools: LlamaParse/LlamaExtract, Docling, Reducto, Unstructured.

## Why It Matters

80% of enterprise knowledge lives in unstructured documents, and parsing quality is the ceiling of the whole RAG/knowledge pipeline — garbage in, garbage out. The generational shift at this layer (templates → semantic understanding) is happening now and directly moves the feasibility frontier of document applications.

## Core Concepts

- **Agentic parsing vs template OCR**: templates extract by fixed layout and break on new layouts; agentic parsing understands structure the way a human does (section hierarchy, tables, captions) and is layout-change-immune.
- **Semantic reconstruction**: recovering the document's logical structure, not just its text — the prerequisite for good RAG chunking.
- **Schema-based structured extraction**: define target fields and get typed JSON back (e.g. LlamaExtract) — the most reliable path to clean structured data.
- **Selection notes**: LlamaParse is the most production-ready for RAG stacks; Docling fits privacy-sensitive self-hosting (unusually strong on technical/scientific content); Reducto ranked #1 on LongExtractBench with 99.6% precision/recall.
- **Spatial grounding**: the structural gap between specialized parsers and general frontier models — frontier models score ~8% on ParseBench visual grounding versus 55-80% for specialized engines; agent evidence chains need "which page, which location", which anchors the "OCR won't be commoditized" argument.
- **"Fluent" errors are more dangerous than "garbled" errors**: traditional OCR fails into visibly broken garbage; LLM OCR fails into fluent, plausible-looking but incorrect text — when visual evidence is ambiguous, models favor "most probable as text" over "best supported by the image," and high-entropy strings like account/part numbers are especially vulnerable since the language prior is weakest exactly where it's needed most.
- **Page-averaged metrics mask critical-field errors**: character/word error rate average across a page, so a page reporting 99% accuracy can still be worthless if the 1% wrong is a total or an identifier — acceptance testing should measure accuracy per field type (especially high-entropy fields), not a single page-average score.
- **Durable workflows as the scheduling backbone for large-scale parsing pipelines**: document processing is naturally long-running, multi-stage, and failure-prone (a single document may need OCR + a vision model + multiple passes) — using a durable workflow engine like Temporal to model "resource coordination" itself as an observable workflow entity (e.g. a semaphore Workflow for concurrency control) is more reliable than hand-rolled locks/retry counters, and lets failed jobs resume from a checkpoint instead of restarting from scratch (see [agent-workflow](/en/topics/agent-workflow)).

## Related Technologies

- [rag](/en/topics/rag) (parsing is RAG's first mile)
- [vector-databases](/en/topics/vector-databases) (storage and retrieval of parsed output)

## Best Practices

- Benchmark candidates on your own 20 hardest documents before choosing — vendor demos all look great; your tables and scans are the real exam.
- For table-heavy scenarios, go schema-based structured extraction first rather than cleaning up generic parse output downstream.

## Recommended Resources

- [Docling vs LlamaParse vs Unstructured vs Reducto](https://llms.reducto.ai/document-parser-comparison)
- [Top document parsing APIs for 2026 (LlamaIndex)](https://www.llamaindex.ai/insights/top-document-parsing-apis)

## Timeline

### [2026-08-17](/en/today/2026-08-17)

LlamaIndex details rebuilding its document-processing scheduling on Temporal: migrating from a homegrown RabbitMQ system lacking native durability/fairness primitives to a Workflow+Activity model, using a semaphore Workflow for concurrency control and "durable function execution" to eliminate silent job death from machine OOM events; now handles 130+ file types and processes tens of millions of pages daily (see [agent-workflow](/en/topics/agent-workflow)).

### [2026-08-12](/en/today/2026-08-12)

LlamaIndex argues LLM OCR errors aren't getting rarer, just quieter: breaks down three mainstream architectures (OCR+LLM correction, native VLM transcription, agentic segmentation-and-routing), each failing its own way; the core mechanism is that models favor language priors over image evidence when visual signal is ambiguous, and CER/WER-style page-averaged metrics mask critical-field errors — production systems need segmentation, routing, validation loops and pixel-level citations as architectural controls.

### [2026-08-11](/en/today/2026-08-11)

LlamaIndex releases ExtractBench: an open benchmark of 14 extraction systems across 370 real enterprise documents, scored on completeness, grounding and cost per page — a reproducible-data follow-up to the "OCR won't be commoditized" position piece from a week earlier, turning the "specialized parser vs general model" selection debate from argument into measured comparison.

### [2026-08-05](/en/today/2026-08-05)

LlamaIndex argues "document OCR is not getting commoditized": on ParseBench, specialized engines lead GPT-5.5 by ~20 points at lower cost; the visual-grounding gap (8% vs 55-80%) is structural; labs' post-training compute doesn't go to document reading. Positioned (their own benchmark), but the evidence belongs in long-term selection judgment.

### [2026-08-04](/en/today/2026-08-04)

Firecrawl open-sources pdf-inspector (Rust, 8.2k stars): OCR-free PDF classification (text/scanned/image/mixed) in 10-50ms plus position-aware extraction to Markdown, with WASM on-device support — the pipeline's "first triage" as a component, same trend as Parse Gateway's page-level routing.

### [2026-07-30](/en/today/2026-07-30)

LlamaIndex released Parse Gateway: routing each document page to the best-suited parser by content characteristics — acknowledging "no single parser suffices" and engineering around it.

### 2026-07-28

Topic created. Status: VLM + semantic reconstruction is the mainstream paradigm; Agentic Document Processing is displacing traditional IDP; LlamaParse/Docling/Reducto/Unstructured form the first tier; schema-based extraction has split into its own product line.

### [2026-07-21](/en/today/2026-07-21)

LlamaIndex argued the real alternative to template OCR is agentic parsing, not a better template — layout adaptivity is the generational difference.
