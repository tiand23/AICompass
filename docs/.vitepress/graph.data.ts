import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// 构建时扫描三个语言的 map.md（领域归属）与 topics/*.md（节点与互链），
// 生成图谱数据。内容变化时自动重建，无需人工维护。

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const LOCALES = [
  { key: 'root', prefix: '' },
  { key: 'en', prefix: 'en' },
  { key: 'ja', prefix: 'ja' },
]

const TOPIC_LINK = /\(\/(?:en\/|ja\/)?topics\/([a-z0-9-]+)\)/g

function buildLocale(prefix: string) {
  const base = prefix ? path.join(docsDir, prefix) : docsDir
  const mapFile = path.join(base, 'map.md')
  const topicsDir = path.join(base, 'topics')

  // map.md：H2 为领域；Topic 的"家"是它作为表格行（| [ 开头）出现的第一个领域
  const domains: string[] = []
  const homeDomain: Record<string, number> = {}
  if (fs.existsSync(mapFile)) {
    let current = -1
    for (const line of fs.readFileSync(mapFile, 'utf8').split('\n')) {
      const h2 = line.match(/^## (.+)$/)
      if (h2) {
        domains.push(h2[1].replace(/^\d+\.\s*/, '').trim())
        current = domains.length - 1
        continue
      }
      if (current >= 0 && line.startsWith('| [')) {
        const m = /\(\/(?:en\/|ja\/)?topics\/([a-z0-9-]+)\)/.exec(line)
        if (m && homeDomain[m[1]] === undefined) homeDomain[m[1]] = current
      }
    }
  }

  const nodes: { id: string; domain: number; activity: number; latest: string }[] = []
  const links: { source: string; target: string }[] = []
  const seen = new Set<string>()
  if (fs.existsSync(topicsDir)) {
    for (const f of fs.readdirSync(topicsDir).filter((f) => f.endsWith('.md'))) {
      const slug = f.replace(/\.md$/, '')
      const src = fs.readFileSync(path.join(topicsDir, f), 'utf8')
      const dates = [...src.matchAll(/^### \[?(\d{4}-\d{2}-\d{2})/gm)].map((m) => m[1]).sort()
      nodes.push({
        id: slug,
        domain: homeDomain[slug] ?? domains.length,
        activity: dates.length,
        latest: dates[dates.length - 1] ?? '',
      })
      for (const lm of src.matchAll(TOPIC_LINK)) {
        const target = lm[1]
        if (target === slug) continue
        const k = [slug, target].sort().join('|')
        if (!seen.has(k)) {
          seen.add(k)
          links.push({ source: slug, target })
        }
      }
    }
  }
  const ids = new Set(nodes.map((n) => n.id))
  return {
    domains,
    nodes,
    links: links.filter((l) => ids.has(l.source) && ids.has(l.target)),
  }
}

export default {
  watch: ['../map.md', '../topics/*.md', '../en/map.md', '../en/topics/*.md', '../ja/map.md', '../ja/topics/*.md'],
  load() {
    return Object.fromEntries(LOCALES.map(({ key, prefix }) => [key, buildLocale(prefix)]))
  },
}
