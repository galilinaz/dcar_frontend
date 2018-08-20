<template>
  <div class="address_list">
     <p class="title">收货地址：</p>
     <div class="content">
       <ul class="each_address" @mouseenter="mouseIn('1')"  @mouseleave="mouseOut" :class="{'activeAddress':addressState == '1'}">
            <li>河南省郑州市郑东新区XX路XX号XX大厦XX楼 &nbsp;&nbsp;&nbsp;收货人：啦啦啦 &nbsp;&nbsp;&nbsp;186****4455</li>
            <li v-if="addressState == '1'">设置为默认</li>
            <li v-if="addressState !== '1'">
            <span class="default_address">默认地址</span>
            </li>
            <li v-if="addressState == '1'">
            <span>修改</span>
            |
            <span>删除</span>
            </li>
       </ul>
       <ul class="each_address" @mouseenter="mouseIn('2')" @mouseleave="mouseOut" :class="{'activeAddress':addressState == '2'}">
            <li>河南省郑州市郑东新区XX路XX号XX大厦XX楼 &nbsp;&nbsp;&nbsp;收货人：啦啦啦 &nbsp;&nbsp;&nbsp;186****4455</li>
            <li v-if="addressState == '2'" class="set_default">设置为默认</li>
            <li v-if="addressState !== '2'">
            <span class="default_address">默认地址</span>
            </li>
            <li v-if="addressState == '2'">
            <span>修改</span>
            |
            <span @click="showModal">删除</span>
            </li>
       </ul>
     </div>
     <!-- 模态框 删除收货地址-->
    <b-modal ref="myModalRef" title="删除">
      <delete-address :message="data"></delete-address>
      <div slot="modal-footer" class="w-100 modal_footer">
        <button class="btn modal_sure" @click="confirm">确定</button>
        <button class="btn modal_cancel"  @click="cancel">取消</button>
      </div>
    </b-modal>
    <!-- 模态框end -->
  </div>
</template>

<script>
import DeleteAddress from '../../form/delete-address'
export default {
  name: 'AddressList',
  data () {
    return {
      addressState: '',
      data: ''
    }
  },
  components: {
    DeleteAddress
  },
  methods: {
    mouseIn (item) {
      this.addressState = item
    },
    mouseOut () {
      this.addressState = ''
    },
    // 模态框确定
    confirm () {
      this.$refs.myModalRef.hide()
    },
    // 模态框关闭
    cancel () {
      this.$refs.myModalRef.hide()
    },
    // 模态框
    showModal () {
      this.$refs.myModalRef.show()
      this.data = '确定要删除该收货地址吗？'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/public";
@import "./address-list.scss";
</style>
