import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SERIES_LIST, url } from '../lib/site';

export const GET: APIRoute = async ({ site }) => {
  const baseOrigin = site ? site.toString().replace(/\/+$/, '') : 'https://craftwithintent.com';
  const posts = await getCollection('posts');

  const routes = [
    url('/'),
    url('series/'),
    url('products/'),
    url('tools/'),
    url('founders/'),
    ...SERIES_LIST.map((s) => url(`series/${s.slug}/`)),
    ...posts.map((p) => url(`posts/${p.slug}/`)),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${baseOrigin}${r}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
