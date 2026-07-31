# Document Parsing

## 概要

ドキュメント解析と構造化：PDF・スキャン・表・図を LLM が使える構造化データ（Markdown/JSON）に変換する。2026 年の主流は **VLM（視覚言語モデル）+ 意味再構築のエージェント型解析**で、テンプレート OCR と従来型 IDP を置き換えつつある。代表ツール：LlamaParse/LlamaExtract、Docling、Reducto、Unstructured。

## なぜ重要か

企業ナレッジの 8 割は非構造化文書の中にあり、解析品質が RAG/ナレッジベースパイプライン全体の天井になる——ゴミを入れればゴミが出る。この層の世代交代（テンプレート → 意味理解）は今まさに進行中で、文書系アプリの実現可能性の境界を直接動かしている。

## コアコンセプト

- **エージェント型解析 vs テンプレート OCR**：テンプレートは固定レイアウトで抽出し、新レイアウトで壊れる；エージェント型解析は人間のように構造を理解し（章の階層、表、図注）、レイアウト変化に免疫がある。
- **意味再構築**：文字だけでなく文書の論理構造を復元する——RAG チャンキング品質の前提。
- **スキーマベース構造化抽出**：目標フィールドの schema を定義し型付き JSON を直接得る（LlamaExtract など）——きれいな構造化データへの最も確実な道。
- **選定メモ**：LlamaParse は RAG スタック向けの本番成熟度が最高；Docling はプライバシー重視のセルフホストに適合（技術・科学文書に特に強い）；Reducto は LongExtractBench で精度/再現率 99.6% の首位。

## 関連技術

- [rag](/ja/topics/rag)（解析は RAG の最初の工程）
- [vector-databases](/ja/topics/vector-databases)（解析成果物の保存・検索層）

## ベストプラクティス

- 自社で最も難しい 20 文書で評価してから選定する——ベンダーデモはどれも美しい。本当の試験問題はあなたの表とスキャンだ。
- 複雑な表が多いシナリオはスキーマベース抽出を最優先に——汎用解析結果を下流で後始末しない。

## 推奨学習リソース

- [Docling vs LlamaParse vs Unstructured vs Reducto 比較](https://llms.reducto.ai/document-parser-comparison)
- [2026 ドキュメント解析 API ランキング（LlamaIndex）](https://www.llamaindex.ai/insights/top-document-parsing-apis)

## Timeline

### [2026-07-30](/ja/today/2026-07-30)

LlamaIndex が Parse Gateway を発表：ページの内容特性に応じて最適なパーサーへルーティング——「単一パーサーでは足りない」を認めた工学的解。

### 2026-07-28

Topic 作成。現状：VLM + 意味再構築が主流パラダイムとなり、Agentic Document Processing が従来型 IDP を置換中；LlamaParse/Docling/Reducto/Unstructured が第一梯団、スキーマベース抽出は独立した製品ラインに。

### [2026-07-21](/ja/today/2026-07-21)

LlamaIndex が「テンプレート OCR の真の代替はより良いテンプレートではなくエージェント型解析」と論じた——レイアウト適応性が世代の違い。
