<template>
    <div class="section" v-if="products.length > 0">
        <div class="container">
            <div class="columns is-multiline is-mobile">
                <!-- Hacer un for para mostrar todos los productos -->
                <div v-for="product in products" class="column is-12-mobile is-4-tablet is-3-desktop" :key="product.id">
                    <!-- Reemplazar por ProductCard, le pasaremos como prop el producto entero -->
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue';
// Crear una variable de productos y guardar el resultado de
// el fetch a https://fakestoreapi.com/products
// mostrar la variable de products en el template

const products = ref([]);

onMounted(async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    console.log(response);
    products.value = await response.json();
})



</script>
<style scoped>

</style>