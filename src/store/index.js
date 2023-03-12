import { createStore } from 'vuex'

// vue2 创建仓库 new vuex.store({})
// vue3 创建仓库 creatStore({})
import cart from './module/carts'
import user from './module/user'
import category from './module/category'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
    // 存储
  },
  getters: {
    // 计算属性
  },
  mutations: {
    // 方法
  },
  actions: {
    // 异步调用
  },
  modules: {
    // 模块化
    cart,
    user,
    category
  },
  // 配置插件的地方
  plugins: [
    createPersistedstate({
      // 本地存储名字
      key: 'erabbit-client-pc-store',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
