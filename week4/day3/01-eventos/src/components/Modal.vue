<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <!-- Content ... -->
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button @click="closeModal" class="button">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<script setup>
import {defineEmits} from 'vue';

// Definimos los eventos
const emits = defineEmits(['close']);

const closeModal = () =>{
    emits('close');
}
</script>
<style scoped>

</style>