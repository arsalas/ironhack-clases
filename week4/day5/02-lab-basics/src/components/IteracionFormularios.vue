<template>
    <div>
        <input type="text" v-model="inputValue">
        <div>
            {{inputValue}}
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';

const inputValue = ref('valor por defecto');

</script>
<style scoped>
</style>