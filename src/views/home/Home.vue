<template>
  <div class="wrapper">
    <static-part/>
    <nearby/>
  </div>
  <docker/>
</template>

<script>
import Docker from '@/components/Docker.vue'
import Nearby from './Nearby.vue'
import StaticPart from './StaticPart.vue'
export default {
  name: 'Home',
  components: {
    Docker,
    Nearby,
    StaticPart
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem;
  left: 0;
  color: $content-fontColor;
  overflow-y: auto;
  padding: 0 .18rem .1rem .18rem;
}
</style>
