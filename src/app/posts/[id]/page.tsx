import Link from 'next/link';
import { Metadata } from 'next';

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

本博客主要用于记录：
- 技术学习笔记
- 项目实践经验
- 思考与感悟

期待与大家一起交流学习！`,
  },
  2: {
    title: 'Next.js 16 新特性解析',
    excerpt: '探索 Next.js 16 的最新功能，包括 Turbopack、服务器组件等。',
    date: '2026-02-15',
    category: '技术',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200',
    content: `Next.js 16 带来了许多令人兴奋的新特性，让我们一起来看看。

## Turbopack

Turbopack 是 Vercel 推出的新一代打包工具，比 Webpack 快 10 倍。它使用 Rust 编写，专门针对 Next.js 进行了优化。

### 主要特点
- 极速编译
- 智能缓存
- 实时刷新

## 服务器组件

服务器组件让你可以在服务器上渲染组件，减少客户端 JavaScript 体积。`,
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
登录 Vercel，点击 "Add New..." -> "Project"，选择你的 GitHub 仓库。

### 3. 配置部署
Vercel 会自动检测 Next.js 项目，直接点击 Deploy 即可。

### 4. 完成！
等待部署完成，你将获得一个免费的 HTTPS 域名。`,
  },
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = posts[Number(params.id) as keyof typeof posts];
  if (!post) return { title: '文章不存在' };
  return {
    title: `${post.title} - 黑白搭档`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts[Number(params.id) as keyof typeof posts];
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <p className="text-zinc-500">文章不存在</p>
      </div>
    );
  }

  const paragraphs = post.content.trim().split('\n\n');

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={post.cover} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-4 text-sm"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
          <div className="flex items-center gap-3 text-sm text-white/70 mb-3">
            <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {paragraphs.map((para, i) => {
            const trimmed = para.trim();
            if (trimmed.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-semibold mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
            }
            if (trimmed.startsWith('- ')) {
              return (
                <ul key={i} className="list-disc list-inside space-y-1 my-4">
                  {trimmed.split('\n').map((line, j) => (
                    <li key={j} className="text-zinc-700 dark:text-zinc-300">{line.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i} className="text-zinc-700 dark:text-zinc-300 leading-relaxed my-4">{trimmed}</p>;
          })}
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-zinc-500 dark:text-zinc-400">
          <p>© 2026 黑白搭档 · 技术博客</p>
        </div>
      </footer>
    </div>
  );
}
