<template>
    <section class="section">
        <div class="container orbit-section">
            <h1 class="title">Hear What Our Clients Have to Say</h1>
            <p>"Circle helped us through every stage of our startup. We really enjoyed working with you."</p>
            <div class="profile-image">
                <img src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800d1117d92108a29dcdc_Profile.png" alt="">
                <div>
                    <div class="name">Kristin Watson</div>
                    <div class="web">Booking.com</div>
                </div>
            </div>
            <img class="emoji is-hidden-mobile tl" src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800d0de0d47a423a1b6f5_Memoji%201.png" alt="">
            <img class="emoji is-hidden-mobile tr" src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800d1e692624930c31656_Memoji%204.png" alt="">
            <img class="emoji is-hidden-mobile bl" src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800d0988bb382116d2d41_Memoji%203.png" alt="">
            <img class="emoji is-hidden-mobile br" src="https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800d0cb56a892238ed121_Memoji%202.png" alt="">
        </div>
    </section>
</template>
<script setup>
</script>
<style scoped>
.orbit-section {
    height: 500px;
    background-color: #292e47;
    background-image: url("https://uploads-ssl.webflow.com/61f7ff5634c23c5bef9d2e54/61f800d0da83d2876b6ccdba_Orbit.png");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    position: relative;
}

.title{
    color: #eee;
    font-weight: bold;
}

p{
    color:#ffc600;
    font-size: 1.3rem;
    font-weight: 500;
}

.profile-image img{
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
}
.profile-image{
    display: flex;
}

.profile-image > div{
    margin-left: 0.8rem;
}

.name{
    color:#a2d6f9;
    font-size: 1.1rem;
}

.web{
    color: #eee;
}

.emoji{
    position: absolute;
    width: 100px;
}

.tl{
    top: 0px;
    left: 0px;
}

.tr{
    top:0px;
    right: 0px;
}

.bl{
    bottom: 0px;
    left:0px
}

.br{
    bottom: 0px;
    right: 0px;
}

</style>