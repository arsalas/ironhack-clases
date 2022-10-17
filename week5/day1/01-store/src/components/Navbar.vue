<template>
    <div>

        Contador desde el navbar: {{store.count}}
        <button @click="store.increment()">Incrementar desde el Navbar</button>
    </div>
</template>
<script setup>
import { useStore } from '../store/generalStore'
// ejecutando la funcion que importamos del store tenemos acceso a sus variables y acciones
const store = useStore();

</script>
<style scoped>

</style>