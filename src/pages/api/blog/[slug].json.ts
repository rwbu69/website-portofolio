import { getCollection } from 'astro:content';
import { marked } from 'marked';

export async function getStaticPaths() {
  const blogEntries = await getCollection('blog');
  return blogEntries.map(entry => ({
    params: { slug: entry.id }, props: { entry },
  }));
}

export async function GET({ props }: any) {
  const { entry } = props;
  
  const htmlContent = marked.parse(entry.body || "");
  
  const data = {
    slug: entry.id,
    title: entry.data.title,
    date: entry.data.publishDate,
    description: entry.data.excerpt,
    content: htmlContent,
  };

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
