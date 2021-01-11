<template>
  <div class="content">
    <div class="shopname">{{shopName}}</div>
    <div class="products_wrapper">
      <div class="products">
        <template v-for="item in productList" :key="item._id">
          <div
            class="products__item"
            v-if="item.count > 0"
          >
            <img :src="item.imgUrl" alt="img" class="products__item__img">
            <div class="products__item__detail">
              <h4 class="products__item__title">{{item.name}}</h4>
              <p class="products__item__price">
                <span class="products__item__num">
                  <span class="products__item__yen">&yen;</span>{{item.price}} x {{item.count}}
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen">&yen;</span>{{(item.count * item.price).toFixed(2)}}
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/cartEffect'

export default {
  name: 'OrderConfirmation',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { cartList } = useCommonCartEffect()
    const shopName = computed(() => {
      return cartList[shopId]?.shopName || ''
    })
    const productList = computed(() => {
      return cartList[shopId]?.productList || {}
    })

    return { shopName, productList }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
@import '@/assets/stylesheets/mixins.scss';

.content {
  margin: .16rem .18rem 0;
  .shopname {
    padding: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontColor;
    font-weight: bold;
    background: $bgColor;
  }
  .products_wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 2.51rem;
    bottom: .6rem;
    overflow: scroll;
    margin: 0 .18rem;
    .products {
      background: $bgColor;
      padding: 0 .16rem;
      &__item {
        padding-bottom: .16rem;
        display: flex;
        &__img {
          width: .46rem;
          height: .46rem;
          margin-right: .16rem;
        }
        &__detail {
          flex: 1;
        }
        &__title {
          margin: 0 0 .06rem 0;
          line-height: .2rem;
          font-size: .14rem;
          font-weight: normal;
          @include ellipsis;
        }
        &__price {
          display: flex;
          margin: 0;
          line-height: .2rem;
          font-size: .1rem;
          color: $hightlight-fontColor;
        }
        &__yen {
          font-size: .08rem;
        }
        &__total {
          flex: 1;
          text-align: right;
          color: $dark-fontColor;
        }
      }
    }
  }
}
</style>
