import {createRouter, createWebHistory} from 'vue-router'

// Definimos las rutas
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/:id',
        name: 'details',
        component: () => import('../views/Details.vue')
    }
]

// Creamos el router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router