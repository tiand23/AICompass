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

// 每个语言一套 nav + sidebar，构建时扫描各自目录生成；
// Today 侧边栏只列最近 30 天，更早的日报仍会构建、可搜索、可直链
function localeThemeConfig(prefix: string, t: { home: string; map: string }) {
  const todayDir = prefix ? `${prefix}/today` : 'today'
  const topicsDir = prefix ? `${prefix}/topics` : 'topics'
  const home = prefix ? `/${prefix}/` : '/'
  const latestDaily = listMd(todayDir, { newestFirst: true, limit: 1 })[0]?.link ?? home
  return {
    nav: [
      { text: t.home, link: home },
      { text: t.map, link: prefix ? `/${prefix}/map` : '/map' },
      { text: 'Today', link: latestDaily },
    ],
    sidebar: [
      { text: 'Today', collapsed: false, items: listMd(todayDir, { newestFirst: true, limit: 30 }) },
      { text: 'Topics', collapsed: false, items: listMd(topicsDir) },
    ],
  }
}

export default defineConfig({
  title: 'AI Compass',
  description: 'Living AI Developer Handbook',
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'Living AI Developer Handbook —— 持续演进的 AI 开发知识库',
      themeConfig: {
        ...localeThemeConfig('', { home: '首页', map: '知识地图' }),
        outline: { label: '本页目录' },
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdatedText: '最后更新',
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: 'Living AI Developer Handbook — a continuously evolving knowledge base for AI developers',
      themeConfig: {
        ...localeThemeConfig('en', { home: 'Home', map: 'Knowledge Map' }),
        outline: { label: 'On this page' },
        lastUpdatedText: 'Last updated',
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      description: 'Living AI Developer Handbook —— 進化し続ける AI 開発ナレッジベース',
      themeConfig: {
        ...localeThemeConfig('ja', { home: 'ホーム', map: 'ナレッジマップ' }),
        outline: { label: '目次' },
        docFooter: { prev: '前へ', next: '次へ' },
        lastUpdatedText: '最終更新',
      },
    },
  },
  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/tiand23/AICompass' }],
  },
})
