// /packages/button/rollup.config.js
import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from 'rollup-plugin-typescript2'
module.exports = [
  {
    // 入口
    input: "package/index.ts",
    // input: "package/Amap_components/index.ts",
    // 出口
    output: [
      {
         file: "package/lib/index.js",
        // file:'package/Amap_components/lib/index.js',
        // 配置打包模块化的方式 es:ESM  cjs:CommonJS
        format: "es",
      },
    ],
    // 插件
    plugins: [
      vue({
        // 把单文件组件中的样式，插入到html中的style标签
        css: true,
        // 把组件转换成 render 函数
        compileTemplate: true, 
      }),
      // 代码压缩
      terser(),
      postcss(),
      typescript()
    ],
  },
];

