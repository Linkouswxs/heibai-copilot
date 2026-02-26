"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { BlogPost } from '@/posts-data';

function PixelStat({ label, value }: { label: 'like' | 'comment' | 'collect'; value: number }) {
  const icon = {
    like: (
      <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5A5.5 5.5 0 0 1 12 5.09 5.5 5.5 0 0 1 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
    ),
    comment: (
      <>
        <path d="M7 10h10M7 14h6" />
        <path d="M3 5h18v12H8l-5 4V5Z" />
      </>
    ),
    collect: <path d="M6 3h12v18l-6-4-6 4V3Z" />,
  };

  return (
    <span className="pixel-chip inline-flex items-center gap-1.5">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill={label === 'like' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden>
        {icon[label]}
      </svg>
      {value}
    </span>
  );
}

export default function PostDetailClient({ id }: { id: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [overheat, setOverheat] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      const res = await fetch(`/api/posts/${id}`);
      if (!res.ok) {
        setPost(null);
        setLoading(false);
        return;
      }
      const json = (await res.json()) as { data: BlogPost };
      setPost(json.data);
      setLoading(false);
    }

    void fetchPost();
  }, [id]);

  async function handleLike() {
    if (!post) return;
    const res = await fetch(`/api/posts/${post.id}/like`, { method: 'POST' });
    if (!res.ok) return;
    const json = (await res.json()) as { data: { likes: number } };
    setPost({ ...post, likes: json.data.likes });
    setOverheat(true);
    window.setTimeout(() => setOverheat(false), 1200);
  }

  if (loading) {
    return <div className="pixel-card p-8 text-center">正在从后端加载文章...</div>;
  }

  if (!post) {
    return (
      <div className="pixel-grid flex min-h-screen items-center justify-center bg-[#f4ecd8] p-4">
        <div className="pixel-card max-w-md p-8 text-center">
          <p className="pixel-heading mb-3 text-xl">404</p>
          <p className="mb-4">文章不存在。</p>
          <Link href="/" className="pixel-btn inline-flex">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const blocks = post.content.trim().split('\n\n');

  return (
    <div className="pixel-grid min-h-screen bg-[#f4ecd8] pb-12 text-[#171717]">
      <header className="border-b-4 border-black bg-[#f8f0de]">
        <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-4">
          <Link href="/" className="pixel-btn">
            ← BACK
          </Link>
          <span className="pixel-chip pixel-float">{post.category}</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 py-6">
        <article className="pixel-card pixel-scanline overflow-hidden">
          <div className="relative aspect-[16/9] border-b-4 border-black bg-[#d4c5a1]">
            <Image src={post.cover} alt={post.title} fill sizes="100vw" className="object-cover" priority unoptimized />
          </div>
          <div className="space-y-5 p-5 md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#5b4c2e]">{post.date}</p>
              <h1 className="pixel-heading mt-2 text-2xl md:text-3xl">{post.title}</h1>
              <p className="mt-2 text-sm text-[#3c3c3c]">作者：{post.author}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button onClick={handleLike} className={`pixel-btn overheat-button ${overheat ? 'overheat-button-active' : ''}`}>
                点赞 +1
              </button>
              <span className={`overheat-fx ${overheat ? 'overheat-fx-active' : ''}`}>
                🔥 CPU 过热! 赞力全开!!! 🔥
              </span>
              <PixelStat label="like" value={post.likes} />
              <PixelStat label="comment" value={post.comments} />
              <PixelStat label="collect" value={post.collects} />
            </div>

            <section className="space-y-4 leading-7">
              {blocks.map((block, index) => {
                const line = block.trim();

                if (line.startsWith('## ')) {
                  return (
                    <h2 key={index} className="pixel-heading pt-2 text-xl">
                      {line.replace('## ', '')}
                    </h2>
                  );
                }

                if (line.startsWith('### ')) {
                  return (
                    <h3 key={index} className="pixel-heading text-lg">
                      {line.replace('### ', '')}
                    </h3>
                  );
                }

                if (line.includes('\n- ') || line.startsWith('- ')) {
                  const items = line.split('\n').map((item) => item.replace('- ', '').trim());
                  return (
                    <ul key={index} className="list-disc space-y-1 pl-6">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return <p key={index}>{line}</p>;
              })}
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
