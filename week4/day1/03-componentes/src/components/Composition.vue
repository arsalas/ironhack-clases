<template>
    <h1>Composition API</h1>
    Contador: {{counter}}
    <div>
        <button @click="sumar()">+</button>
        <button @click="resta()">-</button>
        <button @click="reset()">Reset</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'

// Creamos variable
const counter = ref(0);
// sin ref no se actualiza el valor
// let counter2 = 0;

// Definimos las funciones
const sumar = () => {
    counter.value++;
}
const resta = () => {
    counter.value--
}
const reset = () => {
    counter.value = 0;
}

</script>
<style>

</style>