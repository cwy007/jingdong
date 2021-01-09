import { createStore } from 'vuex'

const store = {
  state: {
    cartList: {}
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      const shopInfo = state.cartList[shopId] || {}
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += num
      if (product.count < 0) product.count = 0
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {},
  modules: {}
}

export default createStore(store)
