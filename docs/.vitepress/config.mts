import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function listMd(dir: string, { newestFirst = false, limit = 0 } = {}) {
  const full = path.join(docsDir, dir)
  if (!fs.existsSync(full)) return []
  let files = fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .sort()
  if (newestFirst) files.reverse()
  if (limit > 0) files = files.slice(0, limit)
  return files.map((f) => {
    const name = f.replace(/\.md$/, '')
    return { text: name, link: `/${dir}/${name}` }
  })
}

// 构建时计算最新一篇日报，nav 上的 Today 永远指向它
const latestDaily = listMd('today', { newestFirst: true, limit: 1 })[0]?.link ?? '/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI Compass',
  description: 'Living AI Developer Handbook —— 持续演进的 AI 开发知识库',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Today', link: latestDaily },
    ],
    // Today 侧边栏只列最近 30 天，更早的日报仍会构建、可搜索、可直链
    sidebar: [
      { text: 'Today', collapsed: false, items: listMd('today', { newestFirst: true, limit: 30 }) },
      { text: 'Topics', collapsed: false, items: listMd('topics') },
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/tiand23/AICompass' }],
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最后更新',
  },
})
