<template>
  <div class="cart">作业部分代码，同学尝试实现</div>
  <docker/>
</template>

<script>
import Docker from '@/components/Docker.vue'

export default {
  components: { Docker },
  name: 'CartList'
}
</script>

<style lang="scss" scoped>
.cart {
  margin-top: .2rem;
  text-align: center;
}
</style>
