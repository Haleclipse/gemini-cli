本文档总结了从我们的分叉开始到最新上游主分支的所有更改。

## Update History

### 2025-07-07 Update
- **Commit Range**: 39d4095a..a4097ae6
- **New Commits**: 22
- **Version**: v0.1.9

### 2025-07-06 Update
- **Commit Range**: 8adc5869..39d4095a
- **New Commits**: 9
- **Version**: v0.1.9

### 2025-07-05 Update
- **Commit Range**: ef736f0d..8adc5869
- **New Commits**: 11
- **Version**: v0.1.9

### 2025-07-04 Update
- **Commit Range**: 85a1d814..ef736f0d
- **New Commits**: 11
- **Version**: v0.1.9

### 2025-07-03 Update
- **Commit Range**: 08ce78a1..85a1d814
- **New Commits**: 5
- **Version**: v0.1.9

### 2025-07-02 Update
- **Commit Range**: 58b14b7c..cd069fd4
- **New Commits**: 13
- **Version**: v0.1.7 → v0.1.9

### 2025-07-01 Update
- **Commit Range**: 5c4c833d..58b14b7c
- **New Commits**: 17
- **Version**: v0.1.7

### 2025-06-30 Update
- **Commit Range**: 4e8a6400..5c4c833d
- **New Commits**: 22
- **Version**: v0.1.7

### 2025-06-29 Update
- **Commit Range**: ad7839ea..fc21d1ca
- **New Commits**: 15
- **Version**: v0.1.7

### 2025-06-28 Update
- **Commit Range**: 6742a1b7..ad7839ea
- **New Commits**: 19
- **Version**: v0.1.5 → v0.1.7

### 2025-06-27 Update
- **Commit Range**: c55b15f7..6742a1b7
- **New Commits**: 5

### 2025-06-26 Initial Sync
- **Version**: 0.1.1 → 0.1.5
- **Commit Range**: 05b9b9ab..c55b15f7
- **Total Commits**: 30

## Latest Changes（2025-07-07）

### 🔧 MCP 改进和认证增强
- **[#3489](https://github.com/google-gemini/gemini-cli/pull/3489)** - 📦 发布和打包清理
- **[#3070](https://github.com/google-gemini/gemini-cli/pull/3070)** - 🔐 **Cloud Shell 支持**: 让 Gemini CLI 在 Cloud Shell 中重用用户认证
- **[#3060](https://github.com/google-gemini/gemini-cli/pull/3060)** - 📝 Update README 显示 Vertex 的 API 密钥使用
- **[#3483](https://github.com/google-gemini/gemini-cli/pull/3483)** - 🚀 在启动时初始化 MCP 工具，而非每次认证时
- **[#3469](https://github.com/google-gemini/gemini-cli/pull/3469)** - 🔧 重命名 allowed_mcp_server_names 为 allowed-mcp-server-names
- **[#3464](https://github.com/google-gemini/gemini-cli/pull/3464)** - 🔧 添加 --allowed_mcp_server_names 标志
- **[#2976](https://github.com/google-gemini/gemini-cli/pull/2976)** - 🔧 为 mcpServers 配置添加 excludeTools 和 includeTools
- **[#3175](https://github.com/google-gemini/gemini-cli/pull/3175)** - 💫 **斜杠命令重构**: 重构斜杠命令 + 未来愿景

### 🐛 修复和改进
- **[#3493](https://github.com/google-gemini/gemini-cli/pull/3493)** - 🐛 修复认证对话框中的双 "esc" 错误
- **[#3491](https://github.com/google-gemini/gemini-cli/pull/3491)** - 📝 修复拼写错误并添加认证验证测试
- **[#2919](https://github.com/google-gemini/gemini-cli/pull/2919)** - 🔧 防止 Tab 自动执行不完整的斜杠命令
- **[#3043](https://github.com/google-gemini/gemini-cli/pull/3043)** - 🐛 修复 EditTool 可能覆盖同一文件的人工编辑
- **[#3360](https://github.com/google-gemini/gemini-cli/pull/3360)** - 🔧 重新启用 shell 工具中的反引号使用
- **[#3229](https://github.com/google-gemini/gemini-cli/pull/3229)** - 🎨 添加 .svg 支持
- **[#3387](https://github.com/google-gemini/gemini-cli/pull/3387)** - 🐛 @file 不遵守 config respectGitIgnore=false
- **[#3362](https://github.com/google-gemini/gemini-cli/pull/3362)** - 🐛 修复表格标题和行的嵌套 markdown 渲染
- **[#3416](https://github.com/google-gemini/gemini-cli/pull/3416)** - 🔧 在 settings.json 变量替换中遵守 .env 的环境变量
- **[#3349](https://github.com/google-gemini/gemini-cli/pull/3349)** - 📝 改进 isCommandAllowed 中的错误消息

### 🎯 New Features和重要修复（2025-07-06）
- **[#3367](https://github.com/google-gemini/gemini-cli/pull/3367)** - 🚀 **YOLO模式**: 在 /help 中显示 YOLO 模式快捷键
- **[#3056](https://github.com/google-gemini/gemini-cli/pull/3056)** - ⚠️ 添加用户启动警告和主目录检查
- **[#3339](https://github.com/google-gemini/gemini-cli/pull/3339)** - 📦 Update @google/genai 到 1.8.0
- **[#2883](https://github.com/google-gemini/gemini-cli/pull/2883)** - 🔧 处理工具调度器中的内联内容修改
- **[#2932](https://github.com/google-gemini/gemini-cli/pull/2932)** - 🐛 修复 #2922: 防止在 shell 模式中 @ 连接到有效路径
- **[#3300](https://github.com/google-gemini/gemini-cli/pull/3300)** - 🔧 清理工具参数以修复 400 API 错误
- **[#3335](https://github.com/google-gemini/gemini-cli/pull/3335)** - 🧹 清理发布提示
- **[#3321](https://github.com/google-gemini/gemini-cli/pull/3321)** - 📦 发布：清理和精简
- **[#3333](https://github.com/google-gemini/gemini-cli/pull/3333)** - 🐛 分组取消的工具调用响应以防止 API 错误

### 🚀 Node.js 20 升级和发布改进（2025-07-05）
- **[#3277](https://github.com/google-gemini/gemini-cli/pull/3277)** - 📦 **重要**: Update最低 Node.js 版本要求到 20
- **[#3247](https://github.com/google-gemini/gemini-cli/pull/3247)** - 📝 Update README 要求 Node.js 20+
- **[#3264](https://github.com/google-gemini/gemini-cli/pull/3264)** - 🔏 签名夜间发布提交
- **[#3254](https://github.com/google-gemini/gemini-cli/pull/3254)** - 🔏 签名标签
- **[#3206](https://github.com/google-gemini/gemini-cli/pull/3206)** - 📦 夜间发布标签格式化
- **[#3285](https://github.com/google-gemini/gemini-cli/pull/3285)** - 🔧 添加 nohup 支持
- **[#3183](https://github.com/google-gemini/gemini-cli/pull/3183)** - 📝 修复小拼写错误
- **[#3284](https://github.com/google-gemini/gemini-cli/pull/3284)** - 📝 修复多个文件中的拼写错误
- **[#3203](https://github.com/google-gemini/gemini-cli/pull/3203)** - 📝 修复拼写错误
- **[#2862](https://github.com/google-gemini/gemini-cli/pull/2862)** - 📝 修复 deployment.md 中的命令使用问题
- **[#3167](https://github.com/google-gemini/gemini-cli/pull/3167)** - 🔧 Update问题模板使用 GitHub alert

### 🚀 发布自动化和技术改进（2025-07-04）
- **[#3204](https://github.com/google-gemini/gemini-cli/pull/3204)** - 📦 新增夜间发布标签格式化
- **[#3202](https://github.com/google-gemini/gemini-cli/pull/3202)** - 🔧 修复夜间发布标签
- **[#2852](https://github.com/google-gemini/gemini-cli/pull/2852)** - 🚀 添加发布自动化流程和GitHub Actions
- **[#2652](https://github.com/google-gemini/gemini-cli/pull/2652)** - 🧮 重构文本缓冲区使用reducer模式
- **[#3128](https://github.com/google-gemini/gemini-cli/pull/3128)** - 📝 为核心工具方法添加和改进JSDoc注释
- **[#3147](https://github.com/google-gemini/gemini-cli/pull/3147)** - 🆔 修复Google用户ID传递给Clearcut
- **[#2118](https://github.com/google-gemini/gemini-cli/pull/2118)** - ⚙️ 修复客户端在flashFallbackHandler中获取模型配置
- **[#2491](https://github.com/google-gemini/gemini-cli/pull/2491)** - 🎯 显示Ctrl+S快捷键展开调试控制台
- **[#3100](https://github.com/google-gemini/gemini-cli/pull/3100)** - 🎨 修复ANSI主题蓝色显示
- **[#2781](https://github.com/google-gemini/gemini-cli/pull/2781)** - 🧹 移除不必要的空白字符
- **[#2722](https://github.com/google-gemini/gemini-cli/pull/2722)** - 📝 修复CONTRIBUTING.md中的拼写错误

### 🎯 UI和工作流改进（2025-07-03）
- **[#3082](https://github.com/google-gemini/gemini-cli/pull/3082)**, **[#3062](https://github.com/google-gemini/gemini-cli/pull/3062)** - 🔄 新增自动化PR分类工作流
- **[#3061](https://github.com/google-gemini/gemini-cli/pull/3061)** - 📝 修复README中的拼写错误
- **[#3035](https://github.com/google-gemini/gemini-cli/pull/3035)** - 🔔 Update通知模板
- **[#2892](https://github.com/google-gemini/gemini-cli/pull/2892)** - ⌨️ 添加Shift+Tab快捷键提示

### 🎉 版本发布 v0.1.9（2025-07-02）

#### 重大功能Update
- **[#2556](https://github.com/google-gemini/gemini-cli/pull/2556)** - 🎵 **多媒体支持**: 为 read_file 添加音频和视频支持
- **[#2793](https://github.com/google-gemini/gemini-cli/pull/2793)** - 🔄 **无限循环保护**: 为客户端添加无限循环保护机制
- **[#2886](https://github.com/google-gemini/gemini-cli/pull/2886)** - 🆔 **会话支持**: 在 API 调用中添加 session_id 支持
- **[#2853](https://github.com/google-gemini/gemini-cli/pull/2853)** - 🛠️ **扩展增强**: 为扩展添加 excludedTools 功能

#### 用户体验改进
- **[#2904](https://github.com/google-gemini/gemini-cli/pull/2904)** - 🏷️ `/chat` 命令现在需要必填标签
- **[#2776](https://github.com/google-gemini/gemini-cli/pull/2776)** - 💬 改进斜杠命令自动完成逻辑
- **[#2898](https://github.com/google-gemini/gemini-cli/pull/2898)** - 🗜️ 降低历史记录压缩的阈值

#### Bug Fixes
- **[#2504](https://github.com/google-gemini/gemini-cli/pull/2504)** - 🐛 修复文本缓冲区中字符丢失的问题
- **[#2902](https://github.com/google-gemini/gemini-cli/pull/2902)** - 📝 为 TypeScript 文件特殊处理 MIME 类型

#### Documentation
- **[#2894](https://github.com/google-gemini/gemini-cli/pull/2894)** - 📖 **新文档**: 添加详细说明配额和成本信息的页面
- **[#2729](https://github.com/google-gemini/gemini-cli/pull/2729)** - 📝 Update README.md

#### 其他改进
- **[#2906](https://github.com/google-gemini/gemini-cli/pull/2906)** - 📦 升级版本到 0.1.9
- **[#2860](https://github.com/google-gemini/gemini-cli/pull/2860)** - 🔧 在 gemini.tsx 中使用常量占位符替代 ".gemini/settings.json"

## 之前的更改（2025-07-01）

### New Features和改进
- **[#2855](https://github.com/google-gemini/gemini-cli/pull/2855)** - 🎯 添加每周社区报告工作流
- **[#1955](https://github.com/google-gemini/gemini-cli/pull/1955)** - 📊 添加 Markdown 表格渲染支持
- **[#2771](https://github.com/google-gemini/gemini-cli/pull/2771)** - ✨ 重构退出统计显示界面
- **[#2747](https://github.com/google-gemini/gemini-cli/pull/2747)** - 🗜️ 使用结构化提示进行压缩

### 身份验证和认证改进
- **[#2769](https://github.com/google-gemini/gemini-cli/pull/2769)** - 🔧 重命名 AuthType：LOGIN_WITH_GOOGLE_PERSONAL → LOGIN_WITH_GOOGLE
- **[#2402](https://github.com/google-gemini/gemini-cli/pull/2402)** - 📝 澄清环境文件发现机制和推荐配置

### Bug 修复
- **[#2794](https://github.com/google-gemini/gemini-cli/pull/2794)** - 🐛 修复 Ink6 + React19 迁移导致的 MaxSizedBox 无效子元素日志问题
- **[#1990](https://github.com/google-gemini/gemini-cli/pull/1990)** - 🔧 使清理脚本跨平台兼容
- **[#2762](https://github.com/google-gemini/gemini-cli/pull/2762)** - 🔗 在文档中使用 HTTPS 并修复故障排除指南格式错误
- **[#2712](https://github.com/google-gemini/gemini-cli/pull/2712)** - 🔧 修复 CODE_ASSIST_ENDPOINT 环境变量

### 工作流和自动化改进
- **[#2778](https://github.com/google-gemini/gemini-cli/pull/2778)** - 🤖 改进自动化问题分类工作流
- **[#2759](https://github.com/google-gemini/gemini-cli/pull/2759)** - 🔧 在分类工作流中使用预览版本的 gemini-cli
- **[#2749](https://github.com/google-gemini/gemini-cli/pull/2749)** - 📋 向自动分类工作流添加问题列表命令
- **[#2746](https://github.com/google-gemini/gemini-cli/pull/2746)** - 🔄 将问题分类分离为两个工作流

### 代码清理和优化
- **[#2772](https://github.com/google-gemini/gemini-cli/pull/2772)** - 📦 Update检查和测试优化
- **[#2721](https://github.com/google-gemini/gemini-cli/pull/2721)** - 🧹 移除未使用的方法
- **[#2761](https://github.com/google-gemini/gemini-cli/pull/2761)** - 🧹 移除 gaia id 日志记录的回退逻辑

## 之前的更改（2025-06-30）

### 主要功能Update
- **[#2709](https://github.com/google-gemini/gemini-cli/pull/2709)** - 🔐 修复 OAuth 凭证缓存问题
- **[#2653](https://github.com/google-gemini/gemini-cli/pull/2653)** - 🛠️ 为 shell 命令启用前缀匹配以实现灵活的命令验证
- **[#2615](https://github.com/google-gemini/gemini-cli/pull/2615)** - 📊 改进 /stats 命令显示更详细的统计信息
- **[#2477](https://github.com/google-gemini/gemini-cli/pull/2477)** - 🌐 添加对远程 MCP 服务器自定义 HTTP 头的支持
- **[#1524](https://github.com/google-gemini/gemini-cli/pull/1524)** - 💡 添加 hideTips 设置选项

### 用户界面改进
- **[#2507](https://github.com/google-gemini/gemini-cli/pull/2507)** - ✨ 高亮显示之前的用户输入
- **[#2043](https://github.com/google-gemini/gemini-cli/pull/2043)** - 🔧 修复不同操作系统的换行键组合显示
- **[#2230](https://github.com/google-gemini/gemini-cli/pull/2230)** - 📝 模块化 GEMINI.md 导入功能（@file.md 语法）

### 安全与配置
- **[#2605](https://github.com/google-gemini/gemini-cli/pull/2605)** - 🔧 允许对 ShellTool 进行特定命令限制
- **[#2572](https://github.com/google-gemini/gemini-cli/pull/2572)** - 📄 添加 .editorconfig 配置文件

### 文档Update
- **[#1985](https://github.com/google-gemini/gemini-cli/pull/1985)** - 📖 添加卸载说明到 README
- **[#1448](https://github.com/google-gemini/gemini-cli/pull/1448)** - 🎨 添加 Neovim 编辑器支持
- **[#2495](https://github.com/google-gemini/gemini-cli/pull/2495)** - 📝 澄清 .gemini/config.yaml 是用于 PR 审查机器人（非 CLI）
- **[#2592](https://github.com/google-gemini/gemini-cli/pull/2592)** - 🔧 修复认证设置文档标题问题

### Bug 修复与优化
- **[#2463](https://github.com/google-gemini/gemini-cli/pull/2463)** - 🔧 修复 EditTool 中出现次数的复数形式
- **[#1875](https://github.com/google-gemini/gemini-cli/pull/1875)** - 🛠️ 修复 clearcut-logger.ts 中的事件名称
- **[#2574](https://github.com/google-gemini/gemini-cli/pull/2574)** - 🔄 重构：移除不必要的 "await"
- **[#2579](https://github.com/google-gemini/gemini-cli/pull/2579)** - 🔄 重构：移除不必要的断言
- **[#1846](https://github.com/google-gemini/gemini-cli/pull/1846)** - 🔄 重构：移除重复导入
- **[#1840](https://github.com/google-gemini/gemini-cli/pull/1840)** - 🔄 重构：使用 for...of 循环替代传统 for 循环

## 之前的更改（2025-06-29）

### New Features和增强
- **[#2114](https://github.com/google-gemini/gemini-cli/pull/2114)** - 📦 新增：Shades of Purple 主题
- **[#2299](https://github.com/google-gemini/gemini-cli/pull/2299)** - ✨ 新增：VSCodium 编辑器支持
- **[#2527](https://github.com/google-gemini/gemini-cli/pull/2527)** - 🔧 修复：在错误状态下按 Esc 退出隐私屏幕

### Bug 修复和改进
- **[#2030](https://github.com/google-gemini/gemini-cli/pull/2030)** - 🛠️ 移除：删除不可操作但数量众多的调试日志
- **[#2478](https://github.com/google-gemini/gemini-cli/pull/2478)** - 🔧 修复："修改流程"临时文件的文件扩展名
- **[#2306](https://github.com/google-gemini/gemini-cli/pull/2306)** - 🔧 修复：编辑重新触发
- **[#2344](https://github.com/google-gemini/gemini-cli/pull/2344)** - 🔧 chore：为 grep 工具中的匹配添加适当的复数处理

### 文档Update
- **[#2459](https://github.com/google-gemini/gemini-cli/pull/2459)** - 📝 文档：修复拼写错误和语法错误
- **[#1790](https://github.com/google-gemini/gemini-cli/pull/1790)** - 📝 文档：删除 file-system.md 中的重复工具描述
- **[#2229](https://github.com/google-gemini/gemini-cli/pull/2229)** - 📝 添加：关于 CI 环境变量的故障排除说明
- **[#1487](https://github.com/google-gemini/gemini-cli/pull/1487)** - 📝 修复：纠正 create_alias.sh 中的启动脚本引用

### 开发和工作流改进
- **[#2496](https://github.com/google-gemini/gemini-cli/pull/2496)** - 🔧 chore(gha)：将问题分类工作流固定到特定提交
- **[#2254](https://github.com/google-gemini/gemini-cli/pull/2254)** - 🔄 重新启用：Gemini Code Assist PR 审查机器人
- **[#1709](https://github.com/google-gemini/gemini-cli/pull/1709)** - 🔧 内联：在源代码中内联 shell 工具的描述和架构

## 之前的更改（2025-06-28）

### 主要版本Update

#### 重大技术升级
- **[#2096](https://github.com/google-gemini/gemini-cli/pull/2096)** - **重大更改**: 升级至 Ink 6 和 React 19
  - 这是一个重大技术栈升级，可能影响性能和兼容性

#### New Features
- **[#2059](https://github.com/google-gemini/gemini-cli/pull/2059)** - 添加隐私声明斜杠命令
- **[#1972](https://github.com/google-gemini/gemini-cli/pull/1972)** - 处理输入提示的 stdin，使用 readline 进行转义字符解析
- **[#2130](https://github.com/google-gemini/gemini-cli/pull/2130)** - Update认证标签以包含 AI Studio
- **[#2112](https://github.com/google-gemini/gemini-cli/pull/2112)** - 在 about 消息中添加当前认证方法和 GCP 项目配置
- **[#2310](https://github.com/google-gemini/gemini-cli/pull/2310)** - 使用 Gemini CLI 添加问题分类
- **[#1152](https://github.com/google-gemini/gemini-cli/pull/1152)** - 为保存的检查点文件使用 2 空格缩进 (#1977)

#### Bug Fixes和改进
- **[#2304](https://github.com/google-gemini/gemini-cli/pull/2304)** - 在工具调用不正确的情况下Update错误处理
- **[#2302](https://github.com/google-gemini/gemini-cli/pull/2302)** - 修复：添加缺失的 gaxios 依赖
- **[#2246](https://github.com/google-gemini/gemini-cli/pull/2246)** - 修复循环依赖
- **[#1961](https://github.com/google-gemini/gemini-cli/pull/1961)** - 优化回退消息，提供更多选项
- **[#2029](https://github.com/google-gemini/gemini-cli/pull/2029)** - 进一步明确需要项目 ID 的情况
- **[#2239](https://github.com/google-gemini/gemini-cli/pull/2239)** - 静默 dotenv 日志消息

#### 版本Update
- **[#2308](https://github.com/google-gemini/gemini-cli/pull/2308)** - chore: 升级到 0.1.8
- **[#2285](https://github.com/google-gemini/gemini-cli/pull/2285)** - chore: 升级到 0.1.6

#### 文档和修复
- **[#1629](https://github.com/google-gemini/gemini-cli/pull/1629)** - 修复拼写错误
- **[#1555](https://github.com/google-gemini/gemini-cli/pull/1555)** - chore: 修复 mcp-client 中的拼写错误
- **[#2314](https://github.com/google-gemini/gemini-cli/pull/2314)** - 改进分类提示
- **[#1480](https://github.com/google-gemini/gemini-cli/pull/1480)** - 修复拼写错误和格式问题

## 之前的更改（2025-06-27）

### 2025-06-26(New)

#### Features
- **[#2019](https://github.com/google-gemini/gemini-cli/pull/2019)** - 为缺少子命令的情况添加明确的错误消息
- **[#2037](https://github.com/google-gemini/gemini-cli/pull/2037)** - Update首次用户消息以提及产品名称（Gemini CLI）

#### Bug Fixes
- **[#1983](https://github.com/google-gemini/gemini-cli/pull/1983)** - **回滚**: 撤销 "feat: Add model selection logic (#1678)"
  - 撤销了之前的模型自动选择功能

#### Development
- **[#2032](https://github.com/google-gemini/gemini-cli/pull/2032)** - 在 package.json 文件中添加 repository 字段
- **[#2052](https://github.com/google-gemini/gemini-cli/pull/2052)** - 添加 prepublishOnly 检查

## Initial Sync Changes（2025-06-26）

### 2025-06-25

#### Features
- **[#1527](https://github.com/google-gemini/gemini-cli/pull/1527)** - 改进模型回退消息，使其更准确反映实际情况
- **[#1574](https://github.com/google-gemini/gemini-cli/pull/1574)** - **重大更改**: 将 "Login with Google Workspace" 合并到 "Login with Google"
- **[#1595](https://github.com/google-gemini/gemini-cli/pull/1595)** - 提示用户在创建新问题前搜索现有问题
- **[#1608](https://github.com/google-gemini/gemini-cli/pull/1608)** - 使用 YAML 表单简化问题提交流程
- **[#1653](https://github.com/google-gemini/gemini-cli/pull/1653)** - 修复检查点恢复时的历史记录问题

#### Bug Fixes
- **[#1405](https://github.com/google-gemini/gemini-cli/pull/1405)** - 修复不稳定的测试
- **[#1579](https://github.com/google-gemini/gemini-cli/pull/1579)** - OAuth 用户的 429 错误重试次数从 3 次减少到 2 次
- **[#1668](https://github.com/google-gemini/gemini-cli/pull/1668)** - 修复 429 错误处理机制
- **[#1688](https://github.com/google-gemini/gemini-cli/pull/1688)** - 修复认证对话框中的文档链接
- **[#1752](https://github.com/google-gemini/gemini-cli/pull/1752)** - 添加 Node.js 版本检查（要求 18.0.0+）

#### Documentation
- **[#1501](https://github.com/google-gemini/gemini-cli/pull/1501)** - 在 bug 报告模板中添加登录方法信息
- **[#1534](https://github.com/google-gemini/gemini-cli/pull/1534)** - 修复检查点文档中的配置说明
- **[#1571](https://github.com/google-gemini/gemini-cli/pull/1571)** - **新增**: 服务条款和隐私政策文档
- **[#1625](https://github.com/google-gemini/gemini-cli/pull/1625)** - Update文档并添加 FAQ 部分
- **[#1632](https://github.com/google-gemini/gemini-cli/pull/1632)** - Update README.md
- **[#1636](https://github.com/google-gemini/gemini-cli/pull/1636)** - Update使用统计文档
- **[#1664](https://github.com/google-gemini/gemini-cli/pull/1664)** - Update LICENSE 文件

#### Other
- **[#1578](https://github.com/google-gemini/gemini-cli/pull/1578)** - 对提示进行小的样式调整

### 2025-06-26

#### Features
- **[#1645](https://github.com/google-gemini/gemini-cli/pull/1645)** - 改进 LoadCodeAssist 错误处理
- **[#1678](https://github.com/google-gemini/gemini-cli/pull/1678)** - **New Features**: 添加智能模型选择逻辑（Pro/Flash 自动切换）
- **[#1697](https://github.com/google-gemini/gemini-cli/pull/1697)** - 添加发布触发器配置

#### Bug Fixes
- **[#1451](https://github.com/google-gemini/gemini-cli/pull/1451)** - 添加登录问题的故障排除说明
- **[#1488](https://github.com/google-gemini/gemini-cli/pull/1488)** - 修复 npx 命令中的 GitHub 仓库 URL
- **[#1557](https://github.com/google-gemini/gemini-cli/pull/1557)** - 修复 ClearcutLogger 中的 Promise 拒绝处理
- **[#1739](https://github.com/google-gemini/gemini-cli/pull/1739)** - 移除测试中不必要的 mock
- **[#1780](https://github.com/google-gemini/gemini-cli/pull/1780)** - 修复主题文档中的断链

#### Documentation
- **[#1681](https://github.com/google-gemini/gemini-cli/pull/1681)** - Update geminiChat.ts 注释
- **[#1781](https://github.com/google-gemini/gemini-cli/pull/1781)** - 修复文档中的多个拼写错误

#### Other
- **[#1540](https://github.com/google-gemini/gemini-cli/pull/1540)** - 修复注释中的拼写错误
- **[#1731](https://github.com/google-gemini/gemini-cli/pull/1731)** - **版本升级**: 0.1.5

## Summary of Important Changes

### Latest Update（2025-06-27）
- **模型选择功能已回滚** - 之前添加的自动模型切换功能被撤销
- **改进用户体验** - 添加了更清晰的错误消息和产品名称提示
- **开发流程改进** - 添加了发布前检查和 repository 字段

### Initial Sync（2025-06-26）

#### 1. Breaking Changes
- 认证流程简化：移除了单独的 "Login with Google Workspace" 选项

#### 2. New Features
- ~~智能模型选择：自动在 Gemini Pro 和 Flash 之间切换~~(Reverted on $1)
- 服务条款和隐私政策文档
- YAML 格式的问题提交表单

### 3. Performance & Stability
- 优化 429 错误处理
- 改进错误消息和用户引导
- 修复多个测试稳定性问题

### 4. Developer Experience
- 强制 Node.js 18.0.0+ 要求
- 改进的文档和故障排除指南
- 更好的错误处理和日志记录

## Migration Guide

### For Google Workspace Users
- 不再需要选择单独的 "Login with Google Workspace" 选项
- 直接使用 "Login with Google" 登录
- 通过设置 `GOOGLE_CLOUD_PROJECT` 环境变量来指定项目

### For Developers
- 确保使用 Node.js 18.0.0 或更高版本
- Update任何依赖于旧认证流程的代码
- 查看新的隐私政策文档了解数据使用政策