---
outline: false
---

<script setup>
import TopicGraph from '../.vitepress/theme/TopicGraph.vue'
import { data } from '../.vitepress/graph.data'
</script>

# ナレッジグラフ

> 左から右へ：AI スタック → 領域 → Topic。色付き実線は所属関係、**右側の破線の弧は Topic 間の参照**。ノードの大きさ = Timeline の活動量。ホバーで関連をハイライト、**クリックでサマリーの浮動レイヤーを表示**（概要 + 最新動向）——深く読みたいときだけ「全文を読む」。ビルド時にドキュメントの相互リンクから自動生成されます。

<TopicGraph :graph="data.ja" prefix="ja" root-label="AI スタック" more-label="全文を読む" empty-label="蓄積中" />
