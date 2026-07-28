<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface GNode { id: string; domain: number; activity: number; latest: string }
interface GLink { source: string; target: string }

const props = defineProps<{
  graph: { domains: string[]; nodes: GNode[]; links: GLink[] }
  prefix?: string
}>()

const W = 760
const H = 520
const PALETTE = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4']

const pos = ref<Record<string, { x: number; y: number }>>({})
const ready = ref(false)
const hovered = ref('')

const neighbors = computed(() => {
  const m: Record<string, Set<string>> = {}
  for (const n of props.graph.nodes) m[n.id] = new Set([n.id])
  for (const l of props.graph.links) {
    m[l.source]?.add(l.target)
    m[l.target]?.add(l.source)
  }
  return m
})

function radius(n: GNode) {
  return 10 + Math.min(n.activity * 3, 14)
}
function color(n: GNode) {
  return PALETTE[n.domain % PALETTE.length]
}
function href(id: string) {
  return `${props.prefix ? '/' + props.prefix : ''}/topics/${id}`
}
function dimmed(id: string) {
  return hovered.value && !neighbors.value[hovered.value]?.has(id)
}
function linkActive(l: GLink) {
  return hovered.value && (l.source === hovered.value || l.target === hovered.value)
}

onMounted(() => {
  const N = props.graph.nodes.length || 1
  const nodes = props.graph.nodes.map((n, i) => ({
    ...n,
    x: W / 2 + Math.cos((i / N) * 2 * Math.PI) * 160 + (Math.random() - 0.5) * 50,
    y: H / 2 + Math.sin((i / N) * 2 * Math.PI) * 130 + (Math.random() - 0.5) * 50,
    vx: 0,
    vy: 0,
  }))
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))
  const springs = props.graph.links
    .map((l) => ({ s: byId[l.source], t: byId[l.target] }))
    .filter((l) => l.s && l.t)

  for (let iter = 0; iter < 320; iter++) {
    for (let a = 0; a < nodes.length; a++) {
      for (let b = a + 1; b < nodes.length; b++) {
        const A = nodes[a]
        const B = nodes[b]
        let dx = A.x - B.x
        let dy = A.y - B.y
        const d2 = dx * dx + dy * dy || 1
        const d = Math.sqrt(d2)
        const f = 2800 / d2
        dx /= d
        dy /= d
        A.vx += dx * f
        A.vy += dy * f
        B.vx -= dx * f
        B.vy -= dy * f
      }
    }
    for (const { s, t } of springs) {
      const dx = t.x - s.x
      const dy = t.y - s.y
      const d = Math.sqrt(dx * dx + dy * dy) || 1
      const f = (d - 130) * 0.02
      s.vx += (dx / d) * f
      s.vy += (dy / d) * f
      t.vx -= (dx / d) * f
      t.vy -= (dy / d) * f
    }
    for (const n of nodes) {
      n.vx += (W / 2 - n.x) * 0.004
      n.vy += (H / 2 - n.y) * 0.004
      n.x += n.vx * 0.85
      n.y += n.vy * 0.85
      n.vx *= 0.6
      n.vy *= 0.6
      n.x = Math.max(46, Math.min(W - 46, n.x))
      n.y = Math.max(30, Math.min(H - 34, n.y))
    }
  }
  pos.value = Object.fromEntries(nodes.map((n) => [n.id, { x: n.x, y: n.y }]))
  ready.value = true
})
</script>

<template>
  <div class="topic-graph">
    <svg v-if="ready" :viewBox="`0 0 ${W} ${H}`" role="img">
      <line
        v-for="l in graph.links"
        :key="l.source + l.target"
        :x1="pos[l.source]?.x"
        :y1="pos[l.source]?.y"
        :x2="pos[l.target]?.x"
        :y2="pos[l.target]?.y"
        class="edge"
        :class="{ active: linkActive(l), dim: hovered && !linkActive(l) }"
      />
      <a v-for="n in graph.nodes" :key="n.id" :href="href(n.id)">
        <g
          :transform="`translate(${pos[n.id]?.x}, ${pos[n.id]?.y})`"
          :opacity="dimmed(n.id) ? 0.25 : 1"
          @mouseenter="hovered = n.id"
          @mouseleave="hovered = ''"
        >
          <circle :r="radius(n)" :fill="color(n)" />
          <text :y="radius(n) + 14" text-anchor="middle" class="label">{{ n.id }}</text>
        </g>
      </a>
    </svg>
    <div v-else class="loading">…</div>
    <div class="legend">
      <span v-for="(d, i) in graph.domains" :key="d" class="legend-item">
        <i :style="{ background: PALETTE[i % PALETTE.length] }" />{{ d }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.topic-graph {
  margin: 1.5rem 0;
}
svg {
  width: 100%;
  height: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}
.edge {
  stroke: var(--vp-c-divider);
  stroke-width: 1.5;
  transition: opacity 0.15s;
}
.edge.active {
  stroke: var(--vp-c-text-2);
  stroke-width: 2;
}
.edge.dim {
  opacity: 0.15;
}
circle {
  cursor: pointer;
  stroke: var(--vp-c-bg);
  stroke-width: 2;
}
.label {
  font-size: 12px;
  fill: var(--vp-c-text-1);
  cursor: pointer;
}
.loading {
  padding: 4rem;
  text-align: center;
  color: var(--vp-c-text-3);
}
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.legend-item i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
</style>
