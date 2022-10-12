<template>
    <section class="section">
        <div class="container">
            <div class="columns is-multiline is-mobile is-centered">
                <div class="column brand-container is-6-mobile is-6-tablet is-2-desktop" v-for="brand, index in brands">
                    <img class="image" :class="{'is-hidden-touch':index === brands.length - 1}" :src="brand" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const brands = [
    'https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b780a3b137cb739a90_Airbnb%20Logo.svg',
    'https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b79add40db8a6896bf_Google%20Logo.svg',
    'https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b752675aadf1d03a03_Microsoft%20Logo.svg',
    'https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b7ac3e6078471cd3c3_FedEx%20Logo.svg',
    'https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b7425046dbed56ff16_Amazon%20Logo.svg'
]
</script>
<style scoped>


.brand-container{
    display: flex;
    justify-content: center;
}
</style>