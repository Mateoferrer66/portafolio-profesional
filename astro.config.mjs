import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    // Allow HTML in markdown files (needed for video iframes)
    rehypePlugins: [],
    shikiConfig: {
      theme: 'dracula'
    }
  },
  vite: {
    ssr: {
      noExternal: ['three']
    }
  }
});