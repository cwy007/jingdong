<template>
  <div class="wrapper">
    <img src="https://tva1.sinaimg.cn/large/008eGmZEly1gmfomgprhcj303o03omx2.jpg" alt="img" class="wrapper__img">
    <div class="wrapper__input">
      <input v-model="data.username" type="text" class="wrapper__input__content" placeholder="请输入手机号">
    </div>
    <div class="wrapper__input">
      <input v-model="data.password" type="password" class="wrapper__input__content" placeholder="请输入密码">
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <router-link :to="{name: 'Signup'}" class="wrapper__signup-link">立即注册</router-link>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
  name: 'Login',
  setup () {
    const data = reactive({
      username: '',
      password: ''
    })
    const router = useRouter()
    const handleLogin = () => {
      axios.post('/api/user/login', {
        ...data
      }).then(() => {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      }).catch(() => {
        alert('登录失败')
      })
    }

    return {
      handleLogin,
      data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/variables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin-bottom: .16rem;
    margin: 0 .4rem .16rem .4rem;
    background: #F9F9F9;
    border: .01rem solid rgba(0, 0, 0, .1);
    border-radius: .06rem;
    &__content {
      box-sizing: border-box;
      padding: 0 .16rem;
      border-radius: .06rem;
      border: none;
      outline: none;
      line-height: .48rem;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, .32);
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__signup-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
    text-decoration: none;
    display: block;
  }
}
</style>
