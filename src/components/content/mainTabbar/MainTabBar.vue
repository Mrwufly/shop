<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path="/home" actvieColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <span slot="item-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  data() {
    return {}
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.tab-bar {
  z-index: 9999;
}
</style>