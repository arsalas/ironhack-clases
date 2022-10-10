<template>
    <div class="cont">Hello World</div>
    {{title}}
</template>
<script>
// Options api
export default {
    data(){
        return{
            // Creamos las variables que vincularemos al html
            title: 'Componente Options api',
            subtitle: 'Subtitulo',
        }
    },
    methods: {
        // Crearemos las funciones que vamos a utilizar
        newFunc(){
            console.log('funcion');
            // Para acceder a una variable tenemos que usar el this.nombre
            this.title = 'Variable editada'
        },
        newFunc2(){
            console.log('otra funcion')
        }
    }
}
</script>
<style scoped>
</style>