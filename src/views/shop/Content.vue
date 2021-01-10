<template>
  <div class="content">
    <div class="category">
      <div
        v-for="item in categories"
        :key="item.tab"
        :class="['category__item', {'category__item--active': currentTab === item.tab}]"
        @click="currentTab = item.tab"
      >
        {{item.name}}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="tomato">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__sales">月售 {{item.sales}} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{item.price}}
            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            v-show="cartList?.[`${shopId}`]?.productList[item._id]?.count"
            class="product__number__minus iconfont"
            v-html="'&#xe65b;'"
            @click="changeCartItem(shopId, item._id, item, -1, shopName)"
          />
          <span v-show="cartList?.[`${shopId}`]?.productList[item._id]?.count">
            {{cartList?.[`${shopId}`]?.productList[item._id]?.count}}
          </span>
          <span
            class="product__number__plus iconfont"
            v-html="'&#xe624;'"
            @click="changeCartItem(shopId, item._id, item, 1, shopName)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '@/utils/request'
import { useCommonCartEffect } from './commonCartEffect'
import { useStore } from 'vuex'

const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data // TODO
    }
  }

  watchEffect(getContentData)

  return toRefs(content)
}

export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const categories = [
      { name: '全部商品', tab: 'all' },
      { name: '秒杀', tab: 'seckill' },
      { name: '新鲜水果', tab: 'fruit' }
    ]
    const store = useStore()
    const route = useRoute()
    const currentTab = ref(categories[0].tab)
    const shopId = route.params.id
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { cartList, changeCartItemInfo } = useCommonCartEffect()
    const changeCartItem = (shopId, productId, productInfo, num, shopName) => {
      changeCartItemInfo(shopId, productId, productInfo, num)
      store.commit('changeShopName', { shopId, shopName })
    }

    return {
      categories,
      currentTab,
      list,
      cartList,
      changeCartItem,
      shopId
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
@import '@/assets/stylesheets/mixins.scss';

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.56rem;
  bottom: .5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  background: $search-bgColor;
  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: $content-fontColor;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__img {
      width: .68rem;
      height: .68rem;
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
</style>
