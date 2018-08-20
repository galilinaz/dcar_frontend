<template>
  <div class="collect_goods">
      <div class="info">
          <p>收货信息</p>
          <ul>
              <li>订单号：123456789123456789</li>
              <li>收货人：郭大狗&nbsp;186****4140</li>
              <li>收货地址：河南省郑州市郑东新区</li>
          </ul>
      </div>
      <div class="info">
          <p>发货信息</p>
          <ul>
              <li>生产商：DCAR</li>
              <li>手机号：15012345678&nbsp;&nbsp;&nbsp;&nbsp;电话：0379-12313541</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CollectGoods',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/public";
  @import './collect-goods.scss';
</style>
