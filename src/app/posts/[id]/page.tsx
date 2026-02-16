import Link from 'next/link';

const posts = {
  1: {
    title: 'Hello World - 欢迎来到黑白搭档',
    excerpt: '这是黑白搭档技术博客的第一篇文章，记录学习与成长。',
    date: '2026-02-16',
    category: '随笔',
    content: '欢迎来到黑白搭档技术博客！\n\n这是一个专注于技术分享的博客，我会在这里记录学习与成长的点点滴滴。\n\n期待与大家一起交流学习！',
  },
  2: {
    title: 'Next.js 16 新特性解析',
    excerpt: '探索 Next.js 16 的最新功能，包括 Turbopack、服务器组件等。',
    date: '2026-02-15',
    category: '技术',
    content: 'Next.js 16 带来了许多令人兴奋的新特性...\n\n## Turbopack\nTurbopack 是 Vercel 推出的新一代打包工具，比 Webpack 快 10 倍...\n\n## 服务器组件\n服务器组件让你可以在服务器上渲染组件，减少客户端 JavaScript 体积...',
  },
  3: {
    title: 'Vercel 部署实战指南',
    excerpt: '手把手教你将 Next.js 项目部署到 Vercel。',
    date: '2026-02-14',
    category: '教程',
    content: 'Vercel 是部署 Next.js 项目的最佳选择...\n\n## 步骤\n1. 将代码推送到 GitHub\n2. 在 Vercel 导入项目\n3. 自动部署完成！',
  },
};

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts[Number(params.id) as keyof typeof posts];
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-500">文章不存在</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
            黑白搭档
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
          ← 返回首页
        </Link>
        
        <article className="mt-8">
          <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">
              {post.category}
            </span>
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 text-zinc-700 dark:text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
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
