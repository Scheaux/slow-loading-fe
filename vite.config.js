import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/slow-loading-fe/',
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [
    legacy(),
    VitePWA(),
  ],
});
