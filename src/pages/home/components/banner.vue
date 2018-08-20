<template>
  <div id="banner">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="clouds"></div>
    <div class="info">
      <h3>笛卡尔融云链</h3>
      <p>全 球 首 个 数 字 金 融 的 通 用 超 级 银 关</p>
      <div class="btn_box">
        <a class="paper" href="javascript:void(0)">
          <i class="icon iconfont">&#xe62d;</i>
          <span>白皮书</span>
        </a>
        <a class="purse" href="javascript:void(0)">
          <i class="icon iconfont">&#xe620;</i>
          <span>TOKEN钱包</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerWrap'
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/public";
@media (min-width: 1200px) {
  #banner {
    height: 900px;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  #banner {
    height: 700px;
  }
}

@media (max-width: 768px) {
  #banner {
    height: 500px;
  }
}

@media (max-width: 415px) {
  #banner {
    height: 400px;
    padding: 0 10px;
    .info {
      margin: 0;
      h3 {
        /*color: red;*/
        font-size: 25px;
        margin-bottom: 50px;
      }
      p {
        font-size: 16px;
        color: #ffffff;
        margin-bottom: 50px;
      }
      .btn_box {
        display: flex;
        align-items: center;
        justify-content: center;
        .paper {
          width: 130px;
          height: 40px;
          line-height: 40px;
        }
        .purse {
          width: 130px;
          height: 40px;
          line-height: 38px;
        }
      }
    }
  }
}
/*媒体查询*/
#banner {
  /*border: 1px solid red;*/
  position: relative;
  background: orange;
  width: 100%;
  z-index: 1;
  background: #000000 url(../../../assets/img/home/banner_moon.png) 80% center
    no-repeat;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 0;
}

.stars,
.twinkling,
.clouds {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #000 url(../../../assets/img/home/stars.png) repeat top center;
  z-index: 0;
}

.twinkling {
  background: transparent url(../../../assets/img/home/twinkling.png) repeat
    bottom center;
  z-index: 1;
  -moz-animation: move-twink-back 200s linear infinite;
  -ms-animation: move-twink-back 200s linear infinite;
  -o-animation: move-twink-back 200s linear infinite;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}

.clouds {
  background: transparent url(../../../assets/img/home/clouds.png) repeat top
    center;
  z-index: 3;
  -moz-animation: move-clouds-back 200s linear infinite;
  -ms-animation: move-clouds-back 200s linear infinite;
  -o-animation: move-clouds-back 200s linear infinite;
  -webkit-animation: move-clouds-back 200s linear infinite;
  animation: move-clouds-back 200s linear infinite;
}

@keyframes move-twink-back {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -10000px 5000px;
  }
}

@keyframes move-clouds-back {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 10000px 0;
  }
}

.info {
  text-align: center;
  position: absolute;
  /*border: 1px solid red;*/
  width: 100%;
  margin: 20px 0;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  h3 {
    font-size: 48px;
    color: #ffffff;
    /*line-height: 70px;*/
    margin-bottom: 70px;
  }
  p {
    font-size: 22px;
    color: #ffffff;
    margin-bottom: 134px;
  }
  .btn_box {
    display: flex;
    align-items: center;
    justify-content: center;
    .paper {
      text-decoration: none;
      @include btn_home_banner;
      color: #000000;
      line-height: 60px;
      background: linear-gradient(to right, #747bcc, #465fca);
      margin-right: 40px;
      i {
        margin-right: 5px;
      }
    }
    .purse {
      @include btn_home_banner;
      text-decoration: none;
      color: white;
      line-height: 56px;
      border: 2px solid #ffffff;
      transition: all 2s ease;
      i {
        margin-right: 5px;
      }
      &:hover {
        border: 2px solid transparent;
        background: linear-gradient(to right, #747bcc, #465fca);
        color: #000000;
      }
    }
  }
}
</style>
