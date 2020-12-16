<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe60e;</span>
      北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe654;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe65d;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img
      src="https://tva1.sinaimg.cn/large/0081Kckwly1glpwqfmx85j316g0as0vg.jpg"
      alt="banner"
      class="banner__img"
    >
  </div>
  <div class="icons">
    <div
      class="icons__item"
      v-for="item in iconsList"
      :key="item.imgName"
    >
      <img
        :src="`https://tva1.sinaimg.cn/large/${item.imgName}`"
        alt="icons__item__img"
        class="icons__item__img"
      >
      <span class="icons__item__desc">{{item.desc}}</span>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '0081Kckwly1glpyls5pb7j303c03cwek.jpg', desc: '超市便利' },
      { imgName: '0081Kckwly1glpyls5pb7j303c03cwek.jpg', desc: '菜市场' },
      { imgName: '0081Kckwly1glpymid76nj303c03cmxc.jpg', desc: '水果店' },
      { imgName: '0081Kckwly1glpyna4o7ij303c03c0sw.jpg', desc: '鲜花绿植' },
      { imgName: '0081Kckwly1glpyntcurdj303c03c0sv.jpg', desc: '医药健康' },
      { imgName: '0081Kckwly1glpyo92vrnj303c03c74d.jpg', desc: '家居时尚' },
      { imgName: '0081Kckwly1glpyooqv8lj303c03caa8.jpg', desc: '烘培蛋糕' },
      { imgName: '0081Kckwly1glpyp1vv7fj303c03cjrc.jpg', desc: '签到' },
      { imgName: '0081Kckwly1glpypg5n2xj303c03c74g.jpg', desc: '大牌免运' },
      { imgName: '0081Kckwly1glpypxr2fwj303c03cdfv.jpg', desc: '红包套餐' }
    ]
    return {
      iconsList
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/stylesheets/variables.scss';
@import '@/assets/stylesheets/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  &__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  &__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}
.search {
  display: flex;
  align-items: center;
  height: .32rem;
  margin: 0 0 .12rem;
  border-radius: .16rem;
  background: #F5F5F5;
  color: #B7B7B7;
  font-size: .14rem;
  .iconfont {
    font-size: .2rem;
    padding: 0 .12rem 0 .16rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-flow: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    &__img {
      width: .4rem;
      height: .4rem;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
    }
  }
}
.gap {
  height: .1rem;
  background: $content-bgColor;
  margin: 0 -.18rem;
}
</style>
