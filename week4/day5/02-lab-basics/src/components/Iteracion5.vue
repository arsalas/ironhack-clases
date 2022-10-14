<template>
    <div :class="{color: colorChange, otraClasse: true}">Iteracion 5</div>
    <button @click="onClick">Clic</button>
    <div :style="{backgroundColor: valorInput}">Otra opcion donde el usuario elige el color</div>
    <input type="color" v-model="valorInput" />
    {{color}}
</template>
<script setup>
import { ref } from 'vue';

const colorChange = ref(false);
const valorInput = ref('#fff');

const onClick = () => {
    colorChange.value = !colorChange.value

}
</script>
<style scoped>
.color {
    background-color: red;
}
</style>