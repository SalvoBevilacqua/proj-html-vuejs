<script>
import { store } from "../store.js";
import AppSectionTitle from "./AppSectionTitle.vue";
export default {
    data() {
        return {
            store,
        };
    },
    components: { AppSectionTitle },
    methods: {
        getImgUrl(state) {
            return new URL(`../assets/img/${state}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="ms_bg_gallery p-5">
        <div class="wrapper my-5">
            <AppSectionTitle :Mono="store.titleSections[5].titleMono" :Purple="store.titleSections[5].titlePurple"
                :Green="store.titleSections[5].titleGreen" :class_align="'text-center'" />


            <div class="row row-cols-3 ms_margin">
                <div class="col" v-for="(item, index) in store.opinionsCardInfo" :key="index">
                    <div class="card text-center pt-5 px-5 border-0 position-relative ms_height">
                        <p class="ms_color_violet my-4">{{ item.text }}</p>
                        <p class="text-uppercase fw-bold"> {{ item.name }}</p>
                        <p class="text-secondary">{{ item.pos }}</p>
                        <img class="rounded-circle position-absolute top-0 start-50 translate-middle"
                            :src="getImgUrl(item.img)" :alt="item.img">
                    </div>
                </div>
            </div>

            <div class="text-center">
                <i class="fa-solid fa-circle ms_color_violet"></i>
                <i class="fa-solid fa-circle fa-2xs text-secondary ms-3 my-5"></i>
                <i class="fa-solid fa-circle fa-2xs text-secondary ms-3 my-5"></i>
                <i class="fa-solid fa-circle fa-2xs text-secondary ms-3 my-5"></i>
            </div>

            <div class="ms_color_violet text-center fs-2 fw-bold my-5">
                <span>Start today for getting <span class="ms_color_green fw-normal">Online Certification</span></span>
                <p>You can be your own guiding star with our help!</p>
            </div>

            <div class="text-center my-5">
                <button type="button" class="btn btn-success fw-bold border-0 ms_button ms_button_padding">
                    Get started now
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_margin {
    margin-top: 7rem;
}

.ms_button_padding {
    padding: 1rem 5rem;
}

.ms_height {
    height: 300px;
}

img {
    width: 120px;
}
</style>