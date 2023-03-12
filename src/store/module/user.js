// 用户模块

export default {
  namespaced: true, // 开启命名空间
  state () {
    return {
      //  用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    // 修改用户信息 , payload 是当前获取到的用户信息对象
    setUser (state, payload) {
      state.profile = payload
    }
  }

}
