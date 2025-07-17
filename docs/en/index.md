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
- **Current Version**: v0.1.12
- **Fork Status**: Synced to latest ✅
- **Documentation**: Fully synced with bilingual support
:::

### Recent Sync (2025-07-17)

Merged **66 new commits** from upstream with major architecture refactoring and feature updates:

#### 🚀 Major Feature Updates
- 🔧 **Slash Command Refactoring**: Massive migration of 12 slash commands to new architecture (/quit, /bug, /editor, /tools, /docs, /mcp, /compress, /extensions, /stats, /about, /privacy, /auth)
- 💻 **IDE Integration**: Introduced VS Code companion extension with /ide status and /ide install commands
- 📋 **Official Roadmap**: Released project roadmap and contribution guidelines
- 🔄 **Loop Detection**: Introduced intelligent loop detection service to prevent infinite loops

#### ⚙️ New Features and Configuration
- 🎛️ **hideBanner Setting**: Added startup banner disable option
- 📊 **maxSessionTurns**: Support for configuring maximum session turns
- 🔐 **GEMINI_DEFAULT_AUTH_TYPE**: Default authentication type support
- 🚀 **Performance**: Background model availability checks for faster startup

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