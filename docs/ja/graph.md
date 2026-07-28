---
outline: false
aside: false
---

<script setup>
import TopicGraph from '../.vitepress/theme/TopicGraph.vue'
import { data } from '../.vitepress/graph.data'
</script>

# ナレッジグラフ

> 左から右へ：AI スタック → 領域 → Topic。色付き実線は所属関係、**右側の破線の弧は Topic 間の参照**。ノードの大きさ = Timeline の活動量、**右端のトラックは各 Topic の直近 14 日間の活動**（今日の列はハイライト、今日更新されたノードには光輪）。ホバーで関連をハイライト、**クリックすると右側から全文がスライド表示**（ドロワー内の Topic リンクはその場で切り替え）。ビルド時にドキュメントの相互リンクから自動生成されます。

<TopicGraph :graph="data.ja" prefix="ja" root-label="AI スタック" empty-label="蓄積中" />
