<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

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

export default {
  props: ['message']
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: $bgColor;
}
</style>
