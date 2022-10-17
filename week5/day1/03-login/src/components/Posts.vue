<template>
    <div class="mt-5">
        <form @submit.prevent="onSubmit">
            <div class="control">
                <textarea v-model="message" class="textarea" placeholder="Escribe un post"></textarea>
            </div>
            <div class="control">
                <button type="submit" class="mt-2 button is-info">Enviar</button>
            </div>
        </form>
    </div>
    <!-- Crear un componente para visualizar el post como el lab de Tweets
    Recorrer la array para mostrarlos todos -->
</template>
<script setup>
import { ref } from 'vue';
import { usePostsStore } from '../store/posts'
import { useAuthStore } from '../store/auth'

const postStore = usePostsStore();
const authStore = useAuthStore();
// Al enviar el formulario hacer un push en el store de posts
// Tenemos que crear un action que se encarque de hacer el push
const message = ref('');

const onSubmit = () => {
    postStore.new(message.value, authStore.user.name)
}

</script>
<style scoped>

</style>