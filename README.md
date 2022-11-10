# cv_components_v3

基于Vue3 封装的cv组件库 (包含 cv_amapv3 地图组件)

### 文档介绍
https://monstergao.gitee.io/cv_components_v3/


> --- 

## 本地调试  软连接
进入components_v3_npm/package 项目终端，使用'npm link' 命令**创建**一个软连接

执行成功后会在本地生成node包，目录C:\Users\用户名\AppData\Roaming\npm\node_modules
### components_v3_npm/package/package.json
```JS
{
 "main": "index.ts"
 }
```
#### components_v3_npm/package 终端

>  npm link


进入tspweb3.0项目终端，使用'npm link cv_components_v3' **建立**链接

这就将这个公共的项目通过软连接的方式引入到项目里面来了
> ---
### tspweb3.0 终端

 > npm link cv_components_v3

### tspweb3.0/ main.js

```js
 import CVcomponentsV3 from 'cv_components_v3';  
 
 .use(CVcomponentsV3);
```

### 配置好之后启用项目
- npm run dev

这时修改components_v3_npm/package项目下面的任意代码都会实时生效，不用打包，也不用重启

> ---
## npm
### 打包
### components_v3_npm 终端

-  npm run librollup

在components_v3_npm/package下生成lib文件夹

### 配置
> components_v3_npm/package/package.json
```JS
{
"version": "0.0.10",//每次发布前叠加版本号 
 "main": "lib/index.js"
 }
```
### 发布到 npm
> components_v3_npm/package 终端
-  npm publish 