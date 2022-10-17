<template>
    <div class="section">
        <div class="container">
            <div class="columns is-multiline is-mobile">
                <div class="column is-12-mobile is-4-tablet is-3-desktop">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img :src="products[0].image" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">

                            <div class="content">
                                <div class="subtitle">
                                    {{products[0].title}}
                                </div>
                                <div>
                                    {{products[0].price}} $
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
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