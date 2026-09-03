---
aside: false
---

# QA Agent・方式2：グラフクエリ優先（記憶層あり）

関係・パス系の質問はグラフのマルチホップ探索（予算保護付き、無限に探索しない）を主線とし、属性・一般系の質問はフォールバック検索へ降格します。売りは説明可能性——「どの関係チェーンを辿って結論に至ったか」を明示できる点で、「影響範囲・関連関係」を問う場面に向き、方式1とは補完関係にあります。記憶層は企業 AI リファレンスアーキテクチャ Section A の 4 ステップループを踏襲しています。

他の方式：[方式1・ハイブリッド検索](/ja/diagrams/qa-01-hybrid-retrieval) · [方式3・grep を中心に + harness](/ja/diagrams/qa-03-grep-harness) · [方式4・品質フィードバックループ](/ja/diagrams/qa-04-quality-loop)

<div class="diagram-frame">
  <img src="/diagrams/qa-02-graph-first-ja.svg" alt="QA-2グラフクエリ優先のアーキテクチャ図">
</div>

ソースファイル：[qa-02-graph-first-ja.drawio](/diagrams/qa-02-graph-first-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

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
