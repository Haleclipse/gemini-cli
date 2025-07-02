import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Gemini CLI',
  description: '连接到 Google Gemini API 的命令行 AI 工作流工具',
  
  base: '/',
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Gemini CLI',
      description: '连接到 Google Gemini API 的命令行 AI 工作流工具',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/zh/guide' },
          { text: 'CLI', link: '/zh/cli/' },
          { text: '核心', link: '/zh/core/' },
          { text: '工具', link: '/zh/tools/' }
        ],
        sidebar: {
          '/zh/': [
            {
              text: '介绍',
              items: [
                { text: '首页', link: '/' },
                { text: '概览', link: '/zh/guide' },
                { text: '架构', link: '/zh/architecture' },
                { text: '部署', link: '/zh/deployment' }
              ]
            },
            {
              text: 'CLI',
              collapsed: false,
              items: [
                { text: '开始使用', link: '/zh/cli/' },
                { text: '命令', link: '/zh/cli/commands' },
                { text: '身份验证', link: '/zh/cli/authentication' },
                { text: '配置', link: '/zh/cli/configuration' },
                { text: '主题', link: '/zh/cli/themes' },
                { text: '令牌缓存', link: '/zh/cli/token-caching' },
                { text: '教程', link: '/zh/cli/tutorials' },
                { text: '卸载', link: '/zh/Uninstall' }
              ]
            },
            {
              text: '核心 API',
              collapsed: false,
              items: [
                { text: '概览', link: '/zh/core/' },
                { text: '工具 API', link: '/zh/core/tools-api' },
                { text: '内存导入处理器', link: '/zh/core/memport' }
              ]
            },
            {
              text: '工具',
              collapsed: false,
              items: [
                { text: '概览', link: '/zh/tools/' },
                { text: '文件系统', link: '/zh/tools/file-system' },
                { text: 'Shell', link: '/zh/tools/shell' },
                { text: 'Web 获取', link: '/zh/tools/web-fetch' },
                { text: 'Web 搜索', link: '/zh/tools/web-search' },
                { text: '内存', link: '/zh/tools/memory' },
                { text: '多文件', link: '/zh/tools/multi-file' },
                { text: 'MCP 服务器', link: '/zh/tools/mcp-server' }
              ]
            },
            {
              text: '高级',
              collapsed: true,
              items: [
                { text: '扩展', link: '/zh/extension' },
                { text: '沙箱', link: '/zh/sandbox' },
                { text: '检查点', link: '/zh/checkpointing' },
                { text: '遥测', link: '/zh/telemetry' },
                { text: '集成测试', link: '/zh/integration-tests' },
                { text: '故障排除', link: '/zh/troubleshooting' },
                { text: '服务条款与隐私', link: '/zh/tos-privacy' },
                { text: '配额和定价', link: '/zh/quota-and-pricing' }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Gemini CLI',
      description: 'A command-line AI workflow tool that connects to Google\'s Gemini API',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/guide' },
          { text: 'CLI', link: '/cli/' },
          { text: 'Core', link: '/core/' },
          { text: 'Tools', link: '/tools/' }
        ],
        sidebar: {
          '/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Home', link: '/en/' },
                { text: 'Overview', link: '/guide' },
                { text: 'Architecture', link: '/architecture' },
                { text: 'Deployment', link: '/deployment' }
              ]
            },
            {
              text: 'CLI',
              collapsed: false,
              items: [
                { text: 'Getting Started', link: '/cli/' },
                { text: 'Commands', link: '/cli/commands' },
                { text: 'Authentication', link: '/cli/authentication' },
                { text: 'Configuration', link: '/cli/configuration' },
                { text: 'Themes', link: '/cli/themes' },
                { text: 'Token Caching', link: '/cli/token-caching' },
                { text: 'Tutorials', link: '/cli/tutorials' },
                { text: 'Uninstall', link: '/Uninstall' }
              ]
            },
            {
              text: 'Core API',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/core/' },
                { text: 'Tools API', link: '/core/tools-api' },
                { text: 'Memory Import Processor', link: '/core/memport' }
              ]
            },
            {
              text: 'Tools',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/tools/' },
                { text: 'File System', link: '/tools/file-system' },
                { text: 'Shell', link: '/tools/shell' },
                { text: 'Web Fetch', link: '/tools/web-fetch' },
                { text: 'Web Search', link: '/tools/web-search' },
                { text: 'Memory', link: '/tools/memory' },
                { text: 'Multi-file', link: '/tools/multi-file' },
                { text: 'MCP Server', link: '/tools/mcp-server' }
              ]
            },
            {
              text: 'Advanced',
              collapsed: true,
              items: [
                { text: 'Extension', link: '/extension' },
                { text: 'Sandbox', link: '/sandbox' },
                { text: 'Checkpointing', link: '/checkpointing' },
                { text: 'Telemetry', link: '/telemetry' },
                { text: 'Integration Tests', link: '/integration-tests' },
                { text: 'Troubleshooting', link: '/troubleshooting' },
                { text: 'Terms of Service & Privacy', link: '/tos-privacy' },
                { text: 'Quotas and Pricing', link: '/quota-and-pricing' }
              ]
            }
          ]
        }
      }
    }
  },
  
  themeConfig: {
    logo: '/logo.svg',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/google-gemini/gemini-cli' }
    ],

    footer: {
      message: 'Released under the Apache License.',
      copyright: 'Copyright © 2024-present Google'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    lineNumbers: true
  },

  ignoreDeadLinks: true
})