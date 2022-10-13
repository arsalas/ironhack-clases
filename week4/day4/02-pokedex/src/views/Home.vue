<template>
    <section v-if="!isLoading" class="section container">
        <div class="columns is-multiline is-centered is-mobile">
            <div v-for="(pokemon, index) in pokemons" :key="pokemon.name"
                class="column is-6-mobile is-4-tablet is-3-desktop is-2-widescreen ">
                <router-link :to="{name:'details', params:{id: index + 1}}">
                    <PokeCard :name=" pokemon.name" :id="index + 1" />
                </router-link>
            </div>
        </div>
    </section>
    <div class="loading-container" v-else>
        <Loading />
    </div>
</template>
<script setup>
import { onMounted, ref, onUpdated, onUnmounted } from 'vue';
import { getPokemons } from '../api';
import PokeCard from '../components/PokeCard.vue';
import Loading from '../components/Loading.vue';

const pokemons = ref([]);
const isLoading = ref(true);

onUpdated(() => {
    console.log('componente actualizado')
})
onUnmounted(() => {
    console.log('componente detruido')
})


onMounted(async () => {
    console.log('montado')
    const res = await getPokemons();
    isLoading.value = false;
    pokemons.value = res.results;
})
</script>
<style scoped>
.loading-container{
    height: calc(100vh - 52px);
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #fff; */
}
</style>