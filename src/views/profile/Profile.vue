<template>
  <div class="wrapper">
    <div class="content">
      <div class="header">
        <div class="header__edit-btn iconfont">&#xe670;</div>
        <div class="header__card">
          <img src="https://tva1.sinaimg.cn/large/008eGmZEly1gml41hovzaj305z05zwek.jpg" class="header__card__img">
          <div class="header__card__nickname">
            {{userInfo.username}}
            <span class="badge">
              <span class="star">
                <span class="iconfont">&#xe60a;</span>
              </span>
              16
            </span>
          </div>
          <div class="header__card__userid">ID: {{userInfo._id}}</div>
          <div class="header__card__items">
            <div class="header__card__item">
              <span class="header__card__item__name">红包</span>
              <span class="header__card__item__value">218</span>
            </div>
            <div class="header__card__item">
              <span class="header__card__item__name">优惠券</span>
              <span class="header__card__item__value">12张</span>
            </div>
            <div class="header__card__item">
              <span class="header__card__item__name">鲜豆</span>
              <span class="header__card__item__value">88</span>
            </div>
            <div class="header__card__item">
              <span class="header__card__item__name">白条</span>
              <span class="header__card__item__value">1000</span>
            </div>
          </div>
        </div>
      </div>
      <div class="links">
        <div class="links__item">
          <span class="iconfont links__item__yen">&#xe6b6;</span>
          <span class="links__item__text">我的钱包</span>
          <span class="iconfont links__item__enter">&#xe6a3;</span>
        </div>
        <router-link :to="{name: 'MyAddressList'}">
          <div class="links__item">
            <span class="iconfont links__item__address">&#xe603;</span>
            <span class="links__item__text">我的地址</span>
            <span class="iconfont links__item__enter">&#xe6a3;</span>
          </div>
        </router-link>
        <div class="links__item">
          <span class="iconfont links__item__service">&#xe679;</span>
          <span class="links__item__text">客服与帮助</span>
          <span class="iconfont links__item__enter">&#xe6a3;</span>
        </div>
      </div>
      <div class="logout" @click="handleLogoutClick">退出登录</div>
    </div>
  </div>
  <Docker/>
</template>

<script>
import { reactive } from 'vue'
import { get } from '@/utils/request'
import Docker from '@/components/Docker.vue'
import { useRouter } from 'vue-router'

const useUserEffect = () => {
  const userInfo = reactive({ _id: '', username: '' })

  const getUserInfo = async () => {
    const result = await get('/api/user/info')
    if (result?.errno === 0 && result?.data) {
      const { _id, username } = result.data
      userInfo._id = _id || ''
      userInfo.username = username || ''
    }
  }
  getUserInfo()

  return { userInfo }
}

export default {
  name: 'Profile',
  components: { Docker },
  setup () {
    const router = useRouter()
    const handleLogoutClick = () => {
      localStorage.removeItem('isLogin')
      router.replace({ name: 'Login' })
    }
    return {
      ...useUserEffect(),
      handleLogoutClick
    }
  }
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
  background: $bgColor;
  overflow: hidden scroll;
}

.header {
  height: 2.32rem;
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
  &::before, &::after {
    content: '';
    display: inline-block;
    border-top: .6rem solid $bgColor;
    border-left: .6rem solid transparent;
    border-right: .6rem solid transparent;
    position: absolute;
    top: 2rem;
  }
  &::before {
    transform: rotate(45deg);
    left: -0.39rem;
  }
  &::after {
    transform: rotate(-45deg);
    right: -0.39rem;
  }
  &__edit-btn {
    position: absolute;
    top: .4rem;
    right: .21rem;
    color: $bgColor;
    font-size: .2rem;
  }
  &__card {
    position: absolute;
    left: .18rem;
    right: .18rem;
    top: .9rem;
    width: 3.39rem;
    height: 2.03rem;
    border-radius: .08rem;
    background: $bgColor;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
    text-align: center;
    z-index: 1;
    &__img{
      width: .94rem;
      height: .94rem;
      border-radius: 50%;
      margin-top: -0.47rem;
    }
    &__nickname {
      margin-top: .12rem;
      line-height: .36rem;
      font-size: .24rem;
      position: relative;
      padding: 0 .82rem;
      letter-spacing: .0019rem;
      @include ellipsis;
      .badge {
        position: absolute;
        left: 2.67rem;
        margin: .12rem 0;
        height: .15rem;
        line-height: .15rem;
        background-image: linear-gradient(180deg, #BEE700 0%, #8ACA00 100%);
        border-radius: .08rem;
        font-size: .1rem;
        padding: 0 .08rem 0 .02rem;
        color: $bgColor;
        .star {
          width: .11rem;
          height: .11rem;
          background: #8cb202;
          border-radius: 50%;
          padding-right: .04rem;
          .iconfont {
            position: relative;
            left: .02rem;
            top: -0.01rem;
            color: #FFC700;
            font-size: .07rem;
          }
        }
      }
    }
    &__userid {
      padding: .02rem 0 .12rem;
      height: .17rem;
      line-height: .17rem;
      font-size: .14rem;
      color: #C1C0C9;
      border-bottom: .01rem solid #F1F1F1;
    }
    &__items {
      display: flex;
      justify-content: space-around;
    }
    &__item {
      display: flex;
      flex-flow: column;
      &__name {
        line-height: .17rem;
        padding: .12rem 0 .03rem;
        font-size: .12rem;
        color: #C1C0C9;
      }
      &__value {
        line-height: .28rem;
        padding-bottom: .16rem;
        font-size: .2rem;
        color: #262628;
      }
    }
  }
}
.links {
  margin: .77rem .18rem 0 .18rem;
  background: $bgColor;
  box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
  border-radius: .08rem;
  padding: .04rem .16rem;
  a {
    text-decoration: none;
  }
  &__item {
    display: flex;
    align-items: center;
    height: .2rem;
    line-height: .2rem;
    font-size: .14rem;
    color: #262626;
    padding: .13rem 0;
    &__yen, &__address, &__service {
      width: .22rem;
      height: .22rem;
      line-height: .22rem;
      background: #ED4A47;
      border-radius: .08rem;
      color: $bgColor;
      text-align: center;
      font-size: .13rem;
      margin-right: .12rem;
    }
    &__address {
      background:#32C5FF;
    }
    &__service {
      background: #9013FE;
    }
    &__enter {
      flex: 1;
      // text-align: right;
      transform: rotate(180deg);
      font-size: .12rem;
      color: #C2C4CA;
    }
  }
}
.logout {
  margin: .16rem .18rem;
  text-align: center;
  color: $bgColor;
  background: $btn-bgColor;
  font-size: .16rem;
  line-height: .4rem;
  border-radius: .04rem;
  box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, .32);
}
</style>
