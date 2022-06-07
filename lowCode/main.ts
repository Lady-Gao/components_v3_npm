import { createApp } from 'vue'
import App from './App.vue'
// import cv_components_v3 from 'cv_components_v3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 import 'default-passive-events'



createApp(App)
    .use(ElementPlus)
    .mount('#app')
