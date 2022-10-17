// Crear un router con las vistas Home y Cart

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/Cart.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;