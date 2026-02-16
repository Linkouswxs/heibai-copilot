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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5F5] dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-red-100 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-400/30">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-base font-bold text-zinc-800 dark:text-white">黑白搭档</span>
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 text-zinc-500 hover:text-red-500 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-white dark:bg-zinc-900 border-b border-red-100 dark:border-zinc-800 sticky top-14 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {['全部', '技术', '教程', '随笔', 'AI', '开发'].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                i === 0
                  ? 'bg-red-500 text-white shadow-md shadow-red-400/30'
                  : 'bg-red-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-red-100 dark:hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-400/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-semibold text-pink-500 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-zinc-800 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-red-100 dark:border-zinc-800 safe-area-bottom z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-around h-14">
          <button className="flex flex-col items-center gap-0.5 text-red-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.464 3.036a2.5 2.5 0 015.072 0L20 13.5l-5.322 3.636a2.5 2.5 0 01-3.232.128l-.112-.09L3.5 13.5 9.464 3.036zM21 12c0 .93-.25 1.8-.683 2.55L13 21l-2.732-1.89a2.5 2.5 0 00-3.252-.227l-.116.074 6.4 4.8a2.5 2.5 0 003.268.073l.116-.074 6.4-4.8-.116.1A2.5 2.5 0 0121 12z"/>
            </svg>
            <span className="text-[10px] font-medium">首页</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-zinc-400 dark:text-zinc-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span className="text-[10px] font-medium">分类</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-zinc-400 dark:text-zinc-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-[10px] font-medium">发布</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-zinc-400 dark:text-zinc-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] font-medium">我的</span>
          </button>
        </div>
      </div>

      {/* Spacer for tab bar */}
      <div className="h-20" />
    </div>
  );
}
