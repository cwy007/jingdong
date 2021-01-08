<template>
  <div class="shop">
    <img :src="item.imgUrl" alt="shop__img" class="shop__img">
    <div :class="{shop__content: true, 'shop__content--bordered': showBorder}">
      <div class="shop__content__title">{{item.name}}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售{{item.sales}}</span>
        <span class="shop__content__tag">起送￥{{item.expressLimit}}</span>
        <span class="shop__content__tag">基础运费￥{{item.expressPrice}}</span>
      </div>
      <p class="shop__content__highlight">{{item.slogan}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    item: {
      type: Object
    },
    showBorder: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
.shop {
  display: flex;
  padding-top: .12rem;
  &__img {
    width: .56rem;
    height: .56rem;
    margin-right: .16rem;
  }
  &__content {
    padding-bottom: .12rem;
    &--bordered {
      border-bottom: .01rem solid $content-bgColor;
    }
    .shop__content__title {
      line-height: .22rem;
      font-size: .16rem;
    }
    .shop__content__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      .shop__content__tag {
        margin-right: .16rem;
      }
    }
    .shop__content__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: $hightlight-fontColor;
    }
  }
}
</style>
