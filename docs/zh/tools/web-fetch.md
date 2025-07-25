# Web 获取工具（`web_fetch`）

本文档描述了 Gemini CLI 的 `web_fetch` 工具。

## 描述

使用 `web_fetch` 来总结、比较或从网页中提取信息。`web_fetch` 工具处理嵌入在提示中的一个或多个 URL（最多 20 个）的内容。`web_fetch` 接受自然语言提示并返回生成的响应。

### 参数

`web_fetch` 接受一个参数：

- `prompt`（字符串，必需）：包含要获取的 URL（最多 20 个）和如何处理其内容的具体指令的综合提示。例如：`"Summarize https://example.com/article and extract key points from https://another.com/data"`。提示必须包含至少一个以 `http://` 或 `https://` 开头的 URL。

## 如何在 Gemini CLI 中使用 `web_fetch`

要在 Gemini CLI 中使用 `web_fetch`，请提供包含 URL 的自然语言提示。工具将在获取任何 URL 之前要求确认。确认后，工具将通过 Gemini API 的 `urlContext` 处理 URL。

如果 Gemini API 无法访问 URL，工具将回退到从本地机器直接获取内容。工具将格式化响应，包括源归属和引用（如果可能）。然后工具将向用户提供响应。

用法：

```
web_fetch(prompt="Your prompt, including a URL such as https://google.com.")
```

## `web_fetch` 示例

总结单篇文章：

```
web_fetch(prompt="Can you summarize the main points of https://example.com/news/latest")
```

比较两篇文章：

```
web_fetch(prompt="What are the differences in the conclusions of these two papers: https://arxiv.org/abs/2401.0001 and https://arxiv.org/abs/2401.0002?")
```

## 重要注意事项

- **URL 处理：** `web_fetch` 依赖于 Gemini API 访问和处理给定 URL 的能力。
- **输出质量：** 输出的质量将取决于提示中指令的清晰度。