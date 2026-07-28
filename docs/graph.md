---
outline: false
---

<script setup>
import TopicGraph from './.vitepress/theme/TopicGraph.vue'
import { data } from './.vitepress/graph.data'
</script>

# 知识图谱

> 放射状结构：中心 → 七个领域 → Topic。实线是归属关系，**虚线弧是 Topic 之间的引用**；节点大小 = Timeline 活跃度，空心领域 = 待积累。悬停 Topic 高亮它的关联，点击进入详情。图谱每次构建时从文档互链自动生成。

<TopicGraph :graph="data.root" prefix="" root-label="AI 开发栈" />
