import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getUrl } from '../utils/navigation';

export async function GET(context: any) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'NI18 Mobile Apps Articles & Guides',
    description: 'Exam revision sheets, formula guides, MPSC tips, and English grammar lessons from NI18 Android Applications.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: post.data.appId 
        ? getUrl(`/apps/${post.data.appId}/blog/${post.slug}`) 
        : getUrl(`/blog/${post.slug}`),
      author: post.data.author
    })),
    customData: `<language>en-us</language>`
  });
}
