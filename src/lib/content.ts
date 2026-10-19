import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { marked } from 'marked';

export interface Entry { slug: string; data: Record<string, any>; body: string; image?: string }
export function read(relative: string): Entry {
  const source = path.join(process.cwd(), 'content', relative);
  const match = fs.readFileSync(source, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!match) throw new Error(`Missing Markdown frontmatter: ${relative}`);
  const parsed = { data: parseYaml(match[1]), content: match[2] };
  const slug = relative.replace(/\/index\.md$/, '').replace(/\.md$/, '').toLowerCase();
  const image = ['featured.png', 'featured.jpg', 'featured.jpeg', 'featured.webp'].find(name => fs.existsSync(path.join(path.dirname(source), name)));
  return { slug, data: parsed.data, body: parsed.content, image: image ? `/${slug}/${image.replace(/\.[^.]+$/, '.webp')}` : undefined };
}
export function collection(folder: string): Entry[] {
  return fs.readdirSync(path.join(process.cwd(), 'content', folder), { withFileTypes: true })
    .filter(entry => entry.isDirectory() && fs.existsSync(path.join(process.cwd(), 'content', folder, entry.name, 'index.md')))
    .map(entry => read(`${folder}/${entry.name}/index.md`))
    .sort((a, b) => dateValue(b.data.date || b.data.publishDate) - dateValue(a.data.date || a.data.publishDate));
}
function dateValue(value: unknown) { return value ? new Date(String(value)).getTime() : 0; }
export function date(value: unknown, options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }) {
  if (!value) return '';
  return new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'UTC' }).format(new Date(String(value)));
}
export function isoDate(value: unknown) { return new Date(String(value)).toISOString().slice(0, 10); }
export function markdown(text = '') {
  // Keep existing authored Markdown and convert the video shortcode used in real projects.
  const converted = text.replace(/\{\{< youtube ([\w-]+) >\}\}/g, '<iframe class="video" src="https://www.youtube-nocookie.com/embed/$1" title="Project video" loading="lazy" allowfullscreen></iframe>');
  return marked.parse(converted, { async: false });
}
export const profile = read('authors/admin/_index.md');
export const cv = read('authors/admin-cv/_index.md');
export const publications = collection('publication');
export const news = collection('news');
export const projects = collection('project');

const descriptions: Record<string, string> = {
  'publication/2025hunormvfashion': 'Multi-view paired data for virtual try-on, clothing size estimation, and novel view synthesis.',
  'publication/2025phatvtoff': 'A systematic study of diffusion models for reconstructing garments from on-body images.',
  'publication/2020': 'Real-time tomato quality classification with a mobile CNN and Grad-CAM visual explanations.',
};
export function description(entry: Entry) { return entry.data.summary || descriptions[entry.slug] || ''; }
export interface Resource { label: string; icon: string; href: string }
export function resources(entry: Entry): Resource[] {
  const d = entry.data;
  const source = d.url_source || '';
  const arxiv = d.url_arxiv || (source.includes('arxiv.org') ? source : '');
  return [
    { label: 'Project page', icon: 'globe', href: d.url_project },
    { label: 'Code', icon: 'github', href: d.url_code },
    { label: 'Paper', icon: 'paper', href: d.url_pdf || (arxiv ? '' : source) },
    { label: 'arXiv', icon: 'arxiv', href: arxiv },
    { label: 'Dataset', icon: 'database', href: d.url_dataset },
  ].filter((item): item is Resource => Boolean(item.href));
}
