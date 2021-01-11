<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div
          class="top__header__back iconfont"
          @click="handleClickBack"
        >&#xe6a3;</div>
        <div class="top__header__title">确认订单</div>
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__item">瑶妹（先生）</span>
          <span class="top__receiver__info__item">18988886666</span>
        </div>
        <div class="top__receiver__icon iconfont">&#xe6a3;</div>
      </div>
    </div>
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
                    <span class="products__item__yen">&yen;</span>{{item.count * item.price}}
                  </span>
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '@/effects/cartEffect'
const useCartEffect = () => {
  const router = useRouter()
  const route = useRoute()
  const shopId = route.params.id
  const { cartList } = useCommonCartEffect()

  const productList = computed(() => {
    return cartList[shopId]?.productList || {}
  })

  const shopName = computed(() => {
    return cartList[shopId]?.shopName || ''
  })

  const handleClickBack = () => {
    router.back()
  }

  return {
    shopName,
    productList,
    handleClickBack
  }
}
export default {
  name: 'OrderConfirmation',
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

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #F5F5F5;
}
.top {
  position: relative;
  height: 1.81rem;
  background-size: 100% 1.44rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: #FFF;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #FFF;
    border-radius: .04rem;
    color: #333;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      font-weight: bold;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__item {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: #666;
      }
    }
    &__icon {
      position: absolute;
      right: .16rem;
      top: 50%;
      font-size: .16rem;
      transform: translateY(-.08rem) rotate(180deg);
      color: #666;
    }
  }
}
.content {
  margin: .16rem .18rem 0;
  .shopname {
    padding: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: #333;
    font-weight: bold;
    background: #FFF;
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
      background: #FFF;
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
          color: #E93B3B;
        }
        &__yen {
          font-size: .08rem;
        }
        &__total {
          flex: 1;
          text-align: right;
          color: #000;
        }
      }
    }
  }
}
</style>
