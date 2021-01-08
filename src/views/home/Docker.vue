<template>
  <div class="docker">
    <div
      class="docker__item"
      :class="{'docker__item--active': index === 0}"
      v-for="(item, index) in dockerList"
      :key="item.icon"
    >
      <span class="iconfont" v-html="item.icon" />
      <span class="docker__title">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe602;', text: '首页' },
      { icon: '&#xe645;', text: '购物车' },
      { icon: '&#xe600;', text: '订单' },
      { icon: '&#xe65f;', text: '我的' }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
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
  color: $content-fontColor;
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
