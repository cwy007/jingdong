import { createStore } from 'vuex'

const store = {
  state: {
    // {shopId: {shopName: '', productList: {productId: {}}}}
    cartList: {}
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      const shopInfo = state.cartList[shopId] || { shopName: '', productList: {} }
      let product = shopInfo.productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += num
      if (product.count < 0) product.count = 0
      if (num > 0) product.check = true
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || { shopName: '', productList: {} }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      console.log(shopInfo)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList.productList[shopId][productId]
      product.check = !product.check
    },
    emptyCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    },
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = Object.values(state.cartList[shopId].productList || {})
      if (products.some(product => !product.check)) {
        products.forEach(prod => { prod.check = true })
      } else {
        products.forEach(prod => { prod.check = false })
      }
    }
  },
  actions: {},
  modules: {}
}

export default createStore(store)
