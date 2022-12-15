import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import {VitePluginStyleInject} from './vite-plugin-style-inject'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let alias={};
  const env = loadEnv(mode, process.cwd(), '')
  if (command === 'serve') {
  // dev  开发环境
  alias= {
    '@': resolve(__dirname, 'src'),
    '@Config': resolve(__dirname, 'src/utils/config'),
  }
}else{
 
}
  return {
    plugins: [VitePluginStyleInject(""),vue()],
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
        name: 'index',
         formats:['es'],
        // // the proper extensions will be added
         fileName: 'index',
      },
      outDir:resolve(__dirname, 'package/lib'),
  
    },
    resolve: {
      alias:alias
    },
  
  }
  
})
