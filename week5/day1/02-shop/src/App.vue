<template>
    <Navbar />
    <router-view></router-view>
</template>
<script setup>
import Navbar from './components/Navbar.vue'

// TODO
// Que mire si el producto existe e incrementar la cantidad
// store -> products: [{
//     quantity: 0,
//     details: {}
// }]

// Poder borrar productos en el carrito
// Botones de + y - para cambiar las cantidades del producto
// Carrito, calcular el total de precio del carrito
</script>
<style scoped>
</style>