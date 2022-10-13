<template>
    <ul>
        <li><router-link to="/" >Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="http://127.0.0.1:5173/about">About</a></li>
    </ul>
    <!-- En el router view se cargara el componente del router -->
    <router-view></router-view>
</template>
<script setup>
</script>
<style scoped>

</style>