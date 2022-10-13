<template>

    <section v-if="!isLoading" class="section container">
        <div class="columns is-multiline is-centered is-mobile">
            <div v-for="(pokemon, index) in pokemons"
                class="column is-6-mobile is-4-tablet is-3-desktop is-2-widescreen">
                <router-link :to="{name:'details', params:{id:index + 1 }}">
                    <PokeCard :name="pokemon.name" :id="index + 1" />
                </router-link>
            </div>
        </div>
    </section>
    <div class="loading-container" v-else>
        <Loading />
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getPokemons } from '../api'
import PokeCard from '../components/PokeCard.vue';
import Loading from '../components/Loading.vue';

const pokemons = ref([]);
const isLoading = ref(true);

onMounted(async () => {
    const res = await getPokemons();
    console.log(res);
    pokemons.value = res.results;
    isLoading.value = false
})

</script>
<style scoped>
.loading-container{
    height: calc(100vh - 52px);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>