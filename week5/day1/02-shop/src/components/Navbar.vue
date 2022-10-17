<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" :to="{name: 'home'}">
                    Home
                </router-link>

                <router-link class="navbar-item" :to="{name: 'cart'}">
                    Cart
                    <span class="ml-2 tag is-danger is-rounded">
                        {{cartStore.products.length}}
                    </span>
                </router-link>


            </div>


        </div>
    </nav>
</template>
<script setup>
import { useCartStore } from '../store/cart'

const cartStore = useCartStore();

</script>
<style scoped>

</style>