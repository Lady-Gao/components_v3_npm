import { createApp } from 'vue'
import App from './App.vue'
import cv_components_v3 from '../package/index'
// import cv_amapv3 from 'cv_amapv3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 import 'default-passive-events'

import router from './route'

console.log(cv_components_v3,'cv_components_v3')

createApp(App)
    .use(cv_components_v3)
    // .use(cv_amapv3)
    .use(ElementPlus,{size:"small"})
    .use(router)
    .mount('#app')
