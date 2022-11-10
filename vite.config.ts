import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
console.log('vite-----------------------config')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main:resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'lowCode.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'package'),
      '@utils': resolve(__dirname, 'src/utils'),
      //   "#": resolve(__dirname,'src/types'),
      '@Config': resolve(__dirname, 'package/utils/config'),
    }
  },

})
