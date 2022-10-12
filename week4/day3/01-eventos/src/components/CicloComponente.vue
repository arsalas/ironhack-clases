<template>
    <div class="title">
        {{numero}}
    </div>
</template>
<script setup>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue';

const numero = ref(0);

setInterval(() => {
    numero.value++
}, 1000);

onMounted(() => {
    console.log('evento onMounted')
})

onUpdated(() => {
    console.log('evento onUpdated')
})

onUnmounted(() => {
    console.log('evento onUnmounted')
})
</script>
<style scoped>

</style>