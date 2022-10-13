<template>
  <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-3">
            <figure class="image">
                <img :src="props.sprites.front_default" alt="">
            </figure>
        </div>
        <div class="column is-3">
            <figure class="image">
                <img :src="props.sprites.front_shiny" alt="">
            </figure>
        </div>
        <div class="column is-3" v-if="props.sprites.front_female">
            <figure class="image">
                <img :src="props.sprites.front_female" alt="">
            </figure>
        </div>
        <div class="column is-3" v-if="props.sprites.front_shiny_female">
            <figure class="image">
                <img :src="props.sprites.front_shiny_female" alt="">
            </figure>
        </div>
  </div>
  <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-3">
            <figure class="image">
                <img :src="props.sprites.back_default" alt="">
            </figure>
        </div>
        <div class="column is-3">
            <figure class="image">
                <img :src="props.sprites.back_shiny" alt="">
            </figure>
        </div>
        <div class="column is-3" v-if="props.sprites.back_female">
            <figure class="image">
                <img :src="props.sprites.back_female" alt="">
            </figure>
        </div>
        <div class="column is-3" v-if="props.sprites.back_shiny_female">
            <figure class="image">
                <img :src="props.sprites.back_shiny_female" alt="">
            </figure>
        </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    sprites: Object
})
</script>
<style scoped>

</style>