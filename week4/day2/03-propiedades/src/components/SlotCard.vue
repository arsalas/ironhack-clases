<template>
    <div class="card">
        <div class="title">
            <!-- slots nombrados -->
            <slot name="header"> Titulo</slot>
        </div>
        <div class="content">
            <slot name="contenido">Contenido</slot>
        </div>
        <footer>
            <button @click="onClick()">Boton</button>
        </footer>
    </div>
</template>
<script setup>
const onClick = () => {
    alert('');
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