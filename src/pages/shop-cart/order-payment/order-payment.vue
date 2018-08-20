// 订单支付
<template>
  <div class="order_payment">
    <!-- 订单详情 -->
    <div class="payment_detail">
      <div>您的订单已提交成功，请尽快付款！</div>
      <div>请您在提交订单后的24小时完成支付，否则订单会自动取消！</div>
      <div class="receiver_address">
        <img src="~@/assets/img/order-payment/address.png" alt="">
        收货地址：
        河南省 郑州市 金水区 22号 哈哈哈大厦
        收货人：啦啦啦
        158****2555
      </div>
    </div>
    <!-- 支付 -->
    <div class="pay_main">
      <img src="~@/assets/img/order-payment/border.png" alt="" class="custom_border">
      <p class="sum_title">
        应付金额：
        <span>5.0 ETH</span>
      </p>
      <div class="order_title">支付方式</div>
      <ul class="order_way">
        <li :class="{'activePay':payState == 'ETH'}" @click="choosePayment('ETH')">
          <img src="~@/assets/img/order-payment/ETH.png" alt="" class="way_icon">
          ETH
          <img src="~@/assets/img/order-payment/active-pay.png" alt="" class="active_icon"  v-if="payState == 'ETH'">
        </li>
        <li :class="{'activePay':payState == 'code'}" @click="choosePayment('code')"> 
          <img src="~@/assets/img/order-payment/code.png" alt="" class="way_icon">
          兑换码
          <img src="~@/assets/img/order-payment/active-pay.png" alt="" class="active_icon" v-if="payState == 'code'">
        </li>
      </ul>
      <div>
        <button class="to_pay">立即支付</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPayment',
  data () {
    return {
      payState: 'ETH'
    }
  },
  methods: {
    // 选择支付方式
    choosePayment (state) {
      this.payState = state
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/public';
@import './order-payment.scss';
</style>
