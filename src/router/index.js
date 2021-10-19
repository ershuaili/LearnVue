import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store";

const routes = [
    {
        path: '/index',
        name: 'AppIndex',
        component: () => import('../views/Login.vue'),
        meta: {
            requireAuth: true
        }
    },
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
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {
            if (store.state.user.username) {
                next()
            } else {
                next({
                    path: 'login',
                    query: {redirect: to.fullPath}
                })
            }
        } else {
            next()
        }
    }
)
export default router
