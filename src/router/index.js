import { createRouter, createWebHashHistory } from 'vue-router'
import axios from 'axios'
import Home from '@/views/home/Home'
import Signup from '@/views/signup/Signup'
import Login from '@/views/login/Login'

axios.defaults.baseURL = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrSignup = (name === 'Login' || name === 'Signup')
  ;(isLogin || isLoginOrSignup) ? next() : next({ name: 'Login' })
})

export default router
