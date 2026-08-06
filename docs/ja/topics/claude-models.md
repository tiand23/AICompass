# Claude Models

## 概要

Anthropic の Claude モデルファミリー。現在の主なティア：フラッグシップの Opus 系（最新は Opus 5）、新設の Mythos クラス（Fable 5 / Mythos 5。Opus の上位に位置し、両者は同一の基盤モデル。Fable はデュアルユース能力への追加の安全対策付きで一般提供、Mythos は承認済み組織限定）、バランス型の Sonnet、軽量の Haiku。Claude API、Amazon Bedrock、Google Vertex AI、Microsoft Foundry から利用できる。

## なぜ重要か

Claude はエージェントとコーディング用途における主流のモデル選択肢のひとつ。モデルラインの更新（コンテキストウィンドウ、effort 機構、価格、破壊的変更）はいずれも、LLM アプリケーションのモデル選定・コスト・移行作業量に直結する。

## コアコンセプト

- **Effort レベル**：`low` / `medium` / `high` / `xhigh` / `max` の 5 段階。Opus 5 以降の主要な制御手段で、手作業のプロンプト調整の多くを置き換える。`max` は能力最優先のクリティカルな作業向け。
- **Thinking**：拡張思考。Opus 5 ではデフォルト有効。effort `xhigh`/`max` では無効化不可（400 が返る）。
- **コンテキストと出力**：Opus 5 は 1M トークンコンテキスト（デフォルト＝最大）、最大出力 128k。
- **Fast mode**：Opus 帯モデルを高速出力で動かす（小型モデルへの格下げではない）。対応モデルは世代により変わる（4.7 は廃止——4.8 / 5 を使用）。

## 関連技術

- Claude Code（未作成）
- Claude Managed Agents（ホスト型エージェントランタイム）
- Amazon Bedrock / Vertex AI / Microsoft Foundry（サードパーティ提供チャネル）

## ベストプラクティス

- Opus 5 への移行時は 2 点を確認：高 effort と `thinking: disabled` の組み合わせ（400 になる）、Opus 4.7 fast mode への依存（廃止済み）。
- 品質/コスト/レイテンシのトレードオフはモデルの切り替えではなく effort で調整する。

## 推奨学習リソース

- [Claude プラットフォーム リリースノート](https://platform.claude.com/docs/en/release-notes/overview)
- [What's new in Claude Opus 5](https://platform.claude.com/docs/en/about-claude/models/whats-new-opus-5)
- [モデル概要](https://platform.claude.com/docs/en/about-claude/models/overview)

## Timeline

### [2026-08-05](/ja/today/2026-08-05)

Claude Enterprise が Inference Hooks（beta）を導入：管理対象 prompt が推論前に組織のセキュリティサーバーからリアルタイムで allow/deny 裁定を受ける。claude.ai/Cowork/Claude Code 対象（詳細は [agentic-safety](/ja/topics/agentic-safety)）。同日、Claude Opus 4.1 が正式に廃止——リクエストはエラーを返すようになり、Opus 5 への移行が推奨される。

### [2026-08-01](/ja/today/2026-08-01)

Managed Agents の Dreams（research preview）が Opus 5 に対応（詳細は [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)）。

### [2026-07-24](/ja/today/2026-07-24)

Claude Opus 5 リリース：1M コンテキスト（デフォルト＝最大）、128k 出力、thinking デフォルト有効、価格は Opus 4.8 と同じ $5/$25。5 段階の effort が主要制御手段に。破壊的変更——高 effort での thinking 無効化不可、Opus 4.7 fast mode 廃止。同日、mid-conversation tool changes が beta に（prompt cache を維持したままターン間でツール変更）、`fallbacks` に `"default"` モード追加。

### [2026-07-22](/ja/today/2026-07-22)

Claude Managed Agents 更新：モデル設定での effort 指定、environment / memory store ライフサイクルの webhook、`initial_events` によるセッション初期化と同時起動、更新時 `version` のオプション化（楽観的並行性制御）、スレッド単位イベントストリームの event deltas 対応。
