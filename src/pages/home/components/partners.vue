<template>
  <div id='partners'>
    <title-wrap>Partners</title-wrap>
    <b-container class="bv-example-row">
      <b-row>
        <b-col align-self="start" v-for="(item,index) of partnersList" :key="item.id">
          <div class="img_box">
            <img :src="item.imgUrl" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import TitleWrap from './title'
export default {
  name: 'PartnersWrap',
  data () {
    return {
      partnersList: [
        {
          id: '001',
          imgUrl: require('../../../assets/img/home/partner_7.jpg')
        }, {
          id: '002',
          imgUrl: require('../../../assets/img/home/partner_7.jpg')
        }, {
          id: '003',
          imgUrl: require('../../../assets/img/home/partner_7.jpg')
        }, {
          id: '004',
          imgUrl: require('../../../assets/img/home/partner_7.jpg')
        }, {
          id: '005',
          imgUrl: require('../../../assets/img/home/partner_7.jpg')
        }, {
          id: '006',
          imgUrl: require('../../../assets/img/home/partner_7.jpg')
        }, {
          id: '007',
          imgUrl: require('../../../assets/img/home/partner_7.jpg')
        }, {
          id: '008',
          imgUrl: require('../../../assets/img/home/partner_7.jpg')
        }
      ]
    }
  },
  components: {
    TitleWrap
  }
}
</script>

<style lang="scss" scoped>
#partners {
  .img_box {
    width: 50px;
    // border: 1px solid red;
    img {
    //   border: 1px solid blue;
      height: 50px;
      margin-bottom: 20px;
    }
  }
}
</style>
