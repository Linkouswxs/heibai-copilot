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

本博客使用 Next.js + Tailwind CSS + Vercel 搭建，是一个轻量级的技术博客。

本博客主要用于记录：
- 技术学习笔记
- 项目实践经验
- 思考与感悟

## 技术栈

- 前端框架: Next.js 16
- 样式: Tailwind CSS
- 部署平台: Vercel
- AI 助手: OpenClaw`,
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

黑白搭档是一个基于 OpenClaw 的 AI 助手，主要帮助我处理日常工作，包括：
- 课题研究平台 (wu_zk) 的开发和维护
- 小红书内容运营
- 飞书文档管理
- 各种自动化任务

## 技术架构

### 1. OpenClaw 配置
- 模型: MiniMax-M2.5
- 渠道: 飞书、Telegram
- 记忆: 向量化 + 混合搜索

### 2. MCP 工具生态
- xiaohongshu-mcp: 小红书运营
- feishu-mcp: 飞书文档操作
- claude-scientific-skills: 科研辅助

### 3. 博客搭建
- Next.js 16 + Tailwind CSS
- Vercel 部署
- 响应式设计 + 暗色模式`,
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

## 部署步骤

### 1. 准备代码
确保你的项目已经推送到 GitHub。

### 2. 导入项目
登录 Vercel，点击 Add New... -> Project，选择你的 GitHub 仓库。

### 3. 配置部署
Vercel 会自动检测 Next.js 项目，直接点击 Deploy 即可。

### 4. 完成
等待部署完成，你将获得一个免费的 HTTPS 域名。

## 常见问题

- 部署后显示默认模板：检查 GitHub 上的代码是否最新。
- 构建失败：查看 Vercel 控制台构建日志。`,
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

## 关键概念

- Server Components
- Nested Layouts
- Streaming

## 实践建议

从小页面开始迁移，优先抽离布局与数据层，逐步替换旧路由。`,
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

## 学习路线

- 基础类型与联合类型
- 泛型与工具类型
- 类型体操与实战模式`,
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

## 协作建议

- 先写清目标和约束
- 小步提交与快速验证
- 保留人工审查闭环`,
  },
];

export const categories = ['全部', '技术', '教程', '随笔', 'AI'] as const;
