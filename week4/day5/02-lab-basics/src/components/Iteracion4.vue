<template>

    <div v-for="element in data" :key="element.title">
        {{element.title}}, {{element.description}}, {{element.content}}
    </div>

</template>
<script setup>

const data = [
    {
        title: 'Titulo 1',
        description: 'Descripcion 1',
        content: 'Contenido 1'
    },
    {
        title: 'Titulo 2',
        description: 'Descripcion 2',
        content: 'Contenido 2'
    },
    {
        title: 'Titulo 3',
        description: 'Descripcion 3',
        content: 'Contenido 3'
    },
]
</script>
<style scoped>

</style>