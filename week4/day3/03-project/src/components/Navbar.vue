<template>
    <nav class="navbar container is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b7cb56a839fd8ed026_Circle.svg" width="112" height="28">
            </a>

            <a role="button" @click="toggleMenu" class="navbar-burger" :class="{'is-active': isOpen}" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>
                <a class="navbar-item">
                    Projects
                </a>
                <a class="navbar-item">
                    Services
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            Contact Us
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import {ref} from 'vue'
const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>
<style scoped>
.navbar{
    background-color: transparent;
}

.navbar-start{
    flex: 1;
    justify-content: center;
}
</style>