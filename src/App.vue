<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe60e;</span>
        北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe654;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe65d;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img
        src="https://tva1.sinaimg.cn/large/0081Kckwly1glpwqfmx85j316g0as0vg.jpg"
        alt="banner"
        class="banner__img"
      >
    </div>
  </div>

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

<style lang="scss">
@import './assets/stylesheets/variables.scss';
@import './assets/stylesheets/mixins.scss';
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem;
  left: 0;
  padding: $wrapper-padding;
  .position {
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
    @include ellipsis;
    &__icon {
      position: relative;
      top: .01rem;
      font-size: .2rem;
    }
    &__notice {
      position: absolute;
      right: 0;
      top: .17rem;
      font-size: .2rem;
    }
  }
  .search {
    display: flex;
    align-items: center;
    height: .32rem;
    margin: 0 0 .12rem;
    border-radius: .16rem;
    background: #F5F5F5;
    color: #B7B7B7;
    font-size: .14rem;
    .iconfont {
      font-size: .2rem;
      padding: 0 .12rem 0 .16rem;
    }
  }
  .banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25%;
    &__img {
      width: 100%;
    }
  }
}

.docker {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: .5rem;
  border-top: 1px solid #F1F1F1;
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
