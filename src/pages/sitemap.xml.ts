import type { APIRoute } from 'astro';
import { collection } from '../lib/content';
export const GET: APIRoute = () => {
  const folders = ['publication', 'project', 'news', 'industrial-project', 'personal-project'];
  const urls = ['/', '/projects/', '/experience/', ...folders.flatMap(folder => [`/${folder}/`, ...collection(folder).map(entry => `/${entry.slug}/`)])];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>https://locphattruong.github.io${url}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
