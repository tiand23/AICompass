---
aside: false
---

# QA Agent・方式1：ハイブリッド検索（記憶層あり）

全文 / ベクトル / グラフ / 画像ベクトルの 4 系統並行検索 + 統一表現化 + 再ランキングという標準的な RAG アーキテクチャです。広さ優先で、どの検索経路を使うべきか判断がつかない場面に向きます。記憶層は企業 AI リファレンスアーキテクチャ Section A の 4 ステップループ（記憶ストアを検索 → 階層的較正 → タスク実行 → 主張を書き込み）を踏襲し、セッションを跨いだ文脈の継続性を保証します。

他の方式：[方式2・グラフクエリ優先](/ja/diagrams/qa-02-graph-first) · [方式3・grep を中心に + harness](/ja/diagrams/qa-03-grep-harness) · [方式4・品質フィードバックループ](/ja/diagrams/qa-04-quality-loop)

<div class="diagram-frame">
  <img src="/diagrams/qa-01-hybrid-retrieval-ja.svg" alt="QA-1ハイブリッド検索のアーキテクチャ図">
</div>

ソースファイル：[qa-01-hybrid-retrieval-ja.drawio](/diagrams/qa-01-hybrid-retrieval-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

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
