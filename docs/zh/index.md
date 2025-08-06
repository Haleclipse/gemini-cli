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
- **当前版本**: v0.1.18
- **分支状态**: 已同步至最新 ✅
- **文档**: 完全同步，支持中英双语
:::

### 最近同步 (2025-08-06)

从上游合并了 **72 个新提交**，带来内存发现、MCP 命令管理和高性能文件搜索：

#### 🚀 重大功能更新
- 🎉 **发布 v0.1.18**: 包含内存发现、MCP 命令管理和高性能文件搜索
- 🎉 **发布 v0.1.17**: 包含多目录工作空间和 IDE 模式改进
- 🧠 **内存发现改进**: 提升内存发现功能的错误处理和路径处理稳定性
- 🛠️ **MCP 命令管理**: 添加 `gemini mcp` 命令用于 `add`、`remove` 和 `list` MCP 服务器
- 🚀 **高性能文件搜索**: 引入高性能文件搜索引擎并支持非递归搜索
- 🎯 **GitHub 集成增强**: 完善 /setup-github 命令并添加官方 GitHub Action 支持

#### 🔧 新功能和改进
- 🏢 **多目录工作空间**: 支持在 settings.json 中配置多目录工作空间
- 🔧 **IDE 模式改进**: 重构 IDE 客户端状态管理，改进错误信息和连接日志
- ⚡ **性能优化**: 实现并行文件处理，提升 74% 性能
- 📋 **MCP 功能增强**: 支持多模态工具响应、OAuth2 audience 和仅提示服务器
- 🔍 **循环检测**: 检测并警告循环工具引用错误
- 🎨 **用户体验**: 改进 @ 自动补全、修复 Vim 模式、优化 UI 响应
- 🔧 **配置管理**: 支持从 settings.json 设置模型，改进配置加载
- 📚 **文档完善**: 新增自动化分类流程文档，修复多处文档问题

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

