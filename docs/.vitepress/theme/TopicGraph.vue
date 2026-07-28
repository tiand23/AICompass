<script setup lang="ts">
import { ref, computed } from 'vue'

interface GNode { id: string; domain: number; activity: number; latest: string }
interface GLink { source: string; target: string }

const props = defineProps<{
  graph: { domains: string[]; nodes: GNode[]; links: GLink[] }
  prefix?: string
  rootLabel: string
}>()

const W = 860
const H = 640
const CX = W / 2
const CY = H / 2
const R_DOMAIN = 150
const R_TOPIC = 265
const PALETTE = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4']

const hovered = ref('')

// 放射状层级布局：领域按 Topic 数量分配角度扇区，Topic 均匀分布在所属扇区内。
// 完全确定性——同样的内容永远得到同样的图。
const layout = computed(() => {
  const byDomain: GNode[][] = props.graph.domains.map(() => [])
  for (const n of props.graph.nodes) {
    if (byDomain[n.domain]) byDomain[n.domain].push(n)
  }
  byDomain.forEach((list) => list.sort((a, b) => a.id.localeCompare(b.id)))

  const weights = byDomain.map((list) => Math.max(list.length, 0.7))
  const total = weights.reduce((a, b) => a + b, 0)

  const domains: { name: string; i: number; x: number; y: number; empty: boolean }[] = []
  const topics: (GNode & { x: number; y: number })[] = []
  let angle = -Math.PI / 2
  byDomain.forEach((list, i) => {
    const span = (weights[i] / total) * 2 * Math.PI
    const mid = angle + span / 2
    domains.push({
      name: props.graph.domains[i],
      i,
      x: CX + Math.cos(mid) * R_DOMAIN,
      y: CY + Math.sin(mid) * R_DOMAIN,
      empty: list.length === 0,
    })
    list.forEach((n, j) => {
      const t = list.length === 1 ? mid : angle + span * 0.18 + (span * 0.64 * j) / (list.length - 1)
      topics.push({ ...n, x: CX + Math.cos(t) * R_TOPIC, y: CY + Math.sin(t) * R_TOPIC })
    })
    angle += span
  })
  const pos = Object.fromEntries(topics.map((n) => [n.id, n]))
  return { domains, topics, pos }
})

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
  return 9 + Math.min(n.activity * 2.5, 12)
}
function color(i: number) {
  return PALETTE[i % PALETTE.length]
}
function href(id: string) {
  return `${props.prefix ? '/' + props.prefix : ''}/topics/${id}`
}
function mapHref() {
  return `${props.prefix ? '/' + props.prefix : ''}/map`
}
function dimmed(id: string) {
  return hovered.value && !neighbors.value[hovered.value]?.has(id)
}
function crossActive(l: GLink) {
  return hovered.value && (l.source === hovered.value || l.target === hovered.value)
}
// Topic 间引用画成绕过中心的弧线
function curve(l: GLink) {
  const s = layout.value.pos[l.source]
  const t = layout.value.pos[l.target]
  if (!s || !t) return ''
  const mx = (s.x + t.x) / 2
  const my = (s.y + t.y) / 2
  const dx = mx - CX
  const dy = my - CY
  const d = Math.sqrt(dx * dx + dy * dy) || 1
  const push = 70
  return `M ${s.x} ${s.y} Q ${mx + (dx / d) * push} ${my + (dy / d) * push} ${t.x} ${t.y}`
}
function labelAnchor(x: number) {
  return x < CX - 30 ? 'end' : x > CX + 30 ? 'start' : 'middle'
}
function labelDx(x: number) {
  return x < CX - 30 ? -14 : x > CX + 30 ? 14 : 0
}
function labelDy(x: number, y: number) {
  if (labelAnchor(x) !== 'middle') return 4
  return y < CY ? -16 : 24
}
</script>

<template>
  <div class="topic-graph">
    <svg :viewBox="`0 0 ${W} ${H}`" role="img">
      <!-- 结构线：中心→领域→Topic -->
      <line v-for="d in layout.domains" :key="'rd' + d.i" :x1="CX" :y1="CY" :x2="d.x" :y2="d.y" class="spoke" />
      <line
        v-for="n in layout.topics"
        :key="'dt' + n.id"
        :x1="layout.domains[n.domain]?.x"
        :y1="layout.domains[n.domain]?.y"
        :x2="n.x"
        :y2="n.y"
        class="branch"
        :style="{ stroke: color(n.domain) }"
        :opacity="dimmed(n.id) ? 0.15 : 0.55"
      />
      <!-- 引用关系：虚线弧 -->
      <path
        v-for="l in graph.links"
        :key="l.source + l.target"
        :d="curve(l)"
        class="xref"
        :class="{ active: crossActive(l), dim: hovered && !crossActive(l) }"
      />
      <!-- 中心 -->
      <g class="root">
        <circle :cx="CX" :cy="CY" r="34" />
        <text :x="CX" :y="CY + 4" text-anchor="middle">{{ rootLabel }}</text>
      </g>
      <!-- 领域 -->
      <a v-for="d in layout.domains" :key="'d' + d.i" :href="mapHref()">
        <g :opacity="d.empty ? 0.45 : 1">
          <circle :cx="d.x" :cy="d.y" r="7" :fill="d.empty ? 'none' : color(d.i)" :stroke="color(d.i)" stroke-width="2" />
          <text
            :x="d.x + labelDx(d.x)"
            :y="d.y + labelDy(d.x, d.y)"
            :text-anchor="labelAnchor(d.x)"
            class="domain-label"
          >
            {{ d.name }}
          </text>
        </g>
      </a>
      <!-- Topic -->
      <a v-for="n in layout.topics" :key="n.id" :href="href(n.id)">
        <g :opacity="dimmed(n.id) ? 0.22 : 1" @mouseenter="hovered = n.id" @mouseleave="hovered = ''">
          <circle :cx="n.x" :cy="n.y" :r="radius(n)" :fill="color(n.domain)" />
          <text
            :x="n.x + labelDx(n.x)"
            :y="n.y + labelDy(n.x, n.y)"
            :text-anchor="labelAnchor(n.x)"
            class="topic-label"
          >
            {{ n.id }}
          </text>
        </g>
      </a>
    </svg>
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
.spoke {
  stroke: var(--vp-c-divider);
  stroke-width: 1;
}
.branch {
  stroke-width: 1.5;
  transition: opacity 0.15s;
}
.xref {
  fill: none;
  stroke: var(--vp-c-text-3);
  stroke-width: 1.2;
  stroke-dasharray: 5 5;
  opacity: 0.5;
  transition: opacity 0.15s, stroke 0.15s;
}
.xref.active {
  stroke: var(--vp-c-text-1);
  stroke-width: 2;
  stroke-dasharray: none;
  opacity: 1;
}
.xref.dim {
  opacity: 0.08;
}
.root circle {
  fill: var(--vp-c-bg);
  stroke: var(--vp-c-text-2);
  stroke-width: 1.5;
}
.root text {
  font-size: 12px;
  font-weight: 600;
  fill: var(--vp-c-text-1);
}
.domain-label {
  font-size: 12.5px;
  font-weight: 600;
  fill: var(--vp-c-text-1);
}
.topic-label {
  font-size: 12px;
  fill: var(--vp-c-text-2);
}
circle {
  cursor: pointer;
}
text {
  cursor: pointer;
}
</style>
