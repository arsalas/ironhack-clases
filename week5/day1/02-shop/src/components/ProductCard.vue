<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="props.product.image" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <div class="subtitle">
                    {{props.product.title}}
                </div>
                <div>
                    {{props.product.price}} $
                </div>
            </div>
            <!-- Agregar un boton que use el store para poner el producto el el carrito -->
            <button @click="onClick" class="button is-success is-fullwidth">Comprar</button>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import { useCartStore } from '../store/cart'

const props = defineProps({
    product: Object
})

const cartStore = useCartStore();

const onClick = () => {
    cartStore.add(props.product)
}

</script>
<style scoped>
.card {
    height: 100%;
}

img {
    object-fit: contain;
}
</style>