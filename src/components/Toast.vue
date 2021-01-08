<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    message: ''
  })
  const showToast = (message) => {
    toastData.show = true
    toastData.message = message
    setTimeout(() => {
      toastData.show = false
      toastData.message = ''
    }, 2000)
  }

  return { ...toRefs(toastData), showToast }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: #FFF;
}
</style>
