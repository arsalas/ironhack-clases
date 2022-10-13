<template>
    <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-3">
            <figure class="image">
                <img :src="sprites.front_default" :alt="sprites.front_default">
            </figure>
        </div>
        <div class="column is-3">
            <figure class="image">
                <img :src="sprites.front_shiny" :alt="sprites.front_shiny">
            </figure>
        </div>
        <div class="column is-3" v-if="sprites.front_female">
            <figure class="image">
                <img :src="sprites.front_female" :alt="sprites.front_female">
            </figure>
        </div>
        <div class="column is-3" v-if="sprites.front_shiny_female">
            <figure class="image">
                <img :src="sprites.front_shiny_female" :alt="sprites.front_shiny_female">
            </figure>
        </div>
    </div>
    <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-3">
            <figure class="image">
                <img :src="sprites.back_default" :alt="sprites.back_default">
            </figure>
        </div>
        <div class="column is-3">
            <figure class="image">
                <img :src="sprites.back_shiny" :alt="sprites.back_shiny">
            </figure>
        </div>
        <div class="column is-3" v-if="sprites.back_female">
            <figure class="image">
                <img :src="sprites.back_female" :alt="sprites.back_female">
            </figure>
        </div>
        <div class="column is-3" v-if="sprites.back_shiny_female">
            <figure class="image">
                <img :src="sprites.back_shiny_female">
            </figure>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    sprites: Object
})
</script>
<style scoped>

</style>