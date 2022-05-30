import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/home/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
