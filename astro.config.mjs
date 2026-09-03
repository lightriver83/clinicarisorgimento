// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://clinicarisorgimento.it',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // blog e problemi entrano in sitemap quando escono dalla bozza
      filter: (page) => !page.includes('/blog') && !page.includes('/problemi'),
    }),
  ],
});
