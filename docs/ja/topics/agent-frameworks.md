# Agent Frameworks

## 概要

エージェント開発フレームワークの版図：LangGraph（LangChain 系、グラフオーケストレーション）、CrewAI（ロールベース・マルチエージェント）、OpenAI Agents SDK（handoff 抽象）、Google ADK 2.0（Python/Go/TS、グラフワークフロー）、Microsoft Agent Framework、LlamaIndex Workflows、Claude Agent SDK、Mastra など。AutoGen は 2026 年にメンテナンスモード入り。

## なぜ重要か

フレームワークはエージェントロジックの表現方法と移植性を決める——プラットフォームはロックインするが、フレームワーク層は中立を保てる場所。版図の変化（誰がリードし、誰がメンテモードか）は選定の長期的安全性に直結する。

## コアコンセプト

- **2026 年中盤の情勢**：LangGraph が企業採用でリード（月間 DL 3,450 万、2026 年初に GitHub スターで CrewAI を逆転）。グラフアーキテクチャは監査証跡・ロールバックなど本番要件に自然に対応。ローコード線では Dify が 144k スターで先頭。
- **AutoGen メンテナンスモード**：本番運用中なら選択肢は 2 つ——現状維持か移行か。アーキテクチャ的に最も近い移行先は LangGraph。
- **スタックで選ぶ**：M365/Azure → Copilot Studio + Semantic Kernel；AWS → AgentCore + LangGraph；GCP → ADK；フルコード自前 → LangGraph か Claude Agent SDK。
- **抽象スタイルの違い**：グラフ（LangGraph/ADK）、ロール（CrewAI）、handoff（OpenAI Agents SDK）——メンタルモデルとデバッグ体験を決める。
- **能動性 vs 決定性のスペクトラム**（LangChain 公式の位置づけ）：Deep Agents（ベストプラクティス標準搭載の「主張を持つ」harness）→ LangChain（「LLM がループでツールを呼ぶ」最小フレームワーク + middleware でカスタマイズ）→ LangGraph（ドメイン知識を直接グラフトポロジーに埋め込み、最大限の決定性）——3 者は同じスタック上で組み合わせ可能。タスクが求める柔軟性と信頼性のバランスで目盛りを選ぶ。

## 関連技術

- [agent-workflow](/ja/topics/agent-workflow)（フレームワークの上のワークフロー設計パラダイム）
- [deep-agents](/ja/topics/deep-agents)（LangChain の長期タスク方向）
- [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)（フレームワークとプラットフォームの組み合わせ）
- [mcp](/ja/topics/mcp)（主要フレームワークが対応するツール接続標準）

## ベストプラクティス

- 新規プロジェクトのデフォルト候補は LangGraph（エコシステムと本番成熟度）；ロールベースの高速プロトタイプは CrewAI；特定クラウドに深く依存するならそのベンダーの SDK。
- フレームワークは「本番 4 点セット」で評価する：状態永続化、可観測性（LangSmith など）、human-in-the-loop ノード、エラー回復——デモはどれも同じに見える、差はここに出る。

## 推奨学習リソース

- [The best AI agent frameworks in 2026（LangChain）](https://www.langchain.com/resources/ai-agent-frameworks)
- [オープンソースエージェントフレームワーク比較（Firecrawl）](https://www.firecrawl.dev/blog/best-open-source-agent-frameworks)

## Timeline

### [2026-08-29](/ja/today/2026-08-29)

three.ws がオープンソース化（Apache 2.0）：3D 具身化生成、マルチモデル Agent ランタイム（Claude/GPT-5.x/Grok/オープンモデル）、Solana 上の x402 決済プロトコルによるオンチェーン経済アイデンティティ、72 の MCP サーバーによるマルチサーフェス配信を単一の Agent インスタンスに統合——「具身化＋推論＋決済＋配信」の統合フレームワークで、オンチェーンアイデンティティにより Agent は人手を介さず USDC のマイクロペイメントを自律的に送受信できる（110,416 件の決済が完了）。本ナレッジベースがこれまであまり扱ってこなかった Agent の経済活動という流れを補完する（詳細は [mcp](/ja/topics/mcp)）。

### [2026-08-06](/ja/today/2026-08-06)

LangChain が Deep Agents / LangChain / LangGraph の位置づけを整理する記事を公開：複雑で長時間のタスクで標準搭載のコンテキスト管理が欲しいなら Deep Agents；各ステップでモデルに渡すものを精密制御したいなら LangChain；フローが標準ループに収まらず決定的ステップと自律ステップの混在が必要なら LangGraph（詳細は [deep-agents](/ja/topics/deep-agents)）。

### 2026-07-28

Topic 作成。現状：LangGraph が企業採用とスターの両方でリード、AutoGen はメンテナンスモード入り、Google ADK 2.0 リリース（3 言語・グラフワークフロー）、OpenAI Agents SDK と Microsoft Agent Framework は安定的に更新中。

### [2026-07-27](/ja/today/2026-07-27)

LangChain が「How we built LangChain's agent-first data stack」を公開——エージェント駆動のデータ消費に合わせてデータ基盤を再設計した自社実践。
