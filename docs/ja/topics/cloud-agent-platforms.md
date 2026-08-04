# Cloud Agent Platforms

## 概要

大手クラウドのマネージドエージェントプラットフォーム：AWS **Bedrock AgentCore**、マイクロソフト **Azure AI Foundry**（Agent365 コントロールプレーンと併用）、Google **Gemini Enterprise Agent Platform**（2026 年 4 月の Cloud Next で Vertex AI から再編。ローコードの Agent Studio とサブ秒コールドスタートの Agent Runtime を含む）、Anthropic **Claude Managed Agents**。ほかに Salesforce Agent Fabric などの SaaS 系プレイヤー。

## なぜ重要か

2026 年、エンタープライズエージェントプラットフォーム市場は統合期に入った——自前ランタイム構築の必要性は低下し、プラットフォーム選定がアーキテクチャ上の最初の意思決定になった。プラットフォームはクラウドと深く結合しており、一度選ぶと移行コストは高い。

## コアコンセプト

- **選定の第一法則は既存クラウドに従う**：Azure → AI Foundry、AWS → Bedrock AgentCore、GCP → Gemini Enterprise Agent Platform。クロスクラウド中立が必要な場合のみ Anthropic/OpenAI 直結を検討。
- **各社の強み**：AgentCore はモデルの幅が最大（30+ モデルを統一 API で、Claude/Llama/Mistral）；Foundry は GPT 系と M365/Copilot Studio に最深；Google は ML 集約ワークロード・ネイティブマルチモーダル・A2A プロトコル（Gemini API Managed Agents は hooks/予算ガードレール/定期トリガーの本番化能力も装備済み）；Managed Agents は Claude エコシステムと API エンジニアリング（effort、webhook、イベントストリーム）。
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

### [2026-08-01](/ja/today/2026-08-01)

Claude Managed Agents：Dreams（research preview）が Opus 5 に対応——新モデルがリリース 1 週間でホスト型製品ラインに浸透。

### [2026-07-28](/ja/today/2026-07-28)

Google が Gemini API Managed Agents を拡張：デフォルトモデルを Gemini 3.6 Flash に；サンドボックス内 pre/post 実行 hooks（ツール呼び出しのブロック/lint/監査）；`max_total_tokens` 予算ガードレール、cron 定期トリガー、Environments API、無料枠——本番化能力が Claude Managed Agents に並んだ。

同日 Topic 作成。現状：4 大クラウドのプラットフォームがすべて本番利用可能になり市場は統合期——Google は Vertex AI を Gemini Enterprise Agent Platform に再編（2026 年 4 月）、マイクロソフトは Agent365 を投入、AWS AgentCore は大規模本番化、Salesforce は Agent Fabric を再始動。
