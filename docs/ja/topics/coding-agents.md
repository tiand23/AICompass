# Coding Agents

## 概要

ターミナル/CLI コーディングエージェント：コマンドラインをインターフェースに、コードベースを自律的に読み書きし、コマンドを実行し、検証を繰り返すコーディングツールのカテゴリ。代表：Claude Code（Anthropic）、Codex CLI（OpenAI）、Gemini CLI（Google）、オープンソース側の opencode、Aider、そしてモデル生態系から分化した DeepSeek-Reasonix（DeepSeek ネイティブ）。IDE 組み込み型（Cursor、Windsurf）との違いは、エディタ内補完やインライン修正ではなく、対話駆動の自律実行を中心に据える点。

## なぜ重要か

ターミナルコーディングエージェントは AI コーディングツール競争の主戦場であり、「harness エンジニアリング」の発祥地でもある——コンテキスト管理、ツールオーケストレーション、権限制御、コスト最適化といったエージェント工学の核心問題はこのカテゴリで最初に解かれ、その設計パターン（skills、hooks、MCP、サブエージェント）は汎用エージェント領域へ波及している。選定はモデル生態系と強く結びつき、ツールの差別化はモデル本体より harness から生まれるようになっている。

## コアコンセプト

- **Harness（実行フレームワーク）**：モデル以外のすべて——ツールセット、コンテキスト管理、権限モード、ループ制御。同じモデルでも harness が違えば性能は大きく変わり、harness の品質が独立した競争軸になりつつある。
- **モデル生態系ごとの分化**：Claude Code は Claude、Codex CLI は GPT、DeepSeek-Reasonix は DeepSeek——特定モデルのコスト構造（prefix cache の安定性など）に合わせた harness レベルの調律が新しい差別化手段。
- **コンテキストとコスト管理**：長セッションのトークンコストはキャッシュ安定性（prefix cache を壊すコンテキスト変更の回避）と古いコンテンツの刈り込みで制御する。
- **拡張メカニズム**：MCP（ツール接続）、skills（手順の装備）、hooks（介入・監査）、プラグイン/サブプロセス——各社の拡張モデルは収斂し、カテゴリレベルの事実上の約束事が形成されつつある。
- **アーキテクチャの両極**：フル機能スイート（Claude Code）から、単一バイナリ・設定駆動のミニマリスト路線（DeepSeek-Reasonix の宣言的 `reasonix.toml`）まで。

## 関連技術

- [agent-skills](/ja/topics/agent-skills)（コーディングエージェントは skill エコシステムの主要ホスト）
- [mcp](/ja/topics/mcp)（ツール拡張の標準プロトコル層）
- [ai-code-review](/ja/topics/ai-code-review)（レビューはコーディングエージェントの中核サブシナリオ）
- [agent-workspaces](/ja/topics/agent-workspaces)（ワークスペース形態：コードベース中心からタスク中心へ）

## ベストプラクティス

- 選定は主力モデルに合わせる：harness の自社モデル向け調律（キャッシュ、effort 段階、ツール形式）はモデルを跨いで移植しにくい。
- 長セッションのコストが膨らんだら、まずコンテキスト管理（キャッシュヒット、ツール出力の堆積）を調べ、その後にモデルティア変更を検討する。

## 推奨学習リソース

- [Claude Code ドキュメント](https://docs.claude.com/en/docs/claude-code)
- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)

## Timeline

### [2026-08-04](/ja/today/2026-08-04)

DeepSeek-Reasonix が 2 日連続 Trending（累計 29.9k スター）：DeepSeek ネイティブのターミナルコーディングエージェント——単一静的 Go バイナリ、`reasonix.toml` 設定駆動、prefix cache を軸に長セッションコストを調律。ターミナルコーディングエージェントのカテゴリがモデル生態系ごとに分化し始めた。
