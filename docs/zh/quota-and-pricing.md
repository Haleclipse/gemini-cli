# Gemini CLI：配额和定价

您的 Gemini CLI 配额和定价取决于您使用的 Google 账户认证类型。此外，配额和定价可能会根据模型版本、请求和使用的令牌数量而有所不同。通过 `/stats` 命令可以查看模型使用情况摘要，并在会话结束时显示。有关隐私政策和服务条款的详细信息，请参阅[隐私和条款](./tos-privacy.md)。注意：公布的价格为标价；可能适用额外的商业协商折扣。

本文概述了使用不同认证方法时 Gemini CLI 的具体配额和定价。

## 1. 使用 Google 登录（Gemini Code Assist 免费版）

对于使用 Google 账户进行身份验证以访问个人版 Gemini Code Assist 的用户：

- **配额：**
  - 每分钟 60 个请求
  - 每天 1000 个请求
  - 不适用令牌使用量
- **费用：** 免费
- **详情：** [Gemini Code Assist 配额](https://developers.google.com/gemini-code-assist/resources/quotas#quotas-for-agent-mode-gemini-cli)
- **注意：** 未指定不同模型的特定配额；可能会进行模型回退以保持共享体验质量。

## 2. Gemini API 密钥（免费版）

如果您使用免费版的 Gemini API 密钥：

- **配额：**
  - 仅限 Flash 模型
  - 每分钟 10 个请求
  - 每天 250 个请求
- **费用：** 免费
- **详情：** [Gemini API 速率限制](https://ai.google.dev/gemini-api/docs/rate-limits)

## 3. Gemini API 密钥（付费版）

如果您使用付费计划的 Gemini API 密钥：

- **配额：** 因定价层级而异。
- **费用：** 因定价层级和模型/令牌使用量而异。
- **详情：** [Gemini API 速率限制](https://ai.google.dev/gemini-api/docs/rate-limits)，[Gemini API 定价](https://ai.google.dev/gemini-api/docs/pricing)

## 4. 使用 Google 登录（适用于 Workspace 或已授权的 Code Assist 用户）

对于 Gemini Code Assist 标准版或企业版用户，配额和定价基于固定价格订阅和分配的许可证席位：

- **标准版：**
  - **配额：** 每分钟 120 个请求，每天 1500 个
- **企业版：**
  - **配额：** 每分钟 120 个请求，每天 2000 个
- **费用：** 包含在您的 Gemini for Google Workspace 或 Gemini Code Assist 订阅的固定价格中。
- **详情：** [Gemini Code Assist 配额](https://developers.google.com/gemini-code-assist/resources/quotas#quotas-for-agent-mode-gemini-cli)，[Gemini Code Assist 定价](https://cloud.google.com/products/gemini/pricing)
- **注意：**
  - 未指定不同模型的特定配额；可能会进行模型回退以保持共享体验质量。
  - Google 开发者计划的成员可能通过其会员资格获得 Gemini Code Assist 许可证。

## 5. Vertex AI（快速模式）

如果您在快速模式下使用 Vertex AI：

- **配额：** 配额是可变的，并且特定于您的账户。有关更多详细信息，请参阅来源。
- **费用：** 在您的快速模式使用量消耗完毕并为项目启用计费后，费用基于标准 [Vertex AI 定价](https://cloud.google.com/vertex-ai/pricing)。
- **详情：** [Vertex AI 快速模式配额](https://cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/overview#quotas)

## 6. Vertex AI（常规模式）

如果您使用标准 Vertex AI 服务：

- **配额：** 受动态共享配额系统或预购预配吞吐量管理。
- **费用：** 基于模型和令牌使用量。请参阅 [Vertex AI 定价](https://cloud.google.com/vertex-ai/pricing)。
- **详情：** [Vertex AI 动态共享配额](https://cloud.google.com/vertex-ai/generative-ai/docs/resources/dynamic-shared-quota)

## 7. Google One 和 Ultra 计划，Gemini for Workspace 计划

这些计划目前仅适用于 Google 提供的基于网页的 Gemini 产品体验（例如，Gemini 网页应用或 Flow 视频编辑器）。这些计划不适用于为 Gemini CLI 提供支持的 API 使用。未来支持这些计划正在积极考虑中。