import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cjs from 'rollup-plugin-cjs';

const { resolve } = require('path');

export default defineConfig({
  plugins: [react()],

  /* build configuration: from https://github.com/vitejs/vite/issues/2139#issuecomment-866743932 &
    https://github.com/vitejs/vite/issues/2139#issuecomment-813135348 
    to workaround buld issue.
    
    also related to /home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/node_modules/.pnpm/dialog-polyfill@0.4.10/node_modules/dialog-polyfill/dialog-polyfill.js line 740-742 
  */
  build: {
    rollupOptions: {
      plugins: [cjs()],
    },
    commonjsOptions: {
      exclude: [/./],
    },
  },
});
