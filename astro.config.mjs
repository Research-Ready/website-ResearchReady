import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://research-ready.nl',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
