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
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    product: Object
})

</script>
<style scoped>

.card{
    height: 100%;
}
img {
    object-fit: contain;
}
</style>