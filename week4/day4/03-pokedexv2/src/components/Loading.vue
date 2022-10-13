<template>
    <div class="loading">
        <figure class="image is-64x64">
            <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokemon-ball-png-1.png">
        </figure>
        Loading
    </div>
</template>
<script setup>
</script>
<style scoped>
.loading {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
    text-shadow: 1px 1px 2px white;
}

/* tipo de animacion, si queremos que se repita infinitamente el tiempo que tarda en completarse y linear pra que se suavize la animacion */
img {
    animation: loading-spin infinite 1s linear;
}

/* keyframes creamos una animacion
loading-spin es el nombre que le damos
*/
@keyframes loading-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>