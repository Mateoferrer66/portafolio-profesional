import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import fs from 'fs';
if (fs.existsSync('public/assets/test.mp4')) fs.unlinkSync('public/assets/test.mp4');
if (fs.existsSync('dist/assets/test.mp4')) fs.unlinkSync('dist/assets/test.mp4');

// https://astro.build/config
export default defineConfig({
  site: 'https://mateo-ferrer.pages.dev/',
  integrations: [
    react(),
    sitemap(),
    tailwind()
  ],
  markdown: {
    // Allow HTML in markdown files (needed for video iframes)
    rehypePlugins: [],
    shikiConfig: {
      theme: 'dracula'
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Automatic chunk splitting is usually sufficient when using React.lazy
        }
      }
    }
  }
});