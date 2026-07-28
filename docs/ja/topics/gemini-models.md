# Gemini Models

## 概要

Google DeepMind の Gemini モデルファミリー。現在のイテレーション主軸は Flash 帯（最新は 3.6 Flash）で、Flash-Lite（コスト最適）と能力管理された領域特化版（3.5 Flash Cyber など）が補完する。Gemini API / Vertex AI から利用可能。

## なぜ重要か

Gemini は Claude / GPT に並ぶ第三の主流選択肢。Flash 帯の「より安く・より少ないトークン」というイテレーション戦略は、コスト重視の生成 AI アプリのモデル選定に直結する。Google のリリース展開（3.5 Pro を飛ばして 3.6 Flash を投入）は、業界が「能力の積み上げ」から「効率の改善」へ移行しつつあることも映している。

## コアコンセプト

- **Flash / Flash-Lite / Pro ティア**：能力—コストの階段。Flash は Google が定義する「主力」帯。
- **トークン効率**：3.6 Flash は前世代よりトークン使用量を最大 17% 削減——実質的な値下げ。
- **能力管理された特化モデル**：Flash Cyber は政府・信頼パートナー限定——「管理されたリリース」パターンの実例。

## 関連技術

- [claude-models](/ja/topics/claude-models)（競合モデルライン）
- Vertex AI（エンタープライズ提供チャネル）

## ベストプラクティス

- コスト重視のワークロードでは Flash 帯をベンチマーク比較に含める。実コストは単価ではなくトークン効率で計算する。

## 推奨学習リソース

- [Google が Gemini 新モデルを 3 つリリース（TechCrunch）](https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/)
- [Google AI Blog](https://blog.google/technology/ai/)

## Timeline

### [2026-07-21](/ja/today/2026-07-21)

Gemini 3.6 Flash（主力帯、トークン最大 17% 削減、3.5 Flash より安価）、3.5 Flash-Lite（同クラス最安）、3.5 Flash Cyber（セキュリティ特化、政府/信頼パートナー限定）を同日リリース。3.5 Pro はなし。
