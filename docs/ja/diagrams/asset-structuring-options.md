---
aside: false
---

# 資産構造化・3つの方式比較

企業 AI リファレンスアーキテクチャの [Section 0・資産オンボーディング](/ja/diagrams/enterprise-ai-architecture) では「文書は構造化が前提」としか触れておらず、具体的な構造化方式までは踏み込んでいません——構造化の方式は複数あり、ベクトル化はその一つに過ぎません。ここでは代表的な 3 つの設計思想を比較し、資産の特性に応じた選定に役立てます。

| 方式 | 核心アイデア | 向く場面 |
|---|---|---|
| 1・汎用マルチパイプライン構造化 | 全文 / ベクトル / ナレッジグラフ / 画像ベクトルの 4 系統を並行して取り込む、資産の価値による区別なし | 資産の異種性が高く、厳密な構造化を求めない場面 |
| 2・全体グラフ化 | 先にオントロジー（Ontology）を設計し、すべての抽出をこの schema に従わせ、最終的に 1 枚のナレッジグラフへ収束 | 資産の構造が比較的整っており、業務概念を事前にモデル化できる場面 |
| 3・grep 中心型 | 精度はツールから生まれる、AI からではない：表形式の内容は機械的に抽出（コスト0・100%正確）、AI は機械にできないことだけを担う——実際に検証済みのエンジニアリング実装を参照 | 構造化の程度がまちまちで、正確な影響調査（「このフィールドを変更したらどこに影響するか」）が必要な場面 |

## 方式1・汎用マルチパイプライン構造化

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-01-general-ja.svg" alt="方式1・汎用マルチパイプライン構造化のアーキテクチャ図">
</div>

ソースファイル：[asset-structuring-01-general-ja.drawio](/diagrams/asset-structuring-01-general-ja.drawio)

## 方式2・全体グラフ化（オントロジー駆動）

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-02-graph-ja.svg" alt="方式2・全体グラフ化のアーキテクチャ図">
</div>

ソースファイル：[asset-structuring-02-graph-ja.drawio](/diagrams/asset-structuring-02-graph-ja.drawio)

## 方式3・grep 中心型（機械的抽出優先）

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-03-grep-ja.svg" alt="方式3・grep中心型のアーキテクチャ図">
</div>

ソースファイル：[asset-structuring-03-grep-ja.drawio](/diagrams/asset-structuring-03-grep-ja.drawio)

### 方式3・簡明版（顧客向け）

詳細版は情報密度が高く、技術チーム内部の参照に向いています。顧客に核心思想を説明する際はこちらが適切です——索引・台帳・harness ツール呼び出しループという 3 つの核心概念だけを残し、機械的抽出の内部メカニズム（二段階推論、ヘルスチェック、corrections テーブルなど）と 10 個のツールの完全な一覧は省略しています。実装の詳細は上記の詳細版を参照してください。

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-04-grep-simple-ja.svg" alt="方式3簡明版のアーキテクチャ図">
</div>

ソースファイル：[asset-structuring-04-grep-simple-ja.drawio](/diagrams/asset-structuring-04-grep-simple-ja.drawio)

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
