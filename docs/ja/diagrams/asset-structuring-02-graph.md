---
aside: false
---

# 資産構造化・方式2：全体グラフ化（オントロジー駆動）

先にオントロジー（Ontology）を設計し、すべての抽出をこの統一 schema に従わせ、最終的に 1 枚のナレッジグラフへ収束させます——方式1のように複数の独立インデックスを並行出力するのとは異なります。前段のオントロジー設計への投資は大きいですが、資産の構造が比較的整っており、業務概念を事前にモデル化できる場面に向きます。

他の方式：[方式1・汎用マルチパイプライン構造化](/ja/diagrams/asset-structuring-01-general) · [方式3・grep 中心型](/ja/diagrams/asset-structuring-03-grep)

<div class="diagram-frame">
  <img src="/diagrams/asset-structuring-02-graph-ja.svg" alt="方式2・全体グラフ化のアーキテクチャ図">
</div>

ソースファイル：[asset-structuring-02-graph-ja.drawio](/diagrams/asset-structuring-02-graph-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

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
