---
layout: home

hero:
  name: Gemini CLI
  text: AI-Powered Command Line Tool
  tagline: Connect to your tools, understand your code, and accelerate your workflows
  actions:
    - theme: brand
      text: English Documentation
      link: /guide
    - theme: alt
      text: 中文文档
      link: /zh/guide

features:
  - icon: 🚀
    title: Fast and Powerful
    details: Query and edit large codebases beyond the Gemini 1M token context window
  - icon: 🎨
    title: Multimodal
    details: Generate new apps from PDFs or sketches using Gemini's multimodal capabilities
  - icon: 🔧
    title: Extensible
    details: Use tools and MCP servers to connect new functionality
  - icon: 🔍
    title: Google Search
    details: Enhance your queries with the built-in Google search tool
---

## 🔄 Latest Upstream Updates

::: info Version Status
- **Current Version**: v0.1.14
- **Fork Status**: Synced to latest ✅
- **Documentation**: Fully synced with bilingual support
:::

### Recent Sync (2025-07-27)

Merged **84 new commits** from upstream with Vim mode and Windows compatibility improvements:

#### 🚀 Major Feature Updates
- 🎉 **Release v0.1.14**: Contains Vim mode, Windows compatibility improvements and many enhancements
- ⌨️ **Vim Mode**: Complete Vim editor support with NORMAL/INSERT mode switching
- 🪟 **Windows Compatibility**: Major improvements to Windows platform testing and compatibility
- 🐚 **Custom Command Shell Execution**: Execute shell commands within custom commands
- 📝 **MCP Server Prompts**: Load MCP server prompts as slash commands
- 🏢 **IDE Manager Class**: Create IDE manager class to handle connections

#### 🔧 New Features and Improvements
- 🏗️ **Shell Logic Centralization**: Centralize shell logic into ShellExecutionService
- 🔒 **Hash-based Loop Detection**: Implement hash-based loop detection mechanism
- 🕐 **Chat List Timestamps**: Display timestamps in /chat list
- 🔐 **Non-interactive GCP Auth**: Enhanced non-interactive GCP authentication
- 🎨 **Legacy Theme Compatibility**: Fix legacy custom themes to still load
- 🛡️ **Safer Shell Execution**: Improved shell command execution security
- 📝 **Documentation Updates**: Added --prompt-interactive flag documentation
- 🧹 **Startup Screen Cleanup**: Remove extraneous whitespace from startup screen

#### 🔧 Tools and Improvements
- 📦 **Google/genai v1.9.0**: Updated to latest version with parametersJsonSchema support
- 🎯 **Tool Summarization**: Centralized shell tool summarization and alphabetical sorting
- ⌨️ **Shortcuts**: CTRL+C clears input buffer functionality
- 🔧 **MCP Enhancements**: Support for server allowlist/blocklist configuration

---

## 🌟 Fork Enhancements

This fork provides additional value through:

- **Complete Chinese translation** covering all documentation
- **Bilingual README** with easy language switching
- **Real-time sync** of upstream changes
- **Detailed changelog** tracking all upstream modifications

---

## 📋 Full Upstream Changelog

<!--@include: ./changelog-content.md-->