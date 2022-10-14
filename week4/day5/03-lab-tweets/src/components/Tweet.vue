<template>
    <div class="tweet">
        <img :src="props.tweet.user.image" class="profile" alt="profile" />

        <div class="body">
            <div class="top">
                <span class="user">
                    <span class="name">{{props.tweet.user.name}}</span>
                    <span class="handle">@{{props.tweet.user.handle}}</span>
                </span>

                <span class="timestamp">{{props.tweet.timestamp}}</span>
            </div>

            <p class="message">
                {{props.tweet.message}}
            </p>

            <div class="actions">
                <!-- Font Awesome icons -->
                <i class="far fa-comment"></i>
                <i class="fas fa-retweet"></i>
                <i class="far fa-heart"></i>
                <i class="fas fa-share"></i>
            </div>
        </div>

        <i class="fas fa-ellipsis-h"></i>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    tweet: Object
})
// No da informacion del tipo de prop que recibes
// const props = defineProps(['tweet'])
</script>
  
<style scoped>
a {
    color: #42b983;
}
</style>