<script>
import { store } from "../store.js";
import AppSectionTitle from './AppSectionTitle.vue';

export default {
    data() {
        return {
            store,
        }
    },
    components: { AppSectionTitle }
}
</script>

<template>
    <div class="wrapper my-5 py-5">
        <div class="d-flex mt-5">
            <div style="width: 40%;">
                <div class="w-75">
                    <AppSectionTitle :Mono="store.titleSections[2].titleMono" :Purple="store.titleSections[2].titlePurple"
                        :Green="store.titleSections[2].titleGreen" :class="'text-capitalize'" />
                </div>

                <ul class="list-unstyled my-4 text-secondary">
                    <li class="mb-2" v-for="item in store.learnList" :key="item">
                        <i class="fa-solid fa-check ms_color_green"></i>
                        <span class="ms-2">{{ item }}</span>
                    </li>
                </ul>

                <button type="button" class="btn btn-success fw-bold border-0 ms_button mt-2">
                    Get started fro free
                </button>
            </div>

            <div class="ms-5 mb-5 position-relative">
                <img class="mb-5" src="../assets/img/home-5-image-01.png" alt="image">
                <img src="../assets/img/underlay-shape-grey.svg" alt="imageback" class="ms_img position-absolute">
                <img src="../assets/img/maxcoach-shape-05.png" alt="imageback" class="ms_img_two position-absolute">
            </div>
        </div>

        <div class="d-flex mt-5 align-items-center justify-content-between">
            <div class="ps-5 position-relative">
                <img src="../assets/img/home-5-image-02.png" alt="image" class="ps-4">
                <img src="../assets/img/underlay-shape-grey.svg" alt="image" class="ms_img_three position-absolute">
                <img src="../assets/img/maxcoach-shape-07.png" alt="image" class="ms_img_four position-absolute">
                <img src="../assets/img/maxcoach-shape-01.png" alt="image" class="ms_img_five position-absolute">
                <span class="p-2 rounded-circle d-inline-block ms_span position-absolute">
                    <span
                        class="p-4 rounded-circle d-inline-block position-absolute top-50 start-50 translate-middle"></span>
                </span>

            </div>

            <div class="ms-5" style="width: 47%;">
                <div>
                    <AppSectionTitle :Mono="store.titleSections[3].titleMono" :Purple="store.titleSections[3].titlePurple"
                        :Green="store.titleSections[3].titleGreen" :class="'text-lowercase'" />
                    <span class="h1 ms_h1 fw-bold ms_color_violet">anytime!</span>
                </div>
                <p class="my-4 text-secondary">Save lessons for later and revise or write notes at any time and on
                    multiple
                    device on your
                    way. Never
                    interfere with activities of enjoyment or other precious moments.
                </p>
                <button type="button" class="btn btn-success fw-bold border-0 ms_button mt-2">
                    Download Our App
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.ms_img {
    width: 450px;
    top: 22%;
    left: -22%;
    z-index: -1;
}

.ms_img_two {
    width: 180px;
    top: 48%;
    left: 80%;
    z-index: -1;
}

.ms_img_three {
    width: 450px;
    top: 19%;
    left: -20%;
    z-index: -1;
}

.ms_img_four {
    width: 190px;
    top: 57%;
    left: 85%;
    z-index: -1;
}

.ms_img_five {
    width: 135px;
    top: 47%;
    left: -41%;
    z-index: -1;
}

.ms_span {
    background-color: $colorSpanShape;
    width: 60px;
    aspect-ratio: 1;
    top: 10%;
    right: -22%;

    span {
        background-color: white;
        width: 30px;
        aspect-ratio: 1;
    }
}

.ms_width {
    width: 50%;
}
</style>