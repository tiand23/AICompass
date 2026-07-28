---
outline: false
---

<script setup>
import TopicGraph from '../.vitepress/theme/TopicGraph.vue'
import { data } from '../.vitepress/graph.data'
</script>

# Knowledge Graph

> Left to right: AI stack → domains → topics. Colored solid lines show membership; **dashed arcs on the right are cross-references between topics**; node size = timeline activity. Hover to highlight connections, **click a node for a summary overlay** (overview + latest activity) — "Read more" only when you want to go deeper. Generated automatically from document cross-links at build time.

<TopicGraph :graph="data.en" prefix="en" root-label="AI Stack" more-label="Read more" empty-label="accumulating" />
