<template>
  
    <!-- Si el usuario no esta autenticado debe mostrar un mensaje que le diga que debe autenticarse
    y un enlace a la pagina de login -->
    <div class="section">
        <div class="container">

            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicacion
                    <router-link :to="{name: 'login'}">
                        <button class="button is-text">Ir a Login</button>
                    </router-link>
                </div>
            </article>
        </div>

    </div>
</template>
<script setup>
import { useAuthStore } from '../store/auth'

const authStore = useAuthStore();

</script>
<style scoped>

</style>