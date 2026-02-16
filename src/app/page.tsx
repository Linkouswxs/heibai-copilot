import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Hello World - 欢迎来到黑白搭档',
    excerpt: '这是黑白搭档技术博客的第一篇文章，记录学习与成长。',
    date: '2026-02-16',
    category: '随笔',
  },
  {
    id: 2,
    title: 'Next.js 16 新特性解析',
    excerpt: '探索 Next.js 16 的最新功能，包括 Turbopack、服务器组件等。',
    date: '2026-02-15',
    category: '技术',
  },
  {
    id: 3,
    title: 'Vercel 部署实战指南',
    excerpt: '手把手教你将 Next.js 项目部署到 Vercel。',
    date: '2026-02-14',
    category: '教程',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
            黑白搭档
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">技术博客 · 记录成长</p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">最新文章</h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-zinc-100 dark:border-zinc-800 pb-8">
              <Link href={`/posts/${post.id}`} className="block group">
                <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300 mt-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-zinc-500 dark:text-zinc-400">
          © 2026 黑白搭档 · 技术博客
        </div>
      </footer>
    </div>
  );
}
