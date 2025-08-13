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
- **当前版本**: v0.1.20
- **分支状态**: 已同步至最新 ✅
- **文档**: 完全同步，支持中英双语
:::

### 最近同步 (2025-08-13)

从上游合并了 **44 个新提交**，带来 VS Code IDE 集成、批准模式和测试升级：

#### 🚀 重大功能更新
- 🎉 **发布 v0.1.20**: 修复 CI 工作流的 YAML 格式问题
- 🎉 **发布 v0.1.19**: 包含 VS Code IDE 集成、集成测试升级和批准模式
- 🚀 **VS Code IDE 集成启动**: 正式推出 VS Code IDE 集成功能
- 🏛️ **批准模式参数**: 添加 --approval-mode 参数，提供 default、auto_edit、yolo 三种模式
- ⌨️ **单次 Ctrl+C 取消**: 支持单次 Ctrl+C 取消流式传输，保留双次 Ctrl+C 退出
- 🔬 **集成测试升级到 Vitest**: 将集成测试从旧框架升级到 Vitest

#### 🔧 新功能和改进
- 📝 **集成测试重构为 TypeScript**: 将集成测试重构为 TypeScript 以提高类型安全
- 🏢 **IDE 集成完善**: 更新安装逻辑、工作空间路径处理和沙箱检测
- 📚 **GitHub 文档页面**: 基于 GitHub 文档创建文档页面
- 🔄 **输入处理升级**: 从 useInput 切换到 useKeypress
- 🧹 **CI 工作流安全性**: 确保 CI 工作流一致性并防止注入攻击
- ⚡ **性能改进**: 添加 --experimental-cli 加速 prettier 格式化
- 📊 **遥测增强**: 改进 Clearcut 日志记录和错误状态码记录
- 🔧 **工具架构升级**: 迁移工具使用 parametersJsonSchema 和 responseJsonSchema

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

