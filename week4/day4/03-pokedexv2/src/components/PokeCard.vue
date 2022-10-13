<template>
    <div v-if="!isLoading" class="card pt-3" :style="{backgroundColor:bg }">
        <div class="card-image p-4">
            <figure class="image is-4by3">
                <img :src="getPokemonImage(props.id)" alt="">
            </figure>
        </div>
        <div class="card-content is-uppercase has-text-centered has-text-weight-bold">
            #{{id}}
            {{props.name}}
        </div>
    </div>

</template>
<script setup>

import { defineProps, ref, onMounted } from 'vue'
import { getPokemonImage, getColorByImage } from '../helpers';

const props = defineProps({
    name: String,
    id: Number
})

const bg = ref('#fff');
const isLoading = ref(true);
console.log(props)

onMounted(async () => {
    // Obtenemos el color predominante de la imagen
    bg.value = await getColorByImage(getPokemonImage(props.id));
    // inicamos que el componente ya esta listo y se puede mostrar
    isLoading.value = false
})

</script>
<style scoped>
.card {
    border-radius: 10px;
    transition: 300ms;
    height: 100%;
}

.card:hover {
    transform: scale(1.1);
}

.card img {
    object-fit: contain;
}

.card .card-image{
    background-image: url('https://i.pinimg.com/originals/fd/72/1f/fd721f81cf12ebf7b3234c2c665b584c.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.card-content{
    font-size: 1rem;
    color: #eee;
    text-shadow: 1px 1px 2px black;
    padding: 10px;
}
</style>