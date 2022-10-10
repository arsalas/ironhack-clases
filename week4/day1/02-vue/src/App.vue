<template>
    <div class="cont">APP</div>
    <h1>
        {{title}}
    </h1>
    <!-- Importamos el componente y usamos el nombre como etiqueta de html -->
    <HelloWorld />
</template>

<script setup>
//Composition api
// setup indica que vamos a usar composition api
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// ref vincula una variable al html
const title = ref('Variable desde JS')
// con .value cambiamos el valor de la variable
title.value = 'Variable editada'

// Declaramos funciones como lo hariamos en js
const newFunc = () => {
    console.log('console log de funcion');
}

</script>



<style scoped>
/* scoped hace que el css solo se aplique a este archivo */
.cont {
    background-color: red;
}
</style>