<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface GNode {
  id: string
  domain: number
  activity: number
  latest: string
  dates: string[]
  title: string
  html: string
}
interface GLink { source: string; target: string }

const props = defineProps<{
  graph: { domains: string[]; nodes: GNode[]; links: GLink[] }
  prefix?: string
  rootLabel: string
  emptyLabel: string
}>()

const X_ROOT = 90
const X_DOMAIN = 320
const X_TOPIC = 600
// 活动轨道：固定 14 天滑动窗口，宽度恒定不随时间增长
const DAYS = 14
const DAY_W = 14
const X_STRIP = 790
const W = X_STRIP + DAYS * DAY_W + 16
const ROW = 46
const GAP = 20
const PALETTE = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4']

const hovered = ref('')
const selected = ref<GNode | null>(null)

// 最近 14 天的日期轴。在客户端挂载后计算，避免 SSR 与浏览器日期不一致
const days = ref<string[]>([])
function fmt(d: Date) {
  const p = (x: number) => String(x).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}
const today = computed(() => days.value[days.value.length - 1] ?? '')
function dayX(i: number) {
  return X_STRIP + i * DAY_W + DAY_W / 2
}
function isFresh(n: GNode) {
  return today.value !== '' && n.dates.includes(today.value)
}

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

const byId = computed(() => Object.fromEntries(props.graph.nodes.map((n) => [n.id, n])))

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
function dimmed(id: string) {
  return hovered.value && !neighbors.value[hovered.value]?.has(id)
}
function crossActive(l: GLink) {
  return hovered.value && (l.source === hovered.value || l.target === hovered.value)
}
function hCurve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`
}
function xrefCurve(l: GLink) {
  const s = layout.value.pos[l.source]
  const t = layout.value.pos[l.target]
  if (!s || !t) return ''
  const bulge = 90 + Math.abs(s.y - t.y) * 0.25
  return `M ${X_TOPIC} ${s.y} C ${X_TOPIC + bulge} ${s.y}, ${X_TOPIC + bulge} ${t.y}, ${X_TOPIC} ${t.y}`
}

// 抽屉内点到其他 Topic 的链接 → 就地切换，不离开图谱页
function onDrawerClick(e: MouseEvent) {
  const a = (e.target as HTMLElement).closest('a')
  if (!a) return
  const m = a.getAttribute('href')?.match(/\/topics\/([a-z0-9-]+)\/?$/)
  if (m && byId.value[m[1]]) {
    e.preventDefault()
    selected.value = byId.value[m[1]]
  }
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') selected.value = null
}
onMounted(() => {
  window.addEventListener('keydown', onKey)
  const list: string[] = []
  for (let i = DAYS - 1; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    list.push(fmt(d))
  }
  days.value = list
})
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="topic-graph">
    <svg :viewBox="`0 0 ${W} ${layout.H}`" role="img">
      <path
        v-for="d in layout.domains"
        :key="'rd' + d.i"
        :d="hCurve(X_ROOT + 8, layout.rootY, X_DOMAIN - 10, d.y)"
        class="spoke"
        :opacity="d.empty ? 0.35 : 0.8"
      />
      <path
        v-for="n in layout.topics"
        :key="'dt' + n.id"
        :d="hCurve(X_DOMAIN + 8, layout.domains[n.domain]?.y ?? 0, X_TOPIC - radius(n) - 2, n.y)"
        class="branch"
        :style="{ stroke: color(n.domain) }"
        :opacity="dimmed(n.id) ? 0.12 : 0.55"
      />
      <path
        v-for="l in graph.links"
        :key="l.source + l.target"
        :d="xrefCurve(l)"
        class="xref"
        :class="{ active: crossActive(l), dim: hovered && !crossActive(l) }"
      />
      <g class="root">
        <circle :cx="X_ROOT" :cy="layout.rootY" r="8" />
        <text :x="X_ROOT" :y="layout.rootY - 16" text-anchor="middle">{{ rootLabel }}</text>
      </g>
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
      <g
        v-for="n in layout.topics"
        :key="n.id"
        class="topic"
        :class="{ current: selected?.id === n.id }"
        :opacity="dimmed(n.id) ? 0.2 : 1"
        @mouseenter="hovered = n.id"
        @mouseleave="hovered = ''"
        @click="selected = n"
      >
        <circle v-if="isFresh(n)" :cx="X_TOPIC" :cy="n.y" :r="radius(n) + 5" class="halo" :stroke="color(n.domain)" />
        <circle :cx="X_TOPIC" :cy="n.y" :r="radius(n)" :fill="color(n.domain)" />
        <text :x="X_TOPIC + radius(n) + 8" :y="n.y + 4" class="topic-label">{{ n.id }}</text>
      </g>
      <!-- 活动轨道：最近 14 天，固定宽度滑动窗口 -->
      <g v-if="days.length" class="strip">
        <rect
          :x="dayX(DAYS - 1) - DAY_W / 2"
          y="22"
          :width="DAY_W"
          :height="layout.H - 32"
          class="today-col"
        />
        <text :x="dayX(0)" y="14" text-anchor="middle" class="axis">{{ days[0].slice(5) }}</text>
        <text :x="dayX(7)" y="14" text-anchor="middle" class="axis">{{ days[7].slice(5) }}</text>
        <text :x="dayX(DAYS - 1)" y="14" text-anchor="middle" class="axis today-label">
          {{ days[DAYS - 1].slice(5) }}
        </text>
        <g v-for="n in layout.topics" :key="'st' + n.id" :opacity="dimmed(n.id) ? 0.15 : 1">
          <line :x1="X_STRIP" :y1="n.y" :x2="X_STRIP + DAYS * DAY_W" :y2="n.y" class="track" />
          <circle
            v-for="(d, i) in days"
            v-show="n.dates.includes(d)"
            :key="d"
            :cx="dayX(i)"
            :cy="n.y"
            r="4.5"
            :fill="color(n.domain)"
          >
            <title>{{ d }}</title>
          </circle>
        </g>
      </g>
    </svg>

    <!-- 右侧抽屉：显示完整 Topic 内容 -->
    <Teleport to="body">
      <Transition name="tg">
        <div v-if="selected" class="tg-overlay" @click.self="selected = null">
          <aside class="tg-drawer">
            <header>
              <p class="tg-domain" :style="{ color: color(selected.domain) }">
                ● {{ graph.domains[selected.domain] }}
              </p>
              <h2>{{ selected.title }}</h2>
              <button class="tg-close" @click="selected = null">×</button>
            </header>
            <div class="tg-content" v-html="selected.html" @click="onDrawerClick" />
          </aside>
        </div>
      </Transition>
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
.topic.current circle {
  stroke: var(--vp-c-text-1);
  stroke-width: 2.5;
}
.topic-label {
  font-size: 12.5px;
  fill: var(--vp-c-text-1);
}
.halo {
  fill: none;
  stroke-width: 2;
  animation: tg-pulse 2s ease-in-out infinite;
}
@keyframes tg-pulse {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 0.3; }
}
.track {
  stroke: var(--vp-c-divider);
  stroke-width: 1;
  opacity: 0.6;
}
.today-col {
  fill: var(--vp-c-brand-soft, rgba(100, 108, 255, 0.14));
}
.axis {
  font-size: 10px;
  fill: var(--vp-c-text-3);
}
.today-label {
  fill: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>

<style>
/* 抽屉通过 Teleport 挂到 body，样式不能 scoped */
.tg-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
}
.tg-drawer {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: min(560px, 94vw);
  background: var(--vp-c-bg);
  border-left: 1px solid var(--vp-c-divider);
  box-shadow: -12px 0 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}
.tg-drawer header {
  position: relative;
  padding: 1.25rem 3rem 0.9rem 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.tg-domain {
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0 0 0.2rem;
}
.tg-drawer h2 {
  margin: 0;
  font-size: 1.35rem;
  border: none;
  padding: 0;
}
.tg-close {
  position: absolute;
  top: 0.9rem;
  right: 1rem;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--vp-c-text-3);
  background: none;
  border: none;
  cursor: pointer;
}
.tg-close:hover {
  color: var(--vp-c-text-1);
}
.tg-content {
  overflow-y: auto;
  padding: 1rem 1.5rem 2rem;
  font-size: 0.92rem;
  line-height: 1.7;
}
.tg-content h2 {
  font-size: 1.05rem;
  margin: 1.4rem 0 0.6rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--vp-c-divider);
}
.tg-content h2:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}
.tg-content h3 {
  font-size: 0.95rem;
  margin: 1rem 0 0.4rem;
  color: var(--vp-c-text-1);
}
.tg-content ul {
  padding-left: 1.3rem;
  margin: 0.5rem 0;
}
.tg-content li {
  margin: 0.3rem 0;
}
.tg-content a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.tg-content a:hover {
  text-decoration: underline;
}
.tg-content p {
  margin: 0.5rem 0;
}
/* 滑入动画 */
.tg-enter-active,
.tg-leave-active {
  transition: opacity 0.2s;
}
.tg-enter-active .tg-drawer,
.tg-leave-active .tg-drawer {
  transition: transform 0.25s ease;
}
.tg-enter-from,
.tg-leave-to {
  opacity: 0;
}
.tg-enter-from .tg-drawer,
.tg-leave-to .tg-drawer {
  transform: translateX(100%);
}
</style>
