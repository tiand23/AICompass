# Agent Skills

## 概要

Skills：再利用可能なエージェント能力パッケージ——指示とリソースを束ね、エージェントが専門タスク（特定文書の操作、特定手順の実行など）に応じてオンデマンドで読み込む。Anthropic が 2025 年 10 月に Claude とともに公開、2025 年 12 月にオープン標準化。数ヶ月で GitHub が数千の再利用可能パッケージの主要配布チャネルになった。

## なぜ重要か

Skills は「エージェントに仕事を教える」ことをプロンプトエンジニアリングから、配布・バージョン管理可能なソフトウェア成果物に変えた——コード再利用にとってのパッケージマネージャに相当する、エージェント能力エコシステム化の鍵。skill エコシステムの熱度を追うことは「皆がエージェントに何をさせているか」を追うこと。

## コアコンセプト

- **構造**：skill = メタデータ（名前、トリガー記述）+ 指示ドキュメント + 任意のリソース/スクリプト。エージェントがタスク関連性で自動ロード。
- **MCP との分担**：MCP はエージェントに**ツールを繋ぐ**（能力へのインターフェース）、Skill は**知識と手順を積む**（能力の使い方）——競合ではなく補完。
- **配布エコシステム**：GitHub が主チャネル、awesome 系リスト（ComposioHQ/awesome-claude-skills など）が入口。コミュニティランキングはスター・熱度・実測の時間節約を混合。

## エコシステム熱度（GitHub ランキング）

Topic 作成時（2026-07）の高スター代表リポジトリ：

| リポジトリ | Star | 位置づけ |
|---|---|---|
| ECC | ~226k | Claude Code エコシステムツール |
| hermes-agent | ~209k | エージェントフレームワーク/ツール |
| cc-switch | ~113k | Claude Code 設定切替 |
| ui-ux-pro-max-skill | ~101k | UI/UX 専門 skill |
| awesome-claude-skills | ~67k | 精選リスト（50+ skills） |
| book-to-skill | 新登場（2026-07-29 Trending 入り） | PDF → Claude Code skill 自動変換 |
| superpowers | 新登場（2026-07-30 Trending 入り、日次 +616） | Agentic skills フレームワーク + 開発方法論 |
| last30days-skill | 新登場（2026-07-31 Trending 入り、08-03 まで継続在榜） | クロスプラットフォーム「直近 30 日」調査 skill |
| reverse-skill | 新登場（2026-08-01 Trending 入り、08-03 は日次 +1,141 と加速中） | リバース/ペンテスト/セキュリティ研究 skill ルーターパック |

> このランキングは skill 系リポジトリが GitHub Trending に登場した際に `/update` が自動更新する。

## 関連技術

- [mcp](/ja/topics/mcp)（ツール接続層、補完関係）
- [agent-frameworks](/ja/topics/agent-frameworks)
- [ai-code-review](/ja/topics/ai-code-review)（レビューは最も一般的な skill シナリオのひとつ）

## ベストプラクティス

- skill の核心は**トリガー記述**——エージェントはそれで読み込み時機を判断する。記述が曖昧な skill は存在しないのと同じ。
- チーム内ではまず「AI に繰り返し説明している手順」を skill の素材にする——最も直接的なリターン。

## 推奨学習リソース

- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)
- [Claude Code リポジトリのスターランキング](https://githublb.vercel.app/topic/claude-code)

## Timeline

### [2026-08-03](/ja/today/2026-08-03)

テンセントクラウドの TencentDB-Agent-Memory が「エージェントの対話から skill を抽出しレビュー後にチーム共有」を記憶パイプラインに組み込む（詳細は [agent-memory](/ja/topics/agent-memory)）——skill の生産がインフラ化され始めた。reverse-skill は加速継続（日次 +1,141）。

### [2026-08-01](/ja/today/2026-08-01)

reverse-skill が Trending 入り（日次 +612）：初の「skill router」形態——ルーティング + オンデマンドツールチェーン + 自動進化する経験ベース。単一領域の skill ライブラリが内部構造を持ち始めた。openwork（日次 +796）は skills/MCP 設定をツール横断の可搬資産にする（詳細は [agent-workspaces](/ja/topics/agent-workspaces)）。

### [2026-07-31](/ja/today/2026-07-31)

last30days-skill が Trending 入り（日次 +378）：クロスプラットフォーム調査の skill 化——1 週間で 3 件目。「定期調査と総括」が標準化された能力に。

### [2026-07-30](/ja/today/2026-07-30)

superpowers が Trending 入り（日次 +616 スター）：skills フレームワーク + 開発方法論——skill が単発の能力パッケージから開発フローを組織する第一級単位へ。

### [2026-07-29](/ja/today/2026-07-29)

book-to-skill が Trending 入り（1 日 +423 スター）：PDF を skill パッケージへ自動コンパイル——「知識 → skill」ツールチェーン化のシグナル。

### 2026-07-28

Topic 作成。エコシステム現状：オープン標準化から約半年で GitHub 配布が定着、トップリポジトリは 20 万スター規模、awesome リストが主要な発見入口に。
