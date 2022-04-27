import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes :[
      
        {
            path: "/:pathMatch(.*)",
           redirect:'/baseTree'
        },
        {
            path: "/home",
            component: () => import( "../views/home/home.vue")
        },
        {
            name:  'multiCar',
            path: "/multiCar",
            component: () => import( "../views/amapView/multiCar/multiCar.vue")
        },
        {
            name:  'fenceManage',
            path: "/fenceManage",
            component: () => import( "../views/amapView/fenceManage/fenceManage.vue")
        }, {
            name:  'history',
            path: "/history",
            component: () => import( "../views/amapView/history/history.vue")
        }, {
            name:  'history2',
            path: "/history2",
            component: () => import( "../views/amapView/history2/history2.vue")
        },
        {
            name:  'baseTree',
            path: "/baseTree",
            component: () => import( "../views/treeView/baseTree/baseTree.vue")
        },
      ]
  })

  export default router