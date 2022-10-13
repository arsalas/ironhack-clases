<template>
    <div class="container">
        <div class="details" v-if="isLoading">
            <Loading />
        </div>
        <div v-else class="details">
            <div class="details-title">
                <div v-if="pokemon.id == 1"></div>
                <router-link v-else class="nav-pokemon" :to="{name:'details', params:{id:pokemon.id - 1}}">
                    <i class="fa-solid fa-arrow-left"></i>
                    <figure class="image is-64x64">
                        <img :src="getPokemonImage(pokemon.id - 1)" :alt="pokemon.name">
                    </figure>
                </router-link>
                <h1>#{{pokemon.id}} {{pokemon.name}}</h1>
                <div v-if="pokemon.id == limitPokemons"></div>
                <router-link v-else class="nav-pokemon" :to="{name:'details', params:{id:pokemon.id + 1}}">
                    <figure class="image is-64x64">
                        <img :src="getPokemonImage(pokemon.id + 1)" :alt="pokemon.name">
                    </figure>
                    <i class="fa-solid fa-arrow-right"></i>
                </router-link>
            </div>
            <div class="details-data p-4">
                <div class="columns">
                    <div class="column is-6">
                        <PokemonProfile :pokemon="pokemon" />
                    </div>
                    <div class="column is-6">
                        <div class="pokemon-info">
                            <Sprites :sprites="pokemon.sprites" />
                            <div>
                                <h2 class="subtitle has-text-weight-bold mb-2"> ABILITIES</h2>
                                <div class="tags are-medium">
                                    <div class="tag" v-for="ability in pokemon.abilities" :key="ability.ability.name">
                                        {{ability.ability.name}}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <h2 class="subtitle has-text-weight-bold mb-2"> STATS</h2>
                                <Stats :stats="pokemon.stats" :color="color" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPokemonDetails } from '../api';
import { getColorByImage, getPokemonImage } from '../helpers'
import Sprites from '../components/Sprites.vue';
import Stats from '../components/Stats.vue';
import Loading from '../components/Loading.vue';
import PokemonProfile from '../components/PokemonProfile.vue';
import { limitPokemons } from '../config';

const route = useRoute();
const router = useRouter();
const pokemon = ref(undefined)
const isLoading = ref(true);
const color = ref()


watch(() => route.params.id, newValue => {
    // isLoading.value = true;
    loadDetails();
})

const loadDetails = async () => {
    pokemon.value = await getPokemonDetails(route.params.id);
    color.value = await getColorByImage(getPokemonImage(pokemon.value.id))
    console.log(pokemon.value)
    isLoading.value = false;
}

onMounted(async () => {
    if (route.params.id > limitPokemons) {
        router.push({ name: 'home' })
    }
    loadDetails()
})

</script>
<style scoped>


.container {
    height: calc(100vh - 52px);
    display: flex;
    padding: 1rem;
    flex-direction: column;
}

.container * {
    transition: 300ms;
}

.nav-pokemon {
    display: flex;
    align-items: center
}

.details-data>.columns {
    height: 100%;
}

a {
    color: #fff;
    text-shadow: 1px 1px 2px black;
}

a:hover {
    color: #eee;
}


.tag {
    background-color: v-bind(color);
    color: #fff;
    text-shadow: 1px 1px 2px black;
    text-transform: capitalize;
}



.details {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    /* height: 100%; */
    -webkit-box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.75);
}

.details-title {
    color: #eee;
    padding: 0.5rem;
    background-color: v-bind(color);
    font-size: 1.5rem;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.details-title h1 {
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
    padding: 1.2rem;

}

.details-data {
    flex: 1;
    padding: 10px;
}

.details-data>.columns {
    height: 100%;
}



.pokemon-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

}


@media (max-width: 1023px) {
    .container {

        padding: 0rem;

    }

    .details-title {

        font-size: 1.2rem;

    }
}
</style>