import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { url } from '../lib/site';

function escapeXml(str: string): string {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
  const baseOrigin = site ? site.toString().replace(/\/+$/, '') : 'https://craftwithintent.com';
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );

  const items = posts
    .map((p) => {
      const link = `${baseOrigin}${url(`posts/${p.slug}/`)}`;
      return `
    <item>
      <title>${escapeXml(p.data.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${p.data.publishedAt.toUTCString()}</pubDate>
      <description>${escapeXml(p.data.dek)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Craft with Intent</title>
    <link>${escapeXml(`${baseOrigin}${url('/')}`)}</link>
    <description>Three veteran builders putting design, engineering, and product craft to work with AI in public.</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
