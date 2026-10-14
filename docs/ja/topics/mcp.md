# MCP

## 概要

MCP（Model Context Protocol）：Anthropic が提唱したオープンプロトコル。AI システムが外部ツール・データベース・データソースに接続する方法を標準化する——「AI の USB-C」。Claude、ChatGPT、Cursor など主要プロダクトが対応済みで、ツール接続の事実上の標準。

## なぜ重要か

MCP 以前は、AI アプリ × ツールの組み合わせごとにグルーコードが必要だった（M×N 問題）；MCP はこれを M+N に変える——ツール側が MCP Server を一度書けば、対応クライアントすべてから使える。「二層プロトコルスタック」合意の下層でもある：**MCP は縦のツール統合、A2A は横のエージェント連携**。

## コアコンセプト

- **Server / Client アーキテクチャ**：ツール側が MCP Server を実装（tools・resources・prompts の 3 プリミティブを公開）、AI アプリが Client として接続。
- **トランスポート**：ローカル stdio とリモート HTTP（認証付き可）。リモート MCP がエンタープライズ統合の主形態。
- **ツール発見と遅延ロード**：クライアントはツール schema を検索・遅延ロードでき、大きなツールセットのコンテキスト圧を緩和。
- **セキュリティ面**：MCP Server は新しい攻撃面——ツール記述インジェクション、越権アクセス。企業導入では server 許可リストと権限の絞り込みが必要。
- **帰属の正しさは独立した検証次元である**：MCP Agent が複数のツール呼び出しを組み合わせて回答を構成する場合、従来の事実検証手法（RAGAS faithfulness、MiniCheck など）は「主張が証拠プールのどこかで支持されているか」だけを問い、「出力が引用している出典が実際にそれを支持しているか」は問わない——この「クロスソース混同」という失敗はすり抜けてしまい、「主張された出典」と「実際にルーティングされた出典」を照合する専用の検証が必要になる（ProvenanceGuard のアプローチ、詳細は [agent-evaluation](/ja/topics/agent-evaluation)）。

## 関連技術

- [a2a](/ja/topics/a2a)（スタックの横方向の層）
- [agent-skills](/ja/topics/agent-skills)（MCP はツールを繋ぎ、skill は使い方を積む）
- [agent-frameworks](/ja/topics/agent-frameworks)（主要フレームワークは MCP を内蔵）
- [agentic-safety](/ja/topics/agentic-safety)（ツール権限はエージェント安全の核心）

## ベストプラクティス

- 企業内では「少数精鋭」の MCP Server を優先：1 ドメイン 1 server、権限は最小化——社内 API を一気に全公開するより良い。
- MCP Server は本番サービスとして扱う：認証・監査ログ・レート制限は必須。

## 推奨学習リソース

- [MCP 公式ドキュメント](https://modelcontextprotocol.io/)
- [6 大エージェントプロトコルガイド（MindStudio）](https://www.mindstudio.ai/blog/six-agent-protocols-ai-builders-2026)

## Timeline

### [2026-10-14](/ja/today/2026-10-14)

HKUDS/CLI-Anything が GitHub Trending 入り（累計 5.2 万スター）：7 段階の自動化パイプラインが、任意のオープンソース GUI アプリ（GIMP、Blender、Inkscape、OBS Studio など）向けに「Agent ネイティブ」な CLI（REPL モード、JSON 出力、`SKILL.md` ファイル）を生成——Agent がスクリーンショットから UI を認識する代わりに構造化コマンドを発行し確定的なフィードバックを読み取れるようにする；OpenClaw、Claude Code、Codex など SKILL 仕様に対応した Agent と互換性があり、`skills/` ディレクトリに統一される。「Agent が人間向けに作られたソフトウェアをどう操作するか」という長年の課題に対する、computer-use のスクリーンショット＋クリック方式に代わるもう一つの確定的な解法（詳細は [agent-skills](/ja/topics/agent-skills)）。

### [2026-10-09](/ja/today/2026-10-09)

`rea`（MCP server + CLI）が 1 日で +54,706 スター急増、2 日間で累計約 18.6 万——Ghidra や IDA Pro などの専門的な逆向工程ツールを MCP 経由でコーディング Agent の背後に接続し、ネイティブバイナリ/Electron/.NET/APK/Web サイトを解析、ソースコードなしに機能の実装を説明し証拠チェーンと再現手順で裏付ける。MCP が「データソース/API」だけでなく「専門ツールチェーン」を Agent の背後に接続する高熱度の事例（詳細は [agent-skills](/ja/topics/agent-skills)）。

### [2026-09-29](/ja/today/2026-09-29)

論文が ProvenanceGuard を提案：安定したツール ID・出典 ID・生の出力を含む MCP のトレース記録を入力とし、回答を原子的な主張に分解し、それぞれを対応する出典の証拠にルーティングして支持度を検証し、「主張されている出典」と「実際にルーティングされた出典」を比較、主張ごとの判定と全体としての許可/拒否の結論を出力する——「引用が正しいか」を独立した検証次元として体系化した初めての手法で、この盲点は MCP Agent の普及とともに拡大していく（詳細は [agent-evaluation](/ja/topics/agent-evaluation)）。

### [2026-08-29](/ja/today/2026-08-29)

three.ws がオープンソース化：公式レジストリに 72 の MCP サーバーを含み、「マルチサーフェス配信」能力の一環として、同じ Agent インスタンス（3D 具身化とオンチェーン決済アイデンティティを含む）を任意の MCP クライアントから直接利用できるようにしている——分配層における MCP の大規模な応用例だ（詳細は [agent-frameworks](/ja/topics/agent-frameworks)）。

### [2026-08-03](/ja/today/2026-08-03)

Agent-Reach が Trending 入り（日次 +659、累計 64.7k）：MCP のプロトコル化と相互補完の「CLI 能力レイヤー」路線——既存 CLI ツールの再利用 + 主要メソッド/フォールバックリストのルーティングで、アンチスクレイピングと API 変更下のツール可用性を運用する。

### 2026-07-28

Topic 作成。現状：MCP はツール接続の事実上の標準となり、主要クライアント（Claude/ChatGPT/Cursor）とフレームワークが全面対応；「MCP+A2A 二層スタック」が企業エージェントアーキテクチャのデフォルトに。
