<template>
  <div class="footer_wrap">
    <!--标题-->
    <p class="title">加入笛卡尔的生态社区</p>
    <!--搜索框-->
    <div class="search clear">
      <input class="search_inp" placeholder="Email adress" type="text" />
      <span class="search_btn">subscription</span>
    </div>
    <!--版权信息-->
    <copyright-wrap></copyright-wrap>
  </div>
</template>

<script>
import copyrightWrap from './components/copyright'
export default {
  name: 'FooterWrap',
  components: {
    copyrightWrap
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/public";
@media (min-width: 1200px) {
  .title {
    @include height_line(160px);
  }
  .search {
    margin-bottom: 160px;
    @include height_line(50px);
    .search_btn {
      @include height_line(50px);
      letter-spacing: 1px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .title {
    @include height_line(160px);
  }
  .search {
    margin-bottom: 100px;
    @include height_line(50px);
    .search_btn {
      @include height_line(50px);
      letter-spacing: 1px;
    }
  }
}
@media (max-width: 767px) {
  .title {
    @include height_line(100px);
  }
  .search {
    margin-bottom: 35px;
    @include height_line(35px);
    .search_btn {
      @include height_line(35px);
      letter-spacing: -1px;
    }
  }
}
/*媒体查询*/

.footer_wrap {
  /*border: 1px solid red;*/
  padding-bottom: 40px;
  background: url(../../assets/img/home/footer_bg.png) top center no-repeat;
  background-size: cover;
  .title {
    color: #eaebf0;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
  }
  /*标题*/
  .search {
    max-width: 674px;
    width: 85%;
    margin-left: auto;
    margin-right: auto;

    /*border: 1px solid red;*/
    border-radius: 30px;
    overflow: hidden;
    .search_inp {
      float: left;
      margin-right: 0;
      width: 80%;
      border: none;
      font-size: $font_xs;
      color: $bright;
      background-color: rgba(255, 255, 255, 0.42);
      padding: 0 10px;
    }
    .search_btn {
      float: left;
      margin-left: 0;
      font-size: $font_xs;
      color: #243b9c;
      font-weight: bold;
      display: inline-block;
      width: 20%;
      text-align: center;
      background-color: #ffffff;
      border-radius: 0 30px 30px 0;
    }
  }
  /*搜索框*/
}
</style>
