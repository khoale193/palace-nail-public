import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // https://vite.dev/config/server-options#server-port | Type: number ; Default: 5173
    port: 8200
  },
  build: {
    outDir: 'member-dist-production',
    emptyOutDir: true
  }
})
