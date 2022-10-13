<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" :to="{name:home}">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                    height="28">
            </router-link>
        </div>
    </nav>
</template>
<script setup>
</script>
<style scoped>
/* sitcky deja pa posicion en fixed cuando llega a donde hemos indicado(top en este ejemplo) */
.navbar {
    background-color: #ed1a23;
    position: sticky;
    top: 0px;
    justify-content: center;
    display: flex;
    /* position: fixed; */
}
</style>