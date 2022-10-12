<template>
    <section class="section">
        <div class="container">
            <div class="columns">

                <div class="column">
                    <img src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b7cb56a839fd8ed026_Circle.svg"
                        alt="">
                    <h3>
                        2972 Westheimer Rd. Santa Ana,
                        <br />
                        Illinois 85486
                    </h3>
                </div>
                <div class="column">
                    <SectionsFooter :sections="sections" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import SectionsFooter from './SectionsFooter.vue';

const sections = [
    'Team', 'Services', 'About As', 'Press', 'Projects', 'Privacy Lolicy'
]

</script>
<style scoped>
h3 {
    font-size: 1.2rem;
    color: #6b708d;
}

.section {
    padding-bottom: 100px;
}
</style>