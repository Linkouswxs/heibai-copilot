import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黑白搭档 - 技术博客',
  description: '技术博客，记录学习与成长',
};

const posts = [
  {
    id: 1,
    title: 'Hello World - 欢迎来到黑白搭档',
    excerpt: '这是黑白搭档技术博客的第一篇文章，记录学习与成长。',
    date: '2026-02-16',
    category: '随笔',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
  },
  {
    id: 2,
    title: 'OpenClaw + 飞书 + Vercel 开发实战',
    excerpt: '记录黑白搭档博客的搭建过程，以及 AI 助手开发的心路历程。',
    date: '2026-02-15',
    category: '技术',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    id: 3,
    title: 'Vercel 部署实战指南',
    excerpt: '手把手教你将 Next.js 项目部署到 Vercel。',
    date: '2026-02-14',
    category: '教程',
    cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-24">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
            黑白搭档
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-300">
            技术博客 · 记录成长
          </p>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            探索技术，分享见解
          </p>
        </div>
      </section>

      {/* Posts */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full" />
          最新文章
        </h2>
        
        <div className="grid gap-8">
          {posts.map((post, i) => (
            <article 
              key={post.id} 
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <Link href={`/posts/${post.id}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.cover} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm mb-3">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-blue-500 font-medium text-sm">
                    阅读全文 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-zinc-500 dark:text-zinc-400">
          <p>© 2026 黑白搭档 · 技术博客</p>
        </div>
      </footer>
    </div>
  );
}
