import Link from 'next/link';
import { Metadata } from 'next';

const posts = {
  1: {
    title: 'Hello World - 欢迎来到黑白搭档',
    excerpt: '这是黑白搭档技术博客的第一篇文章，记录学习与成长。',
    date: '2026-02-16',
    category: '随笔',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
    author: '黑白搭档',
    likes: 128,
    comments: 23,
    collects: 45,
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
    author: '黑白搭档',
    likes: 256,
    comments: 45,
    collects: 89,
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
    author: '黑白搭档',
    likes: 189,
    comments: 31,
    collects: 67,
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

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts[Number(id) as keyof typeof posts];
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-zinc-600 dark:text-zinc-400 mb-2">文章不存在</h2>
          <Link href="/" className="text-red-500 hover:text-red-600 font-medium">
            返回首页 →
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.trim().split('\n\n');

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pb-24">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-red-300/20 dark:bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-b border-white/20 dark:border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-rose-400 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-shadow duration-300">
              <span className="text-white font-bold text-base">H</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all duration-200 group">
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200 group">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Floating Category */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-red-500 shadow-lg">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 dark:border-zinc-800/50">
          {/* Author */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/30">
                H
              </div>
              <div>
                <p className="font-semibold text-zinc-800 dark:text-white">{post.author}</p>
                <p className="text-sm text-zinc-400">{post.date} · 3 min read</p>
              </div>
            </div>
            <button className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300">
              + 关注
            </button>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Stats */}
          <div className="flex items-center gap-6 py-4 border-y border-zinc-100 dark:border-zinc-800 mb-8">
            <button className="flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-red-50 dark:group-hover:bg-red-500/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <span className="font-medium">{post.collects}</span>
            </button>
            <button className="flex items-center gap-2 text-zinc-500 hover:text-green-500 transition-colors group ml-auto">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-green-50 dark:group-hover:bg-green-500/10 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <span className="font-medium">分享</span>
            </button>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none
            prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-8 prose-p:my-6
            prose-headings:font-bold prose-headings:text-zinc-800 dark:prose-headings:text-white
            prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
            prose-ul:my-6 prose-ul:pl-6 prose-ul:space-y-3
            prose-li:text-zinc-600 dark:prose-li:text-zinc-400 prose-li:leading-7
            prose-strong:text-zinc-800 dark:prose-strong:text-zinc-200
            prose-code:text-red-500 dark:prose-code:text-pink-400 prose-code:bg-red-50 dark:prose-code:bg-red-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-950 prose-pre:text-zinc-300">
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
                  <ol key={i} className="list-decimal list-inside space-y-3 my-6 pl-2">
                    {trimmed.split('\n').map((line, j) => (
                      <li key={j} className="text-zinc-600 dark:text-zinc-400 leading-7">{line.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={i}>{trimmed}</p>;
            })}
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
            <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-full hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 transition-colors cursor-pointer">
              #{post.category}
            </span>
            <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-full hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 transition-colors cursor-pointer">
              #Next.js
            </span>
            <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-full hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 transition-colors cursor-pointer">
              #Vercel
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Actions - Floating */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 px-2 py-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-full shadow-xl shadow-black/10 border border-white/20 dark:border-zinc-800/50">
          <button className="flex items-center gap-2 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50 dark:hover:bg-red-500/10">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-sm font-medium">{post.likes}</span>
          </button>
          <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700" />
          <button className="flex items-center gap-2 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/10">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm font-medium">{post.comments}</span>
          </button>
          <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700" />
          <button className="flex items-center gap-2 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors rounded-full hover:bg-amber-50 dark:hover:bg-amber-500/10">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="text-sm font-medium">收藏</span>
          </button>
          <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700" />
          <button className="flex items-center gap-2 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-green-500 transition-colors rounded-full hover:bg-green-50 dark:hover:bg-green-500/10">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-sm font-medium">分享</span>
          </button>
        </div>
      </div>

      {/* Spacer for floating bar */}
      <div className="h-20" />
    </div>
  );
}
