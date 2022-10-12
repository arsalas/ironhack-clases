<template>
    <div class="columns is-multiline is-mobile">
        <div v-for="section in props.sections" class="column is-4">
           <a> {{section}}</a>
        </div>
    </div>
</template>
<script setup>

import { defineProps } from 'vue'
const props = defineProps({
    sections: Array
})

</script>
<style scoped>

</style>