<template>
  <div class="docker">
    <div
      class="docker__item"
      :class="{'docker__item--active': route.name === item.to.name}"
      v-for="(item) in dockerList"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <span class="iconfont" v-html="item.icon" />
        <span class="docker__title">{{item.text}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'Docker',
  setup () {
    const route = useRoute()
    const dockerList = [
      { icon: '&#xe602;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe645;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe600;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe65f;', text: '我的', to: { name: 'My' } }
    ]
    return {
      dockerList,
      route
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
  border-top: .01rem solid $content-bgColor;
  padding: $wrapper-padding;
  &__item {
    flex: 1;
    a {
      text-decoration: none;
      color: $content-fontColor;
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .iconfont {
      font-size: .2rem;
      padding: .07rem 0 .02rem 0;
    }
    &--active a {
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
