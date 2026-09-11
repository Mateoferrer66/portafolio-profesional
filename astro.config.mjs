import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import fs from 'fs';

function removeLargeVideoPlugin() {
  return {
    name: 'remove-large-video',
    hooks: {
      'astro:build:done': () => {
        const paths = [
          './dist/assets/test.mp4',
          './public/assets/test.mp4'
        ];
        paths.forEach(p => {
          if (fs.existsSync(p)) {
            try { fs.unlinkSync(p); } catch (e) {}
          }
        });
      }
    }
  };
}


// https://astro.build/config
export default defineConfig({
  site: 'https://mateo-ferrer.pages.dev/',
  compressHTML: true,
  integrations: [
    react(),
    sitemap(),
    tailwind(),
    removeLargeVideoPlugin()
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
          manualChunks: {
            'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
            'react-vendor': ['react', 'react-dom'],
          }
        }
      }
    }
  }
});