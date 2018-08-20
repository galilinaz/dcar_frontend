<template>
  <div id="technology">
    <!--标题-->
    <title-wrap>Technology Resources</title-wrap>
    <!--概要-->
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" sm="12" md="6" lg="4" align-self="start" v-for="(item,index) of technologysList" :key="item.id">
          <p class="term">
            <img :src="item.imgUrl" />
            <span>{{item.text}}</span>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <div class="chain">
          <img src="../../../assets/img/home/technology_main.png" />
          <span class="label">- Technology Resources -</span>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TitleWrap from './title'
export default {
  name: 'TechnologysWrap',
  data () {
    return {
      technologysList: [
        {
          id: '001',
          text: '颠覆后来者居上的现状，创造更公平的收益体系',
          imgUrl: require('../../../assets/img/home/technology_icon_1.png')
        },
        {
          id: '002',
          text: '抑制asic设备算力优势，真正实现分配的去中心化',
          imgUrl: require('../../../assets/img/home/technology_icon_2.png')
        },
        {
          id: '003',
          text: '颠覆式降低挖矿参与门槛，构建完整的区块链生态',
          imgUrl: require('../../../assets/img/home/technology_icon_3.png')
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
#technology {
  background: #f2f3f5 url(../../../assets/img/home/technology_bg.png) center
    no-repeat;
  .term {
    font-size: 12px;
    color: #343434;
    margin-bottom: 10px;
    img {
      margin-right: 5px;
    }
  }
  .chain {
    padding: 50px 15px 100px;
    text-align: center;
    max-width: 845px;
    width: 100%;
    margin: auto;
    position: relative;
    img {
      border-radius: 50px;
      box-shadow: 0 0 50px #aec0e8;
      width: 100%;
    }
    .label {
      position: absolute;
      font-size: 14px;
      color: #000000;
      width: 210px;
      height: 45px;
      line-height: 45px;
      font-weight: bold;
      border-radius: 0 0 20px 20px;
      text-align: center;
      background: linear-gradient(to right, #f5c571, #f3a06c);
      display: inline-block;
      right: 50px;
    }
  }
}
</style>
