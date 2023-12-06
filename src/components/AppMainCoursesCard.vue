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
    <div class="card border-0 h-100 position-relative bg-transparent">
        <img :src="getImgUrl(img)" class="card-img-top" :alt="img">
        <div class="card-body p-4 d-flex flex-column justify-content-between gap-3">
            <div>
                <img :src="getImgUrl(nameImg)" class="ms_img rounded-circle" :alt="nameImg">
                <span class="card-text text-secondary ms-3">{{ name }}</span>
                <h5 class="card-title fw-bold mt-3">{{ title }}</h5>
            </div>

            <div class="d-flex gap-3">
                <div>
                    <i class="fa-regular fa-file-lines text-secondary me-2"></i>
                    <span class="card-text">{{ lessons }}</span>
                    <span class="card-text"> Lessons</span>
                </div>

                <div>
                    <i class="fa-regular fa-user text-secondary me-2"></i>
                    <span class="card-text">{{ students }}</span>
                    <span class="card-text"> Students</span>
                </div>
            </div>

            <span class="text-white text-center py-2 position-absolute top-0 end-0 fw-bold ms_badge">{{ price
            }}</span>

        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.card {
    &:hover {
        background-color: white !important;
        box-shadow: 1px 1px 50px 6px rgb(221, 221, 221);
    }
}

.ms_badge {
    background-color: $colorJungleGreen;
    width: 70px;
    border-radius: 0 0 0 .4rem;
}
</style>