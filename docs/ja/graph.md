---
outline: false
---

<script setup>
import TopicGraph from '../.vitepress/theme/TopicGraph.vue'
import { data } from '../.vitepress/graph.data'
</script>

# ナレッジグラフ

> ノード = Topic（色は領域、大きさは Timeline の活動量）；エッジ = Topic 間の参照関係。ホバーで関連をハイライト、クリックで Topic へ。グラフはビルド時にドキュメントの相互リンクから自動生成されます。

<TopicGraph :graph="data.ja" prefix="ja" />
