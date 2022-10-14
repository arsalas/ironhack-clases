<template>
    <h1>Projects {{ route.params.id}}</h1>
    <!-- {{route}} -->
    <div>
        <router-link :to="{name: 'motherboard'}">Motherboard</router-link>
        <router-link :to="{name: 'appreciated'}">Appreciated</router-link>
    </div>
    <router-view></router-view>
</template>
<script setup>
import { ref } from 'vue';
// usamos el useRoute cuando queramos usar un parametro
import { useRoute } from 'vue-router'
'http://127.0.0.1:5173/projects/1/motherboard'
const route = useRoute();
const project = ref('Variable Projecto')

</script>
<style scoped>

</style>