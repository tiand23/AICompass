---
outline: false
---

<script setup>
import TopicGraph from './.vitepress/theme/TopicGraph.vue'
import { data } from './.vitepress/graph.data'
</script>

# 知识图谱

> 从左到右：AI 开发栈 → 领域 → Topic。彩色实线是归属关系，**右侧虚线弧是 Topic 之间的引用**；节点大小 = Timeline 活跃度。悬停高亮关联，**点击节点弹出摘要浮层**（简介 + 最近动态），想深入再"查看全文"。图谱每次构建时从文档互链自动生成。

<TopicGraph :graph="data.root" prefix="" root-label="AI 开发栈" more-label="查看全文" empty-label="待积累" />
