import type { Metadata } from 'next';
import { posts } from '@/posts-data';
import PostDetailClient from './PostDetailClient';

export function generateStaticParams() {
  return posts.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return { title: '文章不存在 - 黑白搭档' };
  }

  return {
    title: `${post.title} - 黑白搭档`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PostDetailClient id={id} />;
}
