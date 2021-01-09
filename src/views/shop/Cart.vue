<template>
  <div class="cart">
    <div class="product">
      <template v-for="item in productList">
        <div class="product__item" v-if="item.count > 0" :key="item._id">
          <div
            :class="['iconfont', item.checked? 'product__item__checked' : 'product__item__unchecked']"
            v-html="item.checked ? '&#xe620;' : '&#xe601;'"
            @click="changeCartItemChecked(shopId, item._id)"
          />
          <img class="product__item__img" :src="item.imgUrl" alt="tomato">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus iconfont"
              @click="changeCartItemInfo(shopId, item._id, item, -1)"
            >&#xe65b;</span>
            {{item.count || 0}}
            <span
              class="product__number__plus iconfont"
              @click="changeCartItemInfo(shopId, item._id, item, 1)"
            >&#xe624;</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="https://tva1.sinaimg.cn/large/008eGmZEly1gmhkhuoxkuj302c026gle.jpg" alt="bucket">
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

const useCartEffect = (shopId) => {
  const store = useStore()
  const { cartList } = store.state
  const { changeCartItemInfo } = useCommonCartEffect()

  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        count += productList[i].count
      }
    }
    return count
  })

  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        if (productList[i].checked) {
          count += (productList[i].count * productList[i].price)
        }
      }
    }
    return count.toFixed(2)
  })

  const productList = computed(() => {
    return cartList[shopId] || []
  })

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  return { total, price, productList, changeCartItemInfo, changeCartItemChecked }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id

    return {
      shopId,
      ...useCartEffect(shopId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
@import '@/assets/stylesheets/mixins.scss';

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__checked, &__unchecked {
      line-height: .5rem;
      margin-right: .2rem;
      color: #0091FF;
      font-size: .2rem;
    }
    &__unchecked {
      color: #666;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      font-weight: bold;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontColor;
      @include ellipsis;
    }
    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontColor;
    }
    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      font-size: .14rem;
      display: flex;
      align-items: center;
      &__minus, &__plus {
        display: inline-block;
        font-size: .2rem;
      }
      &__minus {
        margin-right: .1rem;
        color: $medium-fontColor;
      }
      &__plus {
        margin-left: .1rem;
        color: $btn-bgColor;
      }
    }
  }
}
.check {
  box-sizing: border-box;
  height: .5rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .5rem;
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
