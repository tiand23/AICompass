---
outline: false
---

<script setup>
import TopicGraph from '../.vitepress/theme/TopicGraph.vue'
import { data } from '../.vitepress/graph.data'
</script>

# ナレッジグラフ

> 放射状構造：中心 → 7 つの領域 → Topic。実線は所属関係、**破線の弧は Topic 間の参照**。ノードの大きさ = Timeline の活動量、中抜きの領域 = 蓄積中。Topic にホバーすると関連がハイライト、クリックで詳細へ。ビルド時にドキュメントの相互リンクから自動生成されます。

<TopicGraph :graph="data.ja" prefix="ja" root-label="AI スタック" />
