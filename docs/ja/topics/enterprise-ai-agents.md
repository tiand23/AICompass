# Enterprise AI Agents

## 概要

エンタープライズにおける AI エージェントの実装：ホスト型プラットフォームとランタイム、デリバリーモデル（自前構築 / プラットフォーム / 常駐型デリバリー）、権限・評価・運用のエンジニアリングプラクティス。OpenAI Presence、Claude Managed Agents などのプラットフォームを対象とする。

## なぜ重要か

「生成 AI の企業導入」の主戦場。モデル能力が収斂するにつれ、競争はデリバリーと運用へ移る：エージェントを企業システムに確実に接続し、ポリシーに従って行動させ、失敗時に人間へエスカレーションできるのは誰か。開発者にとって、プラットフォームベンダーの動向は「作る」と「買う」の境界線を決める。

## コアコンセプト

- **デリバリーモデルのスペクトラム**：純粋な API 自前構築 → ホスト型ランタイム（Managed Agents）→ プラットフォーム + 常駐エンジニア（Presence の FDE モデル）。
- **ポリシーと権限**：企業が定義する policy・permission・評価基準がエージェントの行動を制約する。人間へのエスカレーションは標準装備。
- **運用成熟度のシグナル**：ライフサイクル webhook、セッション初期投入、ストリーミング観測——プラットフォームの成熟度を測る具体的な API 能力。
- **「own your intelligence」論争**：インテリジェンスをプラットフォームに委ねるか、自社に留めるか——エンタープライズ AI アーキテクチャの核心的分岐。

## 関連技術

- [claude-models](/ja/topics/claude-models)（Managed Agents を支えるモデルライン）
- [agentic-safety](/ja/topics/agentic-safety)（権限と隔離は企業導入の前提）
- [deep-agents](/ja/topics/deep-agents)（長期タスクエージェントの評価）

## ベストプラクティス

- デリバリースペクトラム上の自社の位置を見極める：プラットフォームエンジニアリングの余力があればホスト型ランタイム、人手不足なら常駐型デリバリーの費用対効果を評価。
- どのモデルを選んでも、権限の階層化と人間エスカレーションの仕組みは自社で掌握する——プラットフォームに全面委任しない。

## 推奨学習リソース

- [Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence/)
- [Claude Managed Agents ドキュメント](https://platform.claude.com/docs/en/release-notes/overview)

## Timeline

### [2026-07-25](/ja/today/2026-07-25)

Harrison Chase が「What does it mean to 'own your intelligence'?」を公開し、インテリジェンス所有権の論争を提起。

### [2026-07-22](/ja/today/2026-07-22)

OpenAI が Presence をローンチ：限定 GA のエンタープライズ音声/チャットエージェントプラットフォーム。FDE と SIer が導入を主導、OpenAI 自身の受信サポートの約 75% を既に処理しているという。同日、Claude Managed Agents が運用系 API 更新一式をリリース（effort 設定、ライフサイクル webhook、セッション初期投入、event deltas）。
