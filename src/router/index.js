import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/login'
  },
  {
    // 登录界面
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    // 注册界面
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
