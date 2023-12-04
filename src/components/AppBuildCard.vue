<script>
export default {
    props: {
        title: String,
        img: String,
        text: String
    },
    methods: {
        getImgUrl(state) {
            return new URL(`../assets/img/${state}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card text-center border-0 h-100">
        <img :src="getImgUrl(img)" class="px-4 card-img-top h-50 object-fit-scale" :alt="title">
        <div class="card-body">
            <h5 class="card-title fw-semibold">{{ title }}</h5>
            <p class="card-text text-light-emphasis">{{ text }}</p>
            <a href="#" class="card-link ms_color_violet link-underline link-underline-opacity-0 fw-semibold ms_hover">Start
                now
                &rarr;</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.ms_hover {
    &:hover {
        color: $colorJungleGreen;
    }
}
</style>