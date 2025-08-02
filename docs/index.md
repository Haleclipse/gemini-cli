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
- **当前版本**: v0.1.16
- **分支状态**: 已同步至最新 ✅
- **文档**: 完全同步，支持中英双语
:::

### 最近同步 (2025-08-02)

从上游合并了 **75 个新提交**，带来自动更新和新命令：

#### 🚀 重大功能更新
- 🎉 **发布 v0.1.16**: 包含自动更新、新命令和重要修复
- 🔄 **自动更新**: 改进更新检查并重构以提高可测试性
- 🛠️ **新命令**: 添加 /setup-github、/init 和目录管理命令
- 📝 **提示传播**: 实现提示传播功能
- ⚡ **Flash Lite 模型**: 工具调用切换使用 gemini-2.5-flash-lite 模型
- 🔐 **安全政策**: 添加标准 Google 安全政策文档

#### 🔧 新功能和改进
- 🌐 **默认 IPv4 DNS 解析**: 优先使用 IPv4 DNS 解析
- 🔗 **斜杠命令自动补全**: 使用 completionStart/End 改进自动补全
- 🔐 **禁用启动认证验证**: 添加设置禁用启动时认证验证
- 📦 **SANDBOX_FLAGS 支持**: 为自定义容器选项添加支持
- 🎨 **历史记录高亮**: 在历史记录中高亮显示斜杠命令
- 🐛 **Vim 换行支持修复**: 修复 replaceRange 处理换行的 bug
- 📝 **@ 自动补全改进**: 改进句中编辑的 @ 自动补全
- 📚 **新文档**: 添加键盘快捷键和 .geminiignore 功能文档

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

