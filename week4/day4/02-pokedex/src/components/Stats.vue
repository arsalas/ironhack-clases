<template>
    <div v-for="stat in stats" :key="stat.stat.name">
        <div class="stat">{{stat.stat.name}}</div>
        <progress class="progress is-info" :value="stat.base_stat" max="255"></progress>
    </div>
</template>
<script setup>
const props = defineProps({
    stats: Object,
    color: String
})
</script>
<style scoped>
.stat {
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 2px;
}

.progress.is-info::-webkit-progress-value {
    background-color: v-bind(color)
}
</style>