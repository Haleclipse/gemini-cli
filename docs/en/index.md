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
- **Current Version**: v0.1.18
- **Fork Status**: Synced to latest ✅
- **Documentation**: Fully synced with bilingual support
:::

### Recent Sync (2025-08-06)

Merged **72 new commits** from upstream with memory discovery, MCP command management and high-performance file search:

#### 🚀 Major Feature Updates
- 🎉 **Release v0.1.18**: Contains memory discovery, MCP command management and high-performance file search
- 🎉 **Release v0.1.17**: Contains multi-directory workspace and IDE mode improvements
- 🧠 **Memory Discovery Improvements**: Enhanced error handling and path processing stability in memory discovery
- 🛠️ **MCP Command Management**: Added `gemini mcp` commands for `add`, `remove` and `list` MCP servers
- 🚀 **High-Performance File Search**: Introduced high-performance file search engine with non-recursive support
- 🎯 **GitHub Integration Enhancement**: Enhanced /setup-github command with official GitHub Action support

#### 🔧 New Features and Improvements
- 🏢 **Multi-Directory Workspace**: Support for configuring multi-directory workspaces in settings.json
- 🔧 **IDE Mode Improvements**: Refactored IDE client state management with improved error messages and connection logging
- ⚡ **Performance Optimization**: Implemented parallel file processing for 74% performance improvement
- 📋 **MCP Feature Enhancements**: Support for multimodal tool responses, OAuth2 audience, and prompt-only servers
- 🔍 **Cyclic Detection**: Detect and warn about cyclic tool reference errors
- 🎨 **User Experience**: Enhanced @ autocompletion, fixed Vim mode, and optimized UI responsiveness
- 🔧 **Configuration Management**: Support for setting model from settings.json and improved config loading
- 📚 **Documentation Improvements**: Added automation triage process documentation and fixed multiple doc issues

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