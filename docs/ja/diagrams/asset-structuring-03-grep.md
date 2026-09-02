---
aside: false
---

# 資産構造化・方式3：grep 中心型

精度はツールから生まれる、AI からではない：表形式の内容は機械的に抽出（コスト0・100%正確）、AI は機械にできないこと——図を読む、文章を読む、要約を書く——だけを担います。実際に検証済みのエンジニアリング実装（ExcelSheetToPngText → DesignDocIndexer → DesignDocAsk）を参照しています。構造化の程度がまちまちで、正確な影響調査（「このフィールドを変更したらどこに影響するか」）が必要な場面に向きます。

他の方式：[方式1・汎用マルチパイプライン構造化](/ja/diagrams/asset-structuring-01-general) · [方式2・全体グラフ化](/ja/diagrams/asset-structuring-02-graph)

## 簡明版

索引・台帳・harness ツール呼び出しループという 3 つの核心概念だけを残し、機械的抽出の内部メカニズム（二段階推論、ヘルスチェック、corrections テーブルなど）と 10 個のツールの完全な一覧は省略しています——核心思想を素早く理解するにはこちら。

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-04-grep-simple-ja.svg" alt="方式3簡明版のアーキテクチャ図">
</div>

ソースファイル：[asset-structuring-04-grep-simple-ja.drawio](/diagrams/asset-structuring-04-grep-simple-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

## 詳細版

実装の詳細まで含む、技術チーム内部の参照用です。

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-03-grep-ja.svg" alt="方式3詳細版のアーキテクチャ図">
</div>

ソースファイル：[asset-structuring-03-grep-ja.drawio](/diagrams/asset-structuring-03-grep-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

<style>
.diagram-frame {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  background: #ffffff;
  margin: 24px -4rem;
}
.diagram-frame img {
  display: block;
  width: 100%;
  height: auto;
}
@media (max-width: 960px) {
  .diagram-frame {
    margin: 24px 0;
  }
}
</style>
