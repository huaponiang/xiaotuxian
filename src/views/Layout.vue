<template>
  <!-- 顶部通栏 -->
  <AppTopnav></AppTopnav>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 二级路由 -->
  <div class="app-body">
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'

export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped lang="less">
  .app-body {
    min-height: 600px;
  }
</style>
