import { NextRequest, NextResponse } from 'next/server';
import { listPosts } from '@/lib/blog-store';

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category') ?? undefined;
  const data = listPosts(category);
  return NextResponse.json({ data });
}
