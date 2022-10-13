import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Con .use(router) implementamos en router en la app
createApp(App)
    .use(router)
    .mount('#app')
