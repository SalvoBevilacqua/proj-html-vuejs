<script>
import { store } from "../store.js";
import AppBuildCard from "./AppBuildCard.vue";
import AppBuildAccordion from "./AppBuildAccordion.vue";

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppBuildCard, AppBuildAccordion }
}
</script>

<template>
    <div id="build">
        <div class="wrapper py-5">
            <div class="title text-center">
                <p class="text-uppercase font-monospace">start learning coding languages</p>
                <span class="h1 ms_h1 fw-bold ms_color_violet">Build Your Dream </span>
                <span class="ms_h1 ms_color_green text-uppercase fw-lighter">today</span>
            </div>

            <div class="row row-cols-4">
                <div class="col" v-for="item in store.buildCardInfo" :key="item.title">
                    <AppBuildCard :title="item.title" :img="item.img" :text="item.text" />
                </div>
            </div>

            <div class="d-flex">
                <div class="w-50">
                    <img src="../assets/img/about-us-03-image-01.png" alt="image" class="float-start">
                </div>

                <div class="w-50">
                    <p class="text-uppercase font-monospace">dream with <strong>maxcoach</strong></p>
                    <span class="h1 ms_h1 fw-bold ms_color_violet">Construct A </span>
                    <span class="ms_h1 ms_color_green fw-lighter">Stunning</span>
                    <span class="h1 ms_h1 fw-bold ms_color_violet"> Career Perspective</span>
                    <AppBuildAccordion />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>