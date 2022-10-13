<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png">
            </router-link>
        </div>
    </nav>
</template>
<script setup>
</script>
<style scoped>
.navbar {
    background-color: #ED1A23;
    position: sticky;
    top: 0px;
    justify-content: center;
}

.navbar .navbar-item {
    color: #eee;
}

@media (max-width: 1023px) {
    .navbar {
        display: flex;
        justify-content: center;
    }
}
</style>