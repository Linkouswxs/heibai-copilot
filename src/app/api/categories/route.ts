import { NextResponse } from 'next/server';
import { getCategories } from '@/lib/blog-store';

export async function GET() {
  return NextResponse.json({ data: getCategories() });
}
