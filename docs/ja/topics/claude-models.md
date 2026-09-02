# Claude Models

## 概要

Anthropic の Claude モデルファミリー。現在の主なティア：フラッグシップの Opus 系（最新は Opus 5）、Opus の上位に位置する Mythos クラス（最新は Fable 5.1 / Mythos 5.1。両者は同一の基盤モデルだが安全対策のレベルが異なり、Fable は全ユーザー向けに一般提供、Mythos は Anthropic の信頼済みアクセスプログラムに参加する米国企業/個人限定）、バランス型の Sonnet、軽量の Haiku。Claude API、Amazon Bedrock、Google Vertex AI、Microsoft Foundry から利用できる。

## なぜ重要か

Claude はエージェントとコーディング用途における主流のモデル選択肢のひとつ。モデルラインの更新（コンテキストウィンドウ、effort 機構、価格、破壊的変更）はいずれも、LLM アプリケーションのモデル選定・コスト・移行作業量に直結する。

## コアコンセプト

- **Effort レベル**：`low` / `medium` / `high` / `xhigh` / `max` の 5 段階。Opus 5 以降の主要な制御手段で、手作業のプロンプト調整の多くを置き換える。`max` は能力最優先のクリティカルな作業向け。
- **Thinking**：拡張思考。Opus 5 ではデフォルト有効。effort `xhigh`/`max` では無効化不可（400 が返る）。
- **コンテキストと出力**：Opus 5 は 1M トークンコンテキスト（デフォルト＝最大）、最大出力 128k。
- **Fast mode**：Opus 帯モデルを高速出力で動かす（小型モデルへの格下げではない）。対応モデルは世代により変わる（4.7 は廃止——4.8 / 5 を使用）。
- **ローカルセッションのコンプライアンス監査**：Compliance API がユーザー自身のマシン上で動く Cowork / Claude Code セッションの完全な転記を取得可能に（`GET /v1/compliance/apps/sessions/local` 系エンドポイント）。企業側の Agent 可観測性を「推論前ブロック」（Inference Hooks）から「事後監査」まで拡張。
- **導入価格の恒久化**：Sonnet 5 の導入価格（$2/$10・100 万トークンあたり）が長期標準価格となり、予定されていた値上げは取りやめ——安定価格で長期利用のコミットメントを得る定価戦略。

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

### [2026-09-01](/ja/today/2026-09-01)

Claude Fable 5.1 と Claude Mythos 5.1 を発表：Terminal-Bench-Science 0.1 は Fable 5 の 24.7% から 52.6% へ倍増以上に上昇；Terminal-Bench 4.0 コーディングベンチマークでは Fable 5.1 が 55.8%（Fable 5 は 42.0%、Opus 5 は 52.3%）、Mythos 5.1 はより緩やかな安全対策の下で 60.9% に到達；GDPval-AA v2 知識労働ベンチマークのスコアは 1,853（Opus 5 は 1,824）。キャッシュ読み取りコストは 75% 削減され、通常のワークロードで総コストが約 25%、高度に Agentic なワークロードでは最大 45% 削減、基本料金は $10/$50（100万トークンあたり）を維持；サイバーセキュリティの誤検知は 60% 減少。デフォルトで 100 万トークンのコンテキストウィンドウ、最大出力 12.8 万トークン、常時オンの適応的思考；生成コンテンツには電子透かしと C2PA コンテンツクレデンシャルが付与され、両モデルとも 30 日間のデータ保持が必須。同日 Enterprise Frontier Safeguards も発表（詳細は [agentic-safety](/ja/topics/agentic-safety)）。

### [2026-08-27](/ja/today/2026-08-27)

Anthropic が Model Hardware Standard（MHS）をプレビュー：Agent が実験室/製造機器を並行して安全に操作できる共有規格で、モデルに依存せず MCP などの標準プロトコル経由でアクセスでき、機器統合を数週間/数か月から数時間に圧縮する（詳細は [agentic-safety](/ja/topics/agentic-safety)）。同日、科学者向けに Claude Team の無料/割引席を 1 万席開放すると発表——Claude Science（06-30 発表）を土台とし、生命科学研究者に Mythos 級モデルを開放する政府提携アクセスプログラムも伴う——科学研究がエンタープライズ Agent と並ぶ第 2 の重点製品ラインになりつつある。

### [2026-08-26](/ja/today/2026-08-26)

Compliance API のセッション関連エンドポイント（Cowork、Claude Code）が正式 GA に；ローカルセッション取得が Claude Science と Claude for Microsoft 365（Excel/PowerPoint/Word/Outlook）セッションの完全な転記もカバーするようになった。Claude Enterprise 向け beta——コンプライアンス監査能力が Claude の製品面の拡大に合わせて広がっている。

### [2026-08-20](/ja/today/2026-08-20)

Claude Python SDK v1.0 をリリース：HTTP 層を `httpx` から保守された API 互換フォーク `httpx2` へ移行；legacy Text Completions API など長期間廃止予定だったインターフェースを削除；Python 3.10+ が必須——大型版の負債整理リリースで、旧来のパターンに依存する統合にとっては破壊的変更となる。

### [2026-08-19](/ja/today/2026-08-19)（補漏）

Claude API がブラウザ使用ツール（`browser_toolset_20260801`、ブラウザのビューポート内で動作しスクリーンショットではなく無障害ツリーを読む）を追加、コンピュータ使用ツールが GA に、Managed Agents の自托管サンドボックスが記憶ストアの接続に対応（詳細は [agent-sandboxes](/ja/topics/agent-sandboxes) ・ [agent-memory](/ja/topics/agent-memory)）。

### [2026-08-11](/ja/today/2026-08-11)

Compliance API にローカルセッション取得エンドポイントが追加：ユーザー自身のマシン上で動く Cowork / Claude Code セッションの完全な転記を取得可能に。Claude Enterprise 向け beta。08-05 に導入された Inference Hooks と合わせ、推論前ブロックと事後監査の完全な閉ループが形成される（詳細は [agentic-safety](/ja/topics/agentic-safety)）。

### [2026-08-10](/ja/today/2026-08-10)

Claude Sonnet 5 の導入価格（$2/$10・100 万トークンあたり）が長期標準価格に。2026-09-01 に予定されていた $3/$15 への値上げは取りやめ——主力モデルの価格に関する不確実性が収束したシグナル。

### [2026-08-07](/ja/today/2026-08-07)

Fable 5 の生物学安全性分類器を再学習：分類「憲法」を書き直し、良性用途の例外規定を追加、専門家フィードバックと更新データで再学習——生物学関連の誤ブロックが約 85% 減少；ウイルス学/毒物学/分子設計は引き続きブロックされ Opus 5 へルーティング。デュアルユースガードレールが一律制限から「規則の精緻化 + データフィードバック」の精緻な較正へ移行。同日 Managed Agents がセッション予算ハード上限、アドバイザーモデル、`inference_geo` データ所在地制御、GitHub リポジトリからの skill 読み込みを公開（詳細は [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)）。

### [2026-08-05](/ja/today/2026-08-05)

Claude Enterprise が Inference Hooks（beta）を導入：管理対象 prompt が推論前に組織のセキュリティサーバーからリアルタイムで allow/deny 裁定を受ける。claude.ai/Cowork/Claude Code 対象（詳細は [agentic-safety](/ja/topics/agentic-safety)）。同日、Claude Opus 4.1 が正式に廃止——リクエストはエラーを返すようになり、Opus 5 への移行が推奨される。

### [2026-08-01](/ja/today/2026-08-01)

Managed Agents の Dreams（research preview）が Opus 5 に対応（詳細は [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)）。

### [2026-07-24](/ja/today/2026-07-24)

Claude Opus 5 リリース：1M コンテキスト（デフォルト＝最大）、128k 出力、thinking デフォルト有効、価格は Opus 4.8 と同じ $5/$25。5 段階の effort が主要制御手段に。破壊的変更——高 effort での thinking 無効化不可、Opus 4.7 fast mode 廃止。同日、mid-conversation tool changes が beta に（prompt cache を維持したままターン間でツール変更）、`fallbacks` に `"default"` モード追加。

### [2026-07-22](/ja/today/2026-07-22)

Claude Managed Agents 更新：モデル設定での effort 指定、environment / memory store ライフサイクルの webhook、`initial_events` によるセッション初期化と同時起動、更新時 `version` のオプション化（楽観的並行性制御）、スレッド単位イベントストリームの event deltas 対応。
