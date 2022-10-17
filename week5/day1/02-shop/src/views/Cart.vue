<template>
    <!-- Poner el listado de los productos del carrito -->
    <div class="section">
        <div class="container">
            <h1 class="title">Cart</h1>
            <div v-for="product in cartStore.products">
                {{product.title}} {{product.price}}$
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCartStore } from '../store/cart'

const cartStore = useCartStore();

</script>
<style scoped>

</style>