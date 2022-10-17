import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

// Crear un store con pinia del carrito donde guardaremos una
// array de productos
// monstrar en el navbar el lenght de los productos en
// la seccion del carrito
const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
