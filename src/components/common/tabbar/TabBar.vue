<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  height: 49px;
  text-align: center;
  background-color: #f4f4f4;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  box-shadow: 1px -3px 5px rgba(100, 100, 100, 0.1);
  font-size: 14px;
}
</style>