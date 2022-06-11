import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'

const mergeRoutes: Array<RouteRecordRaw> = [...routes]

const router = createRouter({
  history: createWebHashHistory(),
  routes: mergeRoutes
})

export default router
