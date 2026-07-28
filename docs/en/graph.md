---
outline: false
---

<script setup>
import TopicGraph from '../.vitepress/theme/TopicGraph.vue'
import { data } from '../.vitepress/graph.data'
</script>

# Knowledge Graph

> Nodes = topics (color by domain, size by timeline activity); edges = cross-references between topics. Hover to highlight connections, click to open a topic. The graph is generated automatically from document cross-links at build time.

<TopicGraph :graph="data.en" prefix="en" />
