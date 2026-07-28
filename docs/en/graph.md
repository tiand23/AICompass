---
outline: false
---

<script setup>
import TopicGraph from '../.vitepress/theme/TopicGraph.vue'
import { data } from '../.vitepress/graph.data'
</script>

# Knowledge Graph

> Left to right: AI stack → domains → topics. Colored solid lines show membership; **dashed arcs on the right are cross-references between topics**; node size = timeline activity. Hover to highlight connections, **click a node to slide out its full content from the right** (topic links inside the drawer switch in place). Generated automatically from document cross-links at build time.

<TopicGraph :graph="data.en" prefix="en" root-label="AI Stack" empty-label="accumulating" />
