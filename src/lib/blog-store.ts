import { categories, posts, type BlogPost } from '@/posts-data';

export type PostSummary = Omit<BlogPost, 'content'>;

type BlogStore = {
  posts: BlogPost[];
};

const globalStore = globalThis as typeof globalThis & {
  __blogStore?: BlogStore;
};

const store = globalStore.__blogStore ?? {
  posts: structuredClone(posts),
};

globalStore.__blogStore = store;

export function getCategories() {
  return categories;
}

export function listPosts(category?: string): PostSummary[] {
  const filtered = !category || category === '全部'
    ? store.posts
    : store.posts.filter((post) => post.category === category);

  return filtered.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category,
    cover: post.cover,
    likes: post.likes,
    comments: post.comments,
    collects: post.collects,
    author: post.author,
  }));
}

export function getPostById(id: number): BlogPost | undefined {
  return store.posts.find((post) => post.id === id);
}

export function likePost(id: number) {
  const post = store.posts.find((item) => item.id === id);
  if (!post) return undefined;
  post.likes += 1;
  return post.likes;
}
