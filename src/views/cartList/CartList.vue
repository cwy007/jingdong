<template>
  <div class="wrapper">
    <div class="title">我的全部购物车{{`（${cartNum}）`}}</div>
    <div class="shops">
      <div class="empty" v-if="cartNum === 0">购物车当前为空</div>

      <div class="shop" v-for="(item, index) in cartListWithProducts" :key="index">
        <div class="shop__title">{{item.shopName}}</div>
        <div class="products">
          <template v-for="product in item.productList" :key="product._id">
            <div class="products__item" v-if="product.count > 0">
              <img :src="product.imgUrl" class="products__item__img"/>
              <div class="products__item__detail">
                <h4 class="products__item__title">{{product.name}}</h4>
                <p class="products__item__price">
                  <span class="products__item__num">
                    <span class="products__item__yen">&yen;</span>
                    {{product.price}} x {{product.count}}
                  </span>
                  <span class="products__item__total">
                    <span class="products__item__yen">&yen;</span>
                    {{((product.price || 0) * (product.count || 0)).toFixed(2)}}
                  </span>
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <Docker/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Docker from '@/components/Docker.vue'

export default {
  components: { Docker },
  name: 'CartList',
  setup () {
    const store = useStore()
    const { cartList } = store.state
    const cartListWithProducts = computed(() => {
      const newCartList = {}
      for (const shopId in cartList) {
        let total = 0
        const products = cartList[shopId].productList
        for (const productId in products) {
          const product = products[productId]
          total += (product.count || 0)
        }
        if (total > 0) {
          newCartList[shopId] = cartList[shopId]
        }
      }
      return newCartList
    })

    const cartNum = computed(() => {
      return Object.keys(cartListWithProducts.value).length
    })

    return { cartListWithProducts, cartNum }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
@import '@/assets/stylesheets/mixins.scss';

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: $light-content-bgColor;
  .title {
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .16rem;
    color: $content-fontColor;
    background: $bgColor;
  }
  .shops {
    position: absolute;
    left: 0;
    right: 0;
    top: .44rem;
    bottom: .49rem;
    overflow-y: scroll;
    display: flex;
    flex-flow: column;
    padding-top: .16rem;
    .empty {
      flex: 1;
      margin: 0 .18rem .16rem;
      padding: .16rem 0;
      background: $bgColor;
      line-height: .44;
      font-size: .16rem;
      color: $light-fontColor;
      text-align: center;
    }
  }
}

.shop {
  margin: 0 .18rem .16rem;
  background: $bgColor;
  padding: 0 .16rem;
  &__title {
    height: .54rem;
    line-height: .54rem;
    font-size: .16rem;
    color: $content-fontColor;
  }
  .products {
    &__item {
      display: flex;
      padding-bottom: .16rem;
      &__img {
        width: .46rem;
        height: .46rem;
        padding-right: .16rem;
      }
      &__detail {
        flex: 1;
        .products__item__title {
          margin: 0;
          line-height: .2rem;
          font-size: .14rem;
          color: $content-fontColor;
        }
        .products__item__price {
          display: flex;
          font-size: .1rem;
          .products__item__num {
            color: $hightlight-fontColor;
          }
          .products__item__total {
            flex: 1;
            text-align: right;
          }
          .products__item__yen {
            font-size: .08rem;
          }
        }
      }
    }
  }
}
</style>
