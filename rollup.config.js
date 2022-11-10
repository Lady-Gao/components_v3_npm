// /packages/button/rollup.config.js
import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs';
//  import resolve from 'rollup-plugin-node-resolve';

module.exports = [
  {
    // 入口
    input: "package/index.ts",
    // input: "package/components_Amap/index.ts",
    // 出口
    output: [
      {
        dir: "package/lib",
        // dir:'package/components_Amap/lib',
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
      typescript(),
      // resolve(), // 查找和打包node_modules中的第三方模块
      commonjs()
    ],
  },
];

