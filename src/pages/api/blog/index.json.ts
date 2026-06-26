import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  
  const sortedPosts = posts.sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
  
  const data = sortedPosts.map(post => ({
    slug: post.id,
    title: post.data.title,
    date: post.data.publishDate,
    description: post.data.excerpt,
  }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
