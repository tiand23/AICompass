---
aside: false
---

# QA Agent・方式3：grep を中心に + harness（記憶層あり）

精度優先：LLM は何を調べるか・いつ十分かを決定するだけで、実際にクエリを実行するのは下記のツール（grep / 台帳 / resolve など）——ツール自体には AI が含まれません。[資産構造化・方式3](/ja/diagrams/asset-structuring-03-grep) の harness ループ機構を汎用化したバージョンで、資産構造化シナリオの一区分から、独立した QA agent アーキテクチャへと昇格させました。

**記憶層について**：図では二層に分けています——**セッション内記憶**（実線枠、DesignDocAsk で実装済みの `history` 機構に対応、セッション終了とともに消失）と**セッション横断の永続記憶**（破線枠 + 赤陶色の注意喚起ボックス、実装済み機能を基にした設計上の拡張であり、DesignDocAsk では現時点で未実装）。両者を混同しないよう明記しています。

他の方式：[方式1・ハイブリッド検索](/ja/diagrams/qa-01-hybrid-retrieval) · [方式2・グラフクエリ優先](/ja/diagrams/qa-02-graph-first) · [方式4・品質フィードバックループ](/ja/diagrams/qa-04-quality-loop)

<div class="diagram-frame">
  <img src="/diagrams/qa-03-grep-harness-ja.svg" alt="QA-3grepを中心にharnessのアーキテクチャ図">
</div>

ソースファイル：[qa-03-grep-harness-ja.drawio](/diagrams/qa-03-grep-harness-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

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
