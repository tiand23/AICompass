---
outline: false
---

<script setup>
import TopicGraph from '../.vitepress/theme/TopicGraph.vue'
import { data } from '../.vitepress/graph.data'
</script>

# Knowledge Graph

> Radial structure: center → seven domains → topics. Solid lines show membership; **dashed arcs are cross-references between topics**. Node size = timeline activity; hollow domains = accumulating. Hover a topic to highlight its connections, click to open it. Generated automatically from document cross-links at build time.

<TopicGraph :graph="data.en" prefix="en" root-label="AI Stack" />
