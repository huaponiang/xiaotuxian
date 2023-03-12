import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1.重置样式的库
import 'normalize.css'
// 2.自己项目的重置样式和公用样式
import '@/assets/styles/common.less'
// 3.引入插件
import ui from '@/components/library'

createApp(App).use(store).use(ui).use(router).mount('#app')
