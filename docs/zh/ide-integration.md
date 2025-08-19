# IDE 集成

Gemini CLI 可以与您的 IDE 集成，提供更加无缝和上下文感知的体验。这种集成允许 CLI 更好地了解您的工作空间，并启用强大的功能，如原生的编辑器内差异查看。

目前，唯一支持的 IDE 是 [Visual Studio Code](https://code.visualstudio.com/) 和其他支持 VS Code 扩展的编辑器。

## 功能

- **工作空间上下文：** CLI 自动获得对您的工作空间的感知，以提供更相关和准确的响应。此上下文包括：
  - 您工作空间中**最近访问的 10 个文件**。
  - 您的活动光标位置。
  - 您选择的任何文本（最多 16KB 限制；较长的选择将被截断）。

- **原生差异查看：** 当 Gemini 建议代码修改时，您可以直接在 IDE 的原生差异查看器中查看更改。这允许您无缝地审查、编辑和接受或拒绝建议的更改。

- **VS Code 命令：** 您可以直接从 VS Code 命令面板（`Cmd+Shift+P` 或 `Ctrl+Shift+P`）访问 Gemini CLI 功能：
  - `Gemini CLI: Run`：在集成终端中启动新的 Gemini CLI 会话。
  - `Gemini CLI: Accept Diff`：接受活动差异编辑器中的更改。
  - `Gemini CLI: Close Diff Editor`：拒绝更改并关闭活动差异编辑器。
  - `Gemini CLI: View Third-Party Notices`：显示扩展的第三方声明。

## 安装和设置

有三种方式设置 IDE 集成：

### 1. 自动提示（推荐）

当您在支持的编辑器内运行 Gemini CLI 时，它将自动检测您的环境并提示您连接。回答"是"将自动运行必要的设置，包括安装配套扩展和启用连接。

### 2. 从 CLI 手动安装

如果您之前取消了提示或想要手动安装扩展，您可以在 Gemini CLI 内运行以下命令：

```
/ide install
```

这将为您的 IDE 找到正确的扩展并安装它。

### 3. 从市场手动安装

您也可以直接从市场安装扩展。

- **对于 Visual Studio Code：** 从 [VS Code 市场](https://marketplace.visualstudio.com/items?itemName=google.gemini-cli-vscode-ide-companion) 安装。
- **对于 VS Code 分支：** 为了支持 VS Code 的分支，扩展也发布在 [Open VSX Registry](https://open-vsx.org/extension/google/gemini-cli-vscode-ide-companion) 上。按照您的编辑器的说明从此注册表安装扩展。

在任何安装方法之后，建议打开一个新的终端窗口以确保集成正确激活。安装后，您可以使用 `/ide enable` 来连接。

## 使用

### 启用和禁用

您可以从 CLI 内控制 IDE 集成：

- 要启用与 IDE 的连接，运行：
  ```
  /ide enable
  ```
- 要禁用连接，运行：
  ```
  /ide disable
  ```

启用时，Gemini CLI 将自动尝试连接到 IDE 配套扩展。

### 检查状态

要检查连接状态并查看 CLI 从 IDE 接收到的上下文，运行：

```
/ide status
```

如果已连接，此命令将显示它连接到的 IDE 以及它感知的最近打开文件列表。

（注意：文件列表限制为您工作空间内最近访问的 10 个文件，仅包括磁盘上的本地文件。）

### 使用差异查看

当您要求 Gemini 修改文件时，它可以直接在您的编辑器中打开差异视图。

**要接受差异**，您可以执行以下任何操作：

- 点击差异编辑器标题栏中的**复选标记图标**。
- 保存文件（例如，使用 `Cmd+S` 或 `Ctrl+S`）。
- 打开命令面板并运行 **Gemini CLI: Accept Diff**。
- 在 CLI 中收到提示时响应 `yes`。

**要拒绝差异**，您可以：

- 点击差异编辑器标题栏中的 **'x' 图标**。
- 关闭差异编辑器标签页。
- 打开命令面板并运行 **Gemini CLI: Close Diff Editor**。
- 在 CLI 中收到提示时响应 `no`。

您也可以在接受建议的更改之前直接在差异视图中**修改建议的更改**。

如果您在 CLI 中选择"是，始终允许"，更改将不再在 IDE 中显示，因为它们将被自动接受。

## 与沙箱一起使用

如果您在沙箱内使用 Gemini CLI，请注意以下事项：

- **在 macOS 上：** IDE 集成需要网络访问以与 IDE 配套扩展通信。您必须使用允许网络访问的 Seatbelt 配置文件。
- **在 Docker 容器中：** 如果您在 Docker（或 Podman）容器内运行 Gemini CLI，IDE 集成仍然可以连接到在主机上运行的 VS Code 扩展。CLI 配置为自动在 `host.docker.internal` 上找到 IDE 服务器。通常不需要特殊配置，但您可能需要确保您的 Docker 网络设置允许从容器到主机的连接。

## 故障排除

如果您遇到 IDE 集成问题，以下是一些常见错误消息及其解决方法。

### 连接错误

- **消息：** `🔴 已断开连接：无法连接到 [IDE 名称] 的 IDE 配套扩展。请确保扩展正在运行并尝试重启您的终端。要安装扩展，请运行 /ide install。`
  - **原因：** Gemini CLI 无法找到连接到 IDE 所需的环境变量（`GEMINI_CLI_IDE_WORKSPACE_PATH` 或 `GEMINI_CLI_IDE_SERVER_PORT`）。这通常意味着 IDE 配套扩展未运行或未正确初始化。
  - **解决方案：**
    1.  确保您已在 IDE 中安装了 **Gemini CLI Companion** 扩展并且已启用。
    2.  在您的 IDE 中打开一个新的终端窗口以确保它获取正确的环境。

- **消息：** `🔴 已断开连接：IDE 连接错误。连接意外丢失。请尝试通过运行 /ide enable 重新连接`
  - **原因：** 与 IDE 配套扩展的连接丢失。
  - **解决方案：** 运行 `/ide enable` 尝试重新连接。如果问题持续，打开一个新的终端窗口或重启您的 IDE。

### 配置错误

- **消息：** `🔴 已断开连接：目录不匹配。Gemini CLI 在与 [IDE 名称] 中打开的工作空间不同的位置运行。请从与您项目根文件夹相同的目录运行 CLI。`
  - **原因：** CLI 的当前工作目录在您在 IDE 中打开的文件夹或工作空间之外。
  - **解决方案：** `cd` 到与您在 IDE 中打开的相同目录并重启 CLI。

- **消息：** `🔴 已断开连接：要使用此功能，请在 [IDE 名称] 中打开单个工作空间文件夹并重试。`
  - **原因：** 您在 IDE 中打开了多个工作空间文件夹，或根本没有打开文件夹。IDE 集成需要单个根工作空间文件夹才能正确操作。
  - **解决方案：** 在您的 IDE 中打开单个项目文件夹并重启 CLI。

### 一般错误

- **消息：** `当前环境不支持 IDE 集成。要使用此功能，请在以下支持的 IDE 之一中运行 Gemini CLI：[IDE 列表]`
  - **原因：** 您在不是支持的 IDE 的终端或环境中运行 Gemini CLI。
  - **解决方案：** 从支持的 IDE（如 VS Code）的集成终端运行 Gemini CLI。

- **消息：** `[IDE 名称] 没有可用的安装程序。请从其市场手动安装 IDE 配套扩展。`
  - **原因：** 您运行了 `/ide install`，但 CLI 没有适用于您特定 IDE 的自动安装程序。
  - **解决方案：** 打开您的 IDE 扩展市场，搜索"Gemini CLI Companion"，并手动安装它。