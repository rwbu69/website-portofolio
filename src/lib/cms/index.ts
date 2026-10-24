import { getCollection } from 'astro:content';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  tags?: string[];
  content?: string; // Markdown or HTML
}

export async function getPosts(): Promise<BlogPost[]> {
  // Use astro:content for now as the provider
  const posts = await getCollection('blog');
  
  return posts.map(post => ({
    id: post.id,
    title: post.data.title,
    excerpt: post.data.excerpt || '',
    publishDate: post.data.publishDate,
    tags: post.data.tags || [],
  })).sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf());
}
