<template>
    <div class="container">
        <div class="details" v-if="isLoading">
            <Loading />
        </div>
        <div v-else class="details">
            <div class="details-title">
                <div v-if="pokemon.id == 1"></div>
                <router-link class="nav-pokemon" v-else :to="{name:'details', params:{id:pokemon.id - 1}}">
                    <i class="fa-solid fa-arrow-left"></i>
                    <figure class="image is-64x64">
                        <img :src="getPokemonImage(pokemon.id - 1)" alt="">
                    </figure>

                </router-link>
                <h1>#{{pokemon.id}} {{pokemon.name}}</h1>
                <div v-if="pokemon.id == limitPokemons"></div>
                <router-link v-else class="nav-pokemon" :to="{name:'details', params:{id:pokemon.id + 1}}">
                    <figure class="image is-64x64">
                        <img :src="getPokemonImage(pokemon.id + 1)" alt="">
                    </figure>
                    <i class="fa-solid fa-arrow-right"></i>
                </router-link>
            </div>
            <div class="details-data">
                <div class="columns">
                    <div class="column is-6">
                        <PokemonProfile :pokemon="pokemon" />
                    </div>
                    <div class="column is-6">
                        <div class="pokemon-info">
                            <Sprites :sprites="pokemon.sprites" />
                            <div>
                                <h2 class="subtitle has-text-weight-bold mb-2">ABILITIES</h2>
                                <div class="tags are-medium">
                                    <div class="tag" v-for="ability in pokemon.abilities">
                                        {{ability.ability.name}}
                                    </div>
                                </div>
                            </div>
                            <div class="my-2">
                                <h2 class="subtitle has-text-weight-bold mb-2">STATS</h2>
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
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { getPokemonDetails } from '../api';
import { getPokemonImage, getColorByImage } from '../helpers';
import { limitPokemons } from '../config'
import Loading from '../components/Loading.vue';
import PokemonProfile from '../components/PokemonProfile.vue';
import Sprites from '../components/Sprites.vue';
import Stats from '../components/Stats.vue';

// route nos da la informacion de la ruta
const route = useRoute();
//router nos permite usar el router
const router = useRouter();
const isLoading = ref(true);
const pokemon = ref(undefined);
const color = ref();

// Observa una variable, en esta caso el route.params.id y cuando cambia ejecuta una funcion
// lo usaremos cuando tengamos una url con parametros y cambie el valor para actualizar los datos
watch(() => route.params.id, newValue => {
    console.log('la url ha cambiado')
    // isLoading.value = true;
    loadDetails()
})

const loadDetails = async () => {
    pokemon.value = await getPokemonDetails(route.params.id)
    color.value = await getColorByImage(getPokemonImage(pokemon.value.id))
    isLoading.value = false
}

onMounted(() => {
    if (route.params.id > limitPokemons) {
        // con push cambiamos la ruta y la web navega al name que le digamos
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

.details {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
}

.details-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    text-align: center;
    /* v-bind vincula una propiedad del style a una variable del script */
    background-color: v-bind(color);
}

.nav-pokemon {
    display: flex;
    align-items: center;
}

a {
    color: #fff;
    text-shadow: 1px 1px 2px black;
}

.container * {
    transition: 300ms;
}

.tag {
    background-color: v-bind(color);
    color: #fff;
    text-shadow: 1px 1px 2px black;
    text-transform: capitalize;
}
</style>