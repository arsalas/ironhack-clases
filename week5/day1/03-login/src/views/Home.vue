<template>

    <!-- Si el usuario no esta autenticado debe mostrar un mensaje que le diga que debe autenticarse
    y un enlace a la pagina de login -->
    <div class="section">
        <div class="container">

            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicacion
                    <router-link :to="{name: 'login'}">
                        Ir a Login
                    </router-link>
                </div>
            </article>
            <div v-else>
                <!-- Poner nombre del usuario y un boton para cerrar la sesion -->
                <div class="title">Hola {{authStore.user.name}}</div>
                <button @click="authStore.logout()" class="button is-danger">Cerrar sesion</button>
                <!-- Poner un formulario con un textarea que nos permita poner mensajes al enviar el formulario -->
                <!-- Crear otro store de posts -->
                <Posts />
            </div>
        </div>

        <!-- TODO 
            CRUD -> Create Read Update Delete
            1- Que el estado sea persistente
            2- Poder borrar posts
            3- Poder editar posts
        -->

    </div>
</template>
<script setup>
import { useAuthStore } from '../store/auth'
import Posts from '../components/Posts.vue'

const authStore = useAuthStore();

</script>
<style scoped>

</style>