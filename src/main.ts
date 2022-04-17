import { createApp } from 'vue'
import App from './App.vue'
import CVcomponents from '../index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 import 'default-passive-events'
 import { createRouter, createWebHistory } from 'vue-router';


console.log(CVcomponents,'CVcomponents')
  const router = createRouter({
    history: createWebHistory(),
    routes :[
        {
            path: "/",
            component: () => import( "./views/readMe/readMe.vue")
        },
        {
            path: "/:pathMatch(.*)",
           redirect:'/'
        },
        {
            path: "/home",
            component: () => import( "./views/home/home.vue")
        },
        {
            name:  'multiCar',
            path: "/multiCar",
            component: () => import( "./views/multiCar/multiCar.vue")
        },
        {
            name:  'fenceManage',
            path: "/fenceManage",
            component: () => import( "./views/fenceManage/fenceManage.vue")
        }, {
            name:  'history',
            path: "/history",
            component: () => import( "./views/history/history.vue")
        }, {
            name:  'history2',
            path: "/history2",
            component: () => import( "./views/history2/history2.vue")
        },
      ]
  })
createApp(App)
    .use(CVcomponents)
    .use(ElementPlus,{size:"small"})
    .use(router)
    .mount('#app')
