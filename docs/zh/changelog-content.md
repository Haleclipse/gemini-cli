本文档总结了从我们的分叉开始到最新上游主分支的所有更改。

## 更新历史

### 2025-06-28 更新
- **提交范围**: 6742a1b7..ad7839ea
- **新增提交数**: 19
- **版本**: 0.1.5 → 0.1.8

### 2025-06-27 更新
- **提交范围**: c55b15f7..6742a1b7
- **新增提交数**: 5

### 2025-06-26 初次同步
- **版本**: 0.1.1 → 0.1.5
- **提交范围**: 05b9b9ab..c55b15f7
- **总提交数**: 30

## 最新更改（2025-06-28）

### 主要版本更新

#### 重大技术升级
- **[#2096](https://github.com/google-gemini/gemini-cli/pull/2096)** - **重大更改**: 升级至 Ink 6 和 React 19
  - 这是一个重大技术栈升级，可能影响性能和兼容性

#### 新功能
- **[#2059](https://github.com/google-gemini/gemini-cli/pull/2059)** - 添加隐私声明斜杠命令
- **[#1972](https://github.com/google-gemini/gemini-cli/pull/1972)** - 处理输入提示的 stdin，使用 readline 进行转义字符解析
- **[#2130](https://github.com/google-gemini/gemini-cli/pull/2130)** - 更新认证标签以包含 AI Studio
- **[#2112](https://github.com/google-gemini/gemini-cli/pull/2112)** - 在 about 消息中添加当前认证方法和 GCP 项目配置
- **[#2310](https://github.com/google-gemini/gemini-cli/pull/2310)** - 使用 Gemini CLI 添加问题分类
- **[#1152](https://github.com/google-gemini/gemini-cli/pull/1152)** - 为保存的检查点文件使用 2 空格缩进 (#1977)

#### Bug 修复和改进
- **[#2304](https://github.com/google-gemini/gemini-cli/pull/2304)** - 在工具调用不正确的情况下更新错误处理
- **[#2302](https://github.com/google-gemini/gemini-cli/pull/2302)** - 修复：添加缺失的 gaxios 依赖
- **[#2246](https://github.com/google-gemini/gemini-cli/pull/2246)** - 修复循环依赖
- **[#1961](https://github.com/google-gemini/gemini-cli/pull/1961)** - 优化回退消息，提供更多选项
- **[#2029](https://github.com/google-gemini/gemini-cli/pull/2029)** - 进一步明确需要项目 ID 的情况
- **[#2239](https://github.com/google-gemini/gemini-cli/pull/2239)** - 静默 dotenv 日志消息

#### 版本更新
- **[#2308](https://github.com/google-gemini/gemini-cli/pull/2308)** - chore: 升级到 0.1.8
- **[#2285](https://github.com/google-gemini/gemini-cli/pull/2285)** - chore: 升级到 0.1.6

#### 文档和修复
- **[#1629](https://github.com/google-gemini/gemini-cli/pull/1629)** - 修复拼写错误
- **[#1555](https://github.com/google-gemini/gemini-cli/pull/1555)** - chore: 修复 mcp-client 中的拼写错误
- **[#2314](https://github.com/google-gemini/gemini-cli/pull/2314)** - 改进分类提示
- **[#1480](https://github.com/google-gemini/gemini-cli/pull/1480)** - 修复拼写错误和格式问题

## 之前的更改（2025-06-27）

### 2025-06-26（新增）

#### 功能更新
- **[#2019](https://github.com/google-gemini/gemini-cli/pull/2019)** - 为缺少子命令的情况添加明确的错误消息
- **[#2037](https://github.com/google-gemini/gemini-cli/pull/2037)** - 更新首次用户消息以提及产品名称（Gemini CLI）

#### Bug 修复
- **[#1983](https://github.com/google-gemini/gemini-cli/pull/1983)** - **回滚**: 撤销 "feat: Add model selection logic (#1678)"
  - 撤销了之前的模型自动选择功能

#### 开发改进
- **[#2032](https://github.com/google-gemini/gemini-cli/pull/2032)** - 在 package.json 文件中添加 repository 字段
- **[#2052](https://github.com/google-gemini/gemini-cli/pull/2052)** - 添加 prepublishOnly 检查

## 初次同步时的更改记录（2025-06-26）

### 2025-06-25

#### 功能更新
- **[#1527](https://github.com/google-gemini/gemini-cli/pull/1527)** - 改进模型回退消息，使其更准确反映实际情况
- **[#1574](https://github.com/google-gemini/gemini-cli/pull/1574)** - **重大更改**: 将 "Login with Google Workspace" 合并到 "Login with Google"
- **[#1595](https://github.com/google-gemini/gemini-cli/pull/1595)** - 提示用户在创建新问题前搜索现有问题
- **[#1608](https://github.com/google-gemini/gemini-cli/pull/1608)** - 使用 YAML 表单简化问题提交流程
- **[#1653](https://github.com/google-gemini/gemini-cli/pull/1653)** - 修复检查点恢复时的历史记录问题

#### Bug 修复
- **[#1405](https://github.com/google-gemini/gemini-cli/pull/1405)** - 修复不稳定的测试
- **[#1579](https://github.com/google-gemini/gemini-cli/pull/1579)** - OAuth 用户的 429 错误重试次数从 3 次减少到 2 次
- **[#1668](https://github.com/google-gemini/gemini-cli/pull/1668)** - 修复 429 错误处理机制
- **[#1688](https://github.com/google-gemini/gemini-cli/pull/1688)** - 修复认证对话框中的文档链接
- **[#1752](https://github.com/google-gemini/gemini-cli/pull/1752)** - 添加 Node.js 版本检查（要求 18.0.0+）

#### 文档更新
- **[#1501](https://github.com/google-gemini/gemini-cli/pull/1501)** - 在 bug 报告模板中添加登录方法信息
- **[#1534](https://github.com/google-gemini/gemini-cli/pull/1534)** - 修复检查点文档中的配置说明
- **[#1571](https://github.com/google-gemini/gemini-cli/pull/1571)** - **新增**: 服务条款和隐私政策文档
- **[#1625](https://github.com/google-gemini/gemini-cli/pull/1625)** - 更新文档并添加 FAQ 部分
- **[#1632](https://github.com/google-gemini/gemini-cli/pull/1632)** - 更新 README.md
- **[#1636](https://github.com/google-gemini/gemini-cli/pull/1636)** - 更新使用统计文档
- **[#1664](https://github.com/google-gemini/gemini-cli/pull/1664)** - 更新 LICENSE 文件

#### 其他更改
- **[#1578](https://github.com/google-gemini/gemini-cli/pull/1578)** - 对提示进行小的样式调整

### 2025-06-26

#### 功能更新
- **[#1645](https://github.com/google-gemini/gemini-cli/pull/1645)** - 改进 LoadCodeAssist 错误处理
- **[#1678](https://github.com/google-gemini/gemini-cli/pull/1678)** - **新功能**: 添加智能模型选择逻辑（Pro/Flash 自动切换）
- **[#1697](https://github.com/google-gemini/gemini-cli/pull/1697)** - 添加发布触发器配置

#### Bug 修复
- **[#1451](https://github.com/google-gemini/gemini-cli/pull/1451)** - 添加登录问题的故障排除说明
- **[#1488](https://github.com/google-gemini/gemini-cli/pull/1488)** - 修复 npx 命令中的 GitHub 仓库 URL
- **[#1557](https://github.com/google-gemini/gemini-cli/pull/1557)** - 修复 ClearcutLogger 中的 Promise 拒绝处理
- **[#1739](https://github.com/google-gemini/gemini-cli/pull/1739)** - 移除测试中不必要的 mock
- **[#1780](https://github.com/google-gemini/gemini-cli/pull/1780)** - 修复主题文档中的断链

#### 文档更新
- **[#1681](https://github.com/google-gemini/gemini-cli/pull/1681)** - 更新 geminiChat.ts 注释
- **[#1781](https://github.com/google-gemini/gemini-cli/pull/1781)** - 修复文档中的多个拼写错误

#### 其他更改
- **[#1540](https://github.com/google-gemini/gemini-cli/pull/1540)** - 修复注释中的拼写错误
- **[#1731](https://github.com/google-gemini/gemini-cli/pull/1731)** - **版本升级**: 0.1.5

## 重要更改总结

### 最新更新（2025-06-27）
- **模型选择功能已回滚** - 之前添加的自动模型切换功能被撤销
- **改进用户体验** - 添加了更清晰的错误消息和产品名称提示
- **开发流程改进** - 添加了发布前检查和 repository 字段

### 初次同步时的更改（2025-06-26）

#### 1. 破坏性更改
- 认证流程简化：移除了单独的 "Login with Google Workspace" 选项

#### 2. 新功能
- ~~智能模型选择：自动在 Gemini Pro 和 Flash 之间切换~~（已在 2025-06-27 回滚）
- 服务条款和隐私政策文档
- YAML 格式的问题提交表单

### 3. 性能和稳定性改进
- 优化 429 错误处理
- 改进错误消息和用户引导
- 修复多个测试稳定性问题

### 4. 开发者体验
- 强制 Node.js 18.0.0+ 要求
- 改进的文档和故障排除指南
- 更好的错误处理和日志记录

## 迁移指南

### 对于使用 Google Workspace 账户的用户
- 不再需要选择单独的 "Login with Google Workspace" 选项
- 直接使用 "Login with Google" 登录
- 通过设置 `GOOGLE_CLOUD_PROJECT` 环境变量来指定项目

### 对于开发者
- 确保使用 Node.js 18.0.0 或更高版本
- 更新任何依赖于旧认证流程的代码
- 查看新的隐私政策文档了解数据使用政策