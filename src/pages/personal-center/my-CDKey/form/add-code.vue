<template>
  <div class="bind_info">
    <div class="row">
      <label class="col-md-3">兑换码</label>
        <div class="col-md-9">
        <input type="text" class="user_input" placeholder="请输入兑换码字符">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCode',
  props: {
    message: {}
  },
  data () {
    return {
      dataMain: 'zizizi'
    }
  },
  methods: {
    giveAdvice () {
      this.$emit('give-advice', '123456')
    }
  }
}
</script>

<style scoped lang='scss'>
@import "~@/assets/styles/public";
.bind_info{
  width:70%;
  margin: 0 auto;
}
.user_input{
  @include input_box;
  width:100%;
}
label{
    padding-top:5px;
}
</style>
