# 故障排除指南

本指南提供常见问题的解决方案和调试技巧。

## 身份验证

- **错误：`Failed to login. Message: Request contains an invalid argument`**

  - 拥有 Google Workspace 账户或与 Gmail 账户关联的 Google Cloud 账户的用户可能无法激活 Google Code Assist 计划的免费层级。
  - 对于 Google Cloud 账户，您可以通过将 `GOOGLE_CLOUD_PROJECT` 设置为您的项目 ID 来解决此问题。
  - 您也可以从 [AI Studio](http://aistudio.google.com/app/apikey) 获取 API 密钥，其中还包括单独的免费层级。

## 常见问题解答（FAQ）

- **问：如何将 Gemini CLI 更新到最新版本？**

  - 答：如果通过 npm 全局安装，使用命令 `npm install -g @google/gemini-cli@latest` 更新 Gemini CLI。如果从源代码运行，拉取存储库的最新更改并使用 `npm run build` 重新构建。

- **问：Gemini CLI 配置文件存储在哪里？**

  - 答：CLI 配置存储在两个 `settings.json` 文件中：一个在您的主目录中，一个在项目根目录中。在这两个位置，`settings.json` 都在 `.gemini/` 文件夹中找到。有关更多详细信息，请参阅 [CLI 配置](./cli/configuration.md)。

- **问：为什么我在统计输出中看不到缓存令牌计数？**

  - 答：缓存令牌信息仅在使用缓存令牌时显示。此功能适用于 API 密钥用户（Gemini API 密钥或 Vertex AI），但目前不适用于 OAuth 用户（Google 个人/企业账户），因为 Code Assist API 不支持缓存内容创建。您仍然可以使用 `/stats` 命令查看总令牌使用情况。

## 常见错误消息和解决方案

- **错误：启动 MCP 服务器时出现 `EADDRINUSE`（地址已被使用）。**

  - **原因：** 另一个进程已经在使用 MCP 服务器尝试绑定的端口。
  - **解决方案：**
    要么停止使用端口的其他进程，要么配置 MCP 服务器使用不同的端口。

- **错误：找不到命令（尝试运行 Gemini CLI 时）。**

  - **原因：** Gemini CLI 未正确安装或不在系统的 PATH 中。
  - **解决方案：**
    1.  确保 Gemini CLI 安装成功。
    2.  如果全局安装，检查您的 npm 全局二进制目录是否在 PATH 中。
    3.  如果从源代码运行，确保使用正确的命令调用它（例如，`node packages/cli/dist/index.js ...`）。

- **错误：`MODULE_NOT_FOUND` 或导入错误。**

  - **原因：** 依赖项未正确安装，或项目未构建。
  - **解决方案：**
    1.  运行 `npm install` 确保所有依赖项存在。
    2.  运行 `npm run build` 编译项目。

- **错误："操作不被允许"、"权限被拒绝" 或类似错误。**

  - **原因：** 如果启用了沙盒，应用程序可能尝试执行被沙盒限制的操作，如在项目目录或系统临时目录外写入。
  - **解决方案：** 查看 [沙盒](./cli/configuration.md#sandboxing) 了解更多信息，包括如何自定义沙盒配置。

- **CLI 在"CI"环境中不是交互的**
  - **问题：** 如果设置了以 `CI_` 开头的环境变量（例如，`CI_TOKEN`），CLI 不会进入交互模式（不出现提示符）。这是因为底层 UI 框架使用的 `is-in-ci` 包检测到这些变量并假设为非交互的 CI 环境。
  - **原因：** `is-in-ci` 包检查是否存在 `CI`、`CONTINUOUS_INTEGRATION` 或任何带有 `CI_` 前缀的环境变量。当找到其中任何一个时，它表明环境是非交互的，这阻止了 CLI 启动其交互模式。
  - **解决方案：** 如果 `CI_` 前缀的变量对 CLI 功能不是必需的，您可以为该命令临时取消设置它。例如，`env -u CI_TOKEN gemini`

## 调试技巧

- **CLI 调试：**

  - 对 CLI 命令使用 `--verbose` 标志（如可用）获取更详细的输出。
  - 检查 CLI 日志，通常在用户特定的配置或缓存目录中找到。

- **核心调试：**

  - 检查服务器控制台输出中的错误消息或堆栈跟踪。
  - 如果可配置，增加日志详细程度。
  - 如果需要逐步调试服务器端代码，使用 Node.js 调试工具（例如，`node --inspect`）。

- **工具问题：**

  - 如果特定工具失败，尝试运行工具执行的命令或操作的最简单版本来隔离问题。
  - 对于 `run_shell_command`，首先检查命令是否直接在您的 shell 中工作。
  - 对于文件系统工具，仔细检查路径和权限。

- **预检查检查：**
  - 提交代码前始终运行 `npm run preflight`。这可以捕获许多与格式化、代码检查和类型错误相关的常见问题。

如果您遇到此处未涵盖的问题，请考虑在 GitHub 上搜索项目的问题跟踪器或提交包含详细信息的新问题。