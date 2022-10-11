<template>
    <!-- <h1>Slot</h1>
    <SlotComponent>
        <h1>Texto pasado desde el padre</h1>
    </SlotComponent>
    <SlotComponent></SlotComponent>
    <SlotCard>
        <div>Contenido desde el padre que tendra la card</div>
    </SlotCard>
    <SlotCard>
       <template #header>Simplify</template>
       <template #contenido>UI Design & App Development</template>
    </SlotCard>
    <SlotCard>
       <template #header>Dashcoin</template>
       <template #contenido>Web Development</template>
    </SlotCard>
    <SlotCard/> -->
    <h1>Props</h1>
    <!-- No le estamos pasando el prop de contenido y 
    nos saldra una alerta diciendonos que es requerido -->
    <Props contenido="UI Design & App Development" />
    <Props header="Dashcoin" contenido="Web Development" />

    <!-- Los : nos indica que el contenido del atributo se va dar en javascript -->
    <Props v-for="project in projects" :header="project.header" :contenido="project.contenido" />

</template>
<script setup>

import SlotComponent from './components/SlotComponent.vue';
import SlotCard from './components/SlotCard.vue';
import Props from './components/Props.vue';

const projects = [
    {
        header: "Simplify",
        contenido: "UI Design & App Development"
    }, 
    {
        header: "Dashcoin",
        contenido: "Web Development"
    },
    {
        header: "Vectorify",
        contenido: "User Experience Design"
    }
]

</script>
<style scoped>

</style>