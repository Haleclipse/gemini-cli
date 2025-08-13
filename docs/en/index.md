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
- **Current Version**: v0.1.20
- **Fork Status**: Synced to latest ✅
- **Documentation**: Fully synced with bilingual support
:::

### Recent Sync (2025-08-13)

Merged **44 new commits** from upstream with VS Code IDE integration, approval modes and testing upgrades:

#### 🚀 Major Feature Updates
- 🎉 **Release v0.1.20**: Fixed CI workflow YAML format issues
- 🎉 **Release v0.1.19**: Contains VS Code IDE integration, testing upgrades and approval modes
- 🚀 **VS Code IDE Integration Launch**: Officially launched VS Code IDE integration functionality
- 🏛️ **Approval Mode Parameter**: Added --approval-mode parameter with default, auto_edit, yolo modes
- ⌨️ **Single Ctrl+C Cancel**: Support single Ctrl+C to cancel streaming while preserving double Ctrl+C exit
- 🔬 **Integration Tests Upgrade to Vitest**: Upgraded integration tests from legacy framework to Vitest

#### 🔧 New Features and Improvements
- 📝 **Integration Tests Refactored to TypeScript**: Refactored integration tests to TypeScript for improved type safety
- 🏢 **IDE Integration Improvements**: Updated installation logic, workspace path handling and sandbox detection
- 📚 **GitHub Documentation Pages**: Created documentation pages based on GitHub documentation
- 🔄 **Input Processing Upgrade**: Switched from useInput to useKeypress
- 🧹 **CI Workflow Security**: Ensured CI workflow consistency and prevented injection attacks
- ⚡ **Performance Improvements**: Added --experimental-cli to accelerate prettier formatting
- 📊 **Telemetry Enhancements**: Improved Clearcut logging and error status code recording
- 🔧 **Tool Architecture Upgrades**: Migrated tools to use parametersJsonSchema and responseJsonSchema

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