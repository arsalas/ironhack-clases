import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia';
// cretePinia
const pinia = createPinia();

createApp(App)
// Use de pinia
.use(pinia)
.mount('#app')
