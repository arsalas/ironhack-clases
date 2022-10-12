<template>
    <div class="section">
        <div class="container">

            <h1 class="title">Our Services</h1>
            <div class="columns is-multiline">
                <div v-for="project in projects" class="column is-12-mobile is-6-tablet is-4-desktop">
                    <ServiceCard :title="project.title" :body="project.body" :image="project.image" />
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import ServiceCard from './ServiceCard.vue';

const projects = [
    {
        title: 'User Interface Design',
        body: 'Circle provides you with a stunning user interface design that is accessible to everyone.',
        image: 'https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800c80640053d31e16a2f_1.svg'
    },
    {
        title: 'User Experience Design',
        body: 'Circle always focuses on delivering the best user experience to your customers.',
        image: 'https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800c8833d6516808175d9_2.svg'
    },
    {
        title: 'Application Development',
        body: 'We develop high-quality mobile and web applications using the latest technology stack.',
        image: 'https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800c8904e902e319eacde_3.svg'
    }
]

</script>
<style scoped>

</style>