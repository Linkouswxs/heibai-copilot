"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { BlogPost } from '@/posts-data';

type Category = '全部' | BlogPost['category'];
type PostSummary = Omit<BlogPost, 'content'>;

function HeartIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5A5.5 5.5 0 0 1 12 5.09 5.5 5.5 0 0 1 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 10h10M7 14h6" />
      <path d="M3 5h18v12H8l-5 4V5Z" />
    </svg>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('全部');
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [categories, setCategories] = useState<Category[]>(['全部']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch('/api/categories');
      const json = (await res.json()) as { data: Category[] };
      setCategories(json.data);
    }
    void fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const query = activeCategory === '全部' ? '' : `?category=${encodeURIComponent(activeCategory)}`;
      const res = await fetch(`/api/posts${query}`);
      const json = (await res.json()) as { data: PostSummary[] };
      setPosts(json.data);
      setLoading(false);
    }

    void fetchPosts();
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#f4ecd8] text-[#171717] pixel-grid">
      <header className="sticky top-0 z-40 border-b-4 border-black bg-[#f8f0de]">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
          <h1 className="pixel-heading text-xl neon-flicker">黑白搭档 BLOG</h1>
          <span className="pixel-chip pixel-float">8-BIT MODE</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8">
        <section className="pixel-card mb-6 overflow-hidden p-4 md:p-5">
          <div className="pixel-scanline relative flex flex-wrap items-center justify-between gap-3">
            <p className="pixel-heading text-sm md:text-base">今日像素灵感已加载</p>
            <span className="pixel-chip">NEW POSTS x {posts.length}</span>
          </div>
        </section>

        <section className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pixel-btn ${activeCategory === category ? 'pixel-btn-active' : ''}`}
            >
              {category}
            </button>
          ))}
        </section>

        {loading ? (
          <div className="pixel-card p-8 text-center">正在从后端加载文章...</div>
        ) : (
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
            {posts.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`} className="pixel-card group pixel-card-hover">
                <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-black bg-[#d4c5a1]">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="space-y-2 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#5b4c2e]">
                    {post.category} · {post.date}
                  </p>
                  <h2 className="pixel-heading text-lg leading-tight">{post.title}</h2>
                  <p className="text-sm leading-6 text-[#2b2b2b]">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-[#5b4c2e]">
                    <p className="inline-flex items-center gap-1">
                      <HeartIcon /> {post.likes}
                    </p>
                    <p className="inline-flex items-center gap-1">
                      <CommentIcon /> {post.comments}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        )}

        {!loading && posts.length === 0 && (
          <div className="pixel-card mt-4 p-8 text-center text-sm">暂无文章，切换一个分类试试。</div>
        )}
      </main>
    </div>
  );
}
