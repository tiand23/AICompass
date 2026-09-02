# 企業 AI リファレンスアーキテクチャ

ナレッジベース QA・設計書生成・コード生成の 3 つのシナリオを、資産オンボーディング、エージェントメモリ、共有基盤のリクエストライフサイクルまで、1 枚の図に統合。日本企業のデータガバナンスと稟議承認文化の制約に沿って選定：データ配置は自社ホスト／国内リージョンのクラウドを優先、書き込み操作は人的承認を必須化（承認チェーンの段数は設定可能）、コード生成は IDE 組み込みではなく CLI harness 経由。

<div class="diagram-frame">
  <img src="/diagrams/enterprise-ai-architecture-ja.svg" alt="企業 AI リファレンスアーキテクチャ図">
</div>

ソースファイル：[enterprise-ai-architecture-ja.drawio](/diagrams/enterprise-ai-architecture-ja.drawio)（[draw.io](https://app.diagrams.net/) で開いて編集を続けられます）

<style>
.diagram-frame {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  background: #ffffff;
  margin: 24px 0;
}
.diagram-frame img {
  display: block;
  width: 100%;
  min-width: 1400px;
  height: auto;
}
</style>
