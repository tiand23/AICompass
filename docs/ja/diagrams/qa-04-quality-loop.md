---
aside: false
---

# QA Agent・方式4：品質フィードバックループ（セッション内検索状態・インデックスの鮮度・評価フィードバック）

本図は第4の競合案ではなく、QA-1/2/3 のいずれかの検索アーキテクチャを選定した後に共用する品質保証層です。3つの共通の欠落を補います：複数ターンの追加質問で前回の検索結果を再利用すべきか、インデックスの内容が古くなったことをどう検知するか、回答品質が悪い場合どう発見し改善するか——評価フィードバックループは[企業 AI リファレンスアーキテクチャ](/ja/diagrams/enterprise-ai-architecture)の Section C にある「根本原因の自動診断→人手レビューキュー、変更を自動適用しない」というガバナンスチェーンに対応しています。

他の方式：[方式1・ハイブリッド検索](/ja/diagrams/qa-01-hybrid-retrieval) · [方式2・グラフクエリ優先](/ja/diagrams/qa-02-graph-first) · [方式3・grep を中心に + harness](/ja/diagrams/qa-03-grep-harness)

<div class="diagram-frame">
  <img src="/diagrams/qa-04-quality-loop-ja.svg" alt="QA-4品質フィードバックループのアーキテクチャ図">
</div>

ソースファイル：[qa-04-quality-loop-ja.drawio](/diagrams/qa-04-quality-loop-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

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
