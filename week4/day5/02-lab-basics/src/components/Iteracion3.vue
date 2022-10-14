<template>
    <div v-if="isRender">Iteracion 3</div>
    <button @click="onClick">Change</button>
</template>
<script setup>
import { ref } from 'vue';

const isRender = ref(true)

const onClick = () => {
    isRender.value = !isRender.value
}
</script>
<style scoped>

</style>