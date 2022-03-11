import { createApp } from 'vue'
import App from './App.vue'
import CVcomponents from '../index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App)
    .use(CVcomponents)
    .use(ElementPlus,{size:"small"})
    .mount('#app')
