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
- **Current Version**: v0.1.22
- **Fork Status**: Synced to latest ✅
- **Documentation**: Fully synced with bilingual support
:::

### Recent Sync (2025-08-19)

Merged **107 new commits** from upstream with message queuing, chat recording and Zed integration:

#### 🚀 Major Feature Updates
- 🎉 **Release v0.1.22**: Contains message queuing, chat recording service and Zed integration
- 🎉 **Release v0.1.21**: Contains tool architecture upgrades and telemetry enhancements
- 📝 **Message Queuing Implementation**: Implement message queuing during streaming responses
- 💾 **Automatic Chat Recording**: Introduce core chat recording service for automatic conversation saving
- 🏢 **Zed Editor Integration**: Read and write files through Zed with multi-folder workspace support
- 🔧 **Tool Architecture Modernization**: Large-scale migration of tools to declarative mode

#### 🔧 New Features and Improvements
- 🛡️ **Privacy Settings Hook**: Add privacy settings hook and tests
- 📊 **File Change Tracking**: Add file change tracking to session metrics
- 🔒 **Special Character Handling**: Handle special characters in file paths
- 🌐 **OAuth Enhancements**: Support GitHub OAuth and resource parameters
- ⚡ **Non-recursive File Search**: Introduce non-recursive file search strategy
- 🔧 **Terminal Settings Command**: Add terminal settings for Shift+Enter and Ctrl+Enter support
- 📱 **Folder Trust Management**: Support trustedFolders.json configuration file
- 🎨 **UI Improvements**: Fix theme behavior, input handling and diff display

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