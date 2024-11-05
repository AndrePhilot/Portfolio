import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config.mjs';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
const randomVersion = Date.now(); // Use the current timestamp as a unique query string

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        navigateFallback: undefined,
      },
      includeAssets: ['logo.png'],
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'Personal Portfolio',
        icons: [
          {
            src: 'logo.png',
            sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `[name].[ext]?v=${randomVersion}`, // Append a random query parameter
      },
    },
  },
});
