<template>
  <div class="prompt-box">
      <!-- 遮罩层 -->
      <!-- <div class="mask"></div> -->

      <!-- 1.系统检测中 -->
      <!-- <div class="checking_main">
          <img src="~@/assets/img/order-payment/checking.png" alt="">
          <p>系统正在检测中... ...</p>
      </div> -->

      <!-- 2.检测完成--已安装钱包 -->
      <!-- <div class="check_one">
        <p class="check-alert">
            系统检测到您的电脑已安装钱包，<br>
            请登录您的钱包账号
        </p>
        <div class="go_login">
            <button>去登录</button>
        </div>
      </div> -->

      <!-- 3.检测完成--已安装钱包 -->
      <!-- <div class="check_Two">
        <p class="check-alert">
            系统检测到您的电脑未安装钱包，<br>
            暂不能成功付款，点击下方按钮安装
        </p>
        <div class="go_install go_login">
            <button>立即安装</button>
        </div>
      </div> -->

      <!-- 4.绑定成功 -->
      <!-- <div class="bind_success">
        <p class="bind_title">
            <img src="~@/assets/img/order-payment/close.png" alt="">
            绑定成功
        </p>
        <div class="bind_body">
            您的账户与钱包绑定成功，可以成功付款啦！<br>
            <span>5s</span> 后自动返回付款页面
        </div>
      </div> -->

      <!-- 5.添加兑换码 -->
      <!-- <div class="add_code">
          <p>啊哦！ 您现在没有任何可用兑换码！</p>
          <p>请添加新的兑换码后继续付款，或者选择其它方式付款</p>
          <div class="code_btn">
              <button>去添加</button>
          </div>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "PromptBox",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/public";
@import "./prompt-box.scss";
</style>
