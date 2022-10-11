<template>
    <div class="section">
        <div class="container">

            <h1 class="title">Recent Projects</h1>
            <div class="columns is-multiline">
                <div v-for="project in projects" class="column is-12-mobile is-6-tablet is-4-desktop">
                    <ProjectCard :title="project.title" :body="project.body" :image="project.image" />
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import ProjectCard from './ProjectCard.vue';

const projects = [
    {
        title: 'Simplify',
        body: 'UI Design & App Development',
        image: 'https://uploads-ssl.webflow.com/61fead28c13f346b71e5645f/61feadb7386a4ce8e1606b95_1.jpg'
    },
    {
        title: 'Dashcoin',
        body: 'Web Development',
        image: 'https://uploads-ssl.webflow.com/61fead28c13f346b71e5645f/61feae20bffd880ac1b46d5d_2.jpg'
    },
    {
        title: 'Vectorify',
        body: 'User Experience Design',
        image: 'https://uploads-ssl.webflow.com/61fead28c13f346b71e5645f/61feae3dbd995716808be594_3.jpg'
    }
]

</script>
<style scoped>

</style>