// 分类模块

import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true, // 开启命名空间
  state() {
    return {
      // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到。
      // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 加载数据成功后需要修改list所以需要mutations函数
  mutations: {
    setList(state, headCategory) {
      state.list = headCategory
    },
    show(state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },
    hide(state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }
  },
  // 因为是发请求到后台拿数据，需要使用actions
  actions: {
    async getList({ commit }) {
      // 获取分类数据
      const { result } = await findAllCategory()
      result.forEach(item => {
        item.open = false
      })
      commit('setList', result)
    }
  }
}
