<template>
  <div class="home_page">
    <!--头部-->
    <header-wrap></header-wrap>
    <!--海报-->
    <banner-wrap></banner-wrap>
    <!--应用场景-->
    <applications-wrap></applications-wrap>
    <!--技术资源-->
    <technology-wrap></technology-wrap>
    <!--发展计划-->
    <development-wrap></development-wrap>
    <!--团队-->
    <team-wrap></team-wrap>
    <!--合作伙伴-->
    <partners-wrap></partners-wrap>
    <!--底部-->
    <footer-wrap></footer-wrap>
  </div>
</template>

<script>
import HeaderWrap from '@/components/header/header'
import BannerWrap from './components/banner'
import ApplicationsWrap from './components/applications'
import TechnologyWrap from './components/technology'
import DevelopmentWrap from './components/development'
import TeamWrap from './components/team'
import PartnersWrap from './components/partners'
import FooterWrap from '@/components/footer/footer'
export default {
  name: 'Home',
  components: {
    HeaderWrap,
    BannerWrap,
    ApplicationsWrap,
    TechnologyWrap,
    DevelopmentWrap,
    TeamWrap,
    PartnersWrap,
    FooterWrap
  }
}
</script>

<style scoped lang="scss">
</style>
