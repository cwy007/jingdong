import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const useAddressEffect = () => {
  const store = useStore()
  const route = useRoute()
  const { addressId } = route.params

  const currentAddress = computed(() => {
    const { addressList } = store.state
    return addressList.find(item => item._id === addressId) || addressList[0]
  })

  return currentAddress
}

export default useAddressEffect
