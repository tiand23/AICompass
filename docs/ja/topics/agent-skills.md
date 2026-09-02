# Agent Skills

## 概要

Skills：再利用可能なエージェント能力パッケージ——指示とリソースを束ね、エージェントが専門タスク（特定文書の操作、特定手順の実行など）に応じてオンデマンドで読み込む。Anthropic が 2025 年 10 月に Claude とともに公開、2025 年 12 月にオープン標準化。数ヶ月で GitHub が数千の再利用可能パッケージの主要配布チャネルになった。

## なぜ重要か

Skills は「エージェントに仕事を教える」ことをプロンプトエンジニアリングから、配布・バージョン管理可能なソフトウェア成果物に変えた——コード再利用にとってのパッケージマネージャに相当する、エージェント能力エコシステム化の鍵。skill エコシステムの熱度を追うことは「皆がエージェントに何をさせているか」を追うこと。

## コアコンセプト

- **構造**：skill = メタデータ（名前、トリガー記述）+ 指示ドキュメント + 任意のリソース/スクリプト。エージェントがタスク関連性で自動ロード。
- **MCP との分担**：MCP はエージェントに**ツールを繋ぐ**（能力へのインターフェース）、Skill は**知識と手順を積む**（能力の使い方）——競合ではなく補完。
- **配布エコシステム**：GitHub が主チャネル、awesome 系リスト（ComposioHQ/awesome-claude-skills など）が入口。コミュニティランキングはスター・熱度・実測の時間節約を混合。
- **供給側の階層**：標準を定める公式ベンダー（Anthropic——anthropics/skills は自ら維持する参照実装+仕様）→ ハイパースケーラー公式の製品ライン合集（google/skills、自社全製品をカバーする「ドキュメントの実行可能版」）→ 著名な独立エンジニアの個人経験萃取（Addy Osmani、Matt Pocock）→ 垂直領域の全工程知識パッケージ化（OpenMontage が動画制作の専門知識を 700+ の skill ファイルに封装）→ 匿名/コミュニティリポジトリ——階層ごとに信頼性と更新の同期性が異なり、選定時は出典の階層で評価する。

## エコシステム熱度（GitHub ランキング）

Topic 作成時（2026-07）の高スター代表リポジトリ：

| リポジトリ | Star | 位置づけ |
|---|---|---|
| ECC | ~226k | Claude Code エコシステムツール |
| hermes-agent | ~209k | エージェントフレームワーク/ツール |
| cc-switch | ~113k | Claude Code 設定切替 |
| ui-ux-pro-max-skill | ~101k | UI/UX 専門 skill |
| awesome-claude-skills | ~67k | 精選リスト（50+ skills） |
| book-to-skill | 新登場（2026-07-29 Trending 入り） | PDF → Claude Code skill 自動変換 |
| superpowers | 新登場（2026-07-30 Trending 入り、08-05 再登場 +653） | Agentic skills フレームワーク + 開発方法論 |
| last30days-skill | 新登場（2026-07-31 Trending 入り、08-03 まで継続在榜） | クロスプラットフォーム「直近 30 日」調査 skill |
| reverse-skill | 新登場（2026-08-01 Trending 入り、08-04/05 は 2 日連続で日次 +2,300 前後の高熱） | リバース/ペンテスト/セキュリティ研究 skill ルーターパック |
| addyosmani/agent-skills | 新登場（2026-08-06 Trending 入り、累計 8.2 万スター） | 開発ライフサイクル全体をカバーする 24 のプロフェッショナル工学 skill |
| mattpocock/skills | 新登場（2026-08-07 Trending 入り、累計約 20.7 万スター——現時点で skill エコシステム単体最高熱） | 個人の `.agents` ディレクトリから精製した工学規律 skill（面談式プランニング/TDD/アーキテクチャ評価） |
| google/skills | 新登場（2026-08-08 Trending 入り、累計 1.62 万スター、Google 公式） | GKE/BigQuery/Gemini API など Google 全製品ラインをカバーする公式 skill 集 |
| agency-agents | 新登場（2026-08-09 Trending 入り、累計約 14 万スター） | 230+ の分野横断エキスパートペルソナによるエージェントチームテンプレート、8+ プラットフォーム向け変換スクリプト |
| anthropics/skills | 新登場（2026-08-12 Trending 入り、累計 16.8 万スター、Anthropic 公式） | 標準策定者による公式参照実装：仕様 + サンプル skill + テンプレート。Claude のネイティブ文書処理能力の背後にあるのと同じ実装 |
| Anthropic-Cybersecurity-Skills | 新登場（2026-08-18 Trending 入り、累計 2.85 万スター） | 817 件のサイバーセキュリティ実務者 skill、MITRE ATT&CK/ATLAS/D3FEND、NIST CSF/AI RMF、MITRE F3 の六大フレームワークにマッピング |
| archify | 新登場（2026-08-31 Trending 入り、累計約 3.6 万スター） | 自然言語/Mermaid 入力からアーキテクチャ・ワークフロー・シーケンス・データフロー・ライフサイクル図を生成、自己完結型 HTML 出力 |
| scientific-agent-skills | 新登場（2026-08-31 Trending 入り、累計約 3〜4 万スター） | 科学研究向け検証済み skill 165 件 + 100 以上の科学データベース、生物学・化学・医学・創薬をカバー |
| academic-research-skills | 新登場（2026-09-01 Trending 入り、累計約 4.4 万スター） | 学術研究全工程 skill スイート：調査→執筆→レビュー→修正→仕上げ、Codex ネイティブ版も提供 |

> このランキングは skill 系リポジトリが GitHub Trending に登場した際に `/update` が自動更新する。

## 関連技術

- [mcp](/ja/topics/mcp)（ツール接続層、補完関係）
- [agent-frameworks](/ja/topics/agent-frameworks)
- [ai-code-review](/ja/topics/ai-code-review)（レビューは最も一般的な skill シナリオのひとつ）

## ベストプラクティス

- skill の核心は**トリガー記述**——エージェントはそれで読み込み時機を判断する。記述が曖昧な skill は存在しないのと同じ。
- チーム内ではまず「AI に繰り返し説明している手順」を skill の素材にする——最も直接的なリターン。

## 推奨学習リソース

- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)
- [Claude Code リポジトリのスターランキング](https://githublb.vercel.app/topic/claude-code)

## Timeline

### [2026-09-01](/ja/today/2026-09-01)

academic-research-skills が GitHub Trending 入り（累計約 4.4 万スター）：学術研究の全工程（調査→執筆→レビュー→修正→仕上げ）を Claude Code skill スイートとしてパッケージ化し、Codex ネイティブ版も提供。「汎用的なエンジニアリング規律 skill → 垂直領域の全工程知識パッケージ化」という流れの継続であり、動画制作・科学研究に続く高スターの垂直領域パッケージ化事例。

### [2026-08-31](/ja/today/2026-08-31)

archify（累計約 3.6 万スター）と scientific-agent-skills（累計約 3〜4 万スター）が同日 GitHub Trending 入り：前者はアーキテクチャ図・ワークフロー図・シーケンス図・データフロー図・ライフサイクル図の生成を skill としてパッケージ化し、自然言語または貼り付けられた Mermaid 入力を受け付けて自己完結型の HTML（モーション付き）や PNG/SVG/WebM・共有カードを出力する；後者は科学研究向けで、生物学・化学・医学・創薬をカバーする検証済み skill 165 件と 100 以上の科学データベースを提供し、Claude Code・Cursor・Codex などに対応する。「汎用的なエンジニアリング規律 skill → 垂直領域の全工程知識パッケージ化」という流れの継続であり、scientific-agent-skills は動画制作（OpenMontage）に続く、より大規模な垂直領域パッケージ化の事例。

### [2026-08-19](/ja/today/2026-08-19)

Claude Platform の Agent Skills と Skills API（`/v1/skills`）が正式 GA に、`skills-2025-10-02` beta header が不要になった。`container` パラメータ経由で Messages API に Skill を読み込むリクエストも含む——2025 年 10 月以来急速に拡大してきた skill エコシステムに、ついに公式 API レベルでの本番運用の裏付けが与えられた（詳細は [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)）。

### [2026-08-18](/ja/today/2026-08-18)

Anthropic-Cybersecurity-Skills が登場（累計 2.85 万スター）：29 のセキュリティ領域にわたる実際の実務者ワークフロー由来の 817 件の skill を、MITRE ATT&CK v19.1、NIST CSF 2.0、MITRE ATLAS、MITRE D3FEND、NIST AI RMF、MITRE F3 の六大業界フレームワークに体系的にマッピング；「frontmatter の軽量スキャン（1 件約 30 token）+ 一致時のみ完全な内容をロード」という段階的開示で token コストを抑制、Claude Code など 20+ プラットフォームに対応（詳細は [agentic-safety](/ja/topics/agentic-safety)）。

### [2026-08-12](/ja/today/2026-08-12)

Anthropic 公式の anthropics/skills が初めて公式の立場で GitHub Trending 入り（累計 16.8 万スター）：標準策定者自らが維持する参照実装（仕様 `/spec` + サンプル skill + テンプレート）で、供給チェーンの最上流の一段を埋める——開発者は他の出所の skill パッケージを公式仕様と直接照らし合わせて評価できるようになった。同日 OpenMontage がオープンソース化（累計 4.73 万スター）：700+ の skill/制作知識ファイルが動画制作の全工程専門知識を Agent が読み込める知識レイヤーとしてパッケージ化——skill エコシステムが「汎用的なエンジニアリング規律」から「全工程の領域専門知識」へ拡張している事例（詳細は [deep-agents](/ja/topics/deep-agents)）。

### [2026-08-09](/ja/today/2026-08-09)

agency-agents が登場（累計約 14 万スター）：エンジニアリング/デザイン/マーケティング/セールス/ゲーム開発/GIS など 15+ 大分類にまたがる 230+ の分野横断エキスパートペルソナ。Claude Code にネイティブ対応し、変換スクリプトで Copilot/Cursor/Aider など 8+ プラットフォームをサポート——「既製のエキスパートペルソナチーム」という配布形態への需要は巨大で、Agent 能力エコシステムがエンジニアツールから汎用的な職場ロールプレイへ拡張しているサンプル。

### [2026-08-08](/ja/today/2026-08-08)

Google が公式に google/skills を公開（累計 1.62 万スター）：GKE、BigQuery、Gemini API、Well-Architected Framework など自社全製品ラインをカバー——2 人の独立エンジニアの高スター skill パックに続き、自社製品の skill 集を公式にメンテナンスする初のハイパースケーラー。「skill は製品ドキュメントの実行可能版」という位置づけがプラットフォームベンダーに正式採用され始めた。

### [2026-08-07](/ja/today/2026-08-07)

Matt Pocock が skills を公開（累計約 20.7 万スター——エコシステム単体最高熱を交代）：個人の `.agents` ディレクトリから精製、着手前に反問して意図を確認する「面談式プランニング」など整合系 skill が中心——Addy Osmani から 1 日後にまた別の著名な独立エンジニアが個人の経験を高スター skill パックへ精製。「個人経験の蓄積を公開する」ことが再現可能なパターンになりつつあり、手順規範より難しい「コミュニケーションの整合」にも手が届き始めた。

### [2026-08-06](/ja/today/2026-08-06)

Addy Osmani が agent-skills を公開（累計 8.2 万スター——現時点でエコシステム単体最高熱）：開発ライフサイクル全体（Define/Plan/Build/Verify/Review/Ship）をカバーする 24 のプロフェッショナル工学 skill。「Agent が手順を飛ばすために使いそうな言い訳」を明示的に列挙し反論——skill の書き方が「Agent に何をすべきか教える」から「Agent の手抜きを防ぐ」へ深化した、コンテンツ品質の顕著な成熟。

### [2026-08-05](/ja/today/2026-08-05)

compound-engineering-plugin が Trending 入り（累計 23.9k、日次 +40）：また 1 つの方法論系 skill パックで、しかも真のクロスプラットフォーム配布（Claude Code/Cursor/Codex/Cline/Devin CLI に同時掲載）——配布が「単一ツール専用」から「一度書けば複数ツールで再利用」へ移行。

### [2026-08-03](/ja/today/2026-08-03)

テンセントクラウドの TencentDB-Agent-Memory が「エージェントの対話から skill を抽出しレビュー後にチーム共有」を記憶パイプラインに組み込む（詳細は [agent-memory](/ja/topics/agent-memory)）——skill の生産がインフラ化され始めた。同日の Stripe Kai 事例はエンタープライズ側のサンプル：1,000+ の skills を各事業チームが連邦自治で生産し動的ロード、500+ の社内ツールをカバー——中央プラットフォーム + 連邦生産が skill スケール化の現実的分業。reverse-skill は加速継続（日次 +1,141）。

### [2026-08-01](/ja/today/2026-08-01)

reverse-skill が Trending 入り（日次 +612）：初の「skill router」形態——ルーティング + オンデマンドツールチェーン + 自動進化する経験ベース。単一領域の skill ライブラリが内部構造を持ち始めた。openwork（日次 +796）は skills/MCP 設定をツール横断の可搬資産にする（詳細は [agent-workspaces](/ja/topics/agent-workspaces)）。

### [2026-07-31](/ja/today/2026-07-31)

last30days-skill が Trending 入り（日次 +378）：クロスプラットフォーム調査の skill 化——1 週間で 3 件目。「定期調査と総括」が標準化された能力に。

### [2026-07-30](/ja/today/2026-07-30)

superpowers が Trending 入り（日次 +616 スター）：skills フレームワーク + 開発方法論——skill が単発の能力パッケージから開発フローを組織する第一級単位へ。

### [2026-07-29](/ja/today/2026-07-29)

book-to-skill が Trending 入り（1 日 +423 スター）：PDF を skill パッケージへ自動コンパイル——「知識 → skill」ツールチェーン化のシグナル。

### 2026-07-28

Topic 作成。エコシステム現状：オープン標準化から約半年で GitHub 配布が定着、トップリポジトリは 20 万スター規模、awesome リストが主要な発見入口に。
