# Document Parsing

## 简介

文档解析与结构化：把 PDF、扫描件、表格、图表变成 LLM 可用的结构化数据（Markdown/JSON）。2026 年的主流是 **VLM（视觉语言模型）+ 语义重建的 Agentic 解析**，正在取代模板 OCR 和传统 IDP。代表工具：LlamaParse/LlamaExtract、Docling、Reducto、Unstructured。

## 为什么重要

企业知识 80% 躺在非结构化文档里，解析质量是整个 RAG/知识库管线的天花板——垃圾进垃圾出，解析错了后面全白搭。这一层的技术换代（模板 → 语义理解）正在发生，直接决定文档类应用的可行边界。

## 核心概念

- **Agentic 解析 vs 模板 OCR**：模板按固定版式抽取，遇到新版式就崩；agentic 解析像人一样理解结构（章节层级、表格、图注），对版式变化免疫。
- **语义重建**：不止抽文字，还原文档的逻辑结构——这是 RAG 分块质量的前提。
- **结构化抽取（schema-based）**：定义目标字段 schema，直接产出类型化 JSON（如 LlamaExtract），是拿干净结构化数据最可靠的路径。
- **选型要点**：LlamaParse 对 RAG 栈生产就绪度最高；Docling 适合隐私敏感的自托管（技术/科学文档尤强）；Reducto 在 LongExtractBench 精确率/召回率 99.6% 居首。
- **空间定位（spatial grounding）**：专用解析器与通用大模型的结构性差距——前沿模型在 ParseBench 上的视觉定位仅约 8%，专用引擎 55-80%；Agent 的证据链需要"数据出自哪页哪个位置"，这是"OCR 不会被前沿模型商品化"论点的核心依据。

## 相关技术

- [rag](/topics/rag)（解析是 RAG 的第一道工序）
- [vector-databases](/topics/vector-databases)（解析产物的存储与检索层）

## 最佳实践

- 先用自己最难的 20 份文档做解析评测再选型——厂商 demo 都很美，你的表格和扫描件才是真考题。
- 复杂表格多的场景优先看结构化抽取（schema-based）路线，别在通用解析结果上二次擦屁股。

## 推荐学习资料

- [Docling vs LlamaParse vs Unstructured vs Reducto 对比](https://llms.reducto.ai/document-parser-comparison)
- [2026 文档解析 API 排行（LlamaIndex）](https://www.llamaindex.ai/insights/top-document-parsing-apis)

## Timeline

### [2026-08-11](/today/2026-08-11)

LlamaIndex 发布 ExtractBench：370 份真实企业文档、14 套抽取系统的开放横评，按完整性（completeness）、根据性（grounding）、每页成本三维打分——是一周前"OCR 不会被前沿模型商品化"立场文章的可复现数据后续，把"专用解析器 vs 通用大模型"选型辩论从主张变成实测对比。

### [2026-08-05](/today/2026-08-05)

LlamaIndex 发文论证"文档 OCR 不会被前沿模型商品化"：ParseBench 上专用引擎领先 GPT-5.5 约 20 分且更便宜，视觉定位差距（8% vs 55-80%）是结构性的；实验室后训练算力不投文档阅读。带立场（自家基准）但论据值得纳入长期选型判断。

### [2026-08-04](/today/2026-08-04)

Firecrawl 开源 pdf-inspector（Rust，累计 8.2k star）：10-50ms 免 OCR 分类 PDF 类型（文本/扫描/图像/混合）并做位置感知抽取转 Markdown，支持 WASM 端侧运行——解析管线的"第一道分诊"组件化，与 Parse Gateway 的页面级路由同趋势。

### [2026-07-30](/today/2026-07-30)

LlamaIndex 发布 Parse Gateway：按页面内容特征把文档页路由到最合适的解析器——承认"单解析器不够"并给出工程化方案。

### 2026-07-28

建档。现状：VLM + 语义重建成为主流范式，Agentic Document Processing 取代传统 IDP；LlamaParse/Docling/Reducto/Unstructured 构成第一梯队，schema-based 结构化抽取独立成产品线。

### [2026-07-21](/today/2026-07-21)

LlamaIndex 发文论证模板 OCR 的真正替代品是 agentic 解析而非更好的模板——版式自适应是代际差异。
