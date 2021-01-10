<template>
  <div class="mask" v-if="showCart" @click="handleCartShowChange(total)"/>
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div class="product__header__all">
          <span
            :class="[
              'product__header__icon', 'iconfont',
              {'product__header__icon--active': allChecked}
            ]"
            v-html="allChecked ? '&#xe620;' : '&#xe63f;'"
            @click="setCartItemsChecked(shopId)"
          />全选
        </div>
        <div class="product__header__clear">
          <span
            class="product__header__clear__btn"
            @click="emptyCartProducts(shopId)"
          >清空购物车</span>
        </div>
      </div>
      <template v-for="item in productList">
        <div class="product__item" v-if="item.count > 0" :key="item._id">
          <div
            :class="[
              'product__item__check', 'iconfont',
              {'product__item__check--active': item.check}
            ]"
            v-html="item.check ? '&#xe620;' : '&#xe63f;'"
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
            <span>{{item.count || 0}}</span>
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
        <img
          class="check__icon__img"
          src="https://tva1.sinaimg.cn/large/008eGmZEly1gmhkhuoxkuj302c026gle.jpg"
          alt="bucket"
          @click="handleCartShowChange(total)"
        >
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <router-link :to="{name: 'Home'}">
        <div class="check__btn">去结算</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
  const { cartList, changeCartItemInfo } = useCommonCartEffect()
  const showCart = ref(false)

  const handleCartShowChange = (total) => {
    if (total !== 0) {
      showCart.value = !showCart.value
    }
  }

  const total = computed(() => {
    const { productList } = cartList[shopId] || {}
    let count = 0
    if (productList) {
      for (const i in productList) {
        count += productList[i].count
      }
    }
    if (count === 0) showCart.value = false

    return count
  })

  const price = computed(() => {
    const { productList } = cartList[shopId] || {}
    let count = 0
    if (productList) {
      for (const i in productList) {
        if (productList[i].check) {
          count += (productList[i].count * productList[i].price)
        }
      }
    }
    return count.toFixed(2)
  })

  const productList = computed(() => {
    return cartList[shopId]?.productList || {}
  })

  const allChecked = computed(() => {
    const products = Object.values(cartList[shopId]?.productList || {})
    return products.filter(p => p.count > 0).every((p) => p.check)
  })

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  const emptyCartProducts = (shopId) => {
    store.commit('emptyCartProducts', { shopId })
  }

  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }

  return {
    shopId,
    total,
    price,
    productList,
    allChecked,
    changeCartItemInfo,
    changeCartItemChecked,
    emptyCartProducts,
    setCartItemsChecked,
    handleCartShowChange,
    showCart
  }
}

export default {
  name: 'Cart',
  setup () {
    return {
      ...useCartEffect()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
@import '@/assets/stylesheets/mixins.scss';

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}

.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: 1px solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontColor;
    &__all {
      width: .64rem;
      margin-left: .18rem;
      display: flex;
      align-items: center;
    }
    &__icon {
      color: $medium-fontColor;
      font-size: .2rem;
      margin-right: .08rem;
    }
    &__icon--active {
      color: $btn-bgColor;
    }
    &__clear {
      flex: 1;
      margin-right: .18rem;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .18rem;
    border-bottom: .01rem solid $content-bgColor;
    &__check {
      line-height: .5rem;
      margin-right: .2rem;
      color: $medium-fontColor;
      font-size: .2rem;
    }
    &__check--active {
      color: $btn-bgColor;
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
  a {
    text-decoration: none;
  }
  &__btn {
    width: .98rem;
    background: #4FB0F9;
    text-align: center;
    font-size: .14rem;
    color: $bgColor;
  }
}
</style>
