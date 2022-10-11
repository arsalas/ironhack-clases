<template>
    <div class="card">
        <div class="title">
            {{props.header}}
        </div>
        <div class="content">
            {{props.contenido}}
        </div>
        <footer>
            <button @click="onClick()">Boton</button>
        </footer>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
// Definimos las propiedades que vamos a recibir
// Manera simple
// const props = defineProps(['header', 'contenido'])
// Manera mas compleja
const props = defineProps(
    {
        header: {
            type: String,
            required: true,
            default: 'El titulo no lo he recibido'
        },
        contenido: String
    }
)

const onClick = () => {
    // Nos permite acceder al contenido del header desde el script
    alert(props.header)
}


</script>
<style scoped>
.card {
    min-height: 300px;
    border: solid 1px #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 5px;
}

.content {
    flex: 1
}

.title {
    font-weight: bold;
    font-size: 1.1rem;
}
</style>