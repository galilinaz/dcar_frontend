<template>
  <div class="copyright_page">
  <!--LOGO-->
     <img src="../../../assets/img/home/logo_dcar.png" />
     <!--相关链接-->
     <ul class="relate">
       <li v-for="(item,index) of relateList" :key="item.id">
    <a :href="item.link" :title="item.title">
<img :src="item.imgUrl" />
</a>
</li>
</ul>
<!--版权 -->
<p class="copyright">Copyright&nbsp;&nbsp;&copy;&nbsp;2018&nbsp;&nbsp;笛卡尔融云链 版权所有</p>
  </div>
</template>

<script>
export default {
  name: 'copyrightWrap',
  data () {
    return {
      relateList: [
        {
          id: '001',
          imgUrl: require('../../../assets/img/home/relate_1.png')
        },
        {
          id: '002',
          imgUrl: require('../../../assets/img/home/relate_2.png')
        },
        {
          id: '003',
          imgUrl: require('../../../assets/img/home/relate_3.png')
        },
        {
          id: '004',
          imgUrl: require('../../../assets/img/home/relate_4.png')
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import "~@/assets/styles/public";
.copyright_page {
  /*border: 1px solid red;*/
  text-align: center;
  .logo_dcar {
    max-width: 92px;
    margin: auto;
  }
  .relate {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
    li {
      margin-right: 15px;
    }
  }
  .copyright {
    max-width: 292px;
    @include height_line(28px);
    font-size: $font_xs;
    color: $bright;
    text-align: center;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
  }
}
/*公司信息*/
</style>
