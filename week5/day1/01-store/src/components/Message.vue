<template>
    <div>

        contador desde el componente Message: {{store.count}}
        <button @click="onClick">Incrementar desde message</button>
   </div>
</template>
<script setup>
import {useStore} from '../store/generalStore'

const store = useStore();
const onClick = () => {
    store.increment();
}

</script>
<style scoped>
</style>