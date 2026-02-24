"use client";

import { useState } from 'react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Hello World - 欢迎来到黑白搭档',
    excerpt: '这是黑白搭档技术博客的第一篇文章，记录学习与成长。',
    date: '2026-02-16',
    category: '随笔',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    likes: 128,
    comments: 23,
  },
  {
    id: 2,
    title: 'OpenClaw + 飞书 + Vercel 开发实战',
    excerpt: '记录黑白搭档博客的搭建过程，以及 AI 助手开发的心路历程。',
    date: '2026-02-15',
    category: '技术',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    likes: 256,
    comments: 45,
  },
  {
    id: 3,
    title: 'Vercel 部署实战指南',
    excerpt: '手把手教你将 Next.js 项目部署到 Vercel。',
    date: '2026-02-14',
    category: '教程',
    cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    likes: 189,
    comments: 31,
  },
  {
    id: 4,
    title: 'Next.js 14 App Router 深入解析',
    excerpt: '探索 Next.js 14 的新特性，理解 App Router 的工作原理。',
    date: '2026-02-13',
    category: '技术',
    cover: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800',
    likes: 342,
    comments: 67,
  },
  {
    id: 5,
    title: 'TypeScript 类型系统完全指南',
    excerpt: '从基础到高级，深入理解 TypeScript 的类型系统。',
    date: '2026-02-12',
    category: '教程',
    cover: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    likes: 421,
    comments: 89,
  },
  {
    id: 6,
    title: 'AI 辅助编程的思考',
    excerpt: '当 AI 成为你的编程伙伴，会擦出怎样的火花？',
    date: '2026-02-11',
    category: 'AI',
    cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    likes: 567,
    comments: 123,
  },
];

const categories = ['全部', '技术', '教程', '随笔', 'AI'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredPosts = activeCategory === '全部' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-zinc-900 font-bold text-lg">H</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                黑白搭档
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">技术博客</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group block"
            >
              <article className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm">
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-400">·</span>
                    <span className="text-xs text-zinc-500">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500">暂无文章</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-zinc-500">
          <p>© 2026 黑白搭档 · 技术博客</p>
        </div>
      </footer>
    </div>
  );
}
