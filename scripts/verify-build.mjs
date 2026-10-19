import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import assert from 'node:assert/strict';
const output = resolve('dist');
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? htmlFiles(join(dir, entry.name)) : entry.name.endsWith('.html') ? [join(dir, entry.name)] : []);
}
const pages = htmlFiles(output);
const missing = [];
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const href = match[1].split(/[?#]/)[0];
    if (/^(?:[a-z]+:|\/\/)/i.test(href)) continue;
    const local = resolve(href.startsWith('/') ? output : dirname(file), '.' + (href.startsWith('/') ? href : '/' + href));
    if (!existsSync(local) && !existsSync(join(local, 'index.html'))) missing.push(`${file}: ${href}`);
  }
}
assert.deepEqual(missing, [], 'Broken internal links or missing assets');
const home = readFileSync(join(output, 'index.html'), 'utf8');
assert.equal((home.match(/class="publication"/g) || []).length, 3);
assert.ok(home.includes('class="older-news"'));
assert.ok(home.includes('id="theme-toggle"'));
assert.ok(!home.includes('Hugo Blox'));
assert.ok(existsSync(join(output, 'uploads/academic_cv.pdf')));
console.log(`Verified ${pages.length} pages: internal links, images, CV download, news archive, and publication resources.`);
