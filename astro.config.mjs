// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.studiokria.is',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets',
  },
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  i18n: {
    locales: ['is', 'en'],    
    defaultLocale: 'is',
  }
});
