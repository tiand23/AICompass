---
name: update
description: 抓取上次运行以来 AI 生态的重要更新，按日生成 docs/today/YYYY-MM-DD.md，并同步创建或更新 docs/topics/ 下的 Topic 文档，最后 git commit。用户手动触发，支持隔多天补齐。
---

# /update —— 补齐 AI 生态更新

你的任务：把从上次运行到今天之间 AI 开发生态的重要更新整理进知识库。**语义是"补齐区间"，不是"生成今天"。**

## 第一步：确定起始日期

1. 查看 `docs/today/` 下所有 `YYYY-MM-DD.md` 文件，找到最新日期。
2. 起始日期 = 最新日期的**次日**；如果目录为空（首次运行），起始日期 = 今天。
3. 结束日期 = 今天。向用户报告本次覆盖的日期范围再继续。
4. 如果区间超过 14 天，提醒用户内容可能较多，但照常执行。

## 第二步：抓取数据源

用 WebFetch / WebSearch 抓取以下来源在区间内的更新。

**官方渠道（必须全部覆盖）：**

| 来源 | 入口 |
|---|---|
| OpenAI | https://openai.com/news/ |
| Anthropic Blog | https://www.anthropic.com/news |
| Claude 平台 Release Notes | https://docs.claude.com/en/release-notes/overview |
| Google AI | https://blog.google/technology/ai/ |
| Microsoft AI / Azure AI | https://azure.microsoft.com/en-us/blog/category/ai-machine-learning/ |
| LangChain | https://blog.langchain.com/ |
| LlamaIndex | https://www.llamaindex.ai/blog |

**社区聚合（尽力覆盖；单次运行时间紧张时可跳过并告知用户）：**

| 来源 | 入口 |
|---|---|
| GitHub Trending | https://github.com/trending?since=daily |
| HuggingFace Blog | https://huggingface.co/blog |

入口页面结构可能变化，打不开时用 WebSearch 搜"<来源名> announcements <月份 年份>"兜底，不要静默跳过官方渠道。

## 第三步：筛选

收录标准（满足其一）：

- 新模型 / 新 API / 新框架 / 新协议的发布或重大版本
- 对 Agent、RAG、Coding 工具、LLM 应用开发有实际影响的变更
- 值得建立或更新 Topic 的新概念

**丢弃**：融资新闻、人事变动、营销软文、与开发者无关的产品消息。

如果仓库根目录存在 `profile.md`，读取它并过滤与用户方向明显无关的内容。**只做过滤，不做打分**——任何情况下都不要输出推荐指数或"是否值得学习"的判断。

## 第四步：写 Daily

- 每个自然日一个文件：`docs/today/YYYY-MM-DD.md`，条目归到**事件实际发生的日期**。
- 当天没有值得记录的内容就**不生成文件**，不写空文件。
- 格式严格遵循同目录下的 `daily-template.md`。
- `关联 Topic` 使用标准 Markdown 链接 `[topic-name](/topics/topic-name)`，名称与 `docs/topics/` 下的文件名（去掉 .md）一致，kebab-case。（站点用 VitePress 构建，不支持 `[[双链]]` 语法。）
- 写完所有 Daily 后，把 `docs/index.md` 首页 hero 中"最新日报"按钮的 link 更新为最新一天的 `/today/YYYY-MM-DD`。

## 第五步：更新 Topic

对 Daily 中每个关联 Topic：

**不存在** → 按同目录 `topic-template.md` 创建 `docs/topics/<name>.md`，先用已有知识把简介 / 为什么重要 / 核心概念填充到位（不确定的内容可以用 WebSearch 补充），再写入 Timeline 条目。

**已存在** → 遵守维护规则：

1. **不直接追加**：先通读该文件，新内容已被覆盖则跳过，相似则合并进原文，只有真正的新信息才新增。
2. Timeline 按日期**倒序**，新条目在最上面。
3. **归档**：文件超过约 500 行时，Timeline 只保留最近 3 个月，更早的条目压缩成一段"历史演进摘要"放在 Timeline 小节之前。
4. 保持模板的小节结构，不要自创章节。

## 第六步：Commit & Push

```
git add docs/
git commit -m "update: YYYY-MM-DD ~ YYYY-MM-DD"
git push
```

（单日则只写一个日期。）commit 后直接 push 到远程；push 失败（如网络问题）不影响本次结果，告知用户稍后手动 push 即可。

## 最后：向用户汇报

简要说明：覆盖的日期范围、生成了哪几天的 Daily、新建 / 更新了哪些 Topic、跳过了哪些来源（如有）。
