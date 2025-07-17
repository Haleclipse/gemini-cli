---
layout: home

hero:
  name: Gemini CLI
  text: AI 驱动的命令行工具
  tagline: 连接您的工具，理解您的代码，加速您的工作流程
  actions:
    - theme: brand
      text: 中文文档
      link: /zh/guide
    - theme: alt
      text: English Documentation
      link: /guide

features:
  - icon: 🚀
    title: 快速强大
    details: 查询和编辑超出 Gemini 1M token 上下文窗口的大型代码库
  - icon: 🎨
    title: 多模态
    details: 使用 Gemini 的多模态能力从 PDF 或草图生成新应用
  - icon: 🔧
    title: 可扩展
    details: 使用工具和 MCP 服务器连接新功能
  - icon: 🔍
    title: Google 搜索
    details: 使用内置的 Google 搜索工具增强您的查询
---

## 🔄 上游最新更新

::: info 版本状态
- **当前版本**: v0.1.12
- **分支状态**: 已同步至最新 ✅
- **文档**: 完全同步，支持中英双语
:::

### 最近同步 (2025-07-17)

从上游合并了 **66 个新提交**，带来重大架构重构和功能更新：

#### 🚀 重大功能更新
- 🔧 **斜杠命令重构**: 大规模迁移12个斜杠命令到新架构 (/quit, /bug, /editor, /tools, /docs, /mcp, /compress, /extensions, /stats, /about, /privacy, /auth)
- 💻 **IDE 集成**: 引入 VS Code 伴侣扩展，添加 /ide status 和 /ide install 命令
- 📋 **官方路线图**: 发布项目路线图和贡献指南
- 🔄 **循环检测**: 引入智能循环检测服务防止无限循环

#### ⚙️ 新功能和配置
- 🎛️ **hideBanner 设置**: 添加启动横幅禁用选项
- 📊 **maxSessionTurns**: 支持配置会话最大轮数
- 🔐 **GEMINI_DEFAULT_AUTH_TYPE**: 默认认证类型支持
- 🚀 **性能优化**: 后台模型可用性检查，加速启动时间

#### 🔧 工具和改进
- 📦 **Google/genai v1.9.0**: 更新到最新版本并支持 parametersJsonSchema
- 🎯 **工具摘要**: 集中化 shell 工具摘要和字母排序
- ⌨️ **快捷键**: CTRL+C 清除输入缓冲区功能
- 🔧 **MCP 增强**: 支持服务器白名单/黑名单配置

---

## 🌟 分支增强功能

此分支通过以下方式提供附加价值：

- **完整的中文翻译** 覆盖所有文档
- **双语README** 支持便捷的语言切换
- **实时同步** 上游更改
- **详细的更新日志** 追踪所有上游修改

---

## 📋 完整的上游更新日志

<!--@include: ./changelog-content.md-->

