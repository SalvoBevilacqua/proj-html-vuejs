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
    <div class="wrapper">
        <div class="d-flex">
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

            <div class="ms-5 mb-5">
                <img class="mb-5" src="../assets/img/home-5-image-01.png" alt="image">
            </div>
        </div>

        <div class="d-flex mt-5 align-items-center justify-content-between">
            <div>
                <img src="../assets/img/home-5-image-02.png" alt="image" class="ps-4">
            </div>

            <div class="ms-5 border" style="width: 50%;">
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
.ms_width {
    width: 50%;
}
</style>