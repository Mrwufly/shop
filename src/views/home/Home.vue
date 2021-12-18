<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">心灵商铺</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'

import { getHomeMultidata } from '@/network/home.js'

export default {
  name: 'Home',
  components: { NavBar, HomeSwiper, HomeRecommendView },
  data() {
    return {
      // result: null
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res)
      // this.result = res
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: rgb(100, 200, 300);
  color: #fff;
}
</style>
