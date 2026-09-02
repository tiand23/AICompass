---
aside: false
---

# 資産構造化・方式1：汎用マルチパイプライン構造化

企業 AI リファレンスアーキテクチャの [Section 0・資産オンボーディング](/ja/diagrams/enterprise-ai-architecture) では「文書は構造化が前提」としか触れておらず、具体的な構造化方式までは踏み込んでいません——これはその代表的な方式の一つです：全文 / ベクトル / ナレッジグラフ / 画像ベクトルの 4 系統を並行して取り込み、資産の業務価値による区別はしません。AI（VLM）の関与度が高い方式です。資産の異種性が高く、厳密な構造化を求めない場面に向きます。

他の方式：[方式2・全体グラフ化](/ja/diagrams/asset-structuring-02-graph) · [方式3・grep 中心型](/ja/diagrams/asset-structuring-03-grep)

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-01-general-ja.svg" alt="方式1・汎用マルチパイプライン構造化のアーキテクチャ図">
</div>

ソースファイル：[asset-structuring-01-general-ja.drawio](/diagrams/asset-structuring-01-general-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

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
