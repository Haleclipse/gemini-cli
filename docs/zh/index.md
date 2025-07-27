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
- **当前版本**: v0.1.14
- **分支状态**: 已同步至最新 ✅
- **文档**: 完全同步，支持中英双语
:::

### 最近同步 (2025-07-27)

从上游合并了 **84 个新提交**，带来 Vim 模式和 Windows 兼容性改进：

#### 🚀 重大功能更新
- 🎉 **发布 v0.1.14**: 包含 Vim 模式、Windows 兼容性改进和众多增强功能
- ⌨️ **Vim 模式**: 完整的 Vim 编辑器支持，包括 NORMAL/INSERT 模式切换
- 🪟 **Windows 兼容性**: 大幅改进 Windows 平台的测试和兼容性
- 🐚 **自定义命令 Shell 执行**: 在自定义命令中执行 Shell 命令
- 📝 **MCP 服务器提示**: 将 MCP 服务器提示作为斜杠命令
- 🏢 **IDE 管理器类**: 创建 IDE 管理器类来处理连接

#### 🔧 新功能和改进
- 🏗️ **Shell 逻辑中心化**: 将 shell 逻辑集中到 ShellExecutionService
- 🔒 **基于哈希的循环检测**: 实现基于哈希的循环检测机制
- 🕐 **聊天列表时间戳**: 在 /chat list 中显示时间戳
- 🔐 **非交互式 GCP 认证**: 增强非交互式 GCP 认证
- 🎨 **旧版主题兼容**: 修复旧版自定义主题仍能加载
- 🛡️ **更安全的 Shell 执行**: 改进 Shell 命令执行的安全性
- 📝 **文档更新**: 添加 --prompt-interactive 标志文档
- 🧹 **启动屏幕清理**: 从启动屏幕移除多余的空白

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

