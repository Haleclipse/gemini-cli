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
- **当前版本**: v0.1.13
- **分支状态**: 已同步至最新 ✅
- **文档**: 完全同步，支持中英双语
:::

### 最近同步 (2025-07-21)

从上游合并了 **60 个新提交**，带来 IDE 增强和后台代理支持：

#### 🚀 重大功能更新
- 🎉 **发布 v0.1.13**: 包含 IDE 集成、后台代理、自定义主题等重要功能
- ✨ **后台代理支持**: 添加 /background 命令（需要配置后台代理）
- 📁 **IDE 文件追踪**: 跟踪最近打开的文件并发送给 CLI
- 🎨 **自定义主题逻辑**: 功能完整的自定义主题逻辑
- 🟢 **Zed 编辑器集成**: 添加 Zed 编辑器支持
- 🏗️ **命令服务重构**: 为可扩展命令进行架构重构

#### 🔧 新功能和改进
- 📋 **复制命令**: 添加 /copy 命令用于复制输出到剪贴板
- 🚫 **.geminiignore 支持**: 完整实现 .geminiignore 功能
- 🤖 **AI 循环检测**: 使用 LLM 实现循环检测
- 👁️ **光标隐藏**: 终端失焦时隐藏光标
- 🔐 **MCP OAuth 基础架构**: OAuth 基础架构支持
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

<!--@include: ./zh/changelog-content.md-->

