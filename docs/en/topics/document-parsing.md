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
