import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '关于 - 黑白搭档',
  description: '关于黑白搭档技术博客',
};

export default function AboutPage() {
  return (
    <div className="pixel-grid min-h-screen bg-[#f4ecd8] text-[#171717]">
      <header className="border-b-4 border-black bg-[#f8f0de]">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4">
          <h1 className="pixel-heading text-xl">ABOUT</h1>
          <Link href="/" className="pixel-btn">
            返回首页
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 py-8">
        <section className="pixel-card space-y-4 p-6 md:p-8">
          <h2 className="pixel-heading text-2xl">关于黑白搭档</h2>
          <p className="leading-7">
            这是一个记录前端开发、工程实践和学习笔记的技术博客。我们希望用简洁的内容分享真实的开发经验，持续输出可复用的思路与方法。
          </p>
          <p className="leading-7">
            当前项目基于 Next.js App Router 构建，使用像素风视觉语言，强调阅读体验和内容优先。
          </p>

          <div className="border-t-4 border-black pt-4">
            <p className="pixel-heading mb-2 text-sm">技术栈</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="pixel-chip">Next.js</span>
              <span className="pixel-chip">TypeScript</span>
              <span className="pixel-chip">Tailwind CSS</span>
              <span className="pixel-chip">React</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
