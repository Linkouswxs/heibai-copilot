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

const categories = ['全部', '技术', '教程', '随笔', 'AI', '开发'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredPosts = activeCategory === '全部' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white via-40% to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Multiple gradient orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-r from-violet-400 to-indigo-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400 to-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-rose-400 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-[10%] w-4 h-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-[20%] w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-48 right-[25%] w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '1.5s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-b border-white/20 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                黑白搭档
              </span>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 -mt-0.5">技术博客</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            {/* Theme Toggle */}
            <button className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all duration-200 group">
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="sticky top-16 z-40 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border-b border-white/20 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  category === activeCategory
                    ? 'text-white'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400'
                }`}
              >
                {/* Active Background */}
                {activeCategory === cat && (
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full shadow-lg shadow-indigo-500/30 animate-in fade-in zoom-in-95 duration-200" />
                )}
                {/* Hover Background */}
                <span className={`absolute inset-0 rounded-full bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-500/10 dark:to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity ${activeCategory === cat ? 'hidden' : ''}`} />
                <span className={`relative z-10 ${activeCategory === cat ? 'text-white' : ''}`}>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <main className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <article className={`
                relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl 
                rounded-3xl overflow-hidden shadow-sm border border-white/50 dark:border-zinc-800/50
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-200/50 dark:hover:border-indigo-500/30
                hover:-translate-y-2
                ${hoveredCard === post.id ? 'ring-2 ring-indigo-400/30' : ''}
              `}>
                {/* Colorful top border gradient */}
                <div className="h-1 bg-gradient-to-r from-violet-500 via-indigo-500 via-50% to-cyan-500" />
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-indigo-500 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full animate-pulse" />
                      {post.category}
                    </span>
                  </div>

                  {/* Floating Actions */}
                  <div className={`absolute top-3 right-3 flex gap-2 transition-all duration-300 ${hoveredCard === post.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-400 hover:text-indigo-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-400 hover:text-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-zinc-800 dark:text-white leading-snug mb-2 group-hover:text-indigo-500 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-sm text-zinc-400 group-hover:text-indigo-500 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span className="font-medium">{post.likes}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-zinc-400 group-hover:text-blue-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="font-medium">{post.comments}</span>
                      </span>
                    </div>
                    {/* Read More */}
                    <span className="flex items-center gap-1 text-sm font-medium text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      Read more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" style={{ animation: 'shine 1.5s ease-in-out' }} />
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 mb-2">暂无文章</h3>
            <p className="text-zinc-400">该分类下还没有文章，敬请期待</p>
          </div>
        )}
      </main>

      {/* Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-t border-white/20 dark:border-zinc-800/50 safe-area-bottom z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-around h-16">
          <button className="flex flex-col items-center gap-1 text-indigo-500">
            <div className="relative">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.464 3.036a2.5 2.5 0 015.072 0L20 13.5l-5.322 3.636a2.5 2.5 0 01-3.232.128l-.112-.09L3.5 13.5 9.464 3.036zM21 12c0 .93-.25 1.8-.683 2.55L13 21l-2.732-1.89a2.5 2.5 0 00-3.252-.227l-.116.074 6.4 4.8a2.5 2.5 0 003.268.073l.116-.074 6.4-4.8-.116.1A2.5 2.5 0 0121 12z"/>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
            </div>
            <span className="text-[10px] font-semibold">首页</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-zinc-400 dark:text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span className="text-[10px] font-medium">分类</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-zinc-400 dark:text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
            <div className="relative">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-[8px] text-white font-bold">+</span>
              </span>
            </div>
            <span className="text-[10px] font-medium">发布</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-zinc-400 dark:text-zinc-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] font-medium">我的</span>
          </button>
        </div>
      </div>

      {/* Spacer for tab bar */}
      <div className="h-24" />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          50%, 100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
