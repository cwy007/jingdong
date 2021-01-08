<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6a3;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe65d;</span>
        <input type="text" class="search__content__input" placeholder="请输入商品名称搜索">
      </div>
    </div>
    <ShopInfo :item="item" :showBorder="false" v-show="item.imgUrl" />
  </div>
  <Content />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '@/utils/request'
import ShopInfo from '@/components/ShopInfo.vue'
import Content from '@/views/shop/Content.vue'

/** 获取商铺信息 */
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: { imgUrl: '' } })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

/** 点击回退逻辑 */
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const { handleBackClick } = useBackRouterEffect()
    getItemData()

    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';

.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  flex-flow: row;
  align-items: center;
  margin: .2rem 0 .04rem 0;
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
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      color: $search-fontColor;
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
      color: $content-fontColor;
      &::placeholder {
        color: $content-fontColor;
      }
    }
  }
}
</style>
