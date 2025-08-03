// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://madsomeness.de',
	integrations: [mdx(), sitemap()],
	i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  }
});
