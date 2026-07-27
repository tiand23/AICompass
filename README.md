# AI Compass

> 给自己用的 AI 开发知识库 —— Knowledge > News，长期积累 > 每日资讯。

每天（或想起来时）在 Claude Code 里手动跑一次 `/update`，它会补齐从上次运行以来 AI 生态的重要更新，写入 Daily，并同步维护 Topic 知识库。

## 用法

```
/update          # 抓取上次运行以来的更新，生成 Daily，更新 Topic
```

隔几天跑一次也没关系——`/update` 会自动从 `docs/today/` 里最新一天开始补齐，不会漏内容。

想回顾时直接对 Claude Code 说"总结一下最近两周的 daily"，不需要专门的 weekly 功能。

## 目录结构

```
AICompass/
├── docs/
│   ├── today/          # YYYY-MM-DD.md，每日更新
│   └── topics/         # 每个知识点一个文件，长期维护
├── profile.md          # （可选）我的方向和关注点，用于过滤无关信息
├── .claude/skills/     # /update 等 skill
└── README.md
```

## 设计文档

- [V1 实施计划与说明](AI_Compass_V1_实施计划与说明.md) —— 当前执行依据
- [项目设计文档（PRD + Architecture）](AI_Compass_项目设计文档_PRD_Architecture.md) —— 长期愿景参考
