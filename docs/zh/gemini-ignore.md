# 忽略文件

本文档概述了 Gemini CLI 的 Gemini Ignore（`.geminiignore`）功能。

Gemini CLI 包含自动忽略文件的功能，类似于 `.gitignore`（Git 使用）和 `.aiexclude`（Gemini Code Assist 使用）。将路径添加到 `.geminiignore` 文件中会将它们从支持此功能的工具中排除，尽管它们仍然对其他服务（如 Git）可见。

## 工作原理

当您将路径添加到 `.geminiignore` 文件时，遵守此文件的工具将从其操作中排除匹配的文件和目录。例如，当您使用 [`read_many_files`](./tools/multi-file.md) 命令时，`.geminiignore` 文件中的任何路径都将被自动排除。

大部分情况下，`.geminiignore` 遵循 `.gitignore` 文件的约定：

- 空行和以 `#` 开头的行被忽略。
- 支持标准的 glob 模式（如 `*`、`?` 和 `[]`）。
- 在末尾加上 `/` 将只匹配目录。
- 在开头加上 `/` 将相对于 `.geminiignore` 文件锚定路径。
- `!` 否定模式。

您可以随时更新 `.geminiignore` 文件。要应用更改，必须重新启动 Gemini CLI 会话。

## 如何使用 `.geminiignore`

要启用 `.geminiignore`：

1. 在项目目录的根目录中创建名为 `.geminiignore` 的文件。

要将文件或目录添加到 `.geminiignore`：

1. 打开您的 `.geminiignore` 文件。
2. 添加要忽略的路径或文件，例如：`/archive/` 或 `apikeys.txt`。

### `.geminiignore` 示例

您可以使用 `.geminiignore` 忽略目录和文件：

```
# 排除您的 /packages/ 目录和所有子目录
/packages/

# 排除您的 apikeys.txt 文件
apikeys.txt
```

您可以在 `.geminiignore` 文件中使用带有 `*` 的通配符：

```
# 排除所有 .md 文件
*.md
```

最后，您可以使用 `!` 从排除中排除文件和目录：

```
# 排除所有 .md 文件，但 README.md 除外
*.md
!README.md
```

要从 `.geminiignore` 文件中删除路径，请删除相关行。