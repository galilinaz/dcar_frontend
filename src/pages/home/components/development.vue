<template>
  <div id="development">
    <!--标题-->
    <title-wrap>Development Project</title-wrap>
    <div class="content">
      <img class="timeline" src="../../../assets/img/home/timeline.png" />
    </div>
    <p class="annotation">
      <span><img src="../../../assets/img/home/development_yes.png"/>已完成部分</span>
      <span><img src="../../../assets/img/home/development_no.png"/>未完成部分</span>
    </p>
  </div>
</template>

<script>
import TitleWrap from './title'
export default {
  name: 'DevelopmentWrap',
  components: {
    TitleWrap
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 1200px) {
  #development {
    padding-bottom: 90px;
    .annotation {
      margin: 90px auto 0;
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  #development {
    padding-bottom: 40px;
    .annotation {
      margin: 40px auto 0;
    }
  }
}
@media (max-width: 767px) {
  #development {
    padding-bottom: 30px;
    .annotation {
      margin: 30px auto 0;
    }
  }
}
/*媒体查询*/
#development {
  background-color: #f2f3f5;
  .content {
    width: 100%;
    .timeline {
      display: block;
      width: 100%;
      max-width: 1616px;
      margin: 0 auto;
    }
  }
  .annotation {
    font-size: 12px;
    color: #333333;
    background-color: #ffffff;
    line-height: 48px;
    height: 48px;
    max-width: 280px;
    border-radius: 30px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    img {
      margin-right: 10px;
    }
  }
}
</style>
