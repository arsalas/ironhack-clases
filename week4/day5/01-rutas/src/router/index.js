// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'list' */ '../views/Home.vue'),
    },
    {
        path: '/about-us',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/projects/:id',
        name: 'projects',
        redirect: { name: 'motherboard' },
        component: () => import('../views/Projects.vue'),
        children: [
            {
                path:'motherboard',
                name: 'motherboard',
                component: ()=> import('../views/MotherBoard.vue')
            },
            {
                path:'appreciated',
                name: 'appreciated',
                component: ()=> import('../views/Appreciated.vue')
            },
        ]
    },
    {
        path: '/:pais',
        name: 'pais',
        component: () => import('../views/Pais.vue'),
       
    },
    // {
    //     path: '/:username',
    //     name: 'profile',
    //     component: () => import('../views/Projects.vue'),
    //     children: [
    //         {
    //             path:'informacion',
    //             name: 'motherboard',
    //             component: ()=> import('../views/MotherBoard.vue')
    //         },
    //         {
    //             path:'trabajo',
    //             name: 'appreciated',
    //             component: ()=> import('../views/Appreciated.vue')
    //         },
    //         {
    //             path:'valoraciones',
    //             name: 'appreciated',
    //             component: ()=> import('../views/Appreciated.vue')
    //         },
    //     ]
    // }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior() {
        // el comportamiento de la barra de scroll al hacer el cambio de ruta
        document.getElementById('app').scrollIntoView();
    }
});

export default router;