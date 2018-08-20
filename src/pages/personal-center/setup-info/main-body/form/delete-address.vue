<template>
  <div class="bind_info">
    确定要删除该收货地址吗？
  </div>
</template>

<script>
export default {
  name: 'DeleteAddress',
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
@import '~@/assets/styles/public';
.bind_info{
  width:70%;
  margin: 0 auto;
}
.user_input{
  @include input_box;
  width:100%;
}
</style>
