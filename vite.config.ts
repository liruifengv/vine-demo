import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VineVitePlugin } from 'vue-vine/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VineVitePlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
