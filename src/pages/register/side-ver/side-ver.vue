<template>
    <div class="drag">
        <div class="drag_bg"></div>
        <div class="drag_text">{{confirmWords}}</div>
        <div @mousedown="mousedownFn($event)" class="handler handler_bg"></div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'SideVer',
  components: {},
  props: {},
  data () {
    return {
      beginClientX: 0,
      mouseMoveStata: false,
      maxwidth: 280,
      confirmWords: '拖动滑块验证',
      confirmSuccess: false,
      somedata: 1
    }
  },
  created () {},
  methods: {
    mousedownFn: function (e) {
      this.mouseMoveStata = true
      this.beginClientX = e.clientX
    },
    successFunction () {
      $('.handler')
        .removeClass('handler_bg')
        .addClass('handler_ok_bg')
      this.confirmWords = '验证通过'
      $('.drag').css({ color: '#fff' })
      $('.handler').css({ left: this.maxwidth })
      $('.drag_bg').css({ width: this.maxwidth })
      $('body').unbind('mousemove')
      $('body').unbind('mouseup')
      this.confirmSuccess = true
      this.onClickMe()
    },
    onClickMe () {
      this.$emit('child-say', this.somedata)
    }
  },
  mounted () {
    $('body').on('mousemove', e => {
      if (this.mouseMoveStata) {
        var width = e.clientX - this.beginClientX
        if (width > 0 && width <= this.maxwidth) {
          $('.handler').css({ left: width })
          $('.drag_bg').css({ width: width })
        } else if (width > this.maxwidth) {
          this.successFunction()
        }
      }
    })
    $('body').on('mouseup', e => {
      this.mouseMoveStata = false
      var width = e.clientX - this.beginClientX
      if (width < this.maxwidth) {
        $('.handler').css({ left: 0 })
        $('.drag_bg').css({ width: 0 })
      }
    })
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/public';
@import './side-ver.scss';
</style>
