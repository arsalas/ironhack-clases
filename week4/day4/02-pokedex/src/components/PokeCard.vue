<template>
    <div v-if="!isLoading" class="card pt-3" :style="{backgroundColor: bg}">
        <div class="card-image p-4">
            <figure class="image is-4by3">
                <img :src="getPokemonImage(id)" :alt="name">
            </figure>
        </div>
        <div class="card-content is-uppercase has-text-centered has-text-weight-bold">
            #{{id}} <br> {{name}}
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { getColorByImage, getPokemonImage } from '../helpers'

const props = defineProps({
    name: String,
    id: Number
},
)
const bg = ref('#fff');
const isLoading = ref(true)

onMounted(async () => {
    const color = await getColorByImage(getPokemonImage(props.id));
    isLoading.value = false;
    bg.value = color
})






</script>
<style scoped>
.card {
    border-radius: 10px;
    transition: 300ms;
    cursor: pointer;
    height: 100%;
}

.card:hover {
    transform: scale(1.1);
}

.card img {
    object-fit: contain;
}

.card .card-image {
    background-image: url(https://i.pinimg.com/originals/fd/72/1f/fd721f81cf12ebf7b3234c2c665b584c.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.card-content {
    font-size: 1rem;
    color: #eee;
    text-shadow: 1px 1px 2px black;
    padding: 10px;
}
</style>