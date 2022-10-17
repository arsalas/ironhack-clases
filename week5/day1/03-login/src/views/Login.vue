<template>
    <div class="section">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input v-model="name" class="input" type="text" placeholder="Nombre">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="email" class="input" type="email" placeholder="email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input v-model="password" class="input" type="password" placeholder="password">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="button is-link is-fullwidth" type="submit" placeholder="Text input">
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- 
    1 - Hacer un formulario de login con los inputs de 
    nombre, email y contrasena 
    2- cuando enviemos el formulario actualizar el store
    y redirigirnos al home
    -->
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter();
const authStore = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');

const onSubmit = () => {
    console.log('formulario enviado', name.value, email.value, password.value)
    authStore.login(name.value, email.value);
    // Nos redirige al home
    router.push({ name: 'home' })
}

</script>
<style scoped>

</style>