<template>
    <h1>Pokemons</h1>
    <div v-for="pokemon in pokemons">
        {{pokemon.name}}
    </div>
</template>
<script setup>
// El componente no puede tener asincronia
// Tenemos que usar el onMounted para llamar una funcion asincrona al inicio del componente
import { ref, onMounted } from 'vue';

const pokemons = ref([])

// 1 - Creo la funcion que va a recibir la informacion de los pokemon en un fetch
const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json())
    console.log(res)
    pokemons.value = res.results
}

// 2- Cuando el componente este listo llamo a funcion que me da los pokemon
// y da valor a la variable pokemons una vez se ha creado
// En el onMounted deberian ir todas las funciones que se ejecutan al inicio del componente
// El onMounted nos asegura que existe el div
onMounted(() => {
    console.log('componente montado')
    getPokemons();
})


// getPokemons();

</script>
<style scoped>

</style>