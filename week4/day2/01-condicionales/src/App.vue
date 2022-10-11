<template>
    {{numeros}}
    <!-- key le asigna un identificador a cada iteracion, es un atributo propio de vue no de html -->
    <!-- no es recomendable asignar el index al key -->
    <div v-for="numero, index in numeros" :key="index">
        {{index}} - {{numero}}
    </div>
    <ul>
        <li v-for="numero in numeros" :key="numero"> {{numero}}</li>
    </ul>
    <button @click="show()">Clic</button>
    <!-- if hace desaparecer el html -->
    <div v-if="isRender">Esto es un div en un if</div>
    <div v-else-if="condicion2">Se cumple la segunda condicion</div>
    <div v-else>No se cumple nunguna condicion</div>

    <!-- Show solo oculta el elemento con un display: none -->
    <div v-show="isRender">Esto es un div en un swow</div>
</template>

<script setup>
import { ref } from 'vue';
const numeros = [1, 2, 3, 4, 5]

// Es lo mismo que le v-for
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
}

const isRender = ref(false);
const condicion2 = false;
const show = () => {
    isRender.value = !isRender.value
}

</script>

<style scoped>

</style>