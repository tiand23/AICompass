# Gemini Models

## 概要

Google DeepMind の Gemini モデルファミリー。現在のイテレーション主軸は Flash 帯（最新は 3.6 Flash）で、Flash-Lite（コスト最適）と能力管理された領域特化版（3.5 Flash Cyber など）が補完する。Gemini API / Vertex AI から利用可能。

## なぜ重要か

Gemini は Claude / GPT に並ぶ第三の主流選択肢。Flash 帯の「より安く・より少ないトークン」というイテレーション戦略は、コスト重視の生成 AI アプリのモデル選定に直結する。Google のリリース展開（3.5 Pro を飛ばして 3.6 Flash を投入）は、業界が「能力の積み上げ」から「効率の改善」へ移行しつつあることも映している。

## コアコンセプト

- **Flash / Flash-Lite / Pro ティア**：能力—コストの階段。Flash は Google が定義する「主力」帯。
- **トークン効率**：3.6 Flash は前世代よりトークン使用量を最大 17% 削減——実質的な値下げ。
- **高頻度・小刻みなイテレーション**：Flash 帯のリリース間隔は明らかに短縮しており（3.6→3.7 Flash はわずか 3 週間）、コーディング/Agent 系ベンチマークの向上幅は汎用対話系より大きく、導入価格もさらに下がった——「高頻度イテレーション、Agent シナリオ優先、継続的な値下げ」が Flash 帯の固定戦略。
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

### [2026-10-13](/ja/today/2026-10-13)

Gemini 4 Argon が開発者・企業向けに GA（09-30 プレビュー）：入力/思考/出力で共有される 105 万トークンのコンテキストウィンドウ、開発者 API のデフォルト同期出力は 6.4 万トークン；DeepSWE v1.1 で 77.9%、Google 自社の比較表の 19 項目中 13 項目で GPT-6 Astra と Claude を上回る；価格は 100 万トークンあたり $2/$10（11 月 30 日まで、12 月 1 日から $4/$20）、Gemini API 有料ティア・AI Studio・Gemini プラットフォーム・Gemini app・検索の AI Mode で提供——GPT-6 Astra（09-03）、Claude Opus/Sonnet 5.5（09-22/09-28）に続き 1 か月半以内に旗艦モデルの世代交代を完了した 3 社目で、今回は自社基準で両社を項目ごとに上回るベンチマーク表を示している。

### [2026-08-17](/ja/today/2026-08-17)

Google が Gemini API 側の Imagen 4 生成エンドポイント（standard/fast/ultra）を正式終了し、Gemini 3.1 Flash Image への移行を促す；Vertex AI 側は 3 月に既に非推奨化済み。`generate_images()` メソッドは完全に消滅——シームレスな置き換えではなく、呼び出し元は Gemini ネイティブ画像 API に合わせて書き直す必要がある（詳細は [diffusion-models](/ja/topics/diffusion-models)）。

### [2026-08-13](/ja/today/2026-08-13)

Gemini 3.7 Flash がリリース、3.6 Flash からわずか 3 週間：コーディング/Agent ベンチマークが大幅向上（AutomationBench 17.0%→30.4%、DeepSWE v1.1 49.0%→65.3%、WebDev Arena Elo 1538→1588）、導入価格は 3.6 Flash のローンチ価格の半額（$0.75/$3.75・100 万トークンあたり）；3.5 Pro は未発表。

### [2026-07-21](/ja/today/2026-07-21)

Gemini 3.6 Flash（主力帯、トークン最大 17% 削減、3.5 Flash より安価）、3.5 Flash-Lite（同クラス最安）、3.5 Flash Cyber（セキュリティ特化、政府/信頼パートナー限定）を同日リリース。3.5 Pro はなし。
