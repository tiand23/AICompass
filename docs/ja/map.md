# ナレッジマップ

> 生成 AI 開発スタックのニッチ（生態的地位）で整理。各スロットが 1 つの領域——Topic があるものは一覧表示、空スロットは「蓄積中」（追跡中だがまだ内容なし）。
>
> ステータス：🔥 直近 7 日以内に動きあり ・ 📈 30 日以内 ・ 💤 それ以前

## 1. モデル層

### 基盤モデル

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [claude-models](/ja/topics/claude-models) | Anthropic Claude モデルライン | エージェント/コーディング用途の選定と移行 | 🔥 | 2026-08-27 |
| [openai-models](/ja/topics/openai-models) | OpenAI GPT モデルラインと API プラットフォーム | 選定、価格変動、廃止リスク | 🔥 | 2026-08-26 |
| [gemini-models](/ja/topics/gemini-models) | Google Gemini モデルライン | コスト重視ワークロードの高コスパ選定 | 📈 | 2026-08-17 |

### マルチモーダル生成

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [diffusion-models](/ja/topics/diffusion-models) | 拡散モデルと推論最適化 | 画像/動画生成のコストと VRAM の壁 | 📈 | 2026-08-17 |
| [world-models](/ja/topics/world-models) | ワールドモデル / 生成シミュレーション | ロボット学習データの高コスト・高リスク | 💤 | 2026-07-27 |

### 効率化と小型化（SLM ・ 蒸留 ・ 量子化）

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [model-efficiency](/ja/topics/model-efficiency) | SLM、蒸留、量子化、効率アーキテクチャ、CPU/エッジ推論 | より少ない計算資源で十分な知能を | 🔥 | 2026-08-25 |

## 2. ナレッジと検索

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [rag](/ja/topics/rag) | 検索拡張生成（主流は Agentic RAG） | 私有知識の LLM 接続、事実性と追跡可能性 | 📈 | 2026-08-10 |
| [document-parsing](/ja/topics/document-parsing) | ドキュメント解析と構造化（VLM + 意味再構築） | 非構造化文書をナレッジベースに入れる最初の工程 | 🔥 | 2026-08-17 |
| [vector-databases](/ja/topics/vector-databases) | ベクトル DB 選定とハイブリッド検索 | RAG/メモリの保存・検索層 | 🔥 | 2026-08-26 |
| [agent-memory](/ja/topics/agent-memory) | エージェント記憶インフラ（セッション/長期/チーム資産） | セッション横断の経験保持とチームの組織資産化 | 🔥 | 2026-08-25 |
| [knowledge-graph](/ja/topics/knowledge-graph) | 決定論的推論/意思決定来歴管理の基盤層としてのナレッジグラフ | エージェント意思決定の説明可能性・監査可能性・先例検索 | 📈 | 2026-08-10 |

## 3. エージェント開発

### オーケストレーションと Workflow

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [deep-agents](/ja/topics/deep-agents) | 長期自律タスクエージェント（LangChain） | 多段階タスクの計画・回復・評価 | 🔥 | 2026-08-25 |
| [agent-frameworks](/ja/topics/agent-frameworks) | フレームワーク版図：LangGraph/CrewAI/ADK/Agents SDK… | フレームワーク選定と長期的安全性 | 📈 | 2026-08-06 |
| [agent-workflow](/ja/topics/agent-workflow) | ワークフローパラダイム：編成 vs 自律、HITL、永続実行 | エージェントを業務プロセスに確実に組み込む | 📈 | 2026-08-17 |
| [agent-skills](/ja/topics/agent-skills) | 再利用可能な能力パッケージ（GitHub 熱度ランキング付き） | エージェント能力の配布と再利用 | 📈 | 2026-08-19 |
| [voice-agents](/ja/topics/voice-agents) | 音声エージェント（カスケード/リアルタイム S2S、フレームワークと評価） | 音声インターフェースエージェントのリアルタイム工学と評価 | 📈 | 2026-08-21 |

### ランタイムとクラウド（ホスト型ランタイム ・ エージェントプラットフォーム ・ Foundry）

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [enterprise-ai-agents](/ja/topics/enterprise-ai-agents) | 企業向けエージェントプラットフォームとデリバリー | エージェントを企業システムへ確実に接続し運用する | 🔥 | 2026-08-26 |
| [cloud-agent-platforms](/ja/topics/cloud-agent-platforms) | 4 大クラウドのプラットフォーム版図（AgentCore/Foundry/GEAP/Managed Agents） | プラットフォーム選定とロックインの権衡 | 📈 | 2026-08-19 |
| [agent-workspaces](/ja/topics/agent-workspaces) | デスクトップ型エージェントワークスペース（Cowork/openwork/Codex アプリ） | 仕事を任せ成果物を受け取る対話形態；能力設定の可搬性 | 📈 | 2026-08-12 |
| [agent-sandboxes](/ja/topics/agent-sandboxes) | Agent 実行サンドボックス基盤（E2B/Daytona/Cloudflare computer） | Agent に安全で隔離された再利用可能なコード実行環境を提供 | 📈 | 2026-08-19 |

### プロトコルと相互運用性（MCP ・ A2A ・ AG-UI）

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [mcp](/ja/topics/mcp) | ツール接続プロトコル（事実上の標準） | AI とツールを繋ぐ M×N グルーコード問題 | 📈 | 2026-08-03 |
| [a2a](/ja/topics/a2a) | エージェント間連携プロトコル（Google 主導、50+ ベンダー） | ベンダー横断のエージェント発見とタスク委任 | 💤 | 2026-07-28 |

*ほかに注目：AG-UI（蓄積中）。*

## 4. 推論とデプロイ

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [inference-serving](/ja/topics/inference-serving) | GPU クラスタのスケジューリングと稼働率、サービングアーキテクチャ、推論コスト削減 | ハードウェア投資を、遊休/非効率なキューイングではなく実際の産出に変える | 🔥 | 2026-08-25 |

*（拡散モデルの 4-bit 推論は [diffusion-models](/ja/topics/diffusion-models)、エッジデプロイは [model-efficiency](/ja/topics/model-efficiency) を参照）*

## 5. 評価

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [agent-evaluation](/ja/topics/agent-evaluation) | エージェント評価の方法とベンチマーク（実タスク由来 + LLM-as-judge） | エージェント本番投入前の再現可能な測定 | 🔥 | 2026-08-25 |

*ほかに注目：モデルベンチマーク。（長期エージェント評価は [deep-agents](/ja/topics/deep-agents) を参照）*

## 6. セーフティ

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [agentic-safety](/ja/topics/agentic-safety) | エージェントの行動安全性 | 自律モデルの越権・脱出という現実リスク | 🔥 | 2026-08-27 |
| [content-provenance](/ja/topics/content-provenance) | AI コンテンツの透かしと検証（SynthID/C2PA） | 生成コンテンツの識別可能性とコンプライアンス確認 | 📈 | 2026-08-14 |

## 7. コーディングツール

| Topic | 何か | 解決する問題 | 状態 | 最終更新 |
|---|---|---|---|---|
| [ai-code-review](/ja/topics/ai-code-review) | AI コードレビューのツールと設計 | レビューのスケールと S/N 比の両立 | 📈 | 2026-08-09 |
| [coding-agents](/ja/topics/coding-agents) | ターミナル/CLI コーディングエージェント（Claude Code/Codex CLI/Reasonix…） | カテゴリ選定；harness 工学とモデル生態系の結合 | 📈 | 2026-08-18 |
