// 1.创建一个新的axios实例
// 2.请求拦截器，如有token进行头部携带
// 3.相应拦截器，1.剥离无效数据 2.处理token失效
// 4.导出一个函数，调用当前的axios实例发起请求，返回promise函数

import axios from 'axios'
import store from '@/store'
import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
const instance = axios.create({
  baseURL,
  timeout: 5000
})
// 请求拦截器 request
instance.interceptors.request.use(
  // 拦截中的处理
  config => {
    // 请求配置的修改
    // 做了vuex的持久化，从vuex中获取 token
    const { profile } = store.state.user
    // 判断是否有token
    if (profile.token) config.headers.Authorization = `Bearer ${profile.token}`
    return config
  },
  err => { return Promise.reject(err) } // 拦截失败的处理
)
// 相应拦截器 response
instance.interceptors.response.use(res => res.data,
  // 取出结果中的data数据，将来调接口的时候拿到的就是后台的数据
  err => {
    if (err.response && err.response.status === 401) { // 401 状态码
      // 1.情况无效用户信息
      store.commit('user/setUser', {}) // 在user里设置了对应函数设置用户信息的设置
      // 2.跳转到登录页面 并需要传参 '当前路由'
      // 组件里获取当前路由 $route.path(只能拿到路由地址，拿不到当时的参数)   $route.fullpath 才能拿到完整的地址包括参数
      // js模块中 router.currentRoute.fullPath 当前路由地址 因为router.currentRoute他是vue3响应式数据，所以需要再后面加上 .value
      // encodeURIComponent 转码
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
  }
)

// 请求工具函数
export default (url, method, submitData) => {
  // 发送请求
  return instance({
    url,
    method,
    // 1.get请求 用params传值
    // 2.不是get 用data传值
    // [] 设置一个动态的key 可以写js表达式 其值当作key
    [method === 'get' ? 'params' : 'data']: submitData
  })
}
