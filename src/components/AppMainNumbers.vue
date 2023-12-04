<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="ms_bg_gallery">
        <div class="wrapper d-flex justify-content-between p-5">
            <div class="numbers_card" v-for="item in store.numbersInfo">
                <h1 class="ms_h1 ms_color_green text-center fw-bold">{{ item.num }}</h1>
                <span class="text-uppercase font-monospace fw-bold text-center">{{ item.string }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>