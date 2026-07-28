<script setup lang="ts">
import { ref, computed } from 'vue'

interface GNode {
  id: string
  domain: number
  activity: number
  latest: string
  title: string
  intro: string
  timeline: { date: string; text: string }[]
}
interface GLink { source: string; target: string }

const props = defineProps<{
  graph: { domains: string[]; nodes: GNode[]; links: GLink[] }
  prefix?: string
  rootLabel: string
  moreLabel: string
  emptyLabel: string
}>()

const W = 880
const X_ROOT = 90
const X_DOMAIN = 320
const X_TOPIC = 600
const ROW = 46
const GAP = 20
const PALETTE = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4']

const hovered = ref('')
const selected = ref<GNode | null>(null)

// 从左到右的树状布局：根 → 领域列 → Topic 列（按领域分块纵向排列）。
// 确定性布局，内容增长时向下扩展。
const layout = computed(() => {
  const byDomain: GNode[][] = props.graph.domains.map(() => [])
  for (const n of props.graph.nodes) {
    if (byDomain[n.domain]) byDomain[n.domain].push(n)
  }
  byDomain.forEach((list) => list.sort((a, b) => a.id.localeCompare(b.id)))

  const domains: { name: string; i: number; y: number; empty: boolean }[] = []
  const topics: (GNode & { y: number })[] = []
  let y = 30
  byDomain.forEach((list, i) => {
    const blockH = Math.max(list.length, 1) * ROW
    domains.push({ name: props.graph.domains[i], i, y: y + blockH / 2, empty: list.length === 0 })
    list.forEach((n, j) => topics.push({ ...n, y: y + ROW / 2 + j * ROW }))
    y += blockH + GAP
  })
  const H = y + 10
  const pos = Object.fromEntries(topics.map((n) => [n.id, n]))
  return { domains, topics, pos, H, rootY: H / 2 }
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
  return 7 + Math.min(n.activity * 2, 9)
}
function color(i: number) {
  return PALETTE[i % PALETTE.length]
}
function pageHref(id: string) {
  return `${props.prefix ? '/' + props.prefix : ''}/topics/${id}`
}
function dimmed(id: string) {
  return hovered.value && !neighbors.value[hovered.value]?.has(id)
}
function crossActive(l: GLink) {
  return hovered.value && (l.source === hovered.value || l.target === hovered.value)
}
// 根→领域、领域→Topic：水平三次贝塞尔
function hCurve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`
}
// Topic 间引用：从 Topic 列向右侧弯出的虚线弧
function xrefCurve(l: GLink) {
  const s = layout.value.pos[l.source]
  const t = layout.value.pos[l.target]
  if (!s || !t) return ''
  const bulge = 90 + Math.abs(s.y - t.y) * 0.25
  return `M ${X_TOPIC} ${s.y} C ${X_TOPIC + bulge} ${s.y}, ${X_TOPIC + bulge} ${t.y}, ${X_TOPIC} ${t.y}`
}
</script>

<template>
  <div class="topic-graph">
    <svg :viewBox="`0 0 ${W} ${layout.H}`" role="img">
      <!-- 根→领域 -->
      <path
        v-for="d in layout.domains"
        :key="'rd' + d.i"
        :d="hCurve(X_ROOT + 8, layout.rootY, X_DOMAIN - 10, d.y)"
        class="spoke"
        :opacity="d.empty ? 0.35 : 0.8"
      />
      <!-- 领域→Topic -->
      <path
        v-for="n in layout.topics"
        :key="'dt' + n.id"
        :d="hCurve(X_DOMAIN + 8, layout.domains[n.domain]?.y ?? 0, X_TOPIC - radius(n) - 2, n.y)"
        class="branch"
        :style="{ stroke: color(n.domain) }"
        :opacity="dimmed(n.id) ? 0.12 : 0.55"
      />
      <!-- Topic 间引用 -->
      <path
        v-for="l in graph.links"
        :key="l.source + l.target"
        :d="xrefCurve(l)"
        class="xref"
        :class="{ active: crossActive(l), dim: hovered && !crossActive(l) }"
      />
      <!-- 根节点 -->
      <g class="root">
        <circle :cx="X_ROOT" :cy="layout.rootY" r="8" />
        <text :x="X_ROOT" :y="layout.rootY - 16" text-anchor="middle">{{ rootLabel }}</text>
      </g>
      <!-- 领域节点 -->
      <g v-for="d in layout.domains" :key="'d' + d.i" :opacity="d.empty ? 0.5 : 1">
        <circle
          :cx="X_DOMAIN"
          :cy="d.y"
          r="6"
          :fill="d.empty ? 'none' : color(d.i)"
          :stroke="color(d.i)"
          stroke-width="2"
        />
        <text :x="X_DOMAIN - 14" :y="d.y + 4" text-anchor="end" class="domain-label">
          {{ d.name }}<tspan v-if="d.empty" class="empty-hint">（{{ emptyLabel }}）</tspan>
        </text>
      </g>
      <!-- Topic 节点：点击弹浮层 -->
      <g
        v-for="n in layout.topics"
        :key="n.id"
        class="topic"
        :opacity="dimmed(n.id) ? 0.2 : 1"
        @mouseenter="hovered = n.id"
        @mouseleave="hovered = ''"
        @click="selected = n"
      >
        <circle :cx="X_TOPIC" :cy="n.y" :r="radius(n)" :fill="color(n.domain)" />
        <text :x="X_TOPIC + radius(n) + 8" :y="n.y + 4" class="topic-label">{{ n.id }}</text>
      </g>
    </svg>

    <!-- 浮层：不跳转，就地查看 -->
    <Teleport to="body">
      <div v-if="selected" class="tg-overlay" @click.self="selected = null" @keydown.esc="selected = null">
        <div class="tg-card">
          <button class="tg-close" @click="selected = null">×</button>
          <p class="tg-domain" :style="{ color: color(selected.domain) }">
            ● {{ graph.domains[selected.domain] }}
          </p>
          <h3>{{ selected.title }}</h3>
          <p class="tg-intro">{{ selected.intro }}</p>
          <ul v-if="selected.timeline.length" class="tg-timeline">
            <li v-for="t in selected.timeline" :key="t.date">
              <strong>{{ t.date }}</strong> — {{ t.text }}
            </li>
          </ul>
          <a class="tg-more" :href="pageHref(selected.id)">{{ moreLabel }} →</a>
        </div>
      </div>
    </Teleport>
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
  fill: none;
  stroke: var(--vp-c-divider);
  stroke-width: 1.2;
}
.branch {
  fill: none;
  stroke-width: 1.5;
  transition: opacity 0.15s;
}
.xref {
  fill: none;
  stroke: var(--vp-c-text-3);
  stroke-width: 1.2;
  stroke-dasharray: 5 5;
  opacity: 0.45;
  transition: opacity 0.15s, stroke 0.15s;
}
.xref.active {
  stroke: var(--vp-c-text-1);
  stroke-width: 2;
  stroke-dasharray: none;
  opacity: 1;
}
.xref.dim {
  opacity: 0.06;
}
.root circle {
  fill: var(--vp-c-bg);
  stroke: var(--vp-c-text-2);
  stroke-width: 2;
}
.root text {
  font-size: 13px;
  font-weight: 600;
  fill: var(--vp-c-text-1);
}
.domain-label {
  font-size: 12.5px;
  font-weight: 600;
  fill: var(--vp-c-text-1);
}
.empty-hint {
  font-weight: 400;
  fill: var(--vp-c-text-3);
  font-size: 11px;
}
.topic {
  cursor: pointer;
}
.topic circle {
  stroke: var(--vp-c-bg);
  stroke-width: 1.5;
}
.topic-label {
  font-size: 12.5px;
  fill: var(--vp-c-text-1);
}
</style>

<style>
/* 浮层通过 Teleport 挂到 body，样式不能 scoped */
.tg-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 1rem;
}
.tg-card {
  position: relative;
  max-width: 520px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}
.tg-close {
  position: absolute;
  top: 0.6rem;
  right: 0.9rem;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--vp-c-text-3);
  background: none;
  border: none;
  cursor: pointer;
}
.tg-close:hover {
  color: var(--vp-c-text-1);
}
.tg-domain {
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
}
.tg-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1.25rem;
}
.tg-intro {
  margin: 0 0 0.9rem;
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--vp-c-text-1);
}
.tg-timeline {
  margin: 0 0 1rem;
  padding: 0.6rem 0.9rem;
  list-style: none;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
.tg-timeline li + li {
  margin-top: 0.5rem;
}
.tg-more {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.tg-more:hover {
  text-decoration: underline;
}
</style>
