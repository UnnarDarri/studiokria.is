// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://studiokria.github.io',
  base: '/studio-kria-website',
  output: 'static',
  build: {
    assets: 'assets',
  },
});