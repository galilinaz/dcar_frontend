<template>
   <div class="login_warp">
      <div class="login">
        <div class="login_logo_box">
          <img src="~@/assets/img/login/logo.png" class="logo" />
        </div>
        <div class="login_main">
          <div class="main">
             <div class="hello">
               <span></span>
               <img src="~@/assets/img/login/hello.png" />
             </div>
             <form>
               <input type="text" :placeholder="loginData.email">
               <input type="password" :placeholder="loginData.pass">
             </form>
             <ul class="remember_pass">
                <li>
                  <img v-if="unMember" src="~@/assets/img/login/5.png" @click="choiseRemember" />
                  <img v-if="!unMember" src="~@/assets/img/login/7.png" @click="choiseRemember" />
                  <p @click="choiseRemember">{{loginData.remember}}</p>
                </li>
                <li>
                  <p>{{loginData.forget}}</p>
                </li>
             </ul>
             <div class="land">
               <button :class="{ chinsesBtn: isActive, 'englishBtn': hasError }">{{loginData.login}}</button>
             </div>
             <div class="quick_reg">
               <p>{{loginData.problem}}<a @click="$router.push('/register')">{{loginData.register}}</a></p>
             </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      isActive: true,
      hasError: false,
      unMember: true,
      loginData: {},
      url: ''
    }
  },
  mounted () {
    this.getData()
  },
  beforeUpdate () {
    this.getData()
  },
  methods: {
    getData () {
      if (this.$store.state.language === 'chinese') {
        this.isActive = true
        this.hasError = false
      } else {
        this.isActive = false
        this.hasError = true
      }
      var that = this
      axios.get(this.$store.state.url + '/pages/login/' + this.$store.state.jsonUrl).then(function (data) {
        that.loginData = data.data.data
      })
    },
    choiseRemember () {
      if (this.unMember === true) {
        this.unMember = false
      } else {
        this.unMember = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/public";
@import "./login.scss";
</style>
