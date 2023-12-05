<script>
import { store } from "../store.js";
import AppSectionTitle from "./AppSectionTitle.vue";
import AppMainCoursesCard from "./AppMainCoursesCard.vue";

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppSectionTitle, AppMainCoursesCard }
}
</script>

<template>
    <div class="wrapper py-5">
        <AppSectionTitle :Mono="store.titleSections[1].titleMono" :Purple="store.titleSections[1].titlePurple"
            :Green="store.titleSections[1].titleGreen" :class="'text-capitalize'" />

        <div class="row row-cols-3 my-5">
            <div class="col mb-4" v-for="(item, index) in store.coursesCardInfo" :key="index">
                <AppMainCoursesCard :title="item.title" :name="item.name" :nameImg="item.nameImg" :img="item.img"
                    :price="item.price" :lessons="item.lessons" :students="item.students" />
            </div>
        </div>

        <div class="text-center">
            <button type="button" class="btn btn-success fw-bold border-0 ms_button">
                View all courses
                <i class="fa-solid fa-arrow-right-long ms-2"></i>
            </button>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>