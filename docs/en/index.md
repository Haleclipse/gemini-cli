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

### Recent Sync (2025-08-11)

Merged **70 new commits** from upstream with settings UI, README overhaul and user experience improvements:

#### 🚀 Major Feature Updates
- 📖 **README Overhaul**: Enhanced clarity and user experience-oriented structure
- ⚙️ **Settings Command & UI Panel**: Added /settings command with visual settings interface
- ⚙️ **Enable Default Usage Stats**: Fixed default usage statistics collection in settings
- 🔢 **Code Block Line Numbers**: Added showLineNumbers config option to hide code block line numbers
- 🌟 **MCP Roots Support**: Added MCP Roots support for enhanced extensibility
- ⌨️ **Double ESC Input Clear**: Enhanced input UX with double ESC quick clear support

#### 🔧 New Features and Improvements
- 🔗 **Centralized Key Bindings**: Removed duplicate bindings and added complete navigation commands
- ✅ **Chat Save Overwrite Confirmation**: Added overwrite confirmation dialog for `/chat save`
- 📱 **Narrow Terminal UI Adaptation**: Improved UI layout adaptation for narrow terminal displays
- 💡 **Humorous Newline Tips**: Added entertaining tips for newline shortcuts
- 🚫 **Reduced UI Flickering**: Optimized editor file display to reduce interface flickering
- 🧹 **Removed Deprecated Options**: Removed obsolete configuration options from CLI arguments
- 🏢 **IDE Integration Enhancements**: Improved diff rendering, environment variable support, and folder trust dialogs
- 🔧 **Configuration Documentation**: Enhanced chatCompression and showLineNumbers config documentation

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