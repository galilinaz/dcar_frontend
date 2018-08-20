<template>
  <div class="order_detail">
     <header-wrap></header-wrap>
     <div class="order_container">
         <div class="header">
            <p class="title">您的位置：<a>个人中心</a>&gt;<a>订单详情</a></p>
            <div class="order_state">
                <div class="state_left">
                    <div class="state">
                        <img src="~@/assets/img/order/warn.png"/>
                        <p class="col-lg-12 col-md-12 col-sm-12 col-xs-12">当前订单状态：等待买家收货</p>
                    </div>
                    <button>确认收货</button>
                </div>
                <div class="state_right">
                    <img src="~@/assets/img/order/1.png"/>
                </div>
            </div>
         </div>
         <div class="content">
            <div class="nav_content">
                <ul>
                    <li>
                        <span :class="{ active: navActive == 0   }" @click="choiseNav">订单信息</span>
                    </li>
                    <li>
                        <span :class="{ active: navActive == 1 }" @click="choiseNav">物流信息</span>
                    </li>
                </ul>
                <div class="order_info">
                    <p>订单号：123456789123456789</p>
                    <p>下单时间：2018-03-11&nbsp;&nbsp;22:30:56</p>
                </div>
            </div>
            <collect-goods v-if="navActive == 0"></collect-goods>
            <flow-info v-if="navActive == 1"></flow-info>
         </div>
         <div class="shop_info">
             <ul class="caption">
                <li>
                    <p>商品信息</p>
                </li>
                <li>
                    <p>单价</p>
                </li>
                <li>
                    <p>数量</p>
                </li>
                <li>
                    <p>支付方式</p>
                </li>
             </ul>
             <ul class="detail">
                <li>
                    <div class="shop_photo"></div>
                </li>
                <li>
                    <p class="shop_title">我是产品名称我是产品名称我是产品名称我是产品名称我是产品名称我是产品名称</p>
                </li>
                <li>
                    <p class="single">1820</p>
                </li>
                <li>
                    <p class="single">1</p>
                </li>
                <li>
                    <p class="single mode">ETH</p>
                </li>
             </ul>
             <div class="cost">
                 <p class="remark">订单备注：我是备注我是备注我是备注我是备注我是备注我是备注</p>
                 <ul>
                     <li>运费：0.00元</li>
                     <li>商品总金额：1820.00元</li>
                     <li>应付总额：<span>1820.00</span>元</li>
                 </ul>
             </div>
             <div class="handle">
                 <button>确认收货</button>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
import HeaderWrap from '@/components/header/header'
import CollectGoods from './collect-goods/collect-goods'
import FlowInfo from './flow-info/flow-info'
export default {
  name: 'OrderDetail',
  components: {
    CollectGoods,
    FlowInfo,
    HeaderWrap
  },
  data () {
    return {
      navActive: 0
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
  @import './order-detail.scss';
</style>
