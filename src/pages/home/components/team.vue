<template>
  <div id="team">
    <title-wrap>Core Team</title-wrap>
    <div class="content">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) of teamList" :key="item.id">
          <div class="info">
            <div class="face">
              <img :src="item.imgUrl" />
            </div>
            <div class="introduce">
              <h3>{{item.title}}</h3>
              <p>{{item.content}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination " slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import TitleWrap from './title'
export default {
  name: 'HelloWorld',
  data () {
    return {
      teamList: [
        {
          id: '001',
          title: '联合创始人 Panagiotis Giannarakis',
          imgUrl: require('../../../assets/img/home/face.png'),
          content:
            '经济学与计量经济学硕士。有20年以上的国际商业经验，有深厚的私募股权和投资银行背景。 曾担任过首席执行官、首席运营官、首席财务官，并担任过多家上市公司的董事会成员。'
        },
        {
          id: '002',
          title: '联合创始人 李易峰',
          imgUrl: require('../../../assets/img/home/face.png'),
          content:
            '经济学与计量经济学硕士。有20年以上的国际商业经验，有深厚的私募股权和投资银行背景。 曾担任过首席执行官、首席运营官、首席财务官，并担任过多家上市公司的董事会成员。'
        },
        {
          id: '003',
          title: '朱一龙',
          imgUrl: require('../../../assets/img/home/face.png'),
          content:
            '经济学与计量经济学硕士。有20年以上的国际商业经验，有深厚的私募股权和投资银行背景。 曾担任过首席执行官、首席运营官、首席财务官，并担任过多家上市公司的董事会成员。'
        }
      ],
      swiperOption: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        autoplay: false,
        effect: 'slide',
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    TitleWrap
  }
}
</script>
<style type="text/css">
.swiper-button-prev.swiper-button-black,
.swiper-container-rtl .swiper-button-next.swiper-button-black {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/home/prev.png);
  background-size: 40px;
}

.swiper-button-next.swiper-button-black,
.swiper-container-rtl .swiper-button-prev.swiper-button-black {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/home/next.png);
  background-size: 40px;
}

.swiper-button-prev.swiper-button-black:hover {
  background-image: url(../../../assets/img/home/prev_hover.png);
}

.swiper-button-next.swiper-button-black:hover {
  background-image: url(../../../assets/img/home/next_hover.png);
}
</style>
<style scoped lang="scss">
@media (min-width: 1200px) {
  #team {
    padding-bottom: 200px;
    .introduce {
      padding: 50px 0;
      margin: 0 15px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  #team {
    padding-bottom: 100px;
    .introduce {
      padding: 50px 0;
      margin: 0 15px;
    }
  }
}
@media (max-width: 767px) {
  #team {
    padding-bottom: 60px;
    .introduce {
      padding: 30px 0;
      margin: 0 15px;
    }
  }
}
/*媒体查询*/
#team {
  background: url(../../../assets/img/home/team_bg.png) bottom center no-repeat;
  background-size: 100%;
  .content {
    max-width: 1300px;
    margin: auto;
    .info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      max-width: 940px;
      margin: auto;
      .face {
        width: 300px;
        height: 275px;
        background: url(../../../assets/img/home/team_icon.png) center no-repeat;
        position: relative;
        img {
          position: absolute;
          right: 10%;
          top: 10%;
        }
      }
      .introduce {
        background: url(../../../assets/img/home/mark_1.png) no-repeat top left,
          url(../../../assets/img/home/mark_2.png) no-repeat bottom right;
        text-align: left;
        max-width: 500px;
        h3 {
          color: #161616;
          font-size: 20px;
          font-weight: bold;
          line-height: 70px;
          height: 70px;
        }
        p {
          font-size: 12px;
          color: #343434;
        }
      }
    }
  }
}
</style>
