<script>
import { store } from "../store.js";
import AppMainBuild from "./AppMainBuild.vue";
import AppMainNumbers from "./AppMainNumbers.vue";
import AppMainCourses from "./AppMainCourses.vue";
import AppMainLearn from "./AppMainLearn.vue";
import AppMainEvent from "./AppMainEvent.vue";
import AppMainOpinions from "./AppMainOpinions.vue";

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppMainBuild,
        AppMainNumbers,
        AppMainCourses,
        AppMainLearn,
        AppMainEvent,
        AppMainOpinions

    }
}
</script>

<template>
    <AppMainBuild />
    <AppMainNumbers />
    <AppMainCourses />
    <AppMainLearn />
    <AppMainEvent />
    <AppMainOpinions />
</template>

<style lang="scss" scoped></style>