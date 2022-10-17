<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
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
    </nav>
</template>
<script setup>
import { useCartStore } from '../store/cart'

const cartStore = useCartStore();

</script>
<style scoped>

</style>