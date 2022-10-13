<template>
    <div class="loading">

        <figure class="image is-64x64">
            <img src=" https://www.freeiconspng.com/thumbs/pokeball-png/pokemon-ball-png-1.png">
        </figure>
        Loading
    </div>
</template>
<script setup>
</script>
<style scoped>
img {
    animation: loading-spin infinite 1s linear;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
    height: 100%;
}

@keyframes loading-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }

    /* 0% {
    filter: drop-shadow(#000 0px 5px 15px 0px);
		transform: translatey(0px);
	}
	50% {
    filter: drop-shadow(#000 0px 25px 15px 0px);
		transform: translatey(-3px);
	}
	100% {
    filter: drop-shadow(#000 0px 5px 15px 0px);
		transform: translatey(0px);
	} */
}
</style>