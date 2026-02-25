import { NextResponse } from 'next/server';
import { likePost } from '@/lib/blog-store';

export async function POST(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const likes = likePost(Number(id));

  if (likes === undefined) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json({ data: { likes } });
}
