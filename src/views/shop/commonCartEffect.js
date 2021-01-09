import { useStore } from 'vuex'

export const useCommonCartEffect = () => {
  const store = useStore()
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }
  return { changeCartItemInfo }
}
