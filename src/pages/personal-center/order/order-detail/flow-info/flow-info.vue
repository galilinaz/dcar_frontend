<template>
  <div class="flow_info">
      <ul class="title">
          <li>发货方式：快递</li>
          <li>物流公司：申通快递</li>
          <li>运单号码：123456789123456789</li>
      </ul>
      <div class="flow_detail">
         <div class="all_day">
             <p class="day">2017-12-17</p>
             <p class="week">周日</p>
             <ul class="day_detail">
                 <li>
                     <span class="round"></span>
                     <div class="line"></div>
                     <p class="time">12:55:08</p>
                     <p class="main">卖家发货</p>
                 </li>
                 <li>
                     <span class="round"></span>
                     <div class="line"></div>
                     <p class="time">12:55:08</p>
                     <p class="main">卖家发货</p>
                 </li>
                 <li>
                     <span class="round"></span>
                     <div class="line"></div>
                     <p class="time">12:55:08</p>
                     <p class="main">卖家发货</p>
                 </li>
             </ul>
         </div>
         <div class="all_day">
             <p class="day">2017-12-17</p>
             <p class="week">周日</p>
             <ul class="day_detail">
                 <li>
                     <span class="round"></span>
                     <div class="line"></div>
                     <p class="time">12:55:08</p>
                     <p class="main">卖家发货</p>
                 </li>
                 <li>
                     <span class="round"></span>
                     <div class="line"></div>
                     <p class="time">12:55:08</p>
                     <p class="main">卖家发货</p>
                 </li>
                 <li>
                     <span class="round"></span>
                     <div class="line"></div>
                     <p class="time">12:55:08</p>
                     <p class="main">卖家发货</p>
                 </li>
             </ul>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FlowInfo',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/public";
  @import './flow-info.scss';
</style>
