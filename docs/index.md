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

### 最近同步 (2025-08-11)

从上游合并了 **70 个新提交**，带来设置界面、README 改版和用户体验改进：

#### 🚀 重大功能更新
- 📖 **README 全面改版**: 提升清晰度和用户体验导向的结构
- ⚙️ **设置命令和 UI 面板**: 添加 /settings 命令和可视化设置界面
- ⚙️ **启用默认使用统计**: 修复设置中的默认使用统计收集
- 🔢 **代码块行号选项**: 添加 showLineNumbers 配置选项隐藏代码块行号
- 🌟 **MCP Roots 支持**: 添加 MCP Roots 支持增强扩展性
- ⌨️ **双 ESC 清除输入**: 改进输入 UX，支持双 ESC 快速清除

#### 🔧 新功能和改进
- 🔗 **键盘绑定集中化**: 移除重复绑定并添加完整导航命令
- ✅ **聊天保存覆写确认**: 为 `/chat save` 添加覆写确认对话框
- 📱 **窄终端 UI 适应**: 改进 UI 布局以适应窄终端显示
- 💡 **幽默换行提示**: 为换行快捷键添加趣味性提示
- 🚫 **减少 UI 闪烁**: 优化编辑器文件显示，减少界面闪烁
- 🧹 **移除过时选项**: 从 CLI 参数中移除已废弃的配置选项
- 🏢 **IDE 集成增强**: 改进差异渲染、环境变量支持和文件信任对话框
- 🔧 **配置文档更新**: 完善 chatCompression 和 showLineNumbers 配置文档

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

