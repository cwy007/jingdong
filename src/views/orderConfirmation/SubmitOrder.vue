<template>
  <div class="order">
    <div class="order__price">
      实付金额<span class="order__price__num">¥{{price}}</span>
    </div>
    <div class="order__btn">提交订单</div>
  </div>
  <div class="mask">
    <div class="mask__content">
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div class="mask__content__btn" @click="handleConfirmOrder(true)">取消订单</div>
        <div class="mask__content__btn" @click="handleConfirmOrder(false)">确认支付</div>
      </div>
    </div>
  </div>
  <Toast v-if="show" :message="message"/>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { post } from '@/utils/request'
import { useCommonCartEffect } from '@/effects/cartEffect'
import Toast, { useToastEffect } from '@/components/Toast'

export default {
  name: 'SubmitOrder',
  components: { Toast },
  setup (props) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const shopId = route.params.id
    const { cartList } = useCommonCartEffect()
    const { show, message, showToast } = useToastEffect()

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

    const shopName = computed(() => {
      return cartList[shopId]?.shopName || ''
    })
    const products = computed(() => {
      const p = cartList[shopId]?.productList || {}
      return Object.values(p).map(item => {
        return { id: parseInt(item._id, 10), num: item.num }
      })
    })
    const handleConfirmOrder = async (isCanceled) => {
      try {
        const result = await post('/api/order2', {
          addressId: 1,
          shopId,
          shopName: shopName.value,
          isCanceled,
          products: products.value
        })
        if (result?.errno === 0) {
          store.commit('emptyCartProducts', { shopId })
          router.push({ name: 'Login' })
        } else {
          showToast('注册失败')
        }
      } catch (e) {
        showToast('请求失败')
      }
    }
    return { price, handleConfirmOrder, show, message }
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

.mask {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: #fff;
    text-align: center;
    border-radius: .04rem;
    &__title {
      margin: .24rem 0 0 0;
      line-height: .26rem;
      font-size: .18rem;
      color: #333;
    }
    &__desc {
      margin: .08rem 0 0 0 0;
      font-size: .14rem;
      color: #666;
    }
    &__btns {
      display: flex;
      margin: .24rem .58rem;
    }
    &__btn {
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size: .14rem;
      &:nth-child(1) {
        margin-right: .12rem;
        border: .01rem solid #4FB0F9;
        color: #4FB0F9;
      }
      &:nth-child(2) {
        margin-left: .12rem;
        border: .01rem solid #4FB0F9;
        background: #4FB0F9;
        color: $bgColor;
      }
    }
  }
}
</style>
