<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="https://tva1.sinaimg.cn/large/008eGmZEly1gmhkhuoxkuj302c026gle.jpg" alt="bucket">
        <div class="check__icon__tag">3</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;123</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  height: .5rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .5rem;
}
.check {
  display: flex;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      width: .28rem;
      height: .26rem;
      margin: .12rem auto;
    }
    &__tag {
      position: absolute;
      left: .5rem;
      top: .06rem;
      min-width: .1rem;
      height: .1rem;
      line-height: .1rem;
      text-align: center;
      border-radius: .1rem;
      font-size: .08rem;
      background: $hightlight-fontColor;
      color: $bgColor;
      padding: .01rem;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontColor;
    font-size: .12rem;
    &__price {
      line-height: .5rem;
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background: #4FB0F9;
    text-align: center;
    color: $bgColor;
    font-size: .14rem;
  }
}
</style>
