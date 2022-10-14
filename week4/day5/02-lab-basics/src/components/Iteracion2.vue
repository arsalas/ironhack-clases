<template>
    <div>
        {{2 + 2}}
    </div>
    <div>
        {{holaMundo()}}
    </div>
</template>
<script setup>
const holaMundo = () => {
    return 'Hola mundo'
}
</script>
<style scoped>

</style>