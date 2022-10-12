<template>
    <div class="card">
        <div class="card-image">
            <div class="content-image">
                <img :src="props.image" />
            </div>

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
import {defineProps} from 'vue';

const props = defineProps({
    title: String,
    body: String,
    image: String
})

</script>
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.card-title {
    font-weight: bold;
    font-size: 1.2rem;
}

.card-image{
    background-color: #ecf7ff;
    width: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* top right bottom left */
    margin: 2rem 0rem 0rem 2rem;
}
</style>