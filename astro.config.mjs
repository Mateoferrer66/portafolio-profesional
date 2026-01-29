import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://portafolio-profesional.pages.dev/',
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