<template>
  <div class="new_build">
      <div class="address_bottom">
      <div class="bottom_title">新增收货地址</div>
      <!-- 收货人姓名 -->
      <div class="each_line">
        <span class="input_title">
          <span class="required">*</span>
          {{infoData.addressName}}：
        </span>
        <input type="text" class="address_input middle_input">
        <span class="input_error">
          <img src="~@/assets/img/cdKey/input-error.png" alt="">
          {{infoData.nameAlert}}
        </span>
      </div>
      <!-- 手机号码 -->
      <div class="each_line">
        <span class="input_title">
          <span class="required">*</span>
          {{infoData.addressMobile}}：
        </span>
        <input type="text" class="address_input middle_input">
        <span class="input_error">
          <img src="~@/assets/img/cdKey/input-error.png" alt="">
          {{infoData.mobileAlert}}
        </span>
      </div>
      <!-- 电话号码 -->
      <div class="each_line">
        <span class="input_title">
          <span class="required">*</span>
          {{infoData.addressPhone}}：
        </span>
        <div class="middle_input">
          <input type="text" class="address_input" :placeholder="infoData.phoneOne">
          <span>-</span>
          <input type="text" class="address_input" :placeholder="infoData.phoneTwo">
          <span>-</span>
          <input type="text" class="address_input" :placeholder="infoData.phoneThree">
        </div>
        <span class="input_error">
          <img src="~@/assets/img/cdKey/input-error.png" alt="">
          {{infoData.phoneAlert}}
        </span>
      </div>
      <!-- 所在地区 -->
      <div class="each_line">
        <span class="input_title">
          <span class="required">*</span>
          {{infoData.addressArea}}：
        </span>
        <div class="area_box middle_input">
          <b-form-select v-model="selected" class="mb-3 area_input" size="sm">
            <option value="a">河南省/郑州市/金水区</option>
            <option value="b">Option B (disabled)</option>
          </b-form-select>
        </div>
        <span class="input_error">
          <img src="~@/assets/img/cdKey/input-error.png" alt="">
          {{infoData.areaAlert}}
        </span>
      </div>
      <!-- 详细地址 -->
      <div class="each_line">
        <span class="input_title">
          <span class="required">*</span>
          {{infoData.detailAddress}}：
        </span>
        <textarea rows="3" class="address_detail middle_textarea" :placeholder="infoData.addressPrompt"></textarea>
        <span class="input_error">
          <img src="~@/assets/img/cdKey/input-error.png" alt="">
            {{infoData.addressAlert}}
        </span>
      </div>
      <!-- 设置默认地址 -->
      <div class="set_default_address">
        <b-form-checkbox id="checkbox1"
                  v-model="status"
                  value="accepted"
                  unchecked-value="not_accepted">
          {{infoData.setDefault}}
        </b-form-checkbox>
        <span class="required">
          {{infoData.defaultAlert}}
        </span>
      </div>
      <!-- 保存 -->
      <div class="save_address">
        <button class="save_btn">{{infoData.save}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewBuild',
  data () {
    return {
      infoData: {},
      url: '',
      selected: null,
      status: 'not_accepted',
      addressState: '',
      modalTitle: '',
      data: {}
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
        this.url = this.$store.state.url + '/src/json/pages/personal-center/setup-info/chinese.json'
      } else {
        this.url = this.$store.state.url + '/src/json/pages/personal-center/setup-info/english.json'
      }
      var that = this
      axios.get(this.url).then(function (data) {
        that.infoData = data.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/public";
@import "./new-build.scss";
</style>
