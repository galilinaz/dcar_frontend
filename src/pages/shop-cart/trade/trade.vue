<template>
  <div class="trade">
     <div class="title">
         <p>您的位置：<span>购物车</span></p>
         <ul>
             <li>全部商品（<span>2</span>）</li>
             <li>送货至</li>
             <li>
                 <input placeholder="请选择收货地址" type="text" id="city" @click="shooseCity"/>
             </li>
         </ul>
     </div>
     <ul class="nav">
        <li>商品信息</li>
        <li>数量</li>
        <li>单价</li>
        <li>小计</li>
        <li>操作</li>
     </ul>
    <div class="content_main">
        <div class="title">
            <p>订单号：123456789123456789</p>
            <p>下单时间：2018-03-11&nbsp;&nbsp;22:30:56</p>
        </div>
        <div class="basic-info">
            <ul>
                <li class="photo"></li>
                <li class="present">
                    <p>我是产品名称我是产品名称我是产品名称我是产品名称我是产品名称我是产品名称我是产品名称</p>
                </li>
                <li class="num">
                    <span @click="reduceShop">-</span>
                    <input type="number" v-model="shopNum" @keydown="entryNum">
                    <span @click="addShop">+</span>
                </li>
                <li>
                    <p>1820</p>
                </li>
                <li class="plan">
                    <p>1820</p>
                </li>
                <li>
                    <i @click="showModal">
                        <font-awesome-icon :icon="['fas', 'trash']" color="#ACACAC" size="lg"/>
                    </i>
                </li>
            </ul>
        </div>
    </div>
    <div class="balance_box">
        <div class="shop_cart_detail">
            <p>已选商品<span>2</span>件</p>
            <p>总价（不含运费）：<b>&yen;3684.40</b>元</p>
            <button>结算</button>
        </div>
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
import cityMethod from '@/assets/js/citySet'
import DeleteAddress from '../form/delete-address'
export default {
  name: 'Trade',
  data () {
    return {
      shopNum: 1,
      data: ''
    }
  },
  components: {
    DeleteAddress
  },
  methods: {
    addShop () {
      this.shopNum++
    },
    reduceShop (e) {
      if (this.shopNum <= 1) {
        e.preventDefault()
      } else {
        this.shopNum--
      }
    },
    entryNum (e) {
      if (e.keyCode === 110 || e.keyCode === 190) {
        e.preventDefault()
      }
    },
    shooseCity (e) {
      cityMethod.SelCity(e.target, e)
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
      this.data = '确定要删除该商品吗？'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/public";
@import "./trade.scss";
</style>
