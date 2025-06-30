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

### 最近同步 (2025-06-30)

从上游合并了 **22 个新提交** (仍为 v0.1.7)：

#### 🔥 重要功能更新
- 🔐 **OAuth 修复**: 修复 OAuth 凭证缓存问题 (#2709)
- 📊 **统计增强**: /stats 命令显示更详细的统计信息 (#2615)
- 🛠️ **Shell 改进**: 启用前缀匹配的灵活命令验证 (#2653)
- 🌐 **MCP 扩展**: 添加自定义 HTTP 头支持 (#2477)
- 📝 **模块化导入**: 支持 @file.md 语法的 GEMINI.md 模块化导入 (#2230)

#### 🎯 用户体验优化
- ✨ **界面改进**: 高亮显示之前的用户输入 (#2507)
- 💡 **提示控制**: 新增 hideTips 设置选项 (#1524)
- 📄 **文档完善**: 添加卸载指南和 Neovim 支持 (#1985, #1448)
- 🔧 **安全增强**: 允许对 ShellTool 进行特定命令限制 (#2605)

### 之前的重大更新 (2025-06-28)
- 🚀 **技术升级**: Ink 6 和 React 19
- ✨ **新功能**: 隐私声明和问题分类
- 🔐 **认证改进**: AI Studio 支持

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

