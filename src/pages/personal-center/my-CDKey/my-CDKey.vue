// 我的兑换码
<template>
  <div class="my_CDKey">
    <div class="code_title">
      <span>我的兑换码</span>
      <button class="add_code" @click="showModal">添加兑换码</button>
    </div>
    <ul class="option_list">
      <li class="option_title">状态</li>
      <li :class="{'active_option':optionState == '全部'}" @click="changeOption('全部')">全部</li>
      <li :class="{'active_option':optionState == '已使用'}" @click="changeOption('已使用')">已使用</li>
      <li :class="{'active_option':optionState == '未使用'}" @click="changeOption('未使用')">未使用</li>
    </ul>
    <!-- 兑换码 -->
    <div class="code_main">
      <div class="code_total">共有2条数据</div>
      <ul class="code_body">
        <li>
          <span class="code_num">TADKF - H64SS - F5566</span>
        </li>
        <li>
          <span class="code_num">TADKF - H64SS - F5566</span>
        </li>
        <li>
          <span class="code_num">TADKF - H64SS - F5566</span>
        </li>
        <li>
          <span class="code_num">TADKF - H64SS - F5566</span>
        </li>
        <li>
          <span class="code_num">TADKF - H64SS - F5566</span>
        </li>
        <li>
          <span class="code_num">TADKF - H64SS - F5566</span>
        </li>
        <li>
          <span class="code_num">TADKF - H64SS - F5566</span>
        </li>
      </ul>
    </div>
    <!-- 无兑换码 -->
    <!-- <div class="no_code_main">
      <img src="~@/assets/img/cdKey/no-code.png" alt="">
      <p>啊哦~暂时没有兑换码，快点击右上方添加吧！</p>
    </div> -->
    <!-- 模态框 添加兑换码-->
    <b-modal ref="myModalRef" title="添加兑换码">
      <add-code :message="data"></add-code>
      <div slot="modal-footer" class="w-100 modal_footer">
        <button class="btn modal_sure" @click="confirm">确定</button>
        <button class="btn modal_cancel"  @click="cancel">取消</button>
      </div>
    </b-modal>
    <!-- 模态框end -->
  </div>
</template>

<script>
import AddCode from './form/add-code'
export default {
  name: 'MyCDKey',
  data () {
    return {
      data: '',
      optionState: '未使用'
    }
  },
  components: {
    AddCode
  },
  methods: {
    // 选择兑换码状态
    changeOption (state) {
      this.optionState = state
    },
    // 模态框确定
    confirm () {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      this.$refs.myModalRef.hide()
    },
    // 模态框关闭
    cancel () {
      this.$refs.myModalRef.hide()
    },
    // 模态框
    showModal () {
      this.$refs.myModalRef.show()
      this.data = {}
    }
  }
}
</script>

<style scoped lang='scss'>
@import "~@/assets/styles/public";
// 模态框样式
.modal_footer {
  @include modal_footer;
}
//end
.my_CDKey {
  font-size: $font_sm;
}
.code_title {
  overflow: hidden;
  line-height: 34px;
  padding: 15px 40px;
  border-bottom: 2px solid #f6f6f6;
}
.code_title > span {
  @include little_title;
}
.add_code {
  @include yellow_btn;
  float: right;
  letter-spacing: 1px;
  text-indent: 1px;
}
.option_list {
  border-bottom: 10px solid #f6f6f6;
  overflow: hidden;
  padding-left: 6px;
}
.option_list > li {
  text-align: center;
  padding: 15px 36px;
  float: left;
}
.option_list > li:not(.option_title) {
  cursor: pointer;
}
.option_title {
  color: #858585;
}
.active_option {
  color: #ed7b14;
}
.code_total {
  color: #9b9b9b;
  text-align: right;
  padding-right: 20px;
  padding-top: 10px;
}
.code_body {
  padding: 10px 30px;
  overflow: hidden;
}
.code_body > li {
  float: left;
  text-align: center;
  margin: 0 0 30px 14px;
  background: url("~@/assets/img/cdKey/unUse.png") no-repeat;
  width: 183px;
  height: 108px;
  padding-top: 16px;
}
.code_num {
  color: #fff;
  font-size: $font_sm;
}
.code_body > li > img {
  width: 100%;
}
.no_code_main {
  text-align: center;
  padding: 60px 0;
}
.no_code_main > p {
  color: #afafaf;
  padding-top: 20px;
}
</style>
