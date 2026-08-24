# Cloud Agent Platforms

## 概要

大手クラウドのマネージドエージェントプラットフォーム：AWS **Bedrock AgentCore**、マイクロソフト **Azure AI Foundry**（Agent365 コントロールプレーンと併用）、Google **Gemini Enterprise Agent Platform**（2026 年 4 月の Cloud Next で Vertex AI から再編。ローコードの Agent Studio とサブ秒コールドスタートの Agent Runtime を含む）、Anthropic **Claude Managed Agents**。ほかに Salesforce Agent Fabric などの SaaS 系プレイヤー。

## なぜ重要か

2026 年、エンタープライズエージェントプラットフォーム市場は統合期に入った——自前ランタイム構築の必要性は低下し、プラットフォーム選定がアーキテクチャ上の最初の意思決定になった。プラットフォームはクラウドと深く結合しており、一度選ぶと移行コストは高い。

## コアコンセプト

- **選定の第一法則は既存クラウドに従う**：Azure → AI Foundry、AWS → Bedrock AgentCore、GCP → Gemini Enterprise Agent Platform。クロスクラウド中立が必要な場合のみ Anthropic/OpenAI 直結を検討。
- **各社の強み**：AgentCore はモデルの幅が最大（30+ モデルを統一 API で、Claude/Llama/Mistral）；Foundry は GPT 系と M365/Copilot Studio に最深；Google は ML 集約ワークロード・ネイティブマルチモーダル・A2A プロトコル（Gemini API Managed Agents は hooks/予算ガードレール/定期トリガーの本番化能力も装備済み）；Managed Agents は Claude エコシステムと API エンジニアリング（effort、webhook、イベントストリーム、セッション予算のハード上限、アドバイザーモデル、データ所在地、GitHub からの skill 読み込み）。
- **ホスト型 Deep Agents が新カテゴリに**：Claude、Gemini に続き、LangSmith の Managed Deep Agents（2026-08 公開ベータ）がオープンソースフレームワークをホスト型ランタイムに包装——永続実行/サンドボックス/記憶/可観測性を一括パッケージ化して提供。「フレームワークはオープンソース、ランタイムはホスト型」が各社共通の路線になりつつある。
- **マネージド化が解決すべき 7 種類のインフラ課題**：ランタイムの信頼性、ユーザー向けイベントストリーミング、信頼できない Agent 生成コードの安全な実行、コンテキスト管理、性能評価、記憶システム、認可と権限——LangChain がこれまで散らばっていた「なぜマネージド化すべきか」という論点を照合可能な 1 つのリストに整理した。自前構築 vs マネージドの検討に有用。
- **デプロイモードの 3 つの選択肢**：全面マネージドクラウド / BYOC（Bring Your Own Cloud、顧客自身のクラウドアカウント内で稼働しデータが私有環境の外に出ない）/ 完全セルフホスト——BYOC は「マネージドの利便性」と「データ主権」の中間に位置する選択肢で、LangSmith はこのモードを AWS 上で GA にした。
- **コントロールプレーン**：Agent365 のような「エージェントの MDM」は 2026 年に現れた新しい層——数百のエージェントの ID・権限・監査を統一管理する必要がある。
- **現実の主流は「人が承認してから実行」**：多くの企業は assisted workflow の段階にあり、完全自律の本番パイプラインは少数派。

## 関連技術

- [enterprise-ai-agents](/ja/topics/enterprise-ai-agents)（デリバリーモデルと導入の視点）
- [agent-frameworks](/ja/topics/agent-frameworks)（フレームワーク層。AWS+LangGraph、GCP+ADK など組み合わせが定番）
- [claude-models](/ja/topics/claude-models)（Managed Agents のモデル基盤）
- [a2a](/ja/topics/a2a)（Google プラットフォームがネイティブ対応）

## ベストプラクティス

- モデルのベンチマークではなく「データと ID 体系がどこにあるか」でプラットフォームを決める。
- エージェント定義とオーケストレーションはフレームワーク層に書き（移植可能）、プラットフォームはランタイムとしてだけ使う——ロックインを抑える。

## 推奨学習リソース

- [2026 エンタープライズエージェントプラットフォーム選定ガイド（AgentMarketCap）](https://agentmarketcap.ai/blog/2026/04/07/azure-ai-foundry-enterprise-agent-platform-2026)
- [AWS Bedrock vs Microsoft Foundry vs Vertex AI 2026](https://www.epcgroup.net/blog/aws-bedrock-vs-microsoft-foundry-vs-vertex-ai-2026)

## Timeline

### [2026-08-19](/ja/today/2026-08-19)

Claude Managed Agents に Web ツールのドメイン許可/拒否リストを追加：agent の `web_search`/`web_fetch` ツールに `allowed_domains` または `blocked_domains` を設定可能に、`web_fetch` は `max_content_tokens` にも対応——ホスト型 Agent のネットワークアクセスにおける最小権限原則のさらなる細分化。同日 Agent Skills API が正式 GA に（詳細は [agent-skills](/ja/topics/agent-skills)）、Claude API のブラウザ/コンピュータ使用ツールと自托管サンドボックスの記憶ストア接続も同じバッチで公開された（詳細は [agent-sandboxes](/ja/topics/agent-sandboxes) ・ [agent-memory](/ja/topics/agent-memory)）。

### [2026-08-12](/ja/today/2026-08-12)

LangChain が「Why managed agents are the next big thing in agent building」を公開：Agent を本番に持っていくために解決すべき 7 種類のインフラ課題（ランタイムの信頼性、イベントストリーミング、信頼できないコードの安全な実行、コンテキスト管理、性能評価、記憶システム、認可）を体系的に列挙し、マネージドサービスがこれらをパッケージ化することで開発者がビジネスロジックに専念できると論じる。同日、LangSmith の BYOC デプロイモードが AWS で正式 GA——企業は自分の AWS アカウント内のクラスタで LangSmith を稼働でき、データは私有環境の外に出ない。マネージドの利便性とデータ主権の中間に位置する第 3 のデプロイ選択肢（詳細は [deep-agents](/ja/topics/deep-agents)）。

### [2026-08-07](/ja/today/2026-08-07)

Claude Managed Agents が 4 機能を一挙公開：セッション予算のハード上限（`budget_reached` で自動一時停止）、アドバイザーモデル（プライマリスレッドが途中でより強いモデルに相談可能）、`inference_geo` 推論地域制御（データ所在地コンプライアンス）、マウントした GitHub リポジトリから自動検出される skills。同日 LangSmith が Managed Deep Agents 公開ベータをローンチ——「深いエージェントのホスト化」を製品ラインとして打ち出した 3 社目に（詳細は [deep-agents](/ja/topics/deep-agents)）。

### [2026-08-01](/ja/today/2026-08-01)

Claude Managed Agents：Dreams（research preview）が Opus 5 に対応——新モデルがリリース 1 週間でホスト型製品ラインに浸透。

### [2026-07-28](/ja/today/2026-07-28)

Google が Gemini API Managed Agents を拡張：デフォルトモデルを Gemini 3.6 Flash に；サンドボックス内 pre/post 実行 hooks（ツール呼び出しのブロック/lint/監査）；`max_total_tokens` 予算ガードレール、cron 定期トリガー、Environments API、無料枠——本番化能力が Claude Managed Agents に並んだ。

同日 Topic 作成。現状：4 大クラウドのプラットフォームがすべて本番利用可能になり市場は統合期——Google は Vertex AI を Gemini Enterprise Agent Platform に再編（2026 年 4 月）、マイクロソフトは Agent365 を投入、AWS AgentCore は大規模本番化、Salesforce は Agent Fabric を再始動。
