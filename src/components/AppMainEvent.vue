<script>
import { store } from "../store.js";
import AppMainEventCard from "./AppMainEventCard.vue";
import AppSectionTitle from './AppSectionTitle.vue';

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppSectionTitle, AppMainEventCard }
}
</script>

<template>
    <div class="wrapper py-5">
        <AppSectionTitle :Mono="store.titleSections[4].titleMono" :Purple="store.titleSections[4].titlePurple"
            :Green="store.titleSections[4].titleGreen" :class="'text-capitalized'" :class_align="'text-center'" />

        <div class="row row-cols-2 mt-5 pt-4">
            <div class="col mb-4" v-for="item in store.eventCardInfo" :key="item.name">
                <AppMainEventCard :where="item.where" :name="item.name" :day="item.day" :mth="item.mth" />
            </div>
        </div>

        <div class="text-center mt-4">
            <span class="text-secondary">Excited about our event? </span>
            <a class="ms_color_green fw-bold" href="">View all events &rarr;</a>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>