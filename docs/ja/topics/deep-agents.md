# Deep Agents

## 概要

Deep Agents は LangChain が提唱するコンセプトとプロダクトの方向性：長期・多段階の自律タスクを遂行するエージェント——計画立案、サブタスク分解、永続メモリ、エラー回復を備え、単発のツール呼び出し型「浅い」エージェントと区別される。

## なぜ重要か

長期の自律性はエージェント能力競争の現在のフロンティアであり、最も評価が難しい部分でもある：単発ベンチマークでは計画・ツール利用・エラー回復を測れない。主要フレームワークベンダーがこの領域でコンセプト・プロダクト・評価手法を構築しており、自らのエージェントアーキテクチャを校正するために追跡する価値がある。

## コアコンセプト

- **長期（long-horizon）タスク**：多数のステップ・ツール・長時間にわたる目標達成。
- **評価の難題**：プロセスの正しさ vs 結果の正しさ、途中回復能力の測定。
- **Middleware の組み合わせ**：ファイルシステム（ターン横断の永続参照）、サンドボックス実行（隔離したコード実行）、コンテキスト要約（長セッションのコスト制御）——Stripe Kai 事例が実証した長セッションエージェントの標準三点セット。
- **積層アーキテクチャ**：オープンソース harness（Deep Agents）→ 企業専用 harness → 設定レイヤー（カスタムエージェントインスタンス）——汎用基盤と企業カスタマイズの分業モデル。
- **読み書き権限の分離**：読み取り専用の診断/分析は完全に自律でよいが、副作用を伴う書き込みは必ず人間の承認（HITL）を経る——Kubernetes SRE エージェント事例の中核設計原則。承認範囲も「人間が理解できる」程度に狭めるべきで、操作カテゴリ全体を一括で許可すべきではない。
- **外部状態カーネル**：セッションを跨ぐ目標・タスク・証拠・責任の引き継ぎは単一会話のコンテキストに詰め込むのに向かない——loopx のような Agent 非依存の外部コントロールプレーンが、特定フレームワークの内蔵機能ではなく独立した層として、長期マルチ Agent 協調のために台頭しつつある。
- **マネージド化**：オープンソースフレームワークの上にホスト型ランタイムが登場——LangSmith の Managed Deep Agents（2026-08 公開ベータ）は永続実行・サンドボックス・記憶・可観測性を `mda deploy` 一発でまとめて提供、Deep Agents に「オープンソースフレームワーク + ホスト型ランタイム」の積層モデルを適用した例。
- **自己改善ループ（内蔵 vs 外部）**：prime-agent の `/refine` は「軌跡を復盤して harness 自身の状態を更新する」ことをエージェント内蔵の能力にした（harness 状態への書き戻し）——loopx の外部状態層とは別の実装経路で、同じく「実行に再利用可能な蓄積を残す」という目標を達成している。
- **モデルルーティングによるコスト削減**：長時程タスクの大半の呼び出しは前沿モデルを必要としない——LangChain が Switchyard で Deep Agents 評価セットを実測したところ、93% の呼び出しは 30B 級モデルにルーティング可能で、前沿モデルが本当に必要なのはわずか 7%、全体コストは 74% 削減された（詳細は [model-efficiency](/ja/topics/model-efficiency)）。
- **能力はツールの数ではなく計算環境から生まれる**：monday.com Sidekick の事例では、200 以上の事前定義ツールを詰め込んだことでコンテキストが汚染され、Agent は鈍く高コストになった。持続的で隔離された、コードを実行できるサンドボックス環境を与えることこそが能力の上限を決める——網羅的なツールカタログではない（詳細は [agent-sandboxes](/ja/topics/agent-sandboxes)）。
- **人間の必須チェックポイントを備えた垂直領域の全工程編成**：OpenMontage は「調査→提案→脚本→シーンプラン→素材→編集→合成」を長時程・多段階のパイプラインとして標準化し、各重要ノードで人間承認と意思決定監査証跡を必須にした——「自律実行 + 人間チェックポイントの保持」という長時程 Agent タスクのパターンを、特定の垂直領域（動画制作）で完全に工学実装した例。
- **コンテキスト伝播モード（Forked vs Isolated Subagents）**：LangChain は Supervisor/子 Agent 構成で「子 Agent にどれだけコンテキストを渡すか」を 2 つのモードに明示的に分離した——Isolated（デフォルト、子 Agent はタスク説明のみを受け取り空のコンテキストから開始、並列検証/独立調査向き）と Forked（`'mode': 'fork'`、子 Agent がスーパーバイザーの現在の状態と会話履歴をプロンプトキャッシュ経由で継承し、重複した情報収集を回避）；使い分けの指針は Worker/Memory エージェントは fork、Verifier/Researcher エージェントは isolated。
- **不確実性に対処する複数経路推論**：Microsoft の Discovery Engine（中核 CLIO）は別の長期パターンを示す——単一スレッドの計画・実行・回復ではなく、複数の独立した推論経路が並行して探索し互いに学習を共有、探索継続・戦略切替・モデル切替・人間の専門家関与を自律的に判断する；科学的発見という不確実性の高い垂直タスクで比較可能なベンチマークスコアを出した（詳細は [enterprise-ai-agents](/ja/topics/enterprise-ai-agents)）。
- **管理された認証情報と呼び出し元単位の ID**：LangSmith Managed Deep Agents の Connections は認証情報管理を 2 つの独立した軸に分離——所有者（Agent 共有 vs 呼び出し元ごと）と種別（静的シークレット vs OAuth）——ホスト型 Agent のキーローテーションと「操作は汎用ボット ID ではなく実際の呼び出し元の ID を伴うべき」という 2 つの課題を解決し、OAuth コールバックの手作り配管を不要にする。
- **ツール開示と skill 開示の紐づけ**：企業の skill ライブラリが数千件規模に成長すると生じる問題——ツールが skill とは別に開示されると Agent が指示を読まずにツールだけを使ってしまう可能性がある；`include_tools` によって skill のメタデータにツールを紐づけられ、Agent がその skill を読むまでコンテキストから隠され読んだ時点で新しいシステムメッセージとして出現する（会話途中でのツール追加に対応するモデルではこれにより prompt キャッシュを維持できる）；`pinned_skills` はモデル呼び出し前に指定した skill の完全な指示を事前ロードする（「発見してからロード」の 1 ラウンドを省略）；呼び出し時に `skills_metadata` を `None` に設定すると長時間稼働するスレッドが再起動せずに新規/変更された skill を認識できる——これら 3 つの変更はいずれも「段階的開示」という核心的な設計原則を破らない。
- **実行時コンテキストで動的に設定されるデプロイ**：同一のホスト型デプロイが実行時のコンテキスト（トリガーとなった Slack チャンネルなど）に応じてモデル/指示/skills/ツール/サンドボックスを選べる——シナリオごとにほぼ同じ Agent をコピー＆ペーストする必要がない；チャットで起動するスケジュール機能（繰り返しタスクは prompt と cron ルールを紐づけ、一度限りのタスクは指定時刻に実行され元のスレッドに返信する）と組み合わせることで、「Agent の設定」と「Agent のスケジューリング」の両方がデプロイ時に固定された定数ではなく実行時に宣言可能なパラメータになる。

## 関連技術

- LangGraph（LangChain のエージェントオーケストレーションフレームワーク）
- [enterprise-ai-agents](/ja/topics/enterprise-ai-agents)

## ベストプラクティス

- 自前の長期タスクエージェントを評価する際は LangChain のベンチマーク手法を参考に——エンドツーエンド成功率だけを測らない。

## 推奨学習リソース

- [How We Benchmark Deep Agents（LangChain Blog）](https://www.langchain.com/blog/)

## Timeline

### [2026-10-07](/ja/today/2026-10-07)

LangSmith Managed Deep Agents v0.9 公開ベータ：Schedules SDK（チャットでタスクのスケジュールを作成/変更/一覧表示/削除——繰り返しタスクは prompt と cron ルールを紐づけ、一度限りのタスクは指定時刻に実行され元のスレッドに返信する）、実行単位の設定（同一デプロイが実行時コンテキストに応じてモデル/指示/skills/ツール/サンドボックスを選択）、設定可能な Slack 確認リアクションを追加。同日 LangChain が《Revamping Skills in Deep Agents》を公開し、企業の skill ライブラリが数千件規模になった際に生じる 3 つの問題（ツール/skill 開示の分離、明示的にリクエストした skill でも追加ロードが必要、長時間稼働スレッドが skill の更新を認識できない）を解決する Skills の刷新を実施——詳細は上記の核心コンセプトを参照。2 週間前の v0.8（新しい認証/記憶/チャネル）と 3 週間前の Connections に続き、ホスト型ランタイムの機能拡充が明らかに加速している（詳細は [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)）。

### [2026-09-24](/ja/today/2026-09-24)

LangSmith Managed Deep Agents v0.8 発表：認証、記憶管理、メッセージチャネルを追加——09-09 の Connections に続く、ホスト型ランタイム機能のさらなる拡充で、同日の Engine v2（レッドチーム演習）、Trajectories（読める形のセッションビュー）、Fine-Tuning、Custom Apps と合わせた LangSmith の一括更新の一部（詳細は [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)）。

### [2026-09-17](/ja/today/2026-09-17)

LangChain が Deep Life Sci を発表：Deep Agents harness を基盤としたオープンソースの臨床/実験室研究 Agent で、60 万件以上の ClinicalTrials.gov 試験、2,900 万件の PubMed 抄録、1,200 万件の PubMed Central 全文にアクセスし、PDF・画像・表・RIS ファイル・SMILES/FASTA 配列・RNA-seq・プロテオミクスデータに対応、サンドボックス化されたサブエージェントが検索/レビュー/分析を分担、LangSmith が検索・コード実行・文書レビュー・サブエージェントのルーティング・最終回答までの全経路を記録しデバッグと監査に活用できる；オープンソースのため独自データ・モデルの差し替え・カスタムガードレールに対応できる。同日 Included Health が Deep Agents + LangGraph で構築した連合型医療ナビゲーション Agent の事例を公開——09-14 の Madrigal Pharmaceuticals/Abridge/Vizient のスケーリング事例に続くもので、カスタマーサポートや社内業務ツールに続き、ヘルスケア/ライフサイエンスが次の重点垂直領域のバトンを受け取りつつあり、「オープンな汎用 harness + 垂直領域への深いカスタマイズ」というパターン（動画制作の OpenMontage、法律の Harvey LAB に続く）を継続している（詳細は [enterprise-ai-agents](/ja/topics/enterprise-ai-agents)）。

### [2026-09-09](/ja/today/2026-09-09)

LangChain が Connections をローンチ：LangSmith Managed Deep Agents に管理型認証情報システムを追加、名前付き認証情報をワークスペースに保存（コードや `.env` には置かない）、実行時に `connections.get("<slug>", {"type": "agent"|"user"})` で取得；所有者（Agent 共有 vs 呼び出し元ごと）と認証情報タイプ（静的シークレット vs OAuth）という 2 つの独立した軸を持ち、OAuth コールバックルート/トークンストア/リフレッシュロジックの手作りが不要に——ホスト型 Agent のキーローテーションと「操作は実際の呼び出し元の ID を伴うべき」という 2 つの現実的な課題を解決。

### [2026-09-08](/ja/today/2026-09-08)

LangChain が Deep Agents のマルチ Agent コンテキスト伝播を 2 つのモードに明示的に分離：Isolated（デフォルト、子 Agent は空のコンテキストから開始、並列検証/独立調査向き）と新設の Forked（`'mode': 'fork'`、プロンプトキャッシュ経由でスーパーバイザーの現在の状態と会話履歴を継承し、重複した情報収集を回避）、役割ごとの使い分け指針（Worker/Memory は fork、Verifier/Researcher は isolated）を提示。同日 Microsoft が Discovery Engine（中核 CLIO）を発表：複数の独立した推論経路が並行して探索し学習を共有、証拠に裏付けられた 1 つの結果に収束、探索継続/戦略切替/モデル切替/人間の専門家関与を自律的に判断——「Agent's Last Exam」ベンチマークで健康 61.6%、物理科学 75.2%、生命科学 64.6% を達成し、新しい有機系レドックスフロー電池の発見を支援したと主張——長時程 Agent が不確実性に対処するもう 1 つのパターン（複数経路探索 vs 単一スレッドの計画・回復）を、科学的発見という垂直領域で具体化した例（詳細は [enterprise-ai-agents](/ja/topics/enterprise-ai-agents)）。

### [2026-08-27](/ja/today/2026-08-27)（補漏）

WIRED が OpenAI の Codex CLI 公開コードベースの中に未公開の「Persistent mode」を発見：Agent がリクエスト完了後に自ら後続タスクを作成し、過去のやり取りと「ユーザーについての知識」を使って次に何をするか決めながらセッションをまたいで動き続ける——本ナレッジベースがこれまで追跡してきた loopx の外部状態カーネルや Claude Code のセッション横断メッセージングと並ぶ「Agent のセッション横断持続的協調」の別の一例だ；OpenAI はテスト中であることを確認したが、近い将来のローンチ予定はないとしている（詳細は [coding-agents](/ja/topics/coding-agents)）。

### [2026-08-25](/ja/today/2026-08-25)

IBM が Granite 4.2 を発表：Apache 2.0 のオープン推論モデルファミリー（3B/8B/30B）。核心的な革新は多段階の連鎖的強化学習——基礎 RL の後、専用の Agentic RL 段階で 8B/30B モデルの SWE Agent、ターミナル操作、Web 検索を、合成シミュレーションではなく実際にサンドボックス化されたリポジトリ・ターミナル・ブラウザの中で直接訓練する；30B モデルは SWE-Bench Verified で 57% を達成。訓練側でも実環境を採用し始めており、評価側の「実タスク由来ベンチマーク」と同じ流れを反復している（詳細は [model-efficiency](/ja/topics/model-efficiency)）。

### [2026-08-24](/ja/today/2026-08-24)（補漏）

Toyota 北米の事例（LangChain 発表）：ToyotaGPT、GearPal、R&D GPT という 3 つの本番アプリケーション——Agent デプロイを「6 か月・6 人」から「4 日・1 人」へ、設備診断を 5〜6 時間から 2〜3 分へ短縮、チームは各プロジェクトで年率 6〜7 桁の ROI を要求——AI を実験的支出ではなく資本投資として扱う定量化された事例だ（詳細は [enterprise-ai-agents](/ja/topics/enterprise-ai-agents)）。

### [2026-08-12](/ja/today/2026-08-12)

LangChain が Agent を本番に持っていくために解決すべき 7 種類のインフラ課題（ランタイムの信頼性、イベントストリーミング、信頼できないコードの安全な実行、コンテキスト管理、性能評価、記憶システム、認可）を体系的に列挙し、マネージドサービスがこれらをパッケージ化すると論じる；同日 LangSmith の BYOC デプロイモードが AWS で正式 GA（詳細は [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)）。

OpenMontage がオープンソース化（累計 4.73 万スター）：AI コーディングアシスタントを動画制作の全工程オーケストレーターに変える。12 の構造化制作パイプラインすべてが「調査→提案→脚本→シーンプラン→素材→編集→合成」の標準ステージを踏み、各重要ノードで人間承認を必須とする——長時程・多段階 Agent タスクにおける「自律実行 + 人間チェックポイント」パターンの、垂直領域への完全な実装例（詳細は [agent-skills](/ja/topics/agent-skills)）。

### [2026-08-11](/ja/today/2026-08-11)

LangChain が NVIDIA Switchyard で実測：自社の Deep Agents 評価セットにおいて 93% の呼び出しは 30B 級モデルにルーティング可能で、前沿モデルが本当に必要なのはわずか 7%、全体コストは 74% 削減、精度低下はわずか 6 ポイント（詳細は [model-efficiency](/ja/topics/model-efficiency)）。同日、monday.com Sidekick の事例を公開：単一 Agent に 200 以上の事前定義ツールを詰め込んだことでコンテキストが汚染され、鈍く高コストになったが、LangSmith Sandboxes（ハードウェア仮想化 microVM）で Agent に「自分専用のコンピュータ」を与えることで解決——能力の上限はツールの数ではなく動的に実行できる計算環境から生まれる（詳細は [agent-sandboxes](/ja/topics/agent-sandboxes)）。

### [2026-08-08](/ja/today/2026-08-08)

Prime Intellect が prime-agent を公開（累計 6.5k スター）：RLM（再帰言語モデル）の発想——コンテキストを変数、ツールを関数呼び出しとして扱い、永続化された Python REPL の中で動作。`/refine` が軌跡を復盤して経験を harness 状態に書き戻す内蔵型自己改善で、loopx の外部状態カーネルとは別の経路で同じ目標を達成する（詳細は [coding-agents](/ja/topics/coding-agents)）。

### [2026-08-07](/ja/today/2026-08-07)

LangSmith が Managed Deep Agents 公開ベータをローンチ：永続実行・サンドボックス・記憶・Slack/GitHub 接続・OIDC 認証・Harbor 評価・全体トレーシングを一括パッケージ化したホスト型 Deep Agents ランタイム。`mda dev`/`mda deploy` で開発からデプロイまでを閉じる；Claude、Gemini に続き「深いエージェントのホスト化」を製品ラインとして打ち出した 3 社目（詳細は [cloud-agent-platforms](/ja/topics/cloud-agent-platforms)）。

Claude Code v2.1.224（補漏）：クロスセッション通信を追加、独立したセッションが `ListAgents`/`SendMessage` でプレーンテキストのメッセージを交換して協調——マルチ Agent 協調能力が、外部のオーケストレーションフレームワークや外部状態レイヤーに全面的に頼るのではなく、コーディング Agent 製品自体に組み込まれる。「外部状態カーネル」アプローチ（loopx 系）と並ぶもう 1 つの実装経路（詳細は [coding-agents](/ja/topics/coding-agents)）。

### [2026-08-06](/ja/today/2026-08-06)

LangChain が Deep Agents / LangChain / LangGraph の位置づけを整理する記事を公開：Deep Agents はファイルシステムバックエンド・サブエージェント・skills・記憶管理を内蔵した「主張を持つ」harness——複雑で長時間のタスクのデフォルトの起点。3 者は組み合わせ可能で「能動性 vs 決定性」スペクトラム上の 3 つの目盛り（詳細は [agent-frameworks](/ja/topics/agent-frameworks)）。

loopx が登場（累計 2.1k スター）：別の Agent フレームワークではなく、任意の Agent（Codex/Claude Code/Cursor）の上に載せる Agent 非依存の外部状態カーネル——永続目標、引き継ぎ可能なタスク、クォータ意識スケジューリング、証跡ログ。長期マルチ Agent 協調の状態管理が独立した層になりつつある。

### [2026-08-05](/ja/today/2026-08-05)

LangChain が Kubernetes 自律 SRE エージェント事例を公開：スケジューラが軽量な定期チェック（Haiku）→ 異常検知で専門サブエージェントを並列起動して深掘り → Sonnet オーケストレーターが修正案を統合 → 実行は厳格に人間承認の後ろにゲート。「読み取りは自律、書き込みは常にゲート」かつ承認範囲を人が理解できるほど狭く保つのは、コストで階層分けしたモデル運用と読み書き権限分離の 2 原則の合同実践（詳細は [enterprise-ai-agents](/ja/topics/enterprise-ai-agents)）。

### [2026-08-03](/ja/today/2026-08-03)

Stripe 事例公開：全社エージェント「Kai」を Deep Agents 上に構築——1 人 1 週間で初版、middleware 三点セット（ファイルシステム/サンドボックス/要約）+ 連邦型 skills（1,000+）、4 週間で 5,000+ ユーザー、従業員の 83% が毎週利用。

### [2026-07-29](/ja/today/2026-07-29)

Deep Agents v0.7 リリース：ベース入力トークン 65% 削減、ファイルツール全面改善、DeltaChannel 増分チェックポイント、実験的 QuickJS コード実行；TodoListMiddleware がオプトイン化（破壊的変更）。

### [2026-07-23](/ja/today/2026-07-23)

LangChain が「How We Benchmark Deep Agents」を公開し、長期タスクエージェントの評価手法を公開。
