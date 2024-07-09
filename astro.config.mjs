import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import netlify from '@astrojs/netlify/functions';
import vercel from "@astrojs/vercel/serverless";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://pg.pages.lu',
  integrations: [tailwind(), robotsTxt()],
  output: 'server',
  adapter: netlify(),
  redirects: {
    '/cebe-fit' : '/lernestine'
  }
});