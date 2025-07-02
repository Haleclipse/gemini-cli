# Gemini CLI：服务条款与隐私声明

Gemini CLI 是一个开源工具，让您可以直接从命令行界面与 Google 强大的语言模型进行交互。适用于您使用 Gemini CLI 的服务条款和隐私声明取决于您用于向 Google 进行身份验证的账户类型。有关适用于您使用 Gemini CLI 的配额和定价详情，请参阅[配额和定价](./quota-and-pricing.md)。

本文概述了不同身份验证方法适用的具体条款和隐私政策。

## 1. 使用 Google 登录（Gemini Code Assist [个人用户](https://developers.google.com/gemini-code-assist/docs/overview#supported-features-gca)）

对于使用 Google 账户登录以访问 Gemini Code Assist 个人版的用户：

- 服务条款：您使用 Gemini CLI 受 [Google 服务条款](https://policies.google.com/terms?hl=zh-CN)的约束。
- 隐私声明：数据的收集和使用在 [Gemini Code Assist 个人用户隐私声明](https://developers.google.com/gemini-code-assist/resources/privacy-notice-gemini-code-assist-individuals)中有所描述。

## 2. Gemini API 密钥（使用 Gemini 开发者 [API](https://ai.google.dev/gemini-api/docs) a：免费服务，b：付费服务）

如果您使用 Gemini API 密钥进行身份验证，以下条款适用：

- 服务条款：您的使用受 [Gemini API 服务条款](https://ai.google.dev/gemini-api/terms)的约束。适用于 a. [免费服务](https://ai.google.dev/gemini-api/terms#unpaid-services) 或 b. [付费服务](https://ai.google.dev/gemini-api/terms#paid-services)
- 隐私声明：有关数据处理和隐私的信息详见 [Google 隐私政策](https://policies.google.com/privacy)。

## 3. 使用 Google 登录（适用于 Workspace 或许可的 Code Assist 用户）

对于使用 Gemini Code Assist 标准版或企业[版本](https://cloud.google.com/gemini/docs/codeassist/overview#editions-overview)的用户：

- 服务条款：[Google Cloud Platform 服务条款](https://cloud.google.com/terms) 约束您对服务的使用。
- 隐私声明：您的数据处理在 [Gemini Code Assist 隐私声明](https://developers.google.com/gemini-code-assist/resources/privacy-notices)中有所概述。

## 4. Vertex AI（使用 Vertex AI Gen [API](https://cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)）

如果您使用带有 Vertex AI Gen API 后端的 API 密钥：

- 服务条款：您的使用受 [Google Cloud Platform 服务条款](https://cloud.google.com/terms/service-terms/)的约束。
- 隐私声明：[Google Cloud 隐私声明](https://cloud.google.com/terms/cloud-privacy-notice) 描述了您的数据是如何被收集和管理的。

### 使用统计选项退出

您可以按照以下说明选择退出向 Google 发送使用统计数据：[使用统计配置](./cli/configuration.md#usage-statistics)。

## Gemini CLI 常见问题解答（FAQ）

### 1. 我的代码（包括提示和回答）是否会被用于训练 Google 的模型？

这完全取决于您使用的身份验证方法类型。

- **身份验证方法 1：** 是的。当您使用个人 Google 账户时，适用 Gemini Code Assist 个人用户隐私声明。根据此声明，您的**提示、回答和相关代码会被收集**，并可能用于改进 Google 的产品，包括模型训练。
- **身份验证方法 2a：** 是的，当您使用 Gemini API 密钥时，适用 Gemini API（免费服务）条款。根据此声明，您的**提示、回答和相关代码会被收集**，并可能用于改进 Google 的产品，包括模型训练。
- **身份验证方法 2b、3 和 4：** 不会。对于这些账户，您的数据受 Google Cloud 或 Gemini API（付费服务）条款的约束，这些条款将您的输入视为机密信息。您的代码、提示和其他输入**不会**被用于训练模型。

### 2. 什么是"使用统计"以及选项退出控制的是什么？

"使用统计"设置是 Gemini CLI 中所有可选数据收集的单一控制。它收集的数据取决于您的账户类型：

- **身份验证方法 1：** 启用时，此设置允许 Google 收集匿名遥测（如运行的命令和性能指标）以及**您的提示和回答**用于模型改进。
- **身份验证方法 2a：** 启用时，此设置允许 Google 收集匿名遥测（如运行的命令和性能指标）以及**您的提示和回答**用于模型改进。禁用时，我们将按照 [Google 如何使用您的数据](https://ai.google.dev/gemini-api/terms#data-use-unpaid)中的描述使用您的数据。
- **身份验证方法 2b：** 此设置仅控制匿名遥测的收集。Google 仅在有限的时间内记录提示和响应，仅用于检测违反禁止使用政策和任何必要的法律或监管披露的目的。
- **身份验证方法 3 和 4：** 此设置仅控制匿名遥测的收集。无论此设置如何，都不会收集您的提示和回答。

您可以按照[使用统计配置](./cli/configuration.md#usage-statistics)文档中的说明，为任何账户类型禁用使用统计。