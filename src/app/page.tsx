import Link from 'next/link';

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
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white dark:text-zinc-900 font-bold text-xs md:text-sm">H</span>
            </div>
            <span className="text-base md:text-lg font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight">
              黑白搭档
            </span>
          </Link>
          <nav className="flex items-center gap-0.5 md:gap-1">
            {['首页', '关于'].map((item) => (
              <Link
                key={item}
                href={item === '首页' ? '/' : `/${item}`}
                className="px-2 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-16 md:py-24 lg:py-28 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10 rounded-full blur-2xl md:blur-3xl" />
        
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 md:mb-4 tracking-wider uppercase">
            技术博客
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6 leading-tight tracking-tight">
            记录学习
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              探索技术
            </span>
          </h1>
          <p className="text-sm md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
            在这里分享技术见解、学习心得和项目经验。
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm text-zinc-500 dark:text-zinc-500">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
            持续更新中
          </div>
        </div>
      </section>

      {/* Posts */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-10">
          <div className="w-6 md:w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          <h2 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-white">最新文章</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/posts/${post.id}`}
              className="group flex flex-col bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <img 
                  src={post.cover} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex-1 p-4 md:p-5 flex flex-col">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="px-2 py-0.5 md:py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] md:text-[11px] font-medium rounded-md">
                    {post.category}
                  </span>
                  <span className="text-[10px] md:text-xs text-zinc-400 dark:text-zinc-500">{post.date}</span>
                </div>
                <h3 className="font-semibold text-sm md:text-base text-zinc-900 dark:text-white leading-snug mb-1 md:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-auto">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 md:py-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 黑白搭档 · 技术博客
          </p>
          <p className="text-[10px] md:text-xs text-zinc-400 dark:text-zinc-500 mt-1 md:mt-2">
            Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
