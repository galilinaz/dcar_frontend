<template>
  <div id="applications">
    <!--标题-->
    <title-wrap>APPLICATIONS SCENARIOS</title-wrap>
    <b-container class="bv-example-row">
      <!--内容-->
      <b-row>
        <b-col>
          <p class="summary">笛卡尔要建立数字金融时代的超级公链，希望打破各个区块链独立封闭的价值孤岛困境， 解决传统金融与数字金融无法相容的难题。 笛卡尔提供完善的金融功能，支持记录元数据,充分释放各类资产的流动性，发掘资产潜在价值。笛卡尔正在成为链接整个数字货币世界与传统金融世界的关键基础设施，促进全球数字金融生态茂盛生长。</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="12" md="6" lg="4" align-self="start" v-for="(item,index) of applicationList" :key="item.id">
          <div class="term">
            <img :src="item.imgUrl" />
            <h4><b class="dot"></b>{{item.title}}</h4>
            <p>{{item.content}}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TitleWrap from './title'
export default {
  name: 'ApplicationWrap',
  data () {
    return {
      applicationList: [
        {
          id: '001',
          title: '保险合约',
          imgUrl: require('../../../assets/img/home/application_icon_1.png'),
          content:
            '笛卡尔融云链相互保障保险合约平台，是基于区块链技术建立智能保障合约市场，用去中介化的互助保障模式替代中心化传统保险模式。'
        },
        {
          id: '002',
          title: '信贷借贷',
          imgUrl: require('../../../assets/img/home/application_icon_2.png'),
          content:
            '笛卡尔融云链支持具有信用和资金能力的机构或者个人作为数字货币的供需中介，以满足数字货币的借贷需求，完成存贷业务。'
        },
        {
          id: '003',
          title: '交易通税',
          imgUrl: require('../../../assets/img/home/application_icon_3.png'),
          content:
            '多种数字资产接入笛卡尔融云链后，笛卡尔融云链上提供隐私保护的交易机制，为有隐私保护需求的交易提供支持。'
        },
        {
          id: '004',
          title: '去中心化交易所',
          imgUrl: require('../../../assets/img/home/application_icon_4.png'),
          content:
            '基于笛卡尔融云链发开的去中心化交易所拥有秒级确认速度，和所有的DAC一样，同时又有别于传统的中心化交易所，避免了中心化交易所譬如成本高，安全性差，交易所作恶等一系列问题。'
        },
        {
          id: '005',
          title: '资产管理',
          imgUrl: require('../../../assets/img/home/application_icon_5.png'),
          content:
            '基于笛卡尔融云链开发的ICO平台，发行方以智能合约进行发行的同时，可以支持多币种进行投资。'
        },
        {
          id: '006',
          title: '便捷支付',
          imgUrl: require('../../../assets/img/home/application_icon_6.png'),
          content:
            '笛卡尔链本身是一个分布式的多币种平台，将数字资产与银行卡完美融合的区块链金融服务，商户和用户都可以使用笛卡尔链钱包完成多币种的支付结算、储存、汇兑等功能，而不需要安装多个数字货币钱包。'
        }
      ]
    }
  },
  methods: {},
  mounted () {},
  components: {
    TitleWrap
  }
}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
#applications {
  background-color: #f2f3f5;
  padding-bottom: 44px;
  text-align: center;
  .summary {
    line-height: 20px;
    font-size: 12px;
    color: #666666;
    /*padding:0 20px;*/
    max-width: 950px;
    margin: auto;
  }
  .term {
    max-width: 322px;
    margin: auto;
    height: 300px;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 38px 34px 20px;
    margin-top: 50px;
    img {
    }
    h4 {
      .dot {
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: #819ce3;
        display: inline-block;
        margin-right: 14px;
        margin-bottom: 5px;
      }
      font-size: 24px;
      color: #161616;
      line-height: 70px;
      height: 70px;
      text-align: center;
      margin-bottom: 0;
      text-indent: -20px;
    }
    p {
      text-align: left;
      font-size: 13px;
      color: #666666;
    }
  }
}
</style>
