<template>
    <h1>Options API</h1>
    Contador: {{counter}}
    <div>
        <button @click="sumar()">+</button>
        <button @click="resta()">-</button>
        <button @click="reset()">Reset</button>
    </div>
</template>
<script>
export default {
    // Definimos las variables
    data() {
        return {
            counter: 0
        }
    },
    // Definimos las funciones
    methods: {
        sumar() {
            this.counter++;
        },
        resta() {
            this.counter--;
        },
        reset() {
            this.counter = 0
        }
    }
}
</script>
<style>

</style>