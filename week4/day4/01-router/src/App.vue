<template>
    <ul>
        <li><router-link to="/" >Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <!-- con name no tenemos que cambiar el path en el resto de paginas -->
        <li><router-link :to="{name: 'about'}">About con el name</router-link></li>
        <li><a href="http://127.0.0.1:5173/about">About</a></li>
        <li><router-link :to="{name: 'subrutas'}">Subrutas</router-link></li>
        <li><router-link :to="{name: 'ruta1'}">Ruta1</router-link></li>
        <li><router-link :to="{name: 'parametros', params:{id:'parametro1'}}">Parametros 1</router-link></li>
        <li><router-link :to="{name: 'parametros', params:{id:'parametro2'}}">Parametros 2</router-link></li>
    </ul>
    <!-- En el router view se cargara el componente del router -->
    <router-view></router-view>
</template>
<script setup>
</script>
<style scoped>

</style>