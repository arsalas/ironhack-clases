<template>
    <section class="section">
    <div class="container">
        <!-- columns convierte en 12 columnas el width que tiene -->
        <div class="columns is-multiline">
            <!-- column digo cuantas columnas quiero que ocupe el elemento -->
            <div class="column is-12-mobile is-12-tablet is-6-desktop hero-center">
                <HeroText />
            </div>
            <div class="column is-12-mobile is-12-tablet is-6-desktop">
                <HeroImage />
            </div>
        </div>
    </div>
    </section>
</template>
<script setup>
import HeroText from './HeroText.vue';
import HeroImage from './HeroImage.vue';
</script>
<style scoped>
.hero-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>