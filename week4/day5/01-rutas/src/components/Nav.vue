<template>
    <nav>
        <!-- El router link nos permite navegar en la web -->
        <!-- <a href="/">Home</a> -->
        <!-- <a href="/about">About</a> -->
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'about'}">About</router-link>
        <router-link :to="{name: 'projects', params:{id:'1'}}">Projects 1</router-link>
        <router-link :to="{name: 'pais', params:{pais:'francia'}}">Francia</router-link>
        <router-link :to="{name: 'pais', params:{pais:'alemania'}}">Alemania</router-link>
        <!-- <a href="/about">About</a> -->
        <!-- <router-link to="/about">About</router-link> -->
    </nav>

</template>
<script setup>
</script>
<style scoped>

</style>