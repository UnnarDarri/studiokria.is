// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// TEMPORARY: GitHub Pages project-site deployment
// Revert to site: 'https://studiokria.is', base: '/' when custom domain is ready
export default defineConfig({
  site: 'https://unnardarri.github.io',
  base: '/studiokria.is',
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
});