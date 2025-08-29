import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = blogPosts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  
  return rss({
    title: 'A Hugo theme inspired by paged.js',
    description: 'A website built through Astro with the hugo-paged inspired theme.',
    site: context.site || 'https://example.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.subtitle || '',
      link: `/blog/${post.slug}/`,
      author: post.data.author,
      categories: [...(post.data.categories || []), ...(post.data.tags || [])]
    })),
    customData: `<language>en-us</language>`,
  });
}