import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cjs from 'rollup-plugin-cjs';

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    process.env.MODE !== "production"
      ? react({
          jsxRuntime: "classic",
        })
      : react(),
  ],
  mode: "development",
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
      },
      plugins: [cjs()],
    },
    commonjsOptions: {
      exclude: [/./],
    },
  },
});