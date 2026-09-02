// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clinicarisorgimento.it',
  trailingSlash: 'never',
  build: { format: 'file' },
});
