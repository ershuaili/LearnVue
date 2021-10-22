import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
// 路由数组
const routes = [
    {
        path: '/',
        name: 'Default',
        redirect: 'home',
        component: Home,
    },
    // home组件作为全局的父组件
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'AppIndex',
                component: () => import('../components/AppIndex.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../components/About.vue')
            }
        ]

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
];

// 创建一个路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 暴露这个路由
export default router
