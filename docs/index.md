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
- **当前版本**: v0.1.7
- **分支状态**: 已同步至最新 ✅
- **文档**: 完全同步，支持中英双语
:::

### 最近同步 (2025-06-28)

从上游合并了 **19 个新提交** (v0.1.5 → v0.1.7)：

#### 重大更新
- 🚀 **重大技术升级**: 升级至 Ink 6 和 React 19 (#2096)
- ✨ **新功能**: 添加隐私声明斜杠命令 (#2059)
- 🔧 **增强**: 处理输入提示的 stdin，使用 readline 进行转义字符解析 (#1972)
- 📋 **新增**: 使用 Gemini CLI 添加问题分类功能 (#2310)
- 🔐 **改进**: 更新认证标签以包含 AI Studio (#2130)
- 🛠️ **修复**: 工具调用错误处理和循环依赖问题 (#2304, #2246)

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

