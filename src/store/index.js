import { createStore } from 'vuex'

const store = {
  state: {
    cartList: {}
  },
  mutations: {
    addItemToCart (state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {}
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += 1
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {},
  modules: {}
}

export default createStore(store)
