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
- **Current Version**: v0.1.16
- **Fork Status**: Synced to latest ✅
- **Documentation**: Fully synced with bilingual support
:::

### Recent Sync (2025-08-02)

Merged **75 new commits** from upstream with auto-update and new commands:

#### 🚀 Major Feature Updates
- 🎉 **Release v0.1.16**: Contains auto-update, new commands, and important fixes
- 🔄 **Auto-Update**: Improved update checks and refactored for better testability
- 🛠️ **New Commands**: Added /setup-github, /init, and directory management commands
- 📝 **Prompt Propagation**: Implemented prompt propagation functionality
- ⚡ **Flash Lite Model**: Tool calls switched to gemini-2.5-flash-lite model
- 🔐 **Security Policy**: Added standard Google security policy documentation

#### 🔧 New Features and Improvements
- 🌐 **Default IPv4 DNS Resolution**: Prioritize IPv4 DNS resolution by default
- 🔗 **Slash Command Autocompletion**: Improved autocompletion with completionStart/End
- 🔐 **Disable Startup Auth Validation**: Added setting to disable authentication validation at startup
- 📦 **SANDBOX_FLAGS Support**: Added support for custom container options
- 🎨 **History Highlighting**: Highlight slash commands in history
- 🐛 **Vim Newline Support Fix**: Fixed replaceRange handling newlines bug
- 📝 **@ Autocompletion Improvements**: Improved @ autocompletion for mid-sentence editing
- 📚 **New Documentation**: Added keyboard shortcuts and .geminiignore functionality documentation

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