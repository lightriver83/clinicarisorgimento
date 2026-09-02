// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://clinicarisorgimento.it',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // il blog entra in sitemap solo quando ha articoli pubblicati
      filter: (page) => !page.includes('/blog'),
    }),
  ],
});
