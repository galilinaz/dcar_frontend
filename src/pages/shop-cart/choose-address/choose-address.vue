<template>
  <div class="choose_address">
     <ul class="header">
       <li :class="{ active: navActive == 0 }" @click="choiseNav">选择收货地址</li>
       <li>|</li>
       <li :class="{ active: navActive == 1 }" @click="choiseNav">新建收货地址</li>
     </ul>
     <address-list v-if="navActive == 1"></address-list>
     <new-build v-if="navActive == 0"></new-build>
     <ul class="header">
       <li>商品清单</li>
       <li>|</li>
       <li>
         <a>返回购物车修改</a>
       </li>
     </ul>
      <ul class="nav">
        <li>商品信息</li>
        <li>数量</li>
        <li>单价</li>
        <li>小计</li>
     </ul>
    <div class="content_main">
        <div class="title">
            <p>订单号：123456789123456789</p>
            <p>下单时间：2018-03-11&nbsp;&nbsp;22:30:56</p>
        </div>
        <div class="basic-info">
            <ul>
                <li class="photo"></li>
                <li class="present">
                    <p>我是产品名称我是产品名称我是产品名称我是产品名称我是产品名称我是产品名称我是产品名称</p>
                </li>
                <li>
                    <p>2</p>
                </li>
                <li class="plan">
                    <p>1820</p>
                </li>
                <li>
                    <p>1820</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="balance_box">
        <a>返回购物车修改</a>
        <div class="shop_cart_detail">
            <p>寄送至：河南省郑州市郑东新区XX路&nbsp;&nbsp;&nbsp;&nbsp;收件人：郭大狗&nbsp;&nbsp;&nbsp;&nbsp;186****4143</p>
            <button>提交订单</button>
        </div>
    </div>
  </div>
</template>

<script>
import AddressList from './address-list/address-list'
import NewBuild from './new-build/new-build'
export default {
  name: 'ChooseAddress',
  components: {
    AddressList,
    NewBuild
  },
  data () {
    return {
      navActive: 1
    }
  },
  methods: {
    choiseNav () {
      if (this.navActive === 0) {
        this.navActive = 1
      } else {
        this.navActive = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/public";
@import "./choose-address.scss";
</style>
