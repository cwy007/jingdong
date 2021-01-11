<template>
  <div class="order">
    <div class="order__price">
      实付金额<span class="order__price__num">¥{{price}}</span>
    </div>
    <div class="order__btn">提交订单</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/cartEffect'

export default {
  name: 'SubmitOrder',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { cartList } = useCommonCartEffect()

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
    return { price }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .49rem;
  line-height: .49rem;
  background: $bgColor;
  display: flex;
  font-size: .14rem;
  &__price {
    flex: 1;
    text-indent: .24rem;
    color: $content-fontColor;
    &__num {
      color: #151515;
      font-size: .16rem;
      margin-left: .02rem;
    }
  }
  &__btn {
    width: .98rem;
    background: $light-btn-bgColor;
    color: $bgColor;
    text-align: center;
  }
}
</style>
