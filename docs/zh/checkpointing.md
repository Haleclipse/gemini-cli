# 检查点

Gemini CLI 包含检查点功能，在 AI 驱动的工具进行任何文件修改之前会自动保存项目状态的快照。这允许您安全地实验和应用代码更改，因为您知道可以立即恢复到运行工具之前的状态。

## 工作原理

当您批准修改文件系统的工具（如 `write_file` 或 `replace`）时，CLI 会自动创建一个"检查点"。此检查点包括：

1.  **Git 快照：** 在位于您主目录的特殊影子 Git 存储库（`~/.gemini/history/<project_hash>`）中进行提交。此快照捕获该时刻项目文件的完整状态。它 **不会** 干扰您自己项目的 Git 存储库。
2.  **对话历史：** 保存您与代理进行的整个对话直到那一刻。
3.  **工具调用：** 也存储即将执行的具体工具调用。

如果您想撤销更改或简单地返回，可以使用 `/restore` 命令。恢复检查点将：

- 将项目中的所有文件恢复到快照中捕获的状态。
- 恢复 CLI 中的对话历史。
- 重新提出原始工具调用，允许您再次运行它、修改它或简单地忽略它。

所有检查点数据，包括 Git 快照和对话历史，都存储在本地计算机上。Git 快照存储在影子存储库中，而对话历史和工具调用保存在项目临时目录的 JSON 文件中，通常位于 `~/.gemini/tmp/<project_hash>/checkpoints`。

## 启用功能

检查点功能默认关闭。要启用它，您可以使用命令行标志或编辑您的 `settings.json` 文件。

### 使用命令行标志

您可以通过在启动 Gemini CLI 时使用 `--checkpointing` 标志为当前会话启用检查点：

```bash
gemini --checkpointing
```

### 使用 `settings.json` 文件

要默认为所有会话启用检查点，您需要编辑您的 `settings.json` 文件。

向您的 `settings.json` 添加以下键：

```json
{
  "features": {
    "checkpointing": {
      "enabled": true
    }
  }
}
```

## 使用 `/restore` 命令

启用后，检查点会自动创建。要管理它们，您使用 `/restore` 命令。

### 列出可用检查点

要查看当前项目的所有保存检查点列表，只需运行：

```
/restore
```

CLI 将显示可用检查点文件的列表。这些文件名通常由时间戳、正在修改的文件名和即将运行的工具名组成（例如，`2025-06-22T10-00-00_000Z-my-file.txt-write_file`）。

### 恢复特定检查点

要将项目恢复到特定检查点，使用列表中的检查点文件：

```
/restore <checkpoint_file>
```

例如：

```
/restore 2025-06-22T10-00-00_000Z-my-file.txt-write_file
```

运行命令后，您的文件和对话将立即恢复到创建检查点时的状态，原始工具提示将重新出现。