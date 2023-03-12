<template>
  <ul class="app-Header-Navs">
          <li class="home"><RouterLink to="/">首页</RouterLink></li>
            <li v-for="item in list" :key="item.id" @mouseenter="show(item)" @mouseleave="hide(item)">
              <RouterLink :to="`/category/${item.id}`" @click="hide(item)">{{item.name}}</RouterLink>
                <div :class="{open:item.open,layer:!item.open}">
                  <ul>
                    <li v-for="sub in item.children" :key="sub.id">
                  <RouterLink :to="`/category/sub/${sub.id}`" @click="hide(item)">
                        <img :src="sub.picture" alt="">
                        <p>{{sub.name}}</p>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
        </ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    name: 'app-Header-Navs',
    setup() {
      const store = useStore()
      const list = computed(()=>{
      return store.state.category.list
      })
      const show = (item) => {
        store.commit('category/show',item)
      }
      const hide = (item) => {
        store.commit('category/hide',item)
      }
      return {
        list,
        show,
        hide
      }
    }
}
</script>

<style scoped lang="less">
    .app-Header-Navs {
    width: 820px;
    display: flex;
    justify-content: space-around;
    padding-left: 40px;
    position: relative;
    > li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      > a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
      }
      &:hover {
        > a {
          color: @xtxColor;
          border-bottom: 1px solid @xtxColor;
        }
       
      }
    }

    .open {
        height: 132px;
        opacity: 1;
        width: 1240px;
        background-color: #fff;
        position: absolute;
        left: -200px;
        top: 56px;
        overflow: hidden;
        box-shadow: 0 0 5px #ccc;
        transition: all .2s .1s;
        ul {
            display: flex;
            flex-wrap: wrap;
            padding: 0 70px;
            align-items: center;
            height: 132px;
            li {
            width: 110px;
            text-align: center;
            img {
                width: 60px;
                height: 60px;
            }
            p {
                padding-top: 10px;
            }
            &:hover {
                p {
                color: @xtxColor;
                }
            }
        }
      }
      }
    .layer {
      
        width: 1240px;
        background-color: #fff;
        position: absolute;
        left: -200px;
        top: 56px;
        height: 0;
        overflow: hidden;
        opacity: 0;
        box-shadow: 0 0 5px #ccc;
        transition: all .2s .1s;
        ul {
            display: flex;
            flex-wrap: wrap;
            padding: 0 70px;
            align-items: center;
            height: 132px;
            li {
            width: 110px;
            text-align: center;
            img {
                width: 60px;
                height: 60px;
            }
            p {
                padding-top: 10px;
            }
            &:hover {
                p {
                color: @xtxColor;
                }
            }
        }
      }
    
  }
}
</style>