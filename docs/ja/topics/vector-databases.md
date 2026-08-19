# Vector Databases

## 概要

ベクトルデータベース：RAG とエージェントメモリの保存・検索層。2026 年の版図は収斂済み：Pinecone（マネージドのリーダー）、Qdrant（Rust 製 OSS の速度リーダー）、Weaviate（ハイブリッド検索最強）、Milvus（超大規模）、Chroma（開発体験）、pgvector（Postgres 統合のデフォルト）、Vespa（大規模ハイブリッド負荷）。

## なぜ重要か

選定ミスのコストはスケール時に爆発する（レイテンシ・コスト・再現率の崩壊）一方、移行コストは非常に高い。同時に「専用ベクトル DB は必要か」自体がアーキテクチャ論点になった——pgvector により、Postgres ユーザーの多くの場面で専用 DB は不要になった。

## コアコンセプト

- **ハイブリッド検索は標準装備**：ベクトル類似度 + BM25 キーワードの併用が 2026 年本番 RAG のベースライン；OSS 実装は Weaviate と Qdrant が最強。
- **規模で選ぶ**：<100 万ベクトル → Chroma/pgvector で十分；100 万〜1,000 万 → pgvector(HNSW)/Qdrant/Weaviate/Pinecone；1,000 万〜1 億 → Qdrant/Weaviate/Pinecone/Milvus；1 億+ → Milvus/Vespa/Pinecone Enterprise。
- **性能の目安**：Qdrant が OSS 速度でリード（一般的負荷で 10〜25% 高速、1,000 万ベクトルで p99 約 12ms）；ただし pgvectorscale のような拡張は特定負荷で桁違いに逆転する——ベンチマークは自分の負荷で。
- **早すぎる専用 DB 導入をしない**：Postgres が既にあり中小規模なら、pgvector がデフォルトの正解。
- **マルチベクトル（後期相互作用）検索**：ColBERT 式のアプローチ——文書全体を 1 つのベクトルに圧縮するのではなく、token ごとに 1 つのベクトルを保持し、「相互作用」をスコアリング段階まで遅らせる（MaxSim 演算子：各クエリ token について文書内の全 token の中から類似度最大のものを見つけて合計する）。同規模ではマルチベクトルが多くのデータセットで稠密ベクトルより精度が高いが、ストレージコストは桁違いに高い（PLAID インデックス/token プーリングで圧縮可能）。Sentence Transformers v6.0 以降ネイティブサポートされ、これまでニッチだったこの路線が主流ライブラリに入ったことを示す。

## 関連技術

- [rag](/ja/topics/rag)（消費側）
- [document-parsing](/ja/topics/document-parsing)（上流のデータ生産）

## ベストプラクティス

- 自分のデータとクエリ分布で再現率/レイテンシを測る。公開ベンチマークは候補の絞り込みまで。
- 初日からハイブリッド検索を有効にする（純ベクトルは固有名詞・コード・型番系クエリの再現率が悪い）。

## 推奨学習リソース

- [2026 ベクトルデータベース完全比較（Firecrawl）](https://www.firecrawl.dev/blog/best-vector-databases)
- [Qdrant vs Pinecone vs pgvector 選定ガイド](https://www.knowsync.ai/blog/choosing-vector-database-qdrant-pinecone-pgvector-2026)

## Timeline

### [2026-08-18](/ja/today/2026-08-18)

Sentence Transformers v6.0 が `MultiVectorEncoder` を追加し、ColBERT 式のマルチベクトル/後期相互作用 Embedding をネイティブサポート：同規模モデルの比較では、マルチベクトル版（LateOn）が NanoBEIR の 13 データセット中 9 つで対応する稠密版（DenseOn）を上回るが、同じ文書バッチのエンコードに必要なストレージは約 20〜40 倍高い（PLAID インデックス/token プーリングで大幅に圧縮可能）；Qdrant/Weaviate/Vespa などのネイティブインデックスに既に対応済み（詳細は [rag](/ja/topics/rag)）。

### 2026-07-28

Topic 作成。現状：市場は混戦から明確なカテゴリへ収斂；ハイブリッド検索が本番デフォルトに；pgvector エコシステム（pgvectorscale 含む）により中小規模では「専用 DB なし」がデフォルトの選択に。
