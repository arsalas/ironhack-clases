<template>
    <section class="section">
        <div class="container contact-section">
            <div>
                <div class="title">Do you have any questions?</div>
                <div class="subtitle">Let us help you!</div>
            </div>
            <form @submit.prevent="onSubmit">
                <div class="columns mt-5">
                    <div class="column is-8">
                        <p class="control has-icons-left">
                            <input v-model="email" class="input" type="text" placeholder="Enter your email">
                            <span class="icon is-small is-left mt-1">
                                <img src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800bdf78ad83daac42661_Mail.svg"
                                    alt="">
                            </span>
                        </p>

                    </div>
                    <div class="column is-4">
                        <button type="submit" class="button is-primary is-fullwidth">Suscribe</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup>

import { ref } from 'vue'

const email = ref('');
const onSubmit = () => {
    alert('Email enviado a ' + email.value)
}

</script>
<style scoped>
.contact-section {
    background-color: #ffc600;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.control {
    height: 100%;
}

.input {
    height: 50px;
    border-radius: 0px;
}

.title {
    color: #292e47;
    font-weight: bold;
}

.subtitle {
    font-size: 0.99rem;
    font-weight: 400;
    color: #6b708d;
}
</style>