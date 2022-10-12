<template>

    <h1>Eventos</h1>
    <!-- Con @ y el nombre del evento creado en el hijo ejecutariamos la funcion onEvento -->
    <EventComponent @evento="onEvento" @eventoConParametros="onEventoConParametros" />
    <div v-if="eventoRecivido">Evento recibido</div>

    <Modal v-if="isOpen" @close="closeModal" />
    <div>
        <button @click="openModal" class="button is-primary">Modal</button>
    </div>

    <button @click="toggleComponent" class="button is-primary mt-2">Ciclo de vida componente</button>
    <CicloComponente v-if="component" />

</template>
<script setup>
import { ref } from 'vue'
import EventComponent from './components/EventComponent.vue';
import Modal from './components/Modal.vue';
import CicloComponente from './components/CicloComponente.vue';

const eventoRecivido = ref(false);
const isOpen = ref(false);
const component = ref(false);

const toggleComponent =()=>{
    component.value = !component.value;
}

// setTimeout(() => {
//     isOpen.value = true
// }, 1000);

const openModal = () => {
    isOpen.value = true;
}

const closeModal = () => {
    isOpen.value = false;
}

const onEvento = () => {
    alert('Evento del hijo recibido')
    eventoRecivido.value = true;
}

const onEventoConParametros = (parametros) => {
    alert('Evento recibido desde: ' + parametros)
}
</script>
<style scoped>
/* hacemos referencia a los elementos con la class button y is-primary */
.button.is-primary {}

/* Hace referencia a un elemeto de class is-primary que es hijo de un elemento con la class button */
.button .is-primary {}
</style>