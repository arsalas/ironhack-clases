<template>
    <Poekmons />

    <select v-model="theme" @change="applyTheme">
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
        <option value="space">sapce</option>
    </select>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import Poekmons from './components/Poekmons.vue';

const theme = ref('dark')

const applyTheme = () => {
    document.documentElement.className = theme.value
    localStorage.setItem('theme', theme.value)
}

onMounted(()=>{
   theme.value  = localStorage.getItem('theme');
   applyTheme()
})



</script>
<style scoped>

</style>