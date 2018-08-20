// 完成支付
<template>
  <div class="complete_payment">
      <img src="~@/assets/img/order-payment/border.png" alt="" class="custom_border">
      <!-- 支付成功 -->
      <div class="payment_state">
          <img src="~@/assets/img/order-payment/pay_success.png" alt="">
          <span>支付成功！</span>
      </div>
      <p class="success_alert">您的订单已支付成功！您可以选择返回首页，或者查看订单详情！</p>
      <!-- 支付失败 交互时放开-->
      <!-- <div class="payment_stateTwo">
          <img src="~@/assets/img/order-payment/pay_error.png" alt="">
          <span>支付失败！</span>
      </div> -->
      <!-- <p class="success_alert">订单支付失败！ 可能是余额不足或者是其他原因哦，请再试一次！</p> -->
      <ul class="complete_operate">
          <li>
              <button>返回首页</button>
          </li>
          <li>
              <button>查看订单详情</button>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'CompletePayment',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/public';
.complete_payment{
    margin-top:30px;
    padding-top:70px;
    padding-bottom:50px;
    text-align: center;
    background: #fff;
    font-size: $font_sm;
    position: relative;
}
.custom_border{
    position: absolute;
    bottom:-20px;
    left:-4px;
}
.payment_state{
    color:#69a519;
    font-size:$font_lg;
}
.payment_state>img{
    margin-right:14px;
}
.payment_stateTwo{
    color:#FF5519;
    font-size:$font_lg;
}
.payment_stateTwo>img{
    margin-right:14px;
}
.success_alert{
    padding-top:20px;
    padding-bottom:35px;
}
.complete_operate{
    overflow: hidden;
    margin: 0 auto;
    width:255px;
}
.complete_operate>li{
    float: left;
}
.complete_operate>li:nth-child(1){
    margin-right:40px;
}
.complete_operate>li>button{
    @include yellow_btn;
    letter-spacing: 1px;
    text-indent: 1px;
}
</style>
