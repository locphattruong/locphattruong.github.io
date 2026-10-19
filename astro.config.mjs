import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://locphattruong.github.io',
  output: 'static',
  trailingSlash: 'always',
  publicDir: './.astro-assets',
});
