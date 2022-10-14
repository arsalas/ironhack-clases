<template>
    <section class="section" v-if="!isLoading">

        <figure class="image is-128x128">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">
        </figure>
        <div class="title">{{country.name.common}}</div>
        <table class="table is-fullwidth">
            <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{{country.capital[0]}}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{{country.area}} km <sup>2</sup></td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            <li v-for="border in country.borders">
                                <router-link :to="{name: 'details', params: {code: border}}">
                                    {{findCountry(border).name.common}}</router-link>
                            </li>
                        </ul>
                    </td>
                </tr>

            </tbody>
        </table>
    </section>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import countries from '../assets/contries.json'

const route = useRoute();
const country = ref();
const isLoading = ref(true)

// onMounted es una funcion que se llama en el momento que el componente esta listo para renderizarse
onMounted(() => {
    country.value = findCountry(route.params.code);
    console.log(country.value)
    isLoading.value = false;
})

watch(() => route.params.code, newValue => {
    country.value = findCountry(route.params.code);
   
})

const findCountry = (code) => {
    // Nos busca el pais en la array
    return countries.find((country) => {
        return country.alpha3Code === code
    })

}

</script>
<style scoped>

</style>