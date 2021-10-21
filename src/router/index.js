import {createRouter, createWebHistory} from 'vue-router'
// 路由数组
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
        path: '/index',
        name: 'Index',
        component: () => import('../views/Index.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue')
    }
];

// 创建一个路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 暴露这个路由
export default router
