<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" class="goods-list-item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  justify-content: space-around;
}
.goods-list-item {
  width: 48%;
}
</style>
