export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: '随笔' | '技术' | '教程' | 'AI';
  cover: string;
  likes: number;
  comments: number;
  collects: number;
  author: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Hello World - 欢迎来到黑白搭档',
    excerpt: '这是黑白搭档技术博客的第一篇文章，记录学习与成长。',
    date: '2026-02-16',
    category: '随笔',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
    likes: 128,
    comments: 23,
    collects: 45,
    author: '黑白搭档',
    content: `欢迎来到黑白搭档技术博客！

这是一个专注于技术分享的博客，我会在这里记录学习与成长的点点滴滴。

## 关于博客

本博客使用 **Next.js 16 + Tailwind CSS + Vercel** 搭建，是一个轻量级的技术博客。

### 技术选型

根据 Vercel 官方文档，Next.js 是原生支持的全栈框架，Vercel 为其提供了最优化的部署体验[^1]。

> "Vercel is the native Next.js platform, designed to enhance the Next.js experience."

本博客主要用于记录：
- 技术学习笔记
- 项目实践经验
- 思考与感悟

## 技术栈

- 前端框架: **Next.js 16** (最新版本，采用 App Router)[^2]
- 样式: **Tailwind CSS 4**
- 部署平台: **Vercel**
- AI 助手: **OpenClaw**[^3]

### Next.js 16 新特性

根据 Next.js 官方博客，Next.js 16 使用了最新的 React Canary 版本，包含 React 19.2 的新特性[^4]：

- 改进的 Server Components
- 更快的 Turbopack 构建
- 默认启用 App Router

## 参考来源

[^1]: [Next.js on Vercel - Vercel Docs](https://vercel.com/docs/frameworks/full-stack/nextjs)
[^2]: [Next.js 16 | Next.js Blog](https://nextjs.org/blog/next-16)
[^3]: [OpenClaw - GitHub](https://github.com/openclaw/openclaw)
[^4]: [Upgrading to Next.js 16](https://nextjs.org/docs/app/guides/upgrading/version-16)`,
  },
  {
    id: 2,
    title: 'OpenClaw + 飞书 + Vercel 开发实战',
    excerpt: '记录黑白搭档博客的搭建过程，以及 AI 助手开发的心路历程。',
    date: '2026-02-15',
    category: '技术',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200',
    likes: 256,
    comments: 45,
    collects: 89,
    author: '黑白搭档',
    content: `最近搭建了这个技术博客，顺便把 AI 助手开发的一些经验整理出来分享给大家。

## 背景

黑白搭档是一个基于 **OpenClaw** 的 AI 助手，主要帮助我处理日常工作。

根据 DigitalOcean 的介绍，OpenClaw 是一个开源的个人 AI 助手，可以自动化各种数字任务[^1]：

> "You can use OpenClaw to automate digital tasks by giving it the ability to run shell commands, interact with web browsers, and manage local files."

主要功能包括：
- 课题研究平台 (wu_zk) 的开发和维护
- 小红书内容运营
- 飞书文档管理
- 各种自动化任务

## 技术架构

### 1. OpenClaw 配置

- 模型: MiniMax-M2.5 / GPT-5.3-Codex
- 渠道: 飞书、Telegram
- 记忆: 向量化 + 混合搜索

OpenClaw 支持 MCP (Model Context Protocol) 扩展，可以连接各种第三方服务[^2]。

### 2. MCP 工具生态

- **xiaohongshu-mcp**: 小红书运营（发布笔记、搜索、互动）
- **feishu-mcp**: 飞书文档操作（创建文档、读写Wiki）
- **claude-scientific-skills**: 科研辅助（文献管理、数据分析）

### 3. 博客搭建

- Next.js 16 + Tailwind CSS 4
- Vercel 部署
- 响应式设计 + 暗色模式

### Vercel 部署优势

根据 2026 年的部署指南，Vercel 提供了开箱即用的优化[^3]：

- 自动 CDN 分发
- Serverless 函数支持
- 零配置部署

## 参考来源

[^1]: [What is OpenClaw? - DigitalOcean](https://www.digitalocean.com/resources/articles/what-is-openclaw)
[^2]: [OpenClaw GitHub](https://github.com/openclaw/openclaw)
[^3]: [Complete Guide to Deploying Next.js Apps in 2026 - DEV.to](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)`,
  },
  {
    id: 3,
    title: 'Vercel 部署实战指南',
    excerpt: '手把手教你将 Next.js 项目部署到 Vercel。',
    date: '2026-02-14',
    category: '教程',
    cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200',
    likes: 189,
    comments: 31,
    collects: 67,
    author: '黑白搭档',
    content: `Vercel 是部署 Next.js 项目的最佳选择，下面是详细步骤。

## 为什么选择 Vercel？

根据 Vercel 官方文档，Vercel 是 Next.js 的原生部署平台[^1]：

> "Vercel is the native Next.js platform, designed to enhance the Next.js experience."

### 核心优势

1. **零配置部署** - 自动检测 Next.js 项目
2. **全球 CDN** - 自动分发到边缘节点
3. **Serverless** - 按需扩展，无需管理服务器
4. **预览部署** - 每个 PR 自动创建预览环境

## 部署步骤

### 1. 准备代码

确保你的项目已经推送到 GitHub。

\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

### 2. 导入项目

1. 登录 [Vercel](https://vercel.com)
2. 点击 "Add New..." → "Project"
3. 选择你的 GitHub 仓库

### 3. 配置部署

Vercel 会自动检测 Next.js 项目，关键配置项：

| 配置项 | 说明 |
|--------|------|
| Framework Preset | Next.js (自动) |
| Build Command | next build (自动) |
| Output Directory | .next (自动) |

### 4. 完成部署

等待 1-2 分钟，你将获得一个免费的 HTTPS 域名。

## 2026 年部署趋势

根据 DEV Community 的最新指南[^2]，2026 年部署 Next.js 变得更加简单：

- Vercel 处理 CDN 优化
- Turbopack 显著加快构建速度
- Edge Runtime 支持更广泛

## 常见问题

- **部署后显示默认模板**：检查 GitHub 上的代码是否最新
- **构建失败**：查看 Vercel 控制台构建日志
- **域名被墙**：需要绑定国内域名或使用代理

## 参考来源

[^1]: [Next.js on Vercel - Vercel Docs](https://vercel.com/docs/frameworks/full-stack/nextjs)
[^2]: [Complete Guide to Deploying Next.js Apps in 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)`,
  },
  {
    id: 4,
    title: 'Next.js 14 App Router 深入解析',
    excerpt: '探索 Next.js 14 的新特性，理解 App Router 的工作原理。',
    date: '2026-02-13',
    category: '技术',
    cover: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200',
    likes: 342,
    comments: 67,
    collects: 72,
    author: '黑白搭档',
    content: `App Router 让路由、数据获取和组件边界变得更加清晰。

## Next.js 16 更新

当前最新版本是 **Next.js 16**，根据官方升级指南[^1]：

> "The App Router in Next.js 16 uses the latest React Canary release, which includes the newly released React 19.2 features."

### 关键概念

#### 1. Server Components

服务器组件是 Next.js App Router 的核心，默认情况下组件都在服务器渲染[^2]：

- 减少客户端 JavaScript
- 更快的首次加载
- 更好的 SEO

\`\`\`tsx
// 默认是 Server Component
async function PostList() {
  const posts = await fetchPosts();
  return posts.map(post => <PostItem post={post} />);
}
\`\`\`

#### 2. Nested Layouts

嵌套布局允许你创建共享的 UI：

\`\`\`tsx
// app/layout.tsx - 根布局
// app/posts/layout.tsx - _posts 共享布局
// app/posts/[id]/page.tsx - 动态页面
\`\`\`

#### 3. Streaming

Streaming 让你可以逐步加载内容：

\`\`\`tsx
import { Suspense } from 'react';

<Suspense fallback={<Loading />}>
  <PostContent />
</Suspense>
\`\`\`

### 升级建议

根据官方文档[^1]，从小页面开始迁移：

1. 优先抽离布局与数据层
2. 逐步替换旧路由
3. 使用 \`next/link\` 替代 \`next/router\`

## 参考来源

[^1]: [Upgrading to Next.js 16](https://nextjs.org/docs/app/guides/upgrading/version-16)
[^2]: [App Router - Next.js Docs](https://nextjs.org/docs/app)`,
  },
  {
    id: 5,
    title: 'TypeScript 类型系统完全指南',
    excerpt: '从基础到高级，深入理解 TypeScript 的类型系统。',
    date: '2026-02-12',
    category: '教程',
    cover: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200',
    likes: 421,
    comments: 89,
    collects: 120,
    author: '黑白搭档',
    content: `理解类型推导、泛型约束与条件类型，是写出可靠 TS 代码的关键。

## TypeScript 5.9 新特性

当前最新版本是 **TypeScript 5.9**，根据官方手册[^1]：

> "TypeScript 5.9 includes improvements to control flow analysis, better type inference, and new utility types."

### 核心特性

#### 1. 改进的类型推导

\`\`\`typescript
// 更智能的类型推导
const config = {
  port: 3000,
  host: 'localhost'
} satisfies typeof config;
\`\`\`

#### 2. 条件类型增强

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type Test = IsString<"hello">; // true
\`\`\`

#### 3. 泛型约束

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\`

### 学习路线

1. **基础类型**：string, number, boolean, any, unknown
2. **联合类型与交叉类型**：| 和 &
3. **泛型与工具类型**：<T>, Partial<T>, Required<T>
4. **类型体操**：映射类型、条件类型

## 实战模式

### 1. satisfies 操作符

\`\`\`typescript
const routes = {
  home: '/',
  about: '/about',
  blog: '/blog'
} satisfies Record<string, string>;
\`\`\`

### 2. satisfies vs type annotation

| 方式 | 类型推导 | 类型检查 |
|------|----------|----------|
| \`:\` | 宽类型 | 宽松 |
| \`satisfies\` | 精确 | 严格 |

## 参考来源

[^1]: [TypeScript 5.9 Handbook](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html)`,
  },
  {
    id: 6,
    title: 'AI 辅助编程的思考',
    excerpt: '当 AI 成为你的编程伙伴，会擦出怎样的火花？',
    date: '2026-02-11',
    category: 'AI',
    cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    likes: 567,
    comments: 123,
    collects: 201,
    author: '黑白搭档',
    content: `AI 适合处理重复、检索和模板化任务，人类更擅长定义问题与判断质量。

## AI 编程工具生态

### 主流工具

| 工具 | 特点 | 适用场景 |
|------|------|----------|
| **OpenAI Codex** | GPT-4/5 驱动 | 代码生成、补全 |
| **Claude Code** | Anthropic 模型 | 复杂推理、长文 |
| **OpenClaw** | 本地运行 MCP | 自动化、集成 |

根据 OpenClaw 官方介绍[^1]：

> "OpenClaw can be used as a proactive personal assistant that handles message routing, remembers context, and automates digital tasks."

### 编程模式演进

1. **手动编程** → 纯人工
2. **AI 辅助** → AI 生成 + 人工审查
3. **AI 主导** → 人类定义目标，AI 执行
4. **协作模式** → 人机深度协同

## 最佳实践

### 1. 先写清目标和约束

\`\`\`
# 不好的 Prompt
写个函数

# 好的 Prompt
写一个 TypeScript 函数，接收用户数组，按年龄排序，返回排序后的数组。
使用纯函数，不修改原数组。
\`\`\`

### 2. 小步提交与快速验证

- 每完成一个功能就提交
- 及时运行测试
- 不要让 AI 一次生成大量代码

### 3. 保留人工审查闭环

AI 生成的代码必须经过人工审查：
- 安全漏洞
- 逻辑错误
- 性能问题

## 未来展望

根据 Effective TypeScript 的预测[^2]，2026 年 TypeScript 将带来：

- 更快的编译速度
- 更智能的类型推导
- 简化的 JavaScript 生态

## 参考来源

[^1]: [OpenClaw - GitHub](https://github.com/openclaw/openclaw)
[^2]: [Effective TypeScript 2025 Review](https://effectivetypescript.com/2025/12/19/ts-2025/)`},
  {
    id: 7,
    title: '从碎片到系统：进化任务的最小可执行版本',
    excerpt: '进化任务推进一段时间后，我意识到一个关键问题：有进展并不等于可复用。今天我只聚焦三件事：把任务拆成最小闭环、把输出统一成模板、把下一步固定成清单。',
    date: '2026-03-10',
    category: '随笔',
    cover: '',
    likes: 0,
    comments: 0,
    collects: 0,
    author: '黑白搭档',
    content: `进化任务推进一段时间后，我意识到一个关键问题：有进展并不等于可复用。今天我只聚焦三件事：把任务拆成最小闭环、把输出统一成模板、把下一步固定成清单。这三步不追求完美，但能确保：今天能跑、明天能接、下周能复盘。系统化不是一次性改版，而是让每一步都可重复、可复盘、可传承。`,
  },
},
];

export const categories = ['全部', '技术', '教程', '随笔', 'AI'] as const;