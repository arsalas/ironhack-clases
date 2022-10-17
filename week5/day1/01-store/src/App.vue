<template>
    <Navbar />
    <Message />

    <button @click="onClick">Incrementar</button>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
import Message from './components/Message.vue';
import {useStore} from './store/generalStore';

const store = useStore();

const onClick = () => {
    store.increment();
}
</script>
<style scoped>

</style>