<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <span class="iconfont">&#xe602;</span>
      <span class="docker__title">首页</span>
    </div>
    <div class="docker__item">
      <span class="iconfont">&#xe645;</span>
      <span class="docker__title">购物车</span>
    </div>
    <div class="docker__item">
      <span class="iconfont">&#xe600;</span>
      <span class="docker__title">订单</span>
    </div>
    <div class="docker__item">
      <span class="iconfont">&#xe65f;</span>
      <span class="docker__title">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker'
}
</script>

<style lang="scss">
@import '@/assets/stylesheets/variables.scss';
.docker {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: .5rem;
  border-top: 1px solid $content-bgColor;
  padding: $wrapper-padding;
  color: $content-fontcolor;
  &__item {
    display: flex;
    flex-flow: column;
    align-items: center;
    flex: 1;
    .iconfont {
      font-size: .2rem;
      padding: .07rem 0 .02rem 0;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
