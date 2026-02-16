import Link from 'next/link';
import { Metadata } from 'next';
import { use } from 'react';

const posts = {
  1: {
    title: 'Hello World - 欢迎来到黑白搭档',
    excerpt: '这是黑白搭档技术博客的第一篇文章，记录学习与成长。',
    date: '2026-02-16',
    category: '随笔',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
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
- AI 助手: OpenClaw

期待与大家一起交流学习！`,
  },
  2: {
    title: 'OpenClaw + 飞书 + Vercel 开发实战',
    excerpt: '记录黑白搭档博客的搭建过程，以及 AI 助手开发的心路历程。',
    date: '2026-02-15',
    category: '技术',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200',
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
- 响应式设计 + 暗色模式

## 经验总结

1. 异步操作处理: MCP 工具调用时，异步操作可能不返回确认，需要去应用层验证结果
2. 幂等性设计: 重要操作要考虑重复执行的场景
3. 监控告警: 定期检查服务状态，及时发现问题

## 下一步计划

- 添加博客分类和标签功能
- 支持 Markdown 文章
- 增加评论功能

如果你也有类似的 AI 助手开发经验，欢迎交流！`,
  },
  3: {
    title: 'Vercel 部署实战指南',
    excerpt: '手把手教你将 Next.js 项目部署到 Vercel。',
    date: '2026-02-14',
    category: '教程',
    cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200',
    content: `Vercel 是部署 Next.js 项目的最佳选择，下面是详细步骤。

## 部署步骤

### 1. 准备代码
确保你的项目已经推送到 GitHub。

### 2. 导入项目
登录 Vercel，点击 Add New... -> Project，选择你的 GitHub 仓库。

### 3. 配置部署
Vercel 会自动检测 Next.js 项目，直接点击 Deploy 即可。

### 4. 完成！
等待部署完成，你将获得一个免费的 HTTPS 域名。

## 使用 Vercel CLI 部署

如果你想通过命令行部署：

1. 安装 Vercel CLI: npm i -g vercel
2. 登录: vercel login
3. 链接项目: vercel link
4. 部署到生产环境: vercel --prod

## 注意事项

- 免费套餐每月 100GB 流量
- 支持自定义域名
- 自动配置 HTTPS
- 支持环境变量配置

## 常见问题

部署后显示默认模板: 检查 GitHub 上的代码是否是最新的，确保已经 push 到远程仓库

构建失败: 查看 Vercel 控制台的构建日志，通常是依赖或配置问题`,
  },
};

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = posts[Number(id) as keyof typeof posts];
  if (!post) return { title: '文章不存在' };
  return {
    title: `${post.title} - 黑白搭档`,
    description: post.excerpt,
  };
}

function PostContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = posts[Number(id) as keyof typeof posts];
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <p className="text-zinc-500">文章不存在</p>
      </div>
    );
  }

  const paragraphs = post.content.trim().split('\n\n');

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Hero */}
      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <img 
          src={post.cover} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white mb-5 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-md border border-white/20">
              {post.category}
            </span>
            <span className="text-zinc-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-14">
        <article className="prose prose-zinc dark:prose-invert max-w-none 
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-zinc-900 dark:prose-h2:text-white
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-zinc-800 dark:prose-h3:text-zinc-200
          prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-7 prose-p:my-4
          prose-ul:my-4 prose-ul:pl-5 prose-ul:space-y-1.5
          prose-li:text-zinc-600 dark:prose-li:text-zinc-400
          prose-strong:text-zinc-800 dark:prose-strong:text-zinc-200
          prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline">
          {paragraphs.map((para, i) => {
            const trimmed = para.trim();
            if (trimmed.startsWith('## ')) {
              return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
            }
            if (trimmed.startsWith('- ')) {
              return (
                <ul key={i}>
                  {trimmed.split('\n').map((line, j) => (
                    <li key={j}>{line.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            if (trimmed.match(/^\d+\./)) {
              return (
                <ol key={i} className="list-decimal list-inside space-y-2 my-4 pl-2">
                  {trimmed.split('\n').map((line, j) => (
                    <li key={j} className="text-zinc-600 dark:text-zinc-400">{line.replace(/^\d+\.\s*/, '')}</li>
                  ))}
                </ol>
              );
            }
            return <p key={i}>{trimmed}</p>;
          })}
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 黑白搭档 · 技术博客
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  return <PostContent params={params} />;
}
