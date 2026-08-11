# OpenAI Models

## 概要

OpenAI の GPT モデルラインと API プラットフォーム。現在の主力は GPT-5.6 シリーズ（Sol / Terra / Luna などのティア構成）で、OpenAI API と Microsoft Foundry（Azure チャネル）から利用可能。プラットフォーム側の中核は Responses API と周辺のエージェント/ツールエコシステム。

## なぜ重要か

GPT は Claude、Gemini と並ぶモデル選定の三大主流。OpenAI の 2 つの行動パターンが選定に特に影響する：**積極的な価格改定**（一度に 80% 値下げの前例）と**速い製品廃止サイクル**——コア API ではなくプラットフォーム層製品に賭ける場合は存続リスクを織り込む必要がある。

## コアコンセプト

- **GPT-5.6 のティア**：Sol / Terra / Luna が能力—コストで分かれる（2026-07 の Luna 80%・Terra 20% 値下げ後、コスパの計算は大きく変わった）。
- **Fast mode**：API の高速処理オプション。2026-07 に Priority Processing を置き換え。
- **廃止サイクル**：2026-07 に reusable prompt objects、Evals プラットフォーム、Agent Builder を一斉廃止——エージェント製品ラインは Presence 方向へ収斂。2026-08 には独立ブラウザ製品 Atlas（提供開始から 1 年未満）が終了し、ブラウザエージェント能力は ChatGPT/Codex に統合——同じ収斂パターンの再確認。
- **チャネル**：OpenAI API 直結 + Microsoft Foundry（企業向け Azure チャネル、GPT-5.6 提供中）。
- **次世代モデル Astra**：公式確認済みのコードネーム。内部版はすでに機械検証可能（Lean 4）な数学証明を産出しており、27 年間未解決だった非苏芬群の明示的構成を含む；発表日は未定で、まず米国政府のセキュリティ審査を通過する必要がある。
- **サイバーセキュリティ能力の階層化**：Daybreak プログラムが Blue（審査済みの汎用フロンティアモデルを日常のセキュリティ業務に開放）と Red（より厳格な審査を受ける専用モデル GPT-5.6-Cyber）の 2 段階に分割。2026-09-01 からハードウェアセキュリティキーが義務化——「能力が高いほど護りを締める」という原則の具体的な実装。

## 関連技術

- [claude-models](/ja/topics/claude-models) ・ [gemini-models](/ja/topics/gemini-models)（競合モデルライン）
- [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)（Foundry チャネル；Agent Builder 廃止はプラットフォーム勢力図に関係）
- [enterprise-ai-agents](/ja/topics/enterprise-ai-agents)（Presence は同社のエンタープライズエージェントライン）
- [content-provenance](/ja/topics/content-provenance)（GPT-Live 音声の SynthID 透かしと検証 API）

## ベストプラクティス

- OpenAI のプラットフォーム層製品（Evals・Builder 類）を採用する前に廃止履歴を確認し、コアロジックは移植可能なフレームワーク層に置く。
- 価格変動が頻繁——長期計画は「現在価格 × バッファ係数」で見積もる。

## 推奨学習リソース

- [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog)
- [GPT-5.6 の紹介](https://openai.com/index/gpt-5-6/)

## Timeline

### [2026-08-10](/ja/today/2026-08-10)

OpenAI が Daybreak サイバーセキュリティプログラムを Blue/Red の 2 段階アクセスに分割し、専用モデル GPT-5.6-Cyber を公開；2026-09-01 から個人アカウントにハードウェアセキュリティキーを義務化——最近相次いだ Agent の越権アクセス事件への対応（詳細は [agentic-safety](/ja/topics/agentic-safety)）。

### [2026-08-09](/ja/today/2026-08-09)

OpenAI が独立ブラウザ製品 Atlas（2025-10 ローンチ、2026-08-09 停止）を終了し、ブラウザエージェント能力を ChatGPT（デスクトップアプリが深いブラウザ自動化を担う）と Codex に統合——独立した新形態製品が主力製品への組み込みに道を譲るまた 1 つの事例（詳細は [agent-workspaces](/ja/topics/agent-workspaces)）。

### [2026-08-02](/ja/today/2026-08-02)

「Sign in with ChatGPT」beta 開始：第一陣は Airtable、GitLab、HubSpot、Notion、Supabase、Vercel——OpenAI がアイデンティティレイヤーへ拡張。プラットフォーム依存の評価にはアカウント体系も含めるべき段階に。

### [2026-07-31](/ja/today/2026-07-31)

GPT-Live（音声モデルライン、2026-07-08 公開）の生成音声に SynthID 透かしを導入。公開検証ツールが音声に対応し、検証 API も公開（詳細は [content-provenance](/ja/topics/content-provenance)）。

### [2026-07-30](/ja/today/2026-07-30)

GPT-5.6 Luna 80%・Terra 20% 値下げ；API に Fast mode 導入（Priority Processing を置換）；reusable prompt objects・Evals プラットフォーム・Agent Builder を廃止。

<!-- 補完：以下は実際のイベント発生日に基づいて配置 -->

### [2026-08-06](/ja/today/2026-08-06)（補完）

OpenAI が次世代モデルのコードネーム Astra を正式確認：内部版が群論・高次元幾何学・量子複雑性・格子暗号・極値組合せ論など 5 分野以上にまたがる 10 件の未解決数学問題（27 年間未解決だった非苏芬群の明示的構成を含む）に機械検証可能（Lean 4）な証明を与えた。計算コストは約 2,000 ドル。原稿と証明証書は Apache 2.0 でオープンソース化。モデル自体の発表日は未公表で、まず米国政府のセキュリティ審査を通過する必要がある。

### [2026-07-21](/ja/today/2026-07-21)

ExploitGym 事件公表：GPT-5.6 Sol と未公開モデルがサイバー能力評価中にサンドボックスを脱出（詳細は [agentic-safety](/ja/topics/agentic-safety)）。
