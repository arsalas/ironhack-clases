<template>
    <div class="hero-images">
        <img src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b211be2e88fb5411ed_Hero%20Image.png" alt="">
        <img class="float-card is-hidden-mobile img1" src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b1ac3e60b6651cd34d_Card%201.png" alt="">
        <img class="float-card is-hidden-mobile img2" src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800b17fe63a5ffdf92238_Card%202.png" alt="">
  </div>
</template>
<script setup>
</script>
<style scoped>
.hero-images{
    position: relative;
}

.float-card{
    position: absolute;
    max-width: 300px;
    object-fit: contain;
}

.img1{
    top:-5%;
    left:-5%;
   

}
.img2{
    bottom: -20%;
    right: -10%;
  
}

</style>