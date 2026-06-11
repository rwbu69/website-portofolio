import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  
  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  
  const data = sortedPosts.map(post => ({
    slug: post.id,
    title: post.data.title,
    date: post.data.date.toISOString().split('T')[0],
    description: post.data.description,
  }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
