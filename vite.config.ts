import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2023F2EM1/',
  build: {
    outDir: 'dist',
  },
  plugins: [vue()],
})
