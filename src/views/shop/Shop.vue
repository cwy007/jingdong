<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6a3;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe65d;</span>
        <input type="text" class="search__content__input" placeholder="请输入商品名称搜索">
      </div>
    </div>
    <shop-info :item="item" :showBorder="false" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ShopInfo from '@/components/ShopInfo.vue'
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const item = {
      _id: '1',
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89元减4元运费券'
    }
    const handleBackClick = () => {
      router.back()
    }
    return { item, handleBackClick }
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  flex-flow: row;
  align-items: center;
  margin: .2rem 0 .16rem 0;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    flex-flow: row;
    background: #F5F5F5;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      color: #B7B7B7;
      text-align: center;
    }
    &__input {
      width: 100%;
      height: .32rem;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      font-size: .14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
