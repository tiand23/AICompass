---
outline: false
---

<script setup>
import TopicGraph from './.vitepress/theme/TopicGraph.vue'
import { data } from './.vitepress/graph.data'
</script>

# 知识图谱

> 节点 = Topic（颜色按领域，大小按 Timeline 活跃度）；连线 = Topic 之间的引用关系。悬停高亮关联，点击进入 Topic。图谱在每次构建时从文档互链自动生成。

<TopicGraph :graph="data.root" prefix="" />
