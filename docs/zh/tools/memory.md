# 内存工具（`save_memory`）

本文档描述了 Gemini CLI 的 `save_memory` 工具。

## 描述

使用 `save_memory` 在您的 Gemini CLI 会话间保存和回忆信息。使用 `save_memory`，您可以指示 CLI 在会话间记住关键详细信息，提供个性化和有针对性的帮助。

### 参数

`save_memory` 接受一个参数：

- `fact`（字符串，必需）：要记住的特定事实或信息片段。这应该是用自然语言编写的清晰、自包含的声明。

## 如何在 Gemini CLI 中使用 `save_memory`

工具将提供的 `fact` 附加到位于用户主目录（`~/.gemini/GEMINI.md`）的特殊 `GEMINI.md` 文件中。此文件可以配置为具有不同的名称。

添加后，事实存储在 `## Gemini Added Memories` 部分下。此文件在后续会话中作为上下文加载，允许 CLI 回忆保存的信息。

用法：

```
save_memory(fact="Your fact here.")
```

### `save_memory` 示例

记住用户偏好：

```
save_memory(fact="My preferred programming language is Python.")
```

存储项目特定详细信息：

```
save_memory(fact="The project I'm currently working on is called 'gemini-cli'.")
```

## 重要注意事项

- **一般用法：** 此工具应用于简洁、重要的事实。它不适用于存储大量数据或对话历史。
- **内存文件：** 内存文件是纯文本 Markdown 文件，因此如果需要，您可以手动查看和编辑它。