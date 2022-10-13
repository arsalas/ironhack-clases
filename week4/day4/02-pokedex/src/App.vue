<template>
    <div id="app">
        <Navbar />
        <router-view class="main"></router-view>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { } from 'vue-router'
import { FastAverageColor } from 'fast-average-color'

import logo from './assets/vue.svg'
import Navbar from './components/Navbar.vue';

const fac = new FastAverageColor();
const bg = ref('#fff');
const col = fac.getColorAsync(logo).then(color => bg.value = color.hex)

</script>

<style scoped>
.main{
    /* padding-top: 52px */
}
</style>
