<template>
  <div class="child">
    <p class="my-4">{{this.message}}</p>
    <p @click="giveAdvice">click</p>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    message: ''
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
