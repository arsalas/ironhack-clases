<template>
    <div class="post">
        <header>
            <div class="has-text-weight-bold">{{props.post.user}}</div>
            <div>{{date}}</div>
        </header>
        <div>
            {{props.post.message}}
        </div>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    post: Object
})

// Computed guarda en una variable un computo de una o mas variables reactivas
const date = computed(() => props.post.date.toLocaleString())

</script>
<style scoped>
.post{
    margin-top: 10px;
    border: solid 1px #333;
    padding: 1rem;
}

header{
    display: flex;
    justify-content: space-between;
}

</style>