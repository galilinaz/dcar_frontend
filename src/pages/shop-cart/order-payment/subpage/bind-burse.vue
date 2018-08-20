<template>
  <div class="bind-burse">
      <div class="bind_body">
        <p class="bind_title">
            <i></i>
            绑定钱包
        </p>
        <div class="burse_address">
            您的钱包地址为
            <span>54733792DF</span>
        </div>
        <div class="user_input">
            <div>
                <span>用户名</span>
                <input type="text">
            </div>
        </div>
        <p class="bind_alert">您的账户与钱包绑定后，即可成功付款</p>
        <div class="check_alert" @click="bindCheck">
            <img src="~@/assets/img/order-payment/bind-check.png" alt="" v-if="check == true">
            <img src="~@/assets/img/order-payment/bind-uncheck.png" alt="" v-if="check == false">
            免责声明，勾选即为同意此条款，最终解释权归DCAR官网所有
        </div>
        <div class="go_bind">
            <button>立即绑定</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BindBurse',
  data () {
    return {
      check: true
    }
  },
  methods: {
    // 勾选
    bindCheck () {
      if (this.check === true) {
        this.check = false
      } else {
        this.check = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/public";
.bind-burse {
  width: 708px;
  min-height: 351px;
  background: #fff;
  margin: 20px auto 0;
  background: url("~@/assets/img/order-payment/burse-back.png") no-repeat;
  font-size: $font_sm;
}
.bind_body {
  padding-top: 128px;
}
.bind_title {
  color: #fff;
  position: relative;
  padding-left: 35px;
}
.bind_title > i {
  display: inline-block;
  background: #fff;
  width: 7px;
  height: 18px;
  border-radius: 2px;
  position: absolute;
  top: 1px;
  left: 20px;
}
.burse_address {
  text-align: center;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 26px;
}
.burse_address > span {
  padding: 2px 8px;
  border-radius: 15px;
  background: #fcbe6e;
  color: #5a432f;
  margin-left: 15px;
}
.user_input {
  text-align: center;
}
.user_input > div {
  width: 342px;
  position: relative;
  margin: 0 auto;
}
.user_input > div > input {
  width: 342px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  height: 42px;
  line-height: 42px;
  border-radius: 22px;
  color: #fff;
  padding-left: 170px;
}
.user_input > div > span {
  position: absolute;
  top: 10px;
  left: 75px;
  color: #fff;
}
.bind_alert {
  text-align: center;
  color: #fff;
  padding-top: 22px;
}
.check_alert {
  color: #9aa1ae;
  font-size: $font_mm;
  text-align: center;
  padding-top: 53px;
  cursor: pointer;
}
.check_alert > img {
  vertical-align: top;
  margin-right: 8px;
}
.go_bind {
  text-align: center;
  padding-top: 18px;
}
.go_bind > button {
  @include purple_btn;
}
</style>
