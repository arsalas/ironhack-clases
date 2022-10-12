<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="props.image" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <div class="card-title">{{props.title}}</div>
                <div>{{props.body}}</div>
            </div>
            <button class="button is-ghost p-0">Learn More</button>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
// Definimos los props que vamos a recibir en el componente
const props = defineProps(['title', 'body', 'image']);

</script>
<style scoped>
.card{
    display: flex;
    flex-direction: column;
}

.card-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.card-title{
    font-weight: bold;
    font-size: 1.2rem;
}
</style>