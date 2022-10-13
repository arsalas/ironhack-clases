<template>
    <div class="pokemon-profile">
        <figure class="image">
            <img :src="getPokemonImage(pokemon.id)" :alt="pokemon.name">
        </figure>

        <div class="columns is-mobile types is-centered">
            <div class="column is-6" v-for="pokemonType in pokemon.types" :key="pokemonType.type.name">

                <div :class="['type', pokemonType.type.name]">
                    {{pokemonType.type.name}}
                </div>
            </div>
        </div>

        <div class="subtitle has-text-weight-semibold">
            <span class="has-text-weight-bold"> HEIGHT:</span> {{pokemon.height / 10}}m
            <span class="ml-4 has-text-weight-bold"> WEIGHT:</span> {{pokemon.weight / 10}}kg
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { getPokemonImage } from '../helpers'
defineProps({
    pokemon: Object
})
</script>
<style scoped>
.pokemon-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
}

.types {
    min-width: 80%;
}
</style>