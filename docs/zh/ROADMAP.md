# Gemini CLI 路线图

[官方 Gemini CLI 路线图](https://github.com/orgs/google-gemini/projects/11/)

Gemini CLI 是一个开源 AI 代理，将 Gemini 的强大功能直接带到您的终端中。它提供对 Gemini 的轻量级访问，为您提供从提示到我们模型的最直接路径。

本文档概述了我们对 Gemini CLI 路线图的方法。在这里，您将找到我们的指导原则以及我们专注于开发的关键领域细分。我们的路线图不是一个静态列表，而是在我们的 GitHub Issues 中实时跟踪的动态优先级集合。

作为一个 [Apache 2.0 开源项目](https://github.com/google-gemini/gemini-cli?tab=Apache-2.0-1-ov-file#readme)，我们欣赏并欢迎[公众贡献](https://github.com/google-gemini/gemini-cli/blob/main/CONTRIBUTING.md)，并将优先考虑与我们路线图一致的贡献。如果您想提议新功能或更改我们的路线图，请先[开启一个 issue 进行讨论](https://github.com/google-gemini/gemini-cli/issues/new/choose)。

## 免责声明

此路线图代表我们目前的想法，仅供参考。它不是对未来交付的承诺或保证。任何功能的开发、发布和时间安排都可能发生变化，我们可能会根据社区讨论以及我们的优先级演变来更新路线图。

## 指导原则

我们的开发遵循以下原则：

- **强大与简单：** 通过直观易用的轻量级命令行界面提供对最先进 Gemini 模型的访问。
- **可扩展性：** 一个适应性强的代理，帮助您处理各种用例和环境，并能够在任何地方运行这些代理。
- **智能：** Gemini CLI 应该在 SWE Bench、Terminal Bench 和 CSAT 等基准测试中可靠地排名靠前。
- **免费和开源：** 培育一个蓬勃发展的开源社区，成本不是个人使用的障碍，PR 快速合并。这意味着快速解决和关闭 issues、pull requests 和讨论帖子。

## 路线图如何运作

我们的路线图直接通过 Github Issues 管理。请查看我们的入口路线图 Issue [这里](https://github.com/google-gemini/gemini-cli/issues/4191)。这种方法提供了透明度，并为您提供了了解更多信息或参与任何特定倡议的直接方式。我们所有的路线图项目都将标记为 Type:`Feature` 和 Label:`maintainer`（对于我们正在积极开发的功能），或 Type:`Task` 和 Label:`maintainer`（用于更详细的任务列表）。

Issues 的组织方式可以一目了然地提供关键信息：

- **目标季度：** `Milestone` 表示预期的交付时间线。
- **功能区域：** 如 `area/model` 或 `area/tooling` 等标签对工作进行分类。
- **Issue 类型：** _工作流_ => _史诗_ => _功能_ => _任务|错误_

要查看我们正在做什么，您可以按这些维度过滤我们的 issues。查看我们所有的项目[这里](https://github.com/orgs/google-gemini/projects/11/views/19)

## 重点领域

为了更好地组织我们的工作，我们将工作分类为几个关键功能区域。这些标签在我们的 GitHub Issues 上使用，帮助您过滤和找到您感兴趣的倡议。

- **身份验证：** 通过 API 密钥、Gemini Code Assist 登录等安全用户访问。
- **模型：** 支持新的 Gemini 模型、多模态、本地执行和性能调优。
- **用户体验：** 改进 CLI 的可用性、性能、交互功能和文档。
- **工具：** 内置工具和 MCP 生态系统。
- **核心：** CLI 的核心功能
- **可扩展性：** 将 Gemini CLI 带到其他平台，例如 GitHub。
- **贡献：** 通过测试自动化和 CI/CD 流水线增强改进贡献过程。
- **平台：** 管理安装、操作系统支持和底层 CLI 框架。
- **质量：** 专注于测试、可靠性、性能和整体产品质量。
- **后台代理：** 启用长时间运行的自主任务和主动协助。
- **安全和隐私：** 与安全和隐私相关的所有事项

## 如何贡献

Gemini CLI 是一个开源项目，我们欢迎社区的贡献！无论您是开发者、设计师还是热情的用户，您都可以在[这里找到我们的社区指南](https://github.com/google-gemini/gemini-cli/blob/main/CONTRIBUTING.md)了解如何开始。有很多参与方式：

- **路线图：** 请查看并在我们的[路线图](https://github.com/google-gemini/gemini-cli/issues/4191)中找到您想要贡献的领域。基于此的贡献将最容易集成。
- **报告错误：** 如果您发现问题，请创建一个[错误报告](https://github.com/google-gemini/gemini-cli/issues/new?template=bug_report.yml)，提供尽可能多的详细信息。如果您认为这是阻止直接 CLI 使用的关键破坏性问题，请将其标记为 `priority/p0`。
- **建议功能：** 有好主意吗？我们很乐意听到！开启一个[功能请求](https://github.com/google-gemini/gemini-cli/issues/new?template=feature_request.yml)。
- **贡献代码：** 查看我们的 [CONTRIBUTING.md](https://github.com/google-gemini/gemini-cli/blob/main/CONTRIBUTING.md) 文件，了解如何提交 pull requests 的指南。我们有一个新贡献者的"好的首个 issues"列表。
- **编写文档：** 帮助我们改进文档、教程和示例。

我们对 Gemini CLI 的未来感到兴奋，期待与您一起构建它！