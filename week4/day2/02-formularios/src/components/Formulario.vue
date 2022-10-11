<template>
    <div class="section">
        <!-- Con @ indicamos que vamos a escuchar un evento (addEventListener) y le decimos la funcion que vamos a llamar -->
        <!-- con .prevent aplica el preventDefault y no envia el formulario -->
        <form @submit.prevent="onSubmit()">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <!-- v-model vincula el input a una variable -->
                    <input v-model="name" class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                    <div class="select">
                        <!-- asignamos el v-model al select y en options daremos un value al valor del input cuando este seleccionado -->
                        <select v-model="subject">
                            <option value="opt1">Select dropdown</option>
                            <option value="opt2">With options</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea v-model="message" class="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input v-model="check" type="checkbox">
                        I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <!-- los radio buttons se les asigna el mismo v-model a cada opcion
                    en el value asignaremos el valor que tendra la variable cuando este marcada esa opcion -->
                    <label class="radio">
                        <input v-model="radio" value="yes" type="radio" name="question">
                        Yes
                    </label>
                    <label class="radio">
                        <input v-model="radio" value="no" type="radio" name="question">
                        No
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button type="submit" class="button is-link">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';

// ref indica que una variable es reactiva
// reactiva quiere decir que cuando cambia el valor el html actualiza su valor
const name = ref('');
const subject = ref('');
const message = ref('');
const check = ref('');
const radio = ref('');

const onSubmit = () => {
    console.log('formulario enviado')
}

</script>
<style scoped>

</style>