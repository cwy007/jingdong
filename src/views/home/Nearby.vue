<template>
      <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img
          src="https://tva1.sinaimg.cn/large/0081Kckwly1glq7v8idnxj309a09a40n.jpg"
          alt="nearby__item__img"
          class="nearby__item__img"
        >
        <div class="nearby__item__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="https://tva1.sinaimg.cn/large/0081Kckwly1glq7v8idnxj309a09a40n.jpg"
          alt="nearby__item__img"
          class="nearby__item__img"
        >
        <div class="nearby__item__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="https://tva1.sinaimg.cn/large/0081Kckwly1glq7v8idnxj309a09a40n.jpg"
          alt="nearby__item__img"
          class="nearby__item__img"
        >
        <div class="nearby__item__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="https://tva1.sinaimg.cn/large/0081Kckwly1glq7v8idnxj309a09a40n.jpg"
          alt="nearby__item__img"
          class="nearby__item__img"
        >
        <div class="nearby__item__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="https://tva1.sinaimg.cn/large/0081Kckwly1glq7v8idnxj309a09a40n.jpg"
          alt="nearby__item__img"
          class="nearby__item__img"
        >
        <div class="nearby__item__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送¥0</span>
            <span class="nearby__content__tag">基础运费¥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nearby'
}
</script>

<style lang="scss">
@import '@/assets/stylesheets/variables.scss';
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
    &__content {
      padding-bottom: .12rem;
      border-bottom: .01rem solid $content-bgColor;
      .nearby__content__title {
        line-height: .22rem;
        font-size: .16rem;
      }
      .nearby__content__tags {
        margin-top: .08rem;
        line-height: .18rem;
        font-size: .13rem;
        .nearby__content__tag {
          margin-right: .16rem;
        }
      }
      .nearby__content__highlight {
        margin: .08rem 0 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: #E93B3B;
      }
    }
  }
}
</style>
