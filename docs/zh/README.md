# Gemini CLI 文档

本目录包含使用 VitePress 构建的文档站点。

## 开发

```bash
# 安装依赖
npm ci

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产构建
npm run docs:preview
```

## 文档结构

- `/zh/` - 中文文档
- `/en/` - 英文文档（如果存在）
- 根目录 - 默认文档（中文）

## 贡献

在修改文档时，请确保：

1. 保持中英文文档同步
2. 使用一致的术语翻译
3. 遵循现有的文档格式

## 构建

文档使用 VitePress 构建，支持：

- 双语导航
- 自动生成侧边栏
- 代码高亮
- 主题切换