<template>
  <div class="wrapper">
    <div class="title">我的全部购物车（2）</div>
    <div class="shops">
      <div class="empty">购物车当前为空</div>
      <div class="shop">
        <div class="shop__title"></div>
        <div class="products">
          <div class="products__item">
            <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" class="products__item__img"/>
            <div class="products__item__detail">
              <h4 class="products__item__title"></h4>
              <p class="products__item__price">
                <span class="products__item__num">
                  <span class="products__item__yen">&yen;</span>33.6 x 3
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen">&yen;</span>99.9
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="shop">
        <div class="shop__title">京东7FRESH七鲜</div>
        <div class="products">
          <div class="products__item">
            <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" class="products__item__img"/>
            <div class="products__item__detail">
              <h4 class="products__item__title">番茄250g/份</h4>
              <p class="products__item__price">
                <span class="products__item__num">
                  <span class="products__item__yen">&yen;</span>33.6 x 3
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen">&yen;</span>99.9
                </span>
              </p>
            </div>
          </div>
          <div class="products__item">
            <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" class="products__item__img"/>
            <div class="products__item__detail">
              <h4 class="products__item__title">番茄250g/份</h4>
              <p class="products__item__price">
                <span class="products__item__num">
                  <span class="products__item__yen">&yen;</span>33.6 x 3
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen">&yen;</span>99.9
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Docker/>
  </div>
</template>

<script>
import Docker from '@/components/Docker.vue'

export default {
  components: { Docker },
  name: 'CartList'
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
@import '@/assets/stylesheets/mixins.scss';

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f8f8f8;
  .title {
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .16rem;
    color: #333;
    background: $bgColor;
  }
  .shops {
    position: absolute;
    left: 0;
    right: 0;
    top: .44rem;
    bottom: .49rem;
    overflow-y: scroll;
    display: flex;
    flex-flow: column;
    padding-top: .16rem;
    .empty {
      flex: 1;
      margin: 0 .18rem .16rem;
      padding: .16rem 0;
      background: $bgColor;
      line-height: .44;
      font-size: .16rem;
      color: #999;
      text-align: center;
    }
  }
}

.shop {
  margin: 0 .18rem .16rem;
  background: $bgColor;
  padding: 0 .16rem;
  &__title {
    height: .54rem;
    line-height: .54rem;
    font-size: .16rem;
    color: #333;
  }
  .products {
    &__item {
      display: flex;
      padding-bottom: .16rem;
      &__img {
        width: .46rem;
        height: .46rem;
        padding-right: .16rem;
      }
      &__detail {
        flex: 1;
        .products__item__title {
          margin: 0;
          line-height: .2rem;
          font-size: .14rem;
          color: #333;
        }
        .products__item__price {
          display: flex;
          font-size: .1rem;
          .products__item__num {
            color: #E93B3B;
          }
          .products__item__total {
            flex: 1;
            text-align: right;
          }
          .products__item__yen {
            font-size: .08rem;
          }
        }
      }
    }
  }
}
</style>
