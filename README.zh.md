# Gemini CLI

[English](./README.md) | [中文](./README.zh.md)

[![Gemini CLI CI](https://github.com/google-gemini/gemini-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/google-gemini/gemini-cli/actions/workflows/ci.yml)

![Gemini CLI 截图](./docs/assets/gemini-screenshot.png)

本仓库包含 Gemini CLI，这是一个命令行 AI 工作流工具，能够连接到您的工具、理解您的代码并加速您的工作流程。

使用 Gemini CLI，您可以：

- 查询和编辑超出 Gemini 1M token 上下文窗口的大型代码库。
- 使用 Gemini 的多模态能力，从 PDF 或草图生成新应用。
- 自动化操作任务，如查询拉取请求或处理复杂的变基。
- 使用工具和 MCP 服务器连接新功能，包括[使用 Imagen、Veo 或 Lyria 生成媒体](https://github.com/GoogleCloudPlatform/vertex-ai-creative-studio/tree/main/experiments/mcp-genmedia)
- 使用内置的 [Google 搜索](https://ai.google.dev/gemini-api/docs/grounding)工具来增强您的查询。

## 快速开始

1. **前置条件：** 确保您已安装 [Node.js 20](https://nodejs.org/en/download) 或更高版本。
2. **运行 CLI：** 在终端中执行以下命令：

   ```bash
   npx https://github.com/google-gemini/gemini-cli
   ```

   或通过以下方式安装：

   ```bash
   npm install -g @google/gemini-cli
   gemini
   ```

3. **选择颜色主题**
4. **身份验证：** 当提示时，使用您的个人 Google 账户登录。这将授予您使用 Gemini 每分钟最多 60 个模型请求和每天 1,000 个模型请求的权限。

现在您已准备好使用 Gemini CLI！

### 使用 Gemini API 密钥：

Gemini API 提供免费额度，每天有 [100 个请求](https://ai.google.dev/gemini-api/docs/rate-limits#free-tier) 使用 Gemini 2.5 Pro，可以控制使用的模型，并可访问更高的速率限制（付费计划）：

1. 从 [Google AI Studio](https://aistudio.google.com/apikey) 生成密钥。
2. 在终端中将其设置为环境变量。将 `YOUR_API_KEY` 替换为您生成的密钥。

   ```bash
   export GEMINI_API_KEY="YOUR_API_KEY"
   ```

3. （可选）在 API 密钥页面将您的 Gemini API 项目升级到付费计划（将自动解锁 [Tier 1 速率限制](https://ai.google.dev/gemini-api/docs/rate-limits#tier-1)）

### 使用 Vertex AI API 密钥：

Vertex AI 提供使用 express 模式的 [免费额度](https://cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview) 用于 Gemini 2.5 Pro，可以控制使用的模型，并通过付费账户访问更高的速率限制：

1. 从 [Google Cloud](https://cloud.google.com/vertex-ai/generative-ai/docs/start/api-keys) 生成密钥。
2. 在终端中将其设置为环境变量。将 `YOUR_API_KEY` 替换为您生成的密钥，并将 GOOGLE_GENAI_USE_VERTEXAI 设置为 true

   ```bash
   export GOOGLE_API_KEY="YOUR_API_KEY"
   export GOOGLE_GENAI_USE_VERTEXAI=true
   ```

3. （可选）在您的项目上添加计费账户以获得[更高的使用限制](https://cloud.google.com/vertex-ai/generative-ai/docs/quotas)

有关其他身份验证方法（包括 Google Workspace 账户），请参阅[身份验证](./docs/cli/authentication.md)指南。

## 示例

CLI 运行后，您可以从 shell 开始与 Gemini 交互。

您可以从新目录开始项目：

```sh
cd new-project/
gemini
> 给我写一个 Gemini Discord 机器人，使用我将提供的 FAQ.md 文件来回答问题
```

或处理现有项目：

```sh
git clone https://github.com/google-gemini/gemini-cli
cd gemini-cli
gemini
> 给我总结一下昨天所有的更改
```

### 后续步骤

- 学习如何[贡献或从源代码构建](./CONTRIBUTING.md)。
- 探索可用的 **[CLI 命令](./docs/cli/commands.md)**。
- 如果遇到任何问题，请查看 **[故障排除指南](./docs/troubleshooting.md)**。
- 有关更全面的文档，请参阅[完整文档](./docs/index.md)。
- 查看一些[热门任务](#热门任务)以获得更多灵感。

### 故障排除

如果您遇到问题，请前往[故障排除](docs/troubleshooting.md)指南。

## 热门任务

### 探索新代码库

首先 `cd` 进入现有或新克隆的仓库并运行 `gemini`。

```text
> 描述这个系统架构的主要组成部分。
```

```text
> 有哪些安全机制？
```

### 处理现有代码

```text
> 为 GitHub issue #123 实现一个初稿。
```

```text
> 帮我将这个代码库迁移到最新版本的 Java。先制定一个计划。
```

### 自动化工作流程

使用 MCP 服务器将您的本地系统工具与企业协作套件集成。

```text
> 制作一个幻灯片，展示过去 7 天的 git 历史，按功能和团队成员分组。
```

```text
> 制作一个全屏 web 应用用于墙面显示，展示我们互动最多的 GitHub issues。
```

### 与系统交互

```text
> 将此目录中的所有图像转换为 png，并使用 exif 数据中的日期重命名它们。
```

```text
> 按支出月份整理我的 PDF 发票。
```

### 卸载

请前往[卸载](docs/Uninstall.md)指南了解卸载说明。

## 服务条款与隐私声明

有关适用于您使用 Gemini CLI 的服务条款和隐私声明的详细信息，请参阅[服务条款与隐私声明](./docs/tos-privacy.md)。