<template>
  <div class="bind_info">
    {{this.message}}
  </div>
</template>

<script>
export default {
  name: 'DeleteAddress',
  props: {
    message: ''
  },
  data () {
    return {
    }
  },
  methods: {
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
