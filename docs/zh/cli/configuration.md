# Gemini CLI 配置

Gemini CLI 提供多种配置其行为的方式，包括环境变量、命令行参数和设置文件。本文档概述了不同的配置方法和可用设置。

## 配置层

配置按以下优先级顺序应用（较低的数字会被较高的数字覆盖）：

1. **默认值：** 应用程序内的硬编码默认值。
2. **用户设置文件：** 当前用户的全局设置。
3. **项目设置文件：** 项目特定的设置。
4. **环境变量：** 系统范围或会话特定的变量，可能从 `.env` 文件加载。
5. **命令行参数：** 启动 CLI 时传递的值。

## 用户设置文件和项目设置文件

Gemini CLI 使用 `settings.json` 文件进行持久配置。这些文件有两个位置：

- **用户设置文件：**
  - **位置：** `~/.gemini/settings.json`（其中 `~` 是您的主目录）。
  - **作用域：** 适用于当前用户的所有 Gemini CLI 会话。
- **项目设置文件：**
  - **位置：** 项目根目录内的 `.gemini/settings.json`。
  - **作用域：** 仅在从特定项目运行 Gemini CLI 时适用。项目设置会覆盖用户设置。

**设置中环境变量的注意事项：** 您的 `settings.json` 文件中的字符串值可以使用 `$VAR_NAME` 或 `${VAR_NAME}` 语法引用环境变量。加载设置时，这些变量将自动解析。例如，如果您有环境变量 `MY_API_TOKEN`，可以在 `settings.json` 中这样使用：`"apiKey": "$MY_API_TOKEN"`。

### 项目中的 `.gemini` 目录

除了项目设置文件外，项目的 `.gemini` 目录还可以包含与 Gemini CLI 操作相关的其他项目特定文件，例如：

- [自定义沙盒配置文件](#sandboxing)（例如，`.gemini/sandbox-macos-custom.sb`、`.gemini/sandbox.Dockerfile`）。

### `settings.json` 中的可用设置：

- **`contextFileName`**（字符串或字符串数组）：

  - **描述：** 指定上下文文件的文件名（例如，`GEMINI.md`、`AGENTS.md`）。可以是单个文件名或接受的文件名列表。
  - **默认值：** `GEMINI.md`
  - **示例：** `"contextFileName": "AGENTS.md"`

- **`bugCommand`**（对象）：

  - **描述：** 覆盖 `/bug` 命令的默认 URL。
  - **默认值：** `"urlTemplate": "https://github.com/google-gemini/gemini-cli/issues/new?template=bug_report.yml&title={title}&info={info}"`
  - **属性：**
    - **`urlTemplate`**（字符串）：可以包含 `{title}` 和 `{info}` 占位符的 URL。
  - **示例：**
    ```json
    "bugCommand": {
      "urlTemplate": "https://bug.example.com/new?title={title}&info={info}"
    }
    ```

- **`fileFiltering`**（对象）：

  - **描述：** 控制 @ 命令和文件发现工具的 git 感知文件过滤行为。
  - **默认值：** `"respectGitIgnore": true, "enableRecursiveFileSearch": true`
  - **属性：**
    - **`respectGitIgnore`**（布尔值）：发现文件时是否遵守 .gitignore 模式。设置为 `true` 时，git 忽略的文件（如 `node_modules/`、`dist/`、`.env`）会自动从 @ 命令和文件列表操作中排除。
    - **`enableRecursiveFileSearch`**（布尔值）：在提示中完成 @ 前缀时，是否启用在当前树下递归搜索文件名。
  - **示例：**
    ```json
    "fileFiltering": {
      "respectGitIgnore": true,
      "enableRecursiveFileSearch": false
    }
    ```

- **`coreTools`**（字符串数组）：

  - **描述：** 允许您指定应该对模型可用的核心工具名称列表。这可以用来限制内置工具集。有关核心工具列表，请参阅[内置工具](../core/tools-api.md#built-in-tools)。您还可以为支持的工具指定命令特定的限制，例如 `ShellTool`。例如，`"coreTools": ["ShellTool(ls -l)"]` 只允许执行 `ls -l` 命令。
  - **默认值：** 所有工具都可供 Gemini 模型使用。
  - **示例：** `"coreTools": ["ReadFileTool", "GlobTool", "ShellTool(ls)"]`。

- **`excludeTools`**（字符串数组）：

  - **描述：** 允许您指定应该从模型中排除的核心工具名称列表。同时列在 `excludeTools` 和 `coreTools` 中的工具将被排除。您还可以为支持的工具指定命令特定的限制，例如 `ShellTool`。例如，`"excludeTools": ["ShellTool(rm -rf)"]` 将阻止 `rm -rf` 命令。
  - **默认值**：不排除任何工具。
  - **示例：** `"excludeTools": ["run_shell_command", "findFiles"]`。
  - **安全注意事项：** 对于 `run_shell_command` 在 `excludeTools` 中的命令特定限制基于简单的字符串匹配，可以轻易绕过。此功能**不是安全机制**，不应依赖它来安全地执行不受信任的代码。建议使用 `coreTools` 明确选择可以执行的命令。

- **`autoAccept`**（布尔值）：

  - **描述：** 控制 CLI 是否自动接受和执行被认为安全的工具调用（例如，只读操作），而无需明确的用户确认。如果设置为 `true`，CLI 将绕过对认为安全的工具的确认提示。
  - **默认值：** `false`
  - **示例：** `"autoAccept": true`

- **`theme`**（字符串）：

  - **描述：** 设置 Gemini CLI 的视觉[主题](./themes.md)。
  - **默认值：** `"Default"`
  - **示例：** `"theme": "GitHub"`

- **`sandbox`**（布尔值或字符串）：

  - **描述：** 控制是否以及如何使用沙盒进行工具执行。如果设置为 `true`，Gemini CLI 使用预构建的 `gemini-cli-sandbox` Docker 镜像。有关更多信息，请参阅[沙盒](#sandboxing)。
  - **默认值：** `false`
  - **示例：** `"sandbox": "docker"`

- **`toolDiscoveryCommand`**（字符串）：

  - **描述：** 定义用于从项目中发现工具的自定义 shell 命令。shell 命令必须在 `stdout` 上返回[函数声明](https://ai.google.dev/gemini-api/docs/function-calling#function-declarations)的 JSON 数组。工具包装器是可选的。
  - **默认值：** 空
  - **示例：** `"toolDiscoveryCommand": "bin/get_tools"`

- **`toolCallCommand`**（字符串）：

  - **描述：** 定义用于调用使用 `toolDiscoveryCommand` 发现的特定工具的自定义 shell 命令。shell 命令必须满足以下条件：
    - 它必须将函数 `name`（与[函数声明](https://ai.google.dev/gemini-api/docs/function-calling#function-declarations)中完全相同）作为第一个命令行参数。
    - 它必须从 `stdin` 读取函数参数作为 JSON，类似于 [`functionCall.args`](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/inference#functioncall)。
    - 它必须在 `stdout` 上返回函数输出作为 JSON，类似于 [`functionResponse.response.content`](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/inference#functionresponse)。
  - **默认值：** 空
  - **示例：** `"toolCallCommand": "bin/call_tool"`

- **`mcpServers`**（对象）：

  - **描述：** 配置与一个或多个模型上下文协议（MCP）服务器的连接，用于发现和使用自定义工具。Gemini CLI 尝试连接到每个配置的 MCP 服务器以发现可用工具。如果多个 MCP 服务器公开具有相同名称的工具，工具名称将以您在配置中定义的服务器别名为前缀（例如，`serverAlias__actualToolName`）以避免冲突。请注意，为了兼容性，系统可能会从 MCP 工具定义中删除某些架构属性。
  - **默认值：** 空
  - **属性：**
    - **`<SERVER_NAME>`**（对象）：命名服务器的服务器参数。
      - `command`（字符串，必需）：启动 MCP 服务器要执行的命令。
      - `args`（字符串数组，可选）：传递给命令的参数。
      - `env`（对象，可选）：为服务器进程设置的环境变量。
      - `cwd`（字符串，可选）：启动服务器的工作目录。
      - `timeout`（数字，可选）：对此 MCP 服务器请求的超时时间（毫秒）。
      - `trust`（布尔值，可选）：信任此服务器并绕过所有工具调用确认。
  - **示例：**
    ```json
    "mcpServers": {
      "myPythonServer": {
        "command": "python",
        "args": ["mcp_server.py", "--port", "8080"],
        "cwd": "./mcp_tools/python",
        "timeout": 5000
      },
      "myNodeServer": {
        "command": "node",
        "args": ["mcp_server.js"],
        "cwd": "./mcp_tools/node"
      },
      "myDockerServer": {
        "command": "docker",
        "args": ["run", "i", "--rm", "-e", "API_KEY", "ghcr.io/foo/bar"],
        "env": {
          "API_KEY": "$MY_API_TOKEN"
        }
      },
    }
    ```

- **`checkpointing`**（对象）：

  - **描述：** 配置检查点功能，允许您保存和恢复对话和文件状态。有关更多详细信息，请参阅[检查点文档](../checkpointing.md)。
  - **默认值：** `{"enabled": false}`
  - **属性：**
    - **`enabled`**（布尔值）：当为 `true` 时，`/restore` 命令可用。

- **`preferredEditor`**（字符串）：

  - **描述：** 指定用于查看差异的首选编辑器。
  - **默认值：** `vscode`
  - **示例：** `"preferredEditor": "vscode"`

- **`telemetry`**（对象）
  - **描述：** 配置 Gemini CLI 的日志记录和指标收集。有关更多信息，请参阅[遥测](../telemetry.md)。
  - **默认值：** `{"enabled": false, "target": "local", "otlpEndpoint": "http://localhost:4317", "logPrompts": true}`
  - **属性：**
    - **`enabled`**（布尔值）：是否启用遥测。
    - **`target`**（字符串）：收集遥测的目标。支持的值为 `local` 和 `gcp`。
    - **`otlpEndpoint`**（字符串）：OTLP 导出器的端点。
    - **`logPrompts`**（布尔值）：是否在日志中包含用户提示的内容。
  - **示例：**
    ```json
    "telemetry": {
      "enabled": true,
      "target": "local",
      "otlpEndpoint": "http://localhost:16686",
      "logPrompts": false
    }
    ```
- **`usageStatisticsEnabled`**（布尔值）：
  - **描述：** 启用或禁用使用统计信息的收集。有关更多信息，请参阅[使用统计信息](#usage-statistics)。
  - **默认值：** `true`
  - **示例：**
    ```json
    "usageStatisticsEnabled": false
    ```

- **`hideTips`**（布尔值）：
  - **描述：** 启用或禁用 CLI 界面中的有用提示。
  - **默认值：** `false`
  - **示例：**

    ```json
    "hideTips": true
    ```

### 示例 `settings.json`：

```json
{
  "theme": "GitHub",
  "sandbox": "docker",
  "toolDiscoveryCommand": "bin/get_tools",
  "toolCallCommand": "bin/call_tool",
  "mcpServers": {
    "mainServer": {
      "command": "bin/mcp_server.py"
    },
    "anotherServer": {
      "command": "node",
      "args": ["mcp_server.js", "--verbose"]
    }
  },
  "telemetry": {
    "enabled": true,
    "target": "local",
    "otlpEndpoint": "http://localhost:4317",
    "logPrompts": true
  },
  "usageStatisticsEnabled": true,
  "hideTips": false
}
```

## Shell 历史记录

CLI 保留您运行的 shell 命令的历史记录。为了避免不同项目之间的冲突，此历史记录存储在用户主文件夹内的项目特定目录中。

- **位置：** `~/.gemini/tmp/<project_hash>/shell_history`
  - `<project_hash>` 是从项目根路径生成的唯一标识符。
  - 历史记录存储在名为 `shell_history` 的文件中。

## 环境变量和 `.env` 文件

环境变量是配置应用程序的常见方式，特别是对于 API 密钥等敏感信息或可能在环境之间变化的设置。

CLI 会自动从 `.env` 文件加载环境变量。加载顺序是：

1. 当前工作目录中的 `.env` 文件。
2. 如果未找到，它会在父目录中向上搜索，直到找到 `.env` 文件或到达项目根目录（由 `.git` 文件夹标识）或主目录。
3. 如果仍未找到，它会查找 `~/.env`（在用户的主目录中）。

- **`GEMINI_API_KEY`**（必需）：
  - 您的 Gemini API 的 API 密钥。
  - **对操作至关重要。** 没有它，CLI 将无法运行。
  - 在您的 shell 配置文件（例如，`~/.bashrc`、`~/.zshrc`）或 `.env` 文件中设置。
- **`GEMINI_MODEL`**：
  - 指定要使用的默认 Gemini 模型。
  - 覆盖硬编码默认值
  - 示例：`export GEMINI_MODEL="gemini-2.5-flash"`
- **`GOOGLE_API_KEY`**：
  - 您的 Google Cloud API 密钥。
  - 在快速模式下使用 Vertex AI 所需。
  - 确保您具有必要的权限。
  - 示例：`export GOOGLE_API_KEY="YOUR_GOOGLE_API_KEY"`。
- **`GOOGLE_CLOUD_PROJECT`**：
  - 您的 Google Cloud 项目 ID。
  - 使用 Code Assist 或 Vertex AI 所需。
  - 如果使用 Vertex AI，确保您在此项目中具有必要的权限。
  - **Cloud Shell 注意事项：**在 Cloud Shell 环境中运行时，此变量默认为为 Cloud Shell 用户分配的特殊项目。如果您在 Cloud Shell 的全局环境中设置了 `GOOGLE_CLOUD_PROJECT`，它将被此默认值覆盖。要在 Cloud Shell 中使用不同的项目，您必须在 `.env` 文件中定义 `GOOGLE_CLOUD_PROJECT`。
  - 示例：`export GOOGLE_CLOUD_PROJECT="YOUR_PROJECT_ID"`。
- **`GOOGLE_APPLICATION_CREDENTIALS`**（字符串）：
  - **描述：** 您的 Google 应用程序凭据 JSON 文件的路径。
  - **示例：** `export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/credentials.json"`
- **`OTLP_GOOGLE_CLOUD_PROJECT`**：
  - 您在 Google Cloud 中的遥测 Google Cloud 项目 ID
  - 示例：`export OTLP_GOOGLE_CLOUD_PROJECT="YOUR_PROJECT_ID"`。
- **`GOOGLE_CLOUD_LOCATION`**：
  - 您的 Google Cloud 项目位置（例如，us-central1）。
  - 在非快速模式下使用 Vertex AI 所需。
  - 示例：`export GOOGLE_CLOUD_LOCATION="YOUR_PROJECT_LOCATION"`。
- **`GEMINI_SANDBOX`**：
  - `settings.json` 中 `sandbox` 设置的替代方案。
  - 接受 `true`、`false`、`docker`、`podman` 或自定义命令字符串。
- **`SEATBELT_PROFILE`**（macOS 特定）：
  - 在 macOS 上切换 Seatbelt（`sandbox-exec`）配置文件。
  - `permissive-open`：（默认）限制对项目文件夹（和其他一些文件夹，请参阅 `packages/cli/src/utils/sandbox-macos-permissive-open.sb`）的写入，但允许其他操作。
  - `strict`：使用默认拒绝操作的严格配置文件。
  - `<profile_name>`：使用自定义配置文件。要定义自定义配置文件，请在项目的 `.gemini/` 目录中创建名为 `sandbox-macos-<profile_name>.sb` 的文件（例如，`my-project/.gemini/sandbox-macos-custom.sb`）。
- **`DEBUG` 或 `DEBUG_MODE`**（通常由底层库或 CLI 本身使用）：
  - 设置为 `true` 或 `1` 以启用详细的调试日志记录，这有助于故障排除。
- **`NO_COLOR`**：
  - 设置为任何值以禁用 CLI 中的所有颜色输出。
- **`CLI_TITLE`**：
  - 设置为字符串以自定义 CLI 的标题。
- **`CODE_ASSIST_ENDPOINT`**：
  - 指定代码辅助服务器的端点。
  - 这对开发和测试很有用。

## 命令行参数

直接在运行 CLI 时传递的参数可以覆盖该特定会话的其他配置。

- **`--model <model_name>`**（**`-m <model_name>`**）：
  - 指定此会话要使用的 Gemini 模型。
  - 示例：`npm start -- --model gemini-1.5-pro-latest`
- **`--prompt <your_prompt>`**（**`-p <your_prompt>`**）：
  - 用于直接向命令传递提示。这会在非交互模式下调用 Gemini CLI。
- **`--sandbox`**（**`-s`**）：
  - 为此会话启用沙盒模式。
- **`--sandbox-image`**：
  - 设置沙盒镜像 URI。
- **`--debug`**（**`-d`**）：
  - 为此会话启用调试模式，提供更详细的输出。
- **`--all-files`**（**`-a`**）：
  - 如果设置，递归地将当前目录内的所有文件作为提示的上下文包含。
- **`--help`**（或 **`-h`**）：
  - 显示关于命令行参数的帮助信息。
- **`--show-memory-usage`**：
  - 显示当前内存使用情况。
- **`--yolo`**：
  - 启用 YOLO 模式，自动批准所有工具调用。
- **`--telemetry`**：
  - 启用[遥测](../telemetry.md)。
- **`--telemetry-target`**：
  - 设置遥测目标。有关更多信息，请参阅[遥测](../telemetry.md)。
- **`--telemetry-otlp-endpoint`**：
  - 设置遥测的 OTLP 端点。有关更多信息，请参阅[遥测](../telemetry.md)。
- **`--telemetry-log-prompts`**：
  - 启用遥测的提示记录。有关更多信息，请参阅[遥测](../telemetry.md)。
- **`--checkpointing`**：
  - 启用[检查点](./commands.md#checkpointing-commands)。
- **`--extensions <extension_name ...>`**（**`-e <extension_name ...>`**）：
  - 指定会话要使用的扩展列表。如果未提供，则使用所有可用的扩展。
  - 使用特殊术语 `gemini -e none` 禁用所有扩展。
  - 示例：`gemini -e my-extension -e my-other-extension`
- **`--list-extensions`**（**`-l`**）：
  - 列出所有可用的扩展并退出。
- **`--version`**：
  - 显示 CLI 的版本。

## 上下文文件（分层指令上下文）

虽然严格来说不是 CLI _行为_ 的配置，但上下文文件（默认为 `GEMINI.md` 但可通过 `contextFileName` 设置配置）对于配置提供给 Gemini 模型的 _指令上下文_（也称为"记忆"）至关重要。这个强大的功能允许您向 AI 提供项目特定的指令、编码风格指南或任何相关的背景信息，使其响应更符合您的需求。CLI 包含 UI 元素，例如页脚中显示已加载上下文文件数量的指示器，以便您了解活动上下文。

- **目的：** 这些 Markdown 文件包含您希望 Gemini 模型在互动期间了解的指令、指南或上下文。系统设计为分层管理此指令上下文。

### 示例上下文文件内容（例如，`GEMINI.md`）

以下是 TypeScript 项目根目录中上下文文件的概念示例：

```markdown
# 项目：我的出色 TypeScript 库

## 一般指令：

- 生成新的 TypeScript 代码时，请遵循现有的编码风格。
- 确保所有新函数和类都有 JSDoc 注释。
- 在适当的地方优先使用函数式编程范式。
- 所有代码应与 TypeScript 5.0 和 Node.js 18+ 兼容。

## 编码风格：

- 使用 2 个空格缩进。
- 接口名称应以 `I` 为前缀（例如，`IUserService`）。
- 私有类成员应以下划线（`_`）为前缀。
- 始终使用严格相等（`===` 和 `!==`）。

## 特定组件：`src/api/client.ts`

- 此文件处理所有出站 API 请求。
- 添加新的 API 调用函数时，确保它们包含强大的错误处理和日志记录。
- 对所有 GET 请求使用现有的 `fetchWithRetry` 实用程序。

## 关于依赖项：

- 除非绝对必要，否则避免引入新的外部依赖项。
- 如果需要新的依赖项，请说明原因。
```

此示例演示了如何提供一般项目上下文、特定编码约定，甚至关于特定文件或组件的注释。您的上下文文件越相关和精确，AI 就能更好地为您提供帮助。强烈建议使用项目特定的上下文文件来建立约定和上下文。

- **分层加载和优先级：** CLI 通过从多个位置加载上下文文件（例如，`GEMINI.md`）实现复杂的分层记忆系统。此列表中较低的文件（更具体）的内容通常会覆盖或补充较高的文件（更一般）的内容。可以使用 `/memory show` 命令检查确切的连接顺序和最终上下文。典型的加载顺序是：
  1. **全局上下文文件：**
     - 位置：`~/.gemini/<contextFileName>`（例如，用户主目录中的 `~/.gemini/GEMINI.md`）。
     - 作用域：为您的所有项目提供默认指令。
  2. **项目根目录和祖先上下文文件：**
     - 位置：CLI 在当前工作目录中搜索配置的上下文文件，然后在每个父目录中搜索，直到项目根目录（由 `.git` 文件夹标识）或您的主目录。
     - 作用域：提供与整个项目或项目的重要部分相关的上下文。
  3. **子目录上下文文件（上下文/本地）：**
     - 位置：CLI 还在当前工作目录 _下面_ 的子目录中扫描配置的上下文文件（遵守常见的忽略模式，如 `node_modules`、`.git` 等）。
     - 作用域：允许与项目的特定组件、模块或子部分相关的高度特定指令。
- **连接和 UI 指示：** 所有找到的上下文文件的内容都会连接（带有指示其来源和路径的分隔符）并作为系统提示的一部分提供给 Gemini 模型。CLI 页脚显示已加载上下文文件的计数，为您提供关于活动指令上下文的快速视觉提示。
- **记忆管理命令：**
  - 使用 `/memory refresh` 强制重新扫描和重新加载所有配置位置的所有上下文文件。这会更新 AI 的指令上下文。
  - 使用 `/memory show` 显示当前加载的组合指令上下文，允许您验证 AI 使用的层次结构和内容。
  - 有关 `/memory` 命令及其子命令（`show` 和 `refresh`）的完整详细信息，请参阅[命令文档](./commands.md#memory)。

通过理解和利用这些配置层和上下文文件的分层性质，您可以有效地管理 AI 的记忆，并根据您的特定需求和项目定制 Gemini CLI 的响应。

## 沙盒

Gemini CLI 可以在沙盒环境中执行潜在不安全的操作（如 shell 命令和文件修改）以保护您的系统。

沙盒默认情况下是禁用的，但您可以通过几种方式启用它：

- 使用 `--sandbox` 或 `-s` 标志。
- 设置 `GEMINI_SANDBOX` 环境变量。
- 在 `--yolo` 模式下默认启用沙盒。

默认情况下，它使用预构建的 `gemini-cli-sandbox` Docker 镜像。

对于项目特定的沙盒需求，您可以在项目根目录的 `.gemini/sandbox.Dockerfile` 创建自定义 Dockerfile。此 Dockerfile 可以基于基础沙盒镜像：

```dockerfile
FROM gemini-cli-sandbox

# 在此处添加您的自定义依赖项或配置
# 例如：
# RUN apt-get update && apt-get install -y some-package
# COPY ./my-config /app/my-config
```

当 `.gemini/sandbox.Dockerfile` 存在时，您可以在运行 Gemini CLI 时使用 `BUILD_SANDBOX` 环境变量自动构建自定义沙盒镜像：

```bash
BUILD_SANDBOX=1 gemini -s
```

## 使用统计信息

为了帮助我们改进 Gemini CLI，我们收集匿名使用统计信息。此数据帮助我们了解 CLI 的使用方式，识别常见问题，并优先考虑新功能。

**我们收集的内容：**

- **工具调用：** 我们记录调用的工具名称、它们是成功还是失败，以及执行时间。我们不收集传递给工具的参数或工具返回的任何数据。
- **API 请求：** 我们记录每个请求使用的 Gemini 模型、请求持续时间以及是否成功。我们不收集提示或响应的内容。
- **会话信息：** 我们收集关于 CLI 配置的信息，例如启用的工具和批准模式。

**我们不收集的内容：**

- **个人身份信息（PII）：** 我们不收集任何个人信息，例如您的姓名、电子邮件地址或 API 密钥。
- **提示和响应内容：** 我们不记录您的提示内容或 Gemini 模型的响应。
- **文件内容：** 我们不记录 CLI 读取或写入的任何文件的内容。

**如何选择退出：**

您可以随时通过在 `settings.json` 文件中将 `usageStatisticsEnabled` 属性设置为 `false` 来选择退出使用统计信息收集：

```json
{
  "usageStatisticsEnabled": false
}
```