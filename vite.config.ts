import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
console.log('vite-----------------------config')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // input: {
      //   main:resolve(__dirname, 'index.html'),
      //   nested: resolve(__dirname, 'lowCode.html')
      // }
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'package/index.ts'),
      name: 'MyLib',
      formats:['es', 'cjs'],
      // the proper extensions will be added
      fileName: 'my-lib',
    },
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
