<template>
    <div class="pokemon-profile">
        <figure class="image">
            <img :src="getPokemonImage(pokemon.id)" alt="">
        </figure>
        <div class="columns is-mobile types is-centered">
            <div class="column is-6" v-for="pokemonType in props.pokemon.types">
                <div :class="['type', pokemonType.type.name]">
                    {{pokemonType.type.name}}
                </div>

            </div>

        </div>
        <div class="subtitle has-text-semibold">
            <span class="has-text-weight-bold"> HEIGHT:</span> {{pokemon.height / 10}}m
            <span class="has-text-weight-bold ml-4">WEIGHT:</span> {{pokemon.weight / 10}}kg

        </div>

    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { getPokemonImage } from '../helpers';
const props = defineProps({
    pokemon: Object
})
</script>
<style scoped>
.types {
    min-width: 80%;
}
.pokemon-profile{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
</style>