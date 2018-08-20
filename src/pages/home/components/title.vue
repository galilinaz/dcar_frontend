<template>
  <div class="title_wrap">
    <h3 class="title">
      <b class="line"></b>
      <span><slot></slot></span>
      </h3>
  </div>
</template>

<script>
export default {
  name: 'TitleWrap'
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  .line {
    width: 8px;
    height: 18px;
    margin-right: 12px;
    background-color: #e8aa6f;
    display: inline-block;
  }
  span {
    color: #161616;
    font-size: 16px;
    font-weight: bold;
    line-height: 100px;
    height: 100px;
  }
}
</style>
