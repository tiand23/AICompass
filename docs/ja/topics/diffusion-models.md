# Diffusion Models

## 概要

拡散モデル（画像/動画生成の主流アーキテクチャ）とその推論最適化：量子化（4-bit など）、蒸留、キャッシュ等のコスト削減・効率化技術、および Diffusers など主要ライブラリのエンジニアリングエコシステム。

## なぜ重要か

画像/動画生成の実装ボトルネックは推論コストと VRAM。量子化推論が主要ライブラリに入ることはコンシューマーハードウェアでの実用性向上を意味し、生成 AI アプリのデプロイ選定とユニットエコノミクスを直接変える。

## コアコンセプト

- **低ビット量子化推論**：4-bit の重み/活性化量子化により、品質劣化を抑えつつ VRAM とレイテンシを大幅に削減（例：Nunchaku）。
- **Diffusers**：HuggingFace の拡散モデル標準ライブラリ。ここに統合されることは「主流入り」を意味する。

## 関連技術

- [world-models](/ja/topics/world-models)（生成シミュレーションも生成モデリングの一種）
- [gemini-models](/ja/topics/gemini-models)（Imagen 系列が Gemini のネイティブなマルチモーダル能力に統合）

## ベストプラクティス

- 画像生成サービスのデプロイ前に 4-bit 量子化版の品質差を測る——多くのシナリオで大幅なコスト削減が可能。

## 推奨学習リソース

- [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers（HuggingFace Blog）](https://huggingface.co/blog)

## Timeline

### [2026-08-17](/ja/today/2026-08-17)

Google が Imagen 4 生成エンドポイントを正式終了し、Gemini 3.1 Flash Image へ移行——独立した専用生成モデルラインが旗艦マルチモーダルモデルへ統合される、また 1 つの事例（OpenAI が Atlas を ChatGPT/Codex に統合したのに続く）。`generate_images()` メソッドは完全に消滅し、シームレスな置き換えではなく、呼び出し元は新 API に合わせて書き直す必要がある（詳細は [gemini-models](/ja/topics/gemini-models)）。

### [2026-07-23](/ja/today/2026-07-23)

Nunchaku の 4-bit 量子化推論が Diffusers に統合——効率的な画像生成が主流ライブラリ入り。
