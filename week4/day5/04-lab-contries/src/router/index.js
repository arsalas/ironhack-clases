// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'countries',
    component: () => import(/* webpackChunkName: 'list' */ '../views/CountriesList.vue'),
    // Si hay children el componente de esta ruta tiene que tener un router-view
    children: [
      {
        path: ':code',
        name: 'details',
        component: () => import(/* webpackChunkName: 'details' */ '../views/CountriesDetails.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;