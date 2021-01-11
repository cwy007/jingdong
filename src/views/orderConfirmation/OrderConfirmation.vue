<template>
  <div class="wrapper">
    <TopArea/>
    <ProductList/>
    <SubmitOrder/>
  </div>
</template>

<script>
import TopArea from './TopArea'
import ProductList from './ProductList'
import SubmitOrder from './SubmitOrder'

export default {
  name: 'OrderConfirmation',
  components: { TopArea, ProductList, SubmitOrder }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: $search-bgColor;
}
</style>
