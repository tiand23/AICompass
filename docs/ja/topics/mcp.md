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

### [2026-08-29](/ja/today/2026-08-29)

three.ws がオープンソース化：公式レジストリに 72 の MCP サーバーを含み、「マルチサーフェス配信」能力の一環として、同じ Agent インスタンス（3D 具身化とオンチェーン決済アイデンティティを含む）を任意の MCP クライアントから直接利用できるようにしている——分配層における MCP の大規模な応用例だ（詳細は [agent-frameworks](/ja/topics/agent-frameworks)）。

### [2026-08-03](/ja/today/2026-08-03)

Agent-Reach が Trending 入り（日次 +659、累計 64.7k）：MCP のプロトコル化と相互補完の「CLI 能力レイヤー」路線——既存 CLI ツールの再利用 + 主要メソッド/フォールバックリストのルーティングで、アンチスクレイピングと API 変更下のツール可用性を運用する。

### 2026-07-28

Topic 作成。現状：MCP はツール接続の事実上の標準となり、主要クライアント（Claude/ChatGPT/Cursor）とフレームワークが全面対応；「MCP+A2A 二層スタック」が企業エージェントアーキテクチャのデフォルトに。
