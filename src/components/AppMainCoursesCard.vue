<script>
export default {
    props: {
        title: String,
        name: String,
        nameImg: String,
        img: String,
        price: String,
        lessons: String,
        students: String
    },
    methods: {
        getImgUrl(state) {
            return new URL(`../assets/img/${state}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card border-0 h-100">
        <img :src="getImgUrl(img)" class="card-img-top" :alt="img">
        <div class="card-body">
            <img :src="getImgUrl(nameImg)" class="ms_img rounded-circle" :alt="nameImg">
            <h5 class="card-title">{{ title }}</h5>

            <span class="card-text">{{ lessons }}</span>
            <span class="card-text">Lessons</span>


            <span class="card-text">{{ students }}</span>
            <span class="card-text"> Students</span>


        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
</style>