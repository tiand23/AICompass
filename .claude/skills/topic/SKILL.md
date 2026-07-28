---
name: topic
description: 手动创建或深化一个 Topic（如 /topic slm）。不依赖新闻驱动——AI 主动调研该主题的背景、现状与最佳实践后建档，并挂到知识地图对应格子，同步英日译文。
---

# /topic <名称> —— 手动建档 / 深化主题

用户给出一个主题名（中文或英文均可）。你的任务：为它建立或深化 `docs/topics/<kebab-name>.md`。

## 流程

1. **定名**：转成 kebab-case 英文文件名（如 "SLM" → `slm`，"知识蒸馏" → `knowledge-distillation`）。先检查 `docs/topics/` 是否已有同义 Topic（避免重复建档，宁可深化已有的）。
2. **调研**：用 WebSearch / WebFetch 调研该主题——是什么、为什么重要（为什么流行、解决什么问题）、核心概念、代表技术/玩家、最佳实践、值得读的资料。以事实为准，不确定的内容不写。
3. **建档**：按 `../update/topic-template.md` 写入 `docs/topics/<name>.md`。Timeline 部分：调研中发现的重大节点按日期倒序写入（日期标题链接回日报仅当该日日报存在，否则用纯文本日期）。
4. **挂地图**：把 Topic 放进 `docs/map.md` 对应生态位格子（骨架见 `../update/SKILL.md` 第五步半；只住一个格子）。如果填的是空格子，把"待积累"段落换成表格。
5. **翻译**：整篇翻译成英文（`docs/en/topics/`）和日文（`docs/ja/topics/`），en/ja 的 map.md 同步更新（字段名与链接前缀规则同 `/update`）。
6. **提交**：`git add docs/ && git commit -m "topic: <name>" && git push`。
7. **汇报**：建了什么、放进哪个格子、要点三句话以内。

## 约束

- 不输出推荐指数或"是否值得学习"——判断留给用户。
- 已存在的 Topic 走"深化"：补充缺薄的小节、修正过时内容，遵守 `/update` 第五步的维护规则（不直接追加、Timeline 倒序、500 行归档）。
