import { defineConfig } from 'astro/config';

const rawBase = process.env.SITE_BASE || '/';
const base = rawBase === '/' ? '/' : `${rawBase.replace(/\/+$/, '')}/`;

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://craftwithintent.com',
  base,
  trailingSlash: 'always',
});
