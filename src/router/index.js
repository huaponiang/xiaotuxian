import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = [

]

// vue2是使用 new vueRouter({}) 创建路由
// vue3是使用 createRouter({}) 创建路由

const router = createRouter({
  // 使用hash路由模式
  history: createWebHashHistory(),
  routes
})

export default router
