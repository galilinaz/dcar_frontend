<template>
   <div class="center_main">
     <header-wrap></header-wrap>
     <div class="center_container">
       <!-- 左侧导航栏 -->
       <div class="center_left">
           <left-sidebar></left-sidebar>
       </div>
       <!-- 右侧 -->
       <div class="center_right">
          <router-view></router-view>
       </div>
     </div>
   </div>
</template>

<script>
import LeftSidebar from '@/components/sidebar/sidebar'
import HeaderWrap from '@/components/header/header'
export default {
  name: 'PersonalCenter',
  components: {
    LeftSidebar,
    HeaderWrap
  },
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/public';
.center_main {
  background: $bg_color;
  min-width: 1300px;
  min-height: 100vh;
}
.center_container {
  width: 1280px;
  overflow: hidden;
  margin: 20px auto;
}
.center_left {
  float: left;
  display: inline-block;
  width: 200px;
  margin-right: 20px;
}
.center_right {
  float: right;
  display: inline-block;
  width: 1060px;
  background: #fff;
}
</style>
