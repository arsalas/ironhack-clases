<template>
    <h1>Parametros</h1>
    El parametro de esta ruta es {{route.params.id}}
</template>
<script setup>
import { useRoute } from 'vue-router'
// useRoute es una funcion que nos da un objeto con la informacion de la ruta
const route = useRoute();
</script>
<style scoped>

</style>