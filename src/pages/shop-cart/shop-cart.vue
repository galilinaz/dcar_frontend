<template>
  <div class="shop_cart">
      <header-wrap></header-wrap>
      <div class="content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import HeaderWrap from '@/components/header/header'
export default {
  name: 'ShopCart',
  components: {
    HeaderWrap
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/public';
.shop_cart{
  background: $bg_color;
  min-width: 1300px;
  min-height: 100vh;
}
.content{
  width: 1280px;
  height: auto;
  margin:0 auto;
}
</style>
