<template>
    <button @click="onClick">Enviar evento al padre</button>
    <button @click="onClick2">Enviar evento al padre con parametros</button>
</template>
<script setup>
import { defineEmits } from 'vue';

// Con defineEmits define los eventos que puede emitir el componente
const emits = defineEmits(['evento', 'eventoConParametros'])

const onClick = () => {
    emits('evento');
}

const onClick2 = () => {
    emits('eventoConParametros', 'EventComponent');
}


</script>
<style scoped>

</style>