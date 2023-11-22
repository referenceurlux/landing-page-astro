import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import netlify from '@astrojs/netlify/functions';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify()
});