import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

/**
 * @returns {shopId: {shopName: '', productList: {productId: {}}}}
 */
const getLocalCartList = () => {
  return JSON.parse(localStorage.cartList || '{}')
}

const store = {
  state: {
    cartList: getLocalCartList(),
    addressList: []
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
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
      setLocalCartList(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    emptyCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = Object.values(state.cartList[shopId].productList || {})
      if (products.some(product => !product.check)) {
        products.forEach(prod => {
          prod.check = true
        })
      } else {
        products.forEach(prod => {
          prod.check = false
        })
      }
      setLocalCartList(state)
    },
    changeAddressList (state, addressList) {
      state.addressList.splice(0, state.addressList.length, ...addressList)
    }
  }
}

export default createStore(store)
