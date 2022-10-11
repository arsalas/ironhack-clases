<template>
    <div class="borde">
        Componente Slot
        <div>
            <!-- Esta etiqueta es propia de vue -->
            <!-- Dentro de slot pondra el contenido que este dentro de las etiquetas del componente -->
           <!-- Si el componente no recibe texto escribira el 
            contenido de la etiqueta slot -->
            <slot>Texto por defecto</slot>
        </div>
        Fin Componente
    </div>
</template>
<script setup>
</script>
<style scoped>
.borde{
    border: solid 1px #333;
    margin-bottom: 5px;
}
</style>