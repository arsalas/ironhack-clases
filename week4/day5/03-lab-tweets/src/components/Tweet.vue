<template>
    <div class="tweet">
        <ProfileImage :image="props.tweet.user.image" />
        <div class="body">
            <div class="top">
                <User :name="props.tweet.user.name" :handle="props.tweet.user.handle" />
                <!-- <User :userData="{name: props.tweet.user.name, handle: props.tweet.user.handle}" /> -->
                <Timestamp :timestamp="props.tweet.timestamp" />
            </div>
            <Message :message="props.tweet.message" />
            <Action />
        </div>
        <i class="fas fa-ellipsis-h"></i>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ProfileImage from './ProfileImage.vue'
import User from './User.vue';
import Timestamp from './Timestamp.vue';
import Message from './Message.vue';
import Action from './Actions.vue'

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