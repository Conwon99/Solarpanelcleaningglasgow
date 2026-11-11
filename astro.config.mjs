import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://solarpanelcleaningglasgow.co.uk',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  publicDir: './static',
  build: {
    format: 'file'
  },
  trailingSlash: 'never',
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
  preview: {
    host: '127.0.0.1',
    port: 4321,
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
