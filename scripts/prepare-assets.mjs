import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import sharp from 'sharp';
const thumbnails = [];
const target = '.astro-assets';
rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
for (const source of ['site-assets', 'static']) {
  if (existsSync(source)) cpSync(source, target, { recursive: true, filter: p => !p.endsWith('.DS_Store') });
}
function copyContentAssets(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const source = join(dir, entry.name);
    if (entry.isDirectory()) copyContentAssets(source);
    else if (!/\.(md|markdown)$|^\.DS_Store$/i.test(entry.name)) {
      const destination = join(target, relative('content', source).toLowerCase());
      mkdirSync(join(destination, '..'), { recursive: true });
      cpSync(source, destination);
      if (/^featured\.(png|jpe?g|webp)$/i.test(entry.name)) thumbnails.push({ source, destination: destination.replace(/\.[^.]+$/, '.webp') });
    }
  }
}
copyContentAssets('content');
mkdirSync(join(target, 'images'), { recursive: true });
await sharp('content/authors/admin/avatar.jpg').resize(600, 600, { fit: 'cover', position: 'centre' }).jpeg({ quality: 85 }).toFile(join(target, 'images/avatar.jpg'));
await Promise.all(thumbnails.map(({ source, destination }) => sharp(source).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 85 }).toFile(destination)));
cpSync('assets/media/icons/logo.png', join(target, 'images/logo.png'));
cpSync('assets/media/icon.png', join(target, 'favicon.png'));
writeFileSync(join(target, '.nojekyll'), '');
writeFileSync(join(target, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://locphattruong.github.io/sitemap.xml\n');
