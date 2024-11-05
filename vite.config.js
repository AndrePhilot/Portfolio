import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config.mjs';
import { VitePWA } from 'vite-plugin-pwa';
import { readFileSync } from 'fs'; // Import fs to read the version.txt file
import { resolve } from 'path'; // Import path to resolve the path to version.txt

// Read version from version.txt
const version = readFileSync(resolve(__dirname, 'version.txt'), 'utf-8').trim();

// https://vitejs.dev/config/
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
        entryFileNames: `assets/[name].[hash].js?v=${version}`, // Include version in JS files
        chunkFileNames: `assets/[name].[hash].js?v=${version}`, // Include version in chunk files
        assetFileNames: `assets/[name].[hash].[ext]?v=${version}`, // Include version in assets
      },
    },
  },
});
