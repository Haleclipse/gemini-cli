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
- **当前版本**: v0.1.9
- **分支状态**: 已同步至最新 ✅
- **文档**: 完全同步，支持中英双语
:::

### 最近同步 (2025-07-04)

从上游合并了 **11 个新提交**，包含发布自动化和重要修复：

#### 🎉 重大功能更新
- 🚀 **发布自动化**: 添加 GitHub Actions 和标签发布流程 (#2852)
- 🔧 **JSDoc改进**: 为核心工具方法添加和改进 JSDoc 注释 (#3128)
- 🧮 **Reducer重构**: 重构文本缓冲区使用 reducer 模式 (#2652)
- 📝 **文档新增**: 添加 NPM 工作区和发布指南

#### 🐛 技术修复
- 🎨 **主题修复**: 修复 ANSI 主题中的蓝色显示 (#3100)
- 🆔 **用户ID修复**: 修复 Google 用户 ID 传递给 Clearcut (#3147)
- ⚙️ **配置修复**: 修复客户端在 flashFallbackHandler 中获取模型配置 (#2118)
- 🎯 **快捷键**: 显示 Ctrl+S 快捷键展开调试控制台 (#2491)
- 🔧 **代码清理**: 移除不必要的空白字符和修复拼写错误

---

## 🌟 分支增强功能

此分支通过以下方式提供附加价值：

- **完整的中文翻译** 覆盖所有文档
- **双语README** 支持便捷的语言切换
- **实时同步** 上游更改
- **详细的更新日志** 追踪所有上游修改

---

## 📋 完整的上游更新日志

<!--@include: ./zh/changelog-content.md-->

