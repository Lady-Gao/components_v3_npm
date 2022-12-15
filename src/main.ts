import { createApp } from 'vue'
import App from './App.vue'
const app=createApp(App)
import cv_components_v3 from '../package/dist/my-lib.mjs'
// import cv_components_v3 from 'cv_components_v3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 import 'default-passive-events'

import router from './route'


// console.log(cv_components_v3,'cv_components_v3')

app
    // .use(cv_amapv3)
    // .use(ElementPlus,{size:"small"})
    .use(ElementPlus)
    .use(router)
    .use(cv_components_v3)
    .mount('#app')
