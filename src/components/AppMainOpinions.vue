<script>
import { store } from "../store.js";
import AppSectionTitle from "./AppSectionTitle.vue";
export default {
    data() {
        return {
            store,
        };
    },
    components: { AppSectionTitle }
}
</script>

<template>
    <div class="wrapper">
        <AppSectionTitle :Mono="store.titleSections[5].titleMono" :Purple="store.titleSections[5].titlePurple"
            :Green="store.titleSections[5].titleGreen" :class_align="'text-center'" />
    </div>
</template>

<style lang="scss" scoped></style>